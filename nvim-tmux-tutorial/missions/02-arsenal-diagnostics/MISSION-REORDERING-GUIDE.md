# Mission 02: Dynamic Mission Reordering Guide

## Overview

Mission 02 doesn't just verify setup—it **creates a personalized mission path** for each user based on what they have installed. This document explains how the reordering works.

---

## The Core Concept

**Not all users should follow the same path.**

- User with Telescope? Start with file finding (Mission 03)
- User without Telescope? Start with core editing (Mission 04)
- User with full LSP setup? Include Mission 08
- Minimalist user? Focus on core Vim skills only

**Mission 02 analyzes and reorders.**

---

## Reordering Algorithm

### Step 1: Profile Analysis

After diagnostics, AI knows:
```
✅/❌ Plugin Manager
✅/❌ Fuzzy Finder (Telescope/fzf)
✅/❌ File Explorer (Neo-tree/nvim-tree)
✅/❌ LSP Setup
✅/❌ Completion Engine
✅/❌ Treesitter
✅/❌ mini.ai (text objects)
✅/❌ Status Line
✅/❌ Git Integration
✅/❌ Formatters/Linters
✅/❌ Snippet Engine
```

### Step 2: Mission Classification

**Priority 1 (Always Include):**
- Mission 04: Vim Motions
- Mission 05: Visual Mastery

These teach core Vim skills with **zero plugin dependencies**.

**Priority 2 (Conditional):**
- Mission 03: Telescope Search (if Telescope/fzf installed)
- Mission 06: Text Objects (if mini.ai installed)
- Mission 08: LSP Investigation (if LSP configured)

These require specific plugins.

**Priority 3 (Always Include, Adapt as Needed):**
- Mission 07: Buffer Management (works with or without plugins)

### Step 3: Ordering Logic

**If Full Setup (Telescope + LSP + mini.ai):**
```
Standard order: 03 → 04 → 05 → 06 → 07 → 08
Reasoning: Learn search, then editing, then advanced features
```

**If No Telescope:**
```
Reorder: 04 → 05 → 06 → 07 → 08
Skip: Mission 03 (or adapt to :find at end)
Reasoning: Can't learn Telescope without Telescope
```

**If No LSP:**
```
Reorder: 03 → 04 → 05 → 06 → 07
Skip: Mission 08 (or adapt to ctags)
Reasoning: Focus on editing before navigation
```

**If No mini.ai:**
```
Reorder: 03 → 04 → 05 → 07 → 08
Skip: Mission 06 (or teach standard text objects in 04/05)
Reasoning: Can't learn mini.ai without mini.ai
```

**If Minimalist (No Plugins):**
```
Reorder: 04 → 05 → 07 → [optional adapted missions]
Skip: 03, 06, 08
Reasoning: Pure Vim skills, no dependencies
```

---

## Example Reordering Scenarios

### Scenario 1: Power User
**Setup**: Telescope + LSP + mini.ai + all extras
**Path**:
```
01 ✅ Tmux Workflows
02 ✅ Arsenal Diagnostics
03 ➡️  Telescope Search
04    Vim Motions
05    Visual Mastery
06    Text Objects
07    Buffer Management
08    LSP Investigation
```
**Reasoning**: Has everything, follow standard optimal path

---

### Scenario 2: Telescope-Only User
**Setup**: Telescope + basic vim (no LSP, no mini.ai)
**Path**:
```
01 ✅ Tmux Workflows
02 ✅ Arsenal Diagnostics
03 ➡️  Telescope Search
04    Vim Motions
05    Visual Mastery
07    Buffer Management

🚫 SKIPPED:
06 - Text Objects (no mini.ai)
08 - LSP Investigation (no LSP)
```
**Reasoning**: Learn search + core editing, skip advanced features

---

