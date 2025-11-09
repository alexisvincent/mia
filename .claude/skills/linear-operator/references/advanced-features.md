# Advanced Linear Features

Comprehensive guide to SLAs, estimates, due dates, priority, and issue relations.

## Service Level Agreements (SLAs)

> Business and Enterprise plans only

### Overview

SLAs automatically apply deadlines to issues based on defined rules. Use them for:
- Customer support response times
- Internal bug fix timelines
- Time-sensitive issue resolution
- Service level commitments

### SLA Visual Indicators

**Fire icon colors**:
- **Gray** - Low risk (>1 week away)
- **Yellow** - Medium risk (within 1 week)
- **Orange** - High risk (within 1 day)
- **Red** - Breached (past deadline)

**Post-completion**:
- **Green checkmark** - Achieved (completed on time)
- **Red X** - Failed (completed late)
- Shows exact completion time

### Configure SLAs

**Enable SLAs**:
```
Settings > Workspace > SLAs
```

**Default rules** (auto-created on enable):
- Urgent priority → 24 hour SLA
- High priority → 1 week SLA
- Medium/Low/No priority → Remove SLA

### Creating SLA Rules

**Rule builder**:
1. Click "New Rule"
2. Set time interval
3. Add filter conditions
4. Save rule

**Time interval options**:
- 12 hours
- 24 hours
- 48 hours
- 1 week, 2 weeks, 4 weeks
- Custom: Hours, Days, Business days, Weeks

**Filter conditions** (combine multiple):
- Team
- Status
- Assignee
- Creator
- Priority
- Labels
- Project
- Project Status
- Initiative

**Example rules**:
```
When Priority is Urgent and Label is "customer-facing"
→ Add 4 hour SLA

When Team is "Support" and Status is "Triage"
→ Add 24 hour SLA

When Priority is changed to Medium
→ Remove SLA
```

### Business Day SLAs

**Configure work week**:
```
Settings > SLAs > Business day settings
```

**Options**:
- Monday-Friday (default)
- Sunday-Thursday

**Affects**:
- SLA calculations
- Project update reminders
- All "skip weekends" features

**Setting SLA with business days**:
- Manual SLA: Choose "business days" in duration picker
- Custom rules: Select "Business day" unit

### SLA Removal Rules

**Purpose**: Maintain data hygiene by removing irrelevant SLAs

**Example removal rule**:
```
When Priority changes to Medium, Low, or None
→ Remove SLA
```

**Recommended**: Keep default removal rules for priority downgrading

### SLA Status Categories

Status | Definition | Icon Color
--- | --- | ---
Low risk | >1 week remaining | Gray
Medium risk | Within 1 week | Yellow
High risk | Within 1 day | Orange
Breached | Past deadline | Red
Achieved | Completed on time | Green ✓
Failed | Completed late | Red ✗

### SLA Notifications

**Automatic notifications**:
- 24 hours before breach (all subscribers)
- When SLA is breached (all subscribers)
- Email sent immediately if enabled

**Optional team notifications**:
```
Settings > Account > Notifications
"Notify me of SLA changes in my teams"
```

**Who receives**:
- Issue subscribers (assignee, creator, mentioned)
- Team members (if opted in)

### Manual SLAs

**Add SLA during creation**:
```
Issue composer > ··· menu > "Set SLA"
```

**Add SLA after creation**:
```
Issue view > ··· menu > "Set SLA"
```

**Override removal rules**:
- Must add after issue creation
- Adding during creation → removed if conflicts with rule
- Adding after creation → overrides removal rule

### Viewing and Reporting

**Filter by SLA status**:
```
Filter menu (F) > SLA status
- Breached
- High Risk
- Medium Risk
- Low Risk
- Achieved
- Failed
- No SLA
```

**Insights reporting**:
```
Measure: Issue count
Dimension: SLA status
```

Shows breakdown of SLA performance.

**Custom views**:
Create filtered views for:
- All SLA issues
- High/Medium risk issues
- Breached issues needing attention

