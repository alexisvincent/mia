# Project Management in Linear

Comprehensive guide to managing projects effectively in Linear.

## Project Concepts

### What are Projects?

Projects are units of work that have a **clear outcome** or **planned completion date**, such as a new feature's launch. They:
- Are comprised of **issues** and optional **documents**
- Can be **shared across multiple teams**
- Come with unique features: **progress graph**, **milestones**, **notifications**
- Track progress towards a specific goal or objective

### Projects vs Issues

**Projects**:
- Higher-level initiatives or goals
- Can span multiple teams
- Have timeline (start/target dates)
- Track progress across multiple issues
- Have states, leads, milestones, and priority
- Support **documents**, **updates**, **dependencies**
- Generate **progress graphs** with **live predictions**

**Issues**:
- Individual units of work
- Belong to a single team
- Can be linked to **one project** at a time
- Can be assigned to **project milestones**
- More granular and actionable

**When to use projects**:
- Cross-functional initiatives
- Features spanning multiple teams
- Quarterly goals or OKRs
- Product launches
- Long-running efforts (>2 weeks)
- Work requiring **structured milestones**
- Initiatives needing **progress tracking** and **predictions**

**When to use just issues**:
- Single-team work
- Quick tasks
- Individual bugs
- Small features

## Project Lifecycle

### Creation to Completion

**Project stages**:
1. **Planned** - Scoping and planning phase
2. **Started** - Active development
3. **Paused** - Temporarily halted
4. **Completed** - Successfully finished
5. **Canceled** - Discontinued

### Creating Effective Projects

**Minimum project setup**:
```
create_project(
    name="Q1 Mobile App Redesign",
    team="team-id",
    description="Redesign mobile app UX"
)
```

**Complete project setup**:
```
create_project(
    name="Q1 Mobile App Redesign",
    team="team-id",
    summary="Modernize mobile app user experience",
    description="""
## Objectives
- Improve user engagement by 30%
- Reduce bounce rate
- Modernize visual design

## Scope
- Redesign home screen
- New navigation patterns
- Updated color scheme and typography

## Success Metrics
- DAU increase of 20%
- App store rating > 4.5
- User satisfaction score > 80%

## Timeline
- Week 1-2: Design phase
- Week 3-4: Development
- Week 5: QA and polish
- Week 6: Launch

## Resources
- [Design mocks](link)
- [User research](link)
""",
    lead="user-id",
    startDate="2025-01-01",
    targetDate="2025-03-31",
    state="planned",
    priority=2,  # High
    labels=["mobile", "redesign", "q1-2025"]
)
```

### Project Description Template

```markdown
## Objectives
What are we trying to achieve?

## Background/Context
Why is this needed? What's the business case?

## Scope
What's included and what's explicitly out of scope?

## Success Criteria
How do we measure success?
- Metric 1: Target value
- Metric 2: Target value

## Timeline
Key milestones and deadlines

## Dependencies
What needs to happen first? What are we blocking?

## Risks
What could go wrong? Mitigation strategies?

## Resources
- Design docs
- Technical specs
- Research/data
- Related projects

## Team
- Project lead: @person
- Contributors: @person1, @person2
- Stakeholders: @person3
```

## Project Properties

### Core Properties

Property | Description | Notes
--- | --- | ---
**Name** | Project title | Required, clear and descriptive
**Team** | Owning team(s) | Required, supports multiple teams
**Status** | Lifecycle state | Backlog, Planned, In Progress, Completed, Canceled
**Lead** | Project owner | Single member, responsible for updates
**Members** | Project contributors | Multiple members can opt-in to notifications
**Priority** | Urgency level | 0=None, 1=Urgent, 2=High, 3=Medium, 4=Low
**Start Date** | When work begins | Supports flexible timeframes (year, quarter, month, day)
**Target Date** | Expected completion | Supports flexible timeframes, used for predictions
**Milestone** | Project phase | Defaults to "Upcoming"
**Icon** | Visual identifier | Customize color and icon
**Summary** | Brief description | Plaintext, max 255 chars, shown in project cards
**Description** | Detailed information | Markdown, collaborative editing, inline comments
**Labels** | Categorization tags | Project labels for organization and filtering
**Documents** | Attached documents | Specs, PRDs, updates created within Linear
**Resources** | External links | Links to docs, designs, research

### Timeframes

Projects support **flexible timeframes** for both start and target dates:
- **Year** - e.g., "2025"
- **Half-year** - e.g., "H1 2025"
- **Quarter** - e.g., "Q1 2025"
- **Month** - e.g., "January 2025"
- **Precise day** - e.g., "2025-01-15"

