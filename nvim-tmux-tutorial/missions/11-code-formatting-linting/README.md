# Mission 11: Code Formatting & Linting ✨

```
╔═══════════════════════════════════════════════════════════╗
║  MISSION BRIEFING                                         ║
║  Codename: AUTOMATED QUALITY CONTROL                      ║
║  Clearance: Level 2                                       ║
║  Status: ACTIVE                                           ║
╚═══════════════════════════════════════════════════════════╝
```

## 📋 The Case

**Forensic Analysis Report - Code Quality Division**

Dr. Vimsworth's final codebase is immaculate. Analysis reveals:
- **Zero formatting inconsistencies** across 18,000+ lines of code
- **Automated formatting on every save** (detected in editor logs)
- **Perfect 2-space indentation** maintained across all files
- **No manual formatting edits** in commit history for final 4 months

**How did she maintain such discipline?** A configuration comment explains:

> "Formatting is not a decision - it's automation. Every save triggers conform.nvim. Zero cognitive overhead, perfect consistency. The machine handles style, I handle logic." - Dr. Vimsworth's conform.lua

**The auto-formatting isn't vanity - it's forensic clarity.** Consistent formatting makes code diffs meaningful, reviews faster, and bugs more visible. She never debated tab width or bracket placement - the formatter decided automatically.

Her conform.nvim setup shows enterprise-level configuration: Prettier for web languages, Black for Python, rustfmt for Rust, stylua for Lua - all triggered on save with 500ms timeout.

**Your mission**: Master automated formatting workflows. Learn to configure conform.nvim, trigger formatting on save, and maintain code quality without manual effort - the zero-friction approach Dr. Vimsworth relied on.

## 🎯 Objectives

- [ ] Understand format-on-save workflow
- [ ] Configure formatters for different languages
- [ ] Manually trigger formatting when needed
- [ ] Handle formatter errors gracefully
- [ ] Verify formatters are installed and working
- [ ] Maintain consistent style across projects
- [ ] Appreciate Dr. Vimsworth's automation-first philosophy

## 🛠️ Your Tools / Essential Commands

**Automatic Formatting:**
```vim
:w                     # Save triggers auto-format (if configured)
```

**Manual Formatting:**
```vim
:lua vim.lsp.buf.format()          # Format using LSP
:ConformInfo                        # Check conform.nvim status
```

**Configuration Check:**
```bash
# Verify formatters are installed
prettier --version
black --version
stylua --version
```

**Installing Formatters:**
```bash
npm install -g prettier            # JavaScript/TypeScript/JSON/YAML/Markdown
pip install black                  # Python
cargo install stylua               # Lua
go install mvdan.cc/gofmt@latest   # Go
```

## 📊 Challenges / Practice Exercises

### 1. Format-on-Save Verification (messy-code.js)

**Scenario**: You've inherited intentionally messy code. Test your auto-formatter.

- **Target**: Save the file and watch conform.nvim clean it automatically
- **Dr. Vimsworth's Method**: Never manually formatted - trusted the automation
- **Why**: Eliminates formatting as a cognitive task

**Practice**:
1. Open `messy-code.js`
2. Notice the inconsistent indentation and spacing
3. Type `:w` to save
4. Watch the file auto-format instantly
5. Check git diff to see formatting changes

### 2. Multi-Language Formatting (polyglot-project/)

**Scenario**: Dr. Vimsworth's projects mixed languages. Each had appropriate formatters.

- **Target**: Format JavaScript, Python, and Lua files with different formatters
- **Dr. Vimsworth's Method**: Configured formatters per file type in conform.nvim
- **Why**: Different languages, different conventions - automation handles all

**Practice**:
1. Open `script.js` - saves with Prettier
2. Open `analyzer.py` - saves with Black
3. Open `config.lua` - saves with stylua
4. Notice each uses language-appropriate formatting

### 3. Formatter Troubleshooting (broken-format.ts)

**Scenario**: Formatters sometimes fail. Learn to diagnose and fix.

- **Target**: Identify why formatting failed and resolve it
- **Dr. Vimsworth's Method**: Check `:ConformInfo`, verify formatter installation
- **Why**: Automation fails gracefully - need diagnostic skills

**Practice**:
1. Try to save a file
2. If formatting fails, run `:ConformInfo`
3. Check if formatter is installed
4. Install missing formatter or fix configuration

### 4. Manual Format Trigger (pre-commit-prep.rs)

**Scenario**: Sometimes you need to format without saving (pre-review formatting).

- **Target**: Format current buffer on demand
- **Dr. Vimsworth's Method**: Mapped keybinding for manual format
- **Why**: Format before committing, not just on save

**Practice**:
1. Make changes to code
2. Run `:lua vim.lsp.buf.format()` to format without saving
3. Review the changes
4. Save if satisfied

## 🏆 Success Criteria

**Mission Complete when:**
- [ ] Saved a file and watched auto-format trigger
- [ ] Formatted files in 3+ different languages
- [ ] Diagnosed a formatter error using `:ConformInfo`
- [ ] Manually triggered formatting without saving
- [ ] Verified all configured formatters are installed
- [ ] Understand why Dr. Vimsworth automated formatting
- [ ] Appreciate zero-cognitive-overhead code quality

**Bonus:**
- [ ] Configured custom formatter settings (tab width, line length)
- [ ] Set up format-on-save for new file types
- [ ] Created formatter fallback chain (LSP → Prettier → built-in)

## ⏭️ Next Steps

```bash
cd ../03-telescope-search  # Or continue with standard missions
nvim README.md
```

**Investigation Note**: Dr. Vimsworth's formatting automation wasn't perfectionism - it was pragmatism. By eliminating style debates and manual formatting, she freed mental energy for solving actual problems. In her final weeks, while code output increased 340%, formatting time dropped to zero.

The machine handles style, Detective. You handle substance.

---

## Final Custom Missions Complete

You now have:
- **Mission 09: Git Workflow Mastery** (mini.diff)
- **Mission 10: AI Pair Programming** (Copilot)
- **Mission 11: Code Formatting & Linting** (conform.nvim)

These missions are tailored to your specific toolkit. Ready to begin the investigation with your complete arsenal?
