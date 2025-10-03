# Dr. Vimsworth's Motion Cipher ⛳

**CLASSIFIED TRAINING DOCUMENT** - Found in her encrypted partition

*"Each challenge contains a piece of my escape route. The par scores aren't random - they're coordinates, timestamps, and codes. Master the motions to decode the message."*

Complete each challenge in the FEWEST keystrokes. **But the real puzzle lies in the par scores.**

**MYSTERY**: Why are the par scores 8, 12, 6, 12, 7, 5, 4, 6, 8, 12, 5, 7, 8, 6, 4, 7, 4, 7, 5, 10?

## Challenge 1 (Par: 8)
**Task:** Change "hello" to "goodbye" on the line below

hello world

**Hint:** `/hello<Enter>cw goodbye<Esc>`

## Challenge 2 (Par: 12)
**Task:** Delete everything inside the parentheses below

function test(delete all of this text)

**Hint:** `/ (<Enter>ci(<Esc>`

## Challenge 3 (Par: 6)
**Task:** Add semicolon to end of this line

const x = 42

**Hint:** `$a;<Esc>` or `A;<Esc>`

## Challenge 4 (Par: 10)
**Task:** Change all three instances of 'foo' to 'bar'

const foo = foo + foo;

**Hint:** `/foo<Enter>cw bar<Esc>n.n.`

## Challenge 5 (Par: 7)
**Task:** Delete from cursor to end of line on the next line

Keep this part but delete this entire section here

**Hint:** `j^fbd$` or similar

## Challenge 6 (Par: 5)
**Task:** Delete the content inside these brackets: [keep brackets, delete this text]

[keep brackets, delete this text]

**Hint:** `f[ci[<Esc>` or `%i<C-u><Esc>`

## Challenge 7 (Par: 4)
**Task:** Change 'error' to 'ERROR' (uppercase)

This is an error message

**Hint:** `/error<Enter>gUiw` or `*gUiw`

## Challenge 8 (Par: 6)
**Task:** Jump to the 'x' and delete it

The letter you need to find is x somewhere here

**Hint:** `fxx` or `fx;x`

## Challenge 9 (Par: 8)
**Task:** Delete everything from the opening brace to closing brace (inclusive)

function example() { delete all this code including braces }

**Hint:** `f{da{` or `/{<Enter>da{`

## Challenge 10 (Par: 12)
**Task:** Replace all three 'const' with 'let'

const x = 1; const y = 2; const z = 3;

**Hint:** `/const<Enter>cwlet<Esc>n.n.`

## Challenge 11 (Par: 5)
**Task:** Swap 'first' and 'second'

second first

**Hint:** `dewwP` (delete word, move word, paste before)

## Challenge 12 (Par: 7)
**Task:** Add closing parenthesis at end of function call

console.log("Missing closing paren"

**Hint:** `$a)<Esc>` or `A)<Esc>`

## Challenge 13 (Par: 10)
**Task:** Delete the entire function body (everything between braces)

function broken() {
    let x = 1;
    let y = 2;
    return x + y;
}

**Hint:** `/{<Enter>di{` or on opening brace: `di{`

## Challenge 14 (Par: 3)
**Task:** Jump to line 142 (this would be in a larger file)

**Hint:** `142G` or `:142<Enter>`

## Challenge 15 (Par: 8)
**Task:** Delete everything inside the quotes but keep the quotes

const message = "Delete this text but keep quotes";

**Hint:** `/"<Enter>ci"<Esc>` or `fi"ci"`

## Challenge 16 (Par: 6)
**Task:** Change the function name from 'oldName' to 'newName'

function oldName() {

**Hint:** `/oldName<Enter>ciwnewName<Esc>`

## Challenge 17 (Par: 4)
**Task:** Join these two lines into one

Line one
Line two

**Hint:** `J` (uppercase J joins lines)

## Challenge 18 (Par: 7)
**Task:** Delete from cursor position to the semicolon (inclusive)

const value = something here; keep this

**Hint:** `df;` (delete find semicolon, inclusive)

## Challenge 19 (Par: 5)
**Task:** Go to the matching closing brace and delete the line

if (condition) {
    code here
} <-- delete this line

**Hint:** `%dd` (% jumps to matching brace, dd deletes line)

## Challenge 20 (Par: 10)
**Task:** Change all instances of 'var' to 'const' in the line

var a = 1, var b = 2, var c = 3;

**Hint:** `/var<Enter>cwconst<Esc>n.n.`

---

## 🔐 THE CIPHER

**SCORING:**
- Par Total: 135 keystrokes
- Bronze: Complete 10 challenges
- Silver: Complete all 20 challenges
- Gold: Beat par on 15+ challenges

Your total: ___ keystrokes

---

## 📝 Dr. Vimsworth's Hidden Message

**If you beat par on all 20 challenges, record your actual keystrokes:**

```
Challenge  Par  Your Score  Difference
       1    8      ___         ___
       2   12      ___         ___
       3    6      ___         ___
       ...
```

**Note from recovered files**: *"The par scores encode my safe house coordinates. If you can beat every par, you're ready for field work. The efficiency difference between your score and par reveals another layer... but that's for those who truly master the motions."*

**Mystery**: Some detectives have noticed that the par scores, when viewed as coordinates on a map grid (8,12), (6,12), (7,5), etc., form a pattern. What does it reveal?

**Advanced Puzzle** (Optional): Take the first letter of each challenge's task. What message emerges?
- Challenge 1: **C**hange...
- Challenge 2: **D**elete...
- Challenge 3: **A**dd...
- Continue through all 20...