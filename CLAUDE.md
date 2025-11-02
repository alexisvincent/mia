# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Mia is an AI-powered personal assistant system focused on automatic task capture, intelligent prioritization, and queue time optimization. The system integrates with multiple communication channels and uses Linear as the backing task management system.

## Architecture Principles

### Message Stream Processing
The system monitors multiple input channels (WhatsApp, email, SMS) for incoming messages. Each channel has an adapter that:
- Connects to the messaging platform
- Extracts messages and metadata
- Identifies potential tasks using AI
- Creates structured task objects

### Task Lifecycle
1. **Ingestion**: Messages are analyzed to detect actionable items
2. **Grading**: AI assesses task importance and urgency
3. **Queue Management**: Tasks are tracked with arrival time and wait duration
4. **Linear Sync**: Tasks are created/updated in Linear for visibility
5. **Completion**: AI assists with drafting responses or completing work

### Queue Time Optimization
A core metric is "time in queue" - the duration between task detection and completion. The system should:
- Track queue time for all tasks
- Alert on tasks that have been waiting too long
- Prioritize based on both importance and age
- Provide daily metrics on response times

### Calendar Integration
Calendar awareness is used to:
- Schedule tasks at appropriate times
- Avoid overcommitting
- Suggest meeting times
- Block focus time for important work

## Key Integrations

### Linear
- Primary task management backend
- All tasks should be synced to Linear
- Use Linear's API for create/read/update operations
- Maintain bidirectional sync (changes in Linear should reflect in Mia)

### Communication Channels
- **WhatsApp**: Monitor for messages requesting action
- **Email**: Parse for tasks, deadlines, and action items
- **SMS**: Capture text-based task requests
Each integration should handle authentication and maintain persistent connections

### AI Processing
- Use LLMs to identify tasks in natural language
- Draft responses based on context and history
- Grade task importance
- Summarize daily activity

## Development Workflow

When implementing features:
- Consider the ADHD-friendly UX: minimize friction, clear priorities, actionable items
- Track queue time as a first-class metric
- Design for reliability (communication streams must not miss messages)
- Optimize for quick task triage (user should spend minimal time reviewing)

## Data Model Concepts

### Task Object
Should include:
- Source (which channel it came from)
- Arrival timestamp
- Importance grade (1-5 or similar)
- Queue time (calculated field)
- Linear issue ID (once synced)
- Original message context
- Suggested actions/responses

### Queue Metrics
Track aggregated metrics:
- Average queue time by importance level
- Tasks by age
- Response rate trends
- Channel breakdown

## User Context

The primary user (Alexis Vincent) has ADHD. Design decisions should account for:
- Difficulty maintaining task context
- Need for clear prioritization
- Benefit from automated triage
- Value of morning review routines
