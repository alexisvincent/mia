# Section Boxes - Complete Templates

Integration of all components into complete, multi-section prompts.

## Complete Chat Triage Prompt

A full example showing all sections together.

### XML Syntax
```xml
<chat-triage-prompt>
  <message-box chat="Alice" type="dm">
    <message date="Jan 10" time="14:30" sender="Them" processed="true" highlight="review the contract">
      Can you review the contract?
    </message>
    <message date="Jan 11" time="09:00" sender="You" processed="false" highlight="by EOD">
      Will do by EOD
    </message>
  </message-box>

  <existing-issues-box>
    <issue id="LOP-45" title="Finish quarterly report" state="In Progress" priority="2"/>
  </existing-issues-box>

  <recommendations-box>
    <recommendation
      issue="LOP-45"
      title="Add Q4 projections requirement"
      actions="add_comment"
      summary="Finance feedback: Need extra section. Bob handling, target EOD Jan 11."/>
    <recommendation
      issue="NEW"
      title="Book dentist appointment this week"
      summary="Need to schedule dentist appointment."/>
  </recommendations-box>
</chat-triage-prompt>
```

### Rendered Output

```
\u001b[0m\u001b[34m┌─ \u001b[1mAlice\u001b[0m\u001b[34m ───────────────────────────────────────────────────────────────────────\u001b[0m
\u001b[0m\u001b[34m│\u001b[0m \u001b[90mJan 10 ---\u001b[0m
\u001b[0m\u001b[34m│\u001b[0m \u001b[90m14:30\u001b[0m \u001b[34mThem\u001b[0m Can you \u001b[1m\u001b[38;5;231mreview the contract\u001b[0m?
\u001b[0m\u001b[34m│\u001b[0m \u001b[90m--- New Messages ────────────────────────────────────────────────────────\u001b[0m
\u001b[0m\u001b[34m│\u001b[0m \u001b[90mJan 11 ---\u001b[0m
\u001b[0m\u001b[34m│\u001b[0m \u001b[90m09:00\u001b[0m \u001b[32mYou\u001b[0m  Will do \u001b[1m\u001b[38;5;231mby EOD\u001b[0m
\u001b[0m\u001b[34m└──────────────────────────────────────────────────────────────────────────────────\u001b[0m
\u001b[0m
\u001b[0m\u001b[33m┌─ Existing Linear Issues ─────────────────────────────────────────────────────────\u001b[0m
\u001b[0m\u001b[33m│\u001b[0m \u001b[32m●\u001b[0m \u001b[1m\u001b[32mLOP-45\u001b[0m \u001b[1m\u001b[38;5;231mFinish quarterly report\u001b[0m
\u001b[0m\u001b[33m│\u001b[0m └─ \u001b[100m\u001b[1m\u001b[38;5;231m In Progress \u001b[0m \u001b[41m\u001b[1m\u001b[38;5;231m HIGH \u001b[0m
\u001b[0m\u001b[33m└──────────────────────────────────────────────────────────────────────────────────\u001b[0m
\u001b[0m
\u001b[0m\u001b[35m┌─ Recommendations ────────────────────────────────────────────────────────────────\u001b[0m
\u001b[0m\u001b[35m│\u001b[0m \u001b[32m●\u001b[0m \u001b[1m\u001b[32mLOP-45\u001b[0m \u001b[1m\u001b[38;5;231mAdd Q4 projections requirement\u001b[0m
\u001b[0m\u001b[35m│\u001b[0m ├─ \u001b[45m\u001b[1m\u001b[38;5;231m ADD COMMENT \u001b[0m
\u001b[0m\u001b[35m│\u001b[0m └─ Finance feedback: Need extra section. Bob handling, target EOD Jan 11.
\u001b[0m\u001b[35m│\u001b[0m \u001b[32m●\u001b[0m \u001b[1m\u001b[32mNEW\u001b[0m \u001b[1m\u001b[38;5;231mBook dentist appointment this week\u001b[0m
\u001b[0m\u001b[35m│\u001b[0m └─ Need to schedule dentist appointment.
\u001b[0m\u001b[35m└──────────────────────────────────────────────────────────────────────────────────\u001b[0m
```

## Complete Linear Triage Prompt

A full example for Linear issue triage.

### XML Syntax
```xml
<linear-triage-prompt>
  <current-issue-box
    id="LOP-123"
    title="Fix authentication bug"
    state="Triage"
    priority="1"
    description="Users can't log in after password reset. Getting 401 errors."/>

  <related-issues-box>
    <issue
      id="LOP-89"
      title="Similar auth issue from last month"
      state="Done"
      relationship="Similar"/>
  </related-issues-box>

  <clarify-analysis-box
    actionable="Yes"
    type="Action"
    definition="Fix authentication bug that prevents login after password reset, confirmed by 401 errors"/>

  <recommendations-box type="linear">
    <change action="update_title" value="Fix authentication bug in login flow"/>
    <change action="update_description"/>
    <change action="change_state" value="Todo"/>
    <change action="add_labels" value="bug, security, backend"/>
    <change action="set_estimate" value="5 points (Large, 2-4 hours)"/>
    <summary>Title clarified, added security context, sized as large task</summary>
  </recommendations-box>
</linear-triage-prompt>
```