**Use timeframes to**:
- Match your level of certainty (early stages = broader timeframes)
- Deter scope creep with target dates
- Create accountability for shipping
- Group projects in Initiative timeline views
- Filter projects by date ranges

**Timeframe filtering**:
```
# In project views
- Group by start date or target date
- Filter: "created at" > "custom date or timeframe"
- Filter: "start date" > "Q1 2025"
- Filter: "target date" > "before March 2025"
```

## Project Discovery and Management

### Viewing Projects

Each team has a **Projects** page organizing projects into:
- **List view** - Tabular layout with properties
- **Board view** - Kanban-style grouping
- **Timeline view** - Gantt-style visualization with dependencies

There's also a workspace-level **Projects** page to view all projects across teams.

### Finding Projects

**List all projects**:
```
list_projects()
```

**Filter projects**:
```
# My projects
list_projects(member="me")

# Team projects
list_projects(team="engineering")

# Active projects
list_projects(state="started")

# Recent updates
list_projects(updatedAt="-P7D", orderBy="updatedAt")

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

### Project Updates

**Update project metadata**:
```
update_project(
    id="project-id",
    name="Updated name",
    description="Updated description",
    state="started",
    targetDate="2025-04-15"
)
```

**Change project lead**:
```
update_project(
    id="project-id",
    lead="new-lead-user-id"
)
```

**Update project state**:
```
update_project(id="project-id", state="completed")
```

**Add/update labels**:
```
update_project(
    id="project-id",
    labels=["q1", "strategic", "mobile"]
)
```

## Multi-Team Projects

### Overview

Projects can be **shared across multiple teams**, enabling cross-functional coordination.

**Add teams when**:
- Creating a project (select multiple teams)
- From project details page (click team name, select additional teams)

**Multi-team features**:
- Project view creates **tabs** to toggle between:
  - **All issues** - Across all teams
  - **Team-specific issues** - Per team tab
- Issues can belong to any team in the project
- Single project lead (not per-team)
- Unified progress tracking

**Use cases**:
- Product launches involving Engineering, Design, Marketing
- Platform migrations across Frontend, Backend, Data teams
- Company-wide initiatives requiring multiple departments

**Example**:
```
# Create multi-team project
create_project(
    name="Platform Migration",
    team="platform-team",  # Primary team
    description="Migrate to new infrastructure",
    lead="platform-lead-id"
)

# Add issues from different teams
create_issue(
    title="Frontend changes",
    team="frontend-team",
    project=project.id
)

create_issue(
    title="Backend migration",
    team="backend-team",
    project=project.id
)
```

## Project Milestones

### Overview

**Project milestones** represent different stages in a project's lifecycle. They help:
- Divide and organize work inside projects
- Track progress towards specific goals
- Provide visibility in Initiatives and timeline views
- Create clear phases for execution

### Creating Milestones

**From project overview**:
- Create directly beneath project description
- Click `+` beside milestones header in project details pane (`Cmd/Ctrl I`)
- Right-click on timeline date to add milestone to that date

**From command menu**:
- `Cmd/Ctrl K` → search "milestone"

**Milestone properties**:
- Name (required)
- Description (optional, Markdown)
- Target date (optional, can add later)
- Order (drag to reorder)

**Keyboard shortcut**: `Shift M` to add/move milestone on issue

### Managing Milestones

**Edit milestones**:
- Hover over milestone in project overview → click `⋮` → Edit/Delete
- Click date to change target date
- Drag `⋮⋮` icon to reorder milestones

**Add issues to milestones**:
```
# Use keyboard shortcut
Shift M

# Or drag issue onto milestone in project details pane

# Or from command menu
Cmd/Ctrl K → "Add to milestone"
```

**Auto-suggest milestones**:
When creating new issues in projects with milestones, Linear suggests suitable milestones.

### Milestone Progress

**Completion tracking**:
- Completion % = Issues in "Completed" status / Total issues in milestone
- Diamond icon shows status:
  - **Yellow** - Current milestone being worked on
  - **Gray** - Not started
  - **Filled** - In progress
  - **Complete** - All issues done

**Timeline visibility**:
- Current milestone shown on Initiative timeline
- Hover/click for details
- Double-click to open project filtered to milestone

### Filtering and Grouping

**Filter by milestone**:
```
# Press F in project view
F → Milestone → Select milestone(s)

