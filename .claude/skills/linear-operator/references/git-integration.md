# Git Integration Workflows

Comprehensive guide to integrating Linear with GitHub and GitLab.

## Overview

Linear integrates with GitHub and GitLab to:
- Automatically link issues to PRs/MRs
- Update issue status based on PR/MR events
- Post linkbacks to issues
- Track review status
- Automate workflows

## GitHub Integration

### Setup

1. Navigate to Settings > Workspace > Integrations > GitHub
2. Click Enable and authorize Linear
3. Install Linear GitHub app in your repositories
4. Configure workflow automation per team

### Linking Issues to Pull Requests

**Method 1: Branch name (recommended)**:
```
1. In Linear, copy git branch name (Cmd/Ctrl + Shift + .)
   Format: username/issue-id-issue-title
   Example: alice/ENG-123-fix-login-bug

2. Create branch with that name
   git checkout -b alice/ENG-123-fix-login-bug

3. Linear auto-links when PR is created
```

**Method 2: PR title**:
```
Include issue ID in PR title:
"[ENG-123] Fix login validation bug"
```

**Method 3: Magic words in PR description**:
```
Closes ENG-123
Fixes ENG-456
Resolves DESIGN-789
```

**Method 4: PR body magic words**:
```
# Closing magic words (will close issue on merge)
close, closes, closed, closing
fix, fixes, fixed, fixing
resolve, resolves, resolved, resolving
complete, completes, completed, completing

# Non-closing magic words (links but doesn't auto-close)
ref, references
part of, related to
contributes to, towards
```

### Link Multiple Issues

**Single PR, multiple issues**:
```
PR description:
Fixes ENG-123, ENG-456
Closes DESIGN-789

or

Fixes ENG-123
Fixes ENG-456
Resolves DESIGN-789
```

### Workflow Automation

**Configure per team** (Settings > Team > Workflow):

**Automation events**:
1. **On git branch copy**:
   - Auto-assign to self (preferences)
   - Move to Started status (preferences)

2. **On PR draft**:
   - Move to specific status (e.g., "In Progress")

3. **On PR ready for review**:
   - Move to "In Review" status
   - Request review from team

4. **On PR approved**:
   - Move to "Ready to Merge" status
   - Add label

5. **On PR merged**:
   - Move to "Done" status
   - Add completion comment

6. **On PR closed (without merge)**:
   - Move back to previous status
   - Add comment

**Branch-specific rules**:
```
# Configure different automations for branches
Target branch: main
  On merge → Move to "Deployed"

Target branch: staging
  On merge → Move to "In QA"

Target branch: develop
  On merge → Move to "Merged"
```

**Example configuration**:
```
Team: Engineering

Git branch copy:
  ✓ Auto-assign to me
  ✓ Move to "In Progress"

PR draft:
  → No action

PR ready for review:
  → Move to "In Review"

PR approved:
  → Move to "Ready to Merge"

PR merged (main):
  → Move to "Done"

PR merged (staging):
  → Move to "In QA"

PR closed:
  → Move to "In Progress"
```

### Issue Linkbacks

**GitHub linkback features**:
- Linear posts comment on PR with issue details
- Shows issue title, description, labels
- Updates automatically when issue changes
- Shows reviewer avatars and review status

**Linkback appearance**:
```
Linear Issue: ENG-123 Fix login validation bug
Status: In Progress
Priority: High
Labels: bug, urgent

Description:
Users unable to login when email contains special characters...

[View in Linear →]
```

### PR Status in Linear

**When viewing an issue**:
- See all linked PRs
- PR status (draft, open, approved, merged)
- Reviewer avatars (up to 3)
- Review states (approved, changes requested, pending)
- CI status (passing, failing)

## GitLab Integration

### Setup

1. Navigate to Settings > Workspace > Integrations > GitLab
2. Generate GitLab API token:
   - GitLab > User Settings > Personal Access Token
   - Set scope: `api` (full access) or `read_api` (read-only)
3. Enter token in Linear
4. (Optional) Enter custom URL for self-hosted GitLab
5. Copy webhook URL from Linear
6. Add webhook to GitLab (group or project level):
   - Paste Linear webhook URL
   - Enable triggers: Push events, Comments, MR events, Pipeline events
   - Enable SSL verification

### Linking Merge Requests

**Method 1: Branch format**:
```
1. Set branch format in Linear settings
2. Copy git branch name (Cmd/Ctrl + Shift + .)
3. Create branch with that name
```

**Method 2: MR title**:
```
Include issue ID in MR title:
"ENG-123: Fix authentication flow"
```

**Method 3: Magic words in MR description**:
```
Fixes ENG-123
Closes DESIGN-456
```

**Link multiple issues**:
```
Fixes ENG-123, ENG-456, DESIGN-789
```

### Workflow Automation

**Configure per team** (Settings > Team > Workflow):

Similar to GitHub, with GitLab-specific events:
- On MR draft
- On MR ready for review
- On MR approved
- On MR merged (with branch-specific rules)
- On pipeline success/failure

**Pipeline automation**:
```
Requires:
- Pipeline events enabled in webhook
- Merge request pipelines (not branch pipelines)
- "Pipelines must succeed" checked in project settings

Then configure:
On pipeline success:
  → Move to "Ready to Merge"

On pipeline failure:
  → Move to "Needs Work"
```

### Branch-Specific Rules

