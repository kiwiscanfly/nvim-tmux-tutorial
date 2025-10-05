# Neovim & Tmux Interactive Tutorial

An AI-driven, story-based learning environment for mastering Neovim and tmux through interactive investigation.

## Overview

This tutorial transforms the process of learning terminal tools into an engaging detective mystery. Users investigate the disappearance of Dr. Elena Vimsworth while learning professional development workflows with Neovim and tmux.

### Key Features

- **Adaptive Path**: Missions customize to your installed Neovim plugins
- **Setup Verification**: Interactive diagnostics ensure tools work before learning
- **AI Coaching**: Progressive hints and proactive guidance
- **Story-Driven**: Detective mystery narrative maintains engagement
- **Hands-On Practice**: Real code files and practical challenges

## Getting Started

### 1. Clone the Repository

```bash
# Clone the tutorial
git clone [repository-url]
cd [repository-name]
```

### 2. Install Dependencies

```bash
# Install the achievement tracking system
cd mcp-server
npm install
cd ..
```

### 3. Start a Tmux Session with Claude Code

```bash
# Navigate to the tutorial directory
cd nvim-tmux-tutorial

# Start a new tmux session named "prometheus-investigation"
tmux new -s prometheus-investigation

# Inside tmux, start Claude Code
claude
```

### 4. Begin the Investigation

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
  - `missions/01-08/` - Core missions
  - `missions/09-11/` - Custom missions (created based on your toolkit)
  - `mission-template/` - Template system for creating additional missions
- `AI-TRAINING-OPPORTUNITIES.md` - Enhancement roadmap
- `AI-TRANSFORMATION-SUMMARY.md` - Implementation details

## Mission Overview

**Mission 01: Tmux Workflows 🖥️**
Learn session, window, and pane management - the foundation for your workspace

**Mission 02: Arsenal Diagnostics 🔧**
Interactive setup verification across 12 Neovim components. The AI checks your toolkit, helps install missing pieces, and creates a custom mission path based on what you have.

**Missions 03+: Custom Path**
Your remaining missions depend on your toolkit. Topics include:
- Fuzzy finding, vim motions, visual mode
- Text objects, buffers, navigation
- LSP features, git workflows, AI assistance, formatting

## Prerequisites

- **Tmux 3.0+** (required from the start)
- Neovim 0.9+
- Claude Code
- Basic command line familiarity

**Optional**:
- Telescope plugin for Neovim
- Neo-tree file explorer
- LSP setup (Mission 06 teaches this)

## What You'll Learn

- Persistent tmux workspaces with split panes and windows
- Neovim setup verification and customization (12 components)
- Efficient terminal-based editing with your installed toolkit
- Mouse-free development workflows

Skills transfer directly to professional work.

## Contributing

To extend:
1. Use the mission template system in `mission-template/`
2. Follow `mission-template/QUICK-START.md` for 20-40 min mission creation
3. Write both `README.md` (user-facing) and `CLAUDE.md` (AI guidance)
4. Include practice files with intentional learning opportunities
5. Follow detective narrative framing
6. Implement 4-level progressive hint structure
7. Test with the AI to ensure proper coaching flow

---

**The investigation awaits. Start your tmux session and let's begin.**