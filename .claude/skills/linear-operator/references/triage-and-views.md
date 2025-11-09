# Triage and Views in Linear

Comprehensive guide to issue intake management and specialized views.

## Triage

### Overview

**Triage** is a special inbox for teams to manage incoming issues:
- Issues created by **integrations** (Slack, Sentry, etc.)
- Issues created by **workspace members not in the team**
- Opportunity to review, update, and prioritize before workflow

**Purpose**:
- Centralized intake point
- Quality control before issues enter workflow
- Prevents clutter in main workflow
- Dedicated responsibility for monitoring

### Configuring Triage

**Enable Triage**:
1. Team Settings > Triage
2. Toggle on
3. "Triage" appears under team name in sidebar

**Access**:
- Keyboard: `G` then `T`
- For specific team: `O` then `T` (select team)

### Creating Triage Issues

**Issues enter Triage when**:
- Created through integration (Slack, Sentry, support tools)
- Created while inside Triage view
- Created by members outside the specific team
- No default template overrides the triage status

**Note**: Default templates in Team Settings > Templates can override triage status.

### Triage Actions

**Review and take action**:

Action | Shortcut | Result
--- | --- | ---
**Accept** | `1` | Move to team's default status, optional comment
**Mark as duplicate** | `2` or `MM` | Merge into canonical issue, move attachments, set to Canceled
**Decline** | `3` | Set to Canceled status, optional explanation comment
**Snooze** | `H` | Hide until specified time or new activity

**Accept workflow**:
1. Review issue
2. Press `1` or select "Accept"
3. Optionally add comment
4. Issue moves to default status

**Mark as duplicate workflow**:
1. Press `2` or `MM`
2. Select existing issue to merge into
3. Attachments and customer requests transferred
4. New issue set to Canceled status

**Decline workflow**:
1. Press `3` or select "Decline"
2. Optionally add explanation comment
3. Issue set to Canceled status

**Snooze workflow**:
1. Press `H` or select "Snooze"
2. Choose return time (or until new activity)
3. Issue hidden from triage queue
4. Hidden from other users by default
5. View snoozed issues: Toggle in View Options

### Asking for More Information

**When details are insufficient**:
1. Comment on issue to request information
2. Keep issue in Triage status
3. Or snooze until response received
4. User who created issue receives notification

### Product Intelligence (Business/Enterprise)

**AI-powered triage assistance**:
- Analyze new issues against existing issues
- Suggest properties: assignee, label
- Surface likely related issues or duplicates
- Based on content analysis and historical behavior

### Triage Rules (Enterprise)

**Automated triage actions** based on filters:
- Configure in Team Settings > Triage
- Triggered when issues enter Triage
- Execute in order from top down

**Available actions**:
- Update team
- Update status
- Set assignee
- Apply label
- Add to project
- Set priority

**Rule behavior**:
- Multiple rules can apply
- Rules execute sequentially
- Moving to another team's Triage triggers that team's rules
- Conflicts surfaced in interface

**Use cases**:
- Route issues to correct team based on properties
- Auto-assign based on labels or customer
- Set priority based on customer tier
- Combine with custom Asks fields for scalable intake

**Example rules**:
```
Rule 1: If customer in [VIP customers] → Set priority to High
Rule 2: If labeled "iOS" → Move to team "Mobile"
```

### Triage Responsibility (Business/Enterprise)

**Define first responders**:
- Configure in Team Settings > Triage
- Select specific members
- Receive notifications for new issues
- Or automatically assigned to issues

**PagerDuty/OpsGenie/Rootly/Incident.io integration**:
- Connect on-call schedules
- Automate rotation of first responders
- API available for custom schedule providers

**Visibility**:
- Team members see who's monitoring triage
- Shown when creating issues

### Integrations

**Asks**:
- Intake issues from non-Linear users
- Slack-based issue creation
- Custom fields for context collection
- Seamless triage workflow

**Support integrations**:
- **Intercom** - Create/link issues from support conversations
- **Front** - Create/link issues from support inbox
- **Zendesk** - Create/link issues from support tickets
- **Slack** - Create issues from messages

**Integration workflow**:
1. Support team encounters issue
2. Create Linear issue directly from support tool
3. Or link customer report to existing issue
4. Issue enters Triage for team review
5. Linear members can act directly from Slack

### Triage Configuration Options

**Require priority before leaving Triage**:
- Team Settings > Triage
- Force priority selection
- Ensures important issues are prioritized

**View options**:
- Show/hide snoozed issues
- Filter by properties
- Group by assignee, label, priority

### Best Practices

**Triage responsibility rotation**:
- Weekly or daily rotation
- Clear ownership
- Use connected schedules for automation

**Regular triage sessions**:
- Daily or twice-daily review
- Keep triage queue lean
- Fast response to incoming issues

**Clear triage criteria**:
- Document when to accept/decline
- Define duplicate search process
- Establish priority guidelines

