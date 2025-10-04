# Mission 02: Arsenal Diagnostics 🔧

```
╔═══════════════════════════════════════════════════════════╗
║  MISSION BRIEFING                                         ║
║  Codename: TOOLKIT VERIFICATION                           ║
║  Clearance: Level 1                                       ║
║  Status: CRITICAL                                         ║
╚═══════════════════════════════════════════════════════════╝
```

## 📋 The Case

**Incident Report - Forensics Department**

Detective, we have a problem.

When Dr. Vimsworth vanished, someone **sabotaged her workstation**. File access logs show unauthorized modifications to her Neovim configuration **2 hours before her last recorded login**.

**Evidence recovered:**
- Config files partially deleted
- Plugin directories corrupted
- Keybindings scrambled
- Custom tools removed

**The saboteur wanted to slow down anyone who tried to follow her trail.**

Before we can continue the investigation, **I need to verify YOUR forensic toolkit**. We can't chase leads if your tools don't work.

## 🎯 Mission Objective

**This is an INTERACTIVE mission.** We'll work together to:

1. **Examine your current Neovim setup** component-by-component
2. **Identify what's working** and what's missing
3. **Make a choice for each component**:
   - 🔧 **Install/fix it** (I'll guide you step-by-step)
   - 📝 **Adapt the tutorial** (I'll adjust future missions to your setup)
4. **Create your personalized mission path** - I'll reorder remaining missions based on what you have

**Your setup, your choice.** Every detective has their own toolkit.

### What Makes This Special

This isn't just a checklist. Based on what you have installed, **I'll identify which missions make sense for you**:

- **Have Telescope?** We'll create fast file-finding missions
- **No Telescope?** We'll focus on core Vim skills missions
- **Have LSP?** We'll add IDE-like feature missions
- **No LSP?** We'll teach manual navigation techniques
- **Minimalist setup?** We'll optimize for built-in Vim feature missions

**Custom missions for your toolkit**, not a rigid sequence.

## 🛠️ Components We'll Examine

We'll go through these one at a time:

### 1. Plugin Manager
The foundation. Manages all other tools.
- **Options**: lazy.nvim, packer, vim-plug, or none
- **Why**: Makes installing/updating other tools painless

### 2. Fuzzy Finder
Fast file and content searching.
- **Options**: Telescope, fzf, or built-in :find
- **Why**: Essential for navigating large codebases

### 3. File Explorer
Visual file tree navigation.
- **Options**: Neo-tree, nvim-tree, or netrw
- **Why**: Easier file browsing than command-line

### 4. LSP (Language Server Protocol)
IDE-like features: autocomplete, go-to-definition, errors.
- **Options**: nvim-lspconfig + Mason, or none
- **Why**: Makes Neovim understand your code

### 5. Completion Engine
Intelligent code suggestions as you type.
- **Options**: nvim-cmp, or built-in completion
- **Why**: Speeds up coding with smart suggestions

### 6. Treesitter
Advanced syntax highlighting and code understanding.
- **Options**: nvim-treesitter, or basic syntax
- **Why**: Better highlighting and text objects

### 7. Status Line
Information bar at bottom of editor.
- **Options**: lualine, airline, or default
- **Why**: At-a-glance editor context

### 8. Git Integration
Version control inside Neovim.
- **Options**: gitsigns, fugitive, or command-line git
- **Why**: See changes and manage git without leaving editor

### 9. Formatter/Linter
Automatic code formatting and style checking.
- **Options**: null-ls/none-ls, formatter.nvim, or external
- **Why**: Consistent code style automatically

### 10. Snippet Engine
Expand abbreviations into code templates.
- **Options**: LuaSnip, UltiSnips, or none
- **Why**: Fast boilerplate generation

## 🚀 How This Mission Works

**This is NOT a reading mission. This is a CONVERSATION mission.**

1. **Open a terminal pane** (or split your current window)
2. **Tell Claude you're ready** to begin diagnostics
3. **Follow interactive instructions** - I'll ask you to test things
4. **Answer honestly** - "It works" or "Error: xyz"
5. **Make choices** - Install or adapt, component by component

## 💬 Getting Started

When you're ready, **in Claude Code**, say:

```
"I'm ready for diagnostics"
```

or

```
"Let's check my setup"
```

**I'll guide you through the rest.** We'll go component-by-component together.

## 📝 What You'll Need

- A terminal with Neovim installed (`nvim --version` should work)
- Ability to install packages (may need `git`, `npm`, `cargo` depending on choices)
- 15-30 minutes (depending on how much we need to set up)

## ⚠️ Important Notes

- **No judgment** - Whether you have a full setup or just vanilla Neovim, we'll make it work
- **Your pace** - Take your time, ask questions
- **Your choice** - I'll never force you to install something
- **Reversible** - Everything we install can be uninstalled later
- **Safe** - We'll back up your existing config before any changes

## 🎯 Success Criteria

Mission complete when:
- ✅ Every component examined
- ✅ You've made install/adapt choices for each
- ✅ Basic Neovim navigation verified working
- ✅ You're confident your setup works
- ✅ You have a **customized mission path** for remaining missions
- ✅ You know which missions you'll do and which you'll skip

## 🗺️ What Happens After This Mission?

You'll receive a **personalized mission recommendation** like this:

```
TOOLKIT ASSESSMENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✅ Mission 01: Tmux Workflows (complete)
✅ Mission 02: Arsenal Diagnostics (complete)

📋 RECOMMENDED MISSIONS FOR YOUR SETUP:
✅ Mission 03: Telescope Search (you have Telescope)
✅ Mission 04: Vim Motions (core skill)
✅ Mission 05: Visual Mastery (core skill)
✅ Mission 06: Text Objects (you have mini.ai)
✅ Mission 07: Buffer Management (core skill)
✅ Mission 08: LSP Investigation (you have LSP)

OR (if minimal setup):

📋 RECOMMENDED MISSIONS:
✅ Mission 04: Vim Motions (core skill)
✅ Mission 05: Visual Mastery (core skill)
✅ Mission 07: Buffer Management (core skill)

🚫 NOT RECOMMENDED: Mission 03 (no Telescope), Mission 06 (no mini.ai), Mission 08 (no LSP)
💡 ALTERNATIVELY: I can create adapted missions using :find instead of Telescope

RATIONALE:
Your setup focuses on core Vim skills. These missions
match your toolkit. You can add/remove missions anytime.
```

**Missions adapt to you**, not the other way around.

## 🕵️ Detective's Note

Dr. Vimsworth had her toolkit. You'll have yours. What matters isn't matching her setup exactly—it's having **tools that work for YOU**.

The investigation continues once your arsenal is ready—and once I've identified which missions suit your toolkit.

**Ready, Detective?**

---

*After completing this mission, I'll recommend missions that match your setup. You can accept, skip, or request custom missions.*
