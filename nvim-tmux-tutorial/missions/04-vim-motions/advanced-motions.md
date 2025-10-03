# Advanced Motion Training 🎯

This file contains focused exercises for mastering advanced Vim motions.
Dr. Vimsworth practiced these techniques daily.

---

## SECTION 1: Character Finding Mastery

### Exercise: f/F/t/T and ; , commands

The quick brown fox jumps over the lazy dog quickly
Practice: fx (find x), ; (next x), , (previous x)

Find the 'o' characters in this sentence only once
Practice: fo (find first o), ; ; ; (repeat forward)

Navigate backwards finding 't' in this text that contains multiple t's
Practice: Ft (find t backward), ; (repeat backward)

Move TO (not ON) the letter 'm' in this example stream of text
Practice: tm (to m, stops before), ; (repeat)

**Goal**: Never use arrow keys for horizontal movement within a line!

---

## SECTION 2: Block Movement Excellence

### Exercise: { } paragraph jumping

This is paragraph one.
It has multiple lines.
You should practice jumping.

This is paragraph two.
Practice using } to jump forward.
And { to jump backward.

This is paragraph three.
Master this for navigating code.

function example1() {
    // This is a code block
    const x = 1;
}

function example2() {
    // Another code block
    const y = 2;
}

**Challenge**: Jump between functions using { and }

---

## SECTION 3: Bracket Mastery

### Exercise: % for bracket matching

Navigate these nested structures:

const config = {
    settings: {
        theme: "dark",
        options: ["one", "two", "three"]
    }
}

function calculate(x, y, z) {
    if (x > 0) {
        return (x + y) * z;
    }
}

const array = [1, [2, [3, [4, 5]]]];

**Practice**:
1. Put cursor on opening `{`, press `%` to jump to matching `}`
2. Try with `(`, `[`, `<` in various places
3. Use `%` to navigate nested structures

---

## SECTION 4: Screen Position Navigation

### Exercise: H M L (High, Middle, Low)

When this file is open in Neovim:
- Press `H` to jump to High (top of visible screen)
- Press `M` to jump to Middle
- Press `L` to jump to Low (bottom of visible screen)

Combine with operators:
- `dH` - delete from cursor to top of screen
- `yM` - yank to middle of screen

---

## SECTION 5: Word vs WORD

### Exercise: w vs W, b vs B

Navigate these differently:
snake_case_variable_name (w stops at underscores, W doesn't)
kebab-case-variable-name (w stops at dashes, W doesn't)
path/to/some/file.txt (w stops at slashes, W doesn't)
email@example.com (w stops at @ and ., W doesn't)

**Practice**:
- Use `w` to navigate through each part
- Use `W` to jump the entire WORD
- Notice the difference!

---

## SECTION 6: Search Under Cursor

### Exercise: * and #

Find the word 'target' by placing cursor on it and pressing *

The target is here. We need to find target everywhere.
This target appears multiple times. Each target matters.
Press * on target to search forward. Press # to search backward.

**Bonus**: Combine with c for quick refactoring
Place cursor on 'target', press *, then `ciw` to change it!

---

## SECTION 7: Scrolling Mastery

### Exercise: Ctrl+u/d/f and zt/zz/zb

**Scrolling Commands** (practice with this file):
- `Ctrl+d` - Scroll down half page
- `Ctrl+u` - Scroll up half page
- `Ctrl+f` - Scroll down full page
- `Ctrl+b` - Scroll up full page (NOTE: Conflicts with tmux!)

**Positioning Commands**:
- `zt` - Scroll so cursor line is at top
- `zz` - Scroll so cursor line is at center (great for focus!)
- `zb` - Scroll so cursor line is at bottom

**Pro Tip**: Use `zz` after jumping to a search result to center it!

---

## SECTION 8: Text Object Mastery

### Exercise: All text objects

Practice on this sentence with "quoted words" and 'single quotes' too.

function example(param1, param2) {
    const data = {
        name: "Dr. Vimsworth",
        skills: ["vim", "tmux", "efficiency"]
    };

    if (data.skills.length > 0) {
        return `Found ${data.skills.length} skills`;
    }
}

<div class="container">
    <p>HTML text objects work too!</p>
</div>

**Practice these combinations**:
- `ciw` - change inner word (cursor anywhere in word)
- `ci"` - change inside quotes
- `ci{` - change inside braces
- `ci(` - change inside parentheses
- `cit` - change inside HTML tag
- `cap` - change around paragraph
- `das` - delete around sentence

**Remember**:
- `i` = inner (excludes delimiters)
- `a` = around (includes delimiters)

---

## SECTION 9: Case Manipulation

### Exercise: ~, gu, gU

change THIS text to DIFFERENT cases

**Commands**:
- `~` on a character toggles case (a → A, A → a)
- `gUiw` - UPPERCASE inner word
- `guiw` - lowercase inner word
- `gU$` - UPPERCASE to end of line
- `gu$` - lowercase to end of line

Transform This Title Case Into Different Cases

---

## SECTION 10: Indentation Operations

### Exercise: >>, <<, ==

Adjust indentation on these lines:
no indent
    one indent
        two indents
    back to one

function badlyIndented() {
const x = 1;
if (true) {
return x;
}
}

**Commands**:
- `>>` - Indent line right
- `<<` - Indent line left
- `==` - Auto-indent line
- `3>>` - Indent 3 lines
- `>ap` - Indent around paragraph
- `gg=G` - Auto-indent entire file (from top to bottom)

---

## SECTION 11: Join Lines

### Exercise: J command

Combine
these
multiple
lines
into
one

**Command**: `J` (uppercase J) joins current line with line below

**Practice**:
- `J` - Join with one space
- `gJ` - Join without adding space
- `3J` - Join 3 lines together

---

## SECTION 12: The Ultimate Combinations

### Real-world refactoring scenarios

Scenario 1: Change function parameter
function oldFunction(wrongParam, anotherParam) {
    return wrongParam + anotherParam;
}
**Solution**: Cursor on 'wrongParam', `*` then `ciw` to change all

Scenario 2: Delete debugging code
console.log("debug 1");
const result = calculate();
console.log("debug 2");
return result;
**Solution**: `/console<Enter>dd` then `n.n.` (search, delete, repeat)

Scenario 3: Extract string to variable
const message = "This is a long string that should be a variable";
**Solution**: `ci"` then type variable name

---

## FINAL CHALLENGE: Speed Drill

**Task**: Complete these edits as fast as possible

1. Change 'function' to 'async function' (do NOT use substitute command)
function getData() {

2. Delete everything inside the brackets
const numbers = [1, 2, 3, 4, 5];

3. Uppercase the word 'important'
This is an important message

4. Jump to the closing brace and add a semicolon
const obj = { key: "value" }

5. Swap these two variables
let b = 1; let a = 2;

6. Delete from cursor to the end of the function call
console.log("keep", "delete", "this");

**Time yourself**: Professional Vim users can do all 6 in under 60 seconds!

---

**Dr. Vimsworth's Final Note**:
"The motions are not commands to memorize.
They are a language to internalize.
Practice until thought becomes motion.

Detective, if you've found this advanced training file, you're ready for the truth. I wasn't just optimizing for speed - I was optimizing for stealth. Quick motions look like normal work. Fumbling with arrow keys looks suspicious.

They were watching my every keystroke. Every second I saved was another piece of evidence I could extract.

Master these techniques not just for efficiency, but for survival."