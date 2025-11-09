# Common Linear Queries

Frequently used search patterns and filters for Linear operations.

## Personal Queries

### My Work

**All my open issues**:
```python
list_issues(assignee="me", state="open")
```

**My active work** (Todo + In Progress):
```python
list_issues(
    assignee="me",
    state=["Todo", "In Progress"]
)
```

**My issues by priority**:
```python
# Urgent
list_issues(assignee="me", priority=1, state="open")

# High priority
list_issues(assignee="me", priority=2, state="open")
```

**Recently assigned to me**:
```python
list_issues(
    assignee="me",
    updatedAt="-P1D",  # Last 24 hours
    orderBy="updatedAt"
)
```

**Issues I completed this week**:
```python
list_issues(
    assignee="me",
    state="Done",
    updatedAt="-P7D"
)
```

**Overdue issues** (requires manual date check):
```python
# Get my issues with due dates
issues = list_issues(assignee="me", state="In Progress")
# Filter for dueDate < today in code
```

**Unread mentions** (use Linear UI or search):
```python
list_issues(
    assignee="me",
    query="@me",
    updatedAt="-P1D"
)
```

---

## Team Queries

### Team Status

**Team's active issues**:
```python
list_issues(
    team="team-name",
    state=["Todo", "In Progress"]
)
```

**Team backlog**:
```python
list_issues(
    team="team-name",
    state="Backlog",
    orderBy="createdAt"
)
```

**Unassigned team issues**:
```python
list_issues(
    team="team-name",
    assignee=None,
    state=["Todo", "Backlog"]
)
```

**Team's completed work this week**:
```python
list_issues(
    team="team-name",
    state="Done",
    updatedAt="-P7D"
)
```

**Team issues by label**:
```python
# Bugs
list_issues(team="team-name", label="bug", state="open")

# Features
list_issues(team="team-name", label="feature", state="open")
```

---

## Priority & Urgency

### High Priority Work

**All urgent issues**:
```python
list_issues(
    priority=1,  # Urgent
    state="open"
)
```

**Team's high priority issues**:
```python
list_issues(
    team="team-name",
    priority=2,  # High
    state="open"
)
```

**P1/P2 issues not assigned**:
```python
list_issues(
    team="team-name",
    priority=[1, 2],
    assignee=None,
    state="open"
)
```

**My urgent issues**:
```python
list_issues(
    assignee="me",
    priority=1,
    state="open"
)
```

**Low priority backlog items**:
```python
list_issues(
    team="team-name",
    priority=4,  # Low
    state="Backlog"
)
```

**Issues with no priority set**:
```python
list_issues(
    team="team-name",
    priority=0,  # No priority
    state="open"
)
```

---

## SLA Queries

### SLA Status

**SLA breached issues**:
```python
# Note: Use Linear UI filter or get_issue to check SLA status
# MCP tools don't directly filter by SLA status
# Filter: F → SLA status → Breached
```

**High risk SLA issues** (within 1 day):
```python
# Use Linear UI: F → SLA status → High Risk
# Or check issue.slaStatus in get_issue results
```

**My issues with SLAs**:
```python
issues = list_issues(assignee="me", state="open")
# Check each issue.slaStatus in code
# slaStatus values: "Breached", "HighRisk", "MediumRisk", "LowRisk"
```

**Team SLA performance**:
```python
# Get all completed issues
completed = list_issues(
    team="team-name",
    state="Done",
    updatedAt="-P7D"
)
# Check issue.slaStatus for "Achieved" vs "Failed"
```

---

## Estimate Queries

### By Estimate Size

**Large issues** (>5 points):
```python
issues = list_issues(team="team-name", state="Backlog")
# Filter for estimate > 5 in code
```

**Quick wins** (<3 points):
```python
issues = list_issues(team="team-name", state="Backlog")
# Filter for estimate <= 2 in code
```

**Unestimated backlog**:
```python
issues = list_issues(team="team-name", state="Backlog")
# Filter for estimate == null in code
```

**Cycle effort calculation**:
```python
cycle_issues = list_issues(cycle="cycle-id")
total_effort = sum(issue.estimate or 0 for issue in cycle_issues)
```

**Specific estimate value**:
```python
issues = list_issues(team="team-name")
# Filter for issue.estimate == 5 in code
```

---

## Due Date Queries

### By Due Date

**Overdue issues**:
```python
# Use Linear UI: F → Due Date → Overdue
# Or get issues and check dueDate < today
issues = list_issues(assignee="me", state="open")
# Filter where dueDate < datetime.now()
```

**Due this week**:
```python
# Use Linear UI: F → Due Date → Due in 1 week
# Or filter issues where dueDate within next 7 days
```

