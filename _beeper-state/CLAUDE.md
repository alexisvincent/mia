# Beeper State Management System

This directory maintains a persistent index of all Beeper messages and conversations, enabling efficient incremental updates and contextual awareness.

## Directory Structure

```
beeper-state/
├── CLAUDE.md          # This file - complete documentation
├── index.json         # Global state and chat index
└── chats/            # Individual chat state files
    ├── aryan-raigangar.json
    ├── sf-sublets.json
    └── ... (one file per chat)
```

## Purpose

- **Persistent Memory**: Maintain conversation context across sessions
- **Incremental Updates**: Only fetch and process new messages since last sync
- **Action Tracking**: Extract and track action items from conversations
- **Efficient Processing**: Avoid re-processing old messages
- **Context Preservation**: Each conversation maintains its own evolving summary

## File Structures

### `index.json`

The global state file tracking all chats and last sync time.

**Structure:**
```json
{
  "lastSyncTime": "2025-11-03T21:49:18.000Z",
  "chatIndex": {
    "!aaj01Z6Hc5YbbJ_goFa3jKCqfgQ:ba_9jZcvPl73rIpeUYoInC8nfTQwLw.local-whatsapp.localhost": "aryan-raigangar.json",
    "!D9WTL-8zyNLi_o6_uXDXpFgtfGw:ba_9jZcvPl73rIpeUYoInC8nfTQwLw.local-whatsapp.localhost": "sf-sublets.json"
  },
  "metadata": {
    "version": "1.0.0",
    "totalChats": 2,
    "lastSyncDuration": 1.234
  }
}
```

**Fields:**
- `lastSyncTime`: ISO 8601 timestamp of last successful sync (null if never synced)
- `chatIndex`: Map of chatID → filename (without .json extension for display purposes, but files are stored as .json)
- `metadata.version`: Schema version for future migrations
- `metadata.totalChats`: Count of tracked chats
- `metadata.lastSyncDuration`: Time in seconds for last sync operation

### Per-Chat File (e.g., `chats/aryan-raigangar.json`)

Individual conversation state with context and recent messages.

**Structure:**
```json
{
  "chatId": "!aaj01Z6Hc5YbbJ_goFa3jKCqfgQ:ba_9jZcvPl73rIpeUYoInC8nfTQwLw.local-whatsapp.localhost",
  "name": "Aryan Raigangar",
  "type": "single",
  "accountID": "local-whatsapp_ba_9jZcvPl73rIpeUYoInC8nfTQwLw",
  "participants": [
    {
      "name": "Aryan Raigangar",
      "id": "@12pfVm3fDteVhLvtWh4LHw5J-22GewvXFO6JnqKZvkRrzdKE1XNr:local-whatsapp.localhost"
    },
    {
      "name": "Alexis Vincent",
      "id": "@lexvin:beeper.com"
    }
  ],
  "lastActivity": "2025-11-03T20:57:42.000Z",
  "lastMessageId": "1025",
  "lastSortKey": "451124086272",
  "context": {
    "summary": "Discussion about playing padel/tennis together. Aryan is interested but busy this week, suggested next week instead. Clarified it was a tennis racket, not padel.",
    "topics": ["padel", "tennis", "scheduling", "social"],
    "pendingActions": [
      {
        "action": "Schedule padel/tennis game for next week",
        "status": "pending",
        "createdAt": "2025-11-03T20:57:42.000Z",
        "linearIssueId": null
      }
    ],
    "keyPeople": ["Aryan Raigangar"],
    "lastUpdated": "2025-11-03T21:00:00.000Z"
  },
  "recentMessages": [
    {
      "id": "1025",
      "timestamp": "2025-11-03T20:57:42.000Z",
      "senderName": "Aryan Raigangar",
      "isSender": false,
      "text": "actually tennis racket haha"
    },
    {
      "id": "1024",
      "timestamp": "2025-11-03T20:57:36.000Z",
      "senderName": "Aryan Raigangar",
      "isSender": false,
      "text": "lets aim for next week? this week is crazy busy with dinners etc"
    },
    {
      "id": "1023",
      "timestamp": "2025-11-03T20:57:21.000Z",
      "senderName": "Aryan Raigangar",
      "isSender": false,
      "text": "so down!"
    }
  ],
  "metadata": {
    "messageCount": 12,
    "firstMessageDate": "2025-10-30T01:39:19.000Z",
    "isArchived": false,
    "isMuted": false
  }
}
```

