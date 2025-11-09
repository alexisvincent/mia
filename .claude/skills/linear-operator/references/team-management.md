# Team Management in Linear

Comprehensive guide to creating and managing teams in Linear workspaces.

## Team Fundamentals

### What Teams Represent

Teams in Linear organize different work functions within a workspace. They typically represent:
- Groups who work together frequently
- Areas of work (marketing, mobile, backend, etc.)
- Product components or areas
- Departments or functions

**Recommended approach**: Start with one or two teams and expand as needed. It's easy to add teams later and move issues between them.

### Team Structure Options

**Single team** (best for small organizations):
- Simplest approach
- Everyone sees all work
- Shared workflow

**Multiple teams**:
- Separate workflows per team
- Different cycles and planning
- Team-specific labels and settings

**Team hierarchy** (Business/Enterprise):
- Parent-child relationships
- e.g., Mobile → iOS, Android
- Organizational structure reflection

## Team Pages and Navigation

Each team has default pages in the sidebar:

**Core Pages**:
- **Issues** - All team issues (Active, Backlog views)
- **Projects** - Team and multi-team projects
- **Views** - Custom filtered views

**Optional Pages** (enable in settings):
- **Triage** - Inbox for new issues
- **Cycles** - Sprint planning and tracking

**Access team archives**: Hover over team name → `···` menu → "Open archives" (or `G` then `X`)

## Creating Teams

### Methods to Create

**From settings**:
```
Settings > Teams > "Add team" button
```

**From command bar**:
```
Cmd/Ctrl + K → "Create new team"
```

**Admin teams page**:
```
Settings > Administration > Teams
```

### Team Creation Options

**Copy settings from existing team**:
- Workflow statuses
- Labels
- Templates
- Automations
- Estimates configuration

**Make team private** (Business/Enterprise):
- Visible only to team members
- Invitation required to join
- Sensitive work isolation

**Team limits by plan**:
- Free: 2 teams
- Basic: 5 teams
- Business: Unlimited
- Enterprise: Unlimited

## Team Settings Configuration

Access via: Hover over team → `···` → "Team settings"

### General Settings

**Basic information**:
- Team name
- Icon (emoji)
- Identifier (e.g., "ENG" for ENG-123)
- Timezone

**Note**: Changing identifier is safe - old URLs redirect automatically

**Estimates**:
- Enable/disable
- Choose scale (Exponential, Fibonacci, Linear, T-Shirt)
- Extended scales (add 2 more values)
- Zero estimates allowed

**Create by email**:
- Enable email intake
- Unique email address per team
- Attachments sync (25MB limit)

### Members Management

**Add members**:
- Admins: Settings > Administration > Members
- Self-service: Users can join/leave freely
- Private teams: Invitation required

**Team roles**:
- Team members (default access)
- Team owner (for private teams)

### Workflow Configuration

**Issue statuses & automations**:
- Customize workflow categories
- Add/edit/reorder statuses
- Set default status for new issues
- Configure duplicate issue status
- Git automation rules
- Branch naming format

**Workflow categories** (cannot reorder):
1. **Triage** - Optional inbox
2. **Backlog** - Unscheduled work
3. **Unstarted** - Scheduled (e.g., "Todo")
4. **Started** - In progress (e.g., "In Progress", "In Review")
5. **Completed** - Done
6. **Canceled** - Won't do

**Status management**:
- Minimum one status per category
- Drag to reorder within category
- Edit name, color, description
- Set default status (Backlog or Unstarted)

### Auto-Close and Auto-Archive

**Auto-close**:
- Closes issues not updated in set period
- Only for inactive issues
- Respects project/cycle completion
- Notifications sent to subscribers

**Auto-archive**:
- Archives completed issues after period
- Applies 24 hours after setting change
- Blocks: uncompleted cycles, active projects, incomplete parent issues
- Also controls project/cycle archiving

**Recommended settings**:
- Auto-close: 3-6 months for inactive issues
- Auto-archive: 1-3 months after completion

### Triage Configuration

**Enable Triage**:
- Acts as team inbox
- Separate from Backlog
- Ideal for support/intake work

**Triage responsibility**:
- Assign rotation
- PagerDuty integration
- incident.io integration

### Cycles Configuration

**Enable cycles**:
- Sprint/iteration planning
- Set duration and start day
- Choose naming scheme