**Example**:
```
Target branch: main
  On merge → Move to "Deployed"

Target branch: staging
  On merge → Move to "In QA"

Target branch: ^fea/.*  (regex)
  On merge → Move to "Feature Complete"
```

## Commit Integration

### Commit Message Linking

**Link commits to issues**:
```
git commit -m "ENG-123: Fix login validation"
```

**Multiple issues**:
```
git commit -m "Fixes ENG-123, ENG-456: Update auth flow"
```

**Magic words in commits**:
```
git commit -m "Closes ENG-123: Complete feature implementation"
```

### Commit Display in Linear

- All linked commits shown in issue
- Commit SHA, message, author
- Link to GitHub/GitLab commit
- Timeline of commits

## Automation Best Practices

### Recommended Setup

**Developer preferences** (Settings > Preferences):
```
✓ On git branch copy, auto-assign to me
✓ On git branch copy, move to "In Progress"
```

**Team workflow** (Settings > Team > Workflow):
```
On PR/MR ready for review:
  → Move to "In Review"

On PR/MR merged to main:
  → Move to "Done"

On PR/MR closed (not merged):
  → Move to "In Progress"  (or previous status)
```

**Branch-specific**:
```
main → "Deployed" or "Done"
staging/develop → "In QA" or "Testing"
```

### When to Use Non-Closing Magic Words

**Use closing words** (`Fixes`, `Closes`):
- PR/MR fully implements the issue
- Issue should close when merged

**Use non-closing words** (`References`, `Part of`):
- PR/MR partially addresses issue
- Multiple PRs needed for one issue
- Want to track link without auto-closing

**Example**:
```
PR 1 description: "References ENG-123: Implement API endpoint"
PR 2 description: "References ENG-123: Add frontend UI"
PR 3 description: "Closes ENG-123: Add tests and docs"

Only PR 3 will close the issue, but all are linked.
```

## Advanced Patterns

### Multi-Repo Workflows

**Issue spans multiple repos**:
```
1. Create issue in Linear
2. Create branches in each repo with same issue ID
3. Link PRs from each repo to issue
4. Use "References" in all but final PR
5. Use "Closes" in final PR that completes work
```

### Monorepo Patterns

**Feature across multiple packages**:
```
1. Create parent issue for feature
2. Create sub-issues for each package
3. Link PRs to appropriate sub-issues
4. Parent tracks overall progress
```

### Release Workflows

**Tracking releases**:
```
1. Create project or milestone issue for release
2. Link all feature PRs
3. Use non-closing words so release issue stays open
4. Close release issue when deployed

PR descriptions:
"Part of RELEASE-123: Add feature X"
```

### Hotfix Workflows

**Urgent fixes**:
```
1. Create issue with "urgent" label
2. Copy git branch name
   (Auto-assigns and moves to "In Progress")
3. Create PR targeting production branch
4. Link with "Fixes ISSUE-123"
5. Merge PR
   (Auto-moves to "Deployed" if configured)
```

## Troubleshooting

### PR Not Linking

**Check**:
- Issue ID format correct (TEAM-123)
- Issue ID in title or description
- Using magic words properly
- GitHub/GitLab integration enabled
- Repository included in integration

**Solutions**:
- Add issue ID to PR description manually
- Use magic word: "Fixes TEAM-123"
- Verify integration settings
- Check webhook delivery in GitHub/GitLab

### Automation Not Working

**Check**:
- Team workflow settings configured
- Branch pattern matches (for branch-specific rules)
- Webhook events enabled
- Integration has required permissions

**Solutions**:
- Review team workflow configuration
- Test with simple PR
- Check webhook logs
- Re-authorize integration

### Wrong Status Update

**If automation moved issue to wrong state**:
1. Manually correct status: `update_issue(id="...", state="correct-state")`
2. Review workflow automation settings
3. Adjust rules if needed

**Prevent**:
- Use non-closing magic words for partial work
- Configure branch-specific rules properly
- Review automation before merging

## Integration Limits

**GitHub**:
- Requires GitHub app installation
- Works with public and private repos
- Free on all Linear plans

**GitLab**:
- Requires API token
- Supports self-hosted (v15.6+)
- Needs public Internet access for self-hosted
- Token scope determines features (api vs read_api)

**Linear IPs** (for firewall rules):
```
35.231.147.226
35.243.134.228
34.140.253.14
34.38.87.206
34.134.222.122
35.222.25.142
```

## Tips for Teams

### Onboarding Developers

**Setup checklist**:
1. Enable integration in workspace
2. Configure team workflow automation
3. Set developer preferences (auto-assign, auto-status)
4. Share branch naming convention
5. Document team's magic word preferences
6. Test with sample issue/PR

### Team Conventions

**Establish team standards**:
- Branch naming: Follow Linear format or custom
- PR description template with issue link
- When to use closing vs non-closing words
- Review workflow and automation triggers
- Labels for deployment stages

### Code Review Integration

**Link reviews to Linear**:
1. PR created → Issue moves to "In Review"
2. Review comments visible in GitHub/GitLab
3. Linear shows review status on issue
4. On approval → Issue moves to "Approved"
5. On merge → Issue moves to "Done"

**Reviewer workflow**:
- See issue context in PR via linkback
- Reference issue in review comments
- Status updates happen automatically

---

*Reference this guide for seamless git workflow integration with Linear.*
