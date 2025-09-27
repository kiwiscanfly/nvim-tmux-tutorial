# 🔍 The Lost Codebase Mystery
## An Interactive Neovim & Tmux Adventure

```
╔═══════════════════════════════════════════════════════════╗
║  CLASSIFIED: PROJECT PROMETHEUS                           ║
║  Status: ABANDONED                                        ║
║  Last Commit: 3 years ago                                 ║
║  Developer: Dr. Elena Vimsworth (Location: Unknown)       ║
╚═══════════════════════════════════════════════════════════╝
```

**Welcome, Detective.**

You've been hired to investigate the mysterious disappearance of Dr. Elena Vimsworth, a legendary developer who vanished while working on Project Prometheus. Her codebase remains, scattered and cryptic, filled with hidden messages and secrets.

Your mission: Master the tools she used daily—**Neovim** and **tmux**—to uncover what happened. Each command you learn brings you closer to the truth.

---

## 🎯 Quick Start

```bash
cd nvim-tmux-tutorial/missions/01-telescope-search
nvim instructions.md
```

---

## 📚 Command Reference Card

### Neovim - Telescope (Neo-tree installed)
| Command | Action |
|---------|--------|
| `<Space>ff` | Find files by name |
| `<Space>fg` | Live grep (search file contents) |
| `<Space>fb` | Browse open buffers |
| `<Space>fh` | Search help tags |
| `<Space>fo` | Recently opened files |
| `<Space>e` | Toggle Neo-tree file explorer |

### Vim Motions - Movement
| Command | Action |
|---------|--------|
| `h j k l` | Left, Down, Up, Right |
| `w` / `b` | Next/previous word start |
| `e` / `ge` | Next/previous word end |
| `0` / `$` | Line start/end |
| `gg` / `G` | File start/end |
| `{number}G` | Go to line number |
| `%` | Jump to matching bracket |
| `f{char}` | Find next character on line |
| `t{char}` | 'Til (before) next character |
| `;` / `,` | Repeat f/t forward/backward |

### Vim Motions - Editing
| Command | Action |
|---------|--------|
| `i` / `a` | Insert before/after cursor |
| `I` / `A` | Insert at line start/end |
| `o` / `O` | Open line below/above |
| `x` / `X` | Delete char under/before cursor |
| `dd` | Delete line |
| `dw` | Delete word |
| `d$` or `D` | Delete to line end |
| `cw` | Change word |
| `ci{` | Change inside brackets |
| `yy` | Yank (copy) line |
| `p` / `P` | Paste after/before |
| `u` / `Ctrl+r` | Undo/Redo |
| `.` | Repeat last change |

### Visual Mode
| Command | Action |
|---------|--------|
| `v` | Visual character mode |
| `V` | Visual line mode |
| `Ctrl+v` | Visual block mode |
| `o` | Move to other end of selection |
| `gv` | Reselect last selection |

### Buffer Management
| Command | Action |
|---------|--------|
| `:e filename` | Edit file in new buffer |
| `:bn` / `:bp` | Next/previous buffer |
| `:b{number}` | Jump to buffer number |
| `:bd` | Delete (close) buffer |
| `:ls` | List all buffers |
| `Ctrl+6` or `Ctrl+^` | Toggle last two buffers |

### Window Splits
| Command | Action |
|---------|--------|
| `:split` or `:sp` | Horizontal split |
| `:vsplit` or `:vsp` | Vertical split |
| `Ctrl+w h/j/k/l` | Navigate splits |
| `Ctrl+w w` | Cycle through splits |
| `Ctrl+w q` | Close current split |
| `Ctrl+w =` | Equalize split sizes |
| `Ctrl+w _` | Max height current split |
| `Ctrl+w |` | Max width current split |

### Tmux - Session Management
| Command | Action |
|---------|--------|
| `tmux new -s name` | Create named session |
| `tmux ls` | List sessions |
| `tmux attach -t name` | Attach to session |
| `Ctrl+b d` | Detach from session |
| `Ctrl+b $` | Rename session |
| `Ctrl+b s` | Session switcher |

### Tmux - Window Management
| Command | Action |
|---------|--------|
| `Ctrl+b c` | Create window |
| `Ctrl+b ,` | Rename window |
| `Ctrl+b n` / `p` | Next/previous window |
| `Ctrl+b {number}` | Jump to window number |
| `Ctrl+b w` | Window list |
| `Ctrl+b &` | Kill window |

### Tmux - Pane Management
| Command | Action |
|---------|--------|
| `Ctrl+b %` | Vertical split |
| `Ctrl+b "` | Horizontal split |
| `Ctrl+b arrow` | Navigate panes |
| `Ctrl+b o` | Cycle through panes |
| `Ctrl+b z` | Toggle pane zoom |
| `Ctrl+b x` | Kill pane |
| `Ctrl+b {` / `}` | Swap panes |
| `Ctrl+b Ctrl+arrow` | Resize pane |

### Tmux - Copy Mode
| Command | Action |
|---------|--------|
| `Ctrl+b [` | Enter copy mode |
| `Space` | Start selection |
| `Enter` | Copy selection |
| `Ctrl+b ]` | Paste |
| `q` | Exit copy mode |

---

## 🗺️ Mission Overview

### Mission 01: Telescope Search 🔭
**Skills:** File finding, grep, pattern matching
**Objective:** Locate 15 hidden tokens across the codebase
**Estimated Time:** 30-45 minutes
**Unlocks:** Telescope Explorer badge