### SLA Best Practices

**Start simple**:
- Use default priority-based rules
- Add team-specific rules gradually
- Monitor before enforcing

**Appropriate timelines**:
- Urgent: 4-24 hours
- High: 1-3 days
- Standard: 1 week

**Include removal rules**:
- Prevent SLA accumulation
- Clean up downgraded issues

**Team notifications**:
- Support teams: Enable team SLA notifications
- Other teams: Subscribe to specific issues

### SLA vs Due Dates

**Cannot use both**:
- Issue has either SLA or due date
- SLA replaces due date when applied
- Choose based on use case

**When to use SLA**:
- Automatic deadline application
- Rule-based timeline enforcement
- Consistent service levels
- Team/category-wide policies

**When to use due date**:
- One-off deadlines
- External commitments
- Project milestones
- Manual timeline control

---

## Estimates

### Overview

Estimates describe issue complexity or size. Used for:
- Sprint/cycle planning
- Velocity tracking
- Effort calculation
- Team capacity

### Enable Estimates

**Team-level setting**:
```
Team Settings > General > Estimates
Toggle "Enable estimates"
```

**Per-team configuration**:
- Different scales per team
- Different settings per team
- Teams can collaborate with different estimates

### Estimate Scales

**Exponential**:
- 1, 2, 4, 8, 16
- Extended: 32, 64
- Geometric growth

**Fibonacci**:
- 1, 2, 3, 5, 8
- Extended: 13, 21
- Natural growth pattern

**Linear**:
- 1, 2, 3, 4, 5
- Extended: 6, 7
- Simple progression

**T-Shirt**:
- XS, S, M, L, XL
- Extended: XXL, XXXL
- Non-technical sizing

**T-Shirt to number mapping** (for analytics):
```
XS = 1 (Fibonacci)
S = 2
M = 3
L = 5
XL = 8
XXL = 13
XXXL = 21
```

### Scale Options

**Extended scales**:
- Adds 2 additional values
- Enable for larger issues
- Toggle in estimate settings

**Zero estimates**:
- Allow 0 as valid estimate
- Useful for trivial tasks
- Enable in settings

**Unestimated issues**:
- Default: Count as 1 point
- Option: Don't count in totals
- Configure in settings

### Managing Estimates

**Add estimate**:
```
Keyboard: Shift + E
During creation: Set in properties
Bulk: Select issues → Shift + E
```

**Edit estimate**:
```
Same as adding: Shift + E
```

**Remove estimate**:
```
Shift + E → Select "No estimate"
```

### Filtering by Estimate

**Filter menu**:
```
F → Estimates → Select value(s)
```

**Filter options**:
- Specific values (1, 2, 3, etc.)
- Ranges
- Has estimate / No estimate

**Custom views**:
Create views for:
- Unestimated backlog
- Large issues (>5 points)
- Quick wins (<3 points)

### Analytics and Reporting

**Effort calculation**:
- Sum of all estimate values
- Used in cycle/project progress
- Velocity tracking

**Display in views**:
- Toggle "Effort" in display options
- Shows total estimate value
- Hover for count + effort

**Cycle/project graphs**:
- Completion percentage by effort
- Remaining effort
- Velocity charts

**When estimates disabled**:
- Default: 1 point per issue
- Analytics calculate as issue count

### Estimate Best Practices

**Right-sizing issues**:
- Large estimates (>8) → Break down issue
- Uncertainty indicator → Need more planning
- Prefer smaller, clearer issues

**Estimation sessions**:
- Team estimates together
- Planning poker
- Relative sizing

**Scale selection**:
- **Fibonacci**: Most popular, natural growth
- **T-Shirt**: Non-technical teams
- **Linear**: Simple, straightforward
- **Exponential**: Technical, algorithmic work

**Refinement**:
- Estimate during backlog grooming
- Re-estimate if scope changes
- Remove estimate if obsolete

---

## Due Dates

