# Skill Examples and Real-World Patterns

This document provides concrete examples of well-structured skills and common patterns.

## Example 1: Simple Linear Workflow Skill

### Scenario: PDF Processing Skill

```markdown
---
name: processing-pdfs
description: Extract text and data from PDF documents using OCR and text extraction tools. Use when user needs to convert PDFs to text, extract tables, or analyze PDF content structure.
---

# PDF Processing

Extract and analyze content from PDF documents with high accuracy.

## When to Use This Skill

- User provides a PDF file to analyze
- Task involves extracting text or data from PDFs
- Converting PDF to other formats
- Analyzing PDF structure or metadata

## Workflow

1. [ ] **Validate PDF file**
   ```bash
   ./scripts/validate-pdf.sh input.pdf
   ```
   Confirms file is valid PDF format

2. [ ] **Choose extraction method**
   - Text-based PDF → Use direct text extraction
   - Scanned/Image PDF → Use OCR processing
   - Mixed → Use hybrid approach

3. [ ] **Extract content**
   ```bash
   ./scripts/extract-content.sh input.pdf --method [text|ocr|hybrid]
   ```
   Output saved to `output.txt`

4. [ ] **Review extraction quality**
   - Check for missing content
   - Verify table structure preserved
   - Confirm formatting is acceptable

5. [ ] **Post-process if needed**
   See [[references/post-processing.md]] for cleanup techniques

## Quick Tips

- OCR works best on high-quality scans (300+ DPI)
- Tables may need manual adjustment after extraction
- For large batches, see [[references/batch-processing.md]]

## References

- [[references/extraction-methods.md]] - Detailed method comparison
- [[references/troubleshooting.md]] - Common issues and solutions
- [[assets/examples/sample-outputs.txt]] - Example extracted content
```

**Why this works**:
- Clear, linear workflow with validation
- Script integration for deterministic operations
- Progressive disclosure (references for details)
- Under 500 lines, focused on essentials

## Example 2: Decision-Tree Skill

### Scenario: Code Review Skill

```markdown
---
name: reviewing-code
description: Perform thorough code reviews checking for bugs, security issues, performance problems, and best practices. Use when user requests code review or submits code changes for feedback.
---

# Code Review

Systematic code review following industry best practices.

## When to Use This Skill

- User explicitly requests code review
- Pull request needs review
- Code quality assessment needed
- Security audit required

## Review Process

### 1. Initial Assessment

Quickly scan the code to determine review type:

- **Small change (<100 lines)** → Quick Review (5-10 minutes)
- **Medium change (100-500 lines)** → Standard Review (15-30 minutes)
- **Large change (>500 lines)** → Deep Review (30+ minutes)
- **Security-critical** → Security Review (thorough analysis)

### 2. Quick Review (Small Changes)

For minor changes:

1. [ ] Verify change matches stated purpose
2. [ ] Check for obvious bugs
3. [ ] Confirm code style consistency
4. [ ] Review error handling
5. [ ] Verify tests exist

### 3. Standard Review (Medium Changes)

For moderate changes:

1. [ ] All items from Quick Review
2. [ ] Analyze logic correctness
3. [ ] Check edge cases
4. [ ] Review performance implications
5. [ ] Assess maintainability
6. [ ] Verify documentation

See [[references/standard-review-checklist.md]] for full checklist.

### 4. Deep Review (Large Changes)

For significant changes:

1. [ ] All items from Standard Review
2. [ ] Architecture assessment
3. [ ] Design patterns evaluation
4. [ ] Integration impact analysis
5. [ ] Scalability considerations
6. [ ] Security review

See [[references/deep-review-guide.md]] for comprehensive approach.

### 5. Security Review

For security-sensitive code:

1. [ ] Input validation
2. [ ] Authentication/authorization checks
3. [ ] SQL injection vulnerabilities
4. [ ] XSS vulnerabilities
5. [ ] CSRF protections
6. [ ] Sensitive data handling

See [[references/security-checklist.md]] for complete security review.

## Providing Feedback

1. **Categorize findings**:
   - 🔴 Critical: Must fix
   - 🟡 Warning: Should fix
   - 🔵 Suggestion: Consider improving
   - 💡 Question: Clarification needed

2. **Be specific and constructive**
   - Point to exact line numbers
   - Explain why something is an issue
   - Suggest specific improvements
   - Provide examples when helpful

3. **Summarize review**
   - Overall assessment
   - Count of issues by severity
   - Recommendation (approve/request changes)

## References

- [[references/review-checklists.md]] - Complete checklists by type
- [[references/common-issues.md]] - Frequent problems and solutions
- [[references/best-practices.md]] - Language-specific best practices
```

