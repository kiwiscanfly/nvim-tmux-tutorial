# Interactive Neovim & Tmux Tutorial

A mystery-themed, hands-on learning adventure for mastering terminal-based development workflows.

## 🎯 What You'll Learn

This tutorial teaches you to work efficiently in Neovim and tmux through interactive challenges and a compelling mystery narrative. By the end, these tools will feel like natural extensions of your thought process.

### Core Skills Covered

#### 🔭 Telescope (Fuzzy Finding)
- **`<Space>ff`** - Find files by name across your project
- **`<Space>fg`** - Live grep (search text content in all files)
- **`<Space>fb`** - Buffer switcher (navigate between open files)
- **`<Space>fh`** - Help tags (search Neovim documentation)
- **`<Space>fo`** - Recently opened files

#### ⚡ Neovim Editing (Vim Motions)
- **Movement**: `w` `b` `e` (word navigation), `gg` `G` (file start/end), `0` `$` (line start/end)
- **Operators**: `d` (delete), `y` (yank/copy), `c` (change)
- **Combinations**: `dw` (delete word), `ci{` (change inside braces), `yy` (copy line)
- **Visual modes**: `v` (character), `V` (line), `Ctrl+v` (block)
- **Relative jumping**: `5j` (down 5 lines), `10k` (up 10 lines)
- **The dot command**: `.` (repeat last change)

#### 📚 Buffers & Windows
- **Buffers**: Files loaded in memory (`:e`, `:bn`, `:bp`, `:bd`)
- **Windows**: Split views of buffers (`:split`, `:vsplit`)
- **Navigation**: `Ctrl+w h/j/k/l` (move between splits)
- **Resize**: `Ctrl+w =` (equalize), `Ctrl+w _` (maximize height)
- **Neo-tree**: `<Space>e` (file explorer with create/delete/rename)

#### 🖥️ Tmux (Terminal Multiplexing)
- **Sessions**: `tmux new -s name`, `Ctrl+b d` (detach), `tmux attach -t name`
- **Windows**: `Ctrl+b c` (create), `Ctrl+b n/p` (next/previous), `Ctrl+b &` (kill)
- **Panes**: `Ctrl+b %` (vertical split), `Ctrl+b "` (horizontal split)
- **Navigation**: `Ctrl+b arrow` (move between panes)
- **Zoom**: `Ctrl+b z` (toggle fullscreen on current pane)
- **Kill pane**: `Ctrl+b x`
- **Resize**: `Ctrl+b Ctrl+arrow` or mouse drag
- **Swap panes**: `Ctrl+b {` / `}`

#### 🚀 Advanced Techniques
- System clipboard integration (`"+y` to copy to clipboard)
- Managing multiple projects with tmux sessions
- Efficient debugging across multiple files
- Neo-tree file operations (rename, delete, copy files)
- Copy-paste between tmux panes
- Custom tmux layouts for different workflows

## 📖 Learning Outcomes

By completing this tutorial, you will be able to:

✅ Navigate any codebase without touching your mouse
✅ Search and filter files/content in seconds using Telescope
✅ Edit code with vim motions as muscle memory
✅ Manage 10+ open files effortlessly with buffers
✅ Monitor multiple services simultaneously with tmux
✅ Debug issues across multiple files efficiently
✅ Work on multiple projects in parallel sessions
✅ Split and organize your terminal workspace optimally
✅ Copy/paste between terminal panes and system clipboard
✅ Think in "text objects" and "motions" rather than cursor movements

## 🎮 Tutorial Structure

### 📚 Five Progressive Missions

**Mission 01: Telescope Search** (30-45 min)
Learn file finding and content searching by locating 15 hidden tokens scattered across a mysterious codebase.

**Mission 02: Vim Motions** (45-60 min)
Master movement and editing commands through "motion golf" challenges and fixing intentionally broken code.

**Mission 03: Visual Mastery** (30-45 min)
Learn visual mode for column editing, refactoring, and bulk operations.

**Mission 04: Buffer Management** (45-60 min)
Navigate between 10+ interconnected files to solve a code puzzle without using your mouse.

**Mission 05: Tmux Workflows** (60-75 min)
Set up monitoring dashboards with multiple panes and manage three projects simultaneously.

**Final Challenge: The Escape Room** (45-60 min)
Fix three production systems under a 15-minute time limit using everything you've learned.

### 🏆 Achievement System

Earn ASCII art badges for completing challenges:
- 🔭 Telescope Explorer
- ⚡ Motion Master
- 👁️ Visual Virtuoso
- 📚 Buffer Boss
- 🖥️ Tmux Tamer
- 🏃 Speed Demon

Track your progress in `achievements/progress.md`

### 🎪 Sandbox Area

Practice freely in `sandbox/playground.txt` without worrying about breaking anything. Example configs are provided for Neovim and tmux.

## 🚀 Getting Started

### Prerequisites

