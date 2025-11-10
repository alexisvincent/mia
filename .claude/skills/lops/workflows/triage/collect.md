# Collect Workflow

**Frequency:** Daily (5-10 minutes, as part of Triage session)

**Goal:** Consolidate all captures from various channels into the Linear Triage queue.

## The Purpose

Collect is the bridge between distributed capture and centralized processing. It gathers everything you've captured throughout the day/week from various channels and brings it into one place for triage.

**Note:** This workflow will be automated in the future. For now, parts are manual.

## The Collect Process

Go through each capture channel (see [Capture Channels](./capture.md#capture-channels)) and move items into Linear Triage:

### 1. Linear (Direct to Triage)
**Collect Process:** None—items are already in Triage.

### 2. Physical Notebook
**Collect Process:**
- Find relevant notebook pages with new captures
- Either type items into Linear, speak them to AI, or take a photo
- Photo option: Send to AI which reads and creates Triage issues via MCP
- Mark page as processed

### 3. AI Assistant (Claude Code, ChatGPT, Claude)
**Collect Process:** None—AI uses MCP to add items directly to Triage when you ask it to save something.

### 4. Inbox Streams (WhatsApp, iMessage, LinkedIn)
**Collect Process:**
- See detailed workflow: **[collect/chats.md](./collect/chats.md)**
- Uses Beeper to scan chat messages across channels
- Cursor-based tracking ensures incremental processing
- AI identifies actionable items and creates Triage issues via MCP
- Process one chat at a time with historical context

### 5. Granola (Meeting Notes)
**Collect Process:**
- Review completed meeting notes in Granola
- AI scans for action items and tasks
- Automatically creates Triage issues via MCP
- Mark meeting as processed

### 6. Apple Notes
**Collect Process:**
- Review Apple Notes for new captures
- Either type items into Linear or send to AI to process
- AI can read notes and create Triage issues via MCP
- Mark notes as processed

## Output

After collect, all captured items should be:
- ✅ In the Linear Triage queue
- ✅ Ready for processing
- ✅ Original sources marked as processed

## Next Step

Once collect is complete, proceed to [Triage - Step 2: Process](../triage.md#step-2-process-15-20-min) where you'll [Clarify](./clarify.md) and [Organize](./organize.md) each item.
