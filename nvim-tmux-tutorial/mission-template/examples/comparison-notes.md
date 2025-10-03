# Mission Design: Good vs Bad Examples

This document analyzes what makes missions effective or ineffective, using real examples from the tutorial.

---

## Story Integration

### ✅ GOOD: Mission 06 (Text Object Mastery)

**What it does well:**
```
"Detective, we've uncovered something extraordinary in Dr. Vimsworth's
editing logs. Her precision wasn't just skill—she had enhanced text
object capabilities through a plugin called mini.ai."
```

- Connects the technical feature (mini.ai) to the investigation
- Makes the skill feel essential to understanding Dr. Vimsworth
- Uses evidence-based framing (editing logs, forensic analysis)
- Creates urgency and motivation to learn

### ❌ BAD Example (What to Avoid):

```
"In this mission, you'll learn about text objects. Text objects are
useful for editing code efficiently. Let's get started!"
```

- Generic tutorial language
- No story connection
- No motivation beyond "it's useful"
- Breaks immersion

---

## Teaching Approach

### ✅ GOOD: Mission 04 (Vim Motions) - Progressive Hints

**Level 1 (Gentle):**
```
"You need to navigate to the bug. Remember, you have motion commands
like w, b, and e. Think about which one moves forward by words."
```

**Level 2 (Directional):**
```
"The bug is in the calculateTotal function. Try using `/calculateTotal`
to search for it, then navigate within the function."
```

**Level 3 (Specific):**
```
"Use `/calculateTotal` to find the function. The bug is on the line
with 'return total'. Navigate there with `j` or line numbers."
```

**Level 4 (Complete):**
```
"Here's exactly how:
1. Press `/calculateTotal` and Enter
2. Press `j` three times to reach the return line
3. The bug is `total` should be `total * 1.1`"
```

**Why this works:**
- Starts with reminders, not answers
- Escalates only when user struggles
- Preserves learning through discovery
- Provides safety net for frustrated users

### ❌ BAD Example (What to Avoid):

```
"The bug is on line 47 in the calculateTotal function. Just go there
and change `total` to `total * 1.1`. Done!"
```

**Why this fails:**
- Gives answer immediately
- No opportunity to practice navigation
- Doesn't teach the skill, just solves the problem
- User learns nothing

---

## Objectives Clarity

### ✅ GOOD: Mission 05 (Visual Mastery)

```
## 🎯 Objectives

- [ ] Master visual character mode (v) for precise selections
- [ ] Master visual line mode (V) for line-based operations
- [ ] Master visual block mode (Ctrl+v) for column editing
- [ ] Refactor code using visual selections (4 challenges)
- [ ] Complete the "Block Edit Challenge" in under 10 moves
```

**Why this works:**
- Specific, measurable outcomes
- Checkboxes for progress tracking
- Mix of concepts and practical tasks
- Clear completion criteria

### ❌ BAD Example (What to Avoid):

```
## Objectives

Learn about visual mode and how to use it for editing.
```

**Why this fails:**
- Vague, not measurable
- No clear success criteria
- Doesn't specify what "use it" means
- No way to know when you're done

---

## Practice File Design

### ✅ GOOD: Mission 06 (Text Object Arena)

**Structure:**
```javascript
// LEVEL 1: Function Call Chaos
// GOAL: Extract 5 nested function calls to variables
// PAR: 15 keystrokes
// FORBIDDEN: Visual mode, manual editing

const result = processPayment(
  calculateTotal(
    applyDiscount(
      validateOrder(orderId),
      discount
    ),
    tax
  )
);

// TODO: Extract each function to a separate variable
// Expected result:
// const validOrder = validateOrder(orderId);
// const discounted = applyDiscount(validOrder, discount);
// ...
```

**Why this works:**
- Clear goal stated upfront
- Par score creates challenge
- Instructions embedded in comments
- Shows expected result
- Realistic code scenario
- Self-contained level

### ❌ BAD Example (What to Avoid):

```javascript
// Practice file for text objects

function test() {
  const x = func(arg1, arg2);
  return x;
}

// Do something with this
```

**Why this fails:**
- No clear objective
- No instructions
- Unclear what "do something" means
- Not realistic code
- No success criteria

---

## Command Reference

### ✅ GOOD: Mission 03 (Telescope Search)

```
**File Finding:**
- `<Space>ff` - Find files by name
- `<Space>fg` - Find text in files (live grep)
- `<Space>fb` - Browse open buffers
- `<Space>fh` - Search help docs

**Inside Telescope:**
- `Ctrl+n/p` - Next/previous result
- `Ctrl+u/d` - Scroll preview up/down
- `Enter` - Open selected file
- `Esc` - Close Telescope
```

**Why this works:**
- Organized by category
- Shows keybindings clearly
- Brief but complete descriptions
- Includes UI navigation
- Easy to scan and reference

