# Message Preview Component

The most complex component - displays chat messages with proper alignment, coloring, and context separation.

## Message Box Structure

Blue box containing formatted chat messages.

### XML Syntax
```xml
<message-box chat="Alice" type="dm">
  <message date="Jan 10" time="14:30" sender="Them" processed="true">Can you review the contract?</message>
  <message date="Jan 11" time="09:00" sender="You" processed="false" highlight="by EOD">Will do by EOD</message>
</message-box>

<message-box chat="Project Team" type="group">
  <message date="Jan 10" time="10:15" sender="Alice" processed="true">Meeting at 2pm</message>
  <message date="Jan 10" time="10:16" sender="Bob" processed="true">Got it</message>
  <message date="Jan 11" time="08:00" sender="You" processed="false">Running late</message>
</message-box>

<message-box chat="Alex Vincent" type="self">
  <message date="Jan 10" time="14:30" sender="You" processed="true">Remember to call dentist</message>
  <message date="Jan 11" time="09:00" sender="You" processed="false">Also buy groceries</message>
</message-box>
```

### Attributes

**message-box**:
- `chat` - Participant name or group name
- `type` - "dm" (direct message), "group", or "self" (notes to self)

**message**:
- `date` - Date string (e.g., "Jan 10")
- `time` - Time string (e.g., "14:30")
- `sender` - "You", "Them", or person name
- `processed` - "true" for historical messages, "false" for new unprocessed messages
- `highlight` (optional) - Specific text to highlight in bold bright white

## Message Formatting Rules

### Message Line Format
```
{time} {name} {message text}
```

**NO** colons, brackets, or other separators. Just spaces.

### Example Messages
```
\u001b[0m\u001b[34m│\u001b[0m \u001b[90m14:30\u001b[0m \u001b[34mThem\u001b[0m  Can you review the contract?
\u001b[0m\u001b[34m│\u001b[0m \u001b[90m09:00\u001b[0m \u001b[32mYou\u001b[0m   Will do by EOD
\u001b[0m\u001b[34m│\u001b[0m \u001b[90m10:15\u001b[0m \u001b[34mAlice\u001b[0m Meeting at 2pm
```

### Vertical Alignment

**CRITICAL**: All message text must align vertically. Pad times and names to consistent widths.

**Time padding**: Times are typically 5 characters (`14:30`, `09:00`). Always pad to 5.

**Name padding**: Measure the longest name in the message set, pad all names to that width.

Example with alignment:
```
\u001b[90m14:30\u001b[0m \u001b[34mThem \u001b[0m Can you review?
\u001b[90m09:00\u001b[0m \u001b[32mYou  \u001b[0m Will do
\u001b[90m10:15\u001b[0m \u001b[34mAlice\u001b[0m Meeting at 2pm
```

Notice "Them " has 5 chars total, "You  " has 5 chars (with padding), "Alice" has 5 chars.

## Colors

### Sender Name Colors
- **"You"** (the user) → Green (`\u001b[32m`)
- **"Them"** (in DMs) → Blue (`\u001b[34m`)
- **Person names** (in groups) → Blue (`\u001b[34m`)

### Time Color
- Always gray (`\u001b[90m`)

### Message Text
- Default color (implicit, no escape code)
- **Highlighted parts** → Bold + Very Bright White (`\u001b[1m\u001b[38;5;231m{text}\u001b[0m`)

## Highlighting

Use `highlight` attribute to emphasize actionable parts:

```xml
<message time="14:30" sender="Them" highlight="review the contract">
  Can you review the contract by EOD?
</message>
```

Renders as:
```
\u001b[90m14:30\u001b[0m \u001b[34mThem\u001b[0m Can you \u001b[1m\u001b[38;5;231mreview the contract\u001b[0m by EOD?
```

**Use sparingly** - only for the most important actionable terms.

## Date Headers

When messages span multiple dates, add date headers:

```
\u001b[0m\u001b[34m│\u001b[0m \u001b[90mJan 10 ---\u001b[0m
\u001b[0m\u001b[34m│\u001b[0m \u001b[90m14:30\u001b[0m \u001b[34mThem\u001b[0m  Old message
\u001b[0m\u001b[34m│\u001b[0m \u001b[90mJan 11 ---\u001b[0m
\u001b[0m\u001b[34m│\u001b[0m \u001b[90m09:00\u001b[0m \u001b[32mYou\u001b[0m   New message
```

**Format**: `{Date} ---` in gray

