# Skill Structure and Architecture Guide

This guide provides detailed patterns for organizing and structuring skills effectively.

## Directory Structure

### Standard Skill Layout

```
.claude/skills/your-skill-name/
├── SKILL.md                    # Main skill file (<500 lines)
├── references/                 # Detailed documentation (loaded on-demand)
│   ├── getting-started.md
│   ├── advanced-patterns.md
│   ├── api-reference.md
│   └── troubleshooting.md
├── assets/                     # Templates, examples, boilerplate
│   ├── templates/
│   │   ├── basic-template.txt
│   │   └── advanced-template.txt
│   ├── examples/
│   │   └── example-output.json
│   └── boilerplate/
│       └── starter-code.py
└── scripts/                    # Executable utilities
    ├── setup.sh
    ├── process.py
    └── validate.sh
```

### When to Include Each Component

**references/** - Always include for:
- Detailed conceptual explanations
- API documentation
- Comprehensive guides
- Background theory
- Troubleshooting guides

**assets/** - Include when providing:
- Templates for user output
- Example files showing expected format
- Boilerplate code to copy
- Configuration file examples
- Reusable components

**scripts/** - Include when:
- Operations need deterministic reliability
- Tasks are error-prone if generated
- Same operation will be repeated often
- Complex logic that shouldn't consume context tokens

## SKILL.md Structure Patterns

### Pattern 1: Simple Workflow Skill

For straightforward, linear processes:

```markdown
---
name: skill-name
description: Brief what and when
---

# Skill Name

One-line overview.

## When to Use This Skill

- Trigger condition 1
- Trigger condition 2

## Workflow

Follow these steps:

1. [ ] Step 1 with clear action
2. [ ] Step 2 with clear action
3. [ ] Step 3 with validation
4. [ ] Step 4 with completion check

## Common Issues

Brief troubleshooting tips.

## References

- [[references/detailed-guide.md]] - Full documentation
```

**Use for**: Data processing, file operations, simple transformations

### Pattern 2: Decision-Tree Skill

For conditional processes with multiple paths:

```markdown
---
name: skill-name
description: Brief what and when
---

# Skill Name

One-line overview.

## When to Use This Skill

- Trigger condition 1
- Trigger condition 2

## Decision Flow

1. **Assess the situation**
   - If condition A: → Workflow A
   - If condition B: → Workflow B
   - If condition C: → Workflow C

### Workflow A: [Scenario A]
1. [ ] Step A1
2. [ ] Step A2

### Workflow B: [Scenario B]
1. [ ] Step B1
2. [ ] Step B2

### Workflow C: [Scenario C]
1. [ ] Step C1
2. [ ] Step C2

## References

- [[references/decision-criteria.md]] - Detailed decision guidance
```

**Use for**: Debugging, analysis, adaptive processes

### Pattern 3: Tool-Heavy Skill

For skills that primarily orchestrate tools and scripts:

```markdown
---
name: skill-name
description: Brief what and when
---

# Skill Name

One-line overview.

## When to Use This Skill

- Trigger condition 1
- Trigger condition 2

## Setup

Run setup script once:
```bash
./scripts/setup.sh
```

## Main Workflow

1. **Prepare inputs**
   ```bash
   ./scripts/prepare.sh input.txt
   ```

2. **Run processing**
   ```bash
   ./scripts/process.py --config config.json
   ```

3. **Validate results**
   ```bash
   ./scripts/validate.sh output.txt
   ```

4. **Review and finalize**
   - Check output against requirements
   - Make manual adjustments if needed

## Scripts Reference

- `setup.sh` - One-time environment setup
- `prepare.sh` - Input validation and preparation
- `process.py` - Main processing logic
- `validate.sh` - Output validation

See [[references/script-documentation.md]] for detailed script usage.

## References

- [[references/configuration.md]] - Configuration options
- [[references/troubleshooting.md]] - Common issues
```

**Use for**: Complex processing, integration with external tools, multi-step operations

### Pattern 4: Knowledge-Heavy Skill

For domain expertise that requires extensive reference material:

```markdown
---
name: skill-name
description: Brief what and when
---

# Skill Name

One-line overview.

## When to Use This Skill

- Trigger condition 1
- Trigger condition 2

## Quick Reference

Key concepts you need to know:

- **Concept 1**: Brief definition
- **Concept 2**: Brief definition
- **Concept 3**: Brief definition

## Common Workflows

### Workflow 1: [Common Task]
1. [ ] Brief step 1
2. [ ] Brief step 2

See [[references/workflow-1-guide.md]] for details.

### Workflow 2: [Common Task]
1. [ ] Brief step 1
2. [ ] Brief step 2

See [[references/workflow-2-guide.md]] for details.

## Deep Dive References

Load these for specific needs:

- [[references/fundamentals.md]] - Core concepts and theory
- [[references/advanced-techniques.md]] - Expert-level patterns
- [[references/api-reference.md]] - Complete API documentation
- [[references/examples.md]] - Real-world examples
```

**Use for**: Domain expertise, technical documentation, complex systems

## Reference File Organization

### Organizing References by Purpose

**Getting Started**:
- `getting-started.md` - Beginner-friendly introduction
- `quick-start.md` - Fast path for experienced users
- `tutorial.md` - Step-by-step learning path

**Core Documentation**:
- `fundamentals.md` - Essential concepts
- `workflows.md` - Detailed process documentation
- `patterns.md` - Common patterns and idioms

**Advanced Content**:
- `advanced-techniques.md` - Expert-level patterns
- `optimization.md` - Performance and efficiency
- `edge-cases.md` - Handling unusual situations

**Reference Material**:
- `api-reference.md` - Complete API documentation
- `configuration.md` - All configuration options
- `examples.md` - Real-world examples

**Support**:
- `troubleshooting.md` - Common problems and solutions
- `faq.md` - Frequently asked questions
- `migration.md` - Upgrading from previous versions

### Reference File Structure Template

```markdown
# [Topic Name]

Brief overview of what this document covers.

## Prerequisites

What you should know before reading this:
- Prerequisite 1
- Prerequisite 2

## [Main Section 1]

Content organized in logical sections...

### Subsection 1.1

Specific information...

### Subsection 1.2

Specific information...

## [Main Section 2]

Content...

## Examples

Concrete examples showing concepts in practice.

## Common Pitfalls

Mistakes to avoid.

## See Also

- [[other-reference.md]] - Related information
- External links if relevant
```

## Asset Organization

### Templates Directory

Organize templates by complexity or use case:

```
assets/templates/
├── basic/
│   ├── simple-template.txt
│   └── minimal-template.txt
├── standard/
│   ├── default-template.txt
│   └── standard-template.txt
└── advanced/
    ├── complex-template.txt
    └── full-featured-template.txt
```

### Examples Directory

Show expected outputs:

```
assets/examples/
├── input-examples/
│   ├── example-1-input.json
│   └── example-2-input.csv
└── output-examples/
    ├── example-1-output.json
    └── example-2-output.html
```

### Boilerplate Directory

Provide starter code:

```
assets/boilerplate/
├── basic-setup.py
├── standard-config.json
└── advanced-implementation.js
```

## Script Organization

### Script Types and Naming

**Setup Scripts** (`setup.sh`, `install.sh`):
- One-time environment preparation
- Dependency installation
- Configuration initialization

**Processing Scripts** (`process.py`, `transform.sh`):
- Main operational logic
- Data transformation
- Core functionality

**Validation Scripts** (`validate.sh`, `check.py`):
- Input validation
- Output verification
- Sanity checks

**Utility Scripts** (`utils.py`, `helpers.sh`):
- Reusable helper functions
- Common operations
- Shared functionality

### Script Documentation Pattern

Include header comments in all scripts:

```python
#!/usr/bin/env python3
"""
Script Name: process.py
Purpose: Process input data and generate formatted output
Usage: ./process.py <input_file> [--format json|csv]
Dependencies: pandas, numpy
Author: [Your Name]
"""

import sys
import argparse

def main():
    """Main entry point with clear error handling."""
    parser = argparse.ArgumentParser(description='Process input data')
    parser.add_argument('input_file', help='Path to input file')
    parser.add_argument('--format', choices=['json', 'csv'], default='json')

    try:
        args = parser.parse_args()
        # Processing logic
        result = process(args.input_file, args.format)
        print(f"Success: {result}")
        return 0
    except Exception as e:
        print(f"Error: {e}", file=sys.stderr)
        return 1

if __name__ == '__main__':
    sys.exit(main())
```

## Progressive Disclosure Patterns

### Pattern 1: Depth-Based Loading

Start shallow, go deep on demand:

```markdown
## Overview

Brief summary of the topic.

## Key Points

- Point 1 (brief)
- Point 2 (brief)
- Point 3 (brief)

## Detailed Information

For comprehensive coverage:
- [[references/detailed-guide.md]] - Full explanation of concepts
- [[references/advanced-topics.md]] - Expert-level details
```

### Pattern 2: Task-Based Loading

Load references based on specific tasks:

```markdown
## Common Tasks

### Task 1: [Task Name]
Brief workflow...

For detailed instructions, see [[references/task-1-guide.md]].

### Task 2: [Task Name]
Brief workflow...

For detailed instructions, see [[references/task-2-guide.md]].
```

### Pattern 3: Skill-Level Loading

Load content based on user expertise:

```markdown
## Getting Started

**New to this?** Start with [[references/beginners-guide.md]].

**Familiar with basics?** Jump to [[references/quick-reference.md]].

**Expert user?** See [[references/advanced-patterns.md]].
```

## Validation and Quality Checks

### Structure Validation Checklist

- [ ] SKILL.md under 500 lines
- [ ] YAML frontmatter valid (name, description)
- [ ] All reference links use correct syntax `[[path/file.md]]`
- [ ] All scripts have execute permissions
- [ ] All scripts have proper shebangs and documentation
- [ ] Assets are organized in logical subdirectories
- [ ] No deeply nested references (max 1 level from SKILL.md)

### Content Quality Checklist

- [ ] SKILL.md uses imperative language
- [ ] Workflows include validation steps
- [ ] Clear success criteria for each step
- [ ] No unnecessary explanations (challenge each sentence)
- [ ] Examples are concrete and realistic
- [ ] Templates are appropriate (strict vs. flexible)
- [ ] Scripts handle errors explicitly

### Progressive Disclosure Checklist

- [ ] Metadata is minimal (~100 words)
- [ ] SKILL.md is focused (under 5k words)
- [ ] Detailed content in reference files
- [ ] References load only when needed
- [ ] Clear guidance on when to load each reference

## Architecture Decision Guidelines

### When to Split Into Multiple Skills

Create separate skills when:
- Each has distinct trigger conditions
- They serve different user needs
- They require different contexts or tools
- Combined skill would be too large (>500 lines)

Keep as one skill when:
- Workflows overlap significantly
- They share core concepts
- Users would need both for common tasks
- Combined context is beneficial

### When to Create Reference Files

Create new reference files when:
- Content exceeds 100 lines
- Information is needed only for specific tasks
- Documentation is detailed/technical
- Content would make SKILL.md exceed 500 lines

Keep in SKILL.md when:
- Information is needed for most uses
- Content is brief (under 50 lines)
- It's core to understanding the skill
- It provides critical context

### When to Provide Scripts vs. Generated Code

**Provide Scripts**:
- Deterministic operations
- Format-critical tasks
- Error-prone operations
- Repeated frequently
- Complex logic

**Generate Code**:
- One-off tasks
- Context-dependent operations
- Simple operations
- Highly customized needs
- Exploratory work

## Summary

Good skill structure:
- Keeps SKILL.md under 500 lines
- Uses progressive disclosure effectively
- Organizes references by purpose
- Provides appropriate assets and scripts
- Makes it easy to find relevant information
- Optimizes for Claude's context window

The goal is to give Claude exactly what it needs, when it needs it, without unnecessary context consumption.
