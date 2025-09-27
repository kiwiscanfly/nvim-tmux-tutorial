# Neovim & Tmux Interactive Tutorial Project

## Project Overview

This is an interactive, mystery-themed learning environment for mastering Neovim and tmux workflows. The tutorial is structured as a coding adventure where users discover "lost code artifacts" while building muscle memory for essential developer tools.

## Purpose

To create an engaging, hands-on tutorial that transforms beginners into proficient Neovim and tmux users through:
- **Story-driven learning**: Mystery narrative keeps users engaged
- **Progressive difficulty**: From basic file navigation to complex multi-pane workflows
- **Realistic scenarios**: Code that mimics actual development work
- **Immediate feedback**: Achievements and challenges with clear success criteria

## Target Audience

- Developers new to Neovim and tmux
- Users transitioning from GUI editors to terminal-based workflows
- Anyone wanting to improve terminal efficiency and muscle memory

## Key Features

### 1. Mystery Narrative
- Centered around Dr. Elena Vimsworth, a disappeared developer
- 15 hidden tokens scattered across files
- Breadcrumb clues leading to the next discovery
- Final reveal message upon completion

### 2. Five Progressive Missions
Each mission focuses on specific skill sets with practical exercises:

**Mission 01: Telescope Search**
- File finding with `<Space>ff`
- Content search with `<Space>fg` (live grep)
- Buffer navigation with `<Space>fb`
- Help system with `<Space>fh`
- Neo-tree file explorer basics

**Mission 02: Vim Motions**
- Movement commands (w, b, e, gg, G, $, 0)
- Editing operators (d, y, c, x)
- Text objects (iw, i{, i")
- The dot command (.) for repetition
- Motion golf challenges for efficiency

**Mission 03: Visual Mastery**
- Visual character mode (v)
- Visual line mode (V)
- Visual block mode (Ctrl+v)
- Column editing techniques
- Code refactoring with visual selections

**Mission 04: Buffer Management**
- Buffer vs window vs tab concepts
- Buffer navigation (:bn, :bp, :b{n})
- Window splits (:split, :vsplit)
- Split navigation (Ctrl+w + hjkl)
- Multi-file code tracing exercise

**Mission 05: Tmux Workflows**
- Session management (create, detach, attach)
- Window management (create, switch, kill)
- Pane operations (split, navigate, resize, zoom)
- Multi-project monitoring setup
- Clipboard integration between panes

### 3. Final Challenge
Timed escape room scenario requiring:
- Simultaneous monitoring of 3 systems
- Bug diagnosis across multiple files
- Efficient vim motion usage
- All learned skills combined under pressure

## Learning Outcomes

Upon completion, users will be able to:

### Core Competencies
- Navigate codebases efficiently without a mouse
- Search and filter files/content using Telescope
- Edit code using vim motions with muscle memory
- Manage multiple files using buffers and windows
- Work with multiple projects using tmux sessions

### Specific Skills

**Telescope Mastery**
- Find files by name instantly (`<Space>ff`)
- Grep across entire codebase (`<Space>fg`)
- Switch between open buffers (`<Space>fb`)
- Search help documentation (`<Space>fh`)
- Filter results effectively

**Neovim Editing**
- Use vim motions fluently (d, y, c with w, e, $, gg, etc.)
- Apply text objects for surgical edits (ci{, da", etc.)
- Leverage visual modes for complex selections
- Navigate with relative line numbers (5j, 10k)
- Repeat changes efficiently with the dot command
- Split windows and navigate between them
- Understand buffer lifecycle and management

**Tmux Workflows**
- Create and manage named sessions for different projects
- Split terminal into multiple panes
- Navigate, resize, and zoom panes
- Detach/attach to persistent sessions
- Kill panes and windows cleanly
- Set up monitoring dashboards
- Swap panes for optimal layout

**Advanced Techniques**
- Relative number jumping for speed
- Neo-tree file operations (create, delete, rename, copy)
- System clipboard integration (y to system clipboard)
- Multi-session project management
- Efficient debugging workflows across multiple files

## Implementation Notes

### File Structure
```
nvim-tmux-tutorial/
├── README.md (overview and command reference)
├── missions/ (5 progressive missions)
├── achievements/ (progress tracking and badges)
├── sandbox/ (practice area + example configs)
└── final-challenge/ (escape room scenario)
```

### Design Principles
- **Scoped complexity**: 10-12 files per mission (not overwhelming)
- **Self-contained**: Each mission works standalone
- **Hints included**: Progressive help in comments
- **Realistic code**: Multiple languages (JS, Python, Go, Rust, SQL)
- **Error-friendly**: Intentional bugs for learning
- **Achievement-driven**: Clear success criteria and rewards

### Educational Approach
- **Learning by doing**: No passive reading
- **Immediate application**: Practice right after introduction
- **Scaffolded difficulty**: Easy → Medium → Hard
- **Multiple paths**: Can focus on Neovim or tmux first
- **Gamification**: Scores, par times, badges, easter eggs

## Future Enhancements

Potential additions:
- Video walkthroughs for each mission
- Additional missions for advanced topics (macros, custom commands)
- Multiplayer/leaderboard features
- Integration with Neovim plugin managers
- Automated progress tracking
- Additional language support (Java, C++, etc.)

## Success Metrics

Users should be able to:
1. Complete all 5 missions (3-5 hours total)
2. Find all 15 tokens without excessive hints
3. Complete final challenge under time limit
4. Demonstrate 50%+ speed improvement in daily workflows
5. Feel confident using Neovim/tmux as primary tools

## Maintenance Notes

- Token locations are documented in mission files
- Bugs in final challenge are intentional (documented)
- Easter eggs are hidden but not required for completion
- Configs in sandbox/ are minimal starting points
- All example code is self-contained (no external dependencies)

---

**Last Updated**: 2024-09-27
**Version**: 1.0
**Maintainer**: Tutorial System