**Fields:**
- `chatId`: Unique Beeper chat identifier
- `name`: Display name of chat
- `type`: "single" (1:1) or "group"
- `accountID`: Beeper account ID (e.g., WhatsApp, Matrix)
- `participants`: Array of participant objects with name and ID
- `lastActivity`: Timestamp of most recent message
- `lastMessageId`: ID of most recent message processed
- `lastSortKey`: Sort key from Beeper API for pagination
- `context.summary`: Natural language summary of conversation
- `context.topics`: Array of relevant topics/themes
- `context.pendingActions`: Array of extracted action items
- `context.keyPeople`: Notable people mentioned in conversation
- `context.lastUpdated`: When context was last regenerated
- `recentMessages`: Last N messages for quick reference (keep ~10-20)
- `metadata`: Additional tracking information

## Update Algorithm

### When to Run

Run this update process:
- Manually when requested ("update beeper state")
- On a schedule (e.g., every 15 minutes if building automation)
- Before querying conversation context

### Step-by-Step Process

#### 1. Initial Setup (First Run Only)

If `index.json` shows `lastSyncTime: null`:

```
1. Call: mcp__beeper__search_chats(limit=200)
2. For each chat returned:
   a. Create filename from chat name (sanitize, lowercase, hyphenate)
   b. Add to index.json chatIndex mapping
   c. Fetch latest 20 messages: list_messages(chatID)
   d. Create chat file with initial context
   e. Generate context summary from initial messages
3. Update index.json with current timestamp
4. Save all files
```

#### 2. Incremental Update (Subsequent Runs)

```
1. Read index.json to get lastSyncTime
2. Query updated chats: search_chats(lastActivityAfter=lastSyncTime, limit=200)
3. Handle pagination if needed (check for more results)
4. For each chat with activity:

   a. Check if chat exists in index:
      - If NEW: Create new chat file (follow initial setup for that chat)
      - If EXISTS: Load existing chat state file

   b. Fetch new messages:
      - Call list_messages(chatID)
      - Compare with lastMessageId to identify new messages
      - If using pagination, continue until reaching known lastMessageId

   c. Process new messages:
      - Append to recentMessages array (keep last 20)
      - Extract text content for context update

   d. Update context:
      - Combine: old context.summary + new messages
      - Generate updated summary using LLM
      - Extract new topics
      - Identify new action items
      - Update keyPeople if mentioned

   e. Update metadata:
      - Set new lastActivity timestamp
      - Set new lastMessageId
      - Set new lastSortKey
      - Increment messageCount
      - Set context.lastUpdated to current time

   f. Save updated chat file

5. Update index.json:
   - Set lastSyncTime to current timestamp
   - Update totalChats count
   - Record sync duration
6. Save index.json
```

#### 3. Context Generation Prompt Template

When updating context for a chat with new messages:

```
You are updating conversation context for a chat.

CHAT: {chat_name}
TYPE: {chat_type}
PARTICIPANTS: {participant_names}

PREVIOUS CONTEXT:
{old_context_summary}

PREVIOUS TOPICS: {old_topics}
PREVIOUS PENDING ACTIONS: {old_pending_actions}

NEW MESSAGES:
{formatted_new_messages}

TASK:
1. Generate an updated 2-3 sentence summary incorporating the new information
2. Update the topics list (add new topics, keep relevant old ones)
3. Identify any new action items or todos mentioned
4. List any new key people mentioned
5. Update status of existing pending actions if addressed in new messages

Return JSON:
{
  "summary": "...",
  "topics": ["topic1", "topic2"],
  "pendingActions": [
    {
      "action": "...",
      "status": "pending|completed|cancelled",
      "createdAt": "ISO timestamp",
      "linearIssueId": null
    }
  ],
  "keyPeople": ["person1", "person2"]
}
```

