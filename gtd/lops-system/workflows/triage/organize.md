# Organize Workflow

**Part of:** Triage - Step 2: Process

**Goal:** Put clarified items in the right places with appropriate metadata.

## The Purpose

Organize takes what you decided during Clarify and puts it where it belongs in the system. This ensures everything is categorized correctly and has the metadata needed for execution.

## The Organize Process

Based on what you determined during [Clarify](./clarify.md), organize the item:

### If Not Actionable

- **Trash** → Delete the issue
- **Reference** → Save in appropriate reference system (link in issue notes if needed), then delete/archive issue
- **Someday/Maybe** → Move to Someday/Maybe status
- **Incubate** → Set due date/reminder, move to appropriate status

### If Actionable

#### 1. Should I Delegate? (Actions Only)

If this is an **Action** (not an Objective), ask: **Am I the right person to do this?**

**Delegate** → Note assignee, will go to Waiting For in step 3

**Do myself** → Continue to step 2

#### 2. Two-Minute Rule (Actions Only, Not Delegated)

If this is an **Action** you're doing yourself, ask: **Can this be done in under 2 minutes?**

**YES** → Do it immediately, then mark issue as Done

**NO** → Continue to step 3

#### 3. Choose the Status (List)

Move to the appropriate list based on timing and type:

- **Backlog** - Default for actionable items (core Next Actions list)
- **Waiting For** - If delegated (add assignee and date in description)
- **Agenda** - If it's for a specific meeting/person discussion

#### 4. Add Labels

**Task Type:**
- **Action** - If this is a single, executable task
- **Objective** - If this is multi-step work with a defined outcome (will have child issues)

**Context** (where/how it can be done):
- **Computer** - Requires computer access
- **Phone** - Phone calls
- **Outside** - Errands requiring going out
- **Home** - Actions only possible at home

**Agenda** (if using Agenda status):
- **agenda-[person]** - For specific person/meeting (e.g., agenda-spouse, agenda-john)

#### 5. Set Up Objectives

If this is part of a larger objective:

**New Objective:**
- Make this issue a parent (no parent linkage)
- Add **Objective** label
- Title should clearly describe the outcome/completed state
  - ✅ "Website redesign completed and launched"
  - ❌ "Work on website"

**Existing Objective:**
- Link this issue as child to the parent Objective issue
- Ensure parent has **Objective** label

**Rule:** Every Objective must have at least one child action. If you complete the last action, add the next one or mark the Objective complete.

#### 6. Add Additional Metadata

As needed:
- **Due date** - Only if truly deadline-driven (don't use for "I want it done by")
- **Description** - Add context, links, or details needed for execution
- **Estimate** - If helpful for planning

## Output

After organizing, the item should be:
- ✅ In the correct status/list
- ✅ Labeled appropriately (Action/Objective, context, agenda)
- ✅ Linked to parent Objective if applicable
- ✅ Has necessary metadata for execution

## Result

The item is now out of Triage and properly organized in the system, ready for prioritization and execution.
