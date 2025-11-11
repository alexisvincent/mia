# Chats Collection Workflow

**Part of:** [Collect Workflow](../collect.md) - Inbox Streams automation

**Channels:** WhatsApp, iMessage, LinkedIn (via Beeper)

**Goal:** Scan chat messages for actionable items and create Linear Triage issues.

## Overview

This workflow processes chats using a specialized sub-agent that handles individual chats independently. The sub-agent can be spawned in parallel for multiple chats, enabling concurrent processing rather than serial execution.

## The Process

### Serial Processing (One at a time)

For processing chats one at a time:

```
Task tool with subagent_type: "chat-triage-processor"
```

The agent will:
1. Load the next unprocessed chat
2. Analyze messages for actionable items
3. Check Linear for existing issues
4. Present findings and wait for your approval
5. Execute approved actions
6. Update cursor and terminate

Repeat until all chats are processed.

### Parallel Processing (Multiple simultaneously)

For processing multiple chats concurrently, spawn multiple agents:

```
Task tool with subagent_type: "chat-triage-processor" (multiple times in one message)
```

Each agent instance will independently:
- Grab the next available unprocessed chat
- Process it through all phases
- Terminate when done

This enables processing N chats simultaneously, where N is the number of agents spawned.

## The Sub-Agent

The `chat-triage-processor` sub-agent is fully documented in `.claude/agents/chat-triage-processor.md`.

**Key Features:**
- Loads next unprocessed chat automatically
- Uses cursor-based tracking (last 3 months)
- Filters out `always_ignore` chats
- Loads up to 100 messages intelligently
- Analyzes ALL unprocessed messages
- Searches Linear before presenting findings
- Waits for user approval at checkpoint
- Updates cursors and preferences
- Terminates when done

## What the Sub-Agent Does

### Phase 1: Load Next Chat
Calls `mcp__mia__load_next_unprocessed_chat_with_messages` to get the next chat with unprocessed messages.

### Phase 2: Analyze Messages
Focuses on unprocessed messages, looking for:
- Direct actions (requests, commitments, follow-ups)
- Information to track
- Time-sensitive items

### Phase 3: Check Linear
Searches Linear for existing issues BEFORE presenting to you.

### Phase 4: Present Analysis (CHECKPOINT)
Presents structured analysis with:
- Recent activity summary
- Linear check results
- Potential actionable items
- Questions for you

**Waits for your approval before taking any action.**

### Phase 5: Execute Actions
Only after your approval:
- Creates new Linear issues
- Adds comments to existing issues
- Updates cursor (marks chat as processed)
- Updates preferences if requested

## User Responses

**When you want to:**
- **Create issues**: Approve the suggested actions
- **Skip this chat**: Say "next" or "nothing" (cursor updated, no issues created)
- **Never process this chat again**: Say "always ignore this chat" (preferences updated)

## MCP Tools Used

The sub-agent uses these MCP tools (you don't need to call them directly):

**Primary Tool:**
- `mcp__mia__load_next_unprocessed_chat_with_messages` - Automated chat loading

**State Management:**
- `mcp__mia__update_beeper_chat_cursors` - Update cursor after processing
- `mcp__mia__update_beeper_chat_preferences` - Mark chats to always ignore

**Linear:**
- `mcp__linear__list_issues` - Search for existing issues
- `mcp__linear__create_issue` - Create Triage issues (after approval)
- `mcp__linear__create_comment` - Add context to issues (after approval)

## Output

After processing all chats:
- ✅ Actionable items created as Linear Triage issues
- ✅ Cursors updated for all processed chats
- ✅ Summary of items captured
- ✅ Ready to proceed to [Clarify](../clarify.md) and [Organize](../organize.md)
