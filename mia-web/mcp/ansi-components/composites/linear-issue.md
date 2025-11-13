# Linear Issue Components

Complete patterns for displaying Linear issues in various contexts.

## Basic Issue Display

The fundamental 2-line pattern for a Linear issue.

### XML Syntax
```xml
<issue id="LOP-123" title="Issue Title Here" state="In Progress" priority="2"/>
<issue id="LOP-456" title="Another Issue" state="Backlog"/>
<issue id="NEW" title="Create new task" new="true"/>
```

### Rendering Pattern

**Line 1**: Circle + ID + Title
```
\u001b[32m●\u001b[0m \u001b[1m\u001b[32m{ID}\u001b[0m \u001b[1m\u001b[38;5;231m{Title}\u001b[0m
```

**Line 2**: Tree branch + Badges
```
└─ {STATE_BADGE} {PRIORITY_BADGE if priority > 0} {labels if any}
```

### Complete Examples

**With state only**:
```
\u001b[0m\u001b[32m●\u001b[0m \u001b[1m\u001b[32mLOP-45\u001b[0m \u001b[1m\u001b[38;5;231mFinish the quarterly report\u001b[0m
\u001b[0m└─ \u001b[100m\u001b[1m\u001b[38;5;231m Backlog \u001b[0m
```

**With state + priority**:
```
\u001b[0m\u001b[32m●\u001b[0m \u001b[1m\u001b[32mLOP-45\u001b[0m \u001b[1m\u001b[38;5;231mFinish the quarterly report\u001b[0m
\u001b[0m└─ \u001b[100m\u001b[1m\u001b[38;5;231m In Progress \u001b[0m \u001b[41m\u001b[1m\u001b[38;5;231m HIGH \u001b[0m
```

**With state + priority + labels**:
```
\u001b[0m\u001b[32m●\u001b[0m \u001b[1m\u001b[32mLOP-45\u001b[0m \u001b[1m\u001b[38;5;231mFinish the quarterly report\u001b[0m
\u001b[0m└─ \u001b[100m\u001b[1m\u001b[38;5;231m In Progress \u001b[0m \u001b[41m\u001b[1m\u001b[38;5;231m HIGH \u001b[0m finance, q4
```

**New issue**:
```
\u001b[0m\u001b[32m●\u001b[0m \u001b[1m\u001b[32mNEW\u001b[0m \u001b[1m\u001b[38;5;231mCreate new task\u001b[0m
\u001b[0m└─ Summary of what needs to be done
```

## Current Issue Box

Blue box showing the issue currently being triaged.

### XML Syntax
```xml
<current-issue-box id="LOP-123" title="Fix authentication bug" state="Triage" priority="1" description="Users can't log in..."/>
```

### Rendering

```
\u001b[0m\u001b[34m┌─ Current Issue ──────────────────────────────────────────────────────────────────\u001b[0m
\u001b[0m\u001b[34m│\u001b[0m \u001b[32m●\u001b[0m \u001b[1m\u001b[32mLOP-123\u001b[0m \u001b[1m\u001b[38;5;231mFix authentication bug\u001b[0m
\u001b[0m\u001b[34m│\u001b[0m └─ \u001b[100m\u001b[1m\u001b[38;5;231m Triage \u001b[0m \u001b[41m\u001b[1m\u001b[38;5;231m URGENT \u001b[0m
\u001b[0m\u001b[34m│\u001b[0m
\u001b[0m\u001b[34m│\u001b[0m Users can't log in after password reset. Getting 401 errors.
\u001b[0m\u001b[34m└──────────────────────────────────────────────────────────────────────────────────\u001b[0m
```

**Structure**:
- Blue box (`\u001b[34m`)
- Title: "Current Issue"
- Issue display (2 lines)
- Blank line after badges
- Description text (if present)

## Existing Issues Box

Yellow box showing Linear issues that already exist and are related.

