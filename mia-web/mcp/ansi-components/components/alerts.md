# Alert Boxes

Alert boxes with severity levels. Use double-line borders for critical alerts only.

## Critical Alert (Double-Line Box)

```
\u001b[0m\u001b[31m╔═ 🔥 CRITICAL ═══════════════════════\u001b[0m
\u001b[0m\u001b[31m║\u001b[0m
\u001b[0m\u001b[31m║\u001b[0m \u001b[41m\u001b[97m ALERT-001 \u001b[0m Database connection pool exhausted
\u001b[0m\u001b[31m║\u001b[0m \u001b[90mTriggered:\u001b[0m 3 minutes ago
\u001b[0m\u001b[31m║\u001b[0m \u001b[90mAffected:\u001b[0m Production DB (us-west-2)
\u001b[0m\u001b[31m║\u001b[0m
\u001b[0m\u001b[31m╚══════════════════════════════════════\u001b[0m
```

## Warning Alert (Single-Line Box)

```
\u001b[0m\u001b[33m┌─ ⚠ WARNING ──────────────────────────\u001b[0m
\u001b[0m\u001b[33m│\u001b[0m
\u001b[0m\u001b[33m│\u001b[0m \u001b[43m\u001b[30m ALERT-002 \u001b[0m High memory usage (87%)
\u001b[0m\u001b[33m│\u001b[0m \u001b[90m12 minutes ago • app-server-03\u001b[0m
\u001b[0m\u001b[33m│\u001b[0m
\u001b[0m\u001b[33m└──────────────────────────────────────\u001b[0m
```

## XML Syntax

```xml
<alert severity="critical" title="Database connection pool exhausted">
  <id>ALERT-001</id>
  <triggered>3 minutes ago</triggered>
  <affected>Production DB (us-west-2)</affected>
</alert>

<alert severity="warning" title="High memory usage (87%)">
  <id>ALERT-002</id>
  <triggered>12 minutes ago</triggered>
  <affected>app-server-03</affected>
</alert>
```

**Attributes:**
- `alert[severity]` - "critical", "warning", "info"
- `alert[title]` - Alert message
- `id` - Alert identifier
- `triggered` - When the alert fired
- `affected` - What system/component is affected

## Severity Levels

- **Critical** - Double-line box (`╔═╗`), red color, urgent action required
- **Warning** - Single-line box (`┌─┐`), yellow color, attention needed
- **Info** - Single-line box, cyan color, informational only

## Tips

- Double-line (╔═╗) = critical only, sparingly used
- Single-line (┌─┐) = everything else
- Color by severity: red (critical), yellow (warning), cyan (info)
- Include timestamp and affected system for context
- Keep message concise and actionable
