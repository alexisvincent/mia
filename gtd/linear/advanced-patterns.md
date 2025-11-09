# Advanced Patterns

## Topic Issues (GTD Projects)

### What is a topic issue?

- A parent issue with sub-issues
- Represents a multi-step outcome (GTD "project")
- Marked with `Topic` label
- Lives in the same states as atomic actions (Backlog, This Week, Next, etc.)

### When to create a topic issue

- Outcome requires >1 action to complete
- Example: "Organize home office" needs multiple steps
- Example: "Launch referral program" needs multiple steps

### When NOT to create a topic issue

- Single action that's just complex
- Use Topic for multiple actions, not complex single actions

## Pattern 1: Simple Topic Issue

**Example: "Organize home office"**

**1. Create parent issue:**
- Title: "Organize home office"
- State: **Backlog** (or This Week if urgent)
- Label: **Topic**
- Description: Vision of what "organized" looks like

**2. Create sub-issues:**
All sub-issues start in **Backlog**:

- "Buy desk organizer on Amazon"
  - State: Backlog
  - Labels: @computer, @low-energy, Executable
  - Parent: Home office topic

- "File old papers into filing cabinet"
  - State: Backlog
  - Labels: @home, @low-energy
  - Parent: Home office topic

- "Install better desk lighting"
  - State: Backlog
  - Labels: @home, @errands
  - Parent: Home office topic

