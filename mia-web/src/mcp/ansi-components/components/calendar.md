# Calendar/Schedule

Show dates with highlights for events and deadlines.

## Example

```
\u001b[0m\u001b[90mMON   TUE   WED   THU   FRI   SAT   SUN\u001b[0m
\u001b[0m───   ───   ───   ───   ───   ───   ───
\u001b[0m\u001b[33m11\u001b[0m    12    \u001b[32m13\u001b[0m    14    \u001b[32m15\u001b[0m    16    17
\u001b[0m\u001b[33m•\u001b[0m           \u001b[32m••\u001b[0m          \u001b[32m•\u001b[0m
\u001b[0m
\u001b[0m18    19    20    \u001b[31m21\u001b[0m    22    23    24
\u001b[0m                  \u001b[31m•\u001b[0m
```

## XML Syntax

```xml
<calendar month="November" year="2025">
  <week>
    <day date="11" current="true">1 event</day>
    <day date="12"/>
    <day date="13">2 events</day>
    <day date="14"/>
    <day date="15">1 event</day>
    <day date="16"/>
    <day date="17"/>
  </week>
  <week>
    <day date="18"/>
    <day date="19"/>
    <day date="20"/>
    <day date="21" importance="high">1 critical</day>
    <day date="22"/>
    <day date="23"/>
    <day date="24"/>
  </week>
</calendar>
```

**Attributes:**
- `calendar[month]` - Month name
- `calendar[year]` - Year
- `day[date]` - Day number
- `day[current]` - "true" for today
- `day[importance]` - "normal", "high" (affects color)
- Day content - Event count or description

## Color Coding

- **Yellow** (`\u001b[33m`) - Current day (today)
- **Green** (`\u001b[32m`) - Days with regular events
- **Red** (`\u001b[31m`) - Days with critical/major events
- **Gray** (`\u001b[90m`) - Headers and days without events

## Event Indicators

- Green dots (`\u001b[32m•\u001b[0m`) - Regular events
- Red dots (`\u001b[31m•\u001b[0m`) - Critical events
- Multiple dots for multiple events

## Tips

- Keep compact for overview
- Use dots below dates for quick scanning
- Highlight current day in yellow
- Use red sparingly for truly critical dates
- Great for showing upcoming deadlines and milestones