### Rendered Output

```
\u001b[0m\u001b[34m┌─ Current Issue ──────────────────────────────────────────────────────────────────\u001b[0m
\u001b[0m\u001b[34m│\u001b[0m \u001b[32m●\u001b[0m \u001b[1m\u001b[32mLOP-123\u001b[0m \u001b[1m\u001b[38;5;231mFix authentication bug\u001b[0m
\u001b[0m\u001b[34m│\u001b[0m └─ \u001b[100m\u001b[1m\u001b[38;5;231m Triage \u001b[0m \u001b[41m\u001b[1m\u001b[38;5;231m URGENT \u001b[0m
\u001b[0m\u001b[34m│\u001b[0m
\u001b[0m\u001b[34m│\u001b[0m Users can't log in after password reset. Getting 401 errors.
\u001b[0m\u001b[34m└──────────────────────────────────────────────────────────────────────────────────\u001b[0m
\u001b[0m
\u001b[0m\u001b[36m┌─ Related Issues ─────────────────────────────────────────────────────────────────\u001b[0m
\u001b[0m\u001b[36m│\u001b[0m \u001b[32m●\u001b[0m \u001b[1m\u001b[32mLOP-89\u001b[0m \u001b[1m\u001b[38;5;231mSimilar auth issue from last month\u001b[0m
\u001b[0m\u001b[36m│\u001b[0m └─ \u001b[100m\u001b[1m\u001b[38;5;231m Done \u001b[0m Relationship: Similar
\u001b[0m\u001b[36m└──────────────────────────────────────────────────────────────────────────────────\u001b[0m
\u001b[0m
\u001b[0m\u001b[33m┌─ Clarify Analysis ───────────────────────────────────────────────────────────────\u001b[0m
\u001b[0m\u001b[33m│\u001b[0m Actionable: Yes
\u001b[0m\u001b[33m│\u001b[0m Type: Action
\u001b[0m\u001b[33m│\u001b[0m Definition of Done: Fix authentication bug that prevents login after password reset, confirmed by 401 errors
\u001b[0m\u001b[33m└──────────────────────────────────────────────────────────────────────────────────\u001b[0m
\u001b[0m
\u001b[0m\u001b[35m┌─ Recommendations ────────────────────────────────────────────────────────────────\u001b[0m
\u001b[0m\u001b[35m│\u001b[0m \u001b[32m●\u001b[0m Recommended Changes:
\u001b[0m\u001b[35m│\u001b[0m ├─ \u001b[44m\u001b[1m\u001b[38;5;231m UPDATE TITLE \u001b[0m → "Fix authentication bug in login flow"
\u001b[0m\u001b[35m│\u001b[0m ├─ \u001b[44m\u001b[1m\u001b[38;5;231m UPDATE DESCRIPTION \u001b[0m
\u001b[0m\u001b[35m│\u001b[0m ├─ \u001b[42m\u001b[1m\u001b[38;5;231m CHANGE STATE \u001b[0m → Todo
\u001b[0m\u001b[35m│\u001b[0m ├─ \u001b[45m\u001b[1m\u001b[38;5;231m ADD LABELS \u001b[0m bug, security, backend
\u001b[0m\u001b[35m│\u001b[0m └─ \u001b[43m\u001b[1m\u001b[38;5;231m SET ESTIMATE \u001b[0m 5 points (Large, 2-4 hours)
\u001b[0m\u001b[35m│\u001b[0m
\u001b[0m\u001b[35m│\u001b[0m Summary: Title clarified, added security context, sized as large task
\u001b[0m\u001b[35m└──────────────────────────────────────────────────────────────────────────────────\u001b[0m
```

## Section Spacing

Between boxes, use a single blank line:
```
\u001b[0m\u001b[33m└──────────────────────────────────────────────────────────────────────────────────\u001b[0m
\u001b[0m
\u001b[0m\u001b[35m┌─ Recommendations ────────────────────────────────────────────────────────────────\u001b[0m
```

This creates clear visual separation while keeping the prompt compact.

## Section Order Guidelines

### Chat Triage Order:
1. Message Preview (blue box)
2. Existing Linear Issues (yellow box) - if any
3. Recommendations (magenta box)

### Linear Triage Order:
1. Current Issue (blue box)
2. Related Issues (cyan box) - if any
3. Clarify Analysis (yellow box)
4. Recommendations (magenta box)

## Customization

The XML structure is flexible. You can:
- Omit sections (e.g., no existing issues, no related issues)
- Add custom sections with `<box>` tags
- Mix and match components as needed

