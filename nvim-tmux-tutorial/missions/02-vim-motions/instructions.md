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

### Basic Movement
- `w` - Move forward to start of next word
- `b` - Move backward to start of previous word
- `e` - Move to end of current/next word
- `0` - Jump to start of line
- `$` - Jump to end of line
- `gg` - Jump to top of file
- `G` - Jump to bottom of file
- `{number}G` - Jump to specific line number
- `{number}j` / `{number}k` - Move down/up N lines

### Advanced Movement
- `f{char}` - Find and jump to next occurrence of character
- `t{char}` - Jump until (before) next occurrence of character
- `F{char}` / `T{char}` - Same as f/t but backward
- `%` - Jump to matching bracket/parenthesis
- `{` / `}` - Jump between paragraphs/blocks

### Editing Operators
- `d` - Delete (combine with motion: `dw`, `d$`, `dd`)
- `c` - Change (delete and enter insert mode)
- `y` - Yank (copy)
- `x` - Delete single character under cursor

### Text Objects (use with operators)
- `iw` - Inner word
- `i{` / `i(` / `i[` - Inside brackets/parens
- `i"` / `i'` - Inside quotes
- `a{` / `a(` / `a[` - Around brackets (includes brackets)

### Common Examples
- `dw` - Delete word
- `cw` - Change word
- `ciw` - Change inner word
- `da{` - Delete around braces (includes braces)
- `ci"` - Change inside quotes
- `dd` - Delete entire line
- `yy` - Yank (copy) entire line
- `.` - Repeat last change (most powerful motion!)

## 📖 Detailed Keystroke Breakdowns

Study these sequences from the Motion Golf challenges to understand the patterns:

### Challenge 1: `/hello<Enter>cw goodbye<Esc>` (8 keystrokes)
**Task:** Change "hello" to "goodbye"
```
/hello     - Search for "hello" (opens search prompt)
<Enter>    - Execute search (cursor jumps to match)
c          - Change operator (prepares to delete and insert)
w          - Motion: forward to next word (deletes "hello", enters insert mode)
goodbye    - Type the replacement text
<Esc>      - Exit insert mode back to normal mode
```

### Challenge 2: `/ (<Enter>ci(<Esc>` (12 keystrokes)
**Task:** Delete everything inside parentheses
```
/ (        - Search for " (" (space + opening parenthesis)
<Enter>    - Execute search
c          - Change operator
i(         - Text object: inside parentheses (finds content between ())
<Esc>      - Exit insert mode (leaves empty parentheses)
```
**Alternative (if cursor already on line):** `ci(<Esc>` (4 keystrokes)

### Challenge 3: `$a;<Esc>` OR `A;<Esc>` (4 or 3 keystrokes)
**Task:** Add semicolon to end of line
```
Method 1:
$          - Jump to end of current line
a          - Append after cursor (enters insert mode)
;          - Type semicolon
<Esc>      - Exit insert mode

Method 2 (better):
A          - Append at end of line (shortcut combining $ and a)
;          - Type semicolon
<Esc>      - Exit insert mode
```

### Challenge 4: `/foo<Enter>cw bar<Esc>n.n.` (10 keystrokes)
**Task:** Change all three "foo" to "bar"
```
/foo       - Search for "foo"
<Enter>    - Execute (jumps to first match)
c          - Change operator
w          - Motion: word (deletes "foo", enters insert mode)
bar        - Type replacement
<Esc>      - Exit insert mode
n          - Jump to next search match (second "foo")
.          - Repeat last change (automatically does: cw bar<Esc>)
n          - Jump to next match (third "foo")
.          - Repeat last change again
```
**Key insight:** The `.` command is your efficiency multiplier!

### Challenge 5: `j^fbd$` (5 keystrokes)
**Task:** Delete "but delete this entire section here"
```
j          - Move down one line
^          - Jump to first non-whitespace character
f          - Find character (next keystroke specifies which)
b          - The character to find: "b" (jumps to "but")
d          - Delete operator
$          - Motion: to end of line (deletes from cursor to end)
```

### Search Command Deep Dive
```
/pattern   - Search forward for "pattern"
?pattern   - Search backward for "pattern"
n          - Jump to next match (same direction)
N          - Jump to previous match (opposite direction)
*          - Search for word under cursor (forward)
#          - Search for word under cursor (backward)
```

### The Vim Grammar Formula
```
[operator] + [motion/text-object]

Examples:
d + w  = dw   (delete word)
c + i( = ci(  (change inside parentheses)
y + $  = y$   (yank/copy to end of line)
d + d  = dd   (delete line - special case)
```

## 🏌️ Motion Golf Challenge

Open `motion-golf.md` and complete each challenge in the fewest keystrokes possible.

```bash
nvim motion-golf.md
```

Par scores:
- Beginner: 120 keystrokes
- Intermediate: 80 keystrokes
- Expert: 50 keystrokes (Dr. Vimsworth's record: 43)

**Pro Tips:**
- Use `u` to undo a change
- Use `:e!` to reload file and discard all changes
- Remember: count starts from normal mode
- The `.` (dot) command repeats your last change - use it liberally!

## 🔧 Broken Code Challenge

Open `broken-code.js` - Each function has intentional errors with comments explaining which motion to use for the fix.

```bash
nvim broken-code.js
```

**10 Challenges** ranging from basic typo fixes to advanced text object manipulation.

## 📝 Practice Files

**motion-golf.md** - 5 scored challenges with hints
**broken-code.js** - 10 code-fixing exercises
**practice-motions.txt** - Free-form practice area

```bash
nvim practice-motions.txt
```

Use the practice playground to experiment without pressure before attempting scored challenges.

## ⏭️ Next Steps

After completion:
```bash
cd ../03-visual-mastery
nvim instructions.md
```