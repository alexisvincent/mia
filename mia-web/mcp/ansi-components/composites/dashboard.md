# Dashboard Grids

Multiple metrics in organized cells. Perfect for at-a-glance status overviews.

**CRITICAL**: Dashboard boxes MUST use **left-side-only** formatting - NO right walls. This matches all other box components for consistent alignment.

## Example

```
\u001b[0m\u001b[90m┌─────────────┬────────────┬────────────\u001b[0m
\u001b[0m\u001b[90m│\u001b[0m \u001b[1m\u001b[32mSPRINT\u001b[0m    \u001b[90m│\u001b[0m \u001b[1m\u001b[33mREVIEWS\u001b[0m   \u001b[90m│\u001b[0m \u001b[1m\u001b[36mDEPLOYS\u001b[0m
\u001b[0m\u001b[90m│\u001b[0m \u001b[42m\u001b[30m 73% \u001b[0m     \u001b[90m│\u001b[0m \u001b[43m\u001b[30m 8 open \u001b[0m \u001b[90m│\u001b[0m \u001b[42m\u001b[30m 3 today \u001b[0m
\u001b[0m\u001b[90m│\u001b[0m           \u001b[90m│\u001b[0m           \u001b[90m│\u001b[0m
\u001b[0m\u001b[90m│\u001b[0m 22 of 30  \u001b[90m│\u001b[0m 3 urgent  \u001b[90m│\u001b[0m 2 planned
\u001b[0m\u001b[90m│\u001b[0m points    \u001b[90m│\u001b[0m 5 waiting \u001b[90m│\u001b[0m 1 hotfix
\u001b[0m\u001b[90m└─────────────┴────────────┴────────────\u001b[0m
```

## XML Syntax

```xml
<dashboard>
  <cell title="SPRINT" color="green">
    <metric><badge type="state" value="73%"/></metric>
    <detail>22 of 30</detail>
    <detail>points</detail>
  </cell>
  <cell title="REVIEWS" color="yellow">
    <metric><badge type="state" value="8 open"/></metric>
    <detail>3 urgent</detail>
    <detail>5 waiting</detail>
  </cell>
  <cell title="DEPLOYS" color="cyan">
    <metric><badge type="state" value="3 today"/></metric>
    <detail>2 planned</detail>
    <detail>1 hotfix</detail>
  </cell>
</dashboard>
```

**Attributes:**
- `cell[title]` - Cell header (bold, colored)
- `cell[color]` - "green", "yellow", "cyan", "red", "gray"
- `metric` - Primary metric (usually a badge)
- `detail` - Supporting details (plain text, one per line)

## Formatting Rules

**Left-Side-Only Structure**:
- Top border: `┌───┬───┬───` (NO closing symbol on right)
- Content rows: `│ cell │ cell │ cell` (column separators but NO right wall)
- Bottom border: `└───┴───┴───` (NO closing symbol on right)

**DO NOT** create enclosed boxes with right walls like:
- ❌ `┌───┬───┐` (has closing `┐`)
- ❌ `│ cell │ cell │` (has closing `│`)
- ❌ `└───┴───┘` (has closing `┘`)

## Tips

- Group related metrics in cells (2-4 cells per row)
- Color-code headers by category (sprint=green, reviews=yellow, deploys=cyan)
- Use badges for primary metrics
- Keep supporting details brief (1-3 lines)
- Great for at-a-glance status
- Don't overload - balance is key
