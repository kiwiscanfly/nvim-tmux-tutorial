# Mission Creation Guide for AI

**Comprehensive step-by-step instructions for creating new tutorial missions**

---

## Table of Contents

1. [Before You Start](#before-you-start)
2. [Mission Design Process](#mission-design-process)
3. [Step-by-Step Creation](#step-by-step-creation)
4. [Writing Guidelines](#writing-guidelines)
5. [Story Integration](#story-integration)
6. [Quality Standards](#quality-standards)
7. [Testing & Validation](#testing--validation)
8. [Common Pitfalls](#common-pitfalls)

---

## Before You Start

### Prerequisites

Before creating a new mission, you must:

1. **Read the main CLAUDE.md** - Understand the tutorial philosophy and story framework
2. **Review existing missions** - See what works well (especially 02, 04, 06)
3. **Check MISSION-ORDER.md** - Understand current mission flow
4. **Understand the story** - Know where we are in Dr. Vimsworth's narrative
5. **Identify the skill gap** - What hasn't been taught yet?

### Questions to Answer

- **What skill/plugin am I teaching?** (Be specific)
- **What's the prerequisite knowledge?** (What must users know first?)
- **Where in the story does this fit?** (Phase I foundation? Phase II mysteries?)
- **Is this plugin-dependent?** (Will Mission 02 need to check for it?)
- **What's the difficulty level?** (Beginner? Intermediate? Advanced?)

### Check Mission 02 Integration

If your mission requires a **specific plugin**, you must:
1. Add it to Mission 02's diagnostic list
2. Define skip/adapt behavior if plugin is missing
3. Document in Mission 02's reordering rules

---

## Mission Design Process

### Phase 1: Concept & Planning

**1. Choose the Skill/Topic**

Good mission topics:
- Core Vim/tmux functionality (no plugins)
- Popular Neovim plugins (Telescope, LSP, etc.)
- Professional workflows (debugging, refactoring)
- Advanced techniques building on basics

Bad mission topics:
- Niche plugins (unless highly relevant)
- Skills not useful for investigation theme
- Overly complex topics requiring 3+ missions
- Redundant with existing missions

**2. Define Learning Objectives**

Use the checklist in `pre-creation.md`:
- What specific skills will users learn?
- Can you organize them into 4-6 categories?
- Are there basic → advanced progressions?
- What's the "wow" moment or key insight?

**3. Create Story Hook**

Connect to Dr. Vimsworth's disappearance:
- What evidence/clue leads to this skill?
- Why did she use this technique?
- What urgency/mystery does it reveal?
- How does it advance the investigation?

Example patterns:
- "Her logs show [unusual pattern] - learn [skill] to understand it"
- "She completed [task] impossibly fast - [skill] was her method"
- "Evidence suggests she was [doing X] - master [skill] to follow her trail"

**4. Design Practice Exercises**

- What files/code will users practice on?
- What's the realistic scenario?
- How does it connect to the story?
- Is difficulty appropriate for mission number?

### Phase 2: Structure Planning

**5. Outline README.md Sections**

Required sections:
- Mission briefing box (ASCII art)
- The Case (story hook)
- Objectives (checklist)
- Your Tools / Essential Commands
- Practice challenges / exercises
- Success criteria
- Next mission navigation

Optional sections (if relevant):
- Token tracker (if hiding tokens)
- Scoring system (if gamified)
- Quick reference tables

**6. Outline CLAUDE.md Sections**

Required sections:
- Mission Overview (1-2 sentences)
- Learning Objectives (comprehensive checklist)
- Your Role as Detective Partner
- Progressive Disclosure & Creative Authority
- AI-Driven Training Approach
- Common Issues & Solutions
- Transition to Next Mission
- Story Elements Log

Mission-specific sections (varies):
- Progressive hints for specific challenges
- Coaching patterns for practice exercises
- Step-by-step teaching sequences

---

## Step-by-Step Creation

### Step 1: Create Mission Directory

```bash
mkdir -p missions/[NN-mission-name]/
```

**Naming convention**: `[number]-[skill-name]`
- Use leading zero for 01-09
- Use kebab-case (hyphens, not underscores)
- Keep names concise but descriptive

Examples:
- `09-macro-mastery`
- `10-git-integration`
- `11-session-persistence`

### Step 2: Start with README-template.md

**Copy the template:**
```bash
cp mission-template/templates/README-template.md missions/[NN-mission-name]/README.md
```

**Fill in placeholders:**
1. Replace `[MISSION_NUMBER]`, `[MISSION_NAME]`, `[EMOJI]`
2. Replace `[CODENAME]` with mission codename (ALL CAPS, investigation-themed)
3. Write "The Case" section (story hook)
4. List objectives with checkboxes
5. Document all commands/tools users need
6. Design practice challenges
7. Define success criteria
8. Link to next mission

**Writing "The Case":**
- Start with evidence or mystery
- Build urgency (time pressure, watchers, danger)
- Connect to Dr. Vimsworth specifically
- End with clear motivation for learning this skill

Format: 3-5 paragraphs, mix of:
- Evidence/facts (timestamps, logs, forensics)
- Interpretation (what it means)
- Mystery (unanswered questions)
- Call to action (learn this skill to understand)

### Step 3: Create CLAUDE.md from Template

**Copy the template:**
```bash
cp mission-template/templates/CLAUDE-template.md missions/[NN-mission-name]/CLAUDE.md
```

**Fill in sections:**

**Mission Overview** (2-3 sentences max):
- What users learn
- How they learn it (practice method)
- Key insight or focus

**Learning Objectives** (comprehensive):
- Organize into 4-6 logical categories
- Each category: 3-8 specific skills
- Use checkboxes `- [ ]`
- Progress from basic → advanced within each category
- Include "Advanced Concepts (Explain if not covered)" section

Example structure:
```markdown
### Core [Skill] Fundamentals
- [ ] **Basic Operation**: [Specific skill]
- [ ] **Key Concept**: [What they must understand]
...

### Advanced Techniques
- [ ] **Complex Pattern**: [Advanced skill]
...

### Professional Workflows
- [ ] **Real-World Application**: [How pros use this]
...

### Advanced Concepts (Explain if not covered)
- [ ] **Edge Case**: [When to use specialized techniques]
...
```

**AI-Driven Training Approach:**
- Initial Engagement (what to do when mission starts)
- Teaching strategy for each major concept
- Progressive hints (4-level system)
- Interactive coaching patterns
- Proactive intervention triggers

**Progressive Hint Structure:**

```markdown
**Level 1 - Technique Reminder:**
"Remember, you can use [command] to [achieve goal]"

**Level 2 - Directional Hint:**
"Try looking at [general area] or [concept]"

**Level 3 - Specific Guidance:**
"Use [specific command] on [specific target]"

**Level 4 - Direct Help (Only If Frustrated):**
"Here's exactly how: [step-by-step solution]"
```

**Common Issues & Solutions:**
- Anticipate 5-10 common mistakes
- Provide diagnostic questions
- Give clear solutions
- Frame as "leads that didn't pan out" (detective tone)

### Step 4: Create Practice Files

**Types of practice files:**

**Code Files:**
- Realistic, not toy examples
- Multiple languages if relevant
- Intentional bugs/issues for fixing
- Comments that hint at story elements

**Data Files:**
- Logs, configs, CSVs, JSON
- Hidden tokens if mission has treasure hunt
- Breadcrumb hints

**Documentation:**
- Challenge descriptions
- Scoring rubrics (if gamified)
- Hint files (if needed)

**Story Integration:**
- File timestamps (relate to disappearance date)
- Author metadata (Dr. Vimsworth)
- Content references investigation
- Comments/logs reveal character

**Directory organization:**
```
missions/[NN-mission-name]/
├── README.md
├── CLAUDE.md
├── [practice-file-1].[ext]
├── [practice-file-2].[ext]
├── [challenge-description].md
└── [optional-subdirs]/
    └── [organized-files]
```

### Step 5: Write the Story Hook

**Elements of a good story hook:**

1. **Evidence** (concrete facts):
   - "Forensic analysis shows..."
   - "Her logs reveal..."
   - "Security footage captured..."

2. **Mystery** (unanswered questions):
   - "Why was she [doing X]?"
   - "Who accessed her files at 2 AM?"
   - "What was she trying to hide?"

3. **Urgency** (time pressure or stakes):
   - "Someone else is searching..."
   - "Files are being deleted..."
   - "The pattern suggests..."

4. **Connection** (skill to story):
   - "She used [skill] to [accomplish goal]"
   - "Master [skill] to understand her methods"
   - "[Skill] was her secret weapon"

**Tone:**
- Detective noir style
- Professional, serious
- Mysterious but not cheesy
- Urgent but not melodramatic

**Length**: 3-5 paragraphs (~300-500 words)

### Step 6: Test the Mission Flow

**Walk through as a user:**
1. Read README.md - is story compelling?
2. Are objectives clear?
3. Are commands well-documented?
4. Try practice exercises - appropriate difficulty?
5. Can you complete without CLAUDE.md hints?

**Walk through as AI:**
1. Read CLAUDE.md - clear teaching strategy?
2. Are learning objectives comprehensive?
3. Can you provide Level 1-4 hints for each challenge?
4. Are common issues anticipated?
5. Is completion criteria well-defined?

**Check integration:**
- Does story fit with previous missions?
- Are prerequisites met?
- Does next mission make sense?
- Is tone consistent?

### Step 7: Polish & Refine

**README.md polish:**
- [ ] ASCII box looks correct
- [ ] Story hook is engaging
- [ ] Commands are accurate and tested
- [ ] No typos or formatting issues
- [ ] Next mission link is correct

**CLAUDE.md polish:**
- [ ] Learning objectives are comprehensive
- [ ] All hints are detailed and helpful
- [ ] Coaching patterns are clear
- [ ] No contradictions with other missions
- [ ] Story elements log is empty (ready for additions)

**Practice files polish:**
- [ ] Realistic and high quality
- [ ] Appropriate difficulty
- [ ] Story integration subtle but present
- [ ] No unintentional bugs (only deliberate ones)

### Step 8: Update Documentation

**Update missions/MISSION-ORDER.md:**
- Add your mission to the list
- Describe its purpose
- Note any plugin dependencies
- Explain its place in the sequence

**Update main CLAUDE.md:**
- Add mission path to "Mission File Paths" section
- Add to mission descriptions if major addition
- Note any story developments

**If plugin-dependent, update Mission 02:**
- Add plugin to diagnostic list
- Define reordering rules
- Add to component-guide.md if new plugin

---

## Writing Guidelines

### Tone & Style

**For README.md (user-facing):**
- Detective noir style
- Professional but engaging
- Mystery and urgency
- Use evidence/clues terminology
- Frame learning as investigation

**For CLAUDE.md (AI guidance):**
- Clear, instructional
- Comprehensive and detailed
- Professional educator voice
- Anticipate user needs
- Provide multiple strategies

### Detective Terminology to Use

Instead of:
- "Learn this" → "Master this technique"
- "Practice" → "Train" or "Investigate"
- "Exercise" → "Challenge" or "Case"
- "Error" → "Dead end" or "False lead"
- "Success" → "Breakthrough" or "Discovery"
- "Hint" → "Lead" or "Clue"

### Commands & Technical Writing

**In README.md:**
- Use code blocks with syntax highlighting
- Group commands logically
- Provide examples
- Explain what each does briefly

**Format:**
```markdown
**Category Name:**
```bash
command args    # Brief description
command args    # Brief description
```
```

**In CLAUDE.md:**
- Be more verbose - explain why, not just what
- Include common variations
- Note platform differences if any
- Link concepts to previous missions

### Story Integration Levels

**Subtle** (files, comments):
- Timestamps matching story dates
- Dr. Vimsworth as author
- Project names (Prometheus)
- Casual references in code comments

**Medium** (README.md):
- Story hook explaining why skill matters
- Context about her methods
- Mystery elements in challenges
- Detective framing

**Strong** (major story beats):
- Revealing new information about disappearance
- Character development
- Plot advancement
- Significant clues

**Avoid:**
- Spoiling future missions
- Contradicting established facts
- Breaking character
- Info dumps

---

## Story Integration

### The Dr. Vimsworth Framework

**What We Know (Established Canon):**
- Disappeared March 16th, 2022 at ~11:47 PM
- Brilliant developer working on Project Prometheus
- Left deliberate breadcrumbs/tokens
- Obsessed with efficiency (keystroke optimization)
- Paranoid about being watched
- Had an ally (identity still mysterious)
- "Text Surgeon" nickname (visual mode mastery)
- Used tmux for persistent workspaces
- Investigation reveals conspiracy/cover-up

**Phase I Missions (1-6):**
Focus on her techniques, skills, and foundation work. Mystery builds.

**Phase II Missions (7+):**
Deeper revelations, advanced skills, possibly active resistance themes.

### Adding Story Elements

**When creating a mission:**

1. **Check existing story** (main CLAUDE.md, existing missions)
2. **Identify connection point** (how does this skill relate?)
3. **Create evidence** (logs, timestamps, patterns)
4. **Build mystery** (unanswered questions)
5. **Document additions** (in your mission's Story Elements Log)

**Story Elements Log Format:**

```markdown
## Story Elements Log (AI Reference Only)

### [Date]: [Element Title]
**Element**: [What was added]
**Context**: [Where/when it appears]
**Consistency**: [How it aligns with existing lore]
**Usage**: [How future missions should reference this]
```

**Example:**
```markdown
### 2025-01-15: Dr. Vimsworth's Git Aliases
**Element**: She used custom git aliases that masked commit signatures
**Context**: Mentioned in Mission 09 story hook, shown in .gitconfig
**Consistency**: Aligns with her paranoia about digital traces
**Usage**: Can be referenced when discussing her stealth techniques
```

### Story Guidelines

**Do:**
- Add details about her working style
- Create evidence (logs, timestamps, patterns)
- Build tension and mystery
- Make skills feel essential to investigation
- Keep tone consistent (detective noir)

**Don't:**
- Spoil future mission revelations
- Contradict established timeline
- Break character (stay serious/mysterious)
- Over-explain mysteries (maintain intrigue)
- Ignore what's been established

---

## Quality Standards

### README.md Quality Checklist

- [ ] **Story Hook**: Engaging, mysterious, connects to skill
- [ ] **Objectives**: Clear, measurable, comprehensive
- [ ] **Commands**: Accurate, well-organized, with descriptions
- [ ] **Practice**: Realistic, appropriate difficulty
- [ ] **Success Criteria**: Specific and achievable
- [ ] **Navigation**: Correct path to next mission
- [ ] **Formatting**: Clean, consistent, ASCII art correct
- [ ] **Tone**: Detective noir, professional, engaging

### CLAUDE.md Quality Checklist

- [ ] **Overview**: Concise but complete (1-3 sentences)
- [ ] **Learning Objectives**: Comprehensive (20-40 items, categorized)
- [ ] **Teaching Strategy**: Clear approach for each concept
- [ ] **Hints**: Progressive 4-level system for challenges
- [ ] **Coaching**: Proactive patterns defined
- [ ] **Issues**: Common problems anticipated with solutions
- [ ] **Completion**: Clear criteria for mission success
- [ ] **Story Log**: Empty and ready for AI additions

### Practice Files Quality Checklist

- [ ] **Realistic**: Production-quality code/data
- [ ] **Appropriate**: Difficulty matches mission number
- [ ] **Story Integration**: Subtle references present
- [ ] **Educational**: Clear learning value
- [ ] **Tested**: Files work as intended
- [ ] **Organized**: Logical directory structure

---

## Testing & Validation

### Self-Review Process

**1. User Perspective:**
- Read README.md fresh
- Try to complete mission without CLAUDE.md
- Note any confusion or unclear instructions
- Verify all commands work

**2. AI Perspective:**
- Can you teach this with CLAUDE.md?
- Are hints detailed enough?
- Can you adapt to different skill levels?
- Are edge cases covered?

**3. Story Perspective:**
- Does it fit the narrative?
- Any contradictions?
- Does it add value to the mystery?
- Tone consistent?

**4. Technical Perspective:**
- Commands accurate?
- Examples work?
- Prerequisites clear?
- Appropriate complexity?

### Validation Checklist

Use `post-creation.md` checklist:
- [ ] All templates filled completely
- [ ] Story integration appropriate
- [ ] No contradictions with existing missions
- [ ] Commands tested and working
- [ ] Practice files functional
- [ ] Difficulty appropriate for position
- [ ] Documentation updated (MISSION-ORDER.md, main CLAUDE.md)
- [ ] Tone consistent throughout
- [ ] Mission 02 integration if plugin-dependent

---

## Common Pitfalls

### Avoid These Mistakes:

**1. Info Dumping**
❌ Don't: List all commands at once
✅ Do: Teach progressively through practice

**2. Weak Story Integration**
❌ Don't: Generic "learn vim motions"
✅ Do: "Dr. Vimsworth's training regimen under surveillance pressure"

**3. Unclear Objectives**
❌ Don't: "Get better at buffers"
✅ Do: "Master buffer navigation (:bn, :bp, :b{n})"

**4. Missing Prerequisites**
❌ Don't: Assume users know commands from skipped missions
✅ Do: Check Mission 02 path, provide alternatives

**5. Tone Inconsistency**
❌ Don't: "Cool! Let's learn some awesome vim tricks!"
✅ Do: "Detective, Dr. Vimsworth's methods were surgical. Let's analyze her technique."

**6. Over-Complexity**
❌ Don't: Teach 50 commands in one mission
✅ Do: Focus on 10-15 essential commands with depth

**7. Under-Documented AI Guidance**
❌ Don't: Vague hints like "help them with buffers"
✅ Do: 4-level progressive hints for each challenge

**8. Story Spoilers**
❌ Don't: Reveal she's alive in Mission 03
✅ Do: Build mystery progressively (revelation in Mission 06)

**9. Ignoring Mission 02**
❌ Don't: Require Telescope without checking if user has it
✅ Do: Add to Mission 02 diagnostics, define skip/adapt behavior

**10. No Quality Check**
❌ Don't: Create and immediately commit
✅ Do: Test, review, validate using checklists

---

## Summary Workflow

```
1. PLAN
   ├─ Choose skill/topic
   ├─ Define learning objectives
   ├─ Create story hook
   └─ Design practice exercises

2. CREATE
   ├─ Make mission directory
   ├─ Fill README.md template
   ├─ Fill CLAUDE.md template
   ├─ Create practice files
   └─ Write supporting docs

3. REFINE
   ├─ Test as user
   ├─ Test as AI
   ├─ Check story integration
   ├─ Polish writing
   └─ Fix issues

4. VALIDATE
   ├─ Run through checklists
   ├─ Verify all sections complete
   ├─ Test all commands
   └─ Check documentation links

5. INTEGRATE
   ├─ Update MISSION-ORDER.md
   ├─ Update main CLAUDE.md
   ├─ Update Mission 02 if needed
   └─ Commit with descriptive message
```

---

## Need Help?

- **Templates**: See `mission-template/templates/`
- **Examples**: See `mission-template/examples/`
- **Checklists**: See `mission-template/checklists/`
- **Reference**: Review existing missions 02, 04, 06 (best examples)

**Remember**: Quality over speed. A well-crafted mission provides lasting value to learners.
