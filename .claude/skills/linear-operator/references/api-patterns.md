# Linear MCP API Patterns

Best practices and patterns for using Linear MCP tools effectively.

## Tool Selection

### When to Use Each Tool

**Issue Tools**:
- `list_issues` - Search, filter, browse issues (use for exploration)
- `get_issue` - Get full details (use when you need attachments, relationships, etc.)
- `create_issue` - Create new issue
- `update_issue` - Modify existing issue
- `list_comments` - Get issue discussion
- `create_comment` - Add to discussion

**Project Tools**:
- `list_projects` - Browse projects (use for exploration)
- `get_project` - Get full project details with issues
- `create_project` - Create new project
- `update_project` - Modify existing project

**Organization Tools**:
- `list_teams` - Browse teams
- `get_team` - Get team details
- `list_users` - Find users
- `get_user` - Get user details
- `list_issue_labels` - Browse labels
- `create_issue_label` - Create new label
- `list_issue_statuses` - Get team workflow states
- `list_cycles` - Get team cycles

**Documentation**:
- `search_documentation` - Search Linear docs
- WebFetch - Get specific doc pages

## Efficient Data Retrieval

### Lazy Loading Pattern

**Principle**: Get minimal data first, load details only when needed.

**Example - Finding an issue**:
```
# ❌ Bad: Load all issues fully
all_issues = list_issues(team="team-id")
for issue in all_issues:
    full = get_issue(id=issue.id)  # Wasteful
    # process...

# ✅ Good: Load list, then details only if needed
issues = list_issues(team="team-id", query="login bug")
if issues:
    # Only load full details for first match
    full = get_issue(id=issues[0].id)
```

### Pagination Strategy

**Use pagination for large result sets**:
```
# Default limit is 50, max is 250
page1 = list_issues(team="team-id", limit=100)

# Get next page if needed
if page1.pageInfo.hasNextPage:
    page2 = list_issues(
        team="team-id",
        limit=100,
        after=page1.pageInfo.endCursor
    )
```

**Pagination best practices**:
- Start with limit=50 (default) for initial exploration
- Increase to 100-250 if you know you need more
- Use cursor-based pagination (after/before) for stability
- Track pageInfo to know if more results exist

### Filtering at Source

**Principle**: Filter server-side, not client-side.

**Example**:
```
# ❌ Bad: Get all, filter locally
all_issues = list_issues(team="team-id", limit=250)
bugs = [i for i in all_issues if "bug" in i.labels]

# ✅ Good: Filter server-side
bugs = list_issues(team="team-id", label="bug")
```

**Available filters**:
- `team` - Team name/ID
- `assignee` - User ID, name, email, or "me"
- `state` - Status name or ID
- `label` - Label name or ID
- `query` - Text search in title/description
- `project` - Project name or ID
- `cycle` - Cycle name or ID
- `parentId` - Parent issue ID
- `createdAt`, `updatedAt` - ISO date or duration (e.g., "-P7D")

## ID Resolution

### Understanding IDs

**Types of identifiers**:
- **Issue ID**: `TEAM-123` (human-readable, used in UI)
- **UUID**: Internal ID (used in API)
- **Team key**: `ENG`, `DESIGN` (team prefix)

**Flexible ID acceptance**:
Most tools accept multiple formats:
```
# Team: name, ID, or key
get_team(query="Engineering")
get_team(query="eng-team-id")
get_team(query="ENG")

# User: name, email, ID, or "me"
list_issues(assignee="Alice Smith")
list_issues(assignee="alice@company.com")
list_issues(assignee="user-id")
list_issues(assignee="me")

# Project: name or ID
get_project(query="Q1 Launch")
get_project(query="project-id")
```

### Caching IDs

**Pattern for repeated operations**:
```
# Cache frequently used IDs
team_id = None
user_id = None

def get_team_id():
    global team_id
    if not team_id:
        team = get_team(query="Engineering")
        team_id = team.id
    return team_id

def get_user_id():
    global user_id
    if not user_id:
        user = get_user(query="me")
        user_id = user.id
    return user_id

# Use cached IDs
create_issue(
    team=get_team_id(),
    assignee=get_user_id(),
    title="New issue"
)
```

## Error Handling

### Common Errors

**Not found**:
```
try:
    issue = get_issue(id="TEAM-999")
except NotFoundError:
    print("Issue doesn't exist")
```

**Invalid input**:
```
try:
    create_issue(title="", team="invalid-team")
except ValidationError:
    print("Invalid input")
```

**Permission denied**:
```
try:
    update_issue(id="TEAM-123", assignee="other-user")
except PermissionError:
    print("No permission to update")
```

### Validation Before Calls

