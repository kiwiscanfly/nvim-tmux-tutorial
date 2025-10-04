# Neovim Component Reference Guide

This guide explains each component of a modern Neovim setup in detail. Use this as reference material during Mission 02 diagnostics.

---

## 1. Plugin Manager

### What It Is
A plugin manager automates downloading, installing, updating, and loading Neovim plugins from GitHub and other sources.

### Why You Need It
Without a plugin manager, you'd need to manually:
- Clone plugin repositories
- Manage file paths
- Handle dependencies
- Update plugins individually
- Configure load order

### Popular Options

**lazy.nvim** (Recommended - Modern Standard)
- Lazy-loading for fast startup
- Declarative configuration
- Built-in UI for management
- Automatic dependency resolution
- Active development

**packer.nvim** (Mature, Still Used)
- Compilation for speed
- Snapshot support
- Use-package inspired
- Large ecosystem

**vim-plug** (Simple, Vimscript)
- Minimal and fast
- Parallel installation
- Works in both Vim and Neovim
- Easy to understand

### What Commands Look Like

```vim
" lazy.nvim
:Lazy          " Open plugin manager UI
:Lazy sync     " Install/update all plugins
:Lazy clean    " Remove unused plugins
:Lazy log      " View installation logs

" packer.nvim
:PackerSync    " Install/update plugins
:PackerStatus  " View plugin status
:PackerClean   " Remove unused plugins

" vim-plug
:PlugInstall   " Install plugins
:PlugUpdate    " Update plugins
:PlugClean     " Remove unused plugins
```

---

## 2. Fuzzy Finder

### What It Is
A tool for quickly finding files, searching content, and navigating your project using fuzzy matching.

### Why You Need It
Essential for:
- Finding files by partial name (type "mdl" to find "user_model.rb")
- Searching content across entire codebase (live grep)
- Switching between open buffers
- Browsing help docs
- Searching git commits
- Finding LSP symbols

### Popular Options

**Telescope.nvim** (Recommended - Most Popular)
- Extensible architecture
- Beautiful UI with previews
- Dozens of built-in pickers
- Integration with LSP, git, treesitter
- Lua-based, fast

**fzf.vim** (Lightweight, Fast)
- Uses external fzf binary
- Very fast on huge codebases
- Simple configuration
- Command-line tool integration

**Built-in :find** (No Plugin Required)
- Uses vim's built-in fuzzy finding
- Works with `**` glob patterns
- No preview or advanced features
- Always available

### What Commands Look Like

```vim
" Telescope
<Space>ff      " Find files
<Space>fg      " Live grep (search in files)
<Space>fb      " Browse open buffers
<Space>fh      " Search help tags

" fzf
:Files         " Find files
:Rg            " Ripgrep search
:Buffers       " Browse buffers

" Built-in
:find **/*user*    " Find files matching pattern
:grep -r pattern . " Search in files
```

---

## 3. File Explorer

### What It Is
A visual file tree sidebar for browsing and managing files.

### Why You Need It
- Visual overview of project structure
- Quick file navigation
- File operations (create, delete, rename, move)
- Git status indicators
- Easy directory traversal

### Popular Options

**Neo-tree.nvim** (Recommended - Modern)
- Floating window or sidebar
- Git integration
- File icons
- Customizable
- Buffer and git trees in addition to filesystem

**nvim-tree.lua** (Mature, Popular)
- Classic sidebar style
- Git integration
- File icons
- Fast performance
- Wide adoption

**netrw** (Built-in, No Plugin)
- Always available
- Basic file operations
- No dependencies
- Simple but functional

### What Commands Look Like

```vim
" Neo-tree
<Space>e       " Toggle file explorer
a              " Add file/directory (when in Neo-tree)
d              " Delete
r              " Rename
c              " Copy
x              " Cut
p              " Paste

" nvim-tree
<Space>e       " Toggle tree
a              " Create file
d              " Delete
r              " Rename

" netrw (built-in)
:Explore       " Open file explorer
%              " Create file
d              " Create directory
D              " Delete
R              " Rename
```

---

## 4. LSP (Language Server Protocol)

### What It Is
A protocol that connects Neovim to language servers—programs that understand specific programming languages and provide IDE-like features.

