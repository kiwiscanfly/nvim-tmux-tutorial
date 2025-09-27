# Mission 02: Vim Motions ⚡

```
╔═══════════════════════════════════════════════════════════╗
║  MISSION BRIEFING                                         ║
║  Codename: THE MOTIONS                                    ║
║  Clearance: Level 2                                       ║
║  Status: ACTIVE                                           ║
╚═══════════════════════════════════════════════════════════╝
```

## 📋 Background

*"The truth is hidden in the motions."* - Dr. Vimsworth's final commit

You've found the files. Now learn to move through them like she did—without arrow keys, without a mouse, with pure efficiency.

## 🎯 Objectives

- [ ] Complete Motion Golf (par: 80 keystrokes)
- [ ] Fix all broken code using only specified motions
- [ ] Practice repetitive patterns
- [ ] Master the `.` (repeat) command

## 🛠️ Key Motions to Master

### Movement
- `w` / `b` / `e` - Word navigation
- `0` / `$` - Line start/end
- `f{char}` / `t{char}` - Find character
- `%` - Jump to matching bracket
- `{` / `}` - Paragraph navigation

### Editing
- `cw` - Change word
- `ci{` / `ca{` - Change inside/around brackets
- `x` - Delete character
- `dd` - Delete line
- `.` - Repeat last change

## 🏌️ Motion Golf Challenge

Open `motion-golf.md` and complete each challenge in the fewest keystrokes possible.

Par scores:
- Beginner: 120 keystrokes
- Intermediate: 80 keystrokes
- Expert: 50 keystrokes

## 🔧 Broken Code Challenge

Open `broken-code.js` - Each function has intentional errors with comments explaining which motion to use for the fix.

## 📊 Track Your Score

```
Challenge 1: ___ keystrokes (par: 8)
Challenge 2: ___ keystrokes (par: 12)
Challenge 3: ___ keystrokes (par: 15)
...
Total: ___ keystrokes
```

## ⏭️ Next Steps

After completion:
```bash
cd ../03-visual-mastery
nvim instructions.md
```