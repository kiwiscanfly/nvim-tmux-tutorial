# Mission 01: Telescope Search 🔭

```
╔═══════════════════════════════════════════════════════════╗
║  MISSION BRIEFING                                         ║
║  Codename: SCATTERED FRAGMENTS                            ║
║  Clearance: Level 1                                       ║
╚═══════════════════════════════════════════════════════════╝
```

## 📋 The Case

Three weeks before her disappearance, Dr. Vimsworth told her colleague: *"If something happens to me, remember: I always leave breadcrumbs."*

She scattered **13 coded tokens** throughout this codebase - but this wasn't random. Analysis of the timestamps shows she placed them methodically over her final weeks, each one a deliberate clue in a larger puzzle.

**The pattern `[{SERIES}-{NUMBER}]`** isn't just organization - it's a message system. Someone else has been looking for these tokens. Your search logs show **recent access attempts from unknown IP addresses**.

**You're racing against time.** Find all 13 tokens before they do. Decode the secret message she died to protect.

**Warning:** Strange network activity detected on Project Prometheus servers. Someone is watching the token locations.

## 🎯 Objectives

- [ ] Find all 13 hidden tokens
- [ ] Decode the secret message (first letter of each hint)
- [ ] Locate the hidden `.secrets` directory
- [ ] Discover the bonus easter egg

## 🛠️ Your Tools

**Telescope:**
- `<Space>ff` - Find files by name
- `<Space>fg` - Search in file contents (live grep)
- `<Space>fb` - Open buffers
- `<Space>fo` - Recently opened files

**Neo-tree:**
- `<Space>e` - Toggle file explorer
- `h/j/k/l` - Navigate
- `Enter` - Open file
- `H` - Show hidden files

## 📝 Token Tracker

Record your discoveries:

```
[ALPHA-1]   Line: ___ File: _______________
[ALPHA-2]   Line: ___ File: _______________
[ALPHA-3]   Line: ___ File: _______________
[BETA-1]    Line: ___ File: _______________
[BETA-2]    Line: ___ File: _______________
[BETA-3]    Line: ___ File: _______________
[GAMMA-1]   Line: ___ File: _______________
[GAMMA-2]   Line: ___ File: _______________
[GAMMA-3]   Line: ___ File: _______________
[DELTA-1]   Line: ___ File: _______________
[DELTA-2]   Line: ___ File: _______________
[EPSILON-1] Line: ___ File: _______________
[EPSILON-2] Line: ___ File: _______________
```

## 🚀 Quick Start - The Hunt Begins

1. **Find the first token**: Her final personal log mentions "always start where things break" - check bug reports from 2024
2. **Read the hint carefully**: Each token contains her fear, her urgency, her determination
3. **Follow her digital breadcrumbs**: Use Telescope to search for keywords, but work quickly
4. **Trust her system**: She chose this method for a reason

**Secret Message**: __ __ __ __ __ __ __ - __ __ __ - __ __ __

**Dr. Vimsworth's Digital Ghost**: *"The watchers think I'm gone, but the truth persists in the tokens. Find them all, Detective. The pattern will save lives."*

## 🏆 Success Criteria

**Mission Complete**: Find all 13 tokens and decode the message

**Bonus**: Locate `.secrets` directory and discover the easter egg

## ⏭️ Next Mission

```bash
cd ../02-vim-motions
nvim README.md
```

---

**TIP**: Open this file in a split while hunting for tokens:
```
:vsp README.md
Ctrl+w h  # Move to other split
```