**Templates for common responses**:
- Saved replies for declined issues
- Standard requests for more information
- Duplicate issue explanations

## User Views

### Overview

**User views** show issues assigned to specific team members:
- Individual workload visibility
- Team distribution understanding
- Personal task tracking

### User Profiles

**Access user profiles**:
- Keyboard: `O` then `U` (select user)
- Click user avatar in activity feed
- Click user name in activity items

**Profile features**:
- All assigned issues (top bar)
- Filter and scan list
- Issue counts
- Recent activity

**Your own profile**:
- Click your avatar
- Or command menu: "open profile"

### Custom Views for Multiple Users

**When user profiles insufficient**:
- Create custom view
- Add assignee filter
- Select multiple users
- More flexible parameters

**Use cases**:
- Team workload view
- Cross-team user tracking
- Manager's direct reports

### Filter and Group by Assignee

**Most views support assignee grouping**:

**Example: Project work distribution**
1. Open project view
2. Group by: Assignee
3. Filter: Started + Unstarted statuses
4. See remaining work per person

**Benefits**:
- Workload balancing
- Identify overloaded team members
- Ensure even distribution

### Cycle Sidebar

**From any cycle view**:
1. Press `Cmd/Ctrl I` to open sidebar
2. View cycle details and graph
3. See work distribution across team

**Per-user information**:
- Total issue count
- Or total estimate points
- Percentage completion
- Hover to filter to user's issues only

**Use for**:
- Sprint planning
- Standup preparation
- Capacity checking

## Label Views

### Overview

**Label views** show all issues associated with a label or label group:
- Label-based organization
- Cross-team label aggregation
- Quick filtering by category

### Accessing Label Views

**Open label view**:
- Click label from board, list, or issue
- Keyboard: `O` then `L` (select label)
- Command menu: "open label"

**Features**:
- Favorite label views
- Apply filters
- Standard view operations

### Team-Specific vs Workspace Labels

**Team-specific label views**:
- Show issues only in that team
- Label associated with specific team

**Workspace label views**:
- Show issues across all teams
- Requires workspace-level label

### Cross-Team Label Aggregation

**View same label across multiple teams**:

**Setup**:
1. Create "All teams" view
2. Apply filter for specific label
3. Ensure label name spelled identically across teams
4. Capitalization and color don't matter

**Use cases**:
- "Design" label across all teams
- "Bug" label workspace-wide
- "Customer request" across teams

**Example**:
```
View: All Teams
Filter: Label = "Bug"
Result: All issues labeled "Bug" from all teams
```

### Label View Organization

**Favorite frequently used label views**:
- Click star icon
- Quick access from sidebar

**Filter within label views**:
- Additional filters on top of label
- Example: Label "Bug" + Status "Open"

**Group label views**:
- By assignee, status, priority
- Organize issues within label

## Attached Views (Project and Initiative)

### Project Issue Views

**Attach custom issue views to projects**:
1. Open project
2. Click `new view` icon next to "Issues" tab
3. Filter subset of project issues
4. Name the view
5. View appears as tab

**View features**:
- Visible to all with project access
- Reorder by dragging left/right
- Right-click options:
  - Copy view link
  - Add to favorites
  - Edit details
  - Delete

**Example views**:
- **Current User**: Filter "assigned to current user" (personalized per viewer)
- **Bugs**: Filter label "bug"
- **Standup**: Filter "In Progress" status
- **Blocked**: Filter issues with blocking relationships

**Use cases**:
- Personalized work views
- Status-based views
- Priority-based views
- Label categorization

### Project Views on Workspace Page

**Attach project views to workspace Projects page**:
1. Navigate to workspace Projects page
2. Create custom project view
3. Apply filters (status, team, member, etc.)
4. Projects auto-included based on filters

**Features**:
- No manual curation needed
- Automatic updates
- Accessible to all workspace members
- Reorder views

**Example project views**:
- **In Progress**: Filter status "In Progress"
- **Team X Projects**: Filter team "Team X"
- **My Projects**: Filter member "me"
- **This Quarter**: Filter target date "Q1 2025"

**Benefits**:
- Dynamic project lists
- No maintenance required
- Always up-to-date
- Reference multiple perspectives easily

## View Best Practices

### Naming Conventions

**Clear, descriptive names**:
- Indicate purpose: "My Bugs", "Team Backlog"
- Include timeframe if relevant: "Q1 Projects"
- Use consistent patterns across views

### Strategic View Creation

**Create views for**:
- Recurring workflows (daily standup, weekly review)
- Role-specific needs (manager oversight, IC workload)
- Team coordination (shared priorities, blockers)
- Reporting (metrics, status updates)

**Avoid creating views for**:
- One-time queries (use temporary filters)
- Overly specific criteria (hard to maintain)
- Duplicate purposes (consolidate similar views)

### View Maintenance

**Regular review**:
- Archive unused views
- Update filters as team evolves
- Ensure names remain accurate
- Share useful views with team

---

*Reference this guide for effective triage management and view organization.*
