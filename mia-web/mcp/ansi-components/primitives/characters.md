# Characters

Special Unicode characters used for drawing boxes, trees, and indicators.

## Box Drawing Characters

### Basic Box Components
```
┌  - Top left corner
─  - Horizontal line
┐  - Top right corner (RARELY USED - we use left-side-only boxes)
│  - Vertical line
└  - Bottom left corner
┘  - Bottom right corner (RARELY USED)
```

### Left-Side-Only Box Pattern
```
┌─ Title ─────────────────────────────────────────────────
│ Content
│ More content
└──────────────────────────────────────────────────────────
```

Remember: We DO NOT close the right side of boxes!

## Tree Structure Characters

### Branch Types
```
├─  - Connecting branch (more items follow)
└─  - Final branch (last item)
```

### Usage Examples

**Simple tree (2 items)**:
```
● Issue Title
├─ First item
└─ Last item
```

**Complex tree (multiple items)**:
```
● Issue Title
├─ Item 1
├─ Item 2
├─ Item 3
└─ Last item
```

**Nested (rarely used)**:
```
● Parent
├─ Child 1
│  ├─ Grandchild 1
│  └─ Grandchild 2
└─ Child 2
```

## Status Indicators

### Success/Active Indicators
```
●  - Filled circle (green) - Active, exists, found, complete
✓  - Check mark (green) - Success, verified
```

### Pending/Warning Indicators
```
○  - Empty circle (yellow) - New, pending
→  - Arrow (yellow) - Action item, next step
```

### Error Indicators
```
×  - X mark (red) - Error, failed, blocked
```

### Generic Indicators
```
•  - Bullet point (gray) - Generic separator, list item
```

## Usage Guidelines

### With Linear Issues
Always use filled circle for existing issues:
```
\u001b[32m●\u001b[0m \u001b[1m\u001b[32mLOP-123\u001b[0m \u001b[1m\u001b[38;5;231mIssue Title\u001b[0m
```

For new issues, use the text "NEW" instead of a circle:
```
\u001b[32m●\u001b[0m \u001b[1m\u001b[32mNEW\u001b[0m \u001b[1m\u001b[38;5;231mNew Issue Title\u001b[0m
```

### With Tree Structures
Use connecting branches for all items except the last:
```
● Issue
├─ Badge 1
├─ Badge 2
└─ Summary text
```

### In Lists
Use bullets for simple lists:
```
• Item 1
• Item 2
• Item 3
```

## Common Patterns

### Issue with Metadata (2 lines)
```
\u001b[32m●\u001b[0m \u001b[1m\u001b[32mLOP-123\u001b[0m \u001b[1m\u001b[38;5;231mIssue Title Here\u001b[0m
└─ {badges go here}
```

### Issue with Actions and Summary (3 lines)
```
\u001b[32m●\u001b[0m \u001b[1m\u001b[32mLOP-123\u001b[0m \u001b[1m\u001b[38;5;231mIssue Title Here\u001b[0m
├─ {action badges go here}
└─ Summary text goes here
```

### Issue with Just Summary (2 lines, NEW issues)
```
\u001b[32m●\u001b[0m \u001b[1m\u001b[32mNEW\u001b[0m \u001b[1m\u001b[38;5;231mNew Issue Title\u001b[0m
└─ Summary text goes here
```
