---
name: linear-operator
description: Operate Linear effectively for issue tracking, project management, and team coordination. Provides workflows for common operations using Linear MCP tools and references official documentation.
---

# Linear Operator

Efficiently manage Linear issues, projects, and teams using MCP tools and Linear documentation.

## When to Use This Skill

Invoke this skill when:
- Creating, updating, or searching for Linear issues
- Managing projects and tracking progress
- Organizing work with labels, cycles, and statuses
- Coordinating team activities
- Setting up workflows and automations
- Need to reference Linear documentation for detailed guidance

## Core Concepts

**Workspace** - Top-level container for teams (one per company recommended)
**Team** - Organizes different work functions within a workspace
**Issue** - Core unit of work (belongs to a single team)
**Project** - Cross-team or team-specific initiative (can span multiple teams)
**Cycle** - Time-boxed sprint/iteration for planning work
**Status** - Workflow state (Backlog, Todo, In Progress, Done, etc.)
**Label** - Organizational tag for issues and projects

## Quick Start Workflows

### Create an Issue
```
1. Identify target team (use list_teams if needed)
2. Use create_issue with:
   - title (required)
   - team (required)
   - description (optional, supports Markdown)
   - assignee (optional)
   - labels (optional)
   - state (optional, defaults to Backlog)
   - priority (optional, only if explicitly needed)
3. Save issue ID for future operations
```

### Search for Issues
```
1. Use list_issues with filters:
   - team (filter by team)
   - assignee (use "me" for your issues)
   - state (filter by status)
   - label (filter by label)
   - query (search title/description)
2. Review results and get full details with get_issue if needed
```

### Update Issue Status
```
1. Get issue details with get_issue
2. Use update_issue with:
   - id (issue ID)
   - state (new status name or ID)
3. Verify update completed
```

### Create a Project
```
1. Use create_project with:
   - name (required)
   - team (required)
   - description (optional, Markdown)
   - lead (optional)
   - startDate/targetDate (optional, ISO format)
   - state (optional)
2. Save project ID
3. Link issues to project using update_issue
```

## Issue Operations

### Creating Effective Issues

**Minimum viable issue**:
- Clear, actionable title
- Team assignment
- Description with context (what, why, acceptance criteria)

**Enhanced issue**:
- Assignee (user ID, name, email, or "me")
- Labels for categorization
- Priority (0=None, 1=Urgent, 2=High, 3=Normal, 4=Low)
- Due date (ISO format)
- Parent issue (for sub-issues)
- Project assignment
- Cycle assignment

**Best practices**:
- Keep titles concise and actionable
- Use Markdown for descriptions (code blocks, lists, links)
- Add labels for easy filtering
- Set priority only when explicitly needed
- Link related issues using parentId for hierarchy

### Searching and Filtering

**Common search patterns**:
```
# My open issues
list_issues(assignee="me", state="open")

# Team's active work
list_issues(team="team-name", state="In Progress")

# Issues by label
list_issues(label="bug", state="open")

# Recent updates
list_issues(updatedAt="-P7D")  # Last 7 days
```

**Pagination**:
- Use `limit` (max 250) and `after`/`before` cursors
- Default `orderBy` is `updatedAt` (DESC)
- Can order by `createdAt` or `updatedAt`

### Updating Issues

**Common updates**:
- Change status: `update_issue(id="...", state="In Progress")`
- Assign: `update_issue(id="...", assignee="me")`
- Add labels: `update_issue(id="...", labels=["bug", "urgent"])`
- Move to project: `update_issue(id="...", project="project-id")`
- Set estimate: `update_issue(id="...", estimate=3)`

**State management**:
- Get available states: `list_issue_statuses(team="team-name")`
- States have types: Backlog, Unstarted, Started, Completed, Canceled
- Use state name, ID, or type when updating

### Issue Hierarchy

**Parent-child relationships**:
- Create sub-issue: `create_issue(title="...", team="...", parentId="parent-id")`
- View sub-issues: `get_issue(id="parent-id")` includes sub-issues
- Update parent: `update_issue(id="...", parentId="new-parent-id")`

**Sub-issue operations** (see [[references/sub-issues.md]]):
- Add sub-issue to parent
- Remove sub-issue
- Reprioritize sub-issues

### Comments

**Add comment**:
```
create_comment(issueId="...", body="Comment text in Markdown")
```

**Reply to comment**:
```
create_comment(issueId="...", body="Reply text", parentId="comment-id")
```