**Check before update**:
```
# Verify issue exists
issue = get_issue(id="TEAM-123")

# Verify state is valid
statuses = list_issue_statuses(team=issue.team.id)
valid_states = [s.name for s in statuses]

if new_state in valid_states:
    update_issue(id="TEAM-123", state=new_state)
else:
    print(f"Invalid state. Valid: {valid_states}")
```

**Check before assign**:
```
# Verify user exists
users = list_users(query="alice")

if users:
    update_issue(id="TEAM-123", assignee=users[0].id)
else:
    print("User not found")
```

## Batch Operations

### Sequential Updates

**Pattern for updating multiple items**:
```
# Get items to update
issues = list_issues(label="needs-triage", state="Backlog")

# Update each
results = []
for issue in issues:
    try:
        update_issue(
            id=issue.id,
            state="Todo",
            priority=3
        )
        results.append(("success", issue.id))
    except Exception as e:
        results.append(("error", issue.id, str(e)))

# Report results
successes = [r for r in results if r[0] == "success"]
failures = [r for r in results if r[0] == "error"]
print(f"Updated: {len(successes)}, Failed: {len(failures)}")
```

### Bulk Creation

**Creating multiple issues**:
```
# Define issue data
issue_data = [
    {"title": "Task 1", "description": "..."},
    {"title": "Task 2", "description": "..."},
    {"title": "Task 3", "description": "..."},
]

# Create all
created_ids = []
for data in issue_data:
    issue = create_issue(
        team="team-id",
        project="project-id",
        **data
    )
    created_ids.append(issue.id)

print(f"Created {len(created_ids)} issues")
```

## Search Optimization

### Text Search

**Query parameter** searches title and description:
```
# Search for text
list_issues(query="login bug")

# Combines with other filters
list_issues(
    team="engineering",
    query="authentication",
    state="open"
)
```

**Search tips**:
- Keep queries focused (2-3 keywords)
- Use specific terms, not generic
- Combine with filters for precision
- Case-insensitive matching

### Date Filtering

**ISO 8601 duration format**:
```
# Last 7 days
list_issues(updatedAt="-P7D")

# Last 30 days
list_issues(createdAt="-P30D")

# Last hour
list_issues(updatedAt="-PT1H")

# Format: -P[n]D (days), -P[n]M (months), -PT[n]H (hours)
```

**Absolute dates**:
```
# After specific date
list_issues(createdAt="2025-01-01T00:00:00Z")

# Use ISO 8601: YYYY-MM-DDTHH:MM:SSZ
```

### Sorting and Ordering

**Order by fields**:
```
# Most recently updated first (default)
list_issues(orderBy="updatedAt", direction="DESC")

# Oldest first
list_issues(orderBy="createdAt", direction="ASC")

# Valid orderBy: "createdAt", "updatedAt"
# Valid direction: "ASC", "DESC"
```

## State Management

### Status Transitions

**Valid transitions**:
```
# Get current state
issue = get_issue(id="TEAM-123")
current_state = issue.state.name

# Get valid states for team
statuses = list_issue_statuses(team=issue.team.id)

# Filter by category
started_states = [s for s in statuses if s.type == "started"]
completed_states = [s for s in statuses if s.type == "completed"]

# Transition to first started state
if started_states:
    update_issue(id="TEAM-123", state=started_states[0].name)
```

**State by type**:
```
# Can use state type instead of specific state
update_issue(id="TEAM-123", state="started")  # Moves to first Started state
update_issue(id="TEAM-123", state="completed")  # Moves to first Completed state
```

### State Reason

**Close with reason**:
```
# Complete issue
update_issue(
    id="TEAM-123",
    state="Done",
    state_reason="completed"
)

# Mark duplicate
update_issue(
    id="TEAM-123",
    state="Done",
    state_reason="duplicate",
    duplicate_of=456  # Issue number
)

# Close as not planned
update_issue(
    id="TEAM-123",
    state="Done",
    state_reason="not_planned"
)

# Valid reasons: "completed", "not_planned", "duplicate"
```

## Label Management

### Label Lookup

**Find existing labels**:
```
# All workspace labels
labels = list_issue_labels()

# Team-specific
labels = list_issue_labels(team="team-id")

# Find by name
label = list_issue_labels(name="bug")
```

**Check before use**:
```
# Verify label exists
labels = list_issue_labels(name="priority-high")

if labels:
    update_issue(
        id="TEAM-123",
        labels=["bug", "priority-high"]
    )
else:
    # Create label first
    create_issue_label(name="priority-high", color="#FF0000")
    update_issue(id="TEAM-123", labels=["bug", "priority-high"])
```

### Label Arrays

