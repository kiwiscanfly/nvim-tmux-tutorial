# Example: Mission 06 README.md (Completed Template)

This is a real example of a completed README.md from Mission 06: Text Object Mastery.

---

# Mission 07: Advanced Text Objects 🎯

```
╔═══════════════════════════════════════════════════════════╗
║  MISSION BRIEFING                                         ║
║  Codename: SURGICAL PRECISION                             ║
║  Clearance: Level 4                                       ║
║  Status: CLASSIFIED                                       ║
╚═══════════════════════════════════════════════════════════╝
```

## 📋 The Case

**Advanced Forensics Report - Pattern Recognition Unit**

Detective, we've uncovered something extraordinary in Dr. Vimsworth's editing logs. Her precision wasn't just skill—she had **enhanced text object capabilities** through a plugin called **mini.ai**.

### What is mini.ai?

**mini.ai** is a Neovim plugin that supercharges your text objects. Remember `iw` (inner word), `i"` (inside quotes), `i{` (inside braces)? mini.ai **extends** these and adds **powerful new ones**.

**Standard Vim gives you:**
- `iw` - inner word
- `i"` - inside quotes
- `i(` - inside parentheses
- `ip` - inner paragraph

**mini.ai extends these and adds:**
- `af` / `if` - **around/inside function call** (the entire `func(args)`)
- `aa` / `ia` - **around/inside argument** (individual function arguments)
- `a?` / `i?` - **user-prompted text object** (you type what to find)
- **Next/Last searching**: `in)` finds **next** `)` text object, `il)` finds **last**
- **Smarter matching**: Better bracket/quote detection, whitespace handling
- **Treesitter integration**: Language-aware semantic text objects

**Why it matters**: Dr. Vimsworth didn't edit *characters*—she operated on *semantic units*. A function call isn't 47 characters. It's **one object**. And she could manipulate it with 2 keystrokes.

**The Evidence:**
- Function extractions completed in 2.3 seconds (average developer: 45 seconds)
- Argument manipulation across 15 files simultaneously
- Surgical code extraction with zero collateral damage
- **Pattern**: She operated on meaning, not syntax

**Your mission**: Master the same enhanced text object system she used to work at superhuman speeds.

## 🎮 THE TEXT OBJECT ARENA - A Refactoring Game

Welcome to Dr. Vimsworth's training simulator, Detective. This isn't just practice—it's a **speed challenge**.

### Game Objective
Refactor the intentionally terrible code in `text-object-arena.js` using ONLY enhanced text objects from mini.ai. Your score is based on **keystroke efficiency** and **time**.

