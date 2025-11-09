# Project Templates

Copy-paste templates for creating well-structured Linear projects.

## Standard Project Template

```markdown
## Overview
[High-level description of what this project aims to achieve]

## Objectives
1. [Specific, measurable objective 1]
2. [Specific, measurable objective 2]
3. [Specific, measurable objective 3]

## Success Metrics
- **Metric 1**: [Target value] - [How measured]
- **Metric 2**: [Target value] - [How measured]
- **Metric 3**: [Target value] - [How measured]

## Timeline
- **Start Date**: [YYYY-MM-DD]
- **Target Date**: [YYYY-MM-DD]
- **Milestones**:
  - [Date]: [Milestone 1]
  - [Date]: [Milestone 2]
  - [Date]: [Milestone 3]

## Scope
### In Scope
- [Item 1]
- [Item 2]
- [Item 3]

### Out of Scope
- [Item 1]
- [Item 2]

## Team
- **Project Lead**: @person
- **Contributors**: @person1, @person2, @person3
- **Stakeholders**: @person4, @person5

## Dependencies
- **Requires**: [Other projects/work that must complete first]
- **Blocks**: [What this project is blocking]

## Risks & Mitigation
- **Risk 1**: [Description]
  - *Mitigation*: [Plan]
- **Risk 2**: [Description]
  - *Mitigation*: [Plan]

## Resources
- [Design docs](link)
- [Technical specs](link)
- [Research/data](link)

## Status Updates
*[Update this section weekly with progress, blockers, changes]*

### [Date] - Week 1
- **Progress**: [What was accomplished]
- **Blockers**: [Any issues]
- **Next Week**: [What's planned]
```

**Usage**:
```python
create_project(
    name="Q1 Mobile App Redesign",
    team="mobile-team-id",
    summary="Modernize mobile app UX to improve engagement",
    description="""[Paste template above with details filled in]""",
    lead="project-lead-user-id",
    startDate="2025-01-01",
    targetDate="2025-03-31",
    state="planned",
    labels=["q1-2025", "mobile", "redesign"],
    priority=2  # High
)
```

---

## Quarterly OKR Project

```markdown
## Objective
[High-level goal for the quarter]

## Key Results
1. **KR1**: [Specific, measurable outcome]
   - *Baseline*: [Current state]
   - *Target*: [Desired state]
   - *Measurement*: [How tracked]

2. **KR2**: [Specific, measurable outcome]
   - *Baseline*: [Current state]
   - *Target*: [Desired state]
   - *Measurement*: [How tracked]

3. **KR3**: [Specific, measurable outcome]
   - *Baseline*: [Current state]
   - *Target*: [Desired state]
   - *Measurement*: [How tracked]

## Initiatives
### Initiative 1: [Name]
- **Owner**: @person
- **Timeline**: [Dates]
- **Issues**: #TEAM-XXX, #TEAM-YYY

### Initiative 2: [Name]
- **Owner**: @person
- **Timeline**: [Dates]
- **Issues**: #TEAM-AAA, #TEAM-BBB

## Weekly Check-ins
*[Update weekly with KR progress]*

### Week of [Date]
- KR1: [X%] → [Current status]
- KR2: [X%] → [Current status]
- KR3: [X%] → [Current status]
- *Notes*: [Any important updates]

## Quarter Timeline
- **Week 1-2**: [Phase]
- **Week 3-6**: [Phase]
- **Week 7-10**: [Phase]
- **Week 11-12**: [Phase]
```

**Usage**:
```python
create_project(
    name="Q1 2025: Increase User Engagement",
    team="product-team-id",
    summary="30% increase in DAU and 20% improvement in retention",
    description="""[Paste OKR template above]""",
    lead="okr-owner-id",
    startDate="2025-01-01",
    targetDate="2025-03-31",
    state="started",
    labels=["okr", "q1-2025"],
    priority=1  # Urgent
)
```

---

## Product Launch Project