**Due today**:
```python
# Use Linear UI: F → Due Date → Due in 1 day
# Or filter issues where dueDate == today
```

**My overdue tasks**:
```python
issues = list_issues(assignee="me", state="open")
# Filter for dueDate < today and state not Done
```

**Issues with due dates this month**:
```python
issues = list_issues(team="team-name", state="open")
# Filter for dueDate within current month
```

---

## Issue Relations

### Blocking and Dependencies

**All blocked issues**:
```python
# Use Linear UI: F → Relations → Is blocked
# Get issues and check for blocking relations
issues = list_issues(team="team-name", state="open")
# Check issue details with get_issue for blocking info
```

**Issues blocking others**:
```python
# Use Linear UI: F → Relations → Has blocking
# Check issue.relations in get_issue results
```

**Issues with any relations**:
```python
# Use Linear UI: F → Relations → Has related
issues = list_issues(team="team-name")
# Check issue.relations for non-empty array
```

**Duplicate issues**:
```python
# Duplicates are typically in Canceled state
list_issues(
    team="team-name",
    state="Duplicate"  # or "Canceled"
)
```

**My blocked issues**:
```python
issues = list_issues(assignee="me", state="open")
# Filter for issues with blocking relations via get_issue
```

---

## Labels & Categories

### By Issue Type

**All bugs**:
```python
list_issues(
    team="team-name",
    label="bug",
    state="open"
)
```

**Feature requests**:
```python
list_issues(
    team="team-name",
    label="feature",
    state="open"
)
```

**Technical debt**:
```python
list_issues(
    team="team-name",
    label="tech-debt",
    state="open"
)
```

**Documentation tasks**:
```python
list_issues(
    team="team-name",
    label="documentation",
    state="open"
)
```

### By Area/Component

**Frontend issues**:
```python
list_issues(
    team="team-name",
    label="frontend",
    state="open"
)
```

**Backend issues**:
```python
list_issues(
    team="team-name",
    label="backend",
    state="open"
)
```

**API issues**:
```python
list_issues(
    team="team-name",
    label="api",
    state="open"
)
```

---

## Project & Cycle Queries

### Project Status

**All project issues**:
```python
list_issues(project="project-name-or-id")
```

**Active project issues**:
```python
list_issues(
    project="project-id",
    state=["Todo", "In Progress"]
)
```

**Completed project issues**:
```python
list_issues(
    project="project-id",
    state="Done"
)
```

**Project issues by team**:
```python
list_issues(
    project="project-id",
    team="team-name"
)
```

### Cycle/Sprint Queries

**Current cycle issues**:
```python
# Get current cycle
cycles = list_cycles(teamId="team-id", type="current")
cycle_id = cycles[0].id

# Get issues
list_issues(cycle=cycle_id)
```

**Current cycle by assignee**:
```python
list_issues(
    cycle="current-cycle-id",
    assignee="me"
)
```

**Incomplete cycle work**:
```python
list_issues(
    cycle="current-cycle-id",
    state=["Todo", "In Progress"]
)
```

---

## Time-Based Queries

### Recent Activity

**Updated today**:
```python
list_issues(updatedAt="-P1D")
```

**Updated this week**:
```python
list_issues(updatedAt="-P7D")
```

**Created this month**:
```python
list_issues(createdAt="-P30D")
```

**Not updated in 2 weeks** (stale issues):
```python
list_issues(
    state="In Progress",
    updatedAt="-P14D",
    orderBy="updatedAt",
    direction="ASC"
)
```

**Last hour of activity**:
```python
list_issues(updatedAt="-PT1H")
```

### Date Range Patterns

**ISO 8601 Duration Format**:
```
-P7D      = Last 7 days
-P30D     = Last 30 days
-P1M      = Last month
-PT1H     = Last hour
-PT30M    = Last 30 minutes
```

**Absolute dates**:
```python
# After specific date
list_issues(createdAt="2025-01-01T00:00:00Z")

# Format: YYYY-MM-DDTHH:MM:SSZ
```

---

## Status & Workflow

### By Status Type

**All backlog issues**:
```python
list_issues(
    team="team-name",
    state="Backlog"
)
```

**All in-progress work**:
```python
list_issues(
    team="team-name",
    state="In Progress"
)
```

**In review**:
```python
list_issues(
    team="team-name",
    state="In Review"
)
```

**Blocked issues**:
```python
list_issues(
    team="team-name",
    query="blocked",
    state="In Progress"
)
```

### Multiple States

**All open (not done/canceled)**:
```python
list_issues(
    team="team-name",
    state="open"
)
```

**Todo and In Progress**:
```python
list_issues(
    team="team-name",
    state=["Todo", "In Progress"]
)
```

---

## Search Queries

### Text Search

