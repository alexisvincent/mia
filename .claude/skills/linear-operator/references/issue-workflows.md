# Advanced Issue Workflows

Detailed patterns for managing issues in Linear.

## Issue Lifecycle Management

### From Creation to Completion

**Standard workflow**:
1. **Create** - New issue in Backlog or Triage status
2. **Triage** - Review, prioritize, add context
3. **Plan** - Add to cycle, estimate, assign
4. **Execute** - Move to In Progress, work on it
5. **Review** - Move to In Review (if used)
6. **Complete** - Move to Done or Canceled

**State transitions**:
```
Triage → Backlog → Todo → In Progress → In Review → Done
       → Canceled (any state)
```

### Issue Templates

**Bug report structure**:
```markdown
## Description
What happened and what was expected?

## Steps to Reproduce
1. Go to...
2. Click on...
3. See error

## Expected Behavior
What should happen?

## Actual Behavior
What actually happened?

## Environment
- Browser/App version:
- OS:
- Other relevant details:

## Screenshots/Logs
Attach relevant media or logs
```

**Feature request structure**:
```markdown
## Problem Statement
What problem does this solve?

## Proposed Solution
How should this work?

## Acceptance Criteria
- [ ] Criterion 1
- [ ] Criterion 2
- [ ] Criterion 3

## Technical Notes
Any technical considerations or constraints

## Related Issues
- Related to #ISSUE-123
- Blocks #ISSUE-456
```

**Task structure**:
```markdown
## What needs to be done
Clear description of the task

## Context
Why is this needed?

## Done when
- [ ] Specific completion criterion 1
- [ ] Specific completion criterion 2

## Resources
- Link to docs
- Link to design
- Related code/files
```

## Bulk Issue Management

### Processing Multiple Issues

**Pattern for bulk updates**:
```
1. List target issues with filters
   issues = list_issues(team="...", label="...", state="...")

2. Review issues to confirm scope

3. For each issue:
   a. Get full details if needed: get_issue(id)
   b. Apply update: update_issue(id, **changes)
   c. Log result

4. Verify all updates completed
```

**Example: Bulk label addition**:
```
# Get all bugs without priority label
bugs = list_issues(label="bug", state="Triage")

# Add priority-needed label to all
for bug in bugs:
    update_issue(id=bug.id, labels=["bug", "priority-needed"])
```

**Example: Move multiple issues to cycle**:
```
# Get backlog items for next sprint
items = list_issues(
    state="Backlog",
    label="sprint-candidate",
    limit=20
)

# Get next cycle ID
cycles = list_cycles(teamId="team-id", type="next")
next_cycle_id = cycles[0].id

# Assign to cycle
for item in items:
    update_issue(id=item.id, cycle=next_cycle_id)
```

## Automated Workflows

### Git Integration Patterns

**Branch name workflow**:
1. Copy git branch name from Linear (includes issue ID)
2. Create branch with that name
3. Linear can auto-assign and move to "In Progress" (configure in preferences)

**PR/MR automation**:
1. Include issue ID in PR/MR title or description
2. Use magic words in description:
   - `Fixes TEAM-123` - Closes issue on merge
   - `Closes TEAM-123` - Closes issue on merge
   - `References TEAM-123` - Links without auto-close
3. Linear updates issue status through workflow automation

**Workflow automation settings** (per team):
- On branch copy → Move to Started status
- On PR draft → Update to specific status
- On PR ready for review → Update to specific status
- On PR merge → Move to Done status

### Status Automation

**Auto-assignment patterns**:
- Create issue → Auto-assign to self (preference setting)
- Copy git branch → Auto-assign to self (preference setting)
- Move to Started → Auto-assign to self (preference setting)

**Triggered status changes**:
- Issue added to cycle → Move from Backlog to Todo (team setting)
- Issue removed from cycle → Move to Backlog (team setting)
- PR merged → Move to Done (team workflow setting)
- PR closed without merge → Revert to previous status

## Issue Relationships

### Parent-Child Hierarchies

**Creating hierarchies**:
```
# Create parent issue
parent = create_issue(
    title="Epic: User Authentication",
    team="team-id",
    description="Complete user auth system"
)

# Create child issues
sub1 = create_issue(
    title="Implement login flow",
    team="team-id",
    parentId=parent.id
)

sub2 = create_issue(
    title="Implement signup flow",
    team="team-id",
    parentId=parent.id
)
```

