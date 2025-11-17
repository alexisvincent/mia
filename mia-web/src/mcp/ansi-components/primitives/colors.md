# Colors

## ANSI Color Codes

### Text Colors

```
\u001b[0m   - Reset (CRITICAL: Use at start of EVERY line)
\u001b[1m   - Bold
\u001b[31m  - Red (urgent/error)
\u001b[32m  - Green (success/found/IDs/you)
\u001b[33m  - Yellow (warning/needs action)
\u001b[34m  - Blue (info/chat messages)
\u001b[35m  - Magenta (recommendations/special)
\u001b[36m  - Cyan (info/primary sections)
\u001b[37m  - Light gray (secondary text - rarely used)
\u001b[90m  - Dark gray (muted/timestamps/secondary)
\u001b[97m  - Bright white (deprecated for badges)
\u001b[38;5;231m  - VERY BRIGHT WHITE (REQUIRED for badge text)
```

### Background Colors

```
\u001b[41m  - Red background (urgent/high priority badges)
\u001b[42m  - Green background (success/complete/change state badges)
\u001b[43m  - Yellow background (warning/medium priority/estimate badges)
\u001b[44m  - Blue background (action badges - update title/description)
\u001b[45m  - Magenta background (add comment/add labels badges)
\u001b[46m  - Cyan background (link parent badges)
\u001b[100m - Gray background (low priority/neutral state badges)
\u001b[101m - Light red background (alternate urgent)
```

## Color Usage by Context

### Box Colors (for borders)

- **Blue** (`\u001b[34m`) - Message Preview, Current Issue
- **Yellow** (`\u001b[33m`) - Existing Linear Issues, Clarify Analysis
- **Magenta** (`\u001b[35m`) - Recommendations
- **Cyan** (`\u001b[36m`) - Related Issues, Primary info
- **Green** (`\u001b[32m`) - Rarely used for boxes, mainly for IDs and indicators
- **Gray** (`\u001b[90m`) - Neutral/secondary boxes

### Text Colors

- **Green** (`\u001b[32m`) - Linear issue IDs, "You" in messages, success indicators (●, ✓)
- **Blue** (`\u001b[34m`) - "Them" or person names in messages
- **Gray** (`\u001b[90m`) - Timestamps, dates, separators, secondary information
- **Yellow** (`\u001b[33m`) - Pending/new indicators (○), arrows (→)
- **Red** (`\u001b[31m`) - Error indicators (×)
- **Bold + Very Bright White** (`\u001b[1m\u001b[38;5;231m`) - Highlighted action items in text, issue titles, badge text

## Common Combinations

### Bold + Color (for emphasis)
```
\u001b[0m\u001b[1m\u001b[32mLOP-123\u001b[0m
```
Used for: Linear issue IDs

### Bold + Very Bright White (for titles/highlights)
```
\u001b[0m\u001b[1m\u001b[38;5;231mIssue Title Goes Here\u001b[0m
```
Used for: Issue titles, highlighted terms

### Background + Bold + Very Bright White (for badges)
```
\u001b[41m\u001b[1m\u001b[38;5;231m URGENT \u001b[0m
```
Used for: ALL badges

## Color Constants for XML Parsing

When parsing XML color attributes, use these mappings:

```
"blue"    → \u001b[34m
"yellow"  → \u001b[33m
"magenta" → \u001b[35m
"cyan"    → \u001b[36m
"green"   → \u001b[32m
"gray"    → \u001b[90m
"red"     → \u001b[31m
```

## Always Reset

Remember: Every line must start with `\u001b[0m` to prevent the bold default problem.

Example:
```
\u001b[0m\u001b[34mThis is blue text\u001b[0m
\u001b[0m\u001b[32mThis is green text\u001b[0m
```
