# Progress Indicators

Show multi-step workflows and processes.

## Example

```
\u001b[0m\u001b[32m[✓]──[✓]──[●]──[ ]──[ ]\u001b[0m
\u001b[0m │    │    │    │    │
\u001b[0m \u001b[32m1    2\u001b[0m    \u001b[33m3\u001b[0m    \u001b[90m4    5\u001b[0m
```

## XML Syntax

```xml
<progress>
  <step status="complete">Initialize</step>
  <step status="complete">Validate</step>
  <step status="current">Process</step>
  <step status="pending">Review</step>
  <step status="pending">Deploy</step>
</progress>
```

**Attributes:**
- `step[status]` - "complete", "current", "pending", "failed"
- Step number is auto-generated from position

## Visual Indicators

- `[✓]` - Completed step (green)
- `[●]` - Current step (yellow)
- `[ ]` - Pending step (gray)
- `[×]` - Failed step (red)

## Tips

- Keep to 5-7 steps max for scannability
- Show step numbers below indicators
- Color: green (complete), yellow (current), gray (pending), red (failed)
- Use horizontal layout for better space usage