**View comments**:
```
list_comments(issueId="...")
```

## Project Management

### Overview

**Projects** are units of work with clear outcomes or completion dates:
- Comprised of **issues** and **documents**
- Can span **multiple teams**
- Have **milestones**, **progress graphs**, **dependencies**
- Track progress with **live predictions**
- Support **updates** with health indicators

**Key features**:
- **Milestones** - Divide work into stages
- **Project Graph** - Progress tracking and completion predictions
- **Documents** - Specs, PRDs, updates within Linear
- **Updates** - Health indicators and structured reporting
- **Dependencies** - Visualize blocking relationships
- **Templates** - Reusable project structures
- **Labels** - Flexible categorization
- **Priority** - Urgency levels
- **Notifications** - Personal and Slack channel alerts

### Creating Projects

**Basic project**:
```
create_project(
  name="Q1 Feature Launch",
  team="team-id",
  description="Launch new features for Q1",
  summary="Brief summary for project cards"
)
```

**Full project with all properties**:
```
create_project(
  name="Q1 Feature Launch",
  team="team-id",
  description="## Goals\n\n- Goal 1\n- Goal 2",
  summary="Launch new features",
  lead="user-id",
  startDate="2025-01-01",  # Supports flexible timeframes
  targetDate="2025-03-31",
  state="planned",
  labels=["strategic", "q1"],
  priority=2  # 0=None, 1=Urgent, 2=High, 3=Medium, 4=Low
)
```

**Timeframes**:
Projects support flexible timeframes for dates:
- Year: "2025"
- Half-year: "H1 2025"
- Quarter: "Q1 2025"
- Month: "January 2025"
- Precise day: "2025-01-15"

Use broader timeframes early, narrow as certainty increases.

### Managing Projects

**List projects**:
```
# All projects
list_projects()

# Team projects
list_projects(team="team-name")

# By member
list_projects(member="me")

# Recent updates
list_projects(updatedAt="-P7D")

# By state
list_projects(state="started")

# Search by name
list_projects(query="mobile redesign")
```

**Get project details**:
```
# By ID
get_project(query="project-id")

# By name
get_project(query="Mobile App Redesign")
```

**Update project**:
```
update_project(
  id="project-id",
  name="New name",
  state="in_progress",
  targetDate="2025-04-15",
  lead="new-lead-id",
  labels=["q1", "strategic"]
)
```

### Project States

**Status categories**:
- **Backlog** - Not yet started
- **Planned** - Scoped, not in progress
- **In Progress** - Active work (generates graph)
- **Completed** - Successfully finished
- **Canceled** - Discontinued

**Custom statuses**: Settings > Projects > Statuses
- Multiple statuses per category
- Custom names, descriptions, colors

### Multi-Team Projects

**Span multiple teams**:
- Add teams when creating or from project details
- Project view creates tabs for each team
- Toggle between all issues or team-specific
- Unified progress tracking
- Single project lead

**Use for**:
- Product launches (Engineering, Design, Marketing)
- Platform migrations (Frontend, Backend, Data)
- Company-wide initiatives

### Project Milestones

**Divide work into stages**:
```
# Create milestone (from project view)
Cmd/Ctrl I → Click + beside "Milestones"

# Add issue to milestone
Shift M (on issue)
```

**Milestone features**:
- Name, description, target date
- Completion percentage tracking
- Timeline visualization
- Convert large milestones to projects
- Filter/group issues by milestone

**Progress indicators**:
- Yellow diamond: Current focus
- Gray: Not started
- Filled: In progress
- Complete: All issues done