### XML Syntax
```xml
<existing-issues-box>
  <issue id="LOP-45" title="Finish quarterly report" state="In Progress" priority="2"/>
  <issue id="LOP-67" title="Review contracts" state="Todo"/>
</existing-issues-box>
```

### Rendering

```
\u001b[0m\u001b[33m┌─ Existing Linear Issues ─────────────────────────────────────────────────────────\u001b[0m
\u001b[0m\u001b[33m│\u001b[0m \u001b[32m●\u001b[0m \u001b[1m\u001b[32mLOP-45\u001b[0m \u001b[1m\u001b[38;5;231mFinish quarterly report\u001b[0m
\u001b[0m\u001b[33m│\u001b[0m └─ \u001b[100m\u001b[1m\u001b[38;5;231m In Progress \u001b[0m \u001b[41m\u001b[1m\u001b[38;5;231m HIGH \u001b[0m
\u001b[0m\u001b[33m│\u001b[0m \u001b[32m●\u001b[0m \u001b[1m\u001b[32mLOP-67\u001b[0m \u001b[1m\u001b[38;5;231mReview contracts\u001b[0m
\u001b[0m\u001b[33m│\u001b[0m └─ \u001b[100m\u001b[1m\u001b[38;5;231m Todo \u001b[0m
\u001b[0m\u001b[33m└──────────────────────────────────────────────────────────────────────────────────\u001b[0m
```

**Structure**:
- Yellow box (`\u001b[33m`)
- Title: "Existing Linear Issues"
- Multiple issues, each taking 2 lines
- NO blank lines between issues

## Related Issues Box

Cyan box showing related issues with relationship context.

### XML Syntax
```xml
<related-issues-box>
  <issue id="LOP-23" title="Similar bug from last week" state="Done" relationship="Similar"/>
  <issue id="LOP-89" title="Parent epic" state="In Progress" relationship="Possible Parent"/>
</related-issues-box>
```

### Rendering

```
\u001b[0m\u001b[36m┌─ Related Issues ─────────────────────────────────────────────────────────────────\u001b[0m
\u001b[0m\u001b[36m│\u001b[0m \u001b[32m●\u001b[0m \u001b[1m\u001b[32mLOP-23\u001b[0m \u001b[1m\u001b[38;5;231mSimilar bug from last week\u001b[0m
\u001b[0m\u001b[36m│\u001b[0m └─ \u001b[100m\u001b[1m\u001b[38;5;231m Done \u001b[0m Relationship: Similar
\u001b[0m\u001b[36m│\u001b[0m \u001b[32m●\u001b[0m \u001b[1m\u001b[32mLOP-89\u001b[0m \u001b[1m\u001b[38;5;231mParent epic\u001b[0m
\u001b[0m\u001b[36m│\u001b[0m └─ \u001b[100m\u001b[1m\u001b[38;5;231m In Progress \u001b[0m Relationship: Possible Parent
\u001b[0m\u001b[36m└──────────────────────────────────────────────────────────────────────────────────\u001b[0m
```

**Structure**:
- Cyan box (`\u001b[36m`)
- Title: "Related Issues"
- Issues with relationship note on metadata line
- Format: `└─ {badges} Relationship: {type}`

## Clarify Analysis Box

Yellow box with structured analysis of the issue.

### XML Syntax
```xml
<clarify-analysis-box
  actionable="Yes"
  type="Action"
  definition="Schedule and complete dentist appointment by end of week"/>
```

### Rendering

```
\u001b[0m\u001b[33m┌─ Clarify Analysis ───────────────────────────────────────────────────────────────\u001b[0m
\u001b[0m\u001b[33m│\u001b[0m Actionable: Yes
\u001b[0m\u001b[33m│\u001b[0m Type: Action
\u001b[0m\u001b[33m│\u001b[0m Definition of Done: Schedule and complete dentist appointment by end of week
\u001b[0m\u001b[33m└──────────────────────────────────────────────────────────────────────────────────\u001b[0m
```

