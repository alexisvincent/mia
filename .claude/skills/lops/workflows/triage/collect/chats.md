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
mcp__mia-local__get_beeper_chat_cursors
mcp__mia-local__get_beeper_chat_preferences
```

**Cursors** returns `{data: {cursors: [{chat_id, cursor}, ...]}, last_updated}` for all previously processed chats.
**Preferences** returns `{data: {preferences: [{chat_id, always_ignore}, ...]}, last_updated}` for chat filtering preferences.

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

### 3. User Selects Chat to Process
Present the list of chats with new activity and ask user which one to process.

### 4. Load Messages with Context
For the selected chat, retrieve messages:
- **Recent messages**: From cursor to present (all new activity)
- **Historical context**: 20 messages older than the cursor

This ensures we don't miss anything and have proper context.

```
mcp__beeper__list_messages
- chatID: <selected chat>
- Use cursor and pagination to get appropriate range
```

### 5. Analyze Messages for Actionable Items
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

**Basically:** Anything that should go through the capture process.

### 6. Create Triage Issues
For each identified item:
- Create Linear issue in Triage state
- Title: Clear next action or description
- Description: Include message context and link back to original
- Labels: Add source channel tag
- Team: lops (default)

```
mcp__linear__create_issue
- team: "lops"
- state: "Triage"
- title: <actionable next action>
- description: <context from message + link>
- labels: [channel tag]
```

### 7. Update Cursor and Preferences
After processing, update the cursor for this chat:
```
mcp__mia-local__update_beeper_chat_cursors
- Full replacement with: { cursors: [...all existing cursors..., {chat_id: "chatID", cursor: "latest_cursor"}] }
- IMPORTANT: This replaces ALL cursors, so you must include existing cursors from step 1
```

Optionally update preferences if user wants to ignore this chat in future:
```
mcp__mia-local__update_beeper_chat_preferences
- Full replacement with: { preferences: [...all existing preferences..., {chat_id: "chatID", always_ignore: true}] }
- IMPORTANT: This replaces ALL preferences, so you must include existing preferences from step 1
```

**Note:** Both tools perform full replacement operations, not partial updates. Always get current state first, then include all existing items plus any new/updated ones.

### 8. Continue or Complete
Ask user if they want to process another chat or complete the collect session.

## MCP Tools Used

**State Management:**
- `mcp__mia-local__get_beeper_chat_cursors` - Get current cursor state for all chats
- `mcp__mia-local__update_beeper_chat_cursors` - Save progress after processing (partial update)
- `mcp__mia-local__get_beeper_chat_preferences` - Get chat filtering preferences
- `mcp__mia-local__update_beeper_chat_preferences` - Update preferences (e.g., always_ignore)

**Beeper/Chat:**
- `mcp__beeper__get_accounts` - List available accounts with their IDs (WhatsApp, LinkedIn, etc.)
- `mcp__beeper__search_chats` - Find chats with activity after cursor (use accountIDs from get_accounts)
- `mcp__beeper__list_messages` - Retrieve messages with context window
- `mcp__beeper__get_chat` - Get chat metadata if needed

**Linear:**
- `mcp__linear__create_issue` - Create Triage issues
- `mcp__linear__list_issue_labels` - Get available labels for tagging

## Workflow Example

```
1. Get state:
   - Cursors → {data: {cursors: [{chat_id: "chat-123", cursor: "cursor_xyz"}]}, last_updated: "..."}
   - Preferences → {data: {preferences: [{chat_id: "chat-456", always_ignore: true}]}, last_updated: "..."}
   - Accounts → Get WhatsApp account ID: "local-whatsapp_ba_..."

2. Search chats:
   - accountIDs: ["local-whatsapp_ba_..."] (WhatsApp only)
   - lastActivityAfter: "2025-01-10T00:00:00Z"
   - Results: chat-123 (last activity: 2025-01-10T15:30:00Z)
             chat-789 (last activity: 2025-01-10T14:20:00Z)
   - Filter out chat-456 (always_ignore: true)

3. User selects → chat-123

4. Load messages:
   - 20 messages before cursor (context)
   - All messages from cursor to now (new activity)

5. Analyze → Find 3 actionable items

6. Create 3 Linear issues in Triage

7. Update cursor → {cursors: [{chat_id: "chat-123", cursor: "cursor_xyz"}, {chat_id: "chat-123", cursor: "new_cursor"}]}
   (Full replacement - include all existing cursors plus the updated one)

8. Ask → Process another chat?
```

## Best Practices

### Context Window
- Always include 20 older messages for context
- This catches items that might have been mentioned earlier but are still relevant

### Extraction Criteria
- Err on side of over-capturing - better to triage out than miss
- Include enough context to understand without reading full chat
- Link back to original message for reference

### Cursor Updates
- Only update cursor after successful processing
- Use latest message timestamp as new cursor
- Keep cursor data for all processed chats

### Performance
- Process one chat at a time (user-guided)
- Provide clear summary of what was found
- Show how many items were captured

## Output

After processing each chat:
- ✅ Actionable items created as Linear Triage issues
- ✅ Cursor updated for the processed chat
- ✅ Summary of items captured
- ✅ Ready to process next chat or move to [Clarify](../clarify.md)