- **Neovim 0.9+** installed
- **Tmux 3.0+** installed
- **Telescope plugin** configured in Neovim
- **Neo-tree plugin** configured in Neovim
- Basic familiarity with opening a terminal

If you don't have Neovim/tmux configured yet, check `sandbox/configs/` for minimal example configurations.

### Quick Start

```bash
cd nvim-tmux-tutorial
nvim README.md  # Read the main overview and command reference
cd missions/01-telescope-search
nvim instructions.md  # Start Mission 01
```

### Recommended Learning Path

1. **Sequential** (Recommended for beginners): Missions 1 → 2 → 3 → 4 → 5 → Final
2. **Vim-focused**: Missions 2 → 3 → 4 → 1 → 5 → Final
3. **Tmux-focused**: Mission 5 → 1 → 2 → 3 → 4 → Final

Use the sandbox between missions to practice!

## 🎯 Who This Is For

### Perfect For:
- Developers new to Neovim and tmux
- Users transitioning from VS Code, Sublime, or IntelliJ
- Anyone wanting to speed up their terminal workflow
- People who learn best by doing rather than reading docs
- Fans of puzzle-solving and mystery narratives

### You'll Enjoy This If You:
- Want to ditch your mouse while coding
- Appreciate a good story with your learning
- Like gamification and achievement systems
- Value efficiency and keyboard-driven workflows
- Enjoy practical, hands-on challenges

## 📈 Expected Time Investment

- **Total tutorial**: 4-6 hours
- **Daily practice**: 10-15 minutes for 2 weeks
- **Muscle memory development**: 2-4 weeks of normal usage
- **Mastery**: 2-3 months of daily use

Don't rush! The goal is building lasting muscle memory, not speed-running.

## 💡 Learning Tips

### For Beginners
- Keep the command reference open in a browser
- Use hints liberally - they're there to help!
- Practice in the sandbox when confused
- Don't memorize commands; build muscle memory through repetition
- Use `:help {command}` in Neovim when stuck

### For Intermediate Users
- Try "motion golf" - complete tasks in fewest keystrokes
- Time yourself on each mission
- Challenge: Complete without arrow keys or mouse
- Hunt for the 7 hidden easter eggs

### For Advanced Users
- Speed-run mode: Complete all missions in under 3 hours
- Create your own challenges in the sandbox
- Optimize your personal configs based on techniques learned
- Share your solutions with others

## 🎨 Design Philosophy

This tutorial follows these principles:

- **Learning by doing**: Every concept is practiced immediately
- **Realistic scenarios**: Code examples mirror real development work
- **Progressive difficulty**: Each mission builds on previous skills
- **Story-driven**: Mystery narrative maintains engagement
- **Failure-friendly**: Hints and multiple approaches to success
- **Scoped complexity**: Just enough files to learn, not overwhelm

## 🔧 What's Included

```
nvim-tmux-tutorial/
├── README.md                    # Main overview (you are here!)
├── missions/
│   ├── 01-telescope-search/     # File finding & grep
│   ├── 02-vim-motions/          # Movement & editing
│   ├── 03-visual-mastery/       # Visual mode techniques
│   ├── 04-buffer-management/    # Multi-file navigation
│   └── 05-tmux-workflows/       # Terminal multiplexing
├── achievements/
│   ├── progress.md              # Track your journey
│   └── badges/                  # ASCII art achievements
├── sandbox/
│   ├── playground.txt           # Free practice area
│   └── configs/                 # Example .vimrc and .tmux.conf
└── final-challenge/
    └── emergency-fixes/         # Timed escape room scenario
```

## 🎭 The Story

You've been hired to investigate the mysterious disappearance of Dr. Elena Vimsworth, a legendary developer who vanished while working on Project Prometheus. Her codebase remains, scattered and cryptic, filled with hidden messages.

Your mission: Master the tools she used daily—Neovim and tmux—to uncover what happened.

*"The truth is hidden in the motions."* — Dr. Elena Vimsworth, final commit message

## 🤝 Support & Help

- Each mission has progressive hints in comments
- Search for `HINT:` or `TIP:` in files
- The main tutorial README has a full command reference
- Use sandbox area for risk-free experimentation
- Remember: Nothing is impossible, there's always a clue

## 🎓 After Completion

Once you've mastered the basics:
1. Customize your configs in `sandbox/configs/`
2. Build your own tmux layouts for your projects
3. Explore advanced topics (macros, custom commands, plugins)
4. Share what you learned with others
5. Keep the muscle memory alive with daily practice

## 📝 Credits & Philosophy

*"The best interface is no interface. The best tool is the one that disappears into muscle memory."*
— Dr. Elena Vimsworth

This tutorial was designed to transform your relationship with your development environment. The goal isn't to memorize commands—it's to internalize workflows until they become invisible.

---

**Ready to begin?**

```bash
cd missions/01-telescope-search
nvim instructions.md
```

Good luck, Detective. The truth is waiting.