**Search by keyword**:
```python
# Search in title and description
list_issues(query="authentication")

# Combine with filters
list_issues(
    team="team-name",
    query="login bug",
    state="open"
)
```

**Search specific content**:
```python
# API related issues
list_issues(team="team-name", query="API")

# Error related issues
list_issues(team="team-name", query="error")

# Performance issues
list_issues(team="team-name", query="performance")
```

### Combined Filters

**Recent high-priority bugs**:
```python
list_issues(
    team="team-name",
    label="bug",
    priority=[1, 2],
    updatedAt="-P7D"
)
```

**Unassigned urgent issues**:
```python
list_issues(
    team="team-name",
    assignee=None,
    priority=1,
    state="open"
)
```

**My bugs in current cycle**:
```python
list_issues(
    assignee="me",
    label="bug",
    cycle="current-cycle-id"
)
```

**Overdue high-priority issues**:
```python
issues = list_issues(
    team="team-name",
    priority=[1, 2],
    state="open"
)
# Filter for dueDate < today
```

**Large unestimated issues**:
```python
issues = list_issues(team="team-name", state="Backlog")
# Filter for estimate > 5 or estimate == null
```

**Blocked urgent work**:
```python
issues = list_issues(
    team="team-name",
    priority=1,
    state="open"
)
# Check for blocking relations with get_issue
```

---

## Project Queries

### Finding Projects

**All active projects**:
```python
list_projects(state="started")
```

**My projects**:
```python
list_projects(member="me")
```

**Team projects**:
```python
list_projects(team="team-name")
```

**Recent projects**:
```python
list_projects(
    updatedAt="-P7D",
    orderBy="updatedAt"
)
```

**Search by name**:
```python
list_projects(query="mobile redesign")
```

**Q1 projects**:
```python
list_projects(label="q1-2025")
```

---

## Reporting Queries

### Team Metrics

**Team velocity (issues per week)**:
```python
# Completed this week
completed = list_issues(
    team="team-name",
    state="Done",
    updatedAt="-P7D"
)
velocity = len(completed)
```

**Bug count by severity**:
```python
# Critical bugs
critical = list_issues(team="team-name", label="bug", priority=1)

# High priority bugs
high = list_issues(team="team-name", label="bug", priority=2)
```

**Issue distribution by assignee**:
```python
# Get all open issues
issues = list_issues(team="team-name", state="open")

# Group by assignee
by_assignee = {}
for issue in issues:
    assignee = issue.assignee.name if issue.assignee else "Unassigned"
    by_assignee[assignee] = by_assignee.get(assignee, 0) + 1
```

**Progress by status**:
```python
# Get all non-archived issues
issues = list_issues(team="team-name")

# Count by state
by_state = {}
for issue in issues:
    state = issue.state.name
    by_state[state] = by_state.get(state, 0) + 1
```

---

## Triage Queries

### Needs Attention

**Triage queue**:
```python
list_issues(
    team="team-name",
    state="Triage",
    orderBy="createdAt"
)
```

**Unestimated issues**:
```python
# Get issues
issues = list_issues(team="team-name", state="Todo")
# Filter for estimate == null in code
```

**Missing labels**:
```python
# Get issues
issues = list_issues(team="team-name", state="Backlog")
# Filter for empty labels array in code
```

**Stale in-progress issues**:
```python
list_issues(
    team="team-name",
    state="In Progress",
    updatedAt="-P14D",  # Not updated in 2 weeks
    orderBy="updatedAt",
    direction="ASC"
)
```

**Issues without assignee**:
```python
list_issues(
    team="team-name",
    assignee=None,
    state=["Todo", "In Progress"]
)
```

**Issues without priority**:
```python
list_issues(
    team="team-name",
    priority=0,
    state="open"
)
```

**Issues missing description**:
```python
issues = list_issues(team="team-name", state="Backlog")
# Filter for empty or missing description in code
```

---

## Team Management Queries

### Team Operations

**List all teams**:
```python
list_teams()
```

**Active teams only**:
```python
list_teams(includeArchived=False)
```

**Recently updated teams**:
```python
list_teams(
    updatedAt="-P7D",
    orderBy="updatedAt"
)
```

**Get specific team details**:
```python
get_team(query="team-name")
# Or by key: get_team(query="ENG")
# Or by ID: get_team(query="team-id")
```

**Team members**:
```python
# Get all users, filter by team
users = list_users()
# Check team membership in user details
```

### Team Workflows

**Team's available statuses**:
```python
list_issue_statuses(team="team-name")
```

**Team's labels**:
```python
list_issue_labels(team="team-name")
```

**Team's current cycle**:
```python
list_cycles(teamId="team-id", type="current")
```

**Team's next cycle**:
```python
list_cycles(teamId="team-id", type="next")
```

