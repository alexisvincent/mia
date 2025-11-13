# ANSI Formatter Tool Test Cases

Once the tool is available as `mcp__mia-local__format_ansi`, test with these examples:

## Test 1: Simple Badge
```xml
<badge type="priority" value="1"/>
```

Expected: `\u001b[41m\u001b[1m\u001b[38;5;231m URGENT \u001b[0m`

## Test 2: Linear Issue
```xml
<issue id="LOP-123" title="Fix authentication bug" state="In Progress" priority="2"/>
```

Expected:
```
\u001b[0m\u001b[32m●\u001b[0m \u001b[1m\u001b[32mLOP-123\u001b[0m \u001b[1m\u001b[38;5;231mFix authentication bug\u001b[0m
\u001b[0m└─ \u001b[100m\u001b[1m\u001b[38;5;231m In Progress \u001b[0m \u001b[41m\u001b[1m\u001b[38;5;231m HIGH \u001b[0m
```

## Test 3: Simple Box
```xml
<box color="blue" title="Test Box">
Line 1 content
Line 2 content
</box>
```

Expected:
```
\u001b[0m\u001b[34m┌─ Test Box ───────────────────────────────────────────────────────────────────────\u001b[0m
\u001b[0m\u001b[34m│\u001b[0m Line 1 content
\u001b[0m\u001b[34m│\u001b[0m Line 2 content
\u001b[0m\u001b[34m└──────────────────────────────────────────────────────────────────────────────────\u001b[0m
```

## Test 4: Message Box
```xml
<message-box chat="Alice" type="dm">
  <message date="Jan 11" time="09:00" sender="You" processed="false" highlight="by EOD">Will do by EOD</message>
</message-box>
```

Expected:
```
\u001b[0m\u001b[34m┌─ \u001b[1mAlice\u001b[0m\u001b[34m ───────────────────────────────────────────────────────────────────────\u001b[0m
\u001b[0m\u001b[34m│\u001b[0m \u001b[90mJan 11 ---\u001b[0m
\u001b[0m\u001b[34m│\u001b[0m \u001b[90m09:00\u001b[0m \u001b[32mYou\u001b[0m Will do \u001b[1m\u001b[38;5;231mby EOD\u001b[0m
\u001b[0m\u001b[34m└──────────────────────────────────────────────────────────────────────────────────\u001b[0m
```

## Test 5: Complete Recommendations Box
```xml
<recommendations-box>
  <recommendation
    issue="LOP-45"
    title="Add Q4 projections requirement"
    actions="add_comment"
    summary="Finance feedback: Need extra section on Q4 projections."/>
  <recommendation
    issue="NEW"
    title="Book dentist appointment"
    summary="Schedule dentist appointment this week."/>
</recommendations-box>
```

Expected:
```
\u001b[0m\u001b[35m┌─ Recommendations ────────────────────────────────────────────────────────────────\u001b[0m
\u001b[0m\u001b[35m│\u001b[0m \u001b[32m●\u001b[0m \u001b[1m\u001b[32mLOP-45\u001b[0m \u001b[1m\u001b[38;5;231mAdd Q4 projections requirement\u001b[0m
\u001b[0m\u001b[35m│\u001b[0m ├─ \u001b[45m\u001b[1m\u001b[38;5;231m ADD COMMENT \u001b[0m
\u001b[0m\u001b[35m│\u001b[0m └─ Finance feedback: Need extra section on Q4 projections.
\u001b[0m\u001b[35m│\u001b[0m \u001b[32m●\u001b[0m \u001b[1m\u001b[32mNEW\u001b[0m \u001b[1m\u001b[38;5;231mBook dentist appointment\u001b[0m
\u001b[0m\u001b[35m│\u001b[0m └─ Schedule dentist appointment this week.
\u001b[0m\u001b[35m└──────────────────────────────────────────────────────────────────────────────────\u001b[0m
```

## How to Test

1. Ensure the dev server has restarted and loaded the new tool
2. Reconnect Claude Code's MCP connection (run `/mcp` command)
3. Use the tool like:
   ```
   mcp__mia-local__format_ansi({ xml: "<badge type='priority' value='1'/>" })
   ```
4. Verify the output matches the expected ANSI-formatted string
5. Test with progressively more complex examples
