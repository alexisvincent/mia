# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Mia is an AI-powered personal assistant system focused on automatic task capture, intelligent prioritization, and queue time optimization. Built on the [Mastra framework](https://mastra.ai), it integrates with multiple communication channels and uses Linear as the backing task management system.

## Development Commands

```bash
# Run development server (default port 4111)
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Expose local server via ngrok (for webhook testing)
just ngrok        # uses default port 4111
just ngrok 3000   # custom port
```

## Architecture: Mastra Framework

This project is built on Mastra, which provides:
- **Agents**: AI agents with tools, memory, and instructions
- **Workflows**: Multi-step processes with typed inputs/outputs
- **Tools**: Reusable functions callable by agents
- **MCP Servers**: Expose agents/workflows/tools via Model Context Protocol
- **Scorers**: Evaluation functions for assessing agent performance
- **Storage**: LibSQL-based persistence for observability and memory

### Project Structure

```
src/
├── mastra/
│   ├── index.ts                 # Main Mastra instance configuration
│   ├── agents/                  # AI agents (e.g., weatherAgent)
│   ├── workflows/               # Multi-step workflows
│   ├── tools/                   # Reusable tools for agents
│   ├── scorers/                 # Evaluation scorers
│   └── mcp_servers/            # MCP server exports
├── nango/                       # Nango integration (webhooks)
├── composio/                    # Composio integration (webhooks)
└── [future: adapters for WhatsApp, email, SMS]
```

### Key Files

**`src/mastra/index.ts`** - Central configuration:
- Registers all agents, workflows, tools, scorers
- Configures LibSQL storage (currently `:memory:`, can use `file:../mastra.db`)
- Sets up MCP servers, auth (Clerk), webhooks
- Enables observability and logging (Pino)

**`src/mastra/mcp_servers/index.ts`** - MCP exports:
- Exposes agents as tools (e.g., `ask_weatherAgent`)
- Exposes workflows as tools (e.g., `run_weatherWorkflow`)
- Makes tools directly available

### Agent Development Pattern

Agents (see `src/mastra/agents/weather-agent.ts`) have:
- **name** and **description**
- **instructions**: System prompt defining behavior
- **model**: LLM to use (e.g., `openai/gpt-4o-mini`)
- **tools**: Functions the agent can call
- **scorers**: Evaluation functions for quality metrics
- **memory**: Persistent conversation storage (LibSQL)

### Workflow Development Pattern

Workflows (see `src/mastra/workflows/weather-workflow.ts`) are:
- Composed of steps using `createStep()`
- Chained with `.then()` to create pipelines
- Defined with typed input/output schemas (Zod)
- Committed with `.commit()` before export
- Can access the Mastra instance via `mastra` parameter

Steps can:
- Call external APIs
- Invoke agents
- Transform data between steps
- Stream responses (useful for AI-generated content)

### Tool Development Pattern

Tools (see `src/mastra/tools/weather-tool.ts`) are:
- Created with `createTool()`
- Have typed input/output schemas (Zod)
- Execute async functions
- Receive context via `context` parameter

## Integration Patterns

### Nango (OAuth/API integrations)
- Client initialized in `src/nango/index.ts`
- Webhook handler in `src/nango/webhook.ts`
- Requires `NANGO_SECRET_KEY` environment variable

### Composio (Tool/action integrations)
- Client initialized in `src/composio/index.ts`
- Webhook handler in `src/composio/webhook.ts`
- Requires `COMPOSIO_API_KEY` environment variable

### Clerk (Authentication)
- Configured in main Mastra instance
- Requires: `CLERK_PUBLISHABLE_KEY`, `CLERK_SECRET_KEY`, `CLERK_JWKS_URI`

## Environment Variables

Required variables (see `.env`):
- `NANGO_SECRET_KEY` - Nango API authentication
- `COMPOSIO_API_KEY` - Composio platform access
- `CLERK_PUBLISHABLE_KEY` - Clerk auth (public)
- `CLERK_SECRET_KEY` - Clerk auth (private)
- `CLERK_JWKS_URI` - Clerk JWKS endpoint
- LLM provider keys (OpenAI, Anthropic, etc.)

## Design Principles

### Task Lifecycle (Future Implementation)
1. **Ingestion**: Messages analyzed to detect actionable items
2. **Grading**: AI assesses task importance and urgency
3. **Queue Management**: Tasks tracked with arrival time and wait duration
4. **Linear Sync**: Tasks created/updated in Linear for visibility
5. **Completion**: AI assists with drafting responses or completing work

### Queue Time Optimization
Core metric is "time in queue" - duration between task detection and completion. The system should:
- Track queue time for all tasks
- Alert on tasks waiting too long
- Prioritize based on both importance and age
- Provide daily metrics on response times

### ADHD-Friendly UX
Design for the primary user (Alexis Vincent) who has ADHD:
- Minimize friction and cognitive load
- Clear, actionable prioritization
- Automated triage to reduce decision fatigue
- Morning review routines for task oversight
- Quick task capture with minimal context switching

## Future Integrations (Not Yet Implemented)

### Communication Channels
- **WhatsApp**: Monitor for messages requesting action
- **Email**: Parse for tasks, deadlines, and action items
- **SMS**: Capture text-based task requests

Each integration should:
- Handle authentication and maintain persistent connections
- Extract messages and metadata
- Identify potential tasks using AI
- Create structured task objects
- Never miss messages (reliability is critical)

### Linear
- Primary task management backend
- All tasks should be synced to Linear
- Use Linear's API for create/read/update operations
- Maintain bidirectional sync (changes in Linear should reflect in Mia)

### Calendar Integration
- Schedule tasks at appropriate times
- Avoid overcommitting
- Suggest meeting times
- Block focus time for important work

## Data Model Concepts (Future)

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