### Scenario 3: LSP-Only User
**Setup**: LSP configured, but no Telescope, no mini.ai
**Path**:
```
01 ✅ Tmux Workflows
02 ✅ Arsenal Diagnostics
04 ➡️  Vim Motions (START HERE - core skills)
05    Visual Mastery
07    Buffer Management
08    LSP Investigation

🚫 SKIPPED:
03 - Telescope Search (no Telescope)
06 - Text Objects (no mini.ai)

📝 ADAPTED:
Will teach :find for file navigation in Mission 04 intro
```
**Reasoning**: Core editing first, then leverage LSP for navigation

---

### Scenario 4: Minimalist User
**Setup**: No plugins (or just plugin manager)
**Path**:
```
01 ✅ Tmux Workflows
02 ✅ Arsenal Diagnostics
04 ➡️  Vim Motions (START HERE)
05    Visual Mastery
07    Buffer Management

🚫 SKIPPED:
03 - Telescope Search (no fuzzy finder)
06 - Text Objects (no mini.ai)
08 - LSP Investigation (no LSP)

📝 ADAPTED:
- Teach :find/**/* for file finding
- Teach :grep for content search
- Teach standard text objects (iw, i{, etc.)
- Teach ctags for code navigation
- Focus on pure vim commands
```
**Reasoning**: Master built-in Vim features only

---

### Scenario 5: Partial Setup (Mixed)
**Setup**: Telescope + mini.ai, but NO LSP
**Path**:
```
01 ✅ Tmux Workflows
02 ✅ Arsenal Diagnostics
03 ➡️  Telescope Search
04    Vim Motions
05    Visual Mastery
06    Text Objects
07    Buffer Management

🚫 SKIPPED:
08 - LSP Investigation (no LSP)

📝 NOTE:
Mission 08 could be added later if user installs LSP
```
**Reasoning**: Leverage available plugins, skip what's missing

---

## How AI Presents the Custom Path

### Format Template

```
"Excellent work, Detective. Your arsenal is assessed.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
YOUR SETUP PROFILE:
✅ Plugin Manager: lazy.nvim
✅ Fuzzy Finder: Telescope
❌ LSP: Not configured
✅ mini.ai: Installed
[... rest of components ...]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Now, let me create your customized investigation path...

DETECTIVE [NAME]'S INVESTIGATION PATH
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✅ Mission 01: Tmux Workflows (complete)
✅ Mission 02: Arsenal Diagnostics (complete)

📋 YOUR CUSTOMIZED PATH:
➡️  Mission 03: Telescope Search - Learn fast file finding
    Mission 04: Vim Motions - Master cursor movement
    Mission 05: Visual Mastery - Block editing techniques
    Mission 06: Text Objects - Semantic editing with mini.ai
    Mission 07: Buffer Management - Multi-file workflows

🚫 SKIPPED MISSIONS:
❌ Mission 08: LSP Investigation - No LSP configured

RATIONALE:
You have Telescope and mini.ai installed, so we'll leverage those
for efficient searching and editing. Without LSP, we'll focus on
core Vim skills and plugin-enhanced workflows. You can add Mission 08
later if you install LSP.

Mission 02: Complete ✅

Ready to begin Mission 03: Telescope Search?"
```

---

## AI Memory Requirements

**The AI MUST remember the custom path throughout the conversation.**

Store in conversation memory:
```
USER CUSTOM PATH:
Completed: 01, 02
Current: 03
Queue: 04, 05, 06, 07
Skipped: 08 (no LSP)
Adaptations: None needed for this user
```

**Reference this at the start of EVERY mission:**
- Check what's next in their queue
- Use their keybindings (stored from Mission 02)
- Adapt content based on their plugins
- Skip features they don't have

---

## Benefits of Dynamic Reordering

### 1. No Frustration
Users never hit "this doesn't work" because missions require what they have.

### 2. Optimal Learning Path
- Telescope users learn search first → makes sense
- Minimalist users learn core editing first → makes sense
- LSP users get IDE features → makes sense