**Hierarchy best practices**:
- Use 2-3 levels max (avoid deep nesting)
- Parent = Epic or large feature
- Children = Concrete tasks
- Parent stays open until all children complete
- Update parent description with progress

**Managing sub-issues**:
- View all sub-issues in parent's get_issue response
- Filter by parent: `list_issues(parentId="parent-id")`
- Move sub-issue: `update_issue(id="...", parentId="new-parent")`
- Remove from parent: `update_issue(id="...", parentId=null)`

### Issue Links and References

**Reference patterns**:
- In description: "Related to TEAM-123"
- In comments: "This blocks TEAM-456"
- Linear auto-links issue IDs

**Link types** (implicit in text):
- Blocks - This issue blocks another
- Blocked by - This issue is blocked
- Related to - General relationship
- Duplicate of - Duplicate issue
- Part of - Component of larger work

## Advanced Search Patterns

### Complex Filters

**Combining filters**:
```
# High priority bugs assigned to me, updated recently
list_issues(
    assignee="me",
    label="bug",
    priority=2,  # High
    updatedAt="-P7D",  # Last 7 days
    state="In Progress"
)
```

**Date range searches**:
```
# Issues created this week
list_issues(createdAt="-P7D")

# Issues updated this month
list_issues(updatedAt="-P30D")

# Format: ISO 8601 duration (-P7D = minus 7 days)
```

**Pagination for large result sets**:
```
# First page
page1 = list_issues(team="team-id", limit=50)

# Next page using cursor
page2 = list_issues(
    team="team-id",
    limit=50,
    after=page1.pageInfo.endCursor
)
```

### Saved Search Patterns

**Common searches to bookmark**:
```
# My active work
list_issues(assignee="me", state=["Todo", "In Progress"])

# Team backlog for triage
list_issues(team="team-id", state="Backlog", orderBy="CREATED_AT")

# Blocked issues
list_issues(team="team-id", query="blocked", state="In Progress")

# Overdue issues (requires due date)
list_issues(assignee="me", state="In Progress")
# Then filter in code for past due dates

# Unassigned urgent issues
list_issues(team="team-id", priority=1, assignee=null)
```

## Issue Health Monitoring

### Identifying Stale Issues

**Indicators of stale issues**:
- In Progress for > 2 weeks without updates
- Assigned but no activity
- Blocked for extended period
- No assignee and old creation date

**Detection pattern**:
```
# Issues in progress but not updated recently
stale = list_issues(
    state="In Progress",
    updatedAt="-P14D",  # Not updated in 14 days
    direction="ASC",
    orderBy="UPDATED_AT"
)
```

**Action patterns**:
1. Review with assignee
2. Update status if blocked
3. Re-triage if no longer relevant
4. Break down if too large

### Issue Metrics

**Track these patterns**:
- Cycle time: Created → Completed
- Lead time: Backlog → Completed
- Issues per state
- Aging issues in each state
- Completion rate per cycle

**Gathering metrics**:
```
# Get completed issues in date range
completed = list_issues(
    state="Done",
    updatedAt="-P30D",
    limit=100
)

# Analyze: created date → completed date for cycle time
# Requires get_issue for full timestamps
```

## Power User Patterns

### Morning Standup Routine

```
1. Check my active issues
   list_issues(assignee="me", state=["In Progress", "In Review"])

2. Review blocking issues
   list_issues(assignee="me", query="block")

3. Check new assignments
   list_issues(assignee="me", state="Todo", updatedAt="-P1D")

4. Update statuses as needed
   update_issue(id="...", state="...")
```

### Weekly Planning Routine

```
1. Review last week's progress
   list_issues(assignee="me", state="Done", updatedAt="-P7D")

2. Check current cycle
   list_cycles(teamId="team-id", type="current")
   list_issues(assignee="me", cycle="cycle-id")

3. Plan next week
   list_issues(assignee="me", state="Todo")
   # Prioritize and add estimates

4. Clear blockers
   # Review blocked issues and add comments/updates
```

### End of Sprint Routine

```
1. Complete remaining work
   list_issues(cycle="current-cycle-id", state=["In Progress", "In Review"])

2. Move incomplete work
   # Reassign to next cycle or backlog
   update_issue(id="...", cycle="next-cycle-id")

3. Archive completed cycle
   # Happens automatically based on team settings

4. Plan next cycle
   list_cycles(type="next")
   # Add issues from backlog
```

