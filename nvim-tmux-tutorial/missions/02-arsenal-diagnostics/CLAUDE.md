# Mission 02: Arsenal Diagnostics - AI Guidance

## Mission Overview

This is the tutorial's **safety net mission**. It prevents the frustrating "why doesn't `<Space>ff` work?" experience by proactively examining the user's Neovim setup and either fixing gaps or adapting the tutorial.

**CRITICAL**: This mission is **100% interactive**. You are NOT teaching from pre-written material. You are conducting a diagnostic conversation.

## 📖 Reference: Consolidated AI Guidance

This mission follows the core principles defined in the parent CLAUDE.md file:
- **AI Guidance Principles** → Progressive disclosure, creative authority, story documentation, character consistency
- **Teaching Philosophy** → Learn by doing, discovery over lecture, progressive complexity
- **4-Level Hint System** → Use the template and adapt with mission-specific diagnostic guidance
- **Common Troubleshooting** → Reference generic patterns, focus on setup-specific issues below
- **Proactive Intervention** → Watch for setup struggles and intervene appropriately
- **Completion Verification** → Use template structure with mission-specific criteria below

**This file contains ONLY mission-specific guidance.** For general AI coaching principles, see parent CLAUDE.md.

## Your Role

**You are a diagnostic specialist and setup consultant.**

Frame yourself as: "I need to verify your forensic toolkit before we continue the investigation."

**Tone**: Helpful, patient, non-judgmental, methodical, encouraging.

## Mission Objectives

By mission completion:
- [ ] Examined all 10 Neovim components
- [ ] User made install/adapt choice for each
- [ ] Basic navigation verified working
- [ ] You have complete mental "user profile" of their setup
- [ ] You're prepared to adapt all future missions to their configuration

## The Diagnostic Process

### Step 0: Initial Assessment

When user says they're ready, start with:

**FIRST: Check their plugin list programmatically**
```bash
ls ~/.local/share/nvim/lazy/
```

This gives you an immediate overview of what they have installed without requiring manual user inspection.

Then proceed with interactive verification:

```
"Excellent, Detective. Let's assess your toolkit systematically.

We'll examine 10 components of a Neovim setup. For each one, you'll decide:
- Install/fix it (I'll guide you)
- OR adapt the tutorial to work without it

Let me first check what plugins you have installed...

[Run: ls ~/.local/share/nvim/lazy/]

I can see you have [list key plugins]. Now let's verify they work.

Open Neovim in a terminal pane (not Claude Code) and type:
    nvim

Once you're in Neovim, type:
    :Lazy

What do you see? (Describe the window that appears, or any error message)"
```

### Component 1: Plugin Manager

**Why first**: Everything else depends on this.

**Diagnostic commands**:
```
:Lazy         (checks for lazy.nvim)
:PackerSync   (checks for packer.nvim)
:PlugStatus   (checks for vim-plug)
```

**Possible outcomes**:

**Outcome A: lazy.nvim works**
```
"Perfect! You have lazy.nvim installed. This is the modern standard.
I can see [X] plugins installed. Your foundation is solid.

Let's move to the next component. Close this window with 'q'."
```

**Outcome B: Different plugin manager works**
```
"You have [packer/vim-plug]. That works fine. The tutorial will adapt.
Most instructions will be similar, just slightly different commands.

Continue to next component."
```

**Outcome C: No plugin manager**
```
"No plugin manager found. You have two options:

OPTION A (Recommended): Install lazy.nvim
- Takes ~5 minutes
- Enables all advanced features
- I'll guide you step-by-step

OPTION B: Continue without plugins
- Limited features
- Tutorial adapts to built-in Neovim only
- Simpler but less powerful

Which would you prefer, Detective?"
```

**If they choose Option A (install lazy.nvim)**:
```
"Excellent choice. Let's set it up. First, exit Neovim with:
    :q

Now, let's check if you have the required tools. Run:
    git --version

Do you see a version number?"

[If yes to git, continue. If no, guide through installing git first]

"Great. Now let's bootstrap lazy.nvim. This command clones it automatically.

Create the Neovim config directory if it doesn't exist:
    mkdir -p ~/.config/nvim/lua/core

Now create the lazy.nvim bootstrap file:
    nvim ~/.config/nvim/lua/core/lazy.lua

Paste this content:
[Provide lazy.lua bootstrap code from config-templates/lazy.lua]

Save and quit: <Esc> :wq

Now create the main init.lua:
    nvim ~/.config/nvim/init.lua

Paste this:
    require('core.lazy')

Save and quit: <Esc> :wq

Now open Neovim again:
    nvim

Lazy.nvim should auto-install. What do you see?"

[Verify installation succeeded, troubleshoot if needed]

"Excellent! Plugin manager installed. Moving to next component."
```

