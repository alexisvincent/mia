# Separators

Visual separators for dividing content sections and marking transitions.

## Horizontal Lines

Simple horizontal separators using dashes.

### XML Syntax
```xml
<separator/>
<separator width="60"/>
```

### Rendering

Standard separator (gray, ~80 chars):
```
\u001b[0m\u001b[90m──────────────────────────────────────────────────────────────────────────────────\u001b[0m
```

Shorter separator:
```
\u001b[0m\u001b[90m────────────────────────────────────────────────────────\u001b[0m
```

## Date Headers

Date headers with separator line, used in message timelines.

### XML Syntax
```xml
<date-header>Jan 10</date-header>
<date-header>Jan 11</date-header>
```

### Rendering

```
\u001b[0m\u001b[90mJan 10 ---\u001b[0m
\u001b[0m\u001b[90mJan 11 ---\u001b[0m
```

Format: `{Date} ---` in gray color

## Section Separators

Labeled separators for transitions within content.

### XML Syntax
```xml
<section-separator>New Messages</section-separator>
```

### Rendering

```
\u001b[0m\u001b[90m--- New Messages ────────────────────────────────────────────────────────\u001b[0m
```

Format: `--- {Label} ────────────` (dashes fill to ~80 chars total)

## Usage Examples

### In Message Boxes

Date headers separate messages by date:
```
\u001b[0m\u001b[34m│\u001b[0m \u001b[90mJan 10 ---\u001b[0m
\u001b[0m\u001b[34m│\u001b[0m \u001b[90m14:30\u001b[0m \u001b[34mThem\u001b[0m Can you review?
\u001b[0m\u001b[34m│\u001b[0m \u001b[90m15:45\u001b[0m \u001b[32mYou\u001b[0m  Will do
```

Section separator marks historical vs new messages:
```
\u001b[0m\u001b[34m│\u001b[0m \u001b[90m14:30\u001b[0m \u001b[34mThem\u001b[0m Old message
\u001b[0m\u001b[34m│\u001b[0m \u001b[90m--- New Messages ────────────────────────────────────────────────────────\u001b[0m
\u001b[0m\u001b[34m│\u001b[0m \u001b[90m09:00\u001b[0m \u001b[32mYou\u001b[0m  New message
```

### Between Sections

Between boxes or major sections:
```
\u001b[0m\u001b[33m└──────────────────────────────────────────────────────────────────────────────────\u001b[0m
\u001b[0m
\u001b[0m\u001b[35m┌─ Recommendations ────────────────────────────────────────────────────────────────\u001b[0m
```

Note: Typically just a blank line (`\u001b[0m`) is sufficient between boxes.

## Styling Guidelines

- **Color**: Always gray (`\u001b[90m`) for separators
- **Width**: Aim for ~80 characters
- **Consistency**: Use same width as surrounding boxes
- **Placement**: Inside boxes (as content) or between sections

## Date Format

Keep dates concise:
- `Jan 10` (short month + day)
- `Jan 11`
- NOT `January 10, 2025` (too long)

## Label Format

Section separator labels should be:
- Concise (1-3 words)
- Clear purpose ("New Messages", "Today", "This Week")
- Title case

## Padding

Separators within boxes get the standard content padding:
```
\u001b[0m\u001b[34m│\u001b[0m \u001b[90m--- New Messages ────────────────────────────────────────────────────────\u001b[0m
```

Note the space after `│` before the separator.
