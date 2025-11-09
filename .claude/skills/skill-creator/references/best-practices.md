# Skill Best Practices - Comprehensive Guide

This document provides detailed best practices for creating high-quality Claude Code skills.

## Core Principles

### 1. Conciseness Matters

The context window is shared across system prompts, conversation history, and other skills. Challenge every piece of information with: "Does Claude really need this explanation?"

**Why it matters**: Context tokens are precious. Only SKILL.md metadata loads initially; additional files load on-demand. Keep the always-loaded content minimal.

**How to apply**:
- Cut unnecessary explanations that Claude already knows
- Move detailed content to reference files
- Use progressive disclosure aggressively
- Prefer showing over telling where possible

### 2. Progressive Disclosure Architecture

Structure content in tiers based on usage frequency:

**Tier 1 - Always Loaded** (~100 words):
- Skill name and description in YAML frontmatter
- This is in every Claude session, so make it count

**Tier 2 - Loaded on Invocation** (<5k words):
- SKILL.md body content
- Keep under 500 lines
- Include only essential workflows and patterns

**Tier 3 - Loaded on Demand** (unlimited):
- Reference files with detailed documentation
- Scripts executed externally
- Asset files and templates
- Only loaded when explicitly needed

**Implementation pattern**:
```markdown
## Brief Overview
Quick summary here (1-2 sentences).

## Detailed Information
For comprehensive details, see [[references/deep-dive.md]].
```

### 3. Match Specificity to Task Fragility

Different tasks require different levels of freedom:

**High Freedom - Text Instructions**:
- Use for: Creative tasks, flexible problem-solving, adaptation needed
- Example: "Analyze the user's requirements and suggest an architecture"
- Benefit: Claude can adapt to context and use judgment

**Medium Freedom - Pseudocode/Patterns**:
- Use for: Preferred approaches with room for adaptation
- Example: Workflow patterns, structured decision trees
- Benefit: Guidance without rigidity

**Low Freedom - Exact Scripts**:
- Use for: Error-prone operations, format-critical tasks, consistency requirements
- Example: File manipulation, API calls with strict formats, validation checks
- Benefit: Deterministic, reliable, saves tokens

### 4. Test Across Model Sizes

What works for Claude Opus may need more detail for Haiku:

- **Opus**: Can infer more, handle ambiguity better
- **Sonnet**: Balanced performance
- **Haiku**: May need more explicit guidance

**Testing strategy**:
1. Write skill targeting Sonnet (middle ground)
2. Test with Haiku - add clarity where needed
3. Test with Opus - ensure no over-specification

## Skill Structure Guidelines

### YAML Frontmatter Requirements

```yaml
---
name: doing-something
description: What it does and when to use it. Be specific about trigger conditions. Keep under 1024 characters.
---
```

**Name field**:
- Maximum 64 characters
- Lowercase letters, numbers, hyphens only
- Use gerund form: `processing-pdfs`, `analyzing-data`, `creating-reports`
- Be descriptive but concise

**Description field**:
- Under 1024 characters (hard limit)
- First sentence: What the skill does
- Second part: When to use it (trigger conditions)
- Be specific - this helps Claude decide whether to invoke the skill

**Example good description**:
```
Processes and analyzes PDF documents using advanced OCR and text extraction. Use when user needs to extract data from PDFs, convert PDFs to other formats, or analyze PDF content structure.
```

### SKILL.md Content Structure

Recommended sections (adapt as needed):

```markdown
# Skill Name

One-sentence overview.

## When to Use This Skill

Clear trigger conditions in bullet form.

## Workflows

Step-by-step procedures with checklists.

## Key Concepts

Essential patterns and principles (brief).

## References

Links to detailed reference files.
```

**Keep SKILL.md under 500 lines**. Move these to reference files:
- Detailed explanations and theory
- Extensive examples
- Background information
- API documentation
- Technical specifications

## Workflow Design Patterns

### The Plan-Validate-Execute Pattern

Most robust pattern for making changes:

