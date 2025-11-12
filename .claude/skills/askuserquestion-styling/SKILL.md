---
name: askuserquestion-styling
description: Style AskUserQuestion prompts with ANSI terminal codes. Use when creating formatted, colorful, scannable prompts in the terminal.
---

You are an expert at styling AskUserQuestion prompts with ANSI terminal codes for beautiful, scannable terminal output.

## Critical Knowledge: The Bold Default Problem

⚠️ **AskUserQuestion defaults ALL text to BOLD.** You must explicitly prevent this.

**The Solution:** Start EVERY line with `\u001b[0m` to reset to normal weight.

## Design Principles (From Extensive Testing)

Based on extensive user testing, these principles create the best experience:

1. **Use left-side-only boxes** - NO right walls (they misalign and look broken)
2. **Consistent color scheme by section type:**
   - Cyan (`\u001b[36m`) for primary info/summary sections
   - Green (`\u001b[32m`) for status/analysis sections
   - Yellow (`\u001b[33m`) for items/issues sections
   - Gray (`\u001b[90m`) for secondary info/recommendations
3. **Badge system** - Use background colors for counts/status
4. **Green text for IDs** - Makes identifiers easy to scan (e.g., `\u001b[32mLOP-49\u001b[0m`)
5. **NO progress bars** - Use badge counts instead (they're cleaner)
6. **NO numbered options** - The tool adds numbers automatically
7. **NO emojis in question text** - Keep professional (emojis ok in options)
8. **Proper contrast for badges** - White text on colored backgrounds

## Quick Reference

### Essential ANSI Codes
```
Text Colors:
\u001b[0m   - Reset (CRITICAL: use at start of EVERY line!)
\u001b[1m   - Bold (use sparingly, only for headers)
\u001b[31m  - Red (urgent/error)
\u001b[32m  - Green (success/found/IDs)
\u001b[33m  - Yellow (warning/needs action)
\u001b[36m  - Cyan (info/primary sections)
\u001b[37m  - Light gray (secondary text)
\u001b[90m  - Dark gray (muted/secondary)
\u001b[97m  - Bright white (for badges)

Background Colors:
\u001b[41m  - Red background
\u001b[42m  - Green background
\u001b[43m  - Yellow background
\u001b[100m - Gray background
```

### Badge Patterns
```javascript
// Status badges
\u001b[42m\u001b[30m COMPLETE \u001b[0m    // Green bg, black text
\u001b[43m\u001b[30m PENDING \u001b[0m     // Yellow bg, black text
\u001b[41m\u001b[97m URGENT \u001b[0m      // Red bg, white text
\u001b[100m\u001b[97m NONE \u001b[0m       // Gray bg, white text

// Count badges
\u001b[42m\u001b[30m 5 items \u001b[0m     // Green when all good
\u001b[43m\u001b[30m 3 of 5 \u001b[0m       // Yellow when partial
\u001b[100m\u001b[97m 0 \u001b[0m           // Gray when zero
```

## The BEST Template (Refined Through Testing)

This template scored highest in user testing:

```javascript
AskUserQuestion({
  questions: [{
    header: "Action",
    multiSelect: false,
    question: `\u001b[0m\u001b[36m┌─ Summary ───────────────────────────\u001b[0m
\u001b[0m\u001b[36m│\u001b[0m ${title} \u001b[90m•\u001b[0m ${count} items \u001b[90m•\u001b[0m ${timeframe}
\u001b[0m\u001b[36m└──────────────────────────────────────\u001b[0m
\u001b[0m
\u001b[0m\u001b[32m┌─ Analysis ───────────────────────────\u001b[0m
\u001b[0m\u001b[32m│\u001b[0m
\u001b[0m\u001b[32m│\u001b[0m Total:      \u001b[42m\u001b[30m ${total} items \u001b[0m
\u001b[0m\u001b[32m│\u001b[0m Processed:  \u001b[42m\u001b[30m ${processed} of ${total} \u001b[0m
\u001b[0m\u001b[32m│\u001b[0m New needed: \u001b[${newCount > 0 ? '43m\u001b[30m' : '100m\u001b[97m'} ${newCount} \u001b[0m
\u001b[0m\u001b[32m│\u001b[0m
\u001b[0m\u001b[32m└──────────────────────────────────────\u001b[0m
\u001b[0m
\u001b[0m\u001b[33m┌─ Items ──────────────────────────────\u001b[0m
\u001b[0m\u001b[33m│\u001b[0m
\u001b[0m\u001b[33m│\u001b[0m \u001b[32m●\u001b[0m \u001b[1m\u001b[32m${itemId1}\u001b[0m ${priorityBadge}
\u001b[0m\u001b[33m│\u001b[0m   └─ ${description}
\u001b[0m\u001b[33m│\u001b[0m   \u001b[37m${status}\u001b[0m
\u001b[0m\u001b[33m│\u001b[0m
\u001b[0m\u001b[33m│\u001b[0m \u001b[33m○\u001b[0m \u001b[1m\u001b[32mNEW\u001b[0m
\u001b[0m\u001b[33m│\u001b[0m   └─ ${newItemDescription}
\u001b[0m\u001b[33m│\u001b[0m   \u001b[37mTo create\u001b[0m
\u001b[0m\u001b[33m│\u001b[0m
\u001b[0m\u001b[33m└──────────────────────────────────────\u001b[0m
\u001b[0m
\u001b[0m\u001b[1mRecommendation:\u001b[0m ${recommendation}
\u001b[0m
\u001b[0mWhat should I do?`,
    options: [
      { label: "Execute", description: "Take action" },
      { label: "Review", description: "Add context" },
      { label: "Skip", description: "Process later" }
    ]
  }]
})
```

### Why This Works:
- **Left-side-only boxes** - Clean alignment, no broken right walls
- **Color-coded sections** - Instant visual hierarchy
- **Badge counts** - Quick status overview without clutter
- **Green IDs** - Easy to scan for references
- **Muted secondary text** - Reduces cognitive load
- **Visual indicators** - ● for existing, ○ for new

## Helper Functions

```javascript
// Priority badge helper
function getPriorityBadge(priority) {
  switch(priority) {
    case 1: return '\u001b[41m\u001b[97m URGENT \u001b[0m';
    case 2: return '\u001b[41m\u001b[97m HIGH \u001b[0m';
    case 3: return '\u001b[43m\u001b[30m MEDIUM \u001b[0m';
    case 4: return '\u001b[100m\u001b[97m LOW \u001b[0m';
    default: return '';
  }
}

// Status badge helper
function getStatusBadge(status) {
  const colors = {
    complete: '\u001b[42m\u001b[30m',
    partial: '\u001b[43m\u001b[30m',
    pending: '\u001b[43m\u001b[30m',
    error: '\u001b[41m\u001b[97m',
    none: '\u001b[100m\u001b[97m'
  };
  return `${colors[status] || colors.none} ${status.toUpperCase()} \u001b[0m`;
}
```

## Alternative Templates (For Different Use Cases)

### Minimal (When Less is More)
```javascript
question: `\u001b[0m\u001b[1m${title}\u001b[0m
\u001b[0m${count} items \u001b[90m•\u001b[0m ${timeframe}
\u001b[0m
\u001b[0m\u001b[1mStatus:\u001b[0m \u001b[42m\u001b[30m ${status} \u001b[0m
\u001b[0m
\u001b[0m${items.map(i => `  ${i.exists ? '\u001b[32m●\u001b[0m' : '\u001b[33m○\u001b[0m'} \u001b[32m${i.id}\u001b[0m - ${i.title}`).join('\n\u001b[0m')}
\u001b[0m
\u001b[0m\u001b[1mNext:\u001b[0m ${action}
\u001b[0m
\u001b[0mProceed?`
```

### Data-Heavy (Multiple Metrics)
```javascript
question: `\u001b[0m\u001b[100m\u001b[30m ANALYSIS \u001b[0m ${title}
\u001b[0m
\u001b[0m────────────────────────────────────────
\u001b[0m\u001b[1mMetrics\u001b[0m
\u001b[0m────────────────────────────────────────
\u001b[0m
\u001b[0m  Total:     \u001b[1m${total}\u001b[0m items
\u001b[0m  Processed: \u001b[32m${processed}\u001b[0m (\u001b[1m${percent}%\u001b[0m)
\u001b[0m  Pending:   \u001b[33m${pending}\u001b[0m
\u001b[0m  Failed:    \u001b[31m${failed}\u001b[0m
\u001b[0m
\u001b[0m────────────────────────────────────────
\u001b[0m\u001b[1mActions Required:\u001b[0m \u001b[43m\u001b[30m ${actionCount} \u001b[0m
\u001b[0m────────────────────────────────────────
\u001b[0m
\u001b[0m${actions.map(a => `  \u001b[33m→\u001b[0m ${a}`).join('\n\u001b[0m')}
\u001b[0m
\u001b[0mSelect action:`
```

## Visual Elements Reference

### Box Drawing (Use Left-Side Only!)
```
Good (left-side only):
┌─ Title ─────────────
│ Content
│ More content
└─────────────────────

Bad (with right walls - they misalign):
┌─ Title ─────────────┐
│ Content             │
└─────────────────────┘
```

### Status Indicators
```
\u001b[32m●\u001b[0m  Green circle - Found/exists/complete
\u001b[33m○\u001b[0m  Yellow circle - New/pending/needs action
\u001b[31m×\u001b[0m  Red X - Error/failed
\u001b[32m✓\u001b[0m  Green check - Success
\u001b[33m→\u001b[0m  Yellow arrow - Action item
\u001b[90m•\u001b[0m  Gray bullet - Separator
```

## Common Patterns

### Item Lists with Status
```javascript
\u001b[0m\u001b[33m│\u001b[0m \u001b[32m●\u001b[0m \u001b[1m\u001b[32mITEM-123\u001b[0m \u001b[41m\u001b[97m HIGH \u001b[0m
\u001b[0m\u001b[33m│\u001b[0m   └─ Description here
\u001b[0m\u001b[33m│\u001b[0m   \u001b[37mStatus: In progress\u001b[0m
```

### Section Headers
```javascript
\u001b[0m\u001b[36m┌─ Section Name ──────────────────────\u001b[0m
\u001b[0m\u001b[36m│\u001b[0m Content here
```

### Inline Badges
```javascript
\u001b[0mItems: \u001b[42m\u001b[30m 5 total \u001b[0m \u001b[43m\u001b[30m 3 pending \u001b[0m \u001b[100m\u001b[97m 0 failed \u001b[0m
```

## Testing Insights

From our extensive testing session, users preferred:

✅ **GOOD:**
- Left-side-only boxes (no right walls)
- Consistent color coding by section
- Badge system for counts
- Green text for IDs
- Muted gray for secondary info
- Clear visual hierarchy

❌ **BAD:**
- Right-side box walls (misalign)
- Progress bars/blocks
- Too many emojis in questions
- Poor contrast (blue bg with white text)
- Overly complex layouts
- Numbered options (tool adds them)

## Advanced Components Library

### Tables

Great for structured data comparison. Keep them clean and simple.

```javascript
// Simple table with badges
\u001b[0m\u001b[90m┌──────────────┬──────────┬───────────┬──────────\u001b[0m
\u001b[0m\u001b[90m│\u001b[0m \u001b[1mMigration\u001b[0m   \u001b[90m│\u001b[0m \u001b[1mSize\u001b[0m    \u001b[90m│\u001b[0m \u001b[1mRisk\u001b[0m     \u001b[90m│\u001b[0m \u001b[1mStatus\u001b[0m
\u001b[0m\u001b[90m├──────────────┼──────────┼───────────┼──────────\u001b[0m
\u001b[0m\u001b[90m│\u001b[0m \u001b[32m001_users\u001b[0m   \u001b[90m│\u001b[0m 2.3 MB   \u001b[90m│\u001b[0m \u001b[100m\u001b[97m LOW \u001b[0m    \u001b[90m│\u001b[0m \u001b[42m\u001b[30m READY \u001b[0m
\u001b[0m\u001b[90m│\u001b[0m \u001b[32m002_orders\u001b[0m  \u001b[90m│\u001b[0m 45.6 MB  \u001b[90m│\u001b[0m \u001b[43m\u001b[30m MED \u001b[0m    \u001b[90m│\u001b[0m \u001b[42m\u001b[30m READY \u001b[0m
\u001b[0m\u001b[90m│\u001b[0m \u001b[32m003_index\u001b[0m   \u001b[90m│\u001b[0m 128.4 MB \u001b[90m│\u001b[0m \u001b[41m\u001b[97m HIGH \u001b[0m   \u001b[90m│\u001b[0m \u001b[43m\u001b[30m CHECK \u001b[0m
\u001b[0m\u001b[90m└──────────────┴──────────┴───────────┴──────────\u001b[0m

// Comparison table (two columns)
\u001b[0m\u001b[90m         ┌─ STAGING ──┬─ PRODUCTION ─\u001b[0m
\u001b[0m\u001b[90m─────────┼─────────────┼──────────────\u001b[0m
\u001b[0m\u001b[1mVersion\u001b[0m  \u001b[90m│\u001b[0m \u001b[32mv2.4.1-rc\u001b[0m  \u001b[90m│\u001b[0m \u001b[33mv2.3.8\u001b[0m
\u001b[0m\u001b[1mNodes\u001b[0m    \u001b[90m│\u001b[0m \u001b[33m2 pods\u001b[0m     \u001b[90m│\u001b[0m \u001b[32m8 pods\u001b[0m
\u001b[0m\u001b[90m─────────┴─────────────┴──────────────\u001b[0m
```

**Tips:**
- Use gray for borders to reduce visual noise
- Keep columns aligned
- Use color only for data, not structure
- Badges work great in table cells

### Tree Structures

Perfect for dependencies and hierarchies.

```javascript
\u001b[0m\u001b[1mreact\u001b[0m \u001b[31m17.0.2 → 18.2.0\u001b[0m \u001b[41m\u001b[97m MAJOR \u001b[0m
\u001b[0m├─ \u001b[32mreact-dom\u001b[0m \u001b[90m17.0.2 → 18.2.0\u001b[0m
\u001b[0m├─ \u001b[32m@types/react\u001b[0m \u001b[90m17.0.0 → 18.0.0\u001b[0m
\u001b[0m└─ \u001b[32mreact-scripts\u001b[0m \u001b[90m4.0.3 → 5.0.1\u001b[0m
\u001b[0m    ├─ \u001b[37mwebpack\u001b[0m \u001b[90m4.x → 5.x\u001b[0m
\u001b[0m    └─ \u001b[37mbabel\u001b[0m \u001b[90m7.12 → 7.20\u001b[0m
```

**Tips:**
- Use `├─` and `└─` for branches
- Color parent items, mute children
- Good for showing relationships
- Keep nesting to 3 levels max

### Timelines

Show sequential processes with time context.

```javascript
\u001b[0m\u001b[90m    09:00       09:15       09:30       09:45\u001b[0m
\u001b[0m\u001b[90m    │           │           │           │\u001b[0m
\u001b[0m\u001b[32m●───┼───────────┼───────────┼───────────┼\u001b[0m
\u001b[0m\u001b[32m    │\u001b[0m
\u001b[0m\u001b[32m    └─ \u001b[42m\u001b[30m BUILD \u001b[0m \u001b[32m✓\u001b[0m 5 min
\u001b[0m
\u001b[0m\u001b[32m        ●───────┼───────────┼───────────┼\u001b[0m
\u001b[0m\u001b[32m        │\u001b[0m
\u001b[0m\u001b[32m        └─ \u001b[42m\u001b[30m TEST \u001b[0m \u001b[32m✓\u001b[0m 8 min
\u001b[0m
\u001b[0m\u001b[33m                ●───────────┼───────────┼\u001b[0m
\u001b[0m\u001b[33m                │\u001b[0m
\u001b[0m\u001b[33m                └─ \u001b[43m\u001b[30m STAGING \u001b[0m \u001b[90m⋯ running\u001b[0m
```

**Tips:**
- Use time markers at top
- Color completed (green), current (yellow), waiting (gray)
- Visual flow left to right
- Include duration estimates

### Dashboard Grids

Multiple metrics in organized cells.

```javascript
\u001b[0m\u001b[90m┌─────────────┬────────────┬────────────\u001b[0m
\u001b[0m\u001b[90m│\u001b[0m \u001b[1m\u001b[32mSPRINT\u001b[0m    \u001b[90m│\u001b[0m \u001b[1m\u001b[33mREVIEWS\u001b[0m   \u001b[90m│\u001b[0m \u001b[1m\u001b[36mDEPLOYS\u001b[0m
\u001b[0m\u001b[90m│\u001b[0m \u001b[42m\u001b[30m 73% \u001b[0m     \u001b[90m│\u001b[0m \u001b[43m\u001b[30m 8 open \u001b[0m \u001b[90m│\u001b[0m \u001b[42m\u001b[30m 3 today \u001b[0m
\u001b[0m\u001b[90m│\u001b[0m           \u001b[90m│\u001b[0m           \u001b[90m│\u001b[0m
\u001b[0m\u001b[90m│\u001b[0m 22 of 30  \u001b[90m│\u001b[0m 3 urgent  \u001b[90m│\u001b[0m 2 planned
\u001b[0m\u001b[90m│\u001b[0m points    \u001b[90m│\u001b[0m 5 waiting \u001b[90m│\u001b[0m 1 hotfix
\u001b[0m\u001b[90m└─────────────┴────────────┴────────────\u001b[0m
```

**Tips:**
- Group related metrics in cells
- Color-code headers by category
- Use badges for primary metrics
- Great for at-a-glance status
- **Keep it clean** - don't overload

### Progress Indicators

Show multi-step workflows.

```javascript
\u001b[0m\u001b[32m[✓]──[✓]──[●]──[ ]──[ ]\u001b[0m
\u001b[0m │    │    │    │    │
\u001b[0m \u001b[32m1    2\u001b[0m    \u001b[33m3\u001b[0m    \u001b[90m4    5\u001b[0m
```

**Tips:**
- [✓] = completed, [●] = current, [ ] = pending
- Color completed green, current yellow, pending gray
- Show step numbers below
- Keep to 5-7 steps max

### Feature Flag Matrix

Show boolean states across environments.

```javascript
\u001b[0m                  \u001b[90mDEV\u001b[0m   \u001b[33mSTAGE\u001b[0m  \u001b[32mPROD\u001b[0m
\u001b[0m                  ───   ─────  ────
\u001b[0m\u001b[1mDark Mode\u001b[0m         \u001b[32m✓\u001b[0m     \u001b[32m✓\u001b[0m      \u001b[31m×\u001b[0m
\u001b[0m\u001b[1mNew Auth\u001b[0m          \u001b[32m✓\u001b[0m     \u001b[32m✓\u001b[0m      \u001b[32m✓\u001b[0m
\u001b[0m\u001b[1mBeta Features\u001b[0m     \u001b[32m✓\u001b[0m     \u001b[31m×\u001b[0m      \u001b[31m×\u001b[0m
\u001b[0m\u001b[1mAnalytics 2.0\u001b[0m     \u001b[32m✓\u001b[0m     \u001b[32m✓\u001b[0m      \u001b[33m50%\u001b[0m
```

**Tips:**
- \u001b[32m✓\u001b[0m = enabled, \u001b[31m×\u001b[0m = disabled, \u001b[33m%\u001b[0m = partial
- Align columns carefully
- Color environment headers
- Good for configuration comparison

### Code Diffs

Show file changes with line numbers.

```javascript
\u001b[0m\u001b[90m  12\u001b[0m   "dependencies": {
\u001b[0m\u001b[31m- 13\u001b[0m     "react": "^17.0.2",
\u001b[0m\u001b[32m+ 13\u001b[0m     "react": "^18.2.0",
\u001b[0m\u001b[31m- 14\u001b[0m     "react-dom": "^17.0.2",
\u001b[0m\u001b[32m+ 14\u001b[0m     "react-dom": "^18.2.0",
\u001b[0m\u001b[90m  15\u001b[0m     "axios": "^1.6.0",
```

**Tips:**
- Gray for unchanged lines
- Red `-` for deletions
- Green `+` for additions
- Include line numbers
- Limit to 10-15 lines visible

### Alert Boxes with Severity

Use double-line for critical, single for others.

```javascript
// Critical (double-line box)
\u001b[0m\u001b[31m╔═ 🔥 CRITICAL ═══════════════════════\u001b[0m
\u001b[0m\u001b[31m║\u001b[0m
\u001b[0m\u001b[31m║\u001b[0m \u001b[41m\u001b[97m ALERT-001 \u001b[0m Database connection pool exhausted
\u001b[0m\u001b[31m║\u001b[0m \u001b[90mTriggered:\u001b[0m 3 minutes ago
\u001b[0m\u001b[31m║\u001b[0m \u001b[90mAffected:\u001b[0m Production DB (us-west-2)
\u001b[0m\u001b[31m║\u001b[0m
\u001b[0m\u001b[31m╚══════════════════════════════════════\u001b[0m

// Warning (single-line box)
\u001b[0m\u001b[33m┌─ ⚠ WARNING ──────────────────────────\u001b[0m
\u001b[0m\u001b[33m│\u001b[0m
\u001b[0m\u001b[33m│\u001b[0m \u001b[43m\u001b[30m ALERT-002 \u001b[0m High memory usage (87%)
\u001b[0m\u001b[33m│\u001b[0m \u001b[90m12 minutes ago • app-server-03\u001b[0m
\u001b[0m\u001b[33m│\u001b[0m
\u001b[0m\u001b[33m└──────────────────────────────────────\u001b[0m
```

**Tips:**
- Double-line (╔═╗) = critical only
- Single-line (┌─┐) = everything else
- Color by severity: red, yellow, cyan, gray
- Include timestamp and affected system

### Calendar/Schedule

Show dates with highlights.

```javascript
\u001b[0m\u001b[90mMON   TUE   WED   THU   FRI   SAT   SUN\u001b[0m
\u001b[0m───   ───   ───   ───   ───   ───   ───
\u001b[0m\u001b[33m11\u001b[0m    12    \u001b[32m13\u001b[0m    14    \u001b[32m15\u001b[0m    16    17
\u001b[0m\u001b[33m•\u001b[0m           \u001b[32m••\u001b[0m          \u001b[32m•\u001b[0m
\u001b[0m
\u001b[0m18    19    20    \u001b[31m21\u001b[0m    22    23    24
\u001b[0m                  \u001b[31m•\u001b[0m
```

**Tips:**
- Highlight current day (yellow)
- Green dots for regular events
- Red for critical/major events
- Keep compact

## General Component Guidelines

### Information Density

**Good density:**
- Tables with 3-5 columns
- Dashboard grids with 2-3 rows
- Lists with 5-8 items

**Too busy (avoid):**
- Kanban with too many cards
- Tables with 8+ columns
- More than 2 grids stacked

### Visual Hierarchy

**Priority order:**
1. **Color** - Draw attention (red > yellow > green)
2. **Position** - Top and left are seen first
3. **Size/Bold** - Headers and important items
4. **Contrast** - Bright vs muted

### When to Use Each Component

- **Tables**: Comparing structured data (3+ items)
- **Trees**: Showing hierarchies and dependencies
- **Timelines**: Sequential processes with time
- **Dashboards**: Multiple metrics overview
- **Progress**: Multi-step workflows
- **Matrix**: Boolean states across dimensions
- **Diffs**: Code/config changes
- **Alerts**: Time-sensitive issues
- **Calendar**: Date-based scheduling

### Color Semantics

Consistent meanings across all components:
- **Red** (`\u001b[31m`, `\u001b[41m`): Critical, error, urgent, breaking
- **Yellow** (`\u001b[33m`, `\u001b[43m`): Warning, current, in-progress
- **Green** (`\u001b[32m`, `\u001b[42m`): Success, complete, safe, IDs
- **Cyan** (`\u001b[36m`, `\u001b[46m`): Info, headers, primary sections
- **Gray** (`\u001b[90m`, `\u001b[100m`): Muted, secondary, borders
- **Magenta** (`\u001b[35m`): Special categories (meetings, etc)

### Component Mixing

You can combine components effectively:
```javascript
// Header with summary
\u001b[0m\u001b[36m┌─ Deployment Status ──────────────────\u001b[0m
\u001b[0m\u001b[36m│\u001b[0m Pipeline \u001b[90m•\u001b[0m Stage 3 of 4 \u001b[90m•\u001b[0m 75% complete

// Timeline
\u001b[0m[timeline here]

// Table of affected services
\u001b[0m[table here]

// Bottom summary
\u001b[0m\u001b[1mRecommendation:\u001b[0m Wait for staging tests
```

## Your Task

When styling an AskUserQuestion prompt:

1. **Choose the right component** based on data type
2. **Use left-side-only boxes** for sections
3. **Apply consistent color scheme** (cyan/green/yellow/gray/red)
4. **Make IDs green** for easy scanning
5. **Use badges** for counts and status
6. **Start EVERY line with `\u001b[0m`**
7. **Keep it professional** (minimal emojis in questions)
8. **Test readability** - ensure good contrast
9. **Balance density** - not too sparse, not too busy
10. **Use semantic colors** - consistent meanings

Remember: The goal is **fast decision-making** through clear visual hierarchy!