**Why this works**:
- Decision tree based on code size
- Different workflows for different situations
- Progressive disclosure (checklists in references)
- Clear categorization and feedback structure

## Example 3: Tool-Heavy Skill

### Scenario: Database Migration Skill

```markdown
---
name: managing-database-migrations
description: Create, validate, and apply database migrations safely with rollback support. Use when user needs to change database schema, add tables/columns, or migrate data between versions.
---

# Database Migrations

Safe, versioned database schema management with automated validation.

## When to Use This Skill

- Creating new database migrations
- Applying pending migrations
- Rolling back problematic migrations
- Validating migration safety

## Prerequisites

Run setup once per project:

```bash
./scripts/setup-migrations.sh
```

This initializes migration tracking and creates necessary directories.

## Creating New Migration

1. [ ] **Generate migration file**
   ```bash
   ./scripts/create-migration.sh "description of change"
   ```
   Creates timestamped migration file in `migrations/`

2. [ ] **Edit migration file**
   Add SQL for both up and down migrations:
   ```sql
   -- UP
   CREATE TABLE users (
     id SERIAL PRIMARY KEY,
     email VARCHAR(255) NOT NULL
   );

   -- DOWN
   DROP TABLE users;
   ```

3. [ ] **Validate migration syntax**
   ```bash
   ./scripts/validate-migration.sh migrations/latest
   ```
   Checks SQL syntax and migration structure

4. [ ] **Test migration locally**
   ```bash
   ./scripts/test-migration.sh migrations/latest --dry-run
   ```
   Runs migration on test database

5. [ ] **Review test output**
   - Verify schema changes are correct
   - Check for data integrity issues
   - Confirm rollback works properly

## Applying Migrations

1. [ ] **Check migration status**
   ```bash
   ./scripts/migration-status.sh
   ```
   Shows pending migrations

2. [ ] **Backup database**
   ```bash
   ./scripts/backup-db.sh production
   ```
   Creates timestamped backup

3. [ ] **Apply migrations**
   ```bash
   ./scripts/apply-migrations.sh --environment production
   ```

4. [ ] **Verify application**
   - Test critical application functionality
   - Check for errors in logs
   - Verify data integrity

## Rolling Back

If migration causes issues:

```bash
./scripts/rollback-migration.sh --steps 1
```

This reverts the last migration using its DOWN section.

## Safety Guidelines

- ⚠️ Always backup before applying to production
- ⚠️ Test migrations on staging first
- ⚠️ Avoid destructive operations without explicit confirmation
- ⚠️ Keep migrations small and focused

## Scripts Reference

| Script | Purpose |
|--------|---------|
| `setup-migrations.sh` | Initialize migration system |
| `create-migration.sh` | Generate new migration file |
| `validate-migration.sh` | Check migration syntax |
| `test-migration.sh` | Test on local database |
| `migration-status.sh` | Show pending migrations |
| `backup-db.sh` | Create database backup |
| `apply-migrations.sh` | Apply pending migrations |
| `rollback-migration.sh` | Revert migrations |

## References

- [[references/migration-patterns.md]] - Common migration patterns
- [[references/troubleshooting.md]] - Solving migration issues
- [[references/best-practices.md]] - Safe migration practices
```

**Why this works**:
- Heavy reliance on scripts for reliability
- Clear safety guidelines
- Step-by-step validation process
- Useful reference table for scripts

## Example 4: Knowledge-Heavy Skill

### Scenario: API Design Skill

