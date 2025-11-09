# Setup Guide

Complete this setup in phases. Total time: 3-5 hours (including initial capture).

## Phase 1: State Configuration (5 minutes)

Ensure your Linear team has these states:

1. **Triage** - Inbox for all new captures
2. **Backlog** - Approved actions, not yet scheduled
3. **This Week** - Committed for this week
4. **Next** - Doing today
5. **Waiting For** - Delegated or blocked
6. **Someday/Maybe** - Ideas to consider later
7. **Done** - Completed successfully
8. **Canceled** - No longer relevant

## Phase 2: Label Setup (15 minutes)

Create these essential labels:

### System Labels

**Topic Marker:**
- `Topic` - Parent issue with sub-issues (GTD "project")

**Atomic Marker:**
- `Atomic` - Single, indivisible action ready to execute immediately (5-30min, max 2hr, no planning needed)

### Context Labels (Location)

- `@office` - At office location
- `@home` - At home
- `@anywhere` - Can do anywhere
- `@errands` - When out running errands

### Context Labels (Tools)

- `@computer` - Requires computer
- `@phone` - Requires phone

### Context Labels (Energy)

- `@high-energy` - Deep work, strategic thinking
- `@low-energy` - Admin tasks, simple work
- `@creative` - Creative thinking required

### Context Labels (People - Agendas)

- `@agenda-[person]` - One label per person you meet with regularly
- Example: `@agenda-john`, `@agenda-team`

## Phase 3: View Configuration (10 minutes)

Create filtered views for each workflow stage:

**Inbox View (Daily):**
```
state:Triage
```
Sort: Created date (oldest first)

**Today's Work (Throughout Day):**
```
state:Next AND NOT label:Topic
```
Your action list for today (excludes topic issues)

**This Week's Work (Daily Planning):**
```
state:"This Week" AND NOT label:Topic
```
Pool to pull from each morning (excludes topics)

**Backlog by Context (Weekly Planning):**
```
state:Backlog AND label:@computer AND NOT label:Topic
state:Backlog AND label:@calls AND NOT label:Topic
state:Backlog AND label:@high-energy AND NOT label:Topic
```
Your pool of approved actions

**Topic Issues (Weekly Review):**
```
label:Topic AND NOT state:["Done", "Canceled"]
```
All active projects/topics

**Waiting For (Weekly Review):**
```
state:"Waiting For"
```
Sort: Updated date (oldest first)

**Someday/Maybe (Weekly Review):**
```
state:"Someday/Maybe"
```

**Quick Wins:**
```
state:Next AND label:Atomic
```
or
```
state:"This Week" AND label:Atomic
```

## Phase 4: Initial Capture (2-4 hours)

Complete "mind sweep" - capture ALL open loops:

1. **Create issues for everything** on your mind:
   - Professional projects and tasks
   - Personal commitments
   - Ideas and someday projects
   - Things to discuss with people
   - Items waiting on others

2. **Keep it simple during capture:**
   - Title = brief description
   - State = Triage
   - Don't organize yet, just capture

3. **Use trigger lists** (from GTD summaries):
   - Projects started, not completed
   - Projects that need to be started
   - People to get back to
   - Communications needed
   - Financial matters
   - Home/personal responsibilities

## What's Next?

After completing setup:

1. **Process your Triage** - Use the [Daily Workflows](./daily-workflows.md) inbox processing guide
2. **Schedule your first weekly review** - Follow the [Weekly Review](./weekly-review.md) checklist
3. **Start daily planning** - Use the morning routine from [Daily Workflows](./daily-workflows.md)

---

[← Back to Overview](./overview.md) | [Next: Daily Workflows →](./daily-workflows.md)