### Scoring System
- **Par Score**: 50 keystrokes (Dr. Vimsworth's record)
- **Gold Medal**: < 60 keystrokes
- **Silver Medal**: < 80 keystrokes
- **Bronze Medal**: < 100 keystrokes
- **Beginner**: Complete it (any keystroke count)

### Arena Challenges (all in one file)

**LEVEL 1: Function Call Chaos** (10 points)
- 5 nested function calls need to be extracted to variables
- Use `daf` to delete entire function calls
- Use `yif` to copy just the arguments
- Par: 15 keystrokes

**LEVEL 2: Argument Madness** (15 points)
- 8 function calls with arguments in wrong order
- Use `via` to select arguments
- Use `daa` to delete arguments (with commas)
- Use `cia` to change arguments
- Par: 20 keystrokes

**LEVEL 3: Quote Labyrinth** (10 points)
- 6 nested string concatenations to simplify
- Use `in"` to jump to next quote
- Use `il"` to jump to last quote
- Use `di"` to delete inside quotes
- Par: 10 keystrokes

**LEVEL 4: Bracket Hell** (10 points)
- Deeply nested objects need flattening
- Use `in{` / `il{` to navigate
- Use `g[` / `g]` to jump to edges
- Use `da{` to delete entire blocks
- Par: 8 keystrokes

**LEVEL 5: The Vimsworth Pattern** (25 points - BOSS LEVEL)
- Complex refactoring combining all techniques
- Extract, reorder, rename, restructure
- This is what she did daily
- Par: 7 keystrokes (seems impossible, but she did it)

### How to Play

1. **Open the arena**: `nvim text-object-arena.js`
2. **Read the instructions** in comments (each level is marked)
3. **Track your keystrokes**: Use `.arena-scorecard.md` to log attempts
4. **Beat Dr. Vimsworth's par** on each level
5. **Unlock the secret message** when you complete all levels

### Game Rules
- ✅ Allowed: Any vim motion, mini.ai text objects, operators (d/y/c)
- ✅ Allowed: Macros (for advanced players)
- ❌ Forbidden: Mouse clicks
- ❌ Forbidden: Visual mode (text objects only!)
- ❌ Forbidden: Manual character-by-character editing

### Tracking Your Score

After each level, update `.arena-scorecard.md`:
```
Level 1: [X] keystrokes | Par: 15 | Status: [PASS/FAIL]
Level 2: [X] keystrokes | Par: 20 | Status: [PASS/FAIL]
...
Total: [X] keystrokes | Par: 50 | Medal: [GOLD/SILVER/BRONZE]
```

### Hidden Bonus Challenges
- 🏃 **Speed Run**: Complete all levels in under 3 minutes
- 🎯 **Perfect Score**: Match Dr. Vimsworth's par exactly (50 keystrokes)
- 🧠 **Macro Master**: Complete Level 5 using a single macro
- 🔍 **Custom Objects**: Use `a?` at least once

## 🛠️ Enhanced Text Objects Reference

### Function Text Objects (`af` / `if`)
```javascript
// Cursor anywhere in calculateTotal(...)
calculateTotal(price, tax, discount)
               ^cursor here

daf  → Delete entire function call
yif  → Yank just the arguments: price, tax, discount
caf  → Change entire function call
```

### Argument Text Objects (`aa` / `ia`)
```python
# Cursor on middle argument
function(arg1, arg2, arg3)
               ^cursor here

via  → Select 'arg2'
daa  → Delete 'arg2,' (including comma)
cia  → Change 'arg2' to something else
```

### Next/Last Navigation
```
cin"  → Change inside **next** " quote
dil(  → Delete inside **last** ( parenthesis
yin}  → Yank inside **next** } brace
```

### Edge Jumping
```
g[    → Jump to left edge of current text object
g]    → Jump to right edge of current text object
```

### User-Prompted Text Object (`a?` / `i?`)
```
da?   → Prompts: "Delete around what?"
      → You type: "function"
      → Deletes around the word "function"
```

## 🎯 Quick Start

```bash
# Open the game
nvim text-object-arena.js

# Split with your scorecard
:vsplit .arena-scorecard.md

# Start Level 1
# Read instructions, complete challenge, log score

# When you beat par on all levels...
# Check for a hidden message
```

## 🏆 Success Criteria

You've mastered this mission when you:
- ✅ Complete all 5 arena levels
- ✅ Achieve at least Bronze medal (< 100 keystrokes total)
- ✅ Understand when to use `af`, `aa`, `in`, `il` text objects
- ✅ Can refactor code 3x faster than before
- ✅ Never manually count brackets/quotes again

## 💡 Pro Tips from Dr. Vimsworth's Notes

```
"Text objects are the quantum mechanics of editing. Most developers see
characters. I see semantic atoms.

A function isn't 47 characters—it's ONE unit.
An argument isn't 'variable_name'—it's a parameter in a contract.

While investigators counted my keystrokes, I counted thoughts.

Master text objects, and code becomes clay in your hands.

P.S. - Level 5 seems impossible at 7 keystrokes. Trust me, it's not.
       Think in patterns, not edits."
```

## ⏭️ What's Next?

After conquering the Arena:

```bash
# Check your achievements
cat .arena-scorecard.md

# If you got Gold or better, check for hidden content
cat .vimsworth-secret.txt

# Ready for the next mission?
cd ../08-macro-mastery
nvim README.md
```

**Detective's Note**: The text-object-arena.js file contains Dr. Vimsworth's actual training simulator. She ran this daily to maintain her edge. Beat her scores, and you'll understand why they called her "The Code Surgeon."

Good hunting, Detective. 🎯

---

## Analysis: What Makes This README Effective

### Strong Story Integration
- Opens with forensic report (detective theme)
- Connects mini.ai to Dr. Vimsworth's superhuman speed
- Evidence-based framing (2.3 seconds vs 45 seconds)
- Creates urgency and motivation

### Clear Explanation of New Concept
- Explicitly defines what mini.ai is
- Shows what standard vim offers vs. what mini.ai adds
- Uses examples to demonstrate each text object
- Explains the "why" (semantic editing vs character editing)

### Gamification
- Arena structure with levels and scoring
- Par scores create clear targets
- Medal tiers (Gold/Silver/Bronze) provide milestones
- Boss level creates challenge and "aha!" moment
- Hidden bonuses encourage exploration

### Comprehensive Command Reference
- Visual examples with cursor positions
- Before/after demonstrations
- Organized by text object type
- Quick reference format for during gameplay

### Clear Success Criteria
- Specific checkboxes for completion
- Performance benchmarks (Bronze medal minimum)
- Skill mastery indicators
- No ambiguity about "mission complete"

### Seamless Transitions
- Teases next mission (macro mastery)
- Provides exact commands to navigate
- Contextualizes how missions connect
- Maintains story momentum

### Detective Noir Tone Throughout
- Dr. Vimsworth's quoted notes
- "Code Surgeon" nickname
- Evidence-based observations
- Professional but mysterious language
