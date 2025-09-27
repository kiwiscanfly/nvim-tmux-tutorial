# Mission 04: Buffer Management 📚

```
╔═══════════════════════════════════════════════════════════╗
║  MISSION BRIEFING                                         ║
║  Codename: THE BUFFER PUZZLE                              ║
║  Clearance: Level 4                                       ║
║  Status: ACTIVE                                           ║
╚═══════════════════════════════════════════════════════════╝
```

## 📋 Background

Dr. Vimsworth could juggle 20 files simultaneously without losing her place. The secret? Buffer mastery.

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

## 🧩 The Puzzle

The files in `project-files/` contain a chain of function calls.
Start with `main.js` and follow the trail through all files.

Each file contains a hint pointing to the next file.
Document your path in buffer-puzzle.md.

## ⏭️ Next Steps

```bash
cd ../05-tmux-workflows
nvim instructions.md
```