### Overview

Due dates indicate when time-sensitive work must be completed. Use for:
- External deadlines
- Time-bound commitments
- Milestone tracking
- Project deliverables

### Setting Due Dates

**Add due date**:
```
Keyboard: Shift + D
During creation: ··· menu → "Set due date"
```

**Date picker options**:
- Specific date
- Relative (Today, Tomorrow, Next week)
- Custom

### Due Date Indicators

**Calendar icon colors**:
- **Red** - Overdue (past due)
- **Orange** - Due soon (within 1 week)
- **Gray** - Future due date

**Hover for details**:
- Exact due date
- Days remaining (or overdue)

**Display in views**:
```
Display Options → Properties → "Due Date"
```

### Due Date Notifications

**Configure**:
```
Settings > Account > Notifications
```

**Notification timing**:
- When due date approaching
- When issue becomes overdue
- Customize frequency

### Filtering by Due Date

**Filter options**:
```
F → Due Date →
- Overdue
- Due in 1 day
- Due in 1 week
- Due in 3 months
- Custom date range
- No due date
```

**Custom date range**:
- Specific start/end dates
- Relative ranges
- Before/after specific date

### Sorting by Due Date

**List views**:
```
View Options → Ordering → "Due date"
```

Issues with due dates appear at top of each group.

### Due Dates vs SLAs

**Choose due dates for**:
- One-off deadlines
- External commitments
- Manually set timelines
- Project milestones

**Choose SLAs for**:
- Automatic deadline application
- Rule-based enforcement
- Team-wide policies
- Consistent service levels

**Cannot use both**: Issue has either due date or SLA, not both.

---

## Priority

### Overview

Priority indicates urgency and importance. Available levels:
- **No priority** (default)
- **Low** (4)
- **Medium** (3)
- **High** (2)
- **Urgent** (1)

### Setting Priority

**Add/change priority**:
```
Keyboard: P
Select level
```

**During creation**:
- Set in properties panel
- Leave as "No priority" by default

**Bulk update**:
- Select multiple issues
- P → Choose priority

### Priority Indicators

**Visual cues**:
- Icon with vertical bars
- More bars = higher priority
- Color coding

**Display options**:
```
Display Options → Properties → "Priority"
```

### Priority Ordering

**Manual ordering**:
- Drag issues in priority-ordered views
- Position saved globally
- Everyone sees same order

**Default sort**:
- Urgent → High → Medium → Low → None
- No priority always sorted last

**Custom ordering**:
1. Sort view by priority
2. Drag issues to reorder
3. Position persists across workspace

### Urgent Priority Notifications

**Automatic notifications**:
- Assignee notified immediately
- Email sent (if enabled)
- Inbox notification

**Use sparingly**:
- Only for true urgencies
- Triggers immediate attention
- Notification fatigue if overused

### Priority with SLAs

**Integration**:
- Priority often triggers SLAs
- Default rules use priority
- Changing priority can add/remove SLA

**Example workflow**:
```
Issue created → Triage → Set priority → SLA auto-applied
Priority = Urgent → 24hr SLA
Priority = High → 1 week SLA
Priority downgraded → SLA removed
```

### Priority Best Practices

**Sparing use of Urgent**:
- Reserve for real emergencies
- <5% of issues should be urgent
- Overuse reduces effectiveness

**Clear criteria**:
- Urgent: Production down, critical customer issue
- High: Blocking work, important feature
- Medium: Standard work
- Low: Nice to have, future improvements

**Regular review**:
- Reassess priorities during planning
- Adjust as situations change
- Clear completed priorities

---

## Issue Relations

### Overview

Relations create connections between issues:
- **Related** - General connection
- **Blocking** - Issue blocks other work
- **Blocked by** - Issue is blocked
- **Duplicate** - Duplicate of another issue

### Related Issues

**Create relation**:
```
Keyboard: M then R
Or: Reference issue in description (#ISSUE-123)
```