# Or click milestone in project details pane for quick filter
```

**Group by milestone**:
- Open Display options in project view
- Select "Group by: Milestone"

**Clear milestone filter**:
- Open project details sidebar and clear filter

**View milestone in project**:
- Click arrow beside milestone in issue details pane
- Opens project with milestone filter applied

### Converting Milestones to Projects

When a milestone grows large enough to be its own project:
1. Click overflow menu (`⋮`) on milestone
2. Select "Convert to project"
3. Linear suggests properties based on:
   - Original milestone content
   - Parent project properties

### Insights on Milestones

**Available on Business/Enterprise**:
- View milestones as a dimension in Insights
- Segment milestones by status type
- See which milestones are in progress
- Track completion velocity

## Linking Issues to Projects

### Assigning Issues

**At creation**:
```
create_issue(
    title="Redesign home screen",
    team="mobile-team",
    project="project-id",
    description="..."
)
```

**Update existing issue**:
```
update_issue(
    id="issue-id",
    project="project-id"
)
```

**Remove from project**:
```
update_issue(
    id="issue-id",
    project=null
)
```

### Finding Project Issues

**Via project details**:
```
project = get_project(query="project-id")
# Project response includes linked issues
```

**Via issue search**:
```
list_issues(project="project-id")
```

**Filter project issues**:
```
# Active issues in project
list_issues(
    project="project-id",
    state=["Todo", "In Progress"]
)

# Completed project issues
list_issues(
    project="project-id",
    state="Done"
)
```

## Project Planning Workflows

### Quarterly Planning

**Setup**:
1. Create project for quarter goal
2. Define objectives and success metrics
3. Set timeline (start/end dates)
4. Assign project lead

**Execution**:
```
# Create Q1 project
q1_project = create_project(
    name="Q1 2025: Mobile Growth",
    team="mobile-team",
    description="Drive 30% growth in mobile DAU",
    startDate="2025-01-01",
    targetDate="2025-03-31",
    state="planned",
    labels=["q1-2025", "okr"]
)

# Break down into initiatives
initiatives = [
    "App Store Optimization",
    "Push Notification Improvements",
    "Onboarding Redesign"
]

# Create sub-projects or issues for each
for initiative in initiatives:
    create_issue(
        title=initiative,
        team="mobile-team",
        project=q1_project.id,
        description=f"Part of Q1 mobile growth initiative"
    )
```

### Feature Launch Planning

**Typical structure**:
```
Project: Feature Launch
  ├─ Issue: Design specs
  ├─ Issue: Frontend implementation
  ├─ Issue: Backend implementation
  ├─ Issue: Testing
  ├─ Issue: Documentation
  ├─ Issue: Launch preparation
  └─ Issue: Post-launch monitoring
```

**Implementation**:
```
# Create project
launch = create_project(
    name="Feature X Launch",
    team="engineering",
    description="""
## Launch Plan
1. Design - Week 1
2. Development - Weeks 2-3
3. QA - Week 4
4. Launch - Week 5
""",
    startDate="2025-02-01",
    targetDate="2025-02-28"
)

# Create issues for each phase
phases = [
    ("Design specs", "design-team"),
    ("Frontend implementation", "frontend-team"),
    ("Backend implementation", "backend-team"),
    ("QA testing", "qa-team"),
    ("Documentation", "docs-team"),
    ("Launch", "product-team")
]

for title, team in phases:
    create_issue(
        title=title,
        team=team,
        project=launch.id
    )
```

## Cross-Team Projects

### Multi-Team Coordination

**Project spanning teams**:
```
# Create project assigned to primary team
project = create_project(
    name="Platform Migration",
    team="platform-team",
    description="Migrate to new infrastructure",
    lead="platform-lead-id"
)

# Add issues from different teams
create_issue(
    title="Frontend changes",
    team="frontend-team",
    project=project.id
)

create_issue(
    title="Backend migration",
    team="backend-team",
    project=project.id
)

create_issue(
    title="Database migration",
    team="data-team",
    project=project.id
)
```

**Tracking cross-team progress**:
```
# Get all issues across teams
all_issues = list_issues(project="project-id")

# Group by team
by_team = {}
for issue in all_issues:
    team = issue.team.name
    if team not in by_team:
        by_team[team] = []
    by_team[team].append(issue)

# Report progress per team
```

## Project Monitoring

### Progress Tracking

**Manual checks**:
```
# Get project details
project = get_project(query="project-id")

# Get linked issues with status
issues = list_issues(project="project-id")

# Calculate completion %
total = len(issues)
done = len([i for i in issues if i.state.type == "completed"])
progress = (done / total * 100) if total > 0 else 0
```

**Health indicators**:
- On track: > 80% completion at 80% of timeline
- At risk: < 60% completion at 60% of timeline
- Blocked: No progress in > 1 week
- Completed: All issues in "completed" state

### Status Updates

**Regular update pattern**:
```
# Weekly project update
1. Review progress
   - Issues completed this week
   - Issues in progress
   - Blockers/risks