See [[references/project-management.md#project-milestones]] for detailed guide.

### Project Graph

**Automatic progress tracking**:
- Shows scope, velocity, progress over time
- **Live predictions** for completion date
- Optimistic/pessimistic estimates (±40%)
- Updates hourly

**Access**: Open project sidebar (`Cmd/Ctrl I`)

**Graph lines**:
- Gray: Project scope (shows scope creep)
- Blue: Started issues
- Purple (solid): Completed issues
- Purple (dotted): Predicted completion
- Red vertical: Target date

**Predictions based on**:
- Weekly velocity (recent weeks weighted more)
- Remaining issue points
- In-progress issues (counted as 1/4 complete)

See [[references/project-management.md#project-graph]] for details.

### Project Documents

**Create documents inside projects**:
- Specs, PRDs, meeting notes, updates
- Markdown editor (same as issues)
- Inline comments (`Cmd Opt M`)
- Collaborative editing
- Version history
- Document templates

**Access**: Project Overview > Resources > Create Document

See [[references/project-management.md#project-documents]] for comprehensive guide.

### Project Updates

**Structured health updates**:
- Health indicator: On track, At risk, Off track
- Rich text description
- Auto-generated progress report
- Post to Slack channels

**Create update**:
- Project Overview > Click "Update" or pencil icon
- Select health indicator
- Write description
- Review auto-generated progress

**Update reminders**:
- Configure in Workspace Settings
- Frequency: Daily, weekly, biweekly, custom
- Project-level overrides
- Staleness indicators for overdue updates

See [[references/project-management.md#initiative-and-project-updates]] for detailed workflows.

### Project Dependencies

**Visualize blocking relationships**:
- End → Start dependency type
- Create from timeline (drag between projects)
- Or contextual menu > Dependencies
- Blue line: Not violated
- Red line: Violated (dates conflict)

**Timeline interactions**:
- Click line: Jump to project or remove dependency
- Drag project: Bump dependent projects
- Hold `Cmd/Ctrl`: Keep chain in place
- Hold `Shift`: Move all together

See [[references/project-management.md#project-dependencies]].

### Project Templates

**Reusable project structures**:
- Predefined issues and milestones
- Project properties (lead, members, status)
- Associated initiatives
- Team assignments

**Create templates**: Settings > Templates (workspace or team)

**Use template**: "New Project" > Select template beside team

See [[references/project-management.md#project-templates]].

### Project Labels

**Categorize projects at scale**:
- More flexible than Initiatives
- Filter and group projects
- Filter issues by project's label
- Insights integration

**Create labels**: Settings > Projects > Labels
**Apply labels**: `update_project(id="...", labels=[...])`

See [[references/project-management.md#project-labels-and-organization]].

### Project Priority

**Set urgency levels**:
- Keyboard: `P` then `P`
- 0=None, 1=Urgent, 2=High, 3=Medium, 4=Low
- Manual ordering within groups
- No priority items sorted last

### Project Notifications

**Personal notifications**:
- Bell icon on project page
- Settings > Account > Notifications
- New issues, comments, status changes, updates

**Slack channel notifications**:
- Bell icon > Select Slack channel
- Per-project override
- Best practice: #p-project-name channels

See [[references/project-management.md#project-notifications]] for configuration.

## Initiatives

### Overview

**Initiatives** group projects by company objective:
- Manually curated lists
- Align organization on goals
- Track progress towards objectives
- Workspace-level visibility

**Initiatives vs Projects**:
- Initiatives: High-level goals, multiple projects
- Projects: Clear outcomes, issues and documents

**Initiatives vs Project Views**:
- Initiatives: Manual curation, goal alignment, health tracking
- Project Views: Automatic filtering, no goal required

### Creating Initiatives

**Navigate to Initiatives page** in sidebar:
```
Required: Name only
Optional:
- Owner (defaults to creator)
- Target date
- Summary/description
- Associated projects
- Sub-initiatives (Enterprise)
```

**Properties**:
- Status: Planned, Active, Completed
- Owner
- Target Date
- Teams, Projects, Sub-initiatives
- Description (document)
- Resources (links)
- Latest Update

### Initiative Health

**Health indicators**:
- Based on latest Initiative update
- On track (green), At risk (yellow), Off track (red)

**Active Projects rollup**:
- Shows constituent project health
- Color-coded by latest project updates
- Identify projects needing attention

### Sub-initiatives (Enterprise)

**Hierarchical organization**:
- Nest up to 5 levels deep
- Parent includes all sub-initiative projects
- Create from workspace Initiative views or Overview page
- Hold `Option/Alt` and drag to nest

**Use for**:
- Company-wide objectives across departments
- Large strategic goals with phases
- Grouping by quarter, theme, ownership

See [[references/project-management.md#initiatives]] for comprehensive guide.

## Team Coordination

### Working with Teams

**List all teams**:
```
list_teams()
```

**Get team details**:
```
get_team(query="team-name-or-id-or-key")
```

**Find team members**:
- Use `list_users()` to see all workspace users
- Use `get_user(query="name-or-email-or-id")` for specific user

### Cycles (Sprints)

**List cycles**:
```
# Current cycle
list_cycles(teamId="team-id", type="current")

# Next cycle
list_cycles(teamId="team-id", type="next")

# All cycles
list_cycles(teamId="team-id")
```

**Assign issue to cycle**:
```
update_issue(id="...", cycle="cycle-id-or-number")
```

**Cycle planning workflow**:
1. List current/next cycle
2. Search backlog issues
3. Assign selected issues to cycle
4. Issues auto-move from Backlog to active status (if configured)

## Organization

### Labels

**List labels**:
```
# Workspace labels
list_issue_labels()

# Team labels
list_issue_labels(team="team-name")

# Find specific label
list_issue_labels(name="bug")
```

**Create label**:
```
create_issue_label(
  name="technical-debt",
  color="#FF6900",
  description="Issues related to technical debt"
)
```

**Label hierarchy**:
- Create label group: `create_issue_label(name="Type", isGroup=true)`
- Add child label: `create_issue_label(name="Bug", parentId="group-id")`

**Apply labels**:
```
update_issue(id="...", labels=["bug", "urgent"])
```

### Status Workflows

**List available statuses**:
```
list_issue_statuses(team="team-name")
```

**Status categories**:
- Backlog - Unscheduled work
- Unstarted - Scheduled but not started (e.g., "Todo")
- Started - Work in progress (e.g., "In Progress", "In Review")
- Completed - Finished successfully
- Canceled - Abandoned work

**Update status**:
```
# By state name
update_issue(id="...", state="In Progress")

# By state type
update_issue(id="...", state="started")

# By state ID
update_issue(id="...", state="state-id")
```

## Triage

### Overview

**Triage** is a special inbox for managing incoming issues:
- Issues created by **integrations** (Slack, Sentry, support tools)
- Issues created by **workspace members outside the team**
- Review, update, and prioritize before entering workflow

**Enable**: Team Settings > Triage (toggle on)

**Access**: `G` then `T` (or `O` then `T` for specific team)

### Triage Actions

Action | Shortcut | Description
--- | --- | ---
**Accept** | `1` | Move to default status, optional comment
**Mark as duplicate** | `2` or `MM` | Merge into existing issue, transfer attachments
**Decline** | `3` | Set to Canceled status, optional explanation
**Snooze** | `H` | Hide until time/activity, hidden from others by default

**Ask for information**: Comment and keep in Triage or snooze

### Triage Rules (Enterprise)

**Automated actions** based on filters:
- Configure in Team Settings > Triage
- Update team, status, assignee, label, project, priority
- Execute sequentially
- Moving teams triggers new team's rules

**Example use**:
- Route to correct team by label
- Auto-assign by customer
- Set priority by customer tier
- Combine with Asks fields for scalable intake

### Triage Responsibility (Business/Enterprise)

**Define first responders**:
- Select specific members
- Receive notifications or auto-assignment
- Connect PagerDuty/OpsGenie/Rootly/Incident.io schedules
- Visible when creating issues

### Product Intelligence (Business/Enterprise)

**AI-powered assistance**:
- Suggest assignee, label
- Surface related issues or duplicates
- Based on historical behavior analysis

See [[references/triage-and-views.md#triage]] for comprehensive guide.

## Views

### User Views

**See issues assigned to team members**:
- Open user profile: `O` then `U`
- Click avatar or name in activity
- Filter and scan assigned issues

**Group by assignee**:
- Most views support assignee grouping
- Example: Project work distribution
  1. Group by Assignee
  2. Filter Started + Unstarted
  3. See remaining work per person

**Cycle sidebar** (`Cmd/Ctrl I`):
- View cycle distribution
- Issue/estimate count per user
- Percentage completion
- Hover to filter to user's issues

### Label Views

**View all issues under a label**:
- Click label from board/list/issue
- Keyboard: `O` then `L`
- Command menu: "open label"

**Favorite label views**: Star icon for quick access

**Cross-team label aggregation**:
1. Create "All teams" view
2. Filter by specific label
3. Ensure label names match across teams
4. See all issues with that label workspace-wide

### Attached Views

**Project issue views**:
- Click `new view` icon next to "Issues" tab
- Filter subset of project issues
- Name and save view
- Appears as tab, visible to all with access

**Example project views**:
- Current User (personalized)
- Bugs (filter label)
- Standup (filter "In Progress")
- Blocked (filter blocking relationships)

**Project views on workspace page**:
- Create filtered project views
- Auto-include matching projects
- No manual curation
- Example: "In Progress", "My Projects", "This Quarter"

See [[references/triage-and-views.md]] for comprehensive views guide.

## Documentation Reference

### Search Linear Docs

**Find relevant documentation**:
```
search_documentation(query="cycles workflow")
```

**Common topics**:
- "getting started" - Onboarding guides
- "issue management" - Issue workflows
- "projects" - Project management
- "cycles" - Sprint planning
- "integrations" - GitHub, GitLab, etc.
- "automation" - Workflow automations
- "keyboard shortcuts" - Efficiency tips

### Fetch Specific Documentation

Use WebFetch for detailed Linear documentation:
```
WebFetch(
  url="https://linear.app/docs/[topic]",
  prompt="Extract key information about [topic]"
)
```

**Useful doc pages**:
- `/docs` - Main documentation index
- `/docs/issues` - Issue management
- `/docs/projects` - Project management
- `/docs/cycles` - Cycle/sprint planning
- `/docs/keyboard-shortcuts` - Keyboard shortcuts

## Common Patterns

### Triage Workflow
1. List untriaged issues: `list_issues(state="Triage")`
2. Review each issue
3. Update with proper labels, priority, assignment: `update_issue(...)`
4. Move to appropriate status: `update_issue(state="Backlog" or "Todo")`

### Sprint Planning
1. Review cycle: `list_cycles(type="next")`
2. Search backlog: `list_issues(state="Backlog", team="...")`
3. Assign issues to cycle: `update_issue(cycle="cycle-id")`
4. Set priorities and estimates
5. Assign owners

### Bug Triage
1. List bugs: `list_issues(label="bug", state="Triage")`
2. For each bug:
   - Assess severity → Set priority
   - Assign owner
   - Add to current cycle (urgent) or backlog
3. Update status appropriately

### Weekly Review
1. Check my issues: `list_issues(assignee="me", state=["Todo", "In Progress"])`
2. Review in-progress work
3. Update statuses
4. Comment on blockers
5. Plan next week's work

## Advanced Operations

### Bulk Operations

When updating multiple issues:
1. List target issues
2. Iterate with update_issue for each
3. Verify changes completed

### Custom Views

While MCP tools don't directly support views, replicate them with:
- Filtered list_issues calls
- Saved filter combinations
- Regular queries for common views

### Integration with Git

For GitHub/GitLab integration:
1. Copy git branch name from issue (use Linear UI or API)
2. Include issue ID in PR/MR title or description
3. Linear auto-links and updates issue status based on PR/MR events

See [[references/git-integration.md]] for detailed workflow automation.

## Advanced Features

### Service Level Agreements (SLAs)

**Automatic deadline management** (Business/Enterprise):
```
Settings > Workspace > SLAs
Create rules: Priority → SLA duration
Example: Urgent = 24hr, High = 1 week
```

**Key features**:
- Rule-based automation
- Business day calculation
- Visual indicators (fire icon colors)
- Breach notifications
- Performance tracking

See [[references/advanced-features.md#service-level-agreements-slas]] for complete guide.

### Estimates

**Size and effort tracking**:
```
Team Settings > General > Estimates
Choose scale: Fibonacci, Linear, T-Shirt, Exponential
```

**Keyboard shortcut**: `Shift + E`

**Use for**:
- Sprint/cycle planning
- Velocity tracking
- Effort calculation
- Team capacity planning

### Due Dates

**Time-sensitive work tracking**:
```
Keyboard: Shift + D
Filter: F → Due Date → Overdue/1 week/Custom
```

**Visual indicators**:
- Red: Overdue
- Orange: Due within 1 week
- Gray: Future due date

**Cannot combine**: Due date OR SLA, not both

### Priority

**Urgency levels**:
- Urgent (1) - Immediate notifications
- High (2)
- Medium (3)
- Low (4)
- No priority (default)

**Keyboard shortcut**: `P`

**Urgent priority** triggers immediate notifications to assignee.

### Issue Relations

**Connection types**:
```
Related: M then R (or reference #ISSUE-123)
Blocking: M then X
Blocked by: M then B
Duplicate: M then M
```

**Use for**:
- Dependencies
- Related work
- Blocker tracking
- Duplicate management

See [[references/advanced-features.md#issue-relations]] for detailed patterns.

### Creating Issues via Email

**Team email intake**:
```
Team Settings > General > Create by email
Enable → Get unique email address
```

**Template-specific emails**:
- Each template can have its own email
- Properties pre-applied
- Ideal for intake forms

**Limitations**: 25MB attachments, sender not notified of updates

See [[references/issue-workflows.md#creating-issues-via-email]] for setup.

### Creating Issues via URL

**URL parameters for automation**:
```
https://linear.new?title=Bug:+&label=bug&priority=high&assignee=me
```

**Supported parameters**:
- title, description, status, priority, assignee
- estimate, cycle, label, project
- links (attachments)

**Use cases**:
- Bookmarklets
- Documentation links
- Integration buttons
- Automation scripts

See [[references/issue-workflows.md#creating-issues-via-url]] for all parameters.

### Recurring Issues

**Automated repeating tasks**:
```
Issue composer: ··· menu → "Make recurring..."
Or convert existing: Cmd/Ctrl + K → "Convert into recurring issue"
```

**Cadence options**:
- Daily, weekly, bi-weekly, monthly
- Custom intervals
- Business days or calendar days

**Management**:
```
Team Settings > Recurring issues
```

### Issue Documents

**Rich content within issues**:
```
Issue view → ··· menu → "Add Document"
```

**Features**:
- Collaborative editing
- Inline comments
- Version history
- Document templates
- Slash commands (/)

**Use for**: Specs, requirements, research, meeting notes

### Comments and Threads

**Threaded discussions**:
```
Hover comment → Arrow icon → Reply to thread
```

**Features**:
- Resolved threads
- AI discussion summaries (Business/Enterprise)
- Emoji reactions
- File attachments (Cmd/Ctrl + Shift + A)

**AI summaries**: Auto-generated for 19+ comments or 100+ words

### Team Management

**Create and manage teams**:
```
Settings > Teams > "Add team"
Copy settings from existing team
Make private (Business/Enterprise)
```

**Team features**:
- Custom workflows per team
- Team-specific labels
- Team-level templates
- Separate cycle planning
- Sub-teams (Business/Enterprise)

See [[references/team-management.md]] for comprehensive team guide.

## Troubleshooting

### Issue Not Found
- Verify issue ID format (e.g., "TEAM-123")
- Check if issue is archived
- Ensure you have access to the team

### Cannot Update Issue
- Verify issue ID is correct
- Check team permissions
- Ensure state/label names are valid

### Search Returns No Results
- Broaden search criteria
- Check spelling of team names, labels, states
- Verify date format (ISO 8601) for date filters
- Use query parameter for text search in title/description

### Labels Not Working
- Verify label names (case-sensitive)
- Check if labels exist in workspace/team
- Create labels first with create_issue_label if needed

## References

Load these on-demand for detailed guidance:

- [[references/issue-workflows.md]] - Advanced issue management patterns
- [[references/project-management.md]] - Comprehensive project operations (projects, milestones, initiatives, documents, updates, dependencies, labels, templates, priority, notifications, archiving)
- [[references/triage-and-views.md]] - Triage management, user views, label views, attached views
- [[references/git-integration.md]] - GitHub/GitLab workflow automation
- [[references/api-patterns.md]] - MCP tool usage patterns and tips
- [[references/team-management.md]] - Team creation, configuration, and management
- [[references/advanced-features.md]] - SLAs, estimates, due dates, priority, relations
- [[assets/issue-template.md]] - Template for well-structured issues
- [[assets/project-template.md]] - Template for project creation
- [[assets/common-queries.md]] - Common search and filter patterns

## Tool Reference

**Issue Operations**:
- `list_issues` - Search and filter issues
- `get_issue` - Get detailed issue info
- `create_issue` - Create new issue
- `update_issue` - Update existing issue
- `list_comments` - Get issue comments
- `create_comment` - Add comment to issue

**Project Operations**:
- `list_projects` - Search and filter projects
- `get_project` - Get detailed project info
- `create_project` - Create new project
- `update_project` - Update existing project

**Team Operations**:
- `list_teams` - List all teams
- `get_team` - Get team details
- `list_users` - List workspace users
- `get_user` - Get user details

**Organization**:
- `list_issue_labels` - List available labels
- `create_issue_label` - Create new label
- `list_issue_statuses` - List team statuses
- `list_cycles` - List team cycles

**Documentation**:
- `search_documentation` - Search Linear docs
- WebFetch - Fetch specific doc pages from linear.app/docs

---

*Use this skill to operate Linear efficiently with MCP tools and official documentation.*
