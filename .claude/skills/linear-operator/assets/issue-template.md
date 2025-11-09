# Issue Templates

Copy-paste templates for creating well-structured Linear issues.

## Bug Report

```markdown
## Description
[Brief description of the bug]

## Steps to Reproduce
1. Go to [location]
2. Click on [element]
3. Enter [data]
4. Observe [result]

## Expected Behavior
[What should happen]

## Actual Behavior
[What actually happens]

## Environment
- Browser/App: [e.g., Chrome 120, iOS 17]
- OS: [e.g., macOS 14.2, Windows 11]
- Version: [e.g., v2.1.0]
- Other: [Any other relevant details]

## Screenshots/Logs
[Attach relevant media or paste logs]

## Additional Context
[Any other information that might be helpful]

## Possible Solution
[Optional: Suggest a fix if you have one]
```

**Usage**:
```python
create_issue(
    title="Login fails with special characters in email",
    team="engineering",
    description="""[Paste bug template above]""",
    labels=["bug"],
    priority=2  # High
)
```

---

## Feature Request

```markdown
## Problem Statement
[What problem does this solve? What pain point does it address?]

## User Story
As a [type of user],
I want [goal/desire],
so that [benefit/value].

## Proposed Solution
[Describe how this should work]

## Acceptance Criteria
- [ ] Criterion 1: Specific, measurable outcome
- [ ] Criterion 2: Specific, measurable outcome
- [ ] Criterion 3: Specific, measurable outcome

## Design/Mockups
[Link to designs or attach mockups]

## Technical Considerations
- [Technical constraint or consideration 1]
- [Technical constraint or consideration 2]

## Alternatives Considered
[Other solutions you considered and why this is preferred]

## Related Issues
- Blocked by: #TEAM-XXX
- Related to: #TEAM-YYY
```

**Usage**:
```python
create_issue(
    title="Add dark mode support",
    team="design",
    description="""[Paste feature template above]""",
    labels=["feature", "enhancement"],
    project="q1-launch-project-id"
)
```

---

## Task

```markdown
## What Needs to Be Done
[Clear, actionable description of the task]

## Context
[Why is this needed? What's the background?]

## Done When
- [ ] Specific completion criterion 1
- [ ] Specific completion criterion 2
- [ ] Specific completion criterion 3

## Resources
- [Link to relevant docs]
- [Link to related code]
- [Link to design/spec]

## Dependencies
- Requires: #TEAM-XXX to be completed first
- Blocks: #TEAM-YYY from starting

## Notes
[Any additional information]
```

**Usage**:
```python
create_issue(
    title="Update API documentation",
    team="engineering",
    description="""[Paste task template above]""",
    assignee="me",
    labels=["documentation"],
    cycle="current-cycle-id"
)
```

---

## Technical Debt

```markdown
## Issue
[What is the technical debt?]

## Impact
- **Performance**: [Impact on performance]
- **Maintainability**: [Impact on code maintenance]
- **Developer Experience**: [Impact on dev productivity]
- **Risk**: [What could go wrong if not addressed]

## Current Implementation
[Describe current state]

```javascript
// Current code
function problematicFunction() {
    // ...
}
```

## Proposed Refactor
[Describe desired state]

```javascript
// Improved code
function betterFunction() {
    // ...
}
```

## Effort Estimate
[Time/complexity estimate]

## Priority Justification
[Why should this be prioritized now vs later?]

## Breaking Changes
[Will this require migration? Breaking changes?]
```

**Usage**:
```python
create_issue(
    title="Refactor authentication module",
    team="engineering",
    description="""[Paste technical debt template above]""",
    labels=["tech-debt", "refactor"],
    priority=3  # Medium
)
```

---

## Documentation

```markdown
## What Needs Documentation
[What feature/API/process needs docs?]

## Target Audience
- [ ] End users
- [ ] Developers
- [ ] Internal team
- [ ] External partners

## Scope
- [ ] User guide
- [ ] API reference
- [ ] Tutorial/walkthrough
- [ ] Architecture overview
- [ ] Troubleshooting

## Required Sections
- Overview
- Getting Started
- Examples
- API Reference (if applicable)
- Troubleshooting
- FAQ

## Resources
- [Link to code/feature]
- [Link to design]
- [Link to existing docs to update]

## Done When
- [ ] Docs written
- [ ] Reviewed by [person]
- [ ] Published to [location]
- [ ] Announced to team
```

**Usage**:
```python
create_issue(
    title="Document new webhook API",
    team="engineering",
    description="""[Paste documentation template above]""",
    labels=["documentation"],
    assignee="docs-team-member-id"
)
```

---

## Research/Investigation