2. Update project description
   update_project(
       id="project-id",
       description="... [Updated status section] ..."
   )

3. Communicate changes
   # Post update in project comment or external tool

4. Adjust timeline if needed
   update_project(
       id="project-id",
       targetDate="new-date"
   )
```

### Milestone Tracking

**Using project updates**:
Linear doesn't have explicit milestones, but you can:

1. Use project description to document milestones
2. Create milestone issues with subtasks
3. Use labels for milestone phases
4. Track in project updates/comments

**Milestone pattern**:
```
create_issue(
    title="Milestone: MVP Complete",
    team="team-id",
    project="project-id",
    description="""
## Completion Criteria
- [ ] All core features implemented
- [ ] Basic testing complete
- [ ] Documentation ready
- [ ] Ready for alpha release

## Related Issues
- TEAM-1, TEAM-2, TEAM-3
"""
)
```

## Project Graph

### Overview

The **project graph** shows:
- **Progress** towards completing the project
- **Live predictions** for completion date
- **Scope changes** over time
- **Velocity** (issues completed per week)

**Available when**:
- Project status moved to "Started" (or other started-type status)
- Sufficient issue data collected
- Updates hourly with latest activity

**Access**: Open project details sidebar (`Cmd/Ctrl I`)

### Reading the Graph

**Lines on the graph**:
- **Gray line** - Project scope over time (shows scope creep)
- **Blue line** - Started issues (work in progress)
- **Purple line (solid)** - Completed issues
- **Purple line (dotted)** - Predicted completion path
- **Red vertical line** - Target date (if set)

**Additional data**:
- Breakdown by **assignee** and **label**
- Percentage completion per category
- Hover to see exact values over time
- Click assignee/label → "filter" to show related issues

### Live Predictions

**Completion date calculation**:
- Based on **weekly velocity** (completed issues per week)
- Recent weeks weighted more heavily
- Requires at least 1 week of data
- Includes optimistic and pessimistic estimates (±40% buffer)

**Remaining work calculation**:
- Sum of incomplete issue points
- In-progress issues counted as 1/4 complete
- Prediction updates as scope changes

**Issue point system**:
- If estimates enabled: Use issue estimates
- If no estimates: All issues = 1 point

**Key insight**: Target date creates accountability and helps deter scope creep.

### Understanding Graph Changes

**Why progress might go down**:
- Project scope reduced (issues removed/deleted)
- Issues canceled
- Issue estimates reduced

**Granularity**:
- Graph points every 7 days
- Statistics update hourly

## Project Documents

### Overview

Create **documents inside projects** to centralize information:
- Project specs and PRDs
- Status updates
- Meeting notes
- Technical documentation
- Research findings

### Creating Documents

**From project overview**:
1. Navigate to "Resources" section
2. Click `+` button
3. Select "Create Document"
4. Add title, custom icon, and icon color

**Document features**:
- Same **Markdown editor** as issues
- Plain text, code snippets, headers
- Reference issues, projects, documents with `@`
- **Inline comments** on text (`Cmd Opt M`)
- **Collaborative editing** with real-time cursors
- **Version history** - Revert via `⋮` menu

### Document Templates

**Create templates** for consistent documentation:
- Navigate to Settings > Templates (workspace or team level)
- Define template structure
- Available when creating new documents

**Use templates for**:
- Project spec structure
- PRD format
- Status update format
- Meeting notes template

### Document Subscriptions

**Subscribe to notifications**:
- Click bell icon in upper right
- Select yourself or other members
- Creator auto-subscribed

**Notifications for**:
- Material changes to content
- Comments and replies
- Document deletion
- Member subscriptions/mentions

**Notification types**: Linear Inbox, Email, Slack (if configured)

### Inline Comments

**Add comments**:
- Select text → Click comment button
- Or use `Cmd Opt M`

**Comment actions**:
- Reply to comments
- Resolve with single click
- View history via chat bubble icon (upper right)
- Shows resolved comments

**Notifications**:
- Subscribed members notified
- Mentioned members notified

### Collaborative Editing

**Real-time collaboration**:
- Multiple users can edit simultaneously
- See input cursors of other users
- All changes instantly saved and synced
- Shows last edited time and author

**Version control**:
- Access via `⋮` menu
- Choose "Revert document content"
- Restore previous versions

### Editor Slash Commands

Type `/` for formatting options:
- **Headers**: H1, H2, H3
- **Lists**: Bulleted, numbered, checklists
- **Code blocks**
- **Dividers**
- **Blockquotes**

### Referencing Documents

**Link to documents**:
- Type `@` + document name in issues, comments, other documents
- Documents appear in bottom section of @ menu

**Link to specific headers**:
- Hover over header → Click "Copy heading URL"
- Share URL to direct teammates to specific section

**Open documents**:
- Keyboard: `O` then `D`
- Or select from Overview tab

## Initiative and Project Updates

### Overview

**Structured updates** that communicate:
- **Health indicator** - On track, At risk, Off track
- **Rich text description** - Status, challenges, next steps
- **Progress report** - Auto-generated summary of changes

**Available in**:
- Linear (Updates tab)
- Slack channels (if configured)

### Creating Updates

**Access**:
- From Project/Initiative Overview page
- Click pencil icon in top-right
- Or click "Update" button

**Update components**:
1. **Health indicator** (required)
   - On track (green)
   - At risk (yellow)
   - Off track (red)
2. **Description** (required)
   - Markdown formatting
   - File uploads
   - Highlight text for formatting
3. **Progress report** (auto-generated for projects)
   - Project delays
   - Target date changes
   - Lead changes
   - Milestone progress
   - Overall completion (if >2% change)

**Who can update**:
- Owner/Lead writes first update
- Any workspace member can write subsequent updates

### Viewing Updates

**Latest update**: Shown on Project/Initiative Overview page

**Update history**: Click "Updates" tab for chronological list

**From Initiative list**: Click health status to see recent updates

**Sharing updates**:
- Copy link
- Copy as Markdown (`Cmd/Ctrl K` → action menu)

### Update Reminders

**Configure in Workspace Settings**:
- Frequency: Daily or interval (weekly, biweekly)
- Day and time for reminders
- Custom schedules

**Reminder behavior**:
- Sent to Initiative owners / Project leads only
- Only for "Active" Initiatives / "In Progress" Projects
- Follow-up nudges: +1 day, +2 days
- Sent in lead's local timezone

**Project-level overrides**:
- Click bell icon on project
- Options:
  - Follow workspace default
  - Custom schedule
  - Never remind

### Project Staleness

**When updates overdue** (requires reminders enabled):
- Health icon shows dashed outline (slightly overdue)
- Icon turns gray (significantly overdue)
- Status: "Update Missing" or "No Update expected"

**Staleness criteria**:
- Last update was "On Track"
- Update is 2 reminder cycles + 3 days overdue

**Filter stale projects**:
```
Date > latest project update > before 1 week ago
```

### Notifications

**Slack configuration** (Admins):
- Default channel for all updates (e.g., #project-updates)
- Per-project override (click bell icon)
- Edits sync to Slack

**Inbox notifications**:
- Enable in account settings
- Receive updates in Linear Inbox

**Who receives**:
- Update author
- Thread participants
- Subscribed members

### Update Comments

**Bi-directional Slack sync**:
- Comment in Linear → Appears in Slack thread
- Reply in Slack → Syncs to Linear
- Requires latest Slack integration (Admin: "Reconnect" button)

**Notifications**:
- Author notified
- Thread participants notified
- Inbox/Email/Slack (based on preferences)

### Progress Reports

**Auto-generated for projects**:
- Included when significant changes detected
- Can hide with "Hide details" when drafting
- Shows:
  - Target date changes
  - Lead changes
  - Milestone progress
  - Overall completion (>2% change)

**Initiative progress**:
- Owner changes
- Target date changes
- Status changes

## Project Dependencies

### Overview

**Visualize blocking relationships** on timeline views:
- **End → Start** dependency type only
- Visual lines connecting projects
- Violation detection

**Use for**:
- Planning project sequences
- Identifying blockers
- Coordinating team handoffs
- Timeline-based planning

### Creating Dependencies

**From contextual menu**:
1. Click `⋮` next to project name
2. Or use `Cmd/Ctrl K` (command bar)
3. Hover "Dependencies"
4. Select "Blocked by..." or "Blocking..."
5. Choose related project

**From timeline view**:
1. Hover at end of project bar (circle appears)
2. Click and drag to another project
3. Dependency line created

### Timeline Interaction

**Click dependency line**:
- Jump to connected project
- Remove dependency

**Drag project with dependencies**:
- **Default**: Backlog/Planned projects "bump" together
- **Hold `Cmd/Ctrl`**: Keep chain in place
- **Hold `Shift`**: Move all projects together (any status)

### Viewing Dependencies

**Project Overview / Properties panel**:
- "Blocked by" field
- "Blocking" field

**Timeline view**:
- Lines connecting projects
- **Blue line** - Dependency not violated
- **Red line** - Dependency violated (dates conflict)

### Dependency Dates

**Line start**: Uses blocking project's:
- Target end date (if set)
- OR Predicted end date (if no target)

**Line end**: Uses blocked project's:
- Target start date (if set)
- OR Target end date (fallback)

### Filtering

**Filter options**:
- "Project has dependencies"
- "Project has blocking dependency"
- "Project has blocked by dependency"
- "Project has violated dependencies"

## Project Labels and Organization

### Overview

**Project labels** categorize work at scale:
- More flexible than Initiatives
- Granular grouping dimension
- Filter, group, and locate projects easily
- Label issues by their project's label

**Project labels vs Initiatives**:
- **Initiatives** - Company goals, manual curation, progress tracking
- **Project labels** - Flexible categorization, automatic filtering

### Creating Project Labels

**From Settings**:
1. Settings > Projects > Labels
2. Create labels and groups
3. Configure colors and descriptions

**From project**:
- Click label menu on project
- Create label inline

**Label groups**:
- Mutually exclusive (one per group)
- Example: "Stage" group with "Planning", "Executing", "Done" labels

### Using Labels

**Apply to projects**:
```
update_project(
    id="project-id",
    labels=["q1", "strategic", "mobile"]
)
```

**Filter projects**:
- By label or label group
- Organize work units relevant to your business

**Group projects**:
- In project views
- By label or label group

**Filter issues by project label**:
- Granular view of work contributing to labeled projects
- Example: Show all issues in projects labeled "customer-facing"

### List View Columns

**Add label group columns**:
1. Click "Display" menu in project list
2. Select desired label group
3. Column added to list view
4. See label values at-a-glance

### Insights Integration

**Measure by project label**:
- Run Insights on **issue views**
- Slice by **project's label** (upstream)
- Metrics: Issue count, age, triage time
- Compare performance between project labels
- Identify which projects drive most work

## Project Priority

### Overview

**Priority levels** indicate project urgency:
- **No priority** (0) - Default
- **Low** (4)
- **Medium** (3)
- **High** (2)
- **Urgent** (1)

### Setting Priority

**Keyboard shortcut**:
```
Select project(s) → P then P
```

**Right-click menu**:
- Right-click project → Set priority

**Micro-ordering**:
- Within same priority group
- Click and drag to reorder
- Dragging into priority group applies that priority

### Priority Ordering

**Sorting behavior**:
- Items without priority sorted **last**
- Higher priority shown first
- Manual adjustment within groups

## Project Notifications

### Personal Notifications

**Enable for projects you care about**:
- Click bell icon on project page
- Or Settings > Account > Notifications

**Keyboard**: `G` then `S` → Notifications

**Receive notifications for**:
- New issue created in project
- Comment/change to project description
- Issue marked completed/canceled
- New project update posted

**Manage from**:
- Project view (bell icon)
- Account notification settings

### Slack Channel Notifications

**Send updates to Slack**:
- Click bell icon on project
- Select Slack channel (e.g., #p-project-name)

**Notifications for**:
- Issues created
- New comments
- Status updates
- Project updates

**Interactive from Slack**:
- Linear members: Take actions directly
- Non-Linear members: View basic details

**Best practice**: Create dedicated channel per project (#p-project-name)

## Project Templates

### Overview

**Reusable project structures** for repeated projects:
- Predefined issues and milestones
- Project properties (lead, members, status)
- Associated initiatives
- Team assignments

### Creating Templates

**Access**:
- Settings > Templates (workspace level)
- Team Settings > Templates (team level)

**Template components**:
- Project name
- Project description
- Team(s)
- Project status
- Project lead
- Project members
- Associated initiatives
- Project milestones
- Issues to create

**Scope**:
- **Workspace templates** - All teams can use
- **Team templates** - Only that team can use

### Using Templates

**When creating project**:
1. Click "New Project"
2. Select template beside team identifier
3. Or `Cmd K` → "create project from template"

**Template selection**:
- Available templates shown in dropdown
- Template must match team scope

### Managing Templates

**Edit templates**:
1. Go to Templates settings
2. Hover over template name
3. Access contextual controls
4. Edit, rename, duplicate, or delete

### Advanced Features

**Sub-issues in templates**:
- Add issues to template
- Click `⋮` menu → "Add sub-issue"
- Include issue templates with sub-issues

**Default templates**:
- Navigate to Team Settings > Templates
- Scroll to "Default templates"
- Set template as default for team

## Project Label Strategy

### Label Strategy

**Project labels**:
```
# Create project-specific labels
create_project_label(
    name="launch-blocker",
    color="#FF0000",
    description="Must be completed before launch"
)