```markdown
---
name: designing-apis
description: Design RESTful APIs following best practices for consistency, scalability, and developer experience. Use when creating new API endpoints, refactoring existing APIs, or reviewing API designs.
---

# API Design

Create well-designed APIs that are intuitive, scalable, and maintainable.

## When to Use This Skill

- Designing new REST APIs
- Reviewing API designs
- Refactoring existing APIs
- Establishing API standards

## Quick Start Checklist

For rapid API design:

- [ ] Define resources and their relationships
- [ ] Choose appropriate HTTP methods
- [ ] Design URL structure
- [ ] Define request/response formats
- [ ] Plan error handling
- [ ] Consider versioning strategy

For detailed guidance, see [[references/design-process.md]].

## Core Principles

**1. Resource-Oriented Design**
- URLs represent resources, not actions
- Use nouns, not verbs: `/users` not `/getUsers`

**2. Appropriate HTTP Methods**
- GET: Retrieve resource
- POST: Create resource
- PUT: Replace resource
- PATCH: Update resource partially
- DELETE: Remove resource

**3. Consistent Naming**
- Use plural nouns: `/users`, `/orders`
- Use kebab-case for multi-word resources: `/user-profiles`
- Be predictable and consistent

See [[references/rest-principles.md]] for comprehensive REST principles.

## Design Workflow

### 1. Resource Modeling

1. [ ] List all resources in your domain
2. [ ] Define resource relationships
3. [ ] Identify resource hierarchies
4. [ ] Determine which resources are collections vs. singletons

Example:
```
Users (collection)
  └─ User (singleton)
      ├─ Posts (sub-collection)
      └─ Profile (singleton)
```

See [[references/resource-modeling.md]] for detailed guidance.

### 2. Endpoint Design

Design endpoints following this pattern:

```
GET    /users              # List users
POST   /users              # Create user
GET    /users/:id          # Get specific user
PUT    /users/:id          # Replace user
PATCH  /users/:id          # Update user
DELETE /users/:id          # Delete user
```

See [[references/endpoint-patterns.md]] for advanced patterns.

### 3. Request/Response Design

Use [[assets/templates/api-spec-template.yaml]] as starting point.

Key considerations:
- Clear, consistent field naming
- Appropriate data types
- Sensible defaults
- Validation rules

See [[references/request-response-design.md]] for details.

### 4. Error Handling

Design comprehensive error responses:

```json
{
  "error": {
    "code": "validation_error",
    "message": "Invalid request parameters",
    "details": [
      {"field": "email", "issue": "Invalid email format"}
    ]
  }
}
```

See [[references/error-handling.md]] for full error strategy.

### 5. Versioning Strategy

Choose versioning approach:
- URL versioning: `/v1/users`
- Header versioning: `Accept: application/vnd.api.v1+json`
- Query parameter: `/users?version=1`

See [[references/versioning-strategies.md]] for comparison.

## Common Patterns

**Pagination**:
```
GET /users?page=2&limit=20
```

**Filtering**:
```
GET /users?role=admin&active=true
```

**Sorting**:
```
GET /users?sort=created_at&order=desc
```

**Field Selection**:
```
GET /users?fields=id,email,name
```

See [[references/common-patterns.md]] for comprehensive patterns.

## Design Review Checklist

- [ ] Resources clearly named and organized
- [ ] HTTP methods used appropriately
- [ ] Consistent naming conventions
- [ ] Clear request/response formats
- [ ] Comprehensive error handling
- [ ] Pagination for collections
- [ ] Filtering and sorting support
- [ ] Versioning strategy defined
- [ ] Authentication/authorization considered
- [ ] Rate limiting planned
- [ ] Documentation complete

## References

### Core Concepts
- [[references/rest-principles.md]] - Foundational REST principles
- [[references/resource-modeling.md]] - How to model resources
- [[references/http-methods.md]] - Choosing appropriate methods

### Design Details
- [[references/endpoint-patterns.md]] - Common endpoint patterns
- [[references/request-response-design.md]] - Request/response best practices
- [[references/error-handling.md]] - Error handling strategies
- [[references/versioning-strategies.md]] - API versioning approaches

### Advanced Topics
- [[references/authentication.md]] - Authentication patterns
- [[references/rate-limiting.md]] - Rate limiting strategies
- [[references/caching.md]] - HTTP caching
- [[references/pagination.md]] - Pagination patterns

### Reference Material
- [[references/status-codes.md]] - HTTP status code guide
- [[references/common-patterns.md]] - Frequently used patterns
- [[assets/templates/api-spec-template.yaml]] - OpenAPI template
- [[assets/examples/good-api-examples.md]] - Well-designed API examples
```

