# Mission 01: Telescope Search 🔭

```
╔═══════════════════════════════════════════════════════════╗
║  MISSION BRIEFING                                         ║
║  Codename: SCATTERED FRAGMENTS                            ║
║  Clearance: Level 1                                       ║
║  Status: ACTIVE                                           ║
╚═══════════════════════════════════════════════════════════╝
```

## 📋 Background

Dr. Vimsworth's final commit message mentioned "tokens." Your forensic analysis of her workstation revealed she scattered **13 coded tokens** throughout this codebase, each following the pattern `[{SERIES}-{NUMBER}]`.

Each token contains a hint for finding the next one. Together, they spell out a message.

## 🎯 Objectives

- [ ] Find all 13 hidden tokens using Telescope
- [ ] Document token locations in the checklist below
- [ ] Decode the secret message
- [ ] Locate the hidden `.secrets` directory
- [ ] Discover the bonus easter egg

## 🛠️ Tools You'll Need

### Telescope Commands
- `<Space>ff` - Find files by name
- `<Space>fg` - Live grep (search in file contents)
- `<Space>fo` - Recently opened files
- `<Space>fb` - Open buffers

### Neo-tree Commands
- `<Space>e` - Toggle file explorer
- Use `h/j/k/l` to navigate
- Press `Enter` to open files
- Press `H` to show hidden files

## 📝 Token Checklist

As you find each token, record its location here:

```
[ALPHA-1]   Found in: ___________________ (Line: ___)
[ALPHA-2]   Found in: ___________________ (Line: ___)
[ALPHA-3]   Found in: ___________________ (Line: ___)
[BETA-1]    Found in: ___________________ (Line: ___)
[BETA-2]    Found in: ___________________ (Line: ___)
[BETA-3]    Found in: ___________________ (Line: ___)
[GAMMA-1]   Found in: ___________________ (Line: ___)
[GAMMA-2]   Found in: ___________________ (Line: ___)
[GAMMA-3]   Found in: ___________________ (Line: ___)
[DELTA-1]   Found in: ___________________ (Line: ___)
[DELTA-2]   Found in: ___________________ (Line: ___)
[EPSILON-1] Found in: ___________________ (Line: ___)
[EPSILON-2] Found in: ___________________ (Line: ___)
```

## 🎮 Walkthrough

### Step 1: Explore the Codebase
Open Neo-tree to see the file structure:
```
<Space>e
```

Navigate around. Notice anything suspicious?

### Step 2: Find Your First Token
Dr. Vimsworth always started her days reviewing bug reports. Use Telescope to search for files containing "bug" or "report":

```
<Space>ff
# Type: bug
```

Open the bug report file and read through it carefully. Look for anything that seems out of place or follows a pattern with brackets.

### Step 3: Follow the Breadcrumbs
Each token includes a hint like:
```
[ALPHA-1] "Master the database schema next"
```

This means you should search for database-related files:
```
<Space>fg
# Type: database
```

### Step 4: Advanced Techniques

**Search by file extension:**
```
<Space>ff
# Type: .log    (finds all log files)
# Type: .py     (finds all Python files)
# Type: .sql    (finds all SQL files)
```

**Search for specific patterns in content:**
```
<Space>fg
# Try searching for patterns like:
# - ALPHA
# - BETA
# - GAMMA
# Or follow the hints in each token to find the next one
```

**Search recently opened files:**
```
<Space>fo
```

## 💡 Hints

<details>
<summary>Hint 1: Where to Start (Click to expand)</summary>

The bug report is in the `codebase/` directory. Look for a file with "2024" in the name.
</details>

<details>
<summary>Hint 2: Using Grep Effectively</summary>

When you use `<Space>fg`, you can search for TOKEN to see all files containing tokens. But where's the fun in that? Follow the hints instead!
</details>

<details>
<summary>Hint 3: Hidden Directory</summary>

The `.secrets` directory won't show in Neo-tree by default. Press `H` in Neo-tree to show hidden files, or use `<Space>fg` to search for "secret" in file contents.
</details>

<details>
<summary>Hint 4: Common Token Hiding Spots</summary>

- Deep in error messages within log files
- In SQL table definitions or comments
- As TODO comments in code
- In function names or variable names
- In import statements
- In configuration files
</details>

## 🏆 Success Criteria

**Bronze (Mission Complete):**
- Find all 13 tokens
- Identify the secret message

**Silver (Bonus Challenge):**
- Locate the hidden `.secrets` directory
- Find all 3 intentional typos in the code

**Gold (Expert Challenge):**
- Discover the easter egg (hint: ASCII art visible only when 2+ files are open side by side)
- Find the "memory leak" bug mentioned in comments

## 🔐 Secret Message Decoder

Once you've found all 13 tokens, read the first letter of each hint in order (ALPHA-1, ALPHA-2, ALPHA-3, BETA-1, etc.). They spell out a message.

Write it here:
```
M O T I O N S - A R E - K E Y
```

## ⏭️ Next Steps

Once complete, proceed to Mission 02:
```bash
cd ../02-vim-motions
nvim instructions.md
```

---

**TIP:** Open this instructions file in a split while you hunt for tokens:
```
:vsp instructions.md
Ctrl+w h  (to move back to other split)
```

Good luck, Detective. The pattern is in the tokens.