**All team cycles**:
```python
list_cycles(teamId="team-id")
```

---

## Integration Queries

### Git Integration

**Issues with PRs** (use get_issue for details):
```python
# Search for specific issue
issue = get_issue(id="TEAM-123")
# Check issue.attachments for git links
```

**Issues in review**:
```python
list_issues(
    team="team-name",
    state="In Review"
)
```

---

## Pagination Examples

### Large Result Sets

**Paginate through results**:
```python
# First page
page1 = list_issues(
    team="team-name",
    limit=100,
    orderBy="updatedAt"
)

# Check if more results
if page1.pageInfo.hasNextPage:
    # Get next page
    page2 = list_issues(
        team="team-name",
        limit=100,
        after=page1.pageInfo.endCursor
    )
```

**Iterate all results**:
```python
all_issues = []
cursor = None

while True:
    page = list_issues(
        team="team-name",
        limit=100,
        after=cursor
    )

    all_issues.extend(page.nodes)

    if not page.pageInfo.hasNextPage:
        break

    cursor = page.pageInfo.endCursor
```

---

## Saved Query Patterns

### Daily Standup

```python
# What I did yesterday
yesterday = list_issues(
    assignee="me",
    updatedAt="-P1D",
    state="Done"
)

# What I'm doing today
today = list_issues(
    assignee="me",
    state="In Progress"
)

# Blockers
blocked = list_issues(
    assignee="me",
    query="blocked",
    state="In Progress"
)
```

### Weekly Review

```python
# Completed this week
completed = list_issues(
    assignee="me",
    state="Done",
    updatedAt="-P7D"
)

# Still in progress
in_progress = list_issues(
    assignee="me",
    state="In Progress"
)

# Next up
next_up = list_issues(
    assignee="me",
    state="Todo",
    limit=5
)
```

### Sprint Planning

```python
# Get next cycle
cycles = list_cycles(teamId="team-id", type="next")
next_cycle = cycles[0]

# Candidates for next sprint
candidates = list_issues(
    team="team-name",
    state="Backlog",
    priority=[1, 2],
    limit=50
)
```

### Bug Triage

```python
# New bugs needing triage
new_bugs = list_issues(
    team="team-name",
    label="bug",
    state="Triage",
    orderBy="createdAt"
)

# Critical bugs
critical = list_issues(
    team="team-name",
    label="bug",
    priority=1,
    state="open"
)
```

---

## Advanced Query Patterns

### Multi-Condition Searches

```python
# High-priority features in current cycle
list_issues(
    team="team-name",
    label="feature",
    priority=2,
    cycle="current-cycle-id",
    state=["Todo", "In Progress"]
)

# My unassigned team's urgent bugs
list_issues(
    team="team-name",
    label="bug",
    priority=1,
    assignee=None
)

# Recent tech debt items in project
list_issues(
    project="project-id",
    label="tech-debt",
    updatedAt="-P7D"
)

# Overdue issues with SLA breach risk
issues = list_issues(
    assignee="me",
    state="open"
)
# Filter for dueDate < today OR slaStatus in ["Breached", "HighRisk"]

# Large issues blocking others
issues = list_issues(team="team-name", state="open")
# Filter for estimate > 5 AND has blocking relations

# Unestimated urgent bugs due this week
issues = list_issues(
    team="team-name",
    label="bug",
    priority=1,
    state="open"
)
# Filter for estimate == null AND dueDate within 7 days

# My blocked high-priority work
issues = list_issues(
    assignee="me",
    priority=[1, 2],
    state="In Progress"
)
# Check for blocking relations with get_issue
```

---

## Query Optimization Tips

1. **Filter server-side**: Use tool parameters, not client-side filtering
2. **Use specific IDs**: When you have IDs, use them (faster than names)
3. **Limit results**: Start with reasonable limits (50-100)
4. **Cache reference data**: Cache team IDs, user IDs, label IDs
5. **Order by updatedAt**: Default, most efficient
6. **Combine filters**: Use multiple parameters in one call

---

## Common Mistakes

❌ **Don't do**:
```python
# Get all, filter locally
all_issues = list_issues(team="team-name", limit=250)
my_issues = [i for i in all_issues if i.assignee == "me"]
```

✅ **Do this instead**:
```python
# Filter server-side
my_issues = list_issues(team="team-name", assignee="me")
```

❌ **Don't do**:
```python
# Multiple calls when one would work
bugs = list_issues(team="team-name", label="bug")
features = list_issues(team="team-name", label="feature")
```

✅ **Do this instead**:
```python
# Get all issues, group locally if needed
all_issues = list_issues(team="team-name")
# Then filter by label client-side if necessary
```

---

*Use these query patterns as templates for your Linear operations.*