### Example: Custom Section
```xml
<box color="gray" title="Additional Context">
This issue was reported by 5 users in the last hour.
Customer support is receiving multiple tickets.
</box>
```

## Key Principles for Complete Prompts

1. **Consistent widths** - All boxes ~80 characters
2. **Clear hierarchy** - Message → Existing → Recommendations
3. **Color coding** - Blue=current/messages, Yellow=existing/analysis, Magenta=recommendations, Cyan=related
4. **Compact layout** - Single blank line between sections
5. **Scannable** - Green IDs, bold titles, clear badges
6. **Actionable** - Recommendations clearly marked with action badges
7. **Complete context** - Show enough to make informed decisions

## Complex Example: Multiple Messages, Multiple Issues

```
\u001b[0m\u001b[34m┌─ \u001b[1mProject Team\u001b[0m\u001b[34m ──────────────────────────────────────────────────────────────\u001b[0m
\u001b[0m\u001b[34m│\u001b[0m \u001b[90mJan 10 ---\u001b[0m
\u001b[0m\u001b[34m│\u001b[0m \u001b[90m10:15\u001b[0m \u001b[34mAlice\u001b[0m Need to update \u001b[1m\u001b[38;5;231mdocs\u001b[0m before release
\u001b[0m\u001b[34m│\u001b[0m \u001b[90m10:20\u001b[0m \u001b[34mBob  \u001b[0m I can handle \u001b[1m\u001b[38;5;231mAPI docs\u001b[0m
\u001b[0m\u001b[34m│\u001b[0m \u001b[90m--- New Messages ────────────────────────────────────────────────────────\u001b[0m
\u001b[0m\u001b[34m│\u001b[0m \u001b[90mJan 11 ---\u001b[0m
\u001b[0m\u001b[34m│\u001b[0m \u001b[90m09:00\u001b[0m \u001b[32mYou  \u001b[0m I'll do \u001b[1m\u001b[38;5;231muser guide\u001b[0m
\u001b[0m\u001b[34m└──────────────────────────────────────────────────────────────────────────────────\u001b[0m
\u001b[0m
\u001b[0m\u001b[33m┌─ Existing Linear Issues ─────────────────────────────────────────────────────────\u001b[0m
\u001b[0m\u001b[33m│\u001b[0m \u001b[32m●\u001b[0m \u001b[1m\u001b[32mLOP-100\u001b[0m \u001b[1m\u001b[38;5;231mDocumentation updates for v2.0\u001b[0m
\u001b[0m\u001b[33m│\u001b[0m └─ \u001b[100m\u001b[1m\u001b[38;5;231m In Progress \u001b[0m \u001b[41m\u001b[1m\u001b[38;5;231m HIGH \u001b[0m
\u001b[0m\u001b[33m│\u001b[0m \u001b[32m●\u001b[0m \u001b[1m\u001b[32mLOP-101\u001b[0m \u001b[1m\u001b[38;5;231mAPI documentation review\u001b[0m
\u001b[0m\u001b[33m│\u001b[0m └─ \u001b[100m\u001b[1m\u001b[38;5;231m Todo \u001b[0m
\u001b[0m\u001b[33m└──────────────────────────────────────────────────────────────────────────────────\u001b[0m
\u001b[0m
\u001b[0m\u001b[35m┌─ Recommendations ────────────────────────────────────────────────────────────────\u001b[0m
\u001b[0m\u001b[35m│\u001b[0m \u001b[32m●\u001b[0m \u001b[1m\u001b[32mLOP-100\u001b[0m \u001b[1m\u001b[38;5;231mAssign user guide to Alex\u001b[0m
\u001b[0m\u001b[35m│\u001b[0m ├─ \u001b[45m\u001b[1m\u001b[38;5;231m ADD COMMENT \u001b[0m
\u001b[0m\u001b[35m│\u001b[0m └─ Alex volunteered to write user guide. Target: before release.
\u001b[0m\u001b[35m│\u001b[0m \u001b[32m●\u001b[0m \u001b[1m\u001b[32mLOP-101\u001b[0m \u001b[1m\u001b[38;5;231mAssign API docs to Bob\u001b[0m
\u001b[0m\u001b[35m│\u001b[0m ├─ \u001b[45m\u001b[1m\u001b[38;5;231m ADD COMMENT \u001b[0m
\u001b[0m\u001b[35m│\u001b[0m └─ Bob volunteered for API docs. Coordinate with Alex on timing.
\u001b[0m\u001b[35m└──────────────────────────────────────────────────────────────────────────────────\u001b[0m
```

This demonstrates:
- Group chat with multiple participants
- Multiple existing issues
- Multiple recommendations
- Proper alignment, coloring, and formatting throughout
- Clear separation between sections
- Actionable highlights in messages
- Complete context for decision-making
