# Mission 02: Vim Motions ⚡

```
╔═══════════════════════════════════════════════════════════╗
║  MISSION BRIEFING                                         ║
║  Codename: THE MOTIONS                                    ║
║  Clearance: Level 2                                       ║
╚═══════════════════════════════════════════════════════════╝
```

## 📋 The Case

*"The truth is hidden in the motions."* - Dr. Vimsworth's final commit

**Forensic Analysis Report**: Dr. Vimsworth's final months show a dramatic change in her coding patterns. Keystroke analysis reveals:
- **300% increase in motion command usage**
- **Edit completion time dropped by 75%**
- **Pattern suggests she was training under extreme time pressure**

**Why the sudden efficiency obsession?** Her colleague reports she kept saying *"I need to work faster. They're watching. I need to teach someone everything before..."*

**The Motion Golf challenges aren't just exercises - they're her training regimen.** Each par score represents her actual performance under surveillance pressure. She was preparing to transfer critical knowledge in minimal time.

**Your Mission**: Master the same motions she used. Every keystroke you save could be the difference between exposure and escape. **Learn to navigate code like she did—without arrow keys, without a mouse, with pure efficiency born from necessity.**

## 🎯 Objectives

- [ ] Complete Motion Golf challenges (par: 80 keystrokes)
- [ ] Master the operator + motion pattern
- [ ] Use text objects for surgical edits
- [ ] Practice the `.` (repeat) command

## 🛠️ Essential Motions

### Basic Movement
- `h/j/k/l` - Left/Down/Up/Right (avoid arrow keys!)
- `w/W` - Next word/WORD (W ignores punctuation)
- `b/B` - Back word/WORD
- `e/E` - End of word/WORD
- `ge/gE` - Back to end of word/WORD
- `0` - Start of line
- `^` - First non-blank character
- `$` - End of line
- `g_` - Last non-blank character

### Line Jumping
- `gg` - First line of file
- `G` - Last line of file
- `{number}G` - Jump to line number
- `{number}j/k` - Move N lines down/up
- `{number}|` - Jump to column number

### Character Finding (Horizontal Precision)
- `f{char}` - Find character forward
- `F{char}` - Find character backward
- `t{char}` - To character (stop before)
- `T{char}` - To character backward
- `;` - Repeat last find forward
- `,` - Repeat last find backward

### Word/Pattern Search
- `*` - Search word under cursor (forward)
- `#` - Search word under cursor (backward)
- `/{pattern}` - Search forward
- `?{pattern}` - Search backward
- `n` - Next match
- `N` - Previous match

### Block Movement
- `{` - Previous paragraph/block
- `}` - Next paragraph/block
- `%` - Jump to matching bracket/paren
- `[(` - Previous unmatched `(`
- `])` - Next unmatched `)`
- `[{` - Previous unmatched `{`
- `]}` - Next unmatched `}`

### Screen Navigation
- `H` - High (top of screen)
- `M` - Middle of screen
- `L` - Low (bottom of screen)
- `Ctrl+u` - Scroll up half page
- `Ctrl+d` - Scroll down half page
- `Ctrl+b` - Scroll up full page (conflicts with tmux!)
- `Ctrl+f` - Scroll down full page
- `zt` - Scroll cursor to top
- `zz` - Scroll cursor to center
- `zb` - Scroll cursor to bottom

### Operators
- `d` - Delete
- `c` - Change (delete + insert mode)
- `y` - Yank (copy)
- `p/P` - Paste after/before cursor
- `x` - Delete character under cursor
- `r{char}` - Replace single character
- `s` - Substitute character (delete + insert)
- `~` - Toggle case
- `gu` - Make lowercase
- `gU` - Make UPPERCASE

### Text Objects
- `iw/aw` - Inner/around word
- `iW/aW` - Inner/around WORD
- `is/as` - Inner/around sentence
- `ip/ap` - Inner/around paragraph
- `i{/a{` `i}/a}` - Inside/around braces
- `i(/a(` `i)/a)` - Inside/around parentheses
- `i[/a[` `i]/a]` - Inside/around brackets
- `i</a<` `i>/a>` - Inside/around angle brackets
- `i"/a"` - Inside/around double quotes
- `i'/a'` - Inside/around single quotes
- `i`` /a`` ` - Inside/around backticks
- `it/at` - Inside/around HTML/XML tags

### The Formula
```
[count][operator][text object/motion]

dw     = delete word
3dw    = delete 3 words
ciw    = change inner word
di{    = delete inside braces
da"    = delete around quotes (includes quotes)
y2ap   = yank 2 paragraphs around
gUiw   = UPPERCASE inner word
```

### Power Moves
- `.` - Repeat last change
- `u` - Undo
- `Ctrl+r` - Redo
- `>>` - Indent line
- `<<` - Unindent line
- `==` - Auto-indent line
- `J` - Join line below to current

## 🎮 Challenges

1. **Motion Golf** (`motion-golf.md`) - 20 edit challenges with par scores
2. **Advanced Training** (`advanced-motions.md`) - Dr. Vimsworth's practice drills
3. **Broken Code** (`broken-code.js`) - Fix bugs using only motions
4. **Motion Playground** (`practice-motions.txt`) - Free practice space

## 📖 Keystroke Breakdown Example

**Challenge**: Change "hello" to "goodbye"

```
/hello<Enter>    Search for "hello" (jumps to it)
cw               Change word (deletes "hello", enters insert mode)
goodbye          Type replacement
<Esc>            Exit insert mode
```

**Total**: 8 keystrokes (including typing "goodbye")

## 🏆 Success Criteria

**Bronze**: Complete 10 Motion Golf challenges (Basic proficiency)
**Silver**: Complete all 20 challenges under par (135 total) - *Match Dr. Vimsworth's training scores*
**Gold**: Master 5+ advanced motion techniques + beat par - *Surpass her efficiency under pressure*

---

## 🎯 Training Log - Dr. Vimsworth's Final Weeks

**Recovered from her personal notes:**

*"Week 1: 45 seconds for simple refactoring. Too slow. They'll notice if I take too long on 'normal' work while extracting evidence.*

*Week 3: 12 seconds. Better. Motion muscle memory developing. `ciw` and `da{` becoming automatic.*

*Week 6: 8 seconds. Good enough to work under surveillance. Ready to begin document extraction.*

*Week 8: [REDACTED] - If you're reading this, I succeeded in training you remotely. The motions aren't just about speed - they're about leaving no suspicious traces. Quick edits look like normal work. Master them."*

**Evidence**: Her final keystroke logs show motion command usage approaching inhuman efficiency. She wasn't just coding - she was conducting a high-stakes operation.

## ⏭️ Next Mission

```bash
cd ../03-visual-mastery
nvim README.md
```

---

**PROFESSIONAL SETUP**: Use split panes
```
Ctrl+b %              Split vertically
Left:  README.md (reference)
Right: motion-golf.md (practice)
Ctrl+b →/←            Navigate panes
```