**Rules**:
- Only show date header when date changes
- First message group should have a date header
- Date headers appear on their own line

## Historical vs New Message Separator

Mark the boundary between processed (historical) and unprocessed (new) messages:

```
\u001b[0m\u001b[34m│\u001b[0m \u001b[90m14:30\u001b[0m \u001b[34mThem\u001b[0m  Historical message
\u001b[0m\u001b[34m│\u001b[0m \u001b[90m--- New Messages ────────────────────────────────────────────────────────\u001b[0m
\u001b[0m\u001b[34m│\u001b[0m \u001b[90m09:00\u001b[0m \u001b[32mYou\u001b[0m   New unprocessed message
```

**Separator format**: `--- New Messages ────────────────────────────────────────────────────────`

**Rules**:
- Only show if there are BOTH historical AND new messages
- If all messages are new, skip the separator
- If all messages are historical, skip the separator

## Box Header Format

### DM (Direct Message)
```
\u001b[0m\u001b[34m┌─ \u001b[1mAlice\u001b[0m\u001b[34m ───────────────────────────────────────────────────────────────────────\u001b[0m
```

Just the person's name, bolded.

### Group
```
\u001b[0m\u001b[34m┌─ \u001b[1mProject Team\u001b[0m\u001b[34m ──────────────────────────────────────────────────────────────\u001b[0m
```

Just the group name, bolded.

### Self (Notes to Self)
```
\u001b[0m\u001b[34m┌─ \u001b[1mAlex Vincent (Notes to Self)\u001b[0m\u001b[34m ─────────────────────────────────────────────\u001b[0m
```

Format: `{Name} (Notes to Self)`

## Message Compacting

If there are MORE than 10 messages total, apply compacting strategies:

1. **Summarize historical context** - Replace long historical message chains with a brief summary
2. **Combine consecutive messages** - If same sender sends multiple messages in a row, combine them
3. **Minor shortening** - Trim verbose parts while keeping chat-like feel
4. **Goal**: Keep it looking like a real chat, not a data dump

Example compacting:
```
\u001b[0m\u001b[34m│\u001b[0m \u001b[90mJan 8-9 ---\u001b[0m
\u001b[0m\u001b[34m│\u001b[0m \u001b[90m[5 messages discussing contract terms, agreed on section 3 changes]\u001b[0m
\u001b[0m\u001b[34m│\u001b[0m \u001b[90m--- New Messages ────────────────────────────────────────────────────────\u001b[0m
\u001b[0m\u001b[34m│\u001b[0m \u001b[90mJan 11 ---\u001b[0m
\u001b[0m\u001b[34m│\u001b[0m \u001b[90m09:00\u001b[0m \u001b[32mYou\u001b[0m   Final version ready for review
```

## Complete Example (DM)

```
\u001b[0m\u001b[34m┌─ \u001b[1mAlice\u001b[0m\u001b[34m ───────────────────────────────────────────────────────────────────────\u001b[0m
\u001b[0m\u001b[34m│\u001b[0m \u001b[90mJan 10 ---\u001b[0m
\u001b[0m\u001b[34m│\u001b[0m \u001b[90m14:30\u001b[0m \u001b[34mThem\u001b[0m  Can you \u001b[1m\u001b[38;5;231mreview the contract\u001b[0m?
\u001b[0m\u001b[34m│\u001b[0m \u001b[90m15:45\u001b[0m \u001b[32mYou\u001b[0m   Sure, by EOD
\u001b[0m\u001b[34m│\u001b[0m \u001b[90m--- New Messages ────────────────────────────────────────────────────────\u001b[0m
\u001b[0m\u001b[34m│\u001b[0m \u001b[90mJan 11 ---\u001b[0m
\u001b[0m\u001b[34m│\u001b[0m \u001b[90m09:00\u001b[0m \u001b[32mYou\u001b[0m   \u001b[1m\u001b[38;5;231mReview complete\u001b[0m, sent you notes
\u001b[0m\u001b[34m│\u001b[0m \u001b[90m09:15\u001b[0m \u001b[34mThem\u001b[0m  Thanks! Will check now
\u001b[0m\u001b[34m└──────────────────────────────────────────────────────────────────────────────────\u001b[0m
```

## Complete Example (Group)