**3. During weekly planning:**
- Move topic from Backlog → This Week (signals you're working on it this week)
- Move 1-2 sub-issues from Backlog → This Week

**4. During daily planning:**
- Move specific sub-issues from This Week → Next
- Work on sub-issues throughout the day
- Topic stays in This Week as progress tracker

**5. Completing the topic:**
- When making final push to complete ALL remaining sub-issues in one day
- Move topic to In Progress (signals active completion mode)
- Complete remaining sub-issues
- Mark topic as Done when all sub-issues complete

## Pattern 2: Complex Topic (with Linear Project)

**Example: "Launch customer referral program"**

### When to also use Linear Project feature

- Cross-team coordination needed
- Many stakeholders involved
- Needs rich documentation
- Long-running (months)
- Benefits from roadmap visibility

**1. Create Linear Project (optional):**
- Name: "Launch customer referral program"
- State: started
- Description: Full vision, purpose, success criteria, stakeholders
- Use Linear's project views, roadmap, milestones

**2. Create parent issue (Topic):**
- Title: "Launch customer referral program"
- State: **Backlog** (or This Week if actively working)
- Label: **Topic**
- Description: Link to Linear Project + current status summary
- This keeps it visible in your issue list for weekly review

**3. Create sub-issues:**
All sub-issues start in **Backlog**:

- "Draft referral program mechanics and rewards"
  - State: Backlog
  - Labels: @computer, @high-energy
  - Parent: Referral topic
  - Also linked to Linear Project

- "Call legal at 555-1234 to review terms"
  - State: Backlog
  - Labels: @calls
  - Parent: Referral topic
  - Also linked to Linear Project

- "Build landing page for referrals"
  - State: Backlog
  - Labels: @computer, @high-energy
  - Parent: Referral topic
  - Also linked to Linear Project

**4. During weekly planning:**
- Review Linear Project for overall status
- Move topic to This Week
- Move 2-3 sub-issues from Backlog → This Week

**5. During daily planning:**
- Pull sub-issues from This Week → Next
- Work on sub-issues
- Update Linear Project status periodically

**6. Topic can move to In Progress:**
- When making final push to complete
- Actively working to wrap up all remaining sub-issues
- Signals "completing this project now"

## Topic Issue States Explained

**Topic in Backlog:**
- Project is approved and clarified
- Not actively being worked on this week
- Sub-issues also likely in Backlog
- Review during weekly planning

**Topic in This Week:**
- Actively progressing this week
- At least some sub-issues in This Week/Next/In Progress
- Shows up in weekly review
- Signals current priority project

**Topic in Next:**
- Less common, but possible
- Might be doing final wrap-up today
- Or reviewing/planning the project today
- Sub-issues likely in various states

**Topic in In Progress:**
- Making active push to complete
- Planning to finish all remaining work soon (same day or very soon)
- Actively working through remaining sub-issues
- Signals "finishing this project now"
- Move to Done once all sub-issues complete

**Topic in Waiting For:**
- Generally not used (sub-issues would be in Waiting For instead)
- Could be used if entire project is blocked

**Topic in Someday/Maybe:**
- Good idea but not ready to work on yet
- Sub-issues probably don't exist yet or are minimal
- Review during weekly review

**Topic in Done:**
- All sub-issues complete
- Project outcome achieved
- Archive after celebration!

## Natural Planning for Complex Topics

For complex, high-stakes topics, use David Allen's Natural Planning Model:

**1. Purpose** - Define the "why"
- What's the value?
- What are the success criteria?

**2. Principles** - Identify boundaries
- Budget constraints
- Values and standards
- Non-negotiables

**3. Vision** - Envision the outcome
- What will this look like when complete?
- What will we see, hear, feel?

**4. Brainstorm** - Generate ideas
- Capture all ideas without judgment
- Use mind mapping or lists
- External capture essential

**5. Organize** - Sort ideas
- Group by components
- Sequence by dependencies
- Prioritize by importance

**6. Next Actions** - Identify first steps
- What's the immediate next physical action for each component?
- Create sub-issues for each next action

### Capture in topic description

```markdown
## Purpose
[Why this matters]

## Principles
- [Constraint 1]
- [Standard 2]

## Vision
[Detailed outcome description]

## Components
### Component 1
- Next action: [specific sub-issue]
### Component 2
- Next action: [specific sub-issue]

## Dependencies
[What blocks what]
```

## Agenda Management for Regular Meetings

**Setup:** Create agenda labels for each person/meeting
- Example: `@agenda-sarah` (Weekly 1:1 with Sarah)
- Example: `@agenda-team` (Weekly team meeting)

**Throughout the week:**

When you think of something to discuss, create an issue:
- Title: What you want to discuss
- State: Backlog (or This Week if meeting is this week)
- Labels: `@agenda-[person]`

**Before the meeting:**

If agenda items are in Backlog, move to This Week or Next

**During the meeting:**

1. Filter issues by agenda label (e.g., `label:@agenda-sarah`)
2. Discuss each item
3. Update status:
   - Mark Done if resolved
   - Move to "Waiting For" + assign if delegated
   - Create new issues for follow-ups

## Handling Interruptions

### Balance three types of work daily

1. **Predefined work** (50-70%) - Working from Next/This Week lists
2. **Work as it shows up** (20-30%) - Unexpected demands
3. **Defining work** (10-20%) - Processing, clarifying, organizing

### When interrupted

- Quick capture: Create issue in Triage with brief description and context
- Process later during inbox time
- Don't let interruptions derail your system

### If it's genuinely urgent (<2 min to assess)

- Handle immediately if <2 min to complete
- Otherwise: capture, assess priority, schedule time

### For truly urgent items

- Can skip ahead: Backlog → Next (bypass This Week)
- Use sparingly - too many "urgent" items means broken planning

## Using Cycles for Time-Boxing (Optional)

**Note:** GTD doesn't require cycles, but they can complement the This Week planning.

### Align cycles with weekly reviews

- View current cycle in Linear
- Assign "This Week" items to current cycle
- Use cycle as team coordination layer

### Cycle planning workflow

1. During weekly review, view next cycle
2. Review Someday/Maybe and Backlog items
3. Assign items to This Week AND to cycle
4. Unfinished items roll forward (don't be perfectionist)

### Benefits

- Team coordination and visibility
- Milestone tracking
- Commitment management

---

[← Back to Weekly Review](./weekly-review.md) | [Next: ADHD Tips →](./adhd-tips.md)