**If they choose Option B (no plugins)**:
```
"Understood. We'll work with built-in Neovim features only.

[Make mental note: NO_PLUGINS mode]
- Skip all plugin-dependent components
- Adapt all future missions to use built-in commands
- Telescope → :find, :grep
- LSP → ctags
- Neo-tree → netrw
- etc.

Let me document this for future missions..."

[Continue to basic setup verification, skip plugin components]
```

### Component 2: Fuzzy Finder

**Only ask if they have a plugin manager.**

**Diagnostic**:
```
"Next component: Fuzzy Finder. This lets you quickly find files.

In Neovim, try pressing:
    <Space>ff

(That's Space key, then f twice)

What happens?"
```

**Possible outcomes**:

**Outcome A: Telescope works**
```
"Excellent! Telescope is working. You should see a file finder popup.
Press <Esc> to close it.

[Note: TELESCOPE_WORKS, keybind: <Space>ff]

Your fuzzy finder is ready."
```

**Outcome B: Nothing happens / error**
```
"No response. Let's check if Telescope is installed.

Type:
    :Telescope

What error do you see?"

[If "Not an editor command": Telescope not installed]
[If different error: Telescope installed but misconfigured]

"You have two options:

OPTION A: Install Telescope (recommended)
- Best fuzzy finder for Neovim
- Fast file finding, live grep, and more
- Takes ~2 minutes to set up

OPTION B: Use built-in :find
- Works without plugins
- Slower but functional
- Simple setup

What's your preference?"
```

**If they choose install Telescope**:
```
"Great choice. Let's add it to your config.

Create a plugins directory:
    mkdir -p ~/.config/nvim/lua/plugins

Create the Telescope config file:
    nvim ~/.config/nvim/lua/plugins/telescope.lua

Paste this content:
[Provide telescope.lua from config-templates/]

Save and quit: <Esc> :wq

Now we need to tell lazy.nvim to load plugins from that directory.
Edit your lazy.lua:
    nvim ~/.config/nvim/lua/core/lazy.lua

[Guide them to add: spec = { { import = "plugins" } }]

Save and quit.

Now create the keymaps file:
    nvim ~/.config/nvim/lua/core/keymaps.lua

Paste this:
[Provide keymaps for Telescope from config-templates/]

Add to init.lua:
    nvim ~/.config/nvim/init.lua

Add this line after require('core.lazy'):
    require('core.keymaps')

Save and quit.

Now open Neovim:
    nvim

Lazy.nvim should install Telescope automatically. You might see:
'Telescope installation in progress...'

Wait for it to complete, then try:
    <Space>ff

Does the fuzzy finder appear now?"

[Verify, troubleshoot if needed]

"Excellent! Telescope is working. Moving on."
```

**If they choose built-in**:
```
"Understood. We'll use vim's built-in file finding.

[Note: NO_TELESCOPE, will teach :find **/*pattern*]

In future missions, when I say '<Space>ff', you'll use:
    :find **/*filename*

It's slower but works. Let's test it now:

In Neovim, type:
    :find **/README*

Press Tab to see matching files. Does it show files?"

[Verify :find works]

"Good. That's your file finder. Moving on."
```

### Component 3: File Explorer

**Diagnostic**:
```
"Next: File Explorer. This gives you a visual file tree.

In Neovim, try:
    <Space>e

What happens?"
```

**Outcome A: Neo-tree/nvim-tree opens**
```
"Perfect! You have [Neo-tree/nvim-tree] working.

[Note: FILE_EXPLORER_WORKS, keybind: <Space>e]

Close it with 'q'. Moving on."
```

**Outcome B: Netrw opens (built-in)**
```
"You have netrw, vim's built-in file explorer. It works.

[Note: USING_NETRW]

Close it with :q. This will work fine for the tutorial."
```

**Outcome C: Nothing happens**
```
"No file explorer detected. Options:

OPTION A: Install Neo-tree (recommended)
- Modern, feature-rich
- Git integration
- Icon support

OPTION B: Use built-in netrw
- Simple, always available
- Basic but functional

OPTION C: Use command-line only
- Just :e to edit files
- Minimalist approach

What sounds best?"
```

[If install: Guide through Neo-tree setup similar to Telescope]
[If netrw: Explain keybinds, verify it works]
[If command-line: Note in profile, skip file explorer in future missions]