**Cycle automations**:
- Auto-move to active when added to cycle
- Auto-move to backlog when removed
- Status transitions

### Labels Management

**Team-level labels**:
- Visible only to team
- Team-specific categorization
- Create label groups (one level nesting)

**Label groups**:
- Non-multi-selectable (one per group)
- Up to 250 labels per group
- Organize by category (Type, Area, etc.)

### Templates

**Team templates**:
- Issue templates
- Project templates
- Document templates
- Default templates for members/non-members

**Template features**:
- Pre-set properties
- Placeholder text
- Sub-issue templates
- Integration support (Slack, email, Asks)

### Recurring Issues

**View and manage**:
- All recurring issues for team
- Edit schedules
- Create new recurring patterns

**Cadence options**:
- Daily, weekly, bi-weekly, monthly
- Custom intervals
- Business days or calendar days

### Slack Notifications

**Team-level notifications**:
- New issues
- Status changes
- Specific labels or priorities
- Custom filters

## Working with Teams

### Joining and Leaving

**Join team**:
- Hover over team → `···` → "Join team"
- Appears in your sidebar
- Private teams require invitation

**Leave team**:
- Hover over team → `···` → "Leave team"
- Removes from sidebar
- Can rejoin anytime

**Exploring teams**:
- Teams you visit appear under "Exploring"
- Temporary sidebar section
- Doesn't require joining

### Access Control

**Public teams** (default):
- All workspace members can view
- Anyone can join
- Anyone can create issues

**Private teams** (Business/Enterprise):
- Only members can view
- Invitation required
- Owner controls access

**Cross-team collaboration**:
- Create issues for any team
- Assign issues across teams
- Sub-issues can be any team
- Don't need to join to collaborate

### Team Discovery

**Find teams**:
```
Settings > Teams > "Join or create a team"
```

**Search teams**:
- Command bar: Cmd/Ctrl + K
- Type team name
- Navigate to team pages

## Team Structure Best Practices

### Considerations

**Issues are team-specific**:
- Each issue belongs to one team
- Issue ID reflects team (e.g., ENG-123)
- Moving issues changes ID (old URLs redirect)

**Workflows are team-specific**:
- Customize statuses per team
- Different teams, different processes
- Engineering vs Design vs Marketing

**Cycles are team-specific**:
- Can't view multiple teams' cycles together
- Can align schedules across teams
- Separate velocity tracking

**Projects can span teams**:
- Single-team or multi-team
- Issues stay with original team
- Coordinated cross-team work

**Sub-issues are flexible**:
- Can assign to any team
- Can assign to any member
- Don't inherit parent's team

### Structuring by Work Type

**Engineering teams**:
- Frontend, Backend, Mobile
- Platform, Infrastructure
- Separate workflows and cycles

**Functional teams**:
- Engineering, Design, Marketing
- Product, Sales, Support
- Different velocity and planning

**Product-based teams**:
- Core Product, Mobile App
- API, Integrations
- Component-focused work

**Hybrid approach**:
- Mix of functional and product
- Engineering + Design pods
- Cross-functional squads

### When to Create New Teams

**Create new team when**:
- Distinct workflow needed
- Separate cycle planning
- Different velocity tracking
- Team-specific labels required
- Private work needed

**Keep single team when**:
- Small organization (<10 people)
- Shared workflow works
- Collaborative planning
- Simple structure preferred

## Sub-Teams (Business/Enterprise)

### Creating Hierarchy

**Parent-child structure**:
- Mobile (parent)
  - iOS (child)
  - Android (child)
- Engineering (parent)
  - Frontend (child)
  - Backend (child)

**Benefits**:
- Organizational alignment
- Grouped navigation
- Reporting hierarchy

**Creating sub-teams**:
```
Team Settings > General > Parent team (dropdown)
```

### Sub-Team Behavior

**Inheritance**:
- Sub-teams don't inherit settings
- Must configure separately
- Can copy settings on creation

**Navigation**:
- Grouped in sidebar
- Expand/collapse parent
- Independent pages

## Moving Issues Between Teams

### Single Issue Move

**Keyboard shortcut**:
```
Cmd/Ctrl + Shift + M
```

**What changes**:
- New issue ID (e.g., ENG-123 → MOB-45)
- Old URLs redirect
- Old ID searchable

