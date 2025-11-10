# The LOPS System

LOPS is GTD adapted for Linear with a single team containing all work.

## Linear Team Structure

The entire system runs in one Linear team (LOPS team).

## Lists

Lists in LOPS are implemented as Linear statuses.

| List | GTD Concept | Description |
|------|-------------|-------------|
| **Triage** | In (Inbox) | Everything enters here |
| **Backlog** | Next Actions | Core Next Actions list |
| **This Week** | Next Actions | Items prioritized from Backlog for this week |
| **Next** | Next Actions | Items prioritized for today |
| **Someday/Maybe** | Someday/Maybe | Ideas for later |
| **Waiting For** | Waiting For | Delegated work being tracked |
| **Agenda** | Agenda | Items to discuss in regular meetings |
| **Done** | Done | Completed items |
| **Canceled** | - | No longer needed |

**Next Actions Flow:** Backlog → This Week → Next (progressive prioritization with increasing immediacy)

**Note:** There is no separate Projects list. Projects are tracked as parent issues (see below).

## Projects (Objectives in LOPS)

**GTD Projects** = **Parent Issues** in Linear, marked with **"objective"** label

- No separate projects list—parent issues serve this function
- Projects (called "Objectives" in LOPS) are outcome-focused with clear completion criteria
- Objectives always have child issues as next actions

## Labels

### Task Type
- **objective** - Multi-step work with a defined outcome (parent issue)
- **action** - Single, executable task

### Context (GTD @contexts)
- **@computer** - Requires computer access
- **@phone** - Phone calls, or tasks best completed on your phone
- **@outside** - Errands requiring going out, or meeting someone away from home
- **@home** - Actions only possible at home

### Agenda
**Agenda** is both a list (Linear status) and supported by labels.

**Labels:** Prefixed with `agenda-` for specific people/meetings
- Example: `agenda-spouse`, `agenda-leadership-team`, `agenda-john`

**Note:** Items with an `agenda-` label should be in the **Agenda** list (status).

## Estimates

LOPS uses **T-shirt sizing** for issue estimates to indicate effort/complexity:

- **XS** = 1 point - Trivial task (5-15 min)
- **S** = 2 points - Simple task (15-30 min)
- **M** = 3 points - Medium task (30 min - 1 hour)
- **L** = 5 points - Large task (1-2 hours)
- **XL** = 8 points - Very large task (2-4 hours)
- **XXL** = 13 points - Major task (4-8 hours, consider breaking down)
- **XXXL** = 21 points - Huge task (1+ days, should be broken into smaller tasks)

**When to estimate:** Assign estimates during the Triage/Clarify workflow to help with prioritization and cycle planning.

## Workflows

For detailed workflow guides, see the [workflows/](./workflows/) directory.


### 1. Capture (Ongoing)
- Extract thoughts, tasks, and reference items from your brain into the system
- Multi-channel capture: AI assistant, WhatsApp, voice input, etc.
- Automated ingestion: Reading messages and suggesting items for capture
- Goal: Get everything out of your head

See [workflows/capture.md](./workflows/capture.md) for detailed process.

### 2. Triage (Daily, 15-30 min)
- **Collect:** Consolidate captures from all capture channels into Triage queue
- **Clarify:** Determine what each item in triage means and what action is needed
- **Organize:** Put clarified items in the right place with appropriate metadata
- Output: Clear, actionable items ready for prioritization

See [workflows/triage.md](./workflows/triage.md) for overview, and sub-workflows:
- [Collect](./workflows/triage/collect.md)
  - [Chats Collection](./workflows/triage/collect/chats.md) - Collect from WhatsApp, iMessage, LinkedIn
- [Clarify](./workflows/triage/clarify.md)
- [Organize](./workflows/triage/organize.md)

### 3. Prioritize (Daily & Weekly)
- Daily: Select 3-5 most important items for today
- Daily: Protect time for Top Goal work (most important quarterly priority)
- Weekly: Choose 10-15 items from Backlog for the coming week
- Reassess incomplete items from previous periods
- Goal: Keep focus tight and realistic

See [workflows/prioritize.md](./workflows/prioritize.md) for detailed process.

### 4. Review (Weekly, 30+ min)
- Maintain project momentum by ensuring each has a next action
- Clean up stale or unrealistic items from active lists
- Surface and capture any missed commitments or open loops
- Prune Someday/Maybe and activate ready items
- Realign work with quarterly goals and assess system health

See [workflows/review.md](./workflows/review.md) for detailed process.

## Notes

**Cycles vs This Week:** Currently experimenting with Linear Cycles as an alternative to "This Week" status. For now, continuing to use "This Week" status. If Cycles work well, "This Week" may be dropped and would collapse into Backlog.




