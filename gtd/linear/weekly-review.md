# Weekly Review Process

**Critical Success Factor:** The weekly review is NON-NEGOTIABLE. Schedule 60-90 minutes, ideally Friday afternoon or Sunday evening.

## Weekly Review Checklist Template

Create a recurring issue template:

```
Title: Weekly Review - [Date]
State: This Week
Labels: @recurring

Description:
## Weekly Review Checklist

### 1. Get Clear (20 min)
- [ ] Process all Triage issues to zero
- [ ] Process other inboxes (email, Slack, notes) to zero
- [ ] Review last week: What got done? What didn't?
- [ ] Move incomplete "This Week" items to Backlog or keep for next week

### 2. Get Current (25 min)
- [ ] Review all Topic issues - each has ≥1 active sub-issue?
- [ ] Review Waiting For - follow up on aging items (>7 days)
- [ ] Review Someday/Maybe - move any to Backlog?
- [ ] Review Backlog by context - still relevant? Cancel stale items

### 3. Select This Week (15 min)
- [ ] Review upcoming calendar (next 2 weeks)
- [ ] Consider contexts available this week
- [ ] Move 10-15 items from Backlog → This Week
- [ ] Include mix of contexts and energy levels

### 4. Get Creative (10 min)
- [ ] Any new topic issues (projects) to start?
- [ ] Any new Someday/Maybe ideas?
- [ ] Review quarterly OKRs/goals - work aligned?
- [ ] Check if topic issues still align with goals

### 5. Update System (5 min)
- [ ] Archive completed issues/topics
- [ ] Clean up labels/contexts if needed
- [ ] Celebrate wins from the week!

### Notes
[Space for weekly reflections]
```

## Detailed Weekly Review Workflow

### 1. Get Clear (20 min)

**Process Inbox to zero:**
```
state:Triage
```
Process each item using inbox processing algorithm

**Review last week:**
- What got completed? (celebrate!)
- What didn't get done? (why? still relevant?)
- Move incomplete "This Week" items:
  - Back to Backlog if deprioritized
  - Keep in This Week if carrying forward
  - To Someday/Maybe if not ready

### 2. Get Current (25 min)

**Review Topic issues:**
```
label:Topic AND NOT state:["Done", "Canceled"]
```
- For each topic, check if it has active sub-issues
- Verify ≥1 sub-issue in Backlog/This Week/Next/In Progress
- If no active sub-issues:
  - Add one, OR
  - Move topic to Someday/Maybe, OR
  - Mark Done if complete

**Review Waiting For:**
```
state:"Waiting For"
```
Sort by updated date (oldest first)
- For items >7 days old, follow up via comment
- Move back to Backlog if you need to do it yourself

**Review Someday/Maybe:**
```
state:"Someday/Maybe"
```
- Any ready to move to Backlog?
- Any to cancel completely?

**Review Backlog:**
```
state:Backlog
```
Filter by contexts to review manageable chunks:
- Still relevant?
- Still accurate (is the action clear)?
- Cancel stale items
- Move to Someday/Maybe if not ready

### 3. Select This Week (15 min)

**Review upcoming calendar:**
- Check next 2 weeks for commitments
- Note what contexts you'll have available
- Consider upcoming deadlines

**Choose This Week's work from Backlog:**
```
state:Backlog
```

Filter by contexts available this week:
- What locations will you be in? (@office, @home, etc.)
- What tools will you have? (@computer, @phone, etc.)
- How's your energy this week? (mix of @high-energy and @low-energy)

**Select 10-15 items:**
- Move from Backlog → This Week
- Balance across contexts
- Include quick wins (Executable items)
- Include progress on topic issues (move sub-issues)

**Rule of thumb:** 2-3 items per workday = 10-15 items for the week

### 4. Get Creative (10 min)

- Any new projects/topics to start? (create parent issue with Topic label)
- Any new Someday/Maybe ideas? (capture them)
- Review OKRs/goals - is your work aligned?
- Are topic issues moving toward goals?

### 5. Update System (5 min)

- Archive/clean up completed topics and sub-issues
- Remove unused labels
- Update topic descriptions with progress
- Celebrate wins!

## Making Weekly Reviews Stick

### Schedule with Commitment

- Same time, same place every week
- Treat it like a meeting that can't be moved
- It's the most important hour of your week
- Consider scheduling with an accountability partner

### Reduce Friction

- Use the checklist template (copy/paste)
- Have a pleasant environment (good coffee, music)
- Block the time on your calendar
- Turn off notifications

### Track Your Streak

- Mark completed reviews in a habit tracker
- Celebrate consistent weekly reviews
- If you miss one, get back on track immediately

---

[← Back to Daily Workflows](./daily-workflows.md) | [Next: Advanced Patterns →](./advanced-patterns.md)
