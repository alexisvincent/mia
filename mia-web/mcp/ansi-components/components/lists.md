# Lists and Trees

List structures and tree hierarchies for organizing nested information.

## Tree Structures

Use tree characters (`├─` and `└─`) to show hierarchical relationships.

### XML Syntax

```xml
<tree>
  <item>First item</item>
  <item>Second item</item>
  <item last="true">Last item</item>
</tree>
```

Or more naturally, the formatter should detect which item is last automatically.

### Basic Rules

1. **Connecting branch** (`├─`) - Used for all items EXCEPT the last
2. **Final branch** (`└─`) - Used ONLY for the last item
3. **Indentation**: Tree items typically appear after a bullet/circle on the previous line
4. **Spacing**: Single space after the branch character

### Common Patterns

**Two items**:
```
\u001b[32m●\u001b[0m \u001b[1m\u001b[32mLOP-123\u001b[0m \u001b[1m\u001b[38;5;231mIssue Title\u001b[0m
└─ \u001b[100m\u001b[1m\u001b[38;5;231m In Progress \u001b[0m
```

**Three items**:
```
\u001b[32m●\u001b[0m \u001b[1m\u001b[32mLOP-123\u001b[0m \u001b[1m\u001b[38;5;231mIssue Title\u001b[0m
├─ \u001b[100m\u001b[1m\u001b[38;5;231m In Progress \u001b[0m
└─ Summary text here
```

**Four items (with action badges)**:
```
\u001b[32m●\u001b[0m \u001b[1m\u001b[32mLOP-123\u001b[0m \u001b[1m\u001b[38;5;231mIssue Title\u001b[0m
├─ \u001b[45m\u001b[1m\u001b[38;5;231m ADD COMMENT \u001b[0m
├─ \u001b[44m\u001b[1m\u001b[38;5;231m UPDATE DESCRIPTION \u001b[0m
└─ Summary text explaining the changes
```

## Bullet Lists

Simple lists without hierarchy use bullet points (`•`).

### XML Syntax

```xml
<list>
  <item>First item</item>
  <item>Second item</item>
  <item>Third item</item>
</list>
```

### Rendering

```
\u001b[90m•\u001b[0m First item
\u001b[90m•\u001b[0m Second item
\u001b[90m•\u001b[0m Third item
```

## Usage Guidelines

### With Linear Issues

The standard pattern for issues is:
1. Line 1: Circle + ID + Title
2. Line 2: Tree structure with metadata

**Issue with state only**:
```
\u001b[32m●\u001b[0m \u001b[1m\u001b[32mLOP-45\u001b[0m \u001b[1m\u001b[38;5;231mIssue Title Here\u001b[0m
└─ \u001b[100m\u001b[1m\u001b[38;5;231m Backlog \u001b[0m
```

**Issue with state + priority**:
```
\u001b[32m●\u001b[0m \u001b[1m\u001b[32mLOP-45\u001b[0m \u001b[1m\u001b[38;5;231mIssue Title Here\u001b[0m
└─ \u001b[100m\u001b[1m\u001b[38;5;231m In Progress \u001b[0m \u001b[41m\u001b[1m\u001b[38;5;231m HIGH \u001b[0m
```

**Issue with state + priority + labels**:
```
\u001b[32m●\u001b[0m \u001b[1m\u001b[32mLOP-45\u001b[0m \u001b[1m\u001b[38;5;231mIssue Title Here\u001b[0m
└─ \u001b[100m\u001b[1m\u001b[38;5;231m In Progress \u001b[0m \u001b[41m\u001b[1m\u001b[38;5;231m HIGH \u001b[0m bug, frontend
```

### With Recommendations

Recommendations often have multiple tree levels:

**Update existing issue**:
```
\u001b[32m●\u001b[0m \u001b[1m\u001b[32mLOP-45\u001b[0m \u001b[1m\u001b[38;5;231mAdd Q4 projections requirement\u001b[0m
├─ \u001b[45m\u001b[1m\u001b[38;5;231m ADD COMMENT \u001b[0m
└─ Finance feedback needs addressing. Bob can handle, target EOD Jan 11.
```

**Create new issue**:
```
\u001b[32m●\u001b[0m \u001b[1m\u001b[32mNEW\u001b[0m \u001b[1m\u001b[38;5;231mBook dentist appointment this week\u001b[0m
└─ Need to schedule dentist appointment sometime this week.
```

### With Action Changes (Linear Triage)

```
\u001b[32m●\u001b[0m Recommended Changes:
├─ \u001b[44m\u001b[1m\u001b[38;5;231m UPDATE TITLE \u001b[0m → "Fix authentication bug in login flow"
├─ \u001b[44m\u001b[1m\u001b[38;5;231m UPDATE DESCRIPTION \u001b[0m
├─ \u001b[42m\u001b[1m\u001b[38;5;231m CHANGE STATE \u001b[0m → Todo
├─ \u001b[45m\u001b[1m\u001b[38;5;231m ADD LABELS \u001b[0m bug, security, backend
└─ \u001b[43m\u001b[1m\u001b[38;5;231m SET ESTIMATE \u001b[0m 5 points (Large, 2-4 hours)
```

## Nested Trees (Rare)

Only use nested trees when absolutely necessary. Keep it to 2 levels max.

```
\u001b[32m●\u001b[0m Parent Issue
├─ First thing
│  ├─ Nested thing 1
│  └─ Nested thing 2
└─ Last thing
```

Note the `│` for continuing the vertical line from the parent level.

## Spacing and Alignment

- No extra blank lines between tree items
- Tree items align under the bullet/circle of their parent
- Content after `├─` or `└─` starts immediately (single space)

## Visual Consistency

All tree branches at the same level should align:

✅ **Correct**:
```
├─ Item 1
├─ Item 2
└─ Item 3
```

❌ **Wrong**:
```
├─ Item 1
  ├─ Item 2
    └─ Item 3
```