**Setting labels replaces all**:
```
# Current labels: ["bug", "frontend"]

# This replaces all labels
update_issue(id="TEAM-123", labels=["bug", "urgent"])
# Result: ["bug", "urgent"]  (frontend removed)

# To add label, include existing ones
issue = get_issue(id="TEAM-123")
current_labels = [l.name for l in issue.labels]
new_labels = current_labels + ["urgent"]
update_issue(id="TEAM-123", labels=new_labels)
```

## Performance Tips

### Minimize Round Trips

**Combine data in single call**:
```
# ❌ Bad: Multiple calls
issue = get_issue(id="TEAM-123")
# ... process ...
update_issue(id="TEAM-123", state="Done")
comments = list_comments(issueId="TEAM-123")

# ✅ Better: Batch what you can
issue = get_issue(id="TEAM-123")  # Includes comments in response
update_issue(id="TEAM-123", state="Done")
```

### Use Specific Queries

**Be precise**:
```
# ❌ Bad: Overly broad
all_issues = list_issues(team="team-id", limit=250)

# ✅ Good: Narrow scope
my_open_issues = list_issues(
    team="team-id",
    assignee="me",
    state=["Todo", "In Progress"]
)
```

### Cache Reference Data

**Cache stable data**:
```
# Cache team info
teams_cache = {}

def get_team_info(team_name):
    if team_name not in teams_cache:
        teams_cache[team_name] = get_team(query=team_name)
    return teams_cache[team_name]

# Cache labels
labels_cache = {}

def get_labels(team_id):
    if team_id not in labels_cache:
        labels_cache[team_id] = list_issue_labels(team=team_id)
    return labels_cache[team_id]

# Use cached data
team = get_team_info("Engineering")
labels = get_labels(team.id)
```

## Data Consistency

### Read-After-Write

**Verify updates**:
```
# Update issue
update_issue(id="TEAM-123", state="Done")

# Verify
issue = get_issue(id="TEAM-123")
assert issue.state.name == "Done"
```

### Handle Race Conditions

**Check before update**:
```
# Get current state
issue = get_issue(id="TEAM-123")

# Check state before updating
if issue.state.type != "completed":
    update_issue(id="TEAM-123", state="Done")
else:
    print("Already completed")
```

## Markdown Usage

### Rich Descriptions

**Format with Markdown**:
```
description = """
## Overview
This issue addresses the login bug.

## Steps to Reproduce
1. Go to login page
2. Enter credentials
3. Click submit

## Expected
User logs in successfully

## Actual
Error: "Invalid session"

## Fix
Update session handling in `auth.ts:42`

```python
def fix_session():
    # code here
```

## Testing
- [ ] Unit tests pass
- [ ] Manual testing complete
- [ ] Regression tests pass
"""

create_issue(
    title="Fix login session bug",
    team="team-id",
    description=description
)
```

### Code Snippets

**Include code in issues**:
```
description = """
Error in authentication:

```javascript
// Current code (broken)
if (session === null) {
  throw new Error('Invalid session');
}
```

Should be:

```javascript
// Fixed code
if (!session || session.expired()) {
  refreshSession();
}
```
"""
```

### Links and References

**Link to external resources**:
```
description = """
## Design
[Figma mockup](https://figma.com/...)

## Technical Spec
[Architecture doc](https://notion.so/...)

## Related Issues
- Blocked by #TEAM-122
- Related to #TEAM-125
"""
```

## Documentation Reference

### Search Linear Docs

**Find relevant documentation**:
```
# Search for topics
results = search_documentation(query="workflow automation")

# Review results
for doc in results:
    print(f"{doc.title}: {doc.url}")
```

### Fetch Specific Pages

**Get detailed docs**:
```
from tools import WebFetch

# Fetch specific page
content = WebFetch(
    url="https://linear.app/docs/issues",
    prompt="Explain issue management workflows"
)
```

## Common Patterns

### Daily Standup

```
# What I worked on yesterday
yesterday = list_issues(
    assignee="me",
    updatedAt="-P1D",
    state=["In Progress", "Done"]
)

# What I'm working on today
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

```
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

# Upcoming work
upcoming = list_issues(
    assignee="me",
    state="Todo",
    limit=10
)
```

### Project Health Check

```
# Get project
project = get_project(query="Q1 Launch")

# Get all issues
issues = list_issues(project=project.id)

# Calculate metrics
total = len(issues)
done = len([i for i in issues if i.state.type == "completed"])
in_progress = len([i for i in issues if i.state.type == "started"])
todo = total - done - in_progress

print(f"Progress: {done}/{total} ({done/total*100:.0f}%)")
print(f"In Progress: {in_progress}")
print(f"Todo: {todo}")
```

---

*Reference this guide for efficient and effective Linear MCP tool usage.*
