# Mission Directory Structure Guide

This guide explains how to organize files within a mission directory.

---

## Basic Structure

Every mission follows this base structure:

```
XX-mission-name/
├── README.md           # User-facing mission brief
├── CLAUDE.md           # AI guidance and teaching strategy
└── [practice files]    # Varies by mission
```

---

## Naming Conventions

### Mission Directory
```
XX-mission-name/
```
- `XX` = Two-digit number (01, 02, ..., 09, 10, etc.)
- `mission-name` = Lowercase, hyphen-separated
- Examples: `06-text-object-mastery`, `08-lsp-investigation`

### Practice Files
- **Code files**: Use realistic names that fit the story
  - ✅ `surveillance-logs.js`, `evidence-tracker.py`
  - ❌ `practice1.js`, `test-file.py`

- **Challenge files**: Descriptive of the task
  - ✅ `text-object-arena.js`, `motion-training.c`
  - ❌ `challenge.js`, `exercise.txt`

- **Data files**: Match the scenario
  - ✅ `case-files/`, `investigation-notes.md`
  - ❌ `data/`, `sample.txt`

---

## Common Patterns by Mission Type

### Pattern 1: Single Practice File
**Used by**: Simple skill-focused missions

```
04-vim-motions/
├── README.md
├── CLAUDE.md
└── motion-training.c      # Single file with challenges
```

**When to use**: Teaching one focused skill (motions, visual mode)

---

### Pattern 2: Progressive Challenges
**Used by**: Missions with difficulty levels

```
06-text-object-mastery/
├── README.md
├── CLAUDE.md
├── text-object-arena.js   # Main challenge file
└── .arena-scorecard.md    # Score tracking
```

**When to use**: Game-based or scored challenges

---

### Pattern 3: Multiple Practice Files
**Used by**: Missions teaching several related skills

```
05-visual-mastery/
├── README.md
├── CLAUDE.md
├── visual-practice-1.py   # Basic challenges
├── visual-practice-2.js   # Intermediate
└── visual-practice-3.go   # Advanced
```

**When to use**: Multiple related skills, progressive difficulty

---

### Pattern 4: Realistic Codebase
**Used by**: Advanced missions simulating real work

```
08-lsp-investigation/
├── README.md
├── CLAUDE.md
├── src/
│   ├── parser.py
│   ├── analyzer.js
│   └── utils.ts
├── tests/
│   └── test_parser.py
└── docs/
    └── architecture.md
```

**When to use**: LSP, refactoring, or multi-file navigation missions

---

### Pattern 5: Data Collection/Analysis
**Used by**: Missions focused on search/find

```
03-telescope-search/
├── README.md
├── CLAUDE.md
├── case-files/
│   ├── suspect-1.md
│   ├── suspect-2.md
│   └── suspect-3.md
├── evidence/
│   ├── logs.txt
│   └── timestamps.csv
└── investigation-notes.md
```

**When to use**: Telescope, grep, file finding missions

---

### Pattern 6: Configuration/Setup
**Used by**: Missions teaching tool setup

```
02-arsenal-diagnostics/
├── README.md
├── CLAUDE.md
├── diagnostic-checklist.md
└── config-templates/
    ├── telescope-config.lua
    ├── lsp-config.lua
    └── [10 more configs]
```

**When to use**: Setup verification, configuration missions

---

## File Organization Best Practices

### 1. Group Related Files
```
✅ GOOD:
mission/
├── challenges/
│   ├── level-1.js
│   ├── level-2.js
│   └── level-3.js

❌ BAD:
mission/
├── level-1.js
├── level-2.js
├── level-3.js
├── other-stuff.md
```

### 2. Use Hidden Files for Metadata
```
✅ GOOD:
.arena-scorecard.md    # Score tracking (hidden)
.solution-key.md       # Answer guide (hidden)
.tokens-found.md       # Progress tracking (hidden)

❌ BAD:
scorecard.md           # Visible, clutters directory
answers.md             # Too obvious, spoils challenge
```

### 3. Separate Data from Practice
```
✅ GOOD:
mission/
├── README.md
├── CLAUDE.md
├── data/              # Data to search/analyze
│   └── logs.txt
└── practice.js        # Code to edit

❌ BAD:
mission/
├── README.md
├── everything-in-one-file.js  # Data + practice mixed
```

### 4. Use Subdirectories for Complexity
```
✅ GOOD - Complex mission:
08-lsp-investigation/
├── README.md
├── CLAUDE.md
└── src/
    ├── core/
    │   ├── parser.py
    │   └── analyzer.py
    └── utils/
        └── helpers.py

✅ GOOD - Simple mission:
04-vim-motions/
├── README.md
├── CLAUDE.md
└── motion-training.c

❌ BAD - Over-organized simple mission:
04-vim-motions/
├── README.md
├── CLAUDE.md
└── challenges/
    └── basic/
        └── level-1/
            └── motion-training.c
```

---

## Naming Practice Files

### Connect to Story
```
✅ GOOD:
surveillance-logs.js       # Fits detective theme
evidence-tracker.py        # Investigation context
case-notes.md             # Story integration

❌ BAD:
practice.js               # Generic, boring
test-file.py              # No story connection
exercise1.md              # Numbered, impersonal
```

### Be Descriptive
```
✅ GOOD:
text-object-refactoring.js    # Clear what you practice
buffer-workflow.py            # Describes the skill
visual-block-editing.c        # Specific technique

❌ BAD:
practice.js                   # What practice?
file.py                       # What's in it?
code.c                        # Too vague
```