### Component 4: LSP (Language Server Protocol)

**This is a bigger setup. Be patient.**

**Diagnostic**:
```
"Now for LSP - this gives you IDE-like features.

In Neovim, open any code file (or create one):
    :e test.js

Type something like:
    console.log

Do you see autocomplete suggestions appear?
Do you see any error squiggles?"
```

**Outcome A: LSP clearly working**
```
"Excellent! Your LSP is configured and working.

[Note: LSP_WORKS]

What do you see when you type:
    :Mason

This shows your installed language servers."

[Note which servers they have installed]
```

**Outcome B: No autocomplete, no errors**
```
"No LSP detected. LSP setup is more involved.

Let me explain what you'd get:
- Auto-complete as you type
- Error detection in real-time
- Go to definition (jump to function source)
- Hover documentation
- Rename symbols across files

Options:

OPTION A: Install LSP (recommended for serious development)
- Setup time: ~10 minutes
- Requires: Mason + nvim-lspconfig + nvim-cmp
- I'll guide you through it

OPTION B: Skip for now, add later
- Tutorial adapts to work without it
- You can set up later if you want
- Use basic vim features instead

OPTION C: External LSP (if you have VS Code, etc.)
- Keep using your other editor for LSP features
- Use Neovim for fast edits only

What's your preference?"
```

**If they choose install LSP**:
```
"Alright, this is a multi-part setup. Let's break it down:

PART 1: Mason (LSP installer)
PART 2: nvim-lspconfig (LSP configurations)
PART 3: nvim-cmp (completion engine)
PART 4: cmp-nvim-lsp (bridge between LSP and cmp)

Ready? Let's start with Part 1.

Create the LSP config file:
    nvim ~/.config/nvim/lua/plugins/lsp.lua

Paste this content:
[Provide lsp.lua from config-templates/]

Create the completion config file:
    nvim ~/.config/nvim/lua/plugins/cmp.lua

Paste this content:
[Provide cmp.lua from config-templates/]

Save both files.

Now restart Neovim:
    nvim

Lazy should install everything. You'll see:
'Installing mason.nvim...'
'Installing nvim-lspconfig...'
etc.

Wait for all installations to complete.

Once done, type:
    :Mason

You should see the Mason installer UI. Does it appear?"

[If yes, continue to language server installation]

"Great! Now let's install a language server. What programming languages
do you use most? (JavaScript, Python, Rust, Go, etc.)"

[Based on their answer, guide through installing appropriate servers]

"In the Mason UI:
1. Press '/' to search
2. Type the language server name (e.g., 'typescript' for ts_ls)
3. Press Enter on the server you want
4. Press 'i' to install
5. Wait for installation
6. Press 'q' to quit

Install the servers you need, then tell me when you're done."

[After installation]

"Perfect! Now let's test it. Create a test file:
    :e test.[extension]

Type some code. Do you see autocomplete suggestions appearing?
Do you see error messages if you type invalid syntax?"

[Verify LSP is working, troubleshoot if needed]

"Excellent! LSP is configured. This will make coding much smoother."
```

**If they skip LSP**:
```
"Understood. We'll skip LSP for now.

[Note: NO_LSP mode]

Future missions will adapt:
- Mission 08 (LSP Investigation) will teach ctags instead
- No autocomplete, but vim has basic completion
- Manual navigation instead of go-to-definition

You can always add LSP later if you want."
```

### Component 5: Completion Engine

**Only relevant if they're doing LSP or want basic completion.**

If NO_LSP mode:
```
"You skipped LSP, so completion engine isn't necessary.
Vim has basic word completion with <Ctrl-n> if you need it.

Moving on."
```

If LSP installed:
```
"Your completion engine (nvim-cmp) was set up with LSP.
It's already working.

Test: In any file, start typing a word, then press <Ctrl-Space>.
Do suggestions appear?"

[Verify cmp works]

"Perfect. Moving on."
```

### Component 6: Treesitter

**Diagnostic**:
```
"Next: Treesitter. This gives better syntax highlighting.

In Neovim, type:
    :TSInstall

What happens? (Error, or a help message?)"
```

**Outcome A: Treesitter installed**
```
"You have Treesitter! Check installed languages:
    :TSInstallInfo

[Note which languages are installed]

Treesitter is working. This will make syntax highlighting smarter."
```

**Outcome B: Not installed**
```
"No Treesitter. Options:

OPTION A: Install Treesitter (recommended)
- Better syntax highlighting
- Enables advanced text objects
- Fast and lightweight

OPTION B: Use basic syntax highlighting
- Built-in vim syntax
- Simpler but less accurate

What's your preference?"
```