### Why You Need It
Provides:
- **Autocomplete**: Intelligent code suggestions
- **Diagnostics**: Real-time error/warning detection
- **Go-to-definition**: Jump to where functions/variables are defined
- **Find references**: See all usages of a symbol
- **Hover documentation**: View function signatures and docs
- **Rename**: Rename symbols across entire project
- **Code actions**: Auto-fixes and refactorings

### Popular Options

**nvim-lspconfig + Mason** (Recommended - Standard Setup)
- nvim-lspconfig: Provides LSP client configurations
- Mason: Easy language server installation UI
- mason-lspconfig: Bridge between the two
- Wide language support (50+ servers)
- Active maintenance

**CoC.nvim** (Alternative - All-in-One)
- VS Code extension ecosystem
- More automated setup
- Node.js required
- Less Neovim-native

**No LSP** (Built-in Features)
- Use ctags for navigation
- Basic vim completion
- Manual error checking
- Simpler but limited

### What Commands Look Like

```vim
" LSP
gd             " Go to definition
gr             " Find references
K              " Hover documentation
<Space>ca      " Code actions
<Space>rn      " Rename symbol
<Space>e       " Show diagnostics

" Mason
:Mason         " Open server installer UI
:MasonInstall  " Install a language server
:MasonUpdate   " Update servers

" LSP diagnostics
:LspInfo       " Show attached servers
:LspRestart    " Restart LSP
```

### Language Servers Examples
- **JavaScript/TypeScript**: ts_ls (formerly tsserver)
- **Python**: pyright, pylsp
- **Rust**: rust-analyzer
- **Go**: gopls
- **Lua**: lua_ls
- **C/C++**: clangd
- **Java**: jdtls

---

## 5. Completion Engine

### What It Is
A system that provides intelligent code completion suggestions as you type.

### Why You Need It
- Faster coding with suggestions
- Discover API methods
- Reduce typos
- Multiple completion sources (LSP, snippets, buffer words, file paths)
- Configurable matching and ranking

### Popular Options

**nvim-cmp** (Recommended - Standard)
- Highly modular
- Multiple sources (LSP, snippets, buffer, path, etc.)
- Customizable UI
- Fast performance
- Large plugin ecosystem

**coq_nvim** (Alternative - Fast)
- Fast startup
- Auto-completion
- Snippet support
- Less configuration needed

**Built-in completion** (No Plugin)
- Basic word completion with `<Ctrl-n>`
- Line completion with `<Ctrl-x><Ctrl-l>`
- File path completion with `<Ctrl-x><Ctrl-f>`
- Always available

### What Commands Look Like

```vim
" nvim-cmp (in insert mode)
<Ctrl-Space>   " Trigger completion manually
<CR>           " Confirm selection
<Tab>          " Next item
<Shift-Tab>    " Previous item

" Built-in completion (in insert mode)
<Ctrl-n>       " Next completion
<Ctrl-p>       " Previous completion
<Ctrl-x><Ctrl-f>   " File path completion
<Ctrl-x><Ctrl-l>   " Line completion
```

### nvim-cmp Sources
- `cmp-nvim-lsp`: LSP completions
- `cmp-buffer`: Words from current buffer
- `cmp-path`: File system paths
- `cmp-cmdline`: Command-line completions
- `cmp_luasnip`: Snippet completions

---

## 6. Treesitter

### What It Is
An incremental parsing library that builds a syntax tree of your code for advanced highlighting and text manipulation.

### Why You Need It
- **Better syntax highlighting**: Semantic understanding (distinguishes parameters from variables)
- **Smart text objects**: Language-aware selections
- **Automatic indentation**: Context-aware formatting
- **Code folding**: Fold functions/classes intelligently
- **Incremental parsing**: Fast even on large files

### Popular Options

**nvim-treesitter** (Standard)
- Official Neovim integration
- 100+ language parsers
- Highlighting, indentation, folding
- Text objects and selections
- Regular updates

**No Treesitter** (Built-in Syntax)
- Vim's regex-based syntax highlighting
- Faster startup
- Less accurate highlighting
- Always available

### What Commands Look Like

```vim
" Treesitter
:TSInstall javascript    " Install JavaScript parser
:TSUpdate                " Update all parsers
:TSInstallInfo           " Show installed parsers
:TSBufToggle highlight   " Toggle highlighting

" Text objects (with treesitter-textobjects)
vaf            " Select around function
vif            " Select inside function
vac            " Select around class
vic            " Select inside class
```

### Supported Features
- Syntax highlighting
- Indentation
- Folding
- Text objects
- Context (show function name in status line)
- Rainbow parentheses