## Tips and Tricks

### Keyboard Shortcuts

Reference Linear docs for full list: `search_documentation("keyboard shortcuts")`

**Common shortcuts** (in Linear UI):
- `C` - Create issue
- `K` - Quick search
- `Cmd/Ctrl + K` - Command palette
- `Cmd/Ctrl + Shift + .` - Copy git branch name
- `Q` - Quick issue actions
- `/` - Focus search

### Markdown in Issues

**Supported Markdown**:
- Headers: `# H1`, `## H2`, etc.
- Bold: `**bold**`
- Italic: `*italic*`
- Links: `[text](url)`
- Code: `` `inline` `` or ``` for blocks
- Lists: `- item` or `1. item`
- Checkboxes: `- [ ] task`
- Issue references: `TEAM-123` (auto-linked)

**Use Markdown for**:
- Structured descriptions
- Code snippets
- Acceptance criteria checklists
- Links to docs/designs
- Step-by-step instructions

### Labels Strategy

**Effective label hierarchy**:
```
Type (group)
  ├─ Bug
  ├─ Feature
  └─ Task

Priority (group)
  ├─ Critical
  ├─ High
  └─ Low

Area (group)
  ├─ Frontend
  ├─ Backend
  └─ Infrastructure
```

**Label best practices**:
- Use groups for categories
- Keep flat where possible
- Use colors consistently (red=urgent, yellow=warning, etc.)
- Create team-specific labels as needed
- Avoid duplicate labels (workspace vs team)

## Creating Issues via Email

### Setup Email Intake

**Team-level email**:
```
Team Settings > General > Create by email
Enable toggle → Unique email address generated
```

**Template-specific email**:
```
Team Settings > Templates > Template overflow menu
"Configure email address" → Enable toggle
```

**How it works**:
- Send email to unique address
- Issue created automatically
- Original email linked as attachment
- Attachments synced (25MB limit)
- Sender not notified of updates

**Template emails**:
- Issue properties from template
- Title/description from email body
- Replies don't create new issues

**Limitations**:
- 25MB attachment limit
- 250,000 character body limit
- No automatic issue updates

### Email Workflow Pattern

```
1. Configure team email address
2. Share with stakeholders
3. Emails become issues automatically
4. Triage and process normally
5. Use for: Support intake, bug reports, requests
```

## Creating Issues via URL

### URL Parameters

**Base URLs**:
```
https://linear.app/team/<team-id>/new
https://linear.app/new
https://linear.new
```

**Parameter format**:
```
?parameter=value&parameter2=value2
```

### Supported Parameters

**Basic properties**:
```
title=Issue+title
description=Issue+description
status=Todo
priority=urgent
assignee=me (or name or UUID)
```

**Numbers and sizing**:
```
estimate=3
priority=urgent|high|medium|low
```

**Relationships**:
```
cycle=36 (number, name, or UUID)
label=bug,urgent (comma-separated)
project=Project+name (or UUID)
projectMilestone=Beta (requires project)
```

**Attachments**:
```
links=url1%7Ctitle1%2Curl2%7Ctitle2
Format: URL|Title, comma-separated, URL-encoded
```

### URL Examples

**Simple issue**:
```
https://linear.new?title=Fix+login+bug&priority=high
```

**Fully specified**:
```
https://linear.new?title=Add+feature&description=Details+here&
assignee=me&status=Todo&priority=medium&label=feature&
estimate=5&project=Q1+Launch
```

**From template**:
```
Team Settings > Templates > overflow menu
"Copy URL to create issue from template"
```

**Copy pre-filled URL from issue**:
```
Cmd/Ctrl + K → "Copy pre-filled create issue URL"
```

### Use Cases

**Bookmarks**:
- Create common issue types quickly
- Pre-filled bug reports
- Standard feature requests

**Integrations**:
- Link from external tools
- Embed in documentation
- Add to runbooks

**Automation**:
- Generate URLs programmatically
- Zapier/Make workflows
- Custom scripts

## Recurring Issues

### Create Recurring Issues

**From issue composer**:
```
··· menu → "Make recurring..."
Set first due date and cadence
```

**Convert existing issue**:
```
Issue view → ··· menu → "Convert into > Recurring issue"
Or: Cmd/Ctrl + K → "Convert into recurring issue"
```

**From team settings**:
```
Team Settings > Recurring issues > + icon
```

**From template**:
```
1. Create issue from template
2. Convert to recurring (··· menu or Cmd+K)
3. Properties from template apply to all recurrences
```

### Recurring Patterns

**Cadence options**:
- Daily
- Weekly
- Bi-weekly
- Monthly
- Custom intervals

**Timing**:
- Creates 00:01 day after due date
- Uses team timezone
- Business days or calendar days

**Management**:
```
Team Settings > Recurring issues
View all recurring patterns
Edit schedules
Pause or delete
```

### Recurring Issue Notes

**Template changes**:
- Don't affect existing recurring issues
- Must recreate from updated template
- Edit recurring issue directly

**Finding recurring issues**:
```
Filter: "Recurring issues"
Team Settings > Recurring issues
```

## Issue Documents

### What Are Documents

Documents provide rich content areas within issues for:
- Specifications
- Requirements
- Research findings
- Additional context
- Meeting notes

### Create Documents

**From issue**:
```
Issue view → ··· menu → "Add Document"
Appears in Resources section
```

**Document features**:
- Plain text and rich formatting
- Code snippets
- Headers and structure
- Issue/project references
- Collaborative editing

### Document Templates

**Create template**:
```
Workspace/Team Settings > Templates
Create Document Template
```

**Use template**:
- Select when creating document
- Pre-filled structure
- Consistent format

**Template management**:
```
Settings > Templates
Hover over template → overflow menu
Edit, duplicate, or delete
```

### Collaborative Features

**Real-time editing**:
- See other users' cursors
- Instant sync
- Auto-save

**Version history**:
```
··· menu → "Revert document content"
```

**Subscriptions**:
```
Bell icon (top right) → Subscribe user
```

**Who gets notified**:
- Document changes
- Comments and replies
- Mentions
- Automatic: creator subscribed

### Inline Comments

**Add comment**:
```
Select text → Comment button
Or: Cmd/Opt + M
```

**Comment features**:
- Thread replies
- Resolve comments
- Mention users
- View all comments (chat bubble icon)

**Comment history**:
```
Top right → Chat bubble icon
Shows all comments and threads
```

### Document Formatting

**Slash commands** (type `/`):
- Headers (H1, H2, H3)
- Lists (bulleted, numbered, checklists)
- Code blocks
- Dividers
- Blockquotes

**Reference other content**:
```
Type @ → Select document/issue/project
```

**Link to headers**:
```
Hover over header → "Copy heading URL"
Share deep links to specific sections
```

### Document Best Practices

**When to use documents vs description**:
- **Description**: Brief issue context
- **Document**: Detailed specs, research, planning

**Document structure**:
- Clear headers
- Table of contents for long docs
- Link related issues
- Regular updates

**Collaboration**:
- Subscribe relevant stakeholders
- Resolve comments when addressed
- Use inline comments for specific feedback

## Comments and Threads

### Posting Comments

**Add comment**:
```
Click "Leave a comment..." box
Type comment
Cmd/Ctrl + Enter to post
```

**Attach files**:
```
Paperclip icon
Or: Cmd/Ctrl + Shift + A
Or: Drag and drop
```

**Unsent comments**:
- Visible on issue
- Saved in Drafts (sidebar)
- Resume later

### Comment Editing

**Edit own comment**:
```
··· menu (top right of comment) → "Edit"
Make changes → "Save"
```

**Other options**:
- Manage subscription
- Copy URL to comment
- Create issue/sub-issue from comment
- Delete comment

### Threaded Conversations

**Create thread**:
```
Hover over comment → Arrow icon "Reply to comment"
```

**Reply to thread**:
```
Click into thread text box
Type reply
Post like regular comment
```

**Thread benefits**:
- Organized discussions
- Topic isolation
- Clear context

### Resolved Threads

**Resolve thread**:
```
Root message overflow menu → "Resolve thread"
Or: Resolve from specific reply
```

**AI summaries** (Business/Enterprise):
- Auto-generated when resolved
- Visible when collapsed
- No summary if resolved with reply comment
- Updates if thread content changes

**Use cases**:
- Mark questions answered
- Indicate decisions made
- Clarify outcomes

### Discussion Summaries

> Business and Enterprise plans

**Automatic generation**:
- Triggered at 19+ comments or 100+ words
- Updates as discussion evolves
- Appears above comments

**Summary features**:
- Decisions highlighted
- Blockers identified
- Debates and resolutions
- Key participants
- Citations link to source comments

**Enable resolved thread summaries**:
```
Team Settings > General
"Enable resolved thread AI summaries"
```

### Emoji Reactions

**Add reaction**:
```
Hover over issue/comment → "Add reaction" icon
Click to add emoji
```

**Custom emojis**:
```
Settings > Emojis
Upload individual (JPG, GIF, PNG)
Or: Import from Slack workspace
```

**Use reactions for**:
- Quick acknowledgment
- Voting
- Agreement/disagreement
- Fun and team culture

### Comment Best Practices

**Effective commenting**:
- Be specific and actionable
- @mention relevant people
- Use threads for discussions
- Resolve threads when done
- React instead of "+1" comments

**When to comment vs update description**:
- **Comment**: Discussion, questions, updates
- **Description**: Core issue context, requirements

**Threading**:
- Use for related discussion
- Keep main comments focused
- Resolve when question answered

## Issue Drafts

### Draft Types

**Temporary drafts** (local):
- Created when navigating away
- Saved per-client
- Cleared on logout/restart
- Re-opens on next issue creation

**Saved drafts** (persistent):
- Created by saving draft explicitly
- Synced across clients
- Available in Drafts page (sidebar)
- Persist until deleted or posted

### Creating Drafts

**Automatic temporary draft**:
```
1. Start creating issue
2. Navigate away (draft auto-saved)
3. Return to create issue (draft restored)
```

**Save draft explicitly**:
```
1. Click close or press Esc
2. Modal: "Save as draft?"
3. Confirm save
4. Access from Drafts page
```

**Draft retention**:
- Stored for 6 months
- Auto-deleted after expiry

### Managing Drafts

**Access drafts**:
```
Sidebar → Drafts
```

**Resume draft**:
```
Click draft in Drafts page
Continue editing
Post or save again
```

**Delete draft**:
```
Drafts page → Select draft → Delete
```

## Advanced Issue Creation Patterns

### Bulk Issue Creation

**Manual bulk**:
```
1. Create first issue with properties
2. Cmd/Ctrl + Shift + Enter to create more
3. Properties copied to new issues
4. Repeat as needed
```

**From checklist**:
```
1. Create checklist in description/document
2. Select checklist items
3. Cmd/Ctrl + Shift + O
4. Convert to sub-issues
```

**From comments**:
```
1. Select comment text
2. Cmd/Ctrl + Shift + O
3. Creates sub-issue from text
```

### Template-Driven Creation

**Keyboard shortcut**:
```
Option/Alt + C → Select template
```

**Hold Option/Alt**:
```
Option/Alt + Click "Create new issue" → Template picker
```

**Default templates**:
```
Team Settings > Templates > Default template
Different defaults for members vs non-members
```

**Template integrations**:
- Slack: Select template when creating
- Email: Template-specific addresses
- Asks: Template-driven intake
- Zendesk/Intercom: Template selection

### Placeholder Text in Templates

**Create placeholders**:
```
Template editor → Select text → Aa icon → Placeholder
```

**Purpose**:
- Prompt for specific information
- Guide issue creation
- Structure intake forms
- Asks customization

**Behavior**:
- Visible in template
- Replaced when creating issue
- Formatted differently (gray text)

**Example**:
```markdown
## Problem Description
[Describe what's broken]

## Impact
[How many users affected?]

## Steps to Reproduce
[List steps here]
```

### URL-Based Automation

**Generate URLs for common types**:
```
Bug: ?title=Bug:+&label=bug&priority=high
Feature: ?title=Feature:+&label=feature&status=Backlog
Support: ?title=Support+Request&label=support&assignee=support-team
```

**Embed in tools**:
- Documentation: "Report a bug" link
- Internal tools: Create issue button
- Runbooks: Auto-generate issues
- Error tracking: Link to create issue

**Parameter tricks**:
```
# Pre-fill from context
?title=${error.message}&description=${error.stack}

# Multiple labels
?label=bug,urgent,production

# Team-specific
https://linear.app/team/ENG/new?label=backend
```

---

*Reference this guide when implementing advanced issue management workflows.*