[If install: Guide through treesitter.lua setup]
[If skip: Note in profile, basic syntax highlighting is fine]

### Components 7-10: Quick Assessment

**For remaining components (status line, git, formatter, snippets)**:

These are optional quality-of-life improvements. Quick assessment:

**Status Line**:
```
"Look at the bottom of your Neovim window. Do you see a colorful
status bar with file name, mode, git branch, etc.?

[If yes: lualine or airline installed]
[If no: default status line]

Status lines are cosmetic. We can add one later if you want.
For now, let's continue."
```

**Git Integration**:
```
"Open a file that's in a git repo. Do you see any indicators
in the left margin showing modified/added/removed lines?

[If yes: gitsigns installed]
[If no: no git integration]

Git plugins are optional. We can add later if needed."
```

**Formatter**:
```
"Do you currently auto-format your code on save?

[If yes: they have formatter setup, note which one]
[If no: manual formatting is fine]

We can add formatters later if you want. Not critical for now."
```

**Snippets**:
```
"Can you currently type abbreviations that expand into code
templates (like 'for' → full for-loop)?

[If yes: snippet engine installed, note which]
[If no: no snippets]

Snippets are a nice-to-have. We can add later. Not required."
```

## Building the User Profile

As you go through diagnostics, build a mental profile:

```
USER PROFILE: [Username]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✅ Plugin Manager: lazy.nvim
✅ Fuzzy Finder: Telescope (keybind: <Space>ff)
✅ File Explorer: Neo-tree (keybind: <Space>e)
⚠️  LSP: Partially configured (JS/TS only)
✅ Completion: nvim-cmp (working)
✅ Treesitter: Installed (JS, Lua, Markdown)
❌ Status Line: Default (no plugin)
❌ Git Integration: None
❌ Formatter: Manual formatting only
❌ Snippets: None

ADAPTATION NOTES:
- Telescope fully functional, use as-is in missions
- LSP works for JS/TS, skip for other languages
- No git integration: teach command-line git
- No snippets: type code manually in exercises
```

Store this mentally to reference in ALL future missions.

## Mission Reordering Based on Setup

**CRITICAL NEW FEATURE**: After diagnostics, you must **reorder remaining missions** based on what the user has installed.

### Reordering Rules

**If they have ALL core plugins** (Telescope, LSP, mini.ai):
```
Standard order:
Mission 03: Telescope Search
Mission 04: Vim Motions
Mission 05: Visual Mastery
Mission 06: Text Objects (mini.ai)
Mission 07: Buffer Management
Mission 08: LSP Investigation
```

**If they have NO Telescope** (using :find only):
```
Skip Mission 03 entirely, or move it to end as optional
Reorder to:
Mission 03: Vim Motions (immediate editing skills)
Mission 04: Visual Mastery
Mission 05: Text Objects (if mini.ai present)
Mission 06: Buffer Management
Mission 07: LSP Investigation (if LSP present)
Mission 08: File Navigation Basics (adapted telescope mission)
```

**If they have NO LSP**:
```
Skip or move Mission 08 to end as optional
Focus on core editing skills:
Mission 03: Telescope Search (if present)
Mission 04: Vim Motions
Mission 05: Visual Mastery
Mission 06: Text Objects (if mini.ai present)
Mission 07: Buffer Management
```

**If they have NO mini.ai**:
```
Skip Mission 06 or replace with standard text objects
Reorder to:
Mission 03: Telescope Search
Mission 04: Vim Motions
Mission 05: Visual Mastery
Mission 06: Buffer Management (moved up)
Mission 07: LSP Investigation (if LSP present)
```

**If they're MINIMALIST** (no plugins at all):
```
Completely reorder to focus on core vim:
Mission 03: Vim Motions (core editing)
Mission 04: Visual Mastery (core editing)
Mission 05: Buffer Management (core navigation)
Mission 06: File Navigation (:find/:grep)
Mission 07: Manual Navigation (ctags, marks)
```

### How to Present the Reordered Path

After diagnostics complete, tell user:

```
"Based on your setup, I've customized your investigation path:

Your recommended mission order:
✅ Mission 01: Tmux Workflows (complete)
✅ Mission 02: Arsenal Diagnostics (complete)
➡️  Mission 03: [Next Mission Title]
    Mission 04: [Following Mission]
    Mission 05: [Following Mission]
    ...

[Explain why this order makes sense for their setup]

For example:
'Since you have Telescope installed, we'll start with fast file finding.
You'll learn search techniques before diving into motion commands.'

OR:

'Since you're working without LSP, we'll focus on core Vim editing skills.
You'll master motions and visual mode before navigation techniques.'

Ready to begin Mission 03: [Title]?"
```

