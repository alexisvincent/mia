# Chats Collection Workflow

**Part of:** [Collect Workflow](../collect.md) - Inbox Streams automation

**Channels:** WhatsApp, iMessage, LinkedIn (via Beeper)

**Goal:** Scan chat messages for actionable items and create Linear Triage issues.

## Overview

This workflow processes chats one-by-one, identifying tasks and items that should be captured into the LOPS system. It uses cursor-based tracking to process new messages incrementally while including some historical context.

## The Process

### 1. Get Current State
Retrieve chat cursors and preferences to see where we left off:
```
mcp__mia-local__list_beeper_chat_cursors
mcp__mia-local__list_beeper_chat_preferences
```

**Cursors** returns `{items: [{_id: "chat_id", cursor: "ISO-timestamp"}, ...]}` for all previously processed chats.
**Preferences** returns `{items: [{_id: "chat_id", always_ignore: boolean}, ...]}` for chat filtering preferences.

### 2. Find Chats with New Activity

**IMPORTANT:** Before searching, you MUST have a time period from the user.
- If user says "process my WhatsApp" without a time period, ASK them: "From when should I search? (e.g., last 24 hours, last week, since Jan 1)"
- Do NOT assume or default to any time period
- The time period must be explicitly provided by the user

Search for chats with recent activity after the specified time:
```
mcp__beeper__search_chats
- lastActivityAfter: <ISO 8601 datetime from user's time period>
- accountIDs: [<actual account IDs>] (optional - to filter by specific accounts)
```

**Account Filtering (if needed):**
1. First call `mcp__beeper__get_accounts` to get actual account IDs
2. Account IDs look like: `local-whatsapp_ba_9jZcvPl73rIpeUYoInC8nfTQwLw`
3. Pass the full account ID string to `accountIDs` parameter
4. Do NOT pass generic names like "whatsapp" - use the actual ID from get_accounts

Identify chats where `lastActivity > cursor_timestamp` for that chat.
Filter out chats marked `always_ignore: true` in preferences.

### 3. Process Chats Automatically (One-by-One)
When user indicates they want to process chats continuously ("once you're done with a chat, move on to next one"), process ALL chats sequentially without asking between each one.

**Processing Modes:**
- **Manual Mode**: Present list, user selects each chat
- **Automatic Mode**: Process all chats from the list sequentially

### 4. Create Chat-Specific Todo List
Before processing each chat, create a fresh todo list for THAT SPECIFIC CHAT ONLY:

```
TodoWrite:
1. Load 50 messages from [Chat Name] chat (in_progress)
2. Analyze messages for actionable items (pending)
3. Check Linear for existing issues (pending)
4. Update Linear issue if new context found (pending)
5. Update cursor and complete (pending)
```

**Note:** Todo list is per-chat, not for all remaining chats.

### 5. Load 50 Messages (Not 20)
For the selected chat, retrieve **50 messages total** using pagination:

```
mcp__beeper__list_messages (First call)
- chatID: <selected chat>
- No cursor parameter (gets most recent 20)

mcp__beeper__list_messages (Second call)
- chatID: <selected chat>
- cursor: <from first call>
- direction: "before"

mcp__beeper__list_messages (Third call - if needed)
- chatID: <selected chat>
- cursor: <from second call>
- direction: "before"
```

**IMPORTANT:** Load 50 messages, not 20. This provides sufficient context.

### 6. Check Linear First (Before User Presentation)
Before presenting any actionable items to the user, search Linear for existing issues.

For each potential actionable item:
1. **Search Linear** using relevant keywords from the item
   ```
   mcp__linear__list_issues
   - team: "lops"
   - query: <relevant keywords>
   ```

2. **If existing issue found:**
   - Check if chat messages provide NEW context/information
   - Note this in your analysis to present to user

3. **If no existing issue found:**
   - Note this in your analysis to present to user

**CRITICAL: NEVER add comments automatically**
- Do NOT call `mcp__linear__create_comment` without user approval
- Always present your findings to the user FIRST
- Let the user decide whether to add comments or create new issues
- Only after user explicitly approves should you add comments or create issues

### 7. Analyze Messages and Present to User
Review the messages and identify anything that should be captured:

**Direct Actions:**
- Requests made to you ("Can you...", "Could you...", "Please...")
- Commitments you made ("I'll...", "I will...", "Let me...")
- Follow-ups needed ("Need to...", "Should...", "Have to...")

**Information to Track:**
- Items marked "interesting, check this out"
- References that need follow-up
- Information that should be saved/remembered

**Time-Sensitive:**
- Deadlines and time-bound commitments
- Meeting scheduling needs
- Urgent requests requiring response

**Present Analysis Format:**
```
## [Chat Name] Chat Analysis

I loaded 50 messages from this chat. Here's what I found:

### Recent Activity:
[Summary of recent messages with dates and key points]

### Linear Check:
[What existing issues were found, if any]

### My Analysis:
**Potential Actionable Items:**
1. [Item description]
2. [Item description]

**Questions for you:**
- [Questions about what action to take]

What would you like to do?
```

**CRITICAL:** Always present the analysis and ask the user before creating any new issues.

### 8. Create Triage Issues (Only If User Approves)
After user confirms what to create:

```
mcp__linear__create_issue
- team: "lops"
- state: "Triage"
- title: <actionable next action>
- description: <context from message + link>
- labels: [channel tag if applicable]
```

### 9. Update Cursor and Preferences
After processing, update the cursor for this chat:
```
mcp__mia-local__update_beeper_chat_cursors
- id: "chatID" (the chat ID)
- cursor: "2025-11-07T11:59:11.000Z" (ISO 8601 timestamp of the most recent message processed)
```