**Why this works**:
- Organized progressive disclosure
- Quick start for rapid work
- Deep references for thorough work
- Clear checklist for review
- Well-organized reference section

## Common Patterns Across Examples

### Pattern: Validation Before Action

```markdown
1. [ ] Validate inputs
2. [ ] Show plan/preview
3. [ ] Get user confirmation
4. [ ] Execute action
5. [ ] Verify results
```

### Pattern: Script Integration

```markdown
Run the analysis script:
```bash
./scripts/analyze.sh input.txt --format json
```

Review output, then proceed with recommendations.
```

### Pattern: Conditional Workflows

```markdown
Assess the situation:
- If [condition A] → Use [workflow A]
- If [condition B] → Use [workflow B]
- If [condition C] → Use [workflow C]

### Workflow A
[steps...]

### Workflow B
[steps...]
```

### Pattern: Reference Loading

```markdown
## Brief Overview
Quick summary...

## Detailed Information
For comprehensive details, see [[references/deep-dive.md]].

## Advanced Topics
For expert-level patterns, see [[references/advanced.md]].
```

### Pattern: Safety Warnings

```markdown
## Safety Guidelines

- ⚠️ Warning about critical issue
- ⚠️ Another important warning
- ℹ️ Informational note
```

### Pattern: Tool/Script Reference Table

```markdown
## Available Scripts

| Script | Purpose | Usage |
|--------|---------|-------|
| `script1.sh` | Does X | `./script1.sh [args]` |
| `script2.py` | Does Y | `./script2.py [args]` |
```

## Anti-Pattern Examples

### ❌ Anti-Pattern: No Validation

```markdown
## Workflow

1. Make changes to production database
2. Hope everything works
```

### ✅ Correct Pattern: Validate First

```markdown
## Workflow

1. [ ] Backup production database
2. [ ] Test changes on staging
3. [ ] Review test results
4. [ ] Get approval from team lead
5. [ ] Apply to production
6. [ ] Monitor for issues
7. [ ] Verify application functionality
```

### ❌ Anti-Pattern: Vague Instructions

```markdown
Process the data appropriately and generate some output.
```

### ✅ Correct Pattern: Specific Steps

```markdown
1. [ ] Load data from `input.csv`
2. [ ] Validate data has required columns: id, name, email
3. [ ] Transform: normalize email addresses to lowercase
4. [ ] Filter: remove rows with invalid email formats
5. [ ] Generate output in JSON format
6. [ ] Save to `output.json`
```

### ❌ Anti-Pattern: Documentation Dump

```markdown
# Complete Encyclopedia of the Topic

[10,000 lines of detailed documentation in SKILL.md]
```

### ✅ Correct Pattern: Progressive Disclosure

```markdown
# Topic Overview

Quick summary (100 words).

## Quick Start

Essential steps...

## Detailed Documentation

See [[references/complete-guide.md]] for comprehensive coverage.
```

## Template for New Skills

Use this as starting point:

```markdown
---
name: doing-something
description: What this skill does and when to use it. Trigger conditions here. Under 1024 characters.
---

# Skill Name

One-sentence overview of the skill.

## When to Use This Skill

- Trigger condition 1
- Trigger condition 2
- Trigger condition 3

## Main Workflow

1. [ ] Step 1 with clear action
2. [ ] Step 2 with validation
3. [ ] Step 3 with user confirmation
4. [ ] Step 4 with verification

## Key Concepts

Brief explanation of essential concepts.

For detailed theory, see [[references/concepts.md]].

## Common Issues

Brief troubleshooting tips.

For comprehensive troubleshooting, see [[references/troubleshooting.md]].

## References

- [[references/detailed-guide.md]] - Comprehensive documentation
- [[references/advanced-patterns.md]] - Expert-level techniques
- [[assets/templates/template.txt]] - Template file
```

## Summary

Good skill examples demonstrate:
- Clear workflows with validation steps
- Appropriate use of scripts for deterministic operations
- Progressive disclosure (brief in SKILL.md, details in references)
- Specific, actionable instructions
- Safety considerations
- Well-organized reference material

Study these patterns and adapt them to your specific skill needs.