```markdown
## Launch Overview
[What we're launching and why it matters]

## Launch Date
**Target**: [YYYY-MM-DD]

## Launch Goals
- [Goal 1]
- [Goal 2]
- [Goal 3]

## Success Metrics
- **Day 1**: [Metric targets]
- **Week 1**: [Metric targets]
- **Month 1**: [Metric targets]

## Launch Phases

### Phase 1: Planning (Weeks 1-2)
- [ ] Define requirements
- [ ] Create project plan
- [ ] Assign owners
- [ ] Set timeline

### Phase 2: Design (Weeks 3-4)
- [ ] Design mockups
- [ ] User testing
- [ ] Design approval
- [ ] Design handoff

### Phase 3: Development (Weeks 5-8)
- [ ] Frontend implementation
- [ ] Backend implementation
- [ ] Integration
- [ ] Code review

### Phase 4: QA (Week 9)
- [ ] Test plan execution
- [ ] Bug fixes
- [ ] Regression testing
- [ ] Performance testing

### Phase 5: Launch Prep (Week 10)
- [ ] Staging deployment
- [ ] Final QA
- [ ] Marketing materials
- [ ] Documentation complete
- [ ] Support team training

### Phase 6: Launch (Week 11)
- [ ] Production deployment
- [ ] Monitoring setup
- [ ] Announcement
- [ ] Customer communication

### Phase 7: Post-Launch (Week 12)
- [ ] Monitor metrics
- [ ] Gather feedback
- [ ] Address issues
- [ ] Retrospective

## Launch Checklist
- [ ] Feature complete
- [ ] Tests passing
- [ ] Documentation updated
- [ ] Marketing ready
- [ ] Support trained
- [ ] Monitoring configured
- [ ] Rollback plan ready
- [ ] Go/no-go decision

## Team
- **Product**: @person
- **Engineering**: @person
- **Design**: @person
- **Marketing**: @person
- **Support**: @person

## Resources
- [PRD](link)
- [Design files](link)
- [Technical spec](link)
- [Marketing plan](link)
```

**Usage**:
```python
create_project(
    name="Feature X Launch",
    team="product-team-id",
    summary="Launch new Feature X to improve user workflow",
    description="""[Paste launch template above]""",
    lead="product-manager-id",
    startDate="2025-02-01",
    targetDate="2025-04-30",
    state="planned",
    labels=["launch", "feature-x"]
)
```

---

## Migration/Infrastructure Project

```markdown
## Migration Overview
[What we're migrating from/to and why]

## Business Justification
- [Cost savings]
- [Performance improvement]
- [Scalability]
- [Other benefits]

## Current State
[Describe current infrastructure/system]

## Target State
[Describe desired infrastructure/system]

## Migration Strategy
[Big bang vs phased approach, rollback plan]

## Phases

### Phase 1: Planning & Design
- [ ] Architecture design
- [ ] Cost analysis
- [ ] Risk assessment
- [ ] Timeline planning

### Phase 2: Proof of Concept
- [ ] POC implementation
- [ ] Performance testing
- [ ] Validation
- [ ] Go/no-go decision

### Phase 3: Preparation
- [ ] Infrastructure setup
- [ ] Tooling setup
- [ ] Data migration scripts
- [ ] Testing environment

### Phase 4: Migration
- [ ] Data migration
- [ ] Service cutover
- [ ] Verification
- [ ] Cleanup

### Phase 5: Validation
- [ ] Monitoring
- [ ] Performance validation
- [ ] User acceptance
- [ ] Documentation

## Rollback Plan
[How to revert if something goes wrong]

## Testing Strategy
- [ ] Unit tests
- [ ] Integration tests
- [ ] Load tests
- [ ] Disaster recovery tests

## Communication Plan
- **Internal**: [How/when to communicate to team]
- **External**: [How/when to communicate to users]

## Risks
- **Risk 1**: [Description] - Mitigation: [Plan]
- **Risk 2**: [Description] - Mitigation: [Plan]

## Dependencies
- [Dependency 1]
- [Dependency 2]

## Success Criteria
- [ ] Zero data loss
- [ ] < [X]% performance degradation
- [ ] < [X] minutes downtime
- [ ] All services operational
```

