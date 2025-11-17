# Code Diffs

Show file changes with line numbers. Great for reviewing configuration or code updates.

## Example

```
\u001b[0m\u001b[90m  12\u001b[0m   "dependencies": {
\u001b[0m\u001b[31m- 13\u001b[0m     "react": "^17.0.2",
\u001b[0m\u001b[32m+ 13\u001b[0m     "react": "^18.2.0",
\u001b[0m\u001b[31m- 14\u001b[0m     "react-dom": "^17.0.2",
\u001b[0m\u001b[32m+ 14\u001b[0m     "react-dom": "^18.2.0",
\u001b[0m\u001b[90m  15\u001b[0m     "axios": "^1.6.0",
```

## XML Syntax

```xml
<diff file="package.json">
  <line number="12" type="unchanged">  "dependencies": {</line>
  <line number="13" type="removed">    "react": "^17.0.2",</line>
  <line number="13" type="added">    "react": "^18.2.0",</line>
  <line number="14" type="removed">    "react-dom": "^17.0.2",</line>
  <line number="14" type="added">    "react-dom": "^18.2.0",</line>
  <line number="15" type="unchanged">    "axios": "^1.6.0",</line>
</diff>
```

**Attributes:**
- `diff[file]` - Optional filename header
- `line[number]` - Line number in file
- `line[type]` - "unchanged", "removed", "added"

## Color Coding

- **Gray** (`\u001b[90m`) + no marker - Unchanged lines (context)
- **Red** (`\u001b[31m`) + `-` prefix - Deleted lines
- **Green** (`\u001b[32m`) + `+` prefix - Added lines

## Tips

- Include line numbers for reference
- Limit to 10-15 visible lines for readability
- Show 1-2 lines of context above/below changes
- Great for configuration changes, dependency updates, code review
- Keep original indentation in content
