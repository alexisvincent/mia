# Chats Collection Workflow

**Part of:** [Collect Workflow](../collect.md) - Inbox Streams automation

**Channels:** WhatsApp, iMessage, LinkedIn (via Beeper)

**Goal:** Scan chat messages for actionable items and create Linear Triage issues.

## Overview

This workflow processes chats one-by-one, identifying tasks and items that should be captured into the LOPS system. It uses cursor-based tracking to process new messages incrementally while including historical context for previously processed chats.

## The Process

### 1. Load Next Unprocessed Chat

Call the automated tool that handles everything:
```
mcp__mia-local__load_next_unprocessed_chat_with_messages
```

**What this tool does automatically:**
- Searches chats from last 3 months
- Pages through results to find the next unprocessed chat
- Checks cursors to identify chats with new messages
- Filters out chats marked `always_ignore` in preferences
- Loads up to 100 messages intelligently:
  - **No cursor**: Loads 100 most recent messages
  - **Has cursor**: Loads new messages + 20 historical messages for context
- Splits messages into `unprocessed_messages` and `processed_messages`

**Returns:**
```json
{
  "chat": {
    "id": "chat_id",
    "title": "Chat Name",
    "last_activity": "2025-01-10T15:30:00.000Z",  // Most recent message timestamp - use this for cursor
    "participants": "[...]",
    "account_id": "...",
    "type": "group",
    "unread_count": 5,
    "unprocessed_messages": [...],  // New messages to process
    "processed_messages": [...]     // Historical context (empty if no cursor)
  }
}
```

Returns `null` when no more unprocessed chats are found.

### 2. Create Chat-Specific Todo List
Before processing each chat, create a fresh todo list for THAT SPECIFIC CHAT ONLY:

```
TodoWrite:
1. Analyze messages for actionable items (in_progress)
2. Check Linear for existing issues (pending)
3. Create/update Linear issues as needed (pending)
4. Update cursor and complete (pending)
```

**Note:** Todo list is per-chat, not for all remaining chats.

### 3. Analyze Messages
Focus your analysis on `unprocessed_messages` (the new messages since last cursor).
Use `processed_messages` for context if needed.

**Look for:**

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

### 4. Check Linear First (Before User Presentation)
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

### 5. Present Analysis to User

**Present Analysis Format:**
```
## [Chat Name] Chat Analysis

I found [X] unprocessed messages and [Y] processed messages for context.

### Recent Activity:
[Summary of unprocessed messages with dates and key points]

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

### 6. Create Triage Issues (Only If User Approves)
After user confirms what to create:

```
mcp__linear__create_issue
- team: "lops"
- state: "Triage"
- title: <actionable next action>
- description: <context from message + link>
- labels: [channel tag if applicable]
```

### 7. Update Cursor and Preferences
After processing, update the cursor for this chat using the `last_activity` timestamp from the tool response:
```
mcp__mia-local__update_beeper_chat_cursors
- id: <chat.id>
- cursor: <chat.last_activity>  // Use the timestamp from tool response
```

**IMPORTANT:** Use the `last_activity` field from the tool response, NOT the chat's original lastActivity. This is the timestamp of the most recent message loaded.

If user says "always ignore this chat":
```
mcp__mia-local__update_beeper_chat_preferences
- id: <chat.id>
- always_ignore: true
```

### 8. Loop: Load Next Chat
Call `mcp__mia-local__load_next_unprocessed_chat_with_messages` again to get the next chat.
Continue until the tool returns `null` (no more unprocessed chats).

## MCP Tools Used

**Primary Tool:**
- `mcp__mia-local__load_next_unprocessed_chat_with_messages` - Automated chat loading with intelligent message pagination and cursor-based tracking

**State Management:**
- `mcp__mia-local__update_beeper_chat_cursors` - Update cursor after processing chat
- `mcp__mia-local__update_beeper_chat_preferences` - Mark chats to always ignore

**Linear:**
- `mcp__linear__list_issues` - Search for existing issues before creating new ones
- `mcp__linear__create_issue` - Create Triage issues (only after user approval)
- `mcp__linear__create_comment` - Add context to existing issues (only after user approval)

## Workflow Example

```
1. Load next unprocessed chat:
   Call: mcp__mia-local__load_next_unprocessed_chat_with_messages

   Returns: {
     chat: {
       id: "chat-123",
       title: "Work Team",
       last_activity: "2025-01-10T15:30:00.000Z",
       unprocessed_messages: [25 messages],  // New since last cursor
       processed_messages: [20 messages]     // Historical context
     }
   }

2. Analyze ALL unprocessed messages:
   - Process ALL 25 unprocessed messages thoroughly
   - Use 20 processed messages for context
   - Identify ALL actionable items (not just a sample)
   - For each item, determine if it's a follow-up on an existing topic
   - Extract ALL relevant search terms for Linear matching

3. Check Linear using ALL identified search terms:
   - Search for each actionable item using its keywords
   - Search for potential follow-ups using their terms
   - Item 1 ("finish the report"): Found LOP-45 → Has new context to add
   - Item 2 ("book dentist appointment"): No issue → Needs new issue
   - Item 3 ("meeting notes ready"): Found LOP-28 → Already tracked, skip

4. Present to user:
   "Found 3 items in Work Team chat (from 25 unprocessed messages):
   - Item 1: Follow-up on existing LOP-45
   - Item 2: New item needs tracking
   - Item 3: Already tracked in LOP-28, skip"

5. User approves → Create/update issues

6. Update cursor:
   - id: "chat-123"
   - cursor: "2025-01-10T15:30:00.000Z" (from chat.last_activity)

7. Loop: Call load_next_unprocessed_chat_with_messages again
   - Continues until returns null
```

## Best Practices

### Message Analysis
- **Process ALL unprocessed messages** - Don't just sample, analyze every message
- Use processed messages for historical context
- Identify ALL actionable items, not just a few
- For each item, determine if it's a follow-up on existing work
- Extract comprehensive search terms for Linear matching

### Linear Cross-Referencing
- **Search using ALL identified search terms**
- Search for both new items and potential follow-ups
- **ALWAYS check Linear before presenting items to user**
- Note when existing issues are found and whether new context exists
- **NEVER add comments or create issues automatically without user approval**
- Only after user explicitly approves should you add comments or create new issues

### Todo List Management
- Create a fresh todo list for EACH chat being processed
- Todo list should be chat-specific, not global
- Mark tasks complete as you go (don't batch)

### User Presentation
- Present clear analysis with sections: Recent Activity, Linear Check, My Analysis
- Always ask user before creating new issues
- When user says "nothing" or "next", update cursor and move to next chat
- When user says "always ignore this chat", update preferences

### Cursor Updates
- Always use `chat.last_activity` from tool response (NOT original chat lastActivity)
- Update cursor after successful processing and user confirmation
- Update cursor even if no new issues were created (marks chat as processed)

### Looping
- Continue calling `load_next_unprocessed_chat_with_messages` until it returns null
- Each call automatically finds the next unprocessed chat

## Output

After processing each chat:
- ✅ Actionable items created as Linear Triage issues
- ✅ Cursor updated for the processed chat
- ✅ Summary of items captured
- ✅ Ready to process next chat or move to [Clarify](../clarify.md)