### Error Handling

- **API Rate Limits**: If rate limited, save partial progress and retry
- **Missing Chat Files**: If index references missing file, recreate from scratch
- **Invalid JSON**: If file corrupted, backup and regenerate
- **Network Errors**: Log error, keep old state, retry next sync

### Filename Sanitization

Convert chat names to safe filenames:
```
1. Lowercase
2. Replace spaces with hyphens
3. Remove emojis and special characters
4. Remove or replace slashes, colons, etc.
5. Truncate to reasonable length (e.g., 50 chars)
6. Add .json extension

Examples:
"Aryan Raigangar" → "aryan-raigangar.json"
"SF Sublets 🏠🚪🏘️" → "sf-sublets.json"
"+14159699735" → "14159699735.json"
```

## Beeper API Integration Notes

### Key API Methods

**`mcp__beeper__search_chats`:**
- Searches/lists chats with filtering
- Supports `lastActivityAfter` for incremental updates
- Returns up to 200 chats (default 50)
- Pagination via `cursor` and `direction` parameters
- Can filter by `accountIDs`, `inbox`, `type`, etc.

**`mcp__beeper__list_messages`:**
- Lists messages in a specific chat
- Returns paginated results with `hasMore` flag
- Use `cursor` and `direction` for pagination
- No explicit limit parameter visible, fetches reasonable batch

**`mcp__beeper__get_chat`:**
- Get detailed chat metadata
- Includes participants (configurable limit)
- Use for initial chat setup

### Pagination Strategy

For chats:
```
1. First call: search_chats(lastActivityAfter=X, limit=200)
2. Check response for pagination cursor
3. If more results: use returned cursor with direction='before'
4. Continue until no more results
```

For messages:
```
1. First call: list_messages(chatID)
2. Check hasMore flag
3. If true: use last message's cursor with direction='before'
4. Continue until hasMore=false or reach known lastMessageId
```

### Temporal Filtering

- Use `lastActivityAfter` to only get chats with new activity
- Format: ISO 8601 timestamp (e.g., "2025-11-03T21:49:18.000Z")
- Beeper's lastActivity field is automatically maintained

## Usage Instructions for LLMs

When asked to "update beeper state" or "sync beeper messages":

1. **Read this file** to understand the system
2. **Read `index.json`** to get current state
3. **Follow the Update Algorithm** (section above)
4. **Use Beeper MCP tools** to fetch data
5. **Write updated files** back to this directory
6. **Report summary** of what was updated

Example summary report:
```
Beeper sync completed:
- Updated 5 chats with new messages
- Created 2 new chat files
- Extracted 3 new action items
- Sync took 2.3 seconds
- Last sync: 2025-11-03T22:15:00.000Z
```

## Integration with Linear

When new action items are identified:
- Check if action already has `linearIssueId`
- If not, consider creating Linear issue using `mcp__linear__create_issue`
- Store returned issue ID in `pendingActions[].linearIssueId`
- Use LOPS team (ID: c901c8db-b830-4443-a192-82befd817acb)
- Apply appropriate labels (e.g., "Executable" if ready to act)

## Maintenance

### Periodic Cleanup
- Archive very old chats (no activity in 6+ months)
- Trim `recentMessages` to last 20 if it grows larger
- Backup state files before major updates

### Schema Migrations
- Check `metadata.version` in index.json
- Implement migration scripts if schema changes
- Maintain backward compatibility where possible

---

*This state management system enables efficient, context-aware processing of Beeper messages with minimal API calls and persistent memory.*