---

## 7. Status Line

### What It Is
An informative bar at the bottom of Neovim showing editor context.

### Why You Need It
Displays:
- Current editing mode (normal, insert, visual)
- File name and path
- File type
- Current line/column
- Git branch
- LSP status
- Diagnostics count (errors/warnings)
- Encoding and file format

### Popular Options

**lualine.nvim** (Recommended - Most Popular)
- Beautiful themes
- Modular components
- Git integration
- LSP diagnostics
- Extensions for various plugins

**airline** (Classic, VimScript)
- Mature and stable
- Many themes
- Wide plugin integration
- Works in Vim and Neovim

**Default Status Line** (Built-in)
- Basic file info
- Minimal but functional
- No configuration needed

### What It Looks Like

```
Lualine example:
┌────────────────────────────────────────────────────────────────┐
│ NORMAL | main  ~/.config/nvim/init.lua    lua    45:12  100% │
└────────────────────────────────────────────────────────────────┘
   mode    branch    file path           type   cursor  scroll

Default vim status line:
┌────────────────────────────────────────────────────────────────┐
│ "init.lua" 45L, 1234B                                    45,12 │
└────────────────────────────────────────────────────────────────┘
```

---

## 8. Git Integration

### What It Is
Plugins that bring git functionality into Neovim.

### Why You Need It
- See changes inline (added/modified/deleted lines)
- Stage/unstage hunks without leaving editor
- Blame annotations (who changed this line?)
- Browse git history
- Resolve merge conflicts
- Commit from within Neovim

### Popular Options

**gitsigns.nvim** (Recommended - Inline Changes)
- Shows git diff in sign column
- Stage/reset hunks
- Blame current line
- Navigation between hunks
- Fast and lightweight

**fugitive.vim** (Git Command Interface)
- Full git command integration
- Status, diff, commit, push, pull
- Merge conflict resolution
- Browse git history
- Very powerful

**lazygit.nvim** (Terminal UI)
- Integrates lazygit TUI
- Visual git operations
- Branch management
- Beautiful interface

**Command-line git** (No Plugin)
- Use `:!git` commands
- Terminal for git operations
- Always available

### What Commands Look Like

```vim
" gitsigns
]c             " Next hunk
[c             " Previous hunk
<Space>hs      " Stage hunk
<Space>hr      " Reset hunk
<Space>hb      " Blame line

" fugitive
:Git           " Git status
:Git commit    " Commit
:Git push      " Push
:Git blame     " Blame view
:Gdiffsplit    " Diff split

" lazygit
:LazyGit       " Open lazygit TUI
```

---

## 9. Formatter and Linter Integration

### What It Is
Tools that automatically format your code to consistent style and check for issues.

### Why You Need It
- Consistent code style across team
- Auto-fix formatting issues
- Additional linting beyond LSP
- Format on save
- Integration with tools like Prettier, Black, rustfmt

### Popular Options

**null-ls.nvim / none-ls.nvim** (Bridge to Non-LSP Tools)
- Integrates formatters and linters as LSP sources
- Format on save
- Diagnostics in LSP format
- Wide tool support

**formatter.nvim** (Simple Formatter)
- Just formatting, no linting
- Easy configuration
- Per-filetype formatters
- Manual or auto-format

**conform.nvim** (Modern Alternative)
- Fast formatter integration
- Format on save
- Multiple formatters per filetype
- Async formatting

**External Commands** (Manual)
- Run formatters via `:!prettier %`
- Simple but manual
- Always available

### What Commands Look Like

```vim
" null-ls/none-ls
<Space>f       " Format current file (custom keybind)
:lua vim.lsp.buf.format()  " Format via LSP

" formatter.nvim
:Format        " Format current file
:FormatWrite   " Format and save

" Manual
:!prettier --write %      " Format with Prettier
:!black %                 " Format with Black
```

### Common Formatters
- **JavaScript/TypeScript**: Prettier, ESLint
- **Python**: Black, autopep8, isort
- **Rust**: rustfmt
- **Go**: gofmt, goimports
- **Lua**: stylua
- **JSON/YAML/Markdown**: Prettier

---

## 10. Snippet Engine

### What It Is
A system for expanding abbreviations into code templates with placeholders.

### Why You Need It
- Type `for` → full for-loop structure
- Jump between placeholders (variable names, conditions)
- Reduce repetitive code writing
- Custom snippets for your patterns
- Language-specific templates