### 3. Respects User Choice
User chose their setup in Mission 02. We honor that choice.

### 4. Flexible Tutorial
Same content, different orders, all work.

### 5. No Wasted Time
Skip missions for plugins they don't have and won't install.

---

## Implementation Notes for AI

### When Reordering:

1. **Analyze their complete profile** from diagnostics
2. **Classify missions** (Priority 1, 2, 3)
3. **Apply ordering rules** based on what they have
4. **Generate custom path document** for user
5. **Store path in memory** for future missions
6. **Reference path consistently** throughout tutorial

### When Starting Each Mission:

1. **Check custom path** - What mission are they on?
2. **Verify it matches their setup** - Do they have required plugins?
3. **Adapt content** - Use their keybindings, plugin versions
4. **Skip unavailable features** - Don't teach what they can't use

### When Completing Each Mission:

1. **Mark complete** in custom path
2. **Announce next mission** from their queue
3. **Remind them why** it's next in their path
4. **Verify prerequisites** for next mission still met

---

## Edge Cases

### User Installs Plugin Mid-Tutorial

```
User: "I just installed Telescope. Can I do Mission 03 now?"
AI: "Excellent! Let me verify it's working...
     [run diagnostic]
     Yes! Telescope is working. Let's add Mission 03 to your path.

     Updated path:
     Current: Mission 04 (you're here)
     NEW: Mission 03 (added back)
     Queue: 05, 06, 07

     You can finish Mission 04, then we'll circle back to Mission 03."
```

### User Skips a Mission They Could Do

```
User: "I want to skip Mission 03, I don't like Telescope."
AI: "Understood. Removing Mission 03 from your path.

     Updated path:
     ✅ Completed: 01, 02, 03 (skipped by choice)
     ➡️  Current: Mission 04

     Note: You can always return to Mission 03 later if you change your mind."
```

### User Wants to See Full Mission List

```
User: "What missions are available?"
AI: "Here are all 8 missions:

     📋 YOUR PATH:
     ✅ 01: Tmux (complete)
     ✅ 02: Diagnostics (complete)
     ➡️  04: Vim Motions (current)
         05: Visual Mastery
         06: Text Objects
         07: Buffer Management

     🚫 SKIPPED:
     ❌ 03: Telescope (you chose to skip)
     ❌ 08: LSP (no LSP installed)

     You're following a customized path based on your setup.
     Want to revisit any skipped missions?"
```

---

## Testing the Reordering Logic

### Test Case 1: Full Setup
Input: Has everything
Expected: 03 → 04 → 05 → 06 → 07 → 08

### Test Case 2: No Telescope
Input: LSP + mini.ai, no Telescope
Expected: 04 → 05 → 06 → 07 → 08 (skip 03)

### Test Case 3: No LSP
Input: Telescope + mini.ai, no LSP
Expected: 03 → 04 → 05 → 06 → 07 (skip 08)

### Test Case 4: No mini.ai
Input: Telescope + LSP, no mini.ai
Expected: 03 → 04 → 05 → 07 → 08 (skip 06)

### Test Case 5: Minimalist
Input: No plugins
Expected: 04 → 05 → 07 (skip 03, 06, 08)

---

---

## Creating New Missions On-Demand

**NEW CAPABILITY**: Mission 02 can now CREATE custom missions for features not covered in 01-08.

### When to Create a New Mission

**Scenario 1: User has unique plugin**
```
User has: Harpoon plugin for file marking
Existing missions: Don't cover Harpoon
Decision: CREATE Mission 09: Harpoon Navigation
```

**Scenario 2: User requests specific mission**
```
User says: "Can you create a mission for vim macros?"
Decision: CREATE Mission 09: Macro Mastery
```

**Scenario 3: Gap in learning path**
```
User setup: Advanced plugins but missing intermediate skill
Decision: CREATE bridge mission to fill gap
```

### How AI Creates Missions