# Organization labels
- "q1", "q2", "q3", "q4" - Quarterly projects
- "strategic", "tactical" - Project importance
- "infrastructure", "product", "growth" - Project type
```

**Apply labels**:
```
update_project(
    id="project-id",
    labels=["q1", "strategic", "mobile"]
)
```

## Advanced Project Patterns

### Portfolio Management

**Tracking multiple projects**:
```
# Get all active strategic projects
strategic_projects = list_projects(
    label="strategic",
    state="started"
)

# Review each project
for project in strategic_projects:
    details = get_project(query=project.id)
    issues = list_issues(project=project.id)
    # Analyze progress, risks, etc.
```

### Project Templates

**Reusable project structures**:

Create templates as documents or saved patterns:

**Launch Template**:
```
Name: [Product] Launch
Teams: Engineering, Design, Marketing
Phases:
  1. Planning
  2. Design
  3. Development
  4. QA
  5. Launch Prep
  6. Launch
  7. Post-Launch

Standard issues to create:
- Design specifications
- Technical architecture
- Implementation tasks
- QA test plan
- Marketing materials
- Launch checklist
- Post-launch monitoring
```

**Infrastructure Project Template**:
```
Name: [Component] Migration
Teams: Platform, Engineering
Phases:
  1. Planning & Design
  2. Proof of Concept
  3. Implementation
  4. Testing & Validation
  5. Migration
  6. Monitoring

