---
name: skill-creator
description: Creates and improves Claude Code skills using best practices. Use when user wants to build, modify, or enhance a skill. Guides through skill architecture, progressive disclosure, workflow design, and testing patterns.
---

# Skill Creator

Create high-quality skills that extend Claude's capabilities using best practices for conciseness, progressive disclosure, and testability.

## When to Use This Skill

Invoke this skill when:
- Creating a new skill from scratch
- Improving an existing skill's structure or content
- Reviewing a skill for best practices compliance
- Troubleshooting skill performance issues
- Planning skill architecture before implementation

## Quick Start Workflow

Follow this checklist for creating a new skill:

### 1. Understand the Need
- [ ] Document 2-3 concrete usage examples of the skill in action
- [ ] Identify what Claude needs to know vs. what can be external references
- [ ] Determine if scripts, templates, or other assets are needed
- [ ] Assess task fragility (high freedom vs. low freedom needed)

### 2. Plan the Structure
- [ ] Choose skill name (gerund form: `doing-something`, max 64 chars, lowercase/hyphens)
- [ ] Write description (what it does + when to use, max 1024 chars)
- [ ] List required reference files for detailed content
- [ ] Identify reusable assets (templates, boilerplate, etc.)
- [ ] Plan any utility scripts for deterministic operations

### 3. Create Directory Structure
```bash
.claude/skills/your-skill-name/
├── SKILL.md              # Main skill file (<500 lines)
├── references/           # Detailed docs loaded on-demand
│   └── *.md
├── assets/              # Templates, examples, boilerplate
│   └── *
└── scripts/             # Executable utilities (optional)
    └── *
```

### 4. Write SKILL.md
Use this template structure:

```markdown
---
name: your-skill-name
description: What it does and when to use it (concise, <1024 chars)
---

# Skill Name

Brief overview (1-2 sentences).

## When to Use This Skill

Bullet list of trigger conditions.

## Workflows

Clear step-by-step procedures with checklists.

## Key Patterns

Important concepts, but keep detailed explanations in references/.

## References

- [[references/detailed-guide.md]] - When to load this
- [[assets/template.txt]] - What this provides
```

### 5. Apply Best Practices
- [ ] Keep SKILL.md under 500 lines (move details to references)
- [ ] Use imperative language ("Do this" not "You should do")
- [ ] Include validation steps before making changes
- [ ] Provide both flexible guidance and strict templates where appropriate
- [ ] Add clear success criteria for each workflow step

### 6. Test and Iterate
- [ ] Create test scenarios before extensive documentation
- [ ] Test with different model sizes if relevant (Opus vs. Haiku)
- [ ] Verify progressive disclosure works (references load only when needed)
- [ ] Gather real-world usage feedback

## Best Practices Quick Reference

**Conciseness**: Challenge every word. Does Claude really need this explanation?

**Progressive Disclosure**: Metadata loads always (~100 words), SKILL.md loads when invoked (<5k words), references load on-demand (unlimited).

**Match Specificity to Fragility**:
- High freedom (text instructions) → Flexible, creative tasks
- Medium freedom (pseudocode/patterns) → Preferred approaches with room for adaptation
- Low freedom (exact scripts) → Error-prone, format-critical operations

**Workflow Design**: Break complex operations into sequential steps with validation gates (plan → validate → execute).

**Templates**: Strict templates for format-critical outputs, flexible guidance for creative work.

## Common Patterns

### Plan-Validate-Execute Pattern
```markdown
1. Analyze requirements and create a plan
2. Show plan to user for validation
3. Execute after approval
4. Verify results and report completion
```

### Progressive Reference Loading
```markdown
## Overview
Brief summary here.

## Detailed Guide
For full implementation details, see [[references/implementation.md]].

## Examples
Review [[references/examples.md]] for common patterns.
```

### Script Integration
```markdown
## Running Analysis
Execute the analysis script:
```bash
./scripts/analyze.sh input.txt
```
Review output, then proceed with recommended changes.
```

## Reference Files

Load these on-demand for detailed guidance:

- [[references/best-practices.md]] - Comprehensive best practices guide
- [[references/structure-guide.md]] - Detailed structure and architecture patterns
- [[references/examples.md]] - Real-world skill examples and templates
- [[assets/skill-template.md]] - Copy-paste template for new skills

## Anti-Patterns to Avoid

❌ **Don't**: Include extensive documentation in SKILL.md
✅ **Do**: Move details to reference files

❌ **Don't**: Use passive voice or vague language
✅ **Do**: Use imperative, actionable instructions

❌ **Don't**: Create deeply nested file references
✅ **Do**: Keep all references one level deep from SKILL.md

❌ **Don't**: Generate code for deterministic operations
✅ **Do**: Provide pre-made scripts for consistency

❌ **Don't**: Build skills for anticipated problems
✅ **Do**: Create test scenarios first, solve real problems

## Skill Quality Checklist

Before finalizing a skill, verify:

- [ ] Name follows gerund form and naming conventions
- [ ] Description explains both what and when (<1024 chars)
- [ ] SKILL.md is under 500 lines
- [ ] Detailed content moved to reference files
- [ ] Workflows include validation steps
- [ ] Clear success criteria provided
- [ ] Templates provided for format-critical outputs
- [ ] Scripts used for deterministic operations
- [ ] Tested with concrete examples
- [ ] Progressive disclosure working correctly

## Getting Help

For questions about skill architecture or best practices:
1. Review [[references/best-practices.md]] for comprehensive guidance
2. Check [[references/examples.md]] for real-world patterns
3. Use [[assets/skill-template.md]] as a starting point

---

*This skill helps you create skills that are concise, actionable, and optimized for Claude's context window through progressive disclosure.*
