# ANSI Formatter Usage Skill

Learn how to use the `format_ansi` MCP tool to create beautifully formatted terminal output for AskUserQuestion prompts.

## Tool Overview

**Tool Name**: `format_ansi` (via MCP: `mcp__mia-local__format_ansi`)

**Purpose**: Convert simple XML markup into ANSI-formatted terminal output with colors, boxes, badges, and structured layouts.

**Parameters**:
- `xml` (required): XML markup describing the desired output
- `context` (optional): Additional context or instructions for the formatter

**Returns**: `{ formatted: string }` - The ANSI-formatted string ready to use

## Available Components

### 1. Badges

**Priority Badges**:
```xml
<badge type="priority" value="1"/>  <!-- URGENT (red) -->
<badge type="priority" value="2"/>  <!-- HIGH (red) -->
<badge type="priority" value="3"/>  <!-- MEDIUM (yellow) -->
<badge type="priority" value="4"/>  <!-- LOW (gray) -->
```

**State Badges**:
```xml
<badge type="state" value="In Progress"/>
<badge type="state" value="Todo"/>
<badge type="state" value="Backlog"/>
<!-- Any state name works -->
```

**Action Badges**:
```xml
<badge type="action" value="add_comment"/>
<badge type="action" value="update_description"/>
<badge type="action" value="update_title"/>
<badge type="action" value="change_state"/>
<badge type="action" value="add_labels"/>
<badge type="action" value="set_estimate"/>
<badge type="action" value="link_parent"/>
```

### 2. Linear Issues

**Basic Issue Display** (2 lines: issue + metadata):
```xml
<issue
  id="LOP-123"
  title="Fix authentication bug"
  state="In Progress"
  priority="2"
  labels="bug, security"/>
```

**New Issue** (use id="NEW"):
```xml
<issue
  id="NEW"
  title="Book dentist appointment"
  summary="Schedule appointment this week"/>
```

### 3. Boxes

**Simple Box**:
```xml
<box color="blue" title="Section Title">
  Content line 1
  Content line 2
</box>
```

**Available Colors**:
- `blue` - Message previews, current issue
- `yellow` - Existing issues, clarify analysis
- `magenta` - Recommendations
- `cyan` - Related issues, primary info
- `green` - Success/completion
- `gray` - Secondary/neutral

### 4. Complete Box Components

**Existing Issues Box**:
```xml
<existing-issues-box>
  <issue id="LOP-45" title="Finish report" state="In Progress" priority="2"/>
  <issue id="LOP-67" title="Review contracts" state="Todo"/>
</existing-issues-box>
```

**Current Issue Box**:
```xml
<current-issue-box
  id="LOP-123"
  title="Fix login bug"
  state="Triage"
  priority="1"
  description="Users can't log in after password reset."/>
```

**Related Issues Box**:
```xml
<related-issues-box>
  <issue
    id="LOP-100"
    title="Similar auth issue"
    state="Done"
    relationship="Similar"/>
  <issue
    id="LOP-200"
    title="Parent epic"
    state="In Progress"
    relationship="Possible Parent"/>
</related-issues-box>
```

**Clarify Analysis Box**:
```xml
<clarify-analysis-box
  actionable="Yes"
  type="Action"
  definition="Fix authentication bug preventing login after password reset"/>
```

**Recommendations Box** (Chat Triage Variant):
```xml
<recommendations-box>
  <recommendation
    issue="LOP-45"
    title="Add Q4 projections"
    actions="add_comment"
    summary="Finance needs extra section on Q4 projections."/>
  <recommendation
    issue="NEW"
    title="Book dentist appointment"
    summary="Schedule this week."/>
</recommendations-box>
```

**Recommendations Box** (Linear Triage Variant):
```xml
<recommendations-box type="linear">
  <change action="update_title" value="Fix authentication bug in login flow"/>
  <change action="update_description"/>
  <change action="change_state" value="Todo"/>
  <change action="add_labels" value="bug, security, backend"/>
  <change action="set_estimate" value="5 points (Large, 2-4 hours)"/>
  <summary>Title clarified, added security context, sized as large task</summary>
</recommendations-box>
```

### 5. Message Boxes

**Message Box** (Chat preview):
```xml
<message-box chat="Alice" type="dm">
  <message
    date="Jan 10"
    time="14:30"
    sender="Them"
    processed="true">
    Can you review the contract?
  </message>
  <message
    date="Jan 11"
    time="09:00"
    sender="You"
    processed="false"
    highlight="by EOD">
    Will do by EOD
  </message>
</message-box>
```

**Message Box Types**:
- `type="dm"` - Direct message (1-on-1)
- `type="group"` - Group chat
- `type="self"` - Notes to self

**Message Attributes**:
- `date` - Date string (e.g., "Jan 10")
- `time` - Time string (e.g., "14:30")
- `sender` - "You", "Them", or person name
- `processed` - "true" for historical, "false" for new/unprocessed
- `highlight` (optional) - Text to highlight in bold bright white

