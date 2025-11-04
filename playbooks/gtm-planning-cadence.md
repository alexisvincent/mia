# GTM Planning Cadence Playbook

**Version**: 1.0
**Last Updated**: 2025-01-04
**Status**: Active - Trial Phase (First Month)

## Overview

This playbook defines our go-to-market planning approach, adapted from our engineering team's cadence framework (based on David Sacks's cadence concept). The goal is to create company-wide alignment while respecting the unique nature of early-stage GTM work.

## Core Principles

1. **Unified cadence across company** - Engineering and GTM run on the same monthly/weekly rhythm
2. **Outcome-focused** - Goals are about company results, not just activities
3. **Learning-oriented** - Especially critical at early stage; some experiments should fail
4. **Flexible within structure** - Weekly check-ins allow rapid pivots based on customer feedback
5. **Show, don't tell** - Demos of real customer conversations and learnings, not just status updates

## Framework Structure

### Monthly Cadence (Linear Initiatives)

**Purpose**: Set strategic direction and measurable outcomes for the month

**Components**:
- **1 Primary Outcome Goal** - Tangible result (e.g., "Get 5 paying customers", "Validate enterprise channel")
- **2-3 Learning Goals** - Hypotheses to test (e.g., "Validate that CEOs will take our calls", "Test LinkedIn vs. email outreach")
- **Success Metrics** - Clear definitions of done and measurement criteria

**Review Criteria**:
- Did we hit the outcome goal?
- What did we learn?
- What changes for next month?

### Weekly Sprints (Linear Projects)

**Purpose**: Break down monthly goals into executable weekly tactics with regular check-ins

**Structure**:
- 3-5 tactical issues per week (all marked `Executable`)
- Mix of "doing" tasks (send 20 emails) and "learning" tasks (synthesize customer feedback)
- Friday demo: Show actual customer conversations, data, learnings (not just task completion)

**Check-in Format** (30 mins, lighter than engineering):
- What shipped this week?
- Key customer learnings
- Blockers or needed pivots
- Next week's priorities

### Weekly Task Requirements

All GTM tasks should have:
- **Clear action** - Specific, executable step
- **Clear done state** - Unambiguous completion criteria
- **Executable label** - Follows LOPS team Executable guidelines
- **Success metrics** - How we'll measure if it worked

## Key Differences from Engineering

| Aspect | Engineering | GTM (Early Stage) |
|--------|-------------|-------------------|
| **Predictability** | High - can estimate feature work | Low - customer feedback changes plans |
| **Success Criteria** | Clear - tests pass, feature works | Fuzzy - "good enough" customer conversation |
| **Pacing** | Consistent velocity preferred | Variable - sprint then reflect cycles |
| **Mid-sprint changes** | Costly, avoided | Expected, embraced |
| **Failure meaning** | Something went wrong | Experiment didn't work (expected) |

### GTM-Specific Adaptations

1. **Pivot Flag** - If customer feedback invalidates the goal, call it mid-sprint and adjust. This is success, not failure.

2. **Learning Weeks** - Some weeks focus on synthesis/reflection, not just execution volume

3. **Clear Definitions Upfront** - Define "qualified lead", "good customer conversation", etc. to reduce ambiguity

4. **Celebrate Pivots** - Learning that changes strategy is a win

## Linear Structure

```
📊 Initiative: "January GTM - Get first 5 customers"
  │
  ├── 📁 Week 1 Project: "ICP validation"
  │   ├── LOP-X: Send 20 outreach emails to target ICP [Executable]
  │   ├── LOP-Y: Have 5 customer discovery calls [Executable]
  │   └── LOP-Z: Document patterns from calls [Executable]
  │
  ├── 📁 Week 2 Project: "Channel testing"
  │   ├── LOP-X: Test LinkedIn outreach (20 connects)
  │   ├── LOP-Y: Test email outreach (50 sends)
  │   └── LOP-Z: Compare conversion rates
  │
  ├── 📁 Week 3 Project: "Double down on winner"
  │   └── ...
  │
  └── 📁 Week 4: Demo & Monthly Review
      └── Prepare retrospective and next month's initiative
```

## Red Flags (When to Adjust Process)

Watch for these signals that the cadence is too rigid:

- ❌ **Fake work** - Shipping tasks just to hit numbers (e.g., emailing bad leads)
- ❌ **Ignoring feedback** - "That's good feedback but not in this sprint"
- ❌ **Treating experiments as failures** - Every missed goal feels like a problem
- ❌ **Optimizing for predictability over learning** - Process becomes more important than outcomes
- ❌ **Busywork proliferation** - Creating process for the sake of process

If you see these, simplify the process immediately.

## Success Criteria for This Framework

After the first month, we'll evaluate:

✅ **Did the cadence help or create busywork?**
- Are we making better decisions because of the structure?
- Or are we filling out templates for no reason?

✅ **Did weekly check-ins catch problems early?**
- Did we pivot faster because of weekly reviews?
- Did we avoid wasting time on wrong approaches?

✅ **Did monthly goals give enough direction?**
- Was the goal clear enough to guide daily decisions?
- Was it flexible enough to adapt to learnings?

✅ **Did demos create accountability and learning?**
- Are we sharing real insights from customers?
- Is the team aligned on what's working?

## Implementation Notes

### Phase 1: Founder-Led (Month 1)
- Keep it lightweight - don't add process for 1 person doing GTM
- Use for personal discipline and learning
- Test if the framework feels helpful

### Phase 2: Multi-Person GTM (When applicable)
- Adopt full process when 2+ people working on GTM
- Weekly syncs become critical for alignment
- Demos help share customer learnings across team

## Templates & Resources

### Monthly Initiative Template
```markdown
## Outcome Goal
[1 primary measurable outcome]

## Learning Goals
- [ ] [Hypothesis 1 to test]
- [ ] [Hypothesis 2 to test]
- [ ] [Hypothesis 3 to test]

## Success Metrics
- Primary: [How we measure outcome goal]
- Secondary: [Leading indicators]

## Context
[Why this goal? What customer insight led here?]
```

### Weekly Sprint Demo Template
```markdown
## What We Shipped
- [Completed tasks]

## Key Customer Learnings
- [Insight 1 from conversations]
- [Insight 2 from data]

## Metrics
- [Primary metric movement]
- [Leading indicators]

## Pivots or Adjustments
- [What we're changing based on learnings]

## Next Week Focus
- [Top 3 priorities]
```

## Related Documents

- [CLAUDE.md](../CLAUDE.md) - Overall repository structure and LOPS team configuration
- Engineering Cadence Documentation - [To be added when documented]

## Changelog

- **2025-01-04**: Initial version - adapted from engineering cadence for GTM use
- Trial period: January 2025
- Next review: End of January 2025

---

**Remember**: This is a living document. If the process isn't serving us, we change it. The goal is better outcomes, not perfect process adherence.
