# Badges

Badges are colored, high-contrast indicators for status, priority, and actions.

## Badge Format

ALL badges MUST use this exact format:
```
\u001b[{background}m\u001b[1m\u001b[38;5;231m TEXT \u001b[0m
```

Components:
- `\u001b[{background}m` - Background color code
- `\u001b[1m` - Bold
- `\u001b[38;5;231m` - Very bright white text (**NOT** `\u001b[97m`!)
- Space padding around text
- `\u001b[0m` - Reset

## Priority Badges

### XML Syntax
```xml
<badge type="priority" value="1"/> <!-- URGENT -->
<badge type="priority" value="2"/> <!-- HIGH -->
<badge type="priority" value="3"/> <!-- MEDIUM -->
<badge type="priority" value="4"/> <!-- LOW -->
```

### Rendering

**Priority 1 (Urgent)**:
```
\u001b[41m\u001b[1m\u001b[38;5;231m URGENT \u001b[0m
```

**Priority 2 (High)**:
```
\u001b[41m\u001b[1m\u001b[38;5;231m HIGH \u001b[0m
```

**Priority 3 (Medium)**:
```
\u001b[43m\u001b[1m\u001b[38;5;231m MEDIUM \u001b[0m
```

**Priority 4 (Low)**:
```
\u001b[100m\u001b[1m\u001b[38;5;231m LOW \u001b[0m
```

## State Badges

### XML Syntax
```xml
<badge type="state" value="In Progress"/>
<badge type="state" value="Todo"/>
<badge type="state" value="Backlog"/>
```

### Rendering

All state badges use gray background:
```
\u001b[100m\u001b[1m\u001b[38;5;231m {STATE_NAME} \u001b[0m
```

Examples:
```
\u001b[100m\u001b[1m\u001b[38;5;231m In Progress \u001b[0m
\u001b[100m\u001b[1m\u001b[38;5;231m Todo \u001b[0m
\u001b[100m\u001b[1m\u001b[38;5;231m Backlog \u001b[0m
```

## Action Badges

### XML Syntax
```xml
<badge type="action" value="add_comment"/>
<badge type="action" value="update_description"/>
<badge type="action" value="update_title"/>
<badge type="action" value="change_state"/>
<badge type="action" value="add_labels"/>
<badge type="action" value="set_estimate"/>
<badge type="action" value="link_parent"/>
```

### Rendering

**ADD COMMENT** (magenta):
```
\u001b[45m\u001b[1m\u001b[38;5;231m ADD COMMENT \u001b[0m
```

**UPDATE DESCRIPTION** (blue):
```
\u001b[44m\u001b[1m\u001b[38;5;231m UPDATE DESCRIPTION \u001b[0m
```

**UPDATE TITLE** (blue):
```
\u001b[44m\u001b[1m\u001b[38;5;231m UPDATE TITLE \u001b[0m
```

**CHANGE STATE** (green):
```
\u001b[42m\u001b[1m\u001b[38;5;231m CHANGE STATE \u001b[0m
```

**ADD LABELS** (magenta):
```
\u001b[45m\u001b[1m\u001b[38;5;231m ADD LABELS \u001b[0m
```

**SET ESTIMATE** (yellow):
```
\u001b[43m\u001b[1m\u001b[38;5;231m SET ESTIMATE \u001b[0m
```

**LINK TO PARENT** (cyan):
```
\u001b[46m\u001b[1m\u001b[38;5;231m LINK TO PARENT \u001b[0m
```

## Badge Spacing

When displaying multiple badges on the same line, separate them with a single space:

```
\u001b[100m\u001b[1m\u001b[38;5;231m In Progress \u001b[0m \u001b[41m\u001b[1m\u001b[38;5;231m HIGH \u001b[0m
```

## Usage Guidelines

- **Priority badges**: Only show if priority is set (not 0)
- **State badges**: Always show the current state
- **Action badges**: Show all applicable actions for a recommendation
- **NO "CREATE NEW" badge**: Don't create a badge for creating new issues
- **Spacing**: Always include space padding inside the badge text

## Common Patterns

### Issue Metadata Line (state + priority)
```
└─ \u001b[100m\u001b[1m\u001b[38;5;231m In Progress \u001b[0m \u001b[41m\u001b[1m\u001b[38;5;231m URGENT \u001b[0m
```

### Recommendation Actions (multiple action badges)
```
├─ \u001b[45m\u001b[1m\u001b[38;5;231m ADD COMMENT \u001b[0m \u001b[44m\u001b[1m\u001b[38;5;231m UPDATE DESCRIPTION \u001b[0m
```

### With Labels (state + priority + labels as text)
```
└─ \u001b[100m\u001b[1m\u001b[38;5;231m Backlog \u001b[0m \u001b[43m\u001b[1m\u001b[38;5;231m MEDIUM \u001b[0m bug, frontend
```