### ❌ BAD Example (What to Avoid):

```
You can use Telescope to find files. There are several commands
available. Press Space and then other keys to search. Use Ctrl
for navigation.
```

**Why this fails:**
- No specific keybindings shown
- Vague descriptions
- Not organized or scannable
- Can't use as quick reference

---

## Gamification

### ✅ GOOD: Mission 04 (Motion Golf)

```
**PAR SCORES:**
- Hole 1 (Navigate to bug): Par 3
- Hole 2 (Fix typo): Par 4
- Hole 3 (Delete function): Par 5
- Hole 4 (Reorder lines): Par 6

**SCORING:**
- Under par: 🏆 Eagle (expert level)
- At par: ⭐ Birdie (proficient)
- 1-2 over: ✅ Par (learning)
- 3+ over: 🎯 Bogey (needs practice)

Track your score in .motion-scorecard.md
```

**Why this works:**
- Clear targets with par scores
- Tiered achievement (Eagle → Birdie → Par)
- Scorecard for tracking
- Golf metaphor is engaging
- Creates friendly competition

### ❌ BAD Example (What to Avoid):

```
Complete these tasks:
1. Navigate somewhere
2. Fix something
3. Delete something

Try to do it efficiently.
```

**Why this fails:**
- No scoring system
- No clear targets
- "Efficiently" is vague
- No way to measure improvement
- Not gamified, just a task list

---

## AI Guidance (CLAUDE.md)

### ✅ GOOD: Comprehensive Teaching Strategy

```
### Teaching Strategy: Function Text Objects

When teaching `af` and `if`:

1. **Demonstrate first**:
   "Position cursor inside `calculateTotal(x, y)` and press `daf`.
   Watch - the entire function call disappears."

2. **Let them try**:
   "Find another function call and try `daf` yourself."

3. **Explain the concept**:
   "This is 'delete around function' - it treats the whole call as
   one unit. You're editing semantics, not characters."

4. **Show alternative**:
   "Try `yif` - it yanks just the inside (arguments only, no
   function name)."

5. **Real-world application**:
   "This is perfect for extracting function calls to variables or
   refactoring nested calls."
```

**Why this works:**
- Step-by-step teaching progression
- Demonstration before practice
- Conceptual explanation after hands-on
- Shows variations and alternatives
- Connects to real-world use

### ❌ BAD Example (What to Avoid):

```
### Function Text Objects

Teach them about `af` and `if`. Make sure they understand it.
```

**Why this fails:**
- No teaching strategy
- No progression defined
- No examples or demos
- No way to verify understanding
- AI has no guidance on HOW to teach

---

## Completion Criteria

### ✅ GOOD: Specific and Verifiable

```
## Completion Criteria

Before mission complete, verify:
- [ ] User completed all 5 levels of the arena
- [ ] User achieved at least Bronze medal (< 100 keystrokes)
- [ ] User can explain when to use `af` vs `aa` vs `ia`
- [ ] User demonstrated using `in` or `il` navigation
- [ ] User can refactor nested code without visual mode

**Ask user to demonstrate:**
- "Show me how you'd delete an entire function call"
- "How would you swap two function arguments?"
- "Explain the difference between `daa` and `dia`"
```

**Why this works:**
- Clear checkboxes
- Measurable criteria (Bronze medal, specific skills)
- Demonstration tasks verify understanding
- Both completion AND comprehension required

### ❌ BAD Example (What to Avoid):

```
## Completion

User should understand text objects and complete the exercises.
```

**Why this fails:**
- "Understand" is not measurable
- "Complete" could mean just reading it
- No verification method
- No clear standard

---

## Transition to Next Mission

### ✅ GOOD: Story-Driven Transition

```
"You've mastered text objects, Detective. Dr. Vimsworth used these
techniques daily—they were second nature to her.

But there's one more skill she had that made her truly unstoppable:
AUTOMATION. She recorded complex editing sequences and replayed them
with a single keystroke. Macros.

Her logs show she automated 73% of her editing tasks. While others
typed, she pressed one key and watched the magic happen.

Ready to learn her automation techniques?"

cd ../08-macro-mastery
nvim README.md
```

**Why this works:**
- Acknowledges progress
- Teases next skill
- Connects to story (Dr. Vimsworth's methods)
- Provides exact navigation commands
- Creates curiosity and motivation

### ❌ BAD Example (What to Avoid):

```
Good job! Next mission is macros.

Go to the macros folder.
```

**Why this fails:**
- Generic praise
- No story connection
- No motivation for next mission
- Vague navigation ("macros folder"?)
- Breaks immersion

---

## Practice File Realism

### ✅ GOOD: Mission 08 (LSP Investigation)

**File: `src/parser.py`**
```python
class SecurityParser:
    """
    Dr. Vimsworth's log parser for Project Prometheus
    STATUS