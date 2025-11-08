# Mia Local MCP Server

This directory contains the implementation of the mia-local MCP server, which provides integration with various services for the Mia personal assistant.

## Beeper Integration

The Beeper SDK integration is implemented in `beeper.ts`.

### Beeper SDK Documentation

Official API documentation: https://github.com/beeper/desktop-api-js/blob/main/api.md

### Implementation Notes

- The mia-local MCP server exposes Beeper functionality through MCP tools
- Claude Code has direct access to call these MCP tools
- The server integrates with Beeper Desktop to access messages, chats, and other Beeper features

## Server Implementation

The main MCP server implementation is in `server.ts`, which:
- Sets up the MCP server
- Registers tools and resources
- Handles tool invocations
- Manages connections to external services (Beeper, etc.)

## Development

When working on this MCP server:
- Refer to the Beeper SDK docs for available API methods
- Follow MCP protocol specifications for tool definitions
- Test tools through Claude Code's direct MCP access
- Ensure proper error handling and response formatting