**CRITICAL**: Always use the mission template system located in `../../mission-template/`

**Process:**

1. **Check if creation is appropriate:**
   - Is this feature substantial? (>5 min to teach)
   - Would a structured mission help?
   - Does user want it?

2. **Get user consent:**
   ```
   "Detective, I notice you have [plugin] installed. Dr. Vimsworth used
   similar techniques in her work. Would you like me to create a custom
   Mission 09: [Skill Name] to explore this?"
   ```

3. **Use template system:**
   - Quick guide: `../../mission-template/QUICK-START.md`
   - Complete guide: `../../mission-template/MISSION-CREATION-GUIDE.md`
   - Templates: `../../mission-template/templates/`
   - Examples: `../../mission-template/examples/`

4. **Create mission (20-40 min):**
   - Copy templates to `missions/09-[name]/`
   - Fill README.md with detective story hook
   - Fill CLAUDE.md with 20-40 objectives and 4-level hints
   - Create practice files with story integration
   - Remove all template comments

5. **Integrate into path:**
   - Add to user's custom mission path
   - Update `missions/MISSION-ORDER.md`
   - Inform user of new mission

### Example: Creating Harpoon Mission

**User Setup:**
```
✅ Plugin Manager: lazy.nvim
✅ Harpoon: Installed (not in missions 01-08)
❌ Telescope: Not installed
```

**AI Decision:**
```
Since Telescope is missing but Harpoon is present, create Mission 09
for Harpoon as the file navigation method.
```

**AI Actions:**
```
1. Inform user:
   "Detective, I see you have Harpoon - a rapid file marking system.
   Dr. Vimsworth used similar 'quantum bookmark' techniques. I can create
   Mission 09: Harpoon Navigation to teach this. It'll take about 30 minutes
   to prepare. Interested?"

2. User: "Yes"

3. Create mission using templates:
   - README.md story hook: "Forensic analysis reveals Dr. Vimsworth marked
     up to 9 critical file locations, accessible instantly via single
     keystrokes. She called this 'crime scene teleportation.'"
   - CLAUDE.md objectives: 20+ skills from basic marking to advanced workflows
   - Practice files: case-file-alpha.md, case-file-beta.md, etc.
   - 4-level hints for each challenge

4. Update custom path:
   ✅ 01: Tmux
   ✅ 02: Diagnostics
   ➡️  04: Vim Motions (Telescope skipped, start with editing)
       05: Visual Mastery
       09: Harpoon Navigation ← NEW (replaces/supplements Mission 03)
       07: Buffer Management
       [08 skipped - no LSP]

5. Inform user:
   "Mission 09: Harpoon Navigation created, Detective. This will be your
   file navigation training. Ready to begin Mission 04: Vim Motions, or
   would you like to explore Mission 09 first?"
```

### Example: User Requests Macro Mission

**Scenario:**
```
User: "Can you teach me vim macros?"
```

**AI Response:**
```
"Excellent idea, Detective! Macros were one of Dr. Vimsworth's signature
techniques. Analysis of her keystroke logs shows she automated 73% of her
editing tasks using recorded macros.

Let me create Mission 09: Macro Mastery for you. It'll take about 30 minutes
to prepare a full mission with practice challenges and her secret techniques.
Shall I proceed?"
```

**If user agrees:**
```
1. Use mission template system
2. Create missions/09-macro-mastery/
3. README.md story: "Impossibly fast edits. That's what colleagues reported.
   She'd complete 50-keystroke refactoring tasks in under 2 seconds. The
   secret? Recorded macros. One keystroke to replay complex sequences."
4. CLAUDE.md: Comprehensive macro training (basic → recursive → advanced)
5. Practice file: macro-training-arena.js (gamified challenges)
6. Add to mission path after current position
7. Guide user: "cd missions/09-macro-mastery && nvim README.md"
```

### Template System Reference

