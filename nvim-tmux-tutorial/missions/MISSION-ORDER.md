# Mission Order & Overview

## Current Mission Structure (Updated)

### Mission 01: Tmux Workflows ✅
**Path**: `missions/01-tmux-workflows/`
**Purpose**: Foundation - Workspace management
**Prerequisites**: None
**Outcome**: User can manage tmux sessions, windows, panes

### Mission 02: Arsenal Diagnostics ✅ NEW
**Path**: `missions/02-arsenal-diagnostics/`
**Purpose**: Interactive Neovim setup verification
**Prerequisites**: Mission 01 complete
**Outcome**: User's Neovim verified, AI has setup profile, tutorial adapted if needed
**Special**: 100% interactive - AI converses with user to check/fix setup

### Mission 03: Telescope Search (formerly Mission 02) ✅
**Path**: `missions/03-telescope-search/`
**Purpose**: Fast file and content finding
**Prerequisites**: Mission 02 complete (setup verified)
**Outcome**: User can find files and grep content
**Adaptation**: If no Telescope, AI teaches :find and :grep

### Mission 04: Vim Motions (formerly Mission 03) ✅
**Path**: `missions/04-vim-motions/`
**Purpose**: Efficient cursor movement and editing
**Prerequisites**: Mission 03 complete
**Outcome**: User masters basic vim motions and operators

### Mission 05: Visual Mastery (formerly Mission 04) ✅
**Path**: `missions/05-visual-mastery/`
**Purpose**: Visual mode selections and block editing
**Prerequisites**: Mission 04 complete
**Outcome**: User can use v, V, Ctrl+v for selections

### Mission 06: Advanced Text Objects ✅ NEW
**Path**: `missions/06-text-object-mastery/`
**Purpose**: mini.ai plugin - semantic text objects
**Prerequisites**: Mission 05 complete
**Outcome**: User can use af, if, aa, ia, etc.
**Special**: Text Object Arena game for practice
**Adaptation**: If no mini.ai, AI teaches standard text objects only

### Mission 07: Buffer Management (formerly Mission 05) ✅
**Path**: `missions/07-buffer-management/`
**Purpose**: Multi-file navigation
**Prerequisites**: Mission 06 complete
**Outcome**: User can manage multiple open files

### Mission 08: LSP Investigation (formerly Mission 06, old Mission 06) ✅
**Path**: `missions/08-lsp-investigation/`
**Purpose**: Language Server Protocol features
**Prerequisites**: Mission 07 complete
**Outcome**: User can use LSP features for navigation
**Adaptation**: If no LSP, AI teaches ctags and manual navigation

### Mission 09: Git Workflow Mastery 🆕
**Path**: `missions/09-git-workflow-mastery/`
**Purpose**: Version control integration with mini.diff
**Prerequisites**: Mission 02 complete (mini.diff detected)
**Outcome**: User masters hunk navigation, selective staging, git blame
**Special**: Custom mission created for users with mini.diff installed
**Skills**: `]h`/`[h` navigation, `git add -p`, blame investigation, atomic commits

### Mission 10: AI Pair Programming 🆕
**Path**: `missions/10-ai-pair-programming/`
**Purpose**: GitHub Copilot integration and AI-assisted coding
**Prerequisites**: Mission 02 complete (copilot.lua detected)
**Outcome**: User leverages AI suggestions while maintaining critical judgment
**Special**: Custom mission created for users with Copilot installed
**Skills**: Inline suggestions, alternatives cycling, critical review, boilerplate generation

### Mission 11: Code Formatting & Linting 🆕
**Path**: `missions/11-code-formatting-linting/`
**Purpose**: Automated code quality with conform.nvim
**Prerequisites**: Mission 02 complete (conform.nvim detected)
**Outcome**: User achieves zero-overhead formatting automation
**Special**: Custom mission created for users with conform.nvim installed
**Skills**: Format-on-save, multi-language formatting, formatter troubleshooting

---

## Key Changes Summary

### Added Missions
1. **Mission 02: Arsenal Diagnostics** - Interactive setup verification
2. **Mission 06: Advanced Text Objects** - mini.ai plugin with game-based learning
3. **Mission 09: Git Workflow Mastery** - mini.diff integration (custom)
4. **Mission 10: AI Pair Programming** - Copilot integration (custom)
5. **Mission 11: Code Formatting & Linting** - conform.nvim automation (custom)

### Renumbered Missions
- Old Mission 02 (Telescope) → Mission 03
- Old Mission 03 (Vim Motions) → Mission 04
- Old Mission 04 (Visual Mastery) → Mission 05
- Old Mission 05 (Buffer Management) → Mission 07
- Old Mission 06 (LSP Investigation) → Mission 08

### Mission 02 Special Behavior

**Mission 02 is INTERACTIVE and ADAPTIVE:**