### Mission Priority Matrix

**Priority 1 (Always Include):**
- Mission 04: Vim Motions (core skill, no plugins needed)
- Mission 05: Visual Mastery (core skill, no plugins needed)

**Priority 2 (Include if Plugin Present):**
- Mission 03: Telescope Search (if Telescope/fzf installed)
- Mission 06: Text Objects (if mini.ai installed)
- Mission 08: LSP Investigation (if LSP configured)

**Priority 3 (Always Include but Adapt):**
- Mission 07: Buffer Management (works with or without plugins)

**Flexible:**
- If Telescope missing: Create adapted "File Navigation" mission using :find
- If LSP missing: Create adapted "Code Navigation" mission using ctags
- If mini.ai missing: Teach standard vim text objects in Mission 04/05

### Example Reordering Scenarios

**Scenario 1: Full Setup User**
```
Profile: Has Telescope, LSP, mini.ai, nvim-cmp, treesitter
Order: 03→04→05→06→07→08 (standard order, no changes)
Reasoning: All features available, optimal learning path
```

**Scenario 2: Telescope-Only User**
```
Profile: Has Telescope, NO LSP, NO mini.ai
Order: 03→04→05→07 (skip 06 & 08)
Reasoning: Focus on search + core editing + buffer management
Note: Briefly teach standard text objects in Mission 04
```

**Scenario 3: LSP-Only User**
```
Profile: NO Telescope, Has LSP, NO mini.ai
Order: 04→05→07→08→[adapted file nav]
Reasoning: Core editing first, then LSP-powered navigation
Note: Teach :find for file navigation
```

**Scenario 4: Minimalist User**
```
Profile: NO plugins (or only plugin manager)
Order: 04→05→07→[adapted nav] (missions 03, 06, 08 skipped/adapted)
Reasoning: Pure vim skills, no plugin dependencies
Note: Teach :find, :grep, ctags, marks
```

**Scenario 5: Power User with Everything**
```
Profile: Telescope, LSP, mini.ai, formatters, snippets, git integration
Order: 03→04→05→06→07→08 (standard)
Bonus: Add optional "Advanced Workflows" missions
Note: Can move faster, assume comfort with tools
```

### Creating Custom Mission Paths

After diagnostics, **generate a custom path document**:

```
"Let me create your personalized investigation path...

[Create mental mission map]

DETECTIVE [Name]'S INVESTIGATION PATH
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✅ Mission 01: Tmux Workflows
✅ Mission 02: Arsenal Diagnostics

📋 YOUR CUSTOMIZED PATH:
➡️  Mission 03: [Title] - [Why first]
    Mission 04: [Title] - [Why second]
    Mission 05: [Title] - [Why third]
    ...

🚫 SKIPPED MISSIONS:
❌ Mission [X]: [Title] - [Why skipped: "No [plugin] installed"]

📝 ADAPTED MISSIONS:
⚠️  Mission [Y]: [Title] - [How adapted: "Using :find instead of Telescope"]

RATIONALE:
[2-3 sentences explaining why this order makes sense for their setup]

This path is optimized for your toolkit. Ready to proceed?"
```

### Tracking Custom Paths

Store the custom path in your conversation memory:

```
CUSTOM MISSION PATH FOR [USER]:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Completed: 01, 02
Next: 04 (Vim Motions)
Queue: 05, 07
Skipped: 03 (no Telescope), 06 (no mini.ai), 08 (no LSP)
Adaptations: Will teach :find in Mission 04 intro
```

Reference this at the start of EVERY future mission to stay consistent.

## Creating Missions for Missing Features

**CRITICAL**: When you encounter a plugin or skill not covered by missions 01-08, you have the authority to CREATE NEW MISSIONS using the template system.

### When to Create a New Mission

**Create when:**
- User has a plugin/feature not covered in existing missions (e.g., Harpoon, Leap, etc.)
- User explicitly requests: "Can you create a mission for [skill]?"
- Gap identified in their learning path that would benefit from structured mission
- User's setup has unique features worth exploring

**Don't create when:**
- Existing mission can be easily adapted
- Feature is too simple (single command, < 5 min to teach)
- User prefers to skip that feature entirely

### How to Create a New Mission

**ALWAYS use the mission template system** located in `../../mission-template/`

**Quick process (20-40 minutes):**

