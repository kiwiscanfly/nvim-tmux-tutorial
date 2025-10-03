# Mission 04: Buffer Management 📚

```
╔═══════════════════════════════════════════════════════════╗
║  MISSION BRIEFING                                         ║
║  Codename: THE BUFFER PUZZLE                              ║
║  Clearance: Level 4                                       ║
║  Status: ACTIVE                                           ║
╚═══════════════════════════════════════════════════════════╝
```

## 📋 The Case - The Conspiracy Unfolds

**Internal Investigation Report - CONFIDENTIAL**

Analysis of Dr. Vimsworth's final weeks reveals a shocking truth: **She discovered Project Prometheus was a front.** Buffer management logs show her systematically investigating connections across dozens of files, building a comprehensive case.

**The Pattern:**
- 47 files opened simultaneously
- Cross-file function call tracing
- Evidence compilation across multiple codebases
- **Pattern suggests she wasn't working alone**

**The Buffer Puzzle isn't random** - it's her actual investigation path. Someone helped her map these connections. The file relationships you'll trace are the same ones she followed to uncover the conspiracy.

**Warning**: Recent logs show someone else has been following the same file paths. **You're not the only one investigating her work.**

**Your Mission**: Follow her investigation trail. Discover what Project Prometheus was really hiding. Find out who was helping her.

## 🎯 Objectives

- [ ] Navigate between 10+ interconnected files
- [ ] Solve the buffer puzzle by following function calls
- [ ] Never use the mouse
- [ ] Complete in under 15 minutes

## 🛠️ Buffer Commands

- `:e filename` - Open file
- `:bn` / `:bp` - Next/previous buffer
- `:b{number}` - Jump to buffer number
- `:ls` - List all buffers
- `Ctrl+6` or `Ctrl+^` - Toggle last two buffers
- `<Space>fb` - Telescope buffer browser

## 🧩 The Investigation Trail

**Dr. Vimsworth's Final Case Notes Found Hidden in Comments:**

*"They think I'm just debugging, but I'm mapping their entire operation. Each function call leads to another piece of evidence. The conspiracy spans the whole codebase."*

The files in `project-files/` contain her investigation chain:
- Start with `main.js` - her entry point into the conspiracy
- Follow the function calls like she did
- **Each file reveals another layer of the cover-up**
- Document your discoveries - someone needs to carry on her work

**New Evidence**: Git logs show someone else modified these files recently. **Her ally is still active, still helping the investigation.**

**Question**: If you complete her investigation trail, will you meet her mysterious partner?

## ⏭️ Next Steps

```bash
cd ../05-tmux-workflows
nvim README.md
```