### Mission 02: Vim Motions ⚡
**Skills:** Movement commands, editing efficiency
**Objective:** Fix broken code using only specified motions
**Estimated Time:** 45-60 minutes
**Unlocks:** Motion Master badge

### Mission 03: Visual Mastery 👁️
**Skills:** Visual mode, block editing, refactoring
**Objective:** Complete data manipulation challenges
**Estimated Time:** 30-45 minutes
**Unlocks:** Visual Virtuoso badge

### Mission 04: Buffer Management 📚
**Skills:** Multi-file navigation, buffer juggling
**Objective:** Solve puzzle by connecting code across 10+ files
**Estimated Time:** 45-60 minutes
**Unlocks:** Buffer Boss badge

### Mission 05: Tmux Workflows 🖥️
**Skills:** Sessions, panes, multi-tasking
**Objective:** Monitor multiple systems simultaneously
**Estimated Time:** 60-75 minutes
**Unlocks:** Tmux Tamer, Pane Pilot, Clipboard Champion badges

### Final Challenge: The Escape Room 🚪
**Skills:** Everything combined + speed
**Objective:** Debug a critical system failure under time pressure
**Estimated Time:** 45-60 minutes
**Unlocks:** Speed Demon badge + THE TRUTH

---

## 🎓 Learning Path

**Recommended Order:**
1. Complete missions 1-5 sequentially
2. Use `sandbox/playground.txt` to practice between missions
3. Attempt final challenge only after completing all missions
4. Revisit earlier missions to improve your "golf scores"

**Alternative Paths:**
- **Vim-focused:** Missions 2 → 3 → 4 → 1 → 5
- **Tmux-focused:** Mission 5 → 1 → 2 → 3 → 4
- **Speed-run:** All missions on timer (track in achievements)

---

## 🛠️ Setup Requirements

### Neovim Configuration
This tutorial assumes you have:
- Neovim 0.9+ installed
- Telescope plugin configured
- Neo-tree plugin configured
- Basic leader key (`<Space>`) setup

**Don't have these?** Check `sandbox/configs/` for minimal config examples.

### Tmux Configuration
This tutorial works with:
- Tmux 3.0+ installed
- Default prefix (`Ctrl+b`)
- Mouse mode (optional but helpful for beginners)

**Configuration check:**
```bash
# Verify installations
nvim --version
tmux -V

# Optional: Enable mouse mode
echo "set -g mouse on" >> ~/.tmux.conf
tmux source-file ~/.tmux.conf
```

---

## 🎮 Gameplay Tips

### For Beginners
- **Don't rush.** Dr. Vimsworth spent years mastering these tools.
- **Keep this README open** in a browser for command reference
- **Practice makes permanent.** Muscle memory beats memorization.
- **Use `:help {command}`** in Neovim when stuck
- **Ask for hints.** Each mission has progressive hints in comments.

### For Intermediate Users
- **Try "motion golf"** - complete tasks in fewest keystrokes
- **Time yourself** on each mission
- **Challenge:** Complete entire tutorial without using arrow keys or mouse
- **Explore edge cases** not covered in instructions

### For Advanced Users
- **Hunt for easter eggs** (there are 7 hidden throughout)
- **Optimize your config** using techniques discovered here
- **Create your own missions** in the sandbox area
- **Speed-run mode:** Complete all missions in under 3 hours

---

## 🏆 Achievement System

Track your progress in `achievements/progress.md`. Each mission unlocks:
- 🥉 **Bronze:** Complete all required tasks
- 🥈 **Silver:** Complete bonus challenges
- 🥇 **Gold:** Complete under par time with no hints

Collect ASCII art badges in `achievements/badges/` as you progress!

---

## 📖 The Story So Far

Dr. Elena Vimsworth was a prodigy. She could refactor an entire codebase without touching her mouse. She could monitor 12 production servers across 4 tmux sessions without breaking a sweat. Colleagues called her "The Text Surgeon."

Three years ago, she sent her final commit message:

```
commit 3a8b9f2
Author: Elena Vimsworth <elena@prometheus.dev>
Date:   Tue Mar 15 23:47:33 2022 -0700

    The pattern is clear now. They're in the tokens.
    If you're reading this, find them all.
    The truth is h̵i̴d̸d̴e̵n̸ ̶i̴n̴ ̵t̸h̸e̷ ̵m̸o̶t̸i̸o̷n̴s̸.
```

Your investigation begins now.

---

## 📝 Notes

- All missions are self-contained and can be reset by deleting your edits
- Token locations are randomized per the mystery storyline
- Some files contain "bugs" intentionally—this is part of the learning
- Red herrings exist. Not every file is relevant. Learn to filter noise.
- Dr. Vimsworth left developer diary entries hidden in code comments

---

## 🆘 Stuck?

1. Read `instructions.md` in each mission carefully
2. Check comments in files for hints (search for `HINT:` or `TIP:`)
3. Review the command reference above
4. Try the `sandbox/playground.txt` for risk-free practice
5. Remember: **There's always a clue.** Nothing is impossible.

---

## 🎬 Ready to Begin?

```bash
cd missions/01-telescope-search
nvim instructions.md
```

**Good luck, Detective. The truth is waiting.**

---

*"The best interface is no interface. The best tool is the one that disappears into muscle memory."*
— Dr. Elena Vimsworth, Developer's Log, Entry 247