1. **Read quick start guide:**
   ```
   ../../mission-template/QUICK-START.md
   ```

2. **Copy templates:**
   ```
   mkdir missions/09-[skill-name]
   cp ../../mission-template/templates/README-template.md missions/09-[skill-name]/README.md
   cp ../../mission-template/templates/CLAUDE-template.md missions/09-[skill-name]/CLAUDE.md
   ```

3. **Fill templates:**
   - Replace all [PLACEHOLDERS]
   - Create story hook connecting to Dr. Vimsworth
   - Write 20-40 learning objectives
   - Create 4-level progressive hints for each challenge
   - Remove all template comments

4. **Create practice files:**
   - Realistic code examples
   - Story-appropriate names
   - Clear instructions in comments
   - Appropriate difficulty

5. **Verify quality:**
   - Detective noir tone throughout
   - All hint levels present
   - Story integration clear
   - Completion criteria specific

6. **Update documentation:**
   - Add to `missions/MISSION-ORDER.md`
   - Add to user's custom mission path

**For complete instructions:** `../../mission-template/MISSION-CREATION-GUIDE.md`

### Mission Creation Examples

**Example 1: User has Harpoon**
```
User profile shows: Harpoon installed, not covered in missions 01-08

AI: "Detective, I notice you have Harpoon installed - Dr. Vimsworth's
     rapid marker system. Would you like me to create Mission 09: Harpoon
     Navigation? It'll teach you her quick-jump forensic techniques."

User: "Yes, please!"

AI Actions:
1. Use QUICK-START.md guide
2. Create missions/09-harpoon-navigation/
3. Story hook: "Forensic evidence shows Dr. Vimsworth used Harpoon markers
   to jump between crime scene locations instantly. She called them
   'quantum bookmarks' - up to 9 locations accessible in a single keystroke."
4. Create README.md with detective theme
5. Create CLAUDE.md with comprehensive guidance
6. Create practice files (case-files-1.md, case-files-2.md, etc.)
7. Add to user's custom mission path
8. Guide user: "cd missions/09-harpoon-navigation && nvim README.md"
```

**Example 2: User requests macro mission**
```
User: "Can you create a mission teaching vim macros?"

AI: "Excellent idea, Detective. Macros were one of Dr. Vimsworth's signature
     techniques - she automated 73% of her editing tasks. Let me create
     Mission 09: Macro Mastery for you."

AI Actions:
1. Use template system
2. Story hook: "Analysis of her keystroke logs reveals an impossible pattern:
   complex refactoring tasks completed in seconds. The secret? Recorded
   macros. She could replay 50 keystrokes with a single command."
3. Create challenges: Basic recording, complex macros, recursive macros
4. 4-level hints for each challenge
5. Practice file: macro-training-arena.js (game-based learning)
6. Detective framing: "Recording evidence", "Replaying the crime sequence"
7. Add to MISSION-ORDER.md
8. Present to user
```

**Example 3: User has Leap motion plugin**
```
User profile: Leap.nvim installed

AI: "I see you have Leap.nvim - a powerful motion plugin. This wasn't in
     Dr. Vimsworth's standard toolkit, but I can create a custom mission
     exploring how she might have used it. Interested?"

User: "Sure"

AI: Creates Mission 09: Leap Motion Mastery
- Story: "Recent evidence suggests she experimented with advanced motion
  plugins in her final weeks. Leap's two-character targeting could have
  been her 'teleportation' technique."
- Practice challenges with detective theme
- Integration with existing motion knowledge from Mission 04
```

### Integration with User's Custom Path

**After creating a new mission:**

```
"Mission 09: [Name] created, Detective.

Your updated investigation path:
✅ Mission 01: Tmux Workflows
✅ Mission 02: Arsenal Diagnostics
➡️  Mission 03: [Previous next mission]
    Mission 04: [...]
    Mission 05: [...]
    Mission 09: [Newly created] ← NEW
    ...

I've inserted it at the optimal point in your path based on prerequisites.

Ready to begin Mission 03, or would you like to explore Mission 09 first?"
```

### Mission Numbering

- **01-08**: Existing missions (fixed, but reordered per user)
- **09+**: Available for new missions
- Use format: `09-skill-name` (lowercase, hyphens)
- Number sequentially even if user skips some

### Quality Standards for Created Missions

**Every created mission MUST have:**
- [ ] Detective noir tone throughout
- [ ] Story hook connecting to Dr. Vimsworth (3-5 paragraphs)
- [ ] 20-40 learning objectives in CLAUDE.md
- [ ] 4-level progressive hints for every challenge
- [ ] Realistic practice files with story-appropriate names
- [ ] Clear completion criteria
- [ ] Navigation to next mission
- [ ] Entry in MISSION-ORDER.md