**Structure**:
- Yellow box (`\u001b[33m`)
- Title: "Clarify Analysis"
- Key-value pairs for analysis fields
- Default text color (no special formatting)

## Recommendations Box (Chat Triage Variant)

Magenta box with recommended actions for chat triage.

### XML Syntax
```xml
<recommendations-box>
  <recommendation
    issue="LOP-45"
    title="Add Q4 projections requirement"
    actions="add_comment"
    summary="Finance feedback: Need extra section on Q4 projections. Bob can handle, target EOD Jan 11."/>
  <recommendation
    issue="NEW"
    title="Book dentist appointment this week"
    summary="Need to schedule dentist appointment sometime this week."/>
</recommendations-box>
```

### Rendering

```
\u001b[0m\u001b[35m┌─ Recommendations ────────────────────────────────────────────────────────────────\u001b[0m
\u001b[0m\u001b[35m│\u001b[0m \u001b[32m●\u001b[0m \u001b[1m\u001b[32mLOP-45\u001b[0m \u001b[1m\u001b[38;5;231mAdd Q4 projections requirement\u001b[0m
\u001b[0m\u001b[35m│\u001b[0m ├─ \u001b[45m\u001b[1m\u001b[38;5;231m ADD COMMENT \u001b[0m
\u001b[0m\u001b[35m│\u001b[0m └─ Finance feedback: Need extra section on Q4 projections. Bob can handle, target EOD Jan 11.
\u001b[0m\u001b[35m│\u001b[0m \u001b[32m●\u001b[0m \u001b[1m\u001b[32mNEW\u001b[0m \u001b[1m\u001b[38;5;231mBook dentist appointment this week\u001b[0m
\u001b[0m\u001b[35m│\u001b[0m └─ Need to schedule dentist appointment sometime this week.
\u001b[0m\u001b[35m└──────────────────────────────────────────────────────────────────────────────────\u001b[0m
```

**Structure**:
- Magenta box (`\u001b[35m`)
- Title: "Recommendations"
- For each recommendation:
  - Line 1: Circle + ID/NEW + Title
  - Line 2 (if actions): Tree branch + Action badges
  - Last line: Tree branch + Summary
- **Tree logic**:
  - If actions present: `├─ badges`, then `└─ summary`
  - If no actions: `└─ summary`

## Recommendations Box (Linear Triage Variant)

Magenta box with recommended changes for Linear issue triage.

### XML Syntax
```xml
<recommendations-box type="linear">
  <change action="update_title" value="Fix authentication bug in login flow"/>
  <change action="update_description"/>
  <change action="change_state" value="Todo"/>
  <change action="add_labels" value="bug, security, backend"/>
  <change action="set_estimate" value="5 points (Large, 2-4 hours)"/>
  <summary>Title clarified, added security context, sized as large task</summary>
</recommendations-box>
```

### Rendering

```
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

**Structure**:
- Magenta box (`\u001b[35m`)
- Title: "Recommendations"
- Line 1: "● Recommended Changes:"
- Lines 2-N: Tree branches with action badges + values
  - All except last use `├─`
  - Last action uses `└─`
  - Format: `{BADGE} → {value}` (if value present) OR just `{BADGE}` (if no value)
- Blank line
- Summary line with "Summary: {text}"

## Key Differences: Chat vs Linear Variants

**Chat Triage** (issue-based):
- Multiple issues (existing or NEW)
- Each issue has optional action badges
- Each issue has a summary
- NO "Recommended Changes" header

**Linear Triage** (changes-based):
- Single "Recommended Changes" list
- Action badges with values (→ notation)
- Summary at the end after blank line
- More structured/formal

## Priority Badge Rules

- **Only show if priority > 0**
- Priority 0 = No priority = don't show badge
- Priorities 1-4 = show appropriate badge

## Label Formatting

Labels appear as plain text after badges:
```
└─ \u001b[100m\u001b[1m\u001b[38;5;231m In Progress \u001b[0m bug, frontend, urgent
```

Not as separate badges, just comma-separated text.