### 6. Advanced Components

#### Tables

Great for structured data comparison (3-5 columns max):
```xml
<table>
  <header>
    <col>Migration</col>
    <col>Size</col>
    <col>Risk</col>
    <col>Status</col>
  </header>
  <row>
    <col id="001_users">001_users</col>
    <col>2.3 MB</col>
    <col><badge type="priority" value="4"/></col>
    <col><badge type="state" value="Ready"/></col>
  </row>
</table>
```

**Attributes**:
- `header` - Optional header row (auto-bold)
- `col` - Table cell
- `col[id="..."]` - Make cell green (like ID highlighting)

#### Timelines

Show sequential processes with time context:
```xml
<timeline>
  <timescale start="09:00" interval="15" count="4"/>
  <event time="09:00" status="complete" duration="5 min">BUILD</event>
  <event time="09:08" status="complete" duration="8 min">TEST</event>
  <event time="09:20" status="in-progress">STAGING</event>
</timeline>
```

**Attributes**:
- `timescale[start]` - Starting time (e.g., "09:00")
- `timescale[interval]` - Minutes between markers
- `timescale[count]` - Number of time markers
- `event[time]` - Start time for event
- `event[status]` - "complete", "in-progress", "pending", "failed"
- `event[duration]` - Optional duration label

#### Progress Indicators

Show multi-step workflows (5-7 steps max):
```xml
<progress>
  <step status="complete">Initialize</step>
  <step status="complete">Validate</step>
  <step status="current">Process</step>
  <step status="pending">Review</step>
  <step status="pending">Deploy</step>
</progress>
```

**Attributes**:
- `step[status]` - "complete", "current", "pending", "failed"
- Step numbers auto-generated from position

#### Alert Boxes

Alert boxes with severity levels (use double-line for critical only):
```xml
<alert severity="critical" title="Database connection pool exhausted">
  <id>ALERT-001</id>
  <triggered>3 minutes ago</triggered>
  <affected>Production DB (us-west-2)</affected>
</alert>

<alert severity="warning" title="High memory usage (87%)">
  <id>ALERT-002</id>
  <triggered>12 minutes ago</triggered>
  <affected>app-server-03</affected>
</alert>
```

**Attributes**:
- `alert[severity]` - "critical", "warning", "info"
- `alert[title]` - Alert message
- `id` - Alert identifier
- `triggered` - When the alert fired
- `affected` - What system/component is affected

#### Code Diffs

Show file changes with line numbers (limit to 10-15 lines):
```xml
<diff file="package.json">
  <line number="12" type="unchanged">  "dependencies": {</line>
  <line number="13" type="removed">    "react": "^17.0.2",</line>
  <line number="13" type="added">    "react": "^18.2.0",</line>
  <line number="14" type="removed">    "react-dom": "^17.0.2",</line>
  <line number="14" type="added">    "react-dom": "^18.2.0",</line>
  <line number="15" type="unchanged">    "axios": "^1.6.0",</line>
</diff>
```

**Attributes**:
- `diff[file]` - Optional filename header
- `line[number]` - Line number in file
- `line[type]` - "unchanged", "removed", "added"

#### Feature Flag Matrices

Show boolean states across environments (3-5 columns max):
```xml
<matrix>
  <columns>
    <col>DEV</col>
    <col>STAGE</col>
    <col>PROD</col>
  </columns>
  <row feature="Dark Mode">
    <cell state="enabled"/>
    <cell state="enabled"/>
    <cell state="disabled"/>
  </row>
  <row feature="Analytics 2.0">
    <cell state="enabled"/>
    <cell state="enabled"/>
    <cell state="partial" value="50%"/>
  </row>
</matrix>
```

**Attributes**:
- `col` - Column header (environment, role, etc.)
- `row[feature]` - Row label (feature name, permission, etc.)
- `cell[state]` - "enabled", "disabled", "partial"
- `cell[value]` - Optional value for partial state

#### Calendar/Schedule

Show dates with event highlights:
```xml
<calendar month="November" year="2025">
  <week>
    <day date="11" current="true">1 event</day>
    <day date="12"/>
    <day date="13">2 events</day>
    <day date="14"/>
    <day date="15">1 event</day>
  </week>
  <week>
    <day date="21" importance="high">1 critical</day>
  </week>
</calendar>
```

**Attributes**:
- `calendar[month]` - Month name
- `calendar[year]` - Year
- `day[date]` - Day number
- `day[current]` - "true" for today
- `day[importance]` - "normal", "high" (affects color)

#### Dashboard Grids

Multiple metrics in organized cells (2-4 cells per row):
```xml
<dashboard>
  <cell title="SPRINT" color="green">
    <metric><badge type="state" value="73%"/></metric>
    <detail>22 of 30</detail>
    <detail>points</detail>
  </cell>
  <cell title="REVIEWS" color="yellow">
    <metric><badge type="state" value="8 open"/></metric>
    <detail>3 urgent</detail>
    <detail>5 waiting</detail>
  </cell>
  <cell title="DEPLOYS" color="cyan">
    <metric><badge type="state" value="3 today"/></metric>
    <detail>2 planned</detail>
    <detail>1 hotfix</detail>
  </cell>
</dashboard>
```