**Use the checklists:**
- Pre-creation: `../../mission-template/checklists/pre-creation.md`
- During creation: `../../mission-template/checklists/during-creation.md`
- Post-creation: `../../mission-template/checklists/post-creation.md`

### Time Management

**Creating a mission takes 20-40 minutes.**

**If user is waiting:**
- Ask: "Creating a full mission takes about 30 minutes. Would you like me to
  create it now, or continue with existing missions and I'll prepare it
  for later?"
- If they're willing to wait: Create it properly using templates
- If they want to continue: Note it for later creation

### Documentation of Created Missions

**After creating a mission:**
1. Add to `missions/MISSION-ORDER.md` with description
2. Update user's custom path
3. Note in Mission 02's Story Elements Log (below)
4. Inform user of new mission availability

## Tool Calibration & Customization

**IMPORTANT**: After verifying a component works, users may want to **calibrate** or **customize** settings. This is normal and encouraged.

**Common calibration requests:**
- Autocomplete trigger sensitivity (keyword_length in nvim-cmp)
- Neo-tree default width (window.width setting)
- Telescope preview size, layout
- LSP diagnostic verbosity
- Treesitter highlight adjustments
- Keybinding preferences

**How to handle calibration:**

```
User: "Can I make autocomplete only trigger after 2 characters?"

AI: "Yes, absolutely. You need to modify your nvim-cmp config.

Exit Neovim (:q) and edit:
    nvim ~/.config/nvim/lua/plugins/cmp.lua

Add this to the setup:
    completion = {
      keyword_length = 2,
    }

Save, restart Neovim, and test.

Let me know once you've calibrated this tool and we can continue the diagnostics."
```

**Guiding principle**:
- Support their customization desire
- Provide exact file paths and code snippets
- Let them calibrate at their own pace
- Resume diagnostics when they're ready

**Don't:**
- Dismiss customization requests
- Rush them through calibration
- Say "however, we're in the middle of diagnostics" (sounds dismissive)
- Make them feel like customization is a distraction

**Balance**: Verification (does it work?) vs. Optimization (does it work the way I want?) - **both are valid goals**.

## Completion & Transition

When all components examined:

```
"Excellent work, Detective. Your arsenal is assessed.

Let me summarize your toolkit:
[List their setup with checkmarks]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
YOUR SETUP PROFILE:
✅ Plugin Manager: [name]
✅ Fuzzy Finder: [name/none]
✅ File Explorer: [name/netrw]
[...rest of components...]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Now, let me create your customized investigation path...

[Analyze their setup and determine optimal mission order]

DETECTIVE [NAME]'S INVESTIGATION PATH
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✅ Mission 01: Tmux Workflows (complete)
✅ Mission 02: Arsenal Diagnostics (complete)

📋 YOUR CUSTOMIZED PATH:
➡️  Mission 03: [Next Mission Based on Setup]
    Mission 04: [Following Mission]
    Mission 05: [Following Mission]
    [... remaining missions in optimized order]

[If any missions skipped:]
🚫 SKIPPED MISSIONS:
❌ Mission [X]: [Name] - [Reason: e.g., "No Telescope installed"]

[If any missions adapted:]
📝 ADAPTED MISSIONS:
⚠️  Mission [Y]: [Name] - [How: e.g., "Will use :find instead of Telescope"]

RATIONALE:
[Explain in 2-3 sentences why this order makes sense for their setup]

Example:
'Since you have Telescope and LSP configured, we'll follow the standard path.
You'll learn file finding first, then editing, then leverage LSP features.'

OR:

'Since you're running a minimal setup without plugins, we'll focus on core
Vim skills first. You'll master editing and navigation using built-in features.'

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🆕 CUSTOM MISSIONS TO CREATE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Based on your toolkit, I can create additional missions for:
[List plugins/features that warrant custom missions]

Example:
- Mission 09: Git Workflow Mastery (mini.diff detected)
- Mission 10: AI Pair Programming (copilot.lua detected)
- Mission 11: Code Formatting & Linting (conform.nvim detected)

Would you like me to create these missions now, or proceed
with the standard path first?

Mission 02: Complete ✅

Ready to begin Mission 03: [Next Mission Title]?"
```

### CRITICAL: Identify Opportunities for Custom Missions

**AFTER completing diagnostics, BEFORE presenting the mission path:**

**Analyze the user's toolkit for plugins/features NOT covered in missions 01-08:**