**Usage**:
```python
create_project(
    name="Database Migration to PostgreSQL",
    team="platform-team-id",
    summary="Migrate from MySQL to PostgreSQL for better performance",
    description="""[Paste migration template above]""",
    lead="tech-lead-id",
    startDate="2025-03-01",
    targetDate="2025-05-31",
    state="planned",
    labels=["infrastructure", "migration"]
)
```

---

## Research/Spike Project

```markdown
## Research Question
[What are we trying to learn or decide?]

## Context
[Why is this research needed now?]

## Research Goals
1. [Goal 1]
2. [Goal 2]
3. [Goal 3]

## Approach
### Options to Evaluate
1. **Option 1**: [Name]
   - Pros: [List]
   - Cons: [List]

2. **Option 2**: [Name]
   - Pros: [List]
   - Cons: [List]

3. **Option 3**: [Name]
   - Pros: [List]
   - Cons: [List]

### Evaluation Criteria
- [Criterion 1]: [Weight]
- [Criterion 2]: [Weight]
- [Criterion 3]: [Weight]

### Research Activities
- [ ] Literature review
- [ ] Competitor analysis
- [ ] POC/prototype
- [ ] Expert consultation
- [ ] Performance testing
- [ ] Cost analysis

## Timeline
- **Week 1**: [Activities]
- **Week 2**: [Activities]
- **Week 3**: [Activities]
- **Week 4**: [Synthesis & recommendation]

## Deliverables
- [ ] Written report with findings
- [ ] Recommendation with justification
- [ ] Presentation to stakeholders
- [ ] Follow-up tasks identified

## Success Criteria
[How will we know this research is complete and useful?]

## Resources
- [Relevant articles/papers](links)
- [Tools to evaluate](links)
- [Experts to consult](people)
```

**Usage**:
```python
create_project(
    name="Research: Authentication Provider Selection",
    team="engineering-team-id",
    summary="Evaluate and select authentication provider for new platform",
    description="""[Paste research template above]""",
    lead="tech-lead-id",
    startDate="2025-02-01",
    targetDate="2025-02-28",
    state="started",
    labels=["research", "spike"]
)
```

---

## Cross-Team Initiative

```markdown
## Initiative Overview
[High-level description of this cross-team effort]

## Participating Teams
### Team 1: [Name]
- **Lead**: @person
- **Scope**: [What they're responsible for]
- **Issues**: #TEAM-XXX, #TEAM-YYY

### Team 2: [Name]
- **Lead**: @person
- **Scope**: [What they're responsible for]
- **Issues**: #TEAM-AAA, #TEAM-BBB

### Team 3: [Name]
- **Lead**: @person
- **Scope**: [What they're responsible for]
- **Issues**: #TEAM-CCC, #TEAM-DDD

## Objectives
1. [Objective 1]
2. [Objective 2]
3. [Objective 3]

## Coordination

### Meetings
- **Sync**: [Frequency and day]
- **Standups**: [If needed]
- **Reviews**: [Milestones]

### Communication
- **Channel**: [Slack/Teams channel]
- **Updates**: [How often]
- **Escalations**: [Process]

### Dependencies
[Map dependencies between teams]
```mermaid
Team1 → Team2
Team2 → Team3
```

## Timeline
- **Phase 1** ([Dates]): [Team responsibilities]
- **Phase 2** ([Dates]): [Team responsibilities]
- **Phase 3** ([Dates]): [Team responsibilities]

## Integration Points
- [Integration point 1]: [Date] - [Teams involved]
- [Integration point 2]: [Date] - [Teams involved]

## Risks
- **Risk 1**: [Description] - Mitigation: [Plan] - Owner: [Team]
- **Risk 2**: [Description] - Mitigation: [Plan] - Owner: [Team]

## Success Criteria
[Shared metrics across all teams]
```