### Popular Options

**LuaSnip** (Recommended - Lua Native)
- Written in Lua, fast
- Supports VS Code snippets
- Dynamic snippets
- Rich API for complex templates

**UltiSnips** (Mature, Python-based)
- Powerful snippet engine
- Large snippet collection
- Python interpolation
- Vim community standard

**vim-snippets** (Snippet Collection)
- Doesn't include engine
- Large snippet library
- Works with UltiSnips or SnipMate
- Ready-made snippets for many languages

**No Snippets** (Manual Typing)
- Type everything manually
- Simpler workflow
- Always available

### What Commands Look Like

```vim
" LuaSnip (in insert mode)
<Tab>          " Expand snippet or jump to next placeholder
<Shift-Tab>    " Jump to previous placeholder

" Example expansion:
for<Tab>
  ↓
for i, v in ipairs(collection) do
    [cursor here]
end
```

### Common Snippets
- `if` → if statement
- `for` → for loop
- `func` → function definition
- `class` → class structure
- `try` → try-catch block
- `imp` → import statement

---

## Configuration Dependency Tree

Understanding how components depend on each other:

```
Plugin Manager (required for everything below)
├── Fuzzy Finder (Telescope)
│   └── Requires: plenary.nvim
├── File Explorer (Neo-tree)
│   └── Requires: plenary, nui, devicons
├── LSP (nvim-lspconfig + Mason)
│   └── Works with: Completion Engine
├── Completion Engine (nvim-cmp)
│   ├── Sources: LSP, Snippets, Buffer, Path
│   └── Requires: LSP for smart completion
├── Treesitter
│   └── Works with: LSP for semantic understanding
├── Status Line (lualine)
│   └── Shows: Git, LSP, File info
├── Git Integration (gitsigns)
│   └── Independent
├── Formatter (null-ls/none-ls)
│   └── Integrates with: LSP
├── Snippet Engine (LuaSnip)
│   └── Integrates with: Completion Engine
├── Debugger (nvim-dap)
│   ├── Works with: LSP for language support
│   └── UI: nvim-dap-ui, nvim-dap-virtual-text
└── Test Runner (neotest)
    └── Works with: Treesitter for test detection
```

---

## Minimum Viable Setups

### Beginner Setup (Minimal Plugins)
```
✅ Plugin Manager: lazy.nvim
✅ Fuzzy Finder: Telescope
✅ File Explorer: Neo-tree
❌ LSP: Skip for now
❌ Completion: Built-in only
❌ Treesitter: Skip
❌ Status Line: Default
❌ Git: Command-line
❌ Formatter: Manual
❌ Snippets: None
❌ Debugger: External
❌ Test Runner: Terminal
```

### Professional Setup (Full IDE)
```
✅ Plugin Manager: lazy.nvim
✅ Fuzzy Finder: Telescope
✅ File Explorer: Neo-tree
✅ LSP: nvim-lspconfig + Mason
✅ Completion: nvim-cmp (with LSP, buffer, path sources)
✅ Treesitter: nvim-treesitter
✅ Status Line: lualine
✅ Git: gitsigns + fugitive
✅ Formatter: null-ls/none-ls
✅ Snippets: LuaSnip
✅ Debugger: nvim-dap + nvim-dap-ui
✅ Test Runner: neotest
```

### Minimalist Setup (No Plugins)
```
❌ Plugin Manager: None
❌ Fuzzy Finder: Built-in :find
❌ File Explorer: netrw
❌ LSP: ctags for navigation
❌ Completion: Built-in <Ctrl-n>
❌ Treesitter: Regex syntax
❌ Status Line: Default
❌ Git: Command-line
❌ Formatter: External commands
❌ Snippets: Abbreviations
❌ Debugger: gdb/pdb in terminal
❌ Test Runner: Terminal commands
```

---

## 11. Debugger (DAP)

### What It Is
Debug Adapter Protocol (DAP) integration that brings visual debugging capabilities into Neovim—set breakpoints, step through code, inspect variables, and view call stacks.

### Why You Need It
- **Interactive debugging**: Set breakpoints without print statements
- **Step execution**: Step over/into/out of functions
- **Variable inspection**: View and modify variable values in real-time
- **Call stack navigation**: Trace execution flow
- **Conditional breakpoints**: Break only when specific conditions are met
- **Multi-language support**: Debug Python, JavaScript, Go, Rust, and more