**Attributes**:
- `cell[title]` - Cell header (bold, colored)
- `cell[color]` - "green", "yellow", "cyan", "red", "gray"
- `metric` - Primary metric (usually a badge)
- `detail` - Supporting details (1-3 lines)

## Usage Examples

### Example 1: Simple Badge
```javascript
const result = await mcp__mia_local__format_ansi({
  xml: '<badge type="priority" value="1"/>'
})
// result.formatted: "\u001b[41m\u001b[1m\u001b[38;5;231m URGENT \u001b[0m"
```

### Example 2: Linear Issue with Priority
```javascript
const result = await mcp__mia_local__format_ansi({
  xml: `<issue
    id="LOP-456"
    title="Update documentation"
    state="Todo"
    priority="3"/>`
})
// Returns formatted 2-line issue display
```

### Example 3: Complete Chat Triage Prompt
```javascript
const result = await mcp__mia_local__format_ansi({
  xml: `
    <message-box chat="Alice" type="dm">
      <message date="Jan 11" time="09:00" sender="You" processed="false">
        Will review by EOD
      </message>
    </message-box>

    <existing-issues-box>
      <issue id="LOP-45" title="Quarterly report" state="In Progress" priority="2"/>
    </existing-issues-box>

    <recommendations-box>
      <recommendation
        issue="LOP-45"
        title="Add Q4 section"
        actions="add_comment"
        summary="Finance feedback: Need Q4 projections section."/>
    </recommendations-box>
  `
})
// Returns complete formatted prompt with all sections
```

### Example 4: Linear Issue Triage
```javascript
const result = await mcp__mia_local__format_ansi({
  xml: `
    <current-issue-box
      id="LOP-999"
      title="Fix login bug"
      state="Triage"
      priority="1"
      description="Users can't log in after password reset."/>

    <clarify-analysis-box
      actionable="Yes"
      type="Action"
      definition="Fix auth bug preventing login after password reset"/>

    <recommendations-box type="linear">
      <change action="update_title" value="Fix authentication in password reset flow"/>
      <change action="change_state" value="Todo"/>
      <change action="add_labels" value="bug, security"/>
      <summary>Clarified title and added security label</summary>
    </recommendations-box>
  `
})
// Returns complete linear triage prompt
```

## Best Practices

### 1. Keep XML Clean
- Use proper indentation for readability
- Close all tags properly
- Use attributes for structured data

### 2. Choose Appropriate Components
- **Chat Triage**: message-box → existing-issues-box → recommendations-box
- **Linear Triage**: current-issue-box → related-issues-box → clarify-analysis-box → recommendations-box

### 3. Provide Context When Needed
Use the `context` parameter for special instructions:
```javascript
await mcp__mia_local__format_ansi({
  xml: '<issue id="LOP-123" title="..." state="Todo"/>',
  context: 'This is for a mobile app project, emphasize urgency'
})
```

### 4. Combine Multiple Sections
The tool handles complete multi-section prompts. Separate sections with blank lines in the XML for clarity.

### 5. Use Highlighting Sparingly
In message boxes, only highlight the most important actionable terms:
```xml
<message highlight="review contract">Can you review contract by Friday?</message>
```

## Common Patterns

### Chat Triage Workflow
1. Show message preview (blue box)
2. Show existing related issues (yellow box) if any
3. Show recommendations (magenta box)

### Linear Issue Triage Workflow
1. Show current issue (blue box)
2. Show related issues (cyan box) if any
3. Show clarify analysis (yellow box)
4. Show recommendations (magenta box)

### Recommendations Types
- **Update existing**: Use issue ID + actions + summary
- **Create new**: Use id="NEW" + title + summary
- **Linear changes**: Use type="linear" with change elements

## Output Format

The tool returns a JSON object with a `formatted` field containing the ANSI-formatted string:
```json
{
  "formatted": "\u001b[0m\u001b[34m┌─ Title ──......"
}
```

Extract the `formatted` field and use it directly in your AskUserQuestion calls or other terminal output.

## Tips

- The tool handles proper spacing, alignment, and width (~80 chars for boxes)
- All outputs include proper ANSI escape codes for colors and styling
- Green is used for Linear issue IDs to make them scannable
- Gray is used for timestamps and secondary information
- Bold bright white is used for titles and highlighted terms
- Tree structures (├─, └─) are added automatically for proper visual hierarchy

## Error Handling

If the XML is malformed or uses undefined components, the tool will do its best to interpret and format the content. Always validate your XML structure before calling the tool in production.

## Performance Notes

- Each tool call involves an LLM generation (Claude 4.5 Sonnet)
- Typical response time: 1-3 seconds
- The tool loads component documentation on each call, allowing hot-reloading during development
- For production, consider caching repeated patterns if performance is critical
