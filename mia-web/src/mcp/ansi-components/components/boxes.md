# Boxes

Left-side-only boxes are the primary container for sections in prompts.

## Structure

```
\u001b[0m\u001b[{COLOR}m┌─ {TITLE} ────────────────────────────────────────────────────────\u001b[0m
\u001b[0m\u001b[{COLOR}m│\u001b[0m {CONTENT LINE 1}
\u001b[0m\u001b[{COLOR}m│\u001b[0m {CONTENT LINE 2}
\u001b[0m\u001b[{COLOR}m│\u001b[0m {CONTENT LINE 3}
\u001b[0m\u001b[{COLOR}m└──────────────────────────────────────────────────────────────────────────────────\u001b[0m
```

## Key Rules

1. **Left-side only**: NO right wall (no closing `│` or `┐`/`┘`)
2. **Width**: Approximately 80 characters total
3. **Reset every line**: Start each line with `\u001b[0m`
4. **Color consistency**: Border color matches section type
5. **Title in top bar**: Embedded in the `┌─ Title ─────` line
6. **NO empty lines**: Start content immediately after top, end immediately before bottom

## XML Syntax

### Basic Box
```xml
<box color="blue" title="Section Title">
Content line 1
Content line 2
Content line 3
</box>
```

### Box with Rich Content
```xml
<box color="yellow" title="Existing Linear Issues">
  <issue id="LOP-123" title="Fix the bug" state="In Progress" priority="2"/>
  <issue id="LOP-456" title="Add feature" state="Todo"/>
</box>
```

## Color Mapping

- `blue` → `\u001b[34m`
- `yellow` → `\u001b[33m`
- `magenta` → `\u001b[35m`
- `cyan` → `\u001b[36m`
- `green` → `\u001b[32m`
- `gray` → `\u001b[90m`

## Examples

### Blue Box (Message Preview, Current Issue)
```
\u001b[0m\u001b[34m┌─ Message Preview ────────────────────────────────────────────────────────────────\u001b[0m
\u001b[0m\u001b[34m│\u001b[0m Content goes here
\u001b[0m\u001b[34m│\u001b[0m More content
\u001b[0m\u001b[34m└──────────────────────────────────────────────────────────────────────────────────\u001b[0m
```

### Yellow Box (Existing Issues, Clarify Analysis)
```
\u001b[0m\u001b[33m┌─ Existing Linear Issues ─────────────────────────────────────────────────────────\u001b[0m
\u001b[0m\u001b[33m│\u001b[0m \u001b[32m●\u001b[0m \u001b[1m\u001b[32mLOP-45\u001b[0m \u001b[1m\u001b[38;5;231mFinish the quarterly report\u001b[0m
\u001b[0m\u001b[33m│\u001b[0m └─ \u001b[100m\u001b[1m\u001b[38;5;231m In Progress \u001b[0m \u001b[41m\u001b[1m\u001b[38;5;231m HIGH \u001b[0m
\u001b[0m\u001b[33m└──────────────────────────────────────────────────────────────────────────────────\u001b[0m
```

### Magenta Box (Recommendations)
```
\u001b[0m\u001b[35m┌─ Recommendations ────────────────────────────────────────────────────────────────\u001b[0m
\u001b[0m\u001b[35m│\u001b[0m \u001b[32m●\u001b[0m \u001b[1m\u001b[32mLOP-45\u001b[0m \u001b[1m\u001b[38;5;231mAdd Q4 projections requirement\u001b[0m
\u001b[0m\u001b[35m│\u001b[0m ├─ \u001b[45m\u001b[1m\u001b[38;5;231m ADD COMMENT \u001b[0m
\u001b[0m\u001b[35m│\u001b[0m └─ Finance needs extra Q4 section. Bob handling, target EOD Jan 11.
\u001b[0m\u001b[35m└──────────────────────────────────────────────────────────────────────────────────\u001b[0m
```

### Cyan Box (Related Issues, Primary Info)
```
\u001b[0m\u001b[36m┌─ Related Issues ─────────────────────────────────────────────────────────────────\u001b[0m
\u001b[0m\u001b[36m│\u001b[0m \u001b[32m●\u001b[0m \u001b[1m\u001b[32mLOP-23\u001b[0m \u001b[1m\u001b[38;5;231mSimilar issue from last week\u001b[0m
\u001b[0m\u001b[36m│\u001b[0m └─ \u001b[100m\u001b[1m\u001b[38;5;231m Done \u001b[0m Relationship: Similar
\u001b[0m\u001b[36m└──────────────────────────────────────────────────────────────────────────────────\u001b[0m
```

## Title Formatting

Titles should be:
- Bold in the top bar
- Clear and concise (2-4 words)
- Followed by dashes to fill the width

Example top bar construction:
```
\u001b[0m\u001b[34m┌─ \u001b[1mTitle Here\u001b[0m\u001b[34m ─────────────────────────────────────────────────────\u001b[0m
```

Note: The bold formatting applies ONLY to the title text, not the entire bar.

## Content Padding

After the `│` character, add a single space before content:
```
\u001b[0m\u001b[34m│\u001b[0m Content (note the space after │)
```

## Width Guidelines

- Top bar: ~80 characters (including `┌─ ` and title and trailing dashes)
- Bottom bar: ~80 characters (all dashes)
- Content lines: No strict limit, but keep readable (<75 chars for text)

The exact character count can vary slightly, but aim for visual consistency around 80 characters.