### Popular Options

**nvim-dap** (Recommended - Standard)
- Official DAP protocol implementation
- Multi-language support via adapters
- Integration with UI plugins (nvim-dap-ui)
- Virtual text for inline variable display
- REPL for interactive debugging
- Active development

**vimspector** (Alternative - GUI-focused)
- Visual debugging interface
- Pre-configured for common languages
- Mouse support for breakpoints
- Less Neovim-native

**External Debuggers** (No Plugin)
- Use gdb, pdb, node inspect in terminal
- Simple but manual
- No editor integration

### What Commands Look Like

```vim
" nvim-dap
:DapContinue         " Start/continue debugging
:DapToggleBreakpoint " Set breakpoint at cursor
:DapStepOver         " Step over function
:DapStepInto         " Step into function
:DapStepOut          " Step out of function
:DapTerminate        " Stop debugging

" Common keybindings
<F5>            " Continue
<F10>           " Step over
<F11>           " Step into
<F12>           " Step out
<Space>b        " Toggle breakpoint
<Space>dr       " Open REPL
```

### Language Adapters Examples
- **Python**: debugpy
- **JavaScript/TypeScript**: node-debug2, chrome-debug
- **Go**: delve
- **Rust**: lldb, codelldb
- **C/C++**: lldb, gdb
- **Java**: java-debug

### UI Plugins
- **nvim-dap-ui**: Beautiful debug UI with scopes, watches, stack
- **nvim-dap-virtual-text**: Inline variable values
- **telescope-dap.nvim**: Telescope integration for breakpoints/commands

---

## 12. Test Runner

### What It Is
A plugin that integrates test execution directly into Neovim, allowing you to run tests, view results inline, and jump to failures without leaving the editor.

### Why You Need It
- **Inline test execution**: Run tests without switching to terminal
- **Visual feedback**: See pass/fail status next to test code
- **Jump to failures**: Navigate directly to failing assertions
- **Watch mode**: Auto-run tests on file changes
- **Test discovery**: Automatic test detection
- **Multi-framework support**: Works with pytest, jest, go test, etc.

### Popular Options

**neotest** (Recommended - Modern)
- Framework-agnostic architecture
- Beautiful UI with test tree
- Inline diagnostics for failures
- Output panel with test results
- Watch mode support
- Adapter system for different frameworks

**vim-test** (Mature, Simple)
- Runs tests in terminal/tmux
- Simple keybindings
- Many framework integrations
- Less visual feedback
- Lightweight

**Terminal Workflow** (No Plugin)
- Run tests in terminal pane
- Manual execution and navigation
- Always available
- No editor integration

### What Commands Look Like

```vim
" neotest
:Neotest run           " Run nearest test
:Neotest run file      " Run current file tests
:Neotest summary       " Show test tree
:Neotest output        " View test output
:Neotest output-panel  " Toggle output panel

" Common keybindings
<Space>tn       " Run nearest test
<Space>tf       " Run file tests
<Space>ts       " Toggle summary
<Space>to       " View output

" vim-test
:TestNearest    " Run nearest test
:TestFile       " Run current file
:TestSuite      " Run full suite
:TestLast       " Re-run last test
:TestVisit      " Jump to last test file
```

### Test Framework Adapters (neotest)
- **Python**: neotest-python (pytest, unittest)
- **JavaScript/TypeScript**: neotest-jest, neotest-vitest
- **Go**: neotest-go
- **Rust**: neotest-rust
- **Ruby**: neotest-rspec
- **Elixir**: neotest-elixir

---

## Quick Reference: Testing Your Setup

```vim
" Check plugin manager
:Lazy          " lazy.nvim
:PackerStatus  " packer.nvim
:PlugStatus    " vim-plug

" Check fuzzy finder
:Telescope     " Telescope
:Files         " fzf

" Check LSP
:LspInfo       " Show attached servers
:Mason         " LSP installer

" Check completion
<Ctrl-Space>   " In insert mode

" Check Treesitter
:TSInstallInfo " Show parsers

" Check debugger
:DapContinue   " nvim-dap
:VimspectorLaunch " vimspector

" Check test runner
:Neotest       " neotest
:TestNearest   " vim-test

" Check health overall
:checkhealth   " Complete diagnostic
```

---

This guide provides comprehensive reference material for Mission 02. Use it to explain components when users ask "What is this?" or "Why do I need it?"
