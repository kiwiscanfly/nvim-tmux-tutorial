# Neovim & Tmux Interactive Tutorial

An AI-driven, story-based learning environment for mastering Neovim and tmux through interactive investigation.

## Overview

This tutorial transforms the process of learning terminal tools into an engaging detective mystery. Users investigate the disappearance of Dr. Elena Vimsworth while learning professional development workflows with Neovim and tmux.

### Key Features

- **AI-Guided Learning**: Claude Code acts as a detective partner, providing adaptive guidance
- **Story-Driven Experience**: Mystery narrative maintains engagement throughout
- **Progressive Difficulty**: Six missions from tmux basics to LSP configuration
- **Hands-On Practice**: Real code files, intentional bugs, and practical challenges
- **Adaptive Coaching**: AI adjusts difficulty based on user skill level
- **Detective Persona**: All interactions framed through noir detective lens

## Getting Started

### 1. Clone the Repository

```bash
# Clone the tutorial
git clone [repository-url]
cd [repository-name]
```

### 2. Start a Tmux Session with Claude Code

```bash
# Navigate to the tutorial directory
cd nvim-tmux-tutorial

# Start a new tmux session named "prometheus-investigation"
tmux new -s prometheus-investigation

# Inside tmux, start Claude Code
claude
```

### 3. Begin the Investigation

Once Claude Code starts, **say "Hello"** to begin.

The AI detective will:
- Greet you in character
- Guide you through setting up a split-window workspace
- Help you start Mission 01

Alternatively, you can read the case file directly:
```bash
nvim README.md
```

### Why Start with Tmux?

The tutorial begins with tmux because:
- **Persistent workspace**: Your investigation continues even if you disconnect
- **Split views**: Reference instructions while working on challenges
- **Professional setup**: Learn the foundation for all future missions
- **Immediate utility**: You'll use tmux throughout the entire tutorial

## Project Structure

- `README.md` (this file) - Getting started guide
- `CLAUDE.md` - AI training system and character guidelines
- `nvim-tmux-tutorial/` - The interactive tutorial (in-story)
  - `README.md` - Case file briefing
  - `missions/01-06/` - Six progressive missions
- `AI-TRAINING-OPPORTUNITIES.md` - Enhancement roadmap
- `AI-TRANSFORMATION-SUMMARY.md` - Implementation details

## Mission Overview

### Mission 01: Tmux Workflows 🖥️
**First mission** - Learn session, window, and pane management
**Skills**: Command center setup, split views, persistence
**Foundation**: All subsequent missions use this setup

### Mission 02: Telescope Search 🔭
Token hunting with Telescope fuzzy finding and grep

### Mission 03: Vim Motions ⚡
Motion Golf and keystroke efficiency training

### Mission 04: Visual Mastery 👁️
Block editing and surgical code refactoring

### Mission 05: Buffer Management 📚
Multi-file navigation and code trail following

### Mission 06: LSP Investigation 🔬
Configuration forensics and intelligent code editing

## Educational Goals

**Tmux**: Sessions, windows, panes, persistent workflows (taught first!)
**Neovim**: Telescope, motions, visual mode, buffers, LSP
**Professional Skills**: Terminal-first development, mouse-free efficiency

## Prerequisites

- **Tmux 3.0+** (required from the start)
- Neovim 0.9+
- Claude Code
- Basic command line familiarity

**Optional**:
- Telescope plugin for Neovim
- Neo-tree file explorer
- LSP setup (Mission 06 teaches this)

## Success Metrics

Users should be able to:
- Set up persistent tmux workspaces
- Navigate and manage multiple tmux panes/windows
- Use Telescope for instant file/content finding
- Edit efficiently with Vim motions
- Manage 10+ open buffers comfortably
- Understand LSP configuration and usage

Skills transfer directly to real-world development work.

## Educational Innovation

This project demonstrates:
- **Tmux-first approach**: Workspace management before editor skills
- **AI as adaptive tutor** vs static documentation
- **Narrative engagement** in technical education
- **Progressive disclosure** of complex concepts
- **Just-in-time learning** through proactive coaching
- **Gamification without trivializing** serious skills

## Contributing

To extend:
1. Create new missions in `missions/` directory
2. Write both `README.md` (user-facing) and `CLAUDE.md` (AI guidance)
3. Include practice files with intentional learning opportunities
4. Follow detective narrative framing
5. Implement progressive hint structure

---

**The investigation awaits. Start your tmux session and let's begin.**