```markdown
1. **Plan**: Analyze and create detailed plan
2. **Validate**: Show plan to user, get approval
3. **Execute**: Implement approved changes
4. **Verify**: Check results, report completion
```

**Benefits**:
- Prevents unwanted changes
- Gives user control
- Catches misunderstandings early
- Builds trust

### The Search-Analyze-Act Pattern

For information gathering tasks:

```markdown
1. **Search**: Gather relevant information
2. **Analyze**: Process and synthesize findings
3. **Act**: Take action or present recommendations
```

### The Iterative Refinement Pattern

For creative or exploratory tasks:

```markdown
1. **Draft**: Create initial version
2. **Review**: Evaluate against requirements
3. **Refine**: Improve based on review
4. **Repeat**: Until quality threshold met
```

## Template Usage

### Strict Templates

Use for format-critical outputs where deviation causes problems:

```markdown
## Report Format

Use this exact structure:

---
Title: [Title]
Date: [YYYY-MM-DD]
Author: [Name]

Summary:
[One paragraph]

Findings:
1. [Finding]
2. [Finding]

Recommendations:
- [Recommendation]
---

Do not deviate from this format.
```

### Flexible Templates

Use where adaptation improves results:

```markdown
## Report Guidelines

Include these elements (adapt as needed):
- Clear title and metadata
- Executive summary (1-2 paragraphs)
- Detailed findings with evidence
- Actionable recommendations
- Supporting data or appendices

Adjust structure to best serve the content and audience.
```

## Script Integration Best Practices

### When to Use Scripts

Provide pre-made scripts for:
- Deterministic operations that must be consistent
- Complex operations prone to errors if generated
- Operations that save significant context tokens
- Repeated operations that need reliability

### When to Use Generated Code

Generate code for:
- One-off tasks with unique requirements
- Tasks where adaptation is beneficial
- Simple operations where a script would be overkill
- Tasks that benefit from context-aware customization

### Script Documentation Pattern

```markdown
## Running the Analysis

Execute the provided script:

```bash
./scripts/analyze.sh input.txt --format json
```

**Arguments**:
- `input.txt`: Path to input file
- `--format`: Output format (json, csv, xml)

**Output**: Results written to `output.json` in current directory.

**Error handling**: Script validates input and exits with code 1 if invalid.

After execution, review output file and proceed with [next step].
```

## Advanced Patterns

### Conditional Loading

Load references based on conditions:

```markdown
## Implementation

For standard implementation, proceed with steps below.

For advanced patterns (caching, optimization, error recovery), see [[references/advanced-patterns.md]].

For troubleshooting, see [[references/troubleshooting.md]].
```

### Nested Workflows

Complex skills may have sub-workflows:

```markdown
## Main Workflow

1. Prepare data (see [[references/data-preparation.md]])
2. Run analysis
3. Generate report (see [[references/report-generation.md]])
4. Validate output
```

Keep references one level deep - avoid deeply nested references.

### Error Handling in Scripts

Scripts should handle errors explicitly rather than relying on Claude to interpret errors:

```python
#!/usr/bin/env python3
import sys

def main():
    try:
        # Operation
        result = perform_operation()
        print(f"Success: {result}")
        sys.exit(0)
    except ValueError as e:
        print(f"Error: Invalid input - {e}", file=sys.stderr)
        print("Fix: Ensure input is in correct format", file=sys.stderr)
        sys.exit(1)
    except FileNotFoundError as e:
        print(f"Error: File not found - {e}", file=sys.stderr)
        print("Fix: Check file path and permissions", file=sys.stderr)
        sys.exit(2)
```

## Testing and Validation

### Create Test Scenarios First

Before extensive documentation:
1. Write 2-3 concrete test scenarios
2. Document expected inputs and outputs
3. Verify skill solves these real problems
4. Then document the general patterns

This prevents building for anticipated problems that may not exist.

### Test Scenario Template

```markdown
### Test Scenario 1: [Scenario Name]

**Input**: [Describe input]
**Expected Behavior**: [What should happen]
**Expected Output**: [What should be produced]
**Success Criteria**: [How to verify success]

**Steps**:
1. [Test step]
2. [Test step]
3. [Verify step]
```