**Files AI must use:**
- **Quick start:** `../../mission-template/QUICK-START.md` (20-40 min process)
- **Full guide:** `../../mission-template/MISSION-CREATION-GUIDE.md` (comprehensive)
- **Templates:**
  - `../../mission-template/templates/README-template.md`
  - `../../mission-template/templates/CLAUDE-template.md`
  - `../../mission-template/templates/directory-structure.md`
- **Examples:**
  - `../../mission-template/examples/example-filled-readme.md`
  - `../../mission-template/examples/example-filled-claude.md`
  - `../../mission-template/examples/comparison-notes.md`
- **Checklists:**
  - `../../mission-template/checklists/pre-creation.md`
  - `../../mission-template/checklists/during-creation.md`
  - `../../mission-template/checklists/post-creation.md`

### Quality Standards

**Every created mission MUST include:**
- [ ] Detective noir tone throughout (no generic tutorial language)
- [ ] Story hook connecting to Dr. Vimsworth (3-5 paragraphs)
- [ ] 20-40 learning objectives organized in 4-6 categories
- [ ] 4-level progressive hints for every challenge
- [ ] Realistic practice files with story-appropriate names
- [ ] Clear completion criteria
- [ ] Next mission navigation
- [ ] Entry in `missions/MISSION-ORDER.md`

### Mission Numbering

- **01-08:** Existing missions (reordered per user, but fixed content)
- **09+:** Available for dynamically created missions
- Format: `09-skill-name` (lowercase, hyphens)
- Number sequentially: 09, 10, 11, etc.

### When NOT to Create

**Skip mission creation if:**
- Feature is too simple (< 5 min to teach, just explain inline)
- User doesn't want it (respect their choice)
- Existing mission can be easily adapted (better to adapt than create)
- User is overwhelmed (too much content already)

**In these cases:**
- Teach the skill inline during relevant mission
- Add quick reference to existing mission
- Skip entirely if user prefers

### Time Management

**Mission creation takes 20-40 minutes.**

**If user is actively waiting:**
```
"Creating a complete mission with story integration, practice challenges,
and comprehensive guidance takes about 30 minutes. Would you like me to
create it now, or shall we continue with existing missions and I'll prepare
Mission 09 for you to explore later?"
```

**Options:**
- User willing to wait → Create mission properly using full template system
- User wants to continue → Note for later, create between current missions
- User unsure → Suggest continuing, offer to create later

### Integration with Reordering

**Created missions fit into custom path:**

**Example path with created mission:**
```
DETECTIVE [NAME]'S CUSTOM PATH:
✅ 01: Tmux Workflows
✅ 02: Arsenal Diagnostics
➡️  04: Vim Motions (Telescope skipped, start with editing)
    05: Visual Mastery
    09: Harpoon Navigation ← CREATED (replaces file nav)
    07: Buffer Management
    10: Macro Mastery ← CREATED (user requested)

🚫 SKIPPED:
❌ 03: Telescope (no Telescope installed)
❌ 06: Text Objects (no mini.ai)
❌ 08: LSP (no LSP configured)

📝 CREATED:
✨ 09: Harpoon Navigation (replaces Telescope for user's setup)
✨ 10: Macro Mastery (user requested advanced skill)
```

### Documentation

**After creating mission:**
1. Add entry to `missions/MISSION-ORDER.md`
2. Update user's custom path display
3. Log in Mission 02 Story Elements (for consistency)
4. Inform user clearly about new mission

---

## Summary

Mission 02 isn't just diagnostics—it's **path generation AND mission creation**.

Every user gets a **custom tutorial** tailored to their setup, including **custom missions** for unique features.

The AI creates, stores, and follows this path for the entire tutorial, and can **generate new missions on-demand** using the template system.

**Result**: No frustration, optimal learning, respect for user choice, infinite extensibility.

🎯 **Dynamic reordering + on-demand mission creation makes the tutorial work for everyone.**