If user says "always ignore this chat":
```
mcp__mia-local__update_beeper_chat_preferences
- id: "chatID" (the chat ID)
- always_ignore: true (full boolean value required)
```

**Note:** Both tools perform partial updates by ID. You only update the specific chat cursor/preference, not all of them. Always provide the complete document fields (e.g., both `id` and `cursor`, or both `id` and `always_ignore`).

### 10. Continue Automatically or Complete
- **If in Automatic Mode**: Immediately move to next chat in the list
- **If in Manual Mode**: Ask user if they want to process another chat or complete the collect session

## MCP Tools Used

**State Management:**
- `mcp__mia-local__list_beeper_chat_cursors` - List all chat cursors
- `mcp__mia-local__get_beeper_chat_cursors` - Get cursor for a specific chat by ID
- `mcp__mia-local__update_beeper_chat_cursors` - Update cursor for a specific chat (partial update by ID)
- `mcp__mia-local__delete_beeper_chat_cursors` - Delete cursor for a specific chat
- `mcp__mia-local__list_beeper_chat_preferences` - List all chat preferences
- `mcp__mia-local__get_beeper_chat_preferences` - Get preferences for a specific chat by ID
- `mcp__mia-local__update_beeper_chat_preferences` - Update preferences for a specific chat (partial update by ID)
- `mcp__mia-local__delete_beeper_chat_preferences` - Delete preferences for a specific chat

**Beeper/Chat:**
- `mcp__beeper__get_accounts` - List available accounts with their IDs (WhatsApp, LinkedIn, etc.)
- `mcp__beeper__search_chats` - Find chats with activity after cursor (use accountIDs from get_accounts)
- `mcp__beeper__list_messages` - Retrieve messages with context window
- `mcp__beeper__get_chat` - Get chat metadata if needed

**Linear:**
- `mcp__linear__list_issues` - Search for existing issues before creating new ones
- `mcp__linear__create_issue` - Create Triage issues (only after checking Linear)
- `mcp__linear__create_comment` - Add context to existing issues
- `mcp__linear__list_issue_labels` - Get available labels for tagging

## Workflow Example

```
1. Get state:
   - Cursors → {items: [{_id: "chat-123", cursor: "2025-01-09T12:00:00.000Z"}]}
   - Preferences → {items: [{_id: "chat-456", always_ignore: true}]}
   - Accounts → Get WhatsApp account ID: "local-whatsapp_ba_..."

2. Search chats:
   - accountIDs: ["local-whatsapp_ba_..."] (WhatsApp only)
   - lastActivityAfter: "2025-01-10T00:00:00Z"
   - Results: chat-123 (last activity: 2025-01-10T15:30:00Z)
             chat-789 (last activity: 2025-01-10T14:20:00Z)
   - Filter out chat-456 (always_ignore: true)

3. Process chat-123 (automatic mode):

   a. Create todo list for chat-123

   b. Load 50 messages:
      - First call: 20 messages (most recent)
      - Second call: 20 messages (older, using cursor)
      - Third call: 10 messages (older, using cursor)

   c. Analyze messages → Find 3 potential actionable items

   d. Check Linear for each item:
      - Item 1: Found existing issue LOP-45 → Has new context to add
      - Item 2: No existing issue → Needs new issue
      - Item 3: Found existing issue LOP-28 → Already fully tracked, skip

   e. Present analysis to user:
      "Found 2 actionable items:
      - Item 1: Existing issue LOP-45 found with new context to add
      - Item 2: New item needs tracking
      - Item 3: Already tracked in LOP-28, no new context"

   f. User approves adding comment to LOP-45 and creating new issue

   g. Add comment to LOP-45 and create new Linear issue in Triage

   g. Update cursor:
      - mcp__mia-local__update_beeper_chat_cursors
      - id: "chat-123"
      - cursor: "2025-01-10T15:30:00.000Z"

   h. Immediately process chat-789 (automatic mode continues)

4. Complete all chats in list
```

## Best Practices

### Message Loading
- Always load 50 messages (not 20) for sufficient context
- Use pagination to load multiple batches
- This catches items that might have been mentioned earlier but are still relevant

### Linear Cross-Referencing
- **ALWAYS check Linear before presenting items to user**
- Search with relevant keywords from the actionable item
- Note when existing issues are found and whether new context exists
- Present findings to user and let them decide on adding comments or creating issues
- **NEVER add comments or create issues automatically without user approval**
- Only after user explicitly approves should you add comments or create new issues

### Todo List Management
- Create a fresh todo list for EACH chat being processed
- Todo list should be chat-specific, not global
- Mark tasks complete as you go (don't batch)
- Update list to reflect current chat being processed

### User Presentation
- Present clear analysis with sections: Recent Activity, Linear Check, My Analysis
- Always ask user before creating new issues
- When user says "nothing" or "next", update cursor and move to next chat
- When user says "always ignore this chat", update preferences

### Cursor Updates
- Only update cursor after successful processing and user confirmation
- Use latest message timestamp as new cursor
- Update cursor even if no new issues were created (marks chat as processed)

### Automatic Mode
- When user indicates to continue automatically, process all chats without asking between each
- Still present analysis and ask for user input on each chat's actionable items
- Move immediately to next chat after completing current one

## Output

After processing each chat:
- ✅ Actionable items created as Linear Triage issues
- ✅ Cursor updated for the processed chat
- ✅ Summary of items captured
- ✅ Ready to process next chat or move to [Clarify](../clarify.md)
