# Feature Flag Matrices

Show boolean states across environments or dimensions. Perfect for feature flags, permissions, or configuration comparison.

## Example

```
\u001b[0m                  \u001b[90mDEV\u001b[0m   \u001b[33mSTAGE\u001b[0m  \u001b[32mPROD\u001b[0m
\u001b[0m                  ───   ─────  ────
\u001b[0m\u001b[1mDark Mode\u001b[0m         \u001b[32m✓\u001b[0m     \u001b[32m✓\u001b[0m      \u001b[31m×\u001b[0m
\u001b[0m\u001b[1mNew Auth\u001b[0m          \u001b[32m✓\u001b[0m     \u001b[32m✓\u001b[0m      \u001b[32m✓\u001b[0m
\u001b[0m\u001b[1mBeta Features\u001b[0m     \u001b[32m✓\u001b[0m     \u001b[31m×\u001b[0m      \u001b[31m×\u001b[0m
\u001b[0m\u001b[1mAnalytics 2.0\u001b[0m     \u001b[32m✓\u001b[0m     \u001b[32m✓\u001b[0m      \u001b[33m50%\u001b[0m
```

## XML Syntax

```xml
<matrix>
  <columns>
    <col>DEV</col>
    <col>STAGE</col>
    <col>PROD</col>
  </columns>
  <row feature="Dark Mode">
    <cell state="enabled"/>
    <cell state="enabled"/>
    <cell state="disabled"/>
  </row>
  <row feature="New Auth">
    <cell state="enabled"/>
    <cell state="enabled"/>
    <cell state="enabled"/>
  </row>
  <row feature="Analytics 2.0">
    <cell state="enabled"/>
    <cell state="enabled"/>
    <cell state="partial" value="50%"/>
  </row>
</matrix>
```

**Attributes:**
- `col` - Column header (environment, role, etc.)
- `row[feature]` - Row label (feature name, permission, etc.)
- `cell[state]` - "enabled", "disabled", "partial"
- `cell[value]` - Optional value for partial state (e.g., "50%", "beta")

## State Indicators

- \u001b[32m✓\u001b[0m - Enabled (green)
- \u001b[31m×\u001b[0m - Disabled (red)
- \u001b[33mvalue\u001b[0m - Partial/conditional (yellow, with value)

## Tips

- Align columns carefully for readability
- Color environment/dimension headers for visual grouping
- Good for configuration comparison across environments
- Works well for permissions matrices (users × roles)
- Keep to 3-5 columns max
- Bold the feature/row names for scannability