### Evaluation Checklist

- [ ] Skill solves real test scenarios
- [ ] Workflows are clear and actionable
- [ ] Validation steps prevent errors
- [ ] References load only when needed
- [ ] Scripts work reliably
- [ ] Templates are appropriate (strict vs. flexible)
- [ ] Error messages are helpful
- [ ] Success criteria are clear

## Common Anti-Patterns

### Anti-Pattern: Documentation Dump

❌ **Don't** include extensive documentation directly in SKILL.md:

```markdown
# Data Processing Skill

## Complete Guide to Data Processing

Data processing involves... [5000 words of explanation]
```

✅ **Do** keep SKILL.md focused and reference detailed docs:

```markdown
# Data Processing Skill

Process and analyze data using proven patterns.

## Quick Start
[Brief workflow]

## Detailed Guide
See [[references/data-processing-guide.md]] for comprehensive documentation.
```

### Anti-Pattern: Vague Instructions

❌ **Don't** use passive voice or unclear language:

```markdown
## Process

The data should be analyzed and insights should be derived.
Some transformations might be needed.
```

✅ **Do** use imperative, specific instructions:

```markdown
## Process

1. Load data from specified source
2. Apply transformations: [list specific transformations]
3. Analyze using [specific method]
4. Extract insights: [what to look for]
```

### Anti-Pattern: Overly Rigid Workflows

❌ **Don't** lock Claude into inflexible approaches:

```markdown
## Process

You must do exactly these steps in this order with no variation:
1. Step A (no alternatives allowed)
2. Step B (do not adapt)
```

✅ **Do** provide structure with appropriate flexibility:

```markdown
## Process

1. **Prepare data**: Validate and clean input
   - For CSV: Check headers and data types
   - For JSON: Validate schema
2. **Analyze**: Apply appropriate analysis for data type
3. **Report**: Format results for intended audience
```

### Anti-Pattern: Missing Validation

❌ **Don't** make changes without validation:

```markdown
## Process

1. Analyze requirements
2. Make changes to codebase
3. Done
```

✅ **Do** include validation gates:

```markdown
## Process

1. Analyze requirements
2. Create detailed change plan
3. **Show plan to user for approval**
4. After approval, implement changes
5. Verify changes work as expected
6. Report completion
```

## Optimization Tips

### Context Token Optimization

1. **Eliminate redundancy**: Don't repeat information Claude already knows
2. **Use references liberally**: Move details out of SKILL.md
3. **Prefer scripts for repetitive tasks**: One script saves tokens across all uses
4. **Keep templates concise**: Show structure, not extensive examples

### Maintenance and Updates

1. **Version your skills**: Track changes and improvements
2. **Gather usage data**: Note where users get confused
3. **Iterate based on real usage**: Not anticipated problems
4. **Keep documentation synchronized**: Update references when patterns change

### Naming Conventions

**Files**:
- Use kebab-case: `best-practices.md`, `data-processing.py`
- Be descriptive: `email-validation.sh` not `validate.sh`
- Group by function: All references in `references/`, all scripts in `scripts/`

**Variables and configuration**:
- Document all parameters explicitly
- Justify why each parameter exists
- Provide sensible defaults
- Make configuration discoverable

## Summary Checklist

Before publishing a skill:

- [ ] Name follows conventions (gerund form, 64 chars max)
- [ ] Description explains what and when (under 1024 chars)
- [ ] SKILL.md under 500 lines
- [ ] Detailed content in reference files
- [ ] Workflows include validation steps
- [ ] Specificity matches task fragility
- [ ] Templates are appropriately strict/flexible
- [ ] Scripts handle errors explicitly
- [ ] Tested with concrete scenarios
- [ ] Progressive disclosure verified
- [ ] Works across target model sizes
- [ ] Anti-patterns avoided

---

Following these best practices will create skills that are concise, actionable, and optimized for Claude's context window while providing excellent user experience.