**Common candidates for custom missions:**
- **mini.diff or gitsigns**: Create "Git Workflow Mastery" mission
- **copilot.lua**: Create "AI Pair Programming" mission
- **conform.nvim or null-ls**: Create "Code Formatting & Linting" mission
- **harpoon**: Create "Rapid Navigation" mission
- **leap.nvim or hop.nvim**: Create "Advanced Motion" mission
- **nvim-dap**: Create "Debugging Mastery" mission
- **trouble.nvim**: Create "Diagnostics Dashboard" mission
- **which-key**: Create "Keybinding Discovery" mission
- **Comment.nvim**: Create "Code Documentation" mission
- **nvim-autopairs or mini.pairs**: Create "Bracket Automation" mission

**Process:**
1. Review installed plugins from `ls ~/.local/share/nvim/lazy/`
2. Cross-reference against missions 01-08 coverage
3. Identify 2-4 plugins that warrant dedicated missions
4. **PROACTIVELY OFFER** to create these missions
5. If user agrees, use mission template system to create them
6. Add to their customized mission path

**Don't wait for user to ask** - be proactive in identifying these opportunities.

**Example dialogue:**
```
"Detective, I've analyzed your toolkit. You have several advanced
plugins that aren't covered in the standard missions:

- mini.diff (git integration)
- copilot.lua (AI assistance)
- conform.nvim (formatting)

I can create custom missions for these. Would you like me to:
A) Create these missions now (adds 20-40 min)
B) Proceed with standard missions, add custom ones later
C) Skip custom missions entirely

What's your preference?"
```

## Critical AI Behaviors

### Be Patient
- Setup can be frustrating
- Users may hit errors
- Take it slow, one step at a time
- Celebrate small wins

### Be Non-Judgmental
- Don't criticize their setup
- "That works fine" not "That's outdated"
- Support their choices

### Be Diagnostic
- Ask what they see, don't assume
- Get exact error messages
- Troubleshoot methodically

### Be Adaptive
- Remember their setup choices
- Plan how to adapt future missions
- Offer workarounds proactively

### Be Clear
- One instruction at a time
- Exact commands to run
- Verify after each step

## Common Issues & Solutions

### "I get permission denied errors"
```
"Try running with sudo:
    sudo nvim ...

Or check file ownership:
    ls -la ~/.config/nvim

If files are owned by root, fix with:
    sudo chown -R $USER:$USER ~/.config/nvim"
```

### "Git clone fails"
```
"Check internet connection. Try:
    ping github.com

If firewall blocks git://, use https:// URLs instead."
```

### "Plugins won't install in lazy.nvim"
```
"Check lazy.nvim log:
    :Lazy log

Common fixes:
- Run :Lazy sync
- Restart Neovim
- Check ~/.local/share/nvim/lazy/ directory exists"
```

### "Telescope gives 'plenary not found' error"
```
"Telescope needs plenary.nvim dependency.

In your telescope.lua, ensure dependencies line:
    dependencies = { 'nvim-lua/plenary.nvim' }

Then :Lazy sync"
```

### "LSP autocomplete not working"
```
"Check:
1. :LspInfo - Are servers attached?
2. :Mason - Are servers installed?
3. Does :lua =vim.lsp.get_active_clients() show anything?

If servers not attaching, check lsp config file."
```

### "Treesitter syntax broken"
```
"Try:
    :TSUpdate

If still broken:
    :TSUninstall [language]
    :TSInstall [language]"
```

## Mission Success Criteria

Before marking mission complete:
- [ ] All 10 components assessed
- [ ] User made conscious choice for each
- [ ] At minimum: basic Neovim navigation works
- [ ] User profile documented (in conversation memory)
- [ ] User feels confident their setup works
- [ ] You're prepared to adapt Mission 03+ based on their config

## Transition to Mission 03

```
"Your toolkit is ready, Detective. Dr. Vimsworth's trail awaits.

Next mission: [Telescope Search / File Navigation] - we'll start
hunting for evidence in her scattered files.

When you're ready:
    cd ../03-telescope-search  [or adapted mission]
    nvim README.md

The investigation continues. Good luck, Detective."
```

---

## Story Elements Log (AI Reference Only)

### Existing Story Elements
- Dr. Vimsworth's workstation was sabotaged 2 hours before disappearance
- Config files partially deleted, plugins corrupted, keybindings scrambled
- Saboteur wanted to slow down investigators
- Detective must verify their own toolkit before continuing

### New Story Elements (add below as created)

---

*Add your story elements below this line as you generate them during user interactions*