Standard issues:
- Architecture design doc
- POC implementation
- Migration plan
- Testing strategy
- Rollout plan
- Monitoring & alerts
- Documentation
```

### Project Dependencies

**Tracking dependencies**:

Linear doesn't have explicit project dependencies, but you can:

1. Document in project description
2. Use issue blocking relationships
3. Add dependency comments
4. Track in external tool and link

**Pattern**:
```
update_project(
    id="project-id",
    description="""
## Dependencies
- **Blocked by**: Platform Migration Project (PROJ-123)
- **Blocks**: Mobile Launch (PROJ-456)
- **Related**: API v2 Rollout (PROJ-789)

[Rest of description]
"""
)
```

## Initiatives

### Overview

**Initiatives** are manually curated lists of projects grouped by company objective:
- Align organization on goals
- Track progress towards objectives
- High-level planning across projects and timelines
- Workspace-level visibility (except guests)

**Purpose**:
- Express organizational goals
- Monitor progress towards aims
- Enable long-timeline planning
- Provide leadership overview

### Creating Initiatives

**Navigate to Initiatives page** in sidebar to create and view.

**Required**: Name only
**Optional**:
- Owner (defaults to creator)
- Target date
- Summary/description
- Associated projects
- Sub-initiatives (Enterprise)

**Visibility**: All workspace members except guests

**No "private" Initiatives**: Always workspace-wide
- Projects from private teams remain restricted
- Initiative itself visible to all

### Initiative Properties

Property | Description
--- | ---
**Name** | Initiative title (required)
**Status** | Planned, Active, Completed
**Owner** | Initiative owner (defaults to creator)
**Target Date** | Expected completion
**Teams** | Associated teams
**Projects** | Curated list of projects
**Sub-initiatives** | Nested initiatives (Enterprise)
**Description** | Detailed information (document)
**Resources** | External links
**Latest Update** | Most recent update with health indicator

### Lifecycle Management

**States**:
- **Planned** - Being scoped
- **Active** - In execution
- **Completed** - Successfully finished

**Completed initiatives**:
- Move to "Completed" section
- Maintain historical record
- Can be referenced later

### Initiative Health and Progress

**Initiative Health**:
- Based on latest Initiative update
- Indicators: On track, At risk, Off track
- Click to read full update

**Active Projects rollup**:
- Shows health of constituent projects
- Color-coded by latest project update:
  - Green: On track
  - Yellow: At risk
  - Red: Off track
  - Gray: No recent update

**Use rollup data to**:
- Check in on at-risk/off-track projects
- Identify projects missing updates
- Offer assistance to struggling projects

### Initiative Overview Page

**Access and modify**:
- Status (Planned, Active, Completed)
- Owner
- Target Date
- Resources (documents, links)
- Latest update
- Description (detailed document)
- Project list

### Sub-initiatives (Enterprise)

**Hierarchical organization** for large programs:
- Nest Initiatives up to **5 levels deep**
- Tree-like structure
- Parent includes all projects from sub-initiatives

**Use sub-initiatives for**:
- Company-wide objectives across departments
- Large strategic goals with phased delivery
- Grouping by quarter, theme, or ownership

**Creating sub-initiatives**:
- From workspace Initiative views (Active, Planned, Completed)
  - Click `+ New Initiative` → Choose parent
  - Or hold `Option` (`Alt`) and drag one Initiative under another
- From Initiative Overview page
  - Click `+ Add` button or `⋮` menu
  - Use command menu (`Cmd K`) or `Cmd Shift P`

**Viewing sub-initiatives**:
- Nested beneath parent in Initiative lists
- Press `T` to collapse/expand (personal view only)
- Parent project count includes sub-initiative projects
- Display settings: Show only directly owned projects

**Visibility rules**:
- Visible to all workspace members (except guests)
- Private team projects remain restricted
- Initiative itself always listed

**Filtering with sub-initiatives**:
- Filters (team, status, health) include sub-initiative projects
- Complete view of progress at all levels

### Initiatives vs Project Views

**Initiatives**:
- Manually curated
- Align with organizational goals
- Leadership tracks progress
- Close monitoring of health

**Project Views**:
- Automatically filtered
- Projects matching criteria auto-included
- No goal alignment required
- Lighter-weight organization

**Recommendation**: Use Initiatives for company objectives, Project Views for automatic categorization.

### Example Use Cases

**Engineering managers**:
- Pipeline view for staffing needs

**Product leaders**:
- Scenario planning across quarters
- Customer feature prioritization

**Marketing leaders**:
- Release timeline for GTM communication

## Project Status and Archiving

### Project Status

**Status offers quick progress update**:
- Shown next to project name
- Visible in Initiative/timeline pages
- Icon on project bar

**Status categories**:
- **Backlog** - Not yet started
- **Planned** - Scoped, not yet in progress
- **In Progress** - Active work
- **Completed** - Successfully finished
- **Canceled** - Discontinued

**Updating status**:
- Manual update only (not automatic)
- Update even if all issues complete
- Clear lifecycle signal to stakeholders

### Custom Project Status

**Customize statuses** (Settings > Projects > Statuses):
- Name
- Description
- Color
- Category (Backlog, Planned, In Progress, Completed, Canceled)

**Multiple statuses per category**:
Example for "In Progress":
- "Development"
- "QA"
- "Maintenance"

### Project Archiving

**Auto-archive triggers**:
- All issues within project closed
- Project marked as closed (Completed/Canceled)
- Team's auto-archive setting elapsed

**Key behavior**:
- Issues archive **with project** (not separately)
- Maintains project statistics integrity
- _Closed issues don't archive unless project closes_

**Accessing archived projects**:
- Team's archive page
- "Recently deleted projects" section

**When to archive**:
- Completed and no longer referenced
- Canceled and won't be resumed
- Historical reference only

**Archived project features**:
- Searchable and viewable
- Issues remain accessible
- Can be unarchived if needed
- Not in default lists

### Deleting Projects

**Delete project**:
- Opens three dot menu from project page
- Select "Delete"
- Or command bar → "Delete project"

**Recovery window**:
- Moved to "Recently deleted projects" (team archive)
- **14-day recovery period**
- Permanently deleted after 14 days

### Project Cleanup

**End-of-quarter cleanup**:
```
1. Review completed projects
   list_projects(state="completed", updatedAt="-P90D")

2. Verify all issues closed

3. Add final summary to description

4. Archive manually or let auto-archive handle it

5. Create new quarter projects
```

## Tips for Effective Projects

### Best Practices

**Project naming**:
- Clear and descriptive
- Include timeline if relevant (Q1, 2025, etc.)
- Use consistent patterns

**Project descriptions**:
- Keep updated with current status
- Use Markdown for structure
- Link to external resources
- Document decisions and rationale

**Project leads**:
- Assign a clear owner
- Lead responsible for updates
- Lead coordinates across teams

**Timeline management**:
- Set realistic dates
- Update when things change
- Review weekly for at-risk projects

**Issue organization**:
- Link all relevant issues
- Use labels for phases/categories
- Keep issue count manageable (split large projects)

### Common Pitfalls

**Avoid**:
- Creating projects for small features (use issues)
- Outdated project descriptions
- Unclear success criteria
- No assigned lead/ownership
- Too many linked issues (>50)
- Forgetting to update state

**Instead**:
- Use projects for multi-week, multi-person work
- Keep descriptions current
- Define clear objectives and metrics
- Always assign a lead
- Break large projects into phases
- Update state as work progresses

---

*Reference this guide for comprehensive project management in Linear.*