```
\u001b[0m\u001b[34m┌─ \u001b[1mProject Team\u001b[0m\u001b[34m ──────────────────────────────────────────────────────────────\u001b[0m
\u001b[0m\u001b[34m│\u001b[0m \u001b[90mJan 10 ---\u001b[0m
\u001b[0m\u001b[34m│\u001b[0m \u001b[90m10:15\u001b[0m \u001b[34mAlice\u001b[0m Meeting at \u001b[1m\u001b[38;5;231m2pm today\u001b[0m
\u001b[0m\u001b[34m│\u001b[0m \u001b[90m10:16\u001b[0m \u001b[34mBob  \u001b[0m Got it
\u001b[0m\u001b[34m│\u001b[0m \u001b[90m--- New Messages ────────────────────────────────────────────────────────\u001b[0m
\u001b[0m\u001b[34m│\u001b[0m \u001b[90mJan 11 ---\u001b[0m
\u001b[0m\u001b[34m│\u001b[0m \u001b[90m08:00\u001b[0m \u001b[32mYou  \u001b[0m Running \u001b[1m\u001b[38;5;231m5 minutes late\u001b[0m
\u001b[0m\u001b[34m└──────────────────────────────────────────────────────────────────────────────────\u001b[0m
```

## Complete Example (Self)

```
\u001b[0m\u001b[34m┌─ \u001b[1mAlex Vincent (Notes to Self)\u001b[0m\u001b[34m ─────────────────────────────────────────────\u001b[0m
\u001b[0m\u001b[34m│\u001b[0m \u001b[90mJan 10 ---\u001b[0m
\u001b[0m\u001b[34m│\u001b[0m \u001b[90m14:30\u001b[0m \u001b[32mYou\u001b[0m Remember to \u001b[1m\u001b[38;5;231mcall dentist\u001b[0m
\u001b[0m\u001b[34m│\u001b[0m \u001b[90m--- New Messages ────────────────────────────────────────────────────────\u001b[0m
\u001b[0m\u001b[34m│\u001b[0m \u001b[90mJan 11 ---\u001b[0m
\u001b[0m\u001b[34m│\u001b[0m \u001b[90m09:00\u001b[0m \u001b[32mYou\u001b[0m Also \u001b[1m\u001b[38;5;231mbuy groceries\u001b[0m
\u001b[0m\u001b[34m└──────────────────────────────────────────────────────────────────────────────────\u001b[0m
```

## Edge Cases

### All messages are new (no historical)
```
\u001b[0m\u001b[34m┌─ \u001b[1mAlice\u001b[0m\u001b[34m ───────────────────────────────────────────────────────────────────────\u001b[0m
\u001b[0m\u001b[34m│\u001b[0m \u001b[90mJan 11 ---\u001b[0m
\u001b[0m\u001b[34m│\u001b[0m \u001b[90m09:00\u001b[0m \u001b[32mYou\u001b[0m   New message
\u001b[0m\u001b[34m└──────────────────────────────────────────────────────────────────────────────────\u001b[0m
```
(No separator - all are new)

### All messages are historical (no new)
```
\u001b[0m\u001b[34m┌─ \u001b[1mAlice\u001b[0m\u001b[34m ───────────────────────────────────────────────────────────────────────\u001b[0m
\u001b[0m\u001b[34m│\u001b[0m \u001b[90mJan 10 ---\u001b[0m
\u001b[0m\u001b[34m│\u001b[0m \u001b[90m14:30\u001b[0m \u001b[34mThem\u001b[0m  Old message
\u001b[0m\u001b[34m└──────────────────────────────────────────────────────────────────────────────────\u001b[0m
```
(No separator - all are historical)

### Single message
```
\u001b[0m\u001b[34m┌─ \u001b[1mAlice\u001b[0m\u001b[34m ───────────────────────────────────────────────────────────────────────\u001b[0m
\u001b[0m\u001b[34m│\u001b[0m \u001b[90mJan 11 ---\u001b[0m
\u001b[0m\u001b[34m│\u001b[0m \u001b[90m09:00\u001b[0m \u001b[34mThem\u001b[0m Can you help?
\u001b[0m\u001b[34m└──────────────────────────────────────────────────────────────────────────────────\u001b[0m
```

## Key Principles

1. **Alignment is critical** - Message text must line up vertically
2. **Colors are semantic** - You=green, Others=blue, Time=gray
3. **Highlighting is sparse** - Only actionable terms
4. **Natural chat feel** - Should look like a real chat UI
5. **Compact but complete** - Show enough context without overwhelming
6. **NO colons or brackets** - Clean, minimal formatting