### Use Realistic Extensions
```
✅ GOOD:
parser.py          # Real Python code
api-client.js      # Real JavaScript
config.lua         # Real Neovim config

❌ BAD:
practice.txt       # Not real code
exercise.md        # Use actual language
challenge.fake     # Unrealistic
```

---

## Special Files

### Optional but Recommended

**Progress Tracking:**
```
.tokens-found.md          # Hidden token discovery log
.mission-progress.md      # Completion checklist
.scorecard.md            # Performance tracking
```

**Reference Materials:**
```
cheatsheet.md            # Quick command reference
tips.md                  # Pro tips for mission
hints.md                 # Progressive hints (optional, usually in CLAUDE.md)
```

**Story Elements:**
```
dr-vimsworth-notes.md    # Her personal logs
investigation-log.md     # Your detective notes
case-file.md            # Background information
```

---

## Size Guidelines

### Small Mission (Teaching 1-2 concepts)
```
mission/
├── README.md          (~200-400 lines)
├── CLAUDE.md          (~200-400 lines)
└── practice-file.ext  (~100-300 lines)

Total: 3 files, ~500-1100 lines
```

### Medium Mission (Teaching 3-5 concepts)
```
mission/
├── README.md              (~300-600 lines)
├── CLAUDE.md              (~400-800 lines)
├── practice-1.ext         (~100-200 lines)
├── practice-2.ext         (~100-200 lines)
└── data/
    └── reference.txt      (~50-100 lines)

Total: 5+ files, ~1000-2000 lines
```

### Large Mission (Teaching 6+ concepts or complex workflows)
```
mission/
├── README.md              (~400-800 lines)
├── CLAUDE.md              (~600-1200 lines)
├── src/
│   ├── module1.ext        (~200-400 lines)
│   ├── module2.ext        (~200-400 lines)
│   └── module3.ext        (~200-400 lines)
├── tests/
│   └── test-suite.ext     (~100-200 lines)
└── docs/
    └── architecture.md    (~100-200 lines)

Total: 8+ files, ~2000-4000 lines
```

---

## Examples from Existing Missions

### Mission 04: Vim Motions (Simple)
```
04-vim-motions/
├── README.md               # 247 lines
├── CLAUDE.md               # 358 lines
└── motion-training.c       # 186 lines

Pattern: Single practice file
Why: Focused skill practice
```

### Mission 06: Text Objects (Game-based)
```
06-text-object-mastery/
├── README.md                    # 312 lines
├── CLAUDE.md                    # 421 lines
├── text-object-arena.js         # 178 lines (5 challenges)
└── .arena-scorecard.md          # 45 lines (hidden)

Pattern: Progressive challenges with scoring
Why: Gamified learning with feedback
```

### Mission 08: LSP (Complex)
```
08-lsp-investigation/
├── README.md                # 389 lines
├── CLAUDE.md                # 642 lines
└── src/
    ├── parser.py            # 245 lines
    ├── analyzer.js          # 198 lines
    ├── utils.ts             # 167 lines
    └── config.lua           # 89 lines

Pattern: Realistic multi-file codebase
Why: Simulate real development workflow
```

---

## Checklist: Organizing Your Mission

Before finalizing, verify:

- [ ] Directory name follows `XX-mission-name` format
- [ ] README.md and CLAUDE.md present
- [ ] Practice files have realistic, story-connected names
- [ ] File extensions match actual languages used
- [ ] Hidden files (`.`) used for metadata/tracking
- [ ] Subdirectories used only when complexity requires
- [ ] Total file count reasonable (3-15 files typical)
- [ ] Total line count appropriate for mission scope
- [ ] Files grouped logically (data/, src/, tests/, etc.)
- [ ] No unnecessary nesting (avoid dir/subdir/subdir/file.ext)

---

## Anti-Patterns to Avoid

❌ **Too many files for simple mission:**
```
simple-mission/
├── README.md
├── CLAUDE.md
├── challenge1.js
├── challenge2.js
├── challenge3.js
├── challenge4.js
├── challenge5.js
└── challenge6.js

Better: Combine into single file with labeled sections
```

❌ **Over-organized flat structure:**
```
complex-mission/
├── README.md
├── CLAUDE.md
├── file1.py
├── file2.py
├── file3.js
├── file4.js
├── file5.ts
├── file6.ts
└── data.txt

Better: Group by type (src/, tests/, data/)
```

❌ **Generic names:**
```
mission/
├── practice.js       # What practice?
├── exercise.py       # Exercise for what?
└── data.txt          # What data?

Better:
├── visual-block-refactoring.js
├── motion-drills.py
└── case-file-evidence.txt
```

---

## Quick Reference

| Mission Type | File Count | Pattern | Example |
|--------------|-----------|---------|---------|
| Simple skill | 3 files | Single practice file | Mission 04 |
| Game/challenge | 4-5 files | Progressive + scorecard | Mission 06 |
| Multi-skill | 5-8 files | Multiple practice files | Mission 05 |
| Realistic workflow | 8-15 files | src/tests/docs structure | Mission 08 |
| Search/find | 6-10 files | data/ + practice | Mission 03 |
| Setup/config | 4-6 files | templates/ + guide | Mission 02 |

---

**Remember**: File organization should serve the learning goals, not complicate them.
