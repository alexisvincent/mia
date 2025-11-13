# Design Principles

These principles have been refined through user testing and MUST be followed strictly.

## CRITICAL: The Bold Default Problem

**AskUserQuestion defaults ALL text to BOLD.** This is a major UI issue.

**Solution**: Start EVERY line with `\u001b[0m` (reset code)

This is non-negotiable. Every single line of output must begin with the reset sequence.

Example:
```
\u001b[0m\u001b[34m┌─ Title ──────────────────────────────────────────────────────────\u001b[0m
\u001b[0m\u001b[34m│\u001b[0m Content goes here
\u001b[0m\u001b[34m└──────────────────────────────────────────────────────────────────\u001b[0m
```

## Left-Side-Only Boxes

**NO right walls on boxes.** They misalign and look broken.

✅ **Correct** (left-side only):
```
┌─ Title ──────────────────────────────────────────────────────────
│ Content
│ More content
└──────────────────────────────────────────────────────────────────
```

❌ **Wrong** (enclosed box):
```
┌─ Title ────────┐
│ Content        │
└────────────────┘
```

## Consistent Color Scheme

Colors have semantic meaning. Use consistently:

- **Blue** (`\u001b[34m`) - Message Preview boxes, chat content
- **Yellow** (`\u001b[33m`) - Existing Linear Issues, Clarify Analysis
- **Magenta** (`\u001b[35m`) - Recommendations
- **Cyan** (`\u001b[36m`) - Primary info, Current Issue, Related Issues
- **Green** (`\u001b[32m`) - Linear issue IDs, "You" in messages, status indicators
- **Gray** (`\u001b[90m`) - Secondary info, timestamps, dates, separators

## Box Width Standard

All boxes should be approximately **80 characters wide**. This ensures:
- Consistent visual appearance
- Readable line lengths
- Proper alignment across sections

## Badge System Requirements

All badges MUST use this exact format:
```
\u001b[{background}m\u001b[1m\u001b[38;5;231m TEXT \u001b[0m
```

Key points:
- Background color sets the badge color
- `\u001b[1m` makes text bold
- `\u001b[38;5;231m` sets text to VERY BRIGHT WHITE (not just white!)
- Always include space padding around text
- Always reset at the end with `\u001b[0m`

## What NOT to Include

**NO progress bars** - Use badge counts instead

**NO numbered options** - The AskUserQuestion tool adds numbers automatically

**NO emojis in question text** - Keep it professional (emojis can be used in content, but not in section headers or key UI elements)

**NO empty padding lines** - No blank lines at the top or bottom of sections. Start content immediately after box top, end immediately before box bottom.

## Green Text for IDs

Always render Linear issue IDs in green bold:
```
\u001b[1m\u001b[32mLOP-123\u001b[0m
```

This makes IDs highly scannable and easy to find.

## Vertical Alignment

When displaying lists or tables, ensure vertical alignment of columns. Pad shorter strings with spaces to maintain alignment.

Example (message formatting):
```
\u001b[90m14:30\u001b[0m \u001b[32mYou  \u001b[0m Message text here
\u001b[90m09:15\u001b[0m \u001b[34mThem \u001b[0m Another message
```

Notice how "You  " has extra space to align with "Them".

## Compact Yet Readable

- Avoid unnecessary blank lines
- Keep descriptions concise
- Use 2 lines per issue (issue line + metadata line)
- Group related information together

## Status Indicators

Use consistent Unicode characters for status:
- `●` Green circle - Found/exists/complete/active
- `○` Yellow circle - New/pending
- `×` Red X - Error/failed
- `✓` Green check - Success/verified
- `→` Yellow arrow - Action item/next step
- `•` Gray bullet - Generic separator

## Tree Structure Rules

- Use `├─` for connecting branches (when more items follow)
- Use `└─` for final branches (last item in a list)
- Keep tree depth minimal (usually 1-2 levels max)

Example:
```
● LOP-123 Title
├─ Badge 1
├─ Badge 2
└─ Summary text
```

## Highlighting Important Content

Use **bold + very bright white** (`\u001b[1m\u001b[38;5;231m`) to highlight the most important actionable parts of messages or content:

```
Can you \u001b[1m\u001b[38;5;231mreview the contract\u001b[0m by EOD?
```

Use sparingly - only for key terms that need attention.
