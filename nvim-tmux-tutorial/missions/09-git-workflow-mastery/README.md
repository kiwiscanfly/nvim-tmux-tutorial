# Mission 09: Git Workflow Mastery 🔀

```
╔═══════════════════════════════════════════════════════════╗
║  MISSION BRIEFING                                         ║
║  Codename: VERSION CONTROL FORENSICS                      ║
║  Clearance: Level 2                                       ║
║  Status: ACTIVE                                           ║
╚═══════════════════════════════════════════════════════════╝
```

## 📋 The Case

**Forensic Analysis Report - Version Control Division**

Dr. Vimsworth's git commit patterns reveal an obsessive attention to granular change tracking. Analysis of her repository logs shows:
- **476 commits** in her final 3 months (5.3 commits per day average)
- **87% of commits** had hunks staged selectively (not full-file commits)
- **Real-time diff monitoring** - her editor was configured to show git status inline
- **Zero merge conflicts** in 18 months despite rapid iteration

**Why such meticulous version control?** A note in her commit templates:

> "Each change is evidence. Stage deliberately. Commit atomically. The diff tells the story the code can't." - Dr. Vimsworth's `.gitmessage`

**The git integration isn't just version control - it's a forensic timeline.** She treated every code modification as evidence in an investigation, documenting intent and isolating changes with surgical precision.

Her Neovim configuration shows advanced git integration: inline diff indicators, hunk-level staging, and blame annotations. She could see **what** changed, **when** it changed, and **who** changed it without leaving her editor.

**Your mission**: Master the git workflow tools she relied on. Learn to navigate changes, stage hunks selectively, and maintain a forensic-quality commit history - all from within Neovim.

## 🎯 Objectives

- [ ] Navigate between changed hunks using keybindings
- [ ] Preview diffs inline without switching to terminal
- [ ] Stage and unstage individual hunks (not full files)
- [ ] View git blame to trace code history
- [ ] Reset unwanted changes at hunk-level precision
- [ ] Understand Dr. Vimsworth's atomic commit philosophy

## 🛠️ Your Tools / Essential Commands

**mini.diff Navigation:**
```vim
]h                  # Jump to next hunk (changed section)
[h                  # Jump to previous hunk
]H                  # Jump to last hunk in file
[H                  # Jump to first hunk in file
```

**Diff Visualization:**
```vim
:lua MiniDiff.toggle_overlay()   # Show/hide inline diff overlay
gh                               # Apply or reset hunk under cursor
```

**Git Blame & History:**
```bash
:!git blame %                   # Show who changed each line
:!git log -p %                  # Show file history with diffs
:!git diff %                    # Show unstaged changes for current file
:!git diff --staged %           # Show staged changes for current file
```

**Hunk-Level Staging (Terminal):**
```bash
git add -p <file>               # Interactive hunk staging (patch mode)
git reset -p <file>             # Interactive hunk unstaging
```

**Status & Overview:**
```vim
:!git status                    # Overview of all changes
:!git diff --stat               # Summary of changed files
```

## 📊 Challenges / Practice Exercises

### 1. Hunk Navigation Drill (forensic-timeline.js)

**Scenario**: You've inherited Dr. Vimsworth's partially-refactored codebase. Multiple functions were modified, but some changes are complete while others are experimental.

- **Target**: Navigate through all changed hunks and identify which modifications are production-ready
- **Dr. Vimsworth's Method**: She used `]h` and `[h` to jump between changes, reviewing each hunk's purpose before committing
- **Why**: Rapid hunk navigation prevents accidental commits of incomplete work

**Practice**:
1. Open `forensic-timeline.js`
2. Make several small edits in different functions
3. Use `]h` to jump through all changes
4. Preview each hunk's diff with overlay toggle

### 2. Selective Staging (evidence-processor.py)

**Scenario**: You've made debugging changes mixed with production fixes. Dr. Vimsworth's logs show she never committed debug code - she staged hunks selectively.

- **Target**: Stage only production-ready changes, leaving debug code uncommitted
- **Dr. Vimsworth's Method**: Hunk-level staging with `git add -p`, reviewing each change individually
- **Why**: Atomic commits create a clean forensic timeline

**Practice**:
1. Open `evidence-processor.py`
2. Add both bug fixes and debug print statements
3. Save the file
4. Use `:!git add -p %` to stage only the fixes
5. Verify with `:!git diff --staged %`

### 3. Blame Investigation (legacy-analyzer.ts)

**Scenario**: A critical function has mysterious behavior. Find out who introduced the logic and when.

- **Target**: Identify the commit and author responsible for the `parseEvidence` function logic
- **Dr. Vimsworth's Method**: Inline blame annotations to trace code lineage
- **Why**: Understanding code history reveals intent and context

**Practice**:
1. Open `legacy-analyzer.ts`
2. Navigate to `parseEvidence` function
3. Run `:!git blame %` to see authorship
4. Find which lines were added by Dr. Vimsworth
5. Use `:!git log -p %` to see her original commit message

### 4. Hunk Reset Precision (data-cleanser.js)

**Scenario**: You experimented with three different approaches but only one is correct. Undo the failed attempts without losing the good work.

- **Target**: Reset specific hunks while preserving others
- **Dr. Vimsworth's Method**: Hunk-level resets using `git reset -p`
- **Why**: Surgical undo prevents losing valuable changes

**Practice**:
1. Open `data-cleanser.js`
2. Make intentional mistakes in some functions, fixes in others
3. Use `:!git add -p %` to stage only the fixes
4. Use `:!git reset -p %` if you staged something incorrectly
5. Verify final state with `:!git diff --staged %`

## 🏆 Success Criteria

**Mission Complete when:**
- [ ] Can navigate hunks with ]h/[h without looking up commands
- [ ] Successfully staged 3+ hunks selectively using `git add -p`
- [ ] Used blame to identify authorship of specific code sections
- [ ] Reset unwanted changes at hunk-level (not full-file)
- [ ] Understand why atomic commits matter for code forensics
- [ ] Can explain Dr. Vimsworth's "each change is evidence" philosophy

**Bonus:**
- [ ] Set up custom keybindings for faster hunk navigation
- [ ] Create a `.gitmessage` template for consistent commit formatting
- [ ] Stage hunks from different files in a single atomic commit

## ⏭️ Next Steps

```bash
cd ../10-ai-pair-programming
nvim README.md
```

**Investigation Note**: Dr. Vimsworth's git discipline wasn't paranoia - it was methodology. In her final weeks, she could trace every code change back to its origin. When you master version control forensics, you'll understand why that mattered.

The evidence is in the commits, Detective. Learn to read the timeline.