**What's removed**:
- Cycle assignment
- Team-specific labels
- Team-specific projects

**What remains**:
- Relations to other issues
- Priority
- Description and comments
- Assignee (if in new team)

**Workarounds for data loss**:
- Create temp labels before moving (e.g., "Cycle 1")
- Create matching labels in target team
- Add new team to project before moving

### Bulk Issue Move

**Select issues**:
- Manual selection
- Filter-based selection
- `Cmd/Ctrl + A` for all

**Move action**:
- Cmd/Ctrl + Shift + M
- Retains as much data as possible

**Undo**:
- `Cmd/Ctrl + Z` immediately after
- Won't restore removed data

## Team Deletion and Archival

### Making Team Private

**When to use**:
- Sensitive work
- Restrict access
- Before considering deletion

**How to enable**:
```
Settings > Team > Scroll to Danger Zone > Make private
```

### Deleting Teams

**Warning**: Permanently deletes all issues after grace period

**Deletion process**:
1. Settings > Team > Danger Zone
2. Confirm deletion
3. 30-day grace period begins
4. Permanent after grace period

**Grace period restoration**:
```
Settings > Teams > Recently deleted
Overflow menu > Restore
```

**Before deletion alternatives**:
- Make team private
- Export issues as CSV
- Move issues to another team

### Recently Deleted Teams

**Access**:
```
Settings > Teams > "Recently deleted" filter
```

**Restoration window**:
- 30 days from deletion
- Restore via overflow menu
- All data recoverable during window

## Team Settings Best Practices

### Initial Setup

**Recommended configuration order**:
1. Set team name, icon, identifier
2. Add team members
3. Configure workflow statuses
4. Set up labels
5. Create issue templates
6. Configure cycles (if using)
7. Set up integrations

### Copying Settings

**When creating new teams**:
- Use "Copy team settings" option
- Saves configuration time
- Maintains consistency

**What gets copied**:
- Workflow statuses
- Labels (structure, not applications)
- Templates
- Estimates configuration
- Cycle settings
- Git automations

**What doesn't copy**:
- Team members
- Issues
- Projects
- Actual cycles

### Maintaining Teams

**Regular maintenance**:
- Review and archive unused labels
- Update templates as processes evolve
- Adjust auto-archive periods
- Review team members
- Clean up old integrations

**Label hygiene**:
- Archive unused labels (keeps history)
- Delete duplicate labels
- Merge similar labels
- Use descriptive labels

**Template updates**:
- Don't affect existing recurring issues
- Must recreate recurring issues from new template
- Update integration templates separately

## Team Collaboration Patterns

### Cross-Team Projects

**Setup**:
1. Create project
2. Add all participating teams
3. Create issues in respective teams
4. Link issues to project

**Management**:
- Project visible to all teams
- Issues stay in original teams
- Coordinated milestones

### Shared Labels

**Workspace labels**:
- Available to all teams
- Common categorization
- Consistent naming (e.g., "Bug")

**Team labels with same name**:
- Act like workspace labels in multi-team views
- Filter shows issues from all teams
- Separate label IDs in API

### Triage and Intake

**Team-specific intake**:
- Triage enabled per team
- Unique email addresses
- Asks templates per team

**Shared intake**:
- Workspace-level templates
- Route to appropriate team
- Support team triage

## FAQ

**Q: Can I change team identifier after creation?**
A: Yes, and old URLs automatically redirect. Safe to change anytime.

**Q: What happens to issues when team is deleted?**
A: All issues permanently deleted after 30-day grace period. Export or move first.

**Q: Can sub-issues be in different teams than parent?**
A: Yes, sub-issues can be assigned to any team in the workspace.

**Q: How do team-specific labels work in multi-team views?**
A: Labels with same name across teams act like one label in filters and views.

**Q: Can I restrict team creation?**
A: Yes, admins can restrict to admin-only in Settings > Security.

**Q: Do cycles align across teams?**
A: Cycles can have same schedule but are managed separately per team.

**Q: What's the difference between leaving a team and being removed?**
A: Functionally the same - you lose team access. You can rejoin public teams anytime.

**Q: Can archived teams be restored?**
A: Within 30 days via Recently Deleted. After that, data is permanently lost.

---

*Reference this guide for comprehensive team management in Linear.*
