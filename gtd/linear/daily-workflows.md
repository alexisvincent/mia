# Daily Workflows

## Morning Routine: Daily Planning (10-15 minutes)

**Goal:** Select today's work from "This Week" list.

### Steps

**1. Review yesterday (2 min)**
- Complete any forgotten items from yesterday
- Move incomplete "Next" items back to "This Week" (or forward if still priority)

**2. Check "This Week" list (3 min)**
```
state:"This Week" AND NOT label:Topic
```
- View all work committed for this week
- Note what contexts you have available today

**3. Select today's work → Move to "Next" (5 min)**
- Filter by today's context (@office if at office, @home if working from home)
- Filter by energy level you expect today (@high-energy if fresh morning, @low-energy if tired)
- Choose 3-5 items (realistic for today)
- Move selected items to "Next" state

**4. Order your "Next" list (2 min)**
- Use Linear's manual ordering or priority
- Top item = first thing to work on

**5. Start working (0 min)**
- Move top item to "In Progress"
- Do the work
- Mark Done when complete
- Pull next item from "Next" to "In Progress"

### Daily Planning Example

**Scenario:** Monday morning, at office, feeling high energy

**Step 1: Filter This Week by context**
```
state:"This Week" AND label:@office AND label:@high-energy
```

**Results:**
- "Draft Q1 strategy document"
- "Review architecture proposal from engineering"
- "Prepare presentation for board meeting"
- "Call vendor about contract renewal"
- "Analyze user metrics for product team"

**Step 2: Choose 3-5 for today → Move to Next**
- "Draft Q1 strategy document" → Next
- "Review architecture proposal" → Next
- "Call vendor" → Next (might do this afternoon)

**Step 3: Start working**
- "Draft Q1 strategy document" → In Progress
- Work on it
- Mark Done
- Pull "Review architecture proposal" → In Progress

## Inbox Processing: Get to Zero (15-30 minutes daily)

**Goal:** Process every Triage item to zero every day.

### Processing Algorithm

For each issue in Triage state (process top to bottom):

**Step 1: Is it actionable?**

**NO → Choose one:**
- **Delete:** Cancel the issue
- **Reference:** Add comment with info, then cancel
- **Someday/Maybe:** Move to Someday/Maybe state
- **Incubate:** Set due date for future review

**YES → Continue to Step 2**

**Step 2: What's the next physical, visible action?**

Update the issue title to be a concrete action:
- ❌ Bad: "Handle dentist"
- ✅ Good: "Call Dr. Smith at 555-1234 to schedule appointment"

**Step 3: Will it take less than 2 minutes?**

**YES → Do it now:**
- Execute the action immediately
- Close the issue (mark as Done)

**NO → Continue to Step 4**

**Step 4: Should I delegate?**

**YES → Delegate:**
- Move to "Waiting For" state
- Assign to the person
- Add to description: "Delegated on [date]: [what was requested]"

**NO → Continue to Step 5**

**Step 5: Is this a topic issue (project with sub-tasks)?**

**YES → It's a topic:**
- Add `Topic` label
- Move to **Backlog** state (or This Week if urgent)
- Create sub-issues for the next actions
- Sub-issues also go to Backlog
- Optionally create Linear Project if complex/cross-team

**NO → Continue to Step 6**

**Step 6: Add to Backlog**

- Move to "Backlog" state
- Add appropriate context labels (@computer, @high-energy, etc.)
- Update description with clear success criteria
- Add "Executable" label if:
  - Single, clear action
  - Clear "done" state
  - No planning required
  - 5-30 min (max 2 hours)
  - Can start immediately

**Step 7: Repeat until Triage is empty**

## Action Selection: Choosing What to Do (Throughout Day)

### The Four Criteria Model

1. **Context** - Where am I? What's available?
2. **Time** - How much time until next commitment?
3. **Energy** - How much mental/physical energy do I have?
4. **Priority** - Given above, what's most important?

### Using the "Next" list

Your "Next" list should be short (3-5 items) and context-appropriate. When choosing what to do:

1. **Check "Next" list first:**
   ```
   state:Next AND NOT label:Topic
   ```
   - Move top item to "In Progress"
   - Work on it
   - Mark Done
   - Pull next item

2. **If Next is empty or blocked:**
   - Return to "This Week" and pull more items to Next
   - Consider current context and energy

3. **For quick wins between meetings:**
   ```
   state:Next AND label:Executable
   ```
   or
   ```
   state:"This Week" AND label:Executable
   ```

### Context-Based Filtering Examples

- **At computer, 2+ hours, high energy** → Filter: `state:Next AND label:@computer AND label:@high-energy`
- **Have 15 minutes, low energy** → Filter: `state:Next AND label:Executable AND label:@low-energy`
- **Between meetings, have phone** → Filter: `state:Next AND label:@calls`

## End of Day: Quick Review (5-10 minutes)

1. **Capture any new items** from today into Triage

2. **Update work in progress:**
   - Add comments with progress notes on In Progress items
   - Move completed items to Done
   - Move items you didn't get to back from "Next" to "This Week" (or leave in Next for tomorrow)

3. **Check Waiting For items:**
   - Review for any aging items (>7 days)
   - Follow up as needed

4. **Prepare for tomorrow:**
   - Glance at calendar for tomorrow
   - Note any special contexts or constraints

---

[← Back to Setup Guide](./setup-guide.md) | [Next: Weekly Review →](./weekly-review.md)