**Auto-relation**:
- Mention issue in description/comment
- Automatically becomes related
- Bidirectional link

**Remove relation**:
```
Hover over related issue → Click X
Or: Cmd/Ctrl + K → "Remove relation"
```

**Use cases**:
- Similar issues
- Related work
- Context sharing
- Information links

### Blocking Relations

**Mark as blocking**:
```
Keyboard: M then X
Select issue(s) being blocked
```

**Visual indicator**:
- Red flag on blocked issues
- Shows in issue sidebar under "Blocks"

**When blocking issue completes**:
- Flag turns green
- Moves to "Related" section
- Indicates blocker resolved

**Use cases**:
- Dependencies
- Sequential work
- Prerequisite tasks

### Blocked By Relations

**Mark as blocked**:
```
Keyboard: M then B
Select blocking issue(s)
```

**Visual indicator**:
- Orange flag on issue
- Shows in sidebar under "Blocked by"

**When blocker completes**:
- Flag turns green
- Issue unblocked
- Ready to start

**Use cases**:
- Waiting on other work
- Cannot proceed
- External dependencies

### Duplicate Issues

**Mark as duplicate**:
```
Keyboard: M then M
Select canonical (main) issue
```

**Effects**:
- Status changes to Canceled (or custom duplicate status)
- Link to canonical issue
- Cannot mark other way (must view duplicate)

**Configure duplicate status**:
```
Team Settings > Workflow > Duplicate issue status
Create custom "Duplicate" status in Canceled category
```

**Use cases**:
- Consolidating reports
- Merging identical issues
- Cleanup and organization

### Relation Workflows

**Dependency management**:
```
1. Identify dependencies
2. Create blocking relations
3. Work on blockers first
4. Filter for blocked issues
5. Resolve blockers
6. Track completion
```

**Duplicate handling**:
```
1. Search for existing issue
2. If found, mark as duplicate
3. Status auto-updates to Canceled
4. Reference preserved in canonical issue
```

**Related issue discovery**:
```
1. Reference in descriptions/comments
2. Auto-creates relation
3. Browse related work
4. Find connected context
```

### Filtering by Relations

**Filter options**:
```
F → Relations →
- Has blocking
- Is blocked
- Has related
- Is duplicate
```

**Custom views**:
- All blocked issues (identify bottlenecks)
- Issues blocking others (high priority)
- Issues with relations (connected work)

### Relation Best Practices

**Use blocking sparingly**:
- Only true blockers
- Not just "nice to have before"
- Clear dependency

**Mark duplicates promptly**:
- Keep workspace clean
- Single source of truth
- Prevent duplicate work

**Leverage related**:
- Connect similar issues
- Share context
- Discover related work

**Review blockers regularly**:
- Identify bottlenecks
- Prioritize blocking issues
- Remove obsolete blocks

---

## Feature Comparison Matrix

Feature | Use Case | Automation | Team-specific
--- | --- | --- | ---
**SLAs** | Service commitments, response times | Rule-based, automatic | No (workspace-level)
**Estimates** | Effort sizing, velocity tracking | No | Yes
**Due Dates** | External deadlines, milestones | No | No
**Priority** | Urgency indication, triage | Triggers notifications | No
**Relations** | Dependencies, connections | Some (duplicate status) | No

## Best Practices Summary

### When Starting Out

1. **Enable estimates** first for team-level velocity
2. **Use priority sparingly**, establish clear criteria
3. **Add due dates** for external commitments only
4. **Configure SLAs** after establishing priority workflow
5. **Use relations** for clear dependencies

### Ongoing Maintenance

**Weekly review**:
- Check SLA breaches
- Update priorities
- Review blocked issues
- Adjust due dates if needed

**Sprint planning**:
- Estimate all issues
- Set priorities
- Identify blockers
- Apply SLAs where needed

**Cleanup**:
- Remove obsolete relations
- Archive old duplicates
- Clear completed blockers

---

*Reference this guide for advanced Linear features and workflows.*
