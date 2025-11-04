# Personal Control Panel

This repository serves as a centralized control panel for managing personal life and business operations through Claude Code.

## Purpose

- **Primary Interface**: Use Claude Code as the main control panel for life and business management

- **Personal Memory**: Store personal file memories, notes, and important information

- **Workflow Automation**: Trigger MCP flow workflows and other automation tasks

- **Business Operations**: Manage and coordinate business activities and processes

## Repository Structure

This is NOT a traditional code repository. Instead, it contains:

- Personal files and memories

- Business documentation and processes

- Workflow configurations

- Automation triggers and scripts

- Reference materials and notes

### Projects Organization

Projects are grouped in their own directories under `projects/` for better organization:

- Each project has its own `CLAUDE.md` file explaining the project structure and navigation

- Project-specific documentation, files, and context are contained within their respective directories

- Use `projects/` as the starting point to explore specific project contexts and documentation

- **Always update the project index below when detecting or creating new projects**

#### Current Projects Index

- **mia-agent/** - AI personal assistant agent for automatic task capture and management

- **fa-hire/** - Hiring and recruitment related documentation

- **k42-eden-debt/** - Financial records and debt management

- **eden-analysis/** - Financial analysis tools for bank statement processing

- **trading/** - Crypto vs prediction market arbitrage strategies

- **personal-optimization/** - Strategies and systems for optimizing personal performance and productivity (ADHD management, energy optimization, etc.)

## Usage Guidelines

- Use Claude Code to interact with and manage all aspects of this control panel

- Leverage MCP workflows for complex operations

- Maintain personal and business information in organized, accessible formats

- Use this as the central hub for coordinating all other tools and systems

## Commands & Workflows

- Document frequently used commands and workflows here

- Store MCP flow configurations and triggers

- Maintain shortcuts and automation scripts

- Use rg instead of grep

## Default Configurations

- Always use lops linear team by default (ID: c901c8db-b830-4443-a192-82befd817acb)

### LOPS Team Issue States

Available states in LOPS team:
- **Triage** - Needs initial review/triage
- **Backlog** - Approved but not yet started
- **Todo** - Ready to work on
- **In Progress** - Currently being worked on
- **In Review** - Work completed, under review
- **Done** - Completed successfully
- **Canceled** - No longer needed
- **Duplicate** - Duplicate of another issue

When querying for open/active issues, exclude: Done, Canceled, Duplicate

## Linear Issue Guidelines for LOPS Team

### The "Executable" Label

Use the **Executable** label to mark tasks that are ready to execute immediately.

A task qualifies as Executable ONLY if it has ALL of these properties:

1. **Single, clear action** - No ambiguity about what needs to be done
2. **Clear "done" state** - You know exactly when it's complete
3. **No planning required** - All the thinking has already been done
4. **Completable in one session**:
   - **Ideal**: 5-30 minutes
   - **Maximum**: 1-2 hours
   - **Preference**: Shorter is better
5. **No missing information** - All context, dependencies, and resources are identified
6. **Immediate next action is obvious** - Can start right now

### Workflow

- **No Executable label** = Task needs planning / is a goal / not ready to execute
- **Has Executable label** = Ready to execute immediately

### Examples

❌ **NOT Executable**: "Get ADHD medication"
- Needs planning: which provider? when? what preparation needed?

✅ **Executable**: "Call Dr. Smith at 555-1234 to schedule ADHD assessment appointment"
- Clear action, clear done state, can do right now

### When Creating Issues

Before adding the Executable label, ask:
- Can this be started immediately without more planning?
- Is it clear what "done" looks like?
- Can this be completed in one focused session (ideally < 30 min)?

If any answer is "no", don't add the Executable label - break it down further or plan it first.

### SLA Configuration

The LOPS team has automated SLA rules based on priority:

- **Urgent (Priority 1)**: 24 hour SLA
- **High (Priority 2)**: 1 week SLA
- **Medium (Priority 3)**: No SLA (removed)
- **Low (Priority 4)**: No SLA (removed)
- **No Priority (Priority 0)**: No SLA (removed)

SLAs are automatically set/removed based on priority changes.

## User Context

The primary user (Alexis Vincent) has ADHD. When developing tools or interfaces:
- Minimize friction and cognitive load
- Provide clear, actionable information
- Support quick task triage and decision-making
- Design for reliability and consistency

---

*This repository is designed to be your personal command center - use Claude Code to navigate, manage, and execute all operations from here.*