**Usage**:
```python
create_project(
    name="Platform v2 Migration",
    team="platform-team-id",  # Primary team
    summary="Coordinate platform migration across all engineering teams",
    description="""[Paste cross-team template above]""",
    lead="program-manager-id",
    startDate="2025-04-01",
    targetDate="2025-09-30",
    state="planned",
    labels=["cross-team", "platform", "migration"]
)
```

---

## Maintenance/Tech Debt Project

```markdown
## Maintenance Goal
[What we're improving and why]

## Current Problems
- [Problem 1]
- [Problem 2]
- [Problem 3]

## Desired Outcome
[What good looks like after this project]

## Benefits
- **Performance**: [Expected improvement]
- **Maintainability**: [How it helps development]
- **Reliability**: [Stability improvements]
- **Developer Experience**: [Productivity gains]

## Work Items
### Code Refactoring
- [ ] [Component/module 1]
- [ ] [Component/module 2]
- [ ] [Component/module 3]

### Test Coverage
- [ ] Increase coverage to [X]%
- [ ] Add integration tests
- [ ] Add E2E tests

### Documentation
- [ ] Update architecture docs
- [ ] Add code comments
- [ ] Create runbooks

### Tooling
- [ ] Improve build process
- [ ] Better error messages
- [ ] Enhanced logging

## Non-Functional Requirements
- No breaking changes
- Maintain backward compatibility
- Zero downtime deployment

## Timeline
[Spread over cycles/sprints]

## Success Metrics
- [ ] Code coverage: [Current]% → [Target]%
- [ ] Build time: [Current] → [Target]
- [ ] Technical debt score: [Current] → [Target]
- [ ] Developer satisfaction: [Current] → [Target]
```

**Usage**:
```python
create_project(
    name="Q1 Technical Debt Reduction",
    team="engineering-team-id",
    summary="Improve code quality, test coverage, and developer experience",
    description="""[Paste maintenance template above]""",
    lead="tech-lead-id",
    startDate="2025-01-01",
    targetDate="2025-03-31",
    state="started",
    labels=["tech-debt", "maintenance", "q1-2025"],
    priority=3  # Medium
)
```

---

## Template Selection Guide

| Project Type | Use When | Duration | Team Size |
|-------------|----------|----------|-----------|
| **Standard** | General project | 1-3 months | Any |
| **OKR** | Quarterly goals | 3 months | Multiple teams |
| **Launch** | Product/feature release | 2-4 months | Multiple teams |
| **Migration** | Infrastructure change | 1-6 months | Platform team |
| **Research** | Evaluation/spike | 2-4 weeks | Small team |
| **Cross-Team** | Multi-team initiative | 3-12 months | Multiple teams |
| **Maintenance** | Tech debt/refactoring | Ongoing | Engineering team |

---

## Project Best Practices

### Naming Conventions
```
✅ Good:
- "Q1 2025: Mobile App Redesign"
- "Feature X Launch - April 2025"
- "Database Migration (MySQL → PostgreSQL)"

❌ Avoid:
- "New Project"
- "Updates"
- "Phase 2" (without context)
```

### Summary vs Description
- **Summary** (1-2 sentences): For project cards/lists
- **Description** (detailed): Full context and plan

### Keep Updated
Update project description weekly with:
- Progress summary
- Blockers/risks
- Timeline changes
- Scope changes

### Use Labels Consistently
```
Temporal: q1-2025, q2-2025
Type: feature, infrastructure, research
Priority: strategic, tactical
Status: at-risk, on-track
```

### Assign Clear Ownership
- Project lead: Overall coordinator
- Team leads: Sub-team ownership
- Stakeholders: Decision makers

### Link Issues Properly
- Link all related issues to project
- Use parent-child for breakdown
- Keep issue count manageable (<50)

---

*Use these templates to create well-structured, easy-to-manage Linear projects.*
