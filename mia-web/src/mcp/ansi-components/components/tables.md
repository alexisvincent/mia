# Tables

Great for structured data comparison. Keep them clean and simple.

## Simple Table with Badges

```
\u001b[0m\u001b[90m┌──────────────┬──────────┬───────────┬──────────\u001b[0m
\u001b[0m\u001b[90m│\u001b[0m \u001b[1mMigration\u001b[0m   \u001b[90m│\u001b[0m \u001b[1mSize\u001b[0m    \u001b[90m│\u001b[0m \u001b[1mRisk\u001b[0m     \u001b[90m│\u001b[0m \u001b[1mStatus\u001b[0m
\u001b[0m\u001b[90m├──────────────┼──────────┼───────────┼──────────\u001b[0m
\u001b[0m\u001b[90m│\u001b[0m \u001b[32m001_users\u001b[0m   \u001b[90m│\u001b[0m 2.3 MB   \u001b[90m│\u001b[0m \u001b[100m\u001b[97m LOW \u001b[0m    \u001b[90m│\u001b[0m \u001b[42m\u001b[30m READY \u001b[0m
\u001b[0m\u001b[90m│\u001b[0m \u001b[32m002_orders\u001b[0m  \u001b[90m│\u001b[0m 45.6 MB  \u001b[90m│\u001b[0m \u001b[43m\u001b[30m MED \u001b[0m    \u001b[90m│\u001b[0m \u001b[42m\u001b[30m READY \u001b[0m
\u001b[0m\u001b[90m│\u001b[0m \u001b[32m003_index\u001b[0m   \u001b[90m│\u001b[0m 128.4 MB \u001b[90m│\u001b[0m \u001b[41m\u001b[97m HIGH \u001b[0m   \u001b[90m│\u001b[0m \u001b[43m\u001b[30m CHECK \u001b[0m
\u001b[0m\u001b[90m└──────────────┴──────────┴───────────┴──────────\u001b[0m
```

## Comparison Table (Two Columns)

```
\u001b[0m\u001b[90m         ┌─ STAGING ──┬─ PRODUCTION ─\u001b[0m
\u001b[0m\u001b[90m─────────┼─────────────┼──────────────\u001b[0m
\u001b[0m\u001b[1mVersion\u001b[0m  \u001b[90m│\u001b[0m \u001b[32mv2.4.1-rc\u001b[0m  \u001b[90m│\u001b[0m \u001b[33mv2.3.8\u001b[0m
\u001b[0m\u001b[1mNodes\u001b[0m    \u001b[90m│\u001b[0m \u001b[33m2 pods\u001b[0m     \u001b[90m│\u001b[0m \u001b[32m8 pods\u001b[0m
\u001b[0m\u001b[90m─────────┴─────────────┴──────────────\u001b[0m
```

## XML Syntax

```xml
<table>
  <header>
    <col>Migration</col>
    <col>Size</col>
    <col>Risk</col>
    <col>Status</col>
  </header>
  <row>
    <col id="001_users">001_users</col>
    <col>2.3 MB</col>
    <col><badge type="priority" value="4"/></col>
    <col><badge type="state" value="Ready"/></col>
  </row>
  <row>
    <col id="003_index">003_index</col>
    <col>128.4 MB</col>
    <col><badge type="priority" value="2"/></col>
    <col><badge type="state" value="Check"/></col>
  </row>
</table>
```

**Attributes:**
- `header` - Optional header row (auto-bold)
- `col` - Table cell
- `col[id="..."]` - Make cell green (like ID highlighting)

## Formatting Rules

**Left-Side-Only Structure**:
- Top border: `┌───┬───┬───` (NO closing symbol on right)
- Content rows: `│ cell │ cell │ cell` (column separators but NO right wall)
- Separators: `├───┼───┼───` (NO closing symbol on right)
- Bottom border: `└───┴───┴───` (NO closing symbol on right)

**DO NOT** create enclosed tables with right walls like:
- ❌ `┌───┬───┐` (has closing `┐`)
- ❌ `│ cell │ cell │` (has closing `│`)
- ❌ `└───┴───┘` (has closing `┘`)

## Tips

- Use gray (`\u001b[90m`) for borders to reduce visual noise
- Keep columns aligned
- Use color only for data, not structure
- Badges work great in table cells
- Keep to 3-5 columns for readability
- First column often contains IDs (green text)
