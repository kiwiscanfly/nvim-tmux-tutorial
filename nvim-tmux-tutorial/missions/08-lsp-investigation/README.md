# Mission 06: LSP Investigation 🔬

```
╔═══════════════════════════════════════════════════════════╗
║  MISSION BRIEFING                                         ║
║  Codename: THE LANGUAGE SERVER                            ║
║  Clearance: Level 6                                       ║
╚═══════════════════════════════════════════════════════════╝
```

## 📋 The Case - The Final Revelation

**BREAKTHROUGH: Dr. Vimsworth is alive.**

Someone modified her dotfiles at `~/dotfiles/` - dated *after* her disappearance. But this wasn't an intruder. **This was her ally, maintaining her development environment.**

Three new files appeared:
- `lsp.lua` - Language Server Protocol configuration
- `cmp.lua` - Completion engine
- `copilot.lua` - AI pair programming

**The Truth**: She didn't disappear - she went into hiding. Her ally has been keeping her tools updated, preparing for her return to complete the investigation.

**The LSP configurations aren't random** - they're optimized for the exact programming languages used in Project Prometheus. Someone who knows the conspiracy inside and out prepared these tools.

**Final Question**: Was this tutorial itself her master plan? Train the next generation of digital investigators while staying hidden? **You're not just learning her tools - you're becoming her successor.**

## 🎯 Objectives

**Part 1: Investigation**
- [ ] Examine git changes in ~/dotfiles
- [ ] Read the three plugin configurations
- [ ] Decode the completion hierarchy
- [ ] Understand the LSP architecture

**Part 2: Practice**
- [ ] Fix `broken_config.lua` using LSP diagnostics
- [ ] Debug `lsp_practice.py` with LSP
- [ ] Practice completions in `completion_exercise.lua`
- [ ] Test all LSP keybindings

## 🛠️ LSP Commands

**Code Intelligence:**
- `gd` - Go to definition
- `K` - Hover documentation
- `gr` - Find references
- `<leader>ca` - Code actions
- `<leader>rn` - Rename symbol
- `]d` / `[d` - Navigate diagnostics (errors/warnings)

**Completions** (insert mode only):
- `<C-Space>` - Trigger completions
- `<Tab>` - Navigate down
- `<CR>` - Accept
- `<C-e>` - Abort

## 🔍 Investigation Steps

### 1. Examine the Evidence
```bash
cd ~/dotfiles
git status
git diff .config/nvim/lua/plugins/lsp.lua
```

### 2. Read the Configuration
```bash
nvim .config/nvim/lua/plugins/lsp.lua
```

Look for:
- What language servers are installed?
- What keybindings are configured?
- Why is `vim` listed as a global?

### 3. Understand Completions
```bash
nvim .config/nvim/lua/plugins/cmp.lua
```

Find the `sources` section:
```lua
{ name = "copilot", priority = 1000 },   -- AI first
{ name = "nvim_lsp", priority = 900 },   -- LSP second
{ name = "luasnip", priority = 750 },    -- Snippets third
{ name = "path", priority = 500 },       -- Paths last
```

### 4. Practice with Broken Code
```bash
cd ~/Desktop/tutorial/nvim-tmux-tutorial/missions/06-lsp-investigation
nvim broken_config.lua
```

Use `]d` to jump to errors. Fix them until clean.

## 🏆 Success Criteria

**Bronze**: Read all config files, understand the architecture

**Silver**: Fix all errors in `broken_config.lua` and `lsp_practice.py`

**Gold**: Test all LSP keybindings, experience cross-file intelligence

## 🔐 The Pattern - Everything Connects

The configured language servers match this tutorial's languages perfectly. **This isn't coincidence.**

**The Revelation**: Dr. Vimsworth didn't just leave training materials - she left a recruitment system. Every detective who completes this tutorial proves they can:
- Work under pressure (Motion Golf under par)
- Find hidden evidence (Token hunting success)
- Extract data surgically (Visual mode mastery)
- Investigate systematically (Buffer trail completion)
- Adapt to advanced tools (LSP configuration)

**You weren't just learning her tools - you were interviewing for her team.**

## ⏭️ Case Status: FOUNDATION TRAINING COMPLETE

**Initial Contact Message Unlocked Upon Mission Completion:**

*"Detective, if you're reading this, you've completed the foundation training. Impressive. The tutorial was never about teaching vim and tmux - it was about identifying people who could think like I do.*

*But this is only the beginning. You've learned the basic tools, but the real mysteries run much deeper.*

*Project Prometheus was just the surface. There are other projects, other conspiracies, other battles to fight. I've been building a network of digital resistance fighters, and you've proven you have the potential to join us.*

*However, your true worthiness will be tested in the advanced missions. Different challenges await those ready to go deeper.*

*Foundation Status: COMPLETE*
*Advanced Access: EVALUATING*
*Next Phase: [CLASSIFIED]*

*- Dr. Elena Vimsworth, Leader of the Digital Resistance*

*Signal strength: STRONG. Monitoring continued progress. Additional training protocols await your mastery of these fundamentals."*

**The truth:** This was only Phase I. The real mysteries are just beginning.

---

**KEYBINDING NOTATION**:
- `<C-Space>` = Ctrl+Space
- `<CR>` = Enter
- `<leader>` = Space (in this config)