```markdown
## Question/Problem
[What are we trying to learn or investigate?]

## Context
[Why is this investigation needed?]

## Research Goals
- [ ] Goal 1
- [ ] Goal 2
- [ ] Goal 3

## Approach
1. [Step 1 of investigation]
2. [Step 2 of investigation]
3. [Step 3 of investigation]

## Success Criteria
[How will we know this research is complete?]

## Deliverable
- [ ] Written summary of findings
- [ ] Recommendation with pros/cons
- [ ] Follow-up tasks identified

## Timeline
[Expected completion date]

## Resources
- [Relevant articles/docs]
- [Tools/services to evaluate]
- [People to consult]
```

**Usage**:
```python
create_issue(
    title="Research authentication providers",
    team="engineering",
    description="""[Paste research template above]""",
    labels=["research", "spike"],
    assignee="me",
    dueDate="2025-02-15"
)
```

---

## Incident/Outage

```markdown
## Incident Summary
[Brief description of what happened]

## Impact
- **Severity**: [Critical/High/Medium/Low]
- **Affected Users**: [Number or percentage]
- **Services Affected**: [List services]
- **Duration**: [How long was it down?]

## Timeline
- **Detected**: [When was it first noticed?]
- **Started**: [When did the issue begin?]
- **Resolved**: [When was it fixed?]

## Root Cause
[What caused this incident?]

## Resolution
[How was it fixed?]

## Action Items
- [ ] Immediate fix applied
- [ ] Permanent fix needed: #TEAM-XXX
- [ ] Monitoring added: #TEAM-YYY
- [ ] Post-mortem scheduled
- [ ] Documentation updated

## Prevention
[How can we prevent this in the future?]
```

**Usage**:
```python
create_issue(
    title="INCIDENT: API downtime on 2025-01-15",
    team="engineering",
    description="""[Paste incident template above]""",
    labels=["incident", "postmortem"],
    priority=1  # Urgent
)
```

---

## Epic/Large Initiative

```markdown
## Vision
[High-level goal and why it matters]

## Objectives
1. [Objective 1]
2. [Objective 2]
3. [Objective 3]

## Success Metrics
- [Metric 1]: Target value
- [Metric 2]: Target value
- [Metric 3]: Target value

## Scope
### In Scope
- [Item 1]
- [Item 2]

### Out of Scope
- [Item 1]
- [Item 2]

## User Personas
- **Persona 1**: [Description and needs]
- **Persona 2**: [Description and needs]

## Timeline
- **Phase 1**: [Dates] - [Description]
- **Phase 2**: [Dates] - [Description]
- **Phase 3**: [Dates] - [Description]

## Dependencies
- [External dependency 1]
- [External dependency 2]

## Risks
- **Risk 1**: [Description] - Mitigation: [Plan]
- **Risk 2**: [Description] - Mitigation: [Plan]

## Sub-Issues
[Will be created as separate issues and linked as children]

## Resources
- [Design docs]
- [Technical specs]
- [Research/data]
```

**Usage**:
```python
# Create epic
epic = create_issue(
    title="EPIC: Complete authentication overhaul",
    team="engineering",
    description="""[Paste epic template above]""",
    labels=["epic"],
    project="q1-projects-id"
)

# Create sub-issues
create_issue(
    title="Design new auth flows",
    team="design",
    parentId=epic.id
)

create_issue(
    title="Implement SSO",
    team="engineering",
    parentId=epic.id
)
```

---

## Quick Templates

### Simple Task
```
What: [One line description]
Why: [One line reason]
Done: [One line done criteria]
```

### Simple Bug
```
Bug: [What's broken]
Repro: [How to reproduce]
Expected: [What should happen]
```

### Quick Feature
```
Feature: [What we're building]
Value: [Why it matters]
Done: [How we know it's complete]
```

---

## Template Selection Guide

**Choose Bug Report** when:
- Something is broken
- Unexpected behavior occurs
- Error messages appear

**Choose Feature Request** when:
- Adding new functionality
- Enhancing existing features
- New user capabilities

**Choose Task** when:
- General work to be done
- No bug or new feature
- Operational tasks

**Choose Technical Debt** when:
- Code needs refactoring
- Architecture improvements
- Performance optimization
- Reducing complexity

**Choose Documentation** when:
- Writing or updating docs
- Creating tutorials
- API documentation

**Choose Research** when:
- Need to investigate options
- Spike/exploration work
- Proof of concept

**Choose Incident** when:
- Production issue occurred
- Post-mortem needed
- Outage documentation

**Choose Epic** when:
- Large initiative (>1 month)
- Multiple sub-issues
- Cross-team coordination

---

## Tips for Great Issues

1. **Clear Title**: Action-oriented, specific
   - ✅ "Fix login validation for special characters"
   - ❌ "Login broken"

2. **Context First**: Start with why/what before how

3. **Acceptance Criteria**: Always include clear done state

4. **Links**: Reference designs, specs, related issues

5. **Code Snippets**: Use markdown code blocks

6. **Screenshots**: Attach visuals when helpful

7. **Labels**: Apply appropriate labels immediately

8. **Assignee**: Assign if you know who should own it

9. **Project/Cycle**: Link to projects/cycles for tracking

10. **Keep Updated**: Update description as you learn more
