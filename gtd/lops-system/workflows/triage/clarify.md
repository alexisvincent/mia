# Clarify Workflow

**Part of:** Triage - Step 2: Process

**Goal:** Determine what each inbox item means and what needs to be done about it.

## The Purpose

Clarify is the thinking work—transforming vague captures into concrete understanding. You're answering "What is this?" and "What do I need to do about it?"

**Before starting:** Read [Writing a Great Next Action](../../guides/writing-next-actions.md) to understand how to write clear, physical, visible actions.

## The Clarify Process

For each item in the Triage queue, ask these questions:

### 1. Is it actionable?

Does this require me to do something?

**YES** → Continue to question 2

**NO** → Continue to section "For Non-Actionable Items" below

---

### 2. What is the definition of done?

**What does "done" look like?** Define what needs to be true for this to be complete.

This could be:
- A single outcome: "Accountant has answered my tax filing question"
- Multiple requirements:
  - "Website redesign mockups approved"
  - "New design implemented in production"
  - "Old design archived"

**Important:** Both Actions and Objectives need clear definitions of done.

### 3. Is this a single action or an objective?

**Can the definition of done be achieved in a single next action?**

**Single Action** → Continue to section "For Actions" below

**Multiple Steps or Unclear How to Achieve** → Continue to section "For Objectives" below

---

### 4. Is this related to existing work?

Before creating something new, check if this connects to work already in the system.

**Search for related issues:** Look for existing objectives or actions that might be:
- The same thing (duplicate)
- A parent objective this action belongs to
- A similar objective that should be merged or updated

**If you find something:**
- **Duplicate** → Update or merge with the existing item instead of creating new
- **Parent objective exists** → Note the parent ID, this will be linked as a child issue
- **Should be merged** → Combine with existing objective and update its definition/actions

**If nothing related exists** → Continue below to create new work

---

## For Objectives

### 5a. Write the Objective Title

Write a clear objective title describing the completed state in a single sentence.

- ✅ Good: "Website redesign completed and launched to production"
- ❌ Bad: "Work on website"

### 6a. Define Next Actions (or Sub-Objectives)

**Can you define the next action(s) clearly?**

List out the actions (or sub-objectives) needed to achieve the definition of done.

**IMPORTANT: Each next action or sub-objective must go through the full clarification process:**
- Define its definition of done (step 2)
- Determine if it's a single action or objective (step 3)
- Check if related to existing work (step 4)
- Follow the appropriate path (For Actions or For Objectives)
- Add the appropriate label (action or objective)

**Breaking into Sub-Objectives:**
Objectives can be broken into sub-objectives, BUT ask yourself: **Is this task too large?** If you're creating many layers, you may have defined too broad an objective.

If you can't define clear next actions, the objective may need to go to Someday/Maybe or requires more thinking.

### 7a. Add the Label

Add the **objective** label to this issue.

---

## For Actions

### 5b. Write the Next Action

The definition of done should follow the guidance in [Writing a Great Next Action](../../guides/writing-next-actions.md).

Write as a physical, visible action:

- ❌ Not "deal with taxes"
- ✅ But "Call accountant at 555-1234 to ask about quarterly filing deadline"

### 6b. Estimate the Effort

**How much effort will this take?** Assign a T-shirt size estimate:

- **XS** (1pt) - Trivial, 5-15 min
- **S** (2pt) - Simple, 15-30 min
- **M** (3pt) - Medium, 30 min - 1 hour
- **L** (5pt) - Large, 1-2 hours
- **XL** (8pt) - Very large, 2-4 hours
- **XXL** (13pt) - Major, 4-8 hours (consider breaking down)
- **XXXL** (21pt) - Huge, 1+ days (should be broken into smaller tasks)

**For Objectives:** Estimate the total effort for the entire objective, or leave unestimated and rely on child action estimates.

**Tip:** If estimating feels difficult, the task may not be well-clarified yet. Return to question 2.

### 7b. Add the Label

Add the **action** label to this issue.

---

## For Non-Actionable Items

### What type of non-actionable item is this?

Determine which category this falls into:

**Trash** - No longer needed or relevant
- Delete immediately

**Reference** - Information I might need later
- Identify where it should be stored
- Add any context needed to find/use it later

**Incubate** - Not ready to act on now, but might be relevant in the future
- Determine when to revisit (specific date or timeframe)
- Add context about why it might become relevant

Once clarified, proceed to [Organize](./organize.md) to handle the item appropriately.

---

## Output

After clarifying each item, you should know:

**If Actionable:**
- ✅ Definition of done
- ✅ Whether it's an Action or Objective
- ✅ If Action: clear next action and effort estimate
- ✅ If Objective: objective title and list of next actions (or sub-objectives)

**If Not Actionable:**
- ✅ Which category: Trash, Reference, or Incubate
- ✅ Any context needed (storage location, revisit date, etc.)

## Next Step

Once clarified, proceed to [Organize](./organize.md) to put the item in the right place with appropriate metadata.