The AI will:
1. Examine user's Neovim setup component-by-component
2. For each component, offer choice:
   - Install/fix the component (with guided help)
   - OR adapt the tutorial to work without it
3. Build a "user profile" of their setup
4. Use that profile to customize all future missions

**Components Examined:**
1. Plugin Manager (lazy.nvim, packer, vim-plug)
2. Fuzzy Finder (Telescope, fzf, :find)
3. File Explorer (Neo-tree, nvim-tree, netrw)
4. LSP (nvim-lspconfig + Mason)
5. Completion Engine (nvim-cmp)
6. Treesitter (nvim-treesitter)
7. Status Line (lualine, airline)
8. Git Integration (gitsigns, fugitive)
9. Formatter/Linter (null-ls, none-ls)
10. Snippet Engine (LuaSnip, UltiSnips)

**Why This Matters:**
- Prevents "nothing happens when I press Space+ff" frustration
- Respects user's existing setup choices
- Makes tutorial work for everyone (from minimal to full IDE)
- AI remembers their choices for all future missions

---

## Mission 02 Files Created

```
missions/02-arsenal-diagnostics/
├── README.md                          # Mission brief (tells user it's interactive)
├── CLAUDE.md                          # Comprehensive AI guidance (40+ pages)
├── component-guide.md                 # Reference: What each component does
├── .user-profile-template.md          # Template for tracking user's setup
└── config-templates/                  # Working config examples
    ├── README.md                      # Setup instructions
    ├── init.lua                       # Main entry point
    ├── lazy.lua                       # Plugin manager
    ├── telescope.lua                  # Fuzzy finder
    ├── neo-tree.lua                   # File explorer
    ├── lsp.lua                        # LSP configuration
    ├── cmp.lua                        # Completion
    ├── treesitter.lua                 # Syntax highlighting
    ├── mini-ai.lua                    # Text objects
    ├── keymaps.lua                    # Keybindings
    └── options.lua                    # Vim settings
```

---

## Mission 06 Files Created

```
missions/06-text-object-mastery/
├── README.md                          # Mission brief with game explanation
├── CLAUDE.md                          # AI coaching guidance
├── text-object-arena.js               # The game file (5 refactoring challenges)
└── .arena-scorecard.md                # Score tracking template
```

**Game Structure:**
- Level 1: Function extraction (15 keystroke par)
- Level 2: Argument reordering (20 keystroke par)
- Level 3: String simplification (10 keystroke par)
- Level 4: Object flattening (8 keystroke par)
- Level 5: Pattern refactoring (7 keystroke par - boss level)
- Total par: 50 keystrokes
- Medals: Gold (<60), Silver (<80), Bronze (<100)

---

## Updated Tutorial Flow

```
Start Tutorial
    ↓
Mission 01: Tmux Workflows (learn workspace management)
    ↓
Mission 02: Arsenal Diagnostics (verify setup, build profile)
    ↓
[AI now knows user's setup and adapts future missions]
    ↓
Mission 03: Telescope Search (or adapted to their fuzzy finder)
    ↓
Mission 04: Vim Motions
    ↓
Mission 05: Visual Mastery
    ↓
Mission 06: Text Objects (or adapted if no mini.ai)
    ↓
Mission 07: Buffer Management
    ↓
Mission 08: LSP Investigation (or adapted if no LSP)
    ↓
Final Challenge
```

---

## AI Behavior Notes

### For Mission 02
- **Be patient**: Setup troubleshooting can be frustrating
- **Be diagnostic**: Ask what they see, get exact errors
- **Be non-judgmental**: Support their setup choices
- **Be adaptive**: Plan how to adjust future missions
- **Document profile**: Remember their setup for later missions

### For Mission 03+
- **Check profile**: Recall their Mission 02 setup
- **Adapt instructions**: Use their keybindings, plugins, tools
- **Provide alternatives**: If they skipped a plugin, teach workarounds
- **Stay consistent**: Reference their profile throughout

---

## Success Criteria

**Mission 02 Complete When:**
- All 10 components examined
- User made install/adapt choice for each
- Basic Neovim navigation verified working
- AI has complete user profile
- User confident in their setup

**Tutorial Complete When:**
- User finished all 8 missions (or adapted versions)
- User can navigate codebases efficiently
- User has muscle memory for essential commands
- User found all tokens (optional)
- User completed final challenge

---

## For Future Missions

When adding new missions:
1. Number them sequentially after Mission 08
2. Check if they depend on specific plugins
3. If yes, add adaptation logic for users without those plugins
4. Update this file and main CLAUDE.md
5. Consider whether Mission 02 should check for those plugins

---

**Last Updated**: 2025-10-04
**Current Mission Count**: 11 (8 standard + 3 custom, + Final Challenge)
**Total Tutorial Tokens**: 15 (unchanged)
**Custom Missions**: Missions 09-11 are toolkit-specific, created during Mission 02 diagnostics
