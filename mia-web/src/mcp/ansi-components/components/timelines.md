# Timelines

Show sequential processes with time context. Perfect for builds, deployments, and workflows.

## Example

```
\u001b[0m\u001b[90m    09:00       09:15       09:30       09:45\u001b[0m
\u001b[0m\u001b[90m    │           │           │           │\u001b[0m
\u001b[0m\u001b[32m●───┼───────────┼───────────┼───────────┼\u001b[0m
\u001b[0m\u001b[32m    │\u001b[0m
\u001b[0m\u001b[32m    └─ \u001b[42m\u001b[30m BUILD \u001b[0m \u001b[32m✓\u001b[0m 5 min
\u001b[0m
\u001b[0m\u001b[32m        ●───────┼───────────┼───────────┼\u001b[0m
\u001b[0m\u001b[32m        │\u001b[0m
\u001b[0m\u001b[32m        └─ \u001b[42m\u001b[30m TEST \u001b[0m \u001b[32m✓\u001b[0m 8 min
\u001b[0m
\u001b[0m\u001b[33m                ●───────────┼───────────┼\u001b[0m
\u001b[0m\u001b[33m                │\u001b[0m
\u001b[0m\u001b[33m                └─ \u001b[43m\u001b[30m STAGING \u001b[0m \u001b[90m⋯ running\u001b[0m
```

## XML Syntax

```xml
<timeline>
  <timescale start="09:00" interval="15" count="4"/>
  <event time="09:00" status="complete" duration="5 min">BUILD</event>
  <event time="09:08" status="complete" duration="8 min">TEST</event>
  <event time="09:20" status="in-progress">STAGING</event>
</timeline>
```

**Attributes:**
- `timescale[start]` - Starting time (e.g., "09:00")
- `timescale[interval]` - Minutes between markers (e.g., "15")
- `timescale[count]` - Number of time markers
- `event[time]` - Start time for event
- `event[status]` - "complete", "in-progress", "pending", "failed"
- `event[duration]` - Optional duration label

## Color Coding

- **Green** (`\u001b[32m`) - Completed events
- **Yellow** (`\u001b[33m`) - Currently running
- **Gray** (`\u001b[90m`) - Pending/future
- **Red** (`\u001b[31m`) - Failed events

## Tips

- Use time markers at top for context
- Visual flow left to right
- Include duration estimates
- Keep to 5-7 events max
- Use badges for event names
