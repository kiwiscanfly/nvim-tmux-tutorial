# Mission Template System

This directory contains everything needed to create new missions for the Neovim & Tmux Interactive Tutorial.

## 📁 Contents

```
mission-template/
├── README.md                       ← You are here
├── MISSION-CREATION-GUIDE.md       ← Step-by-step instructions for AI
├── templates/
│   ├── README-template.md          ← User-facing mission brief template
│   ├── CLAUDE-template.md          ← AI guidance template
│   └── directory-structure.md      ← File organization guide
├── examples/
│   ├── example-filled-readme.md    ← Completed README example
│   ├── example-filled-claude.md    ← Completed CLAUDE.md example
│   └── comparison-notes.md         ← Good vs bad mission design
└── checklists/
    ├── pre-creation.md             ← Planning checklist
    ├── during-creation.md          ← Development checklist
    └── post-creation.md            ← Quality assurance checklist
```

## 🎯 Purpose

This template system ensures:
- **Consistency** across all missions
- **Quality** standards for learning content
- **Story integration** with Dr. Vimsworth narrative
- **Progressive difficulty** appropriate to mission number
- **Comprehensive AI guidance** for teaching

## 🚀 Quick Start

### For AI Creating a New Mission:

1. **Read** `MISSION-CREATION-GUIDE.md` (complete step-by-step process)
2. **Review** existing missions in `examples/` for inspiration
3. **Use** templates in `templates/` as starting point
4. **Check** checklists in `checklists/` before, during, and after creation
5. **Test** the mission flow before finalizing

### For Humans Understanding the System:

- Start with `MISSION-CREATION-GUIDE.md` to understand the philosophy
- Review `examples/` to see what good missions look like
- Check `comparison-notes.md` to understand quality criteria

## 📝 What Makes a Good Mission?

Based on analysis of existing missions (01-08), a good mission has:

### 1. Strong Story Integration
- Connects meaningfully to Dr. Vimsworth's disappearance
- Adds mystery/tension without spoiling future revelations
- Uses detective noir tone consistently
- Makes the skill feel essential to the investigation

### 2. Clear Learning Objectives
- Comprehensive skill checklist in CLAUDE.md
- Organized into logical categories
- Progressive from basic to advanced
- Explains "why" not just "what"

### 3. Hands-On Practice
- Real code/files to work with
- Challenges appropriate to skill level
- Immediate feedback possible
- Multiple difficulty tiers (basic → advanced)

### 4. Comprehensive AI Guidance
- Progressive hint system (4 levels)
- Proactive coaching patterns
- Common issues & solutions documented
- Completion criteria clearly defined

### 5. User-Friendly README
- Engaging story hook (The Case)
- Clear objectives checklist
- Command reference for quick lookup
- Next steps clearly indicated

## 🎨 Mission Design Philosophy

### Story-Driven Learning
Every mission is framed as part of investigating Dr. Vimsworth's disappearance. Skills aren't just "useful" - they're clues to solving the mystery.

### Progressive Disclosure
- Teach basics first, advanced features later
- Don't overwhelm with all commands at once
- Build on previously learned skills
- Let users discover through practice

### Detective Noir Tone
- AI stays in character as detective partner
- Evidence, clues, investigation terminology
- Mystery and urgency
- Professional, serious, but supportive

### Adaptive Learning
- AI adjusts difficulty based on user progress
- Provides more/less help as needed
- Celebrates successes
- Frames mistakes as "leads that didn't pan out"

## 📊 Mission Structure Standards

### Every Mission Has:

**README.md** (User-Facing):
- ASCII mission briefing box
- Story section ("The Case")
- Objectives checklist
- Tools/commands reference
- Practice challenges
- Success criteria
- Next mission navigation

**CLAUDE.md** (AI Guidance):
- Mission overview (1-2 sentences)
- Comprehensive learning objectives
- Detective role framing
- Progressive disclosure notes
- Step-by-step teaching approach
- Progressive hint system
- Common issues & solutions
- Completion criteria
- Story elements log

**Practice Files** (Varies by Mission):
- Realistic code/data
- Appropriate difficulty
- Clear connection to learning objectives
- Story integration where possible

## 🔢 Mission Numbering

Current missions:
- **01**: Tmux Workflows (Foundation)
- **02**: Arsenal Diagnostics (Setup Verification)
- **03**: Telescope Search
- **04**: Vim Motions
- **05**: Visual Mastery
- **06**: Text Object Mastery (mini.ai)
- **07**: Buffer Management
- **08**: LSP Investigation

**New missions** should:
- Number sequentially (09, 10, etc.)
- Consider prerequisite skills
- Account for Mission 02's dynamic reordering
- Update `missions/MISSION-ORDER.md`

## ⚠️ Important Notes

### Story Continuity
- All missions connect to Dr. Vimsworth's disappearance
- Phase I (Missions 1-6): Foundation & investigation
- Phase II (Missions 7+): Deeper mysteries (extensible)
- Check main `CLAUDE.md` for story framework
- Don't spoil future revelations

### Skill Dependencies
- Assume users completed previous missions
- Reference previously learned commands
- Build on established knowledge
- If plugin-dependent, account for Mission 02 reordering

### Tone Consistency
- Detective noir style throughout
- AI as partner, not instructor
- Frame errors as "dead ends"
- Celebrate discoveries as "breakthroughs"
- Professional but supportive

## 🛠️ Tools & Resources

### For Mission Creation:
- `templates/` - Starting point templates
- `examples/` - Real mission examples
- `checklists/` - Quality assurance
- Main `CLAUDE.md` - Story framework reference
- `MISSION-ORDER.md` - Mission flow overview

### For Testing:
- Create the mission files
- Walk through as a user
- Test with different skill levels
- Verify story integration
- Check hint progression

## 📖 Further Reading

- **Main CLAUDE.md**: Overall tutorial philosophy and story framework
- **MISSION-CREATION-GUIDE.md**: Detailed step-by-step process
- **comparison-notes.md**: What makes missions good vs bad
- **Existing missions**: Best examples are Missions 02, 04, 06

## ✅ Quality Checklist (Quick Version)

Before releasing a new mission:

- [ ] README engages with story hook
- [ ] Objectives are comprehensive and clear
- [ ] Commands/tools well-documented
- [ ] Practice files are realistic and appropriate
- [ ] CLAUDE.md has complete learning objectives
- [ ] Progressive hints system defined
- [ ] Common issues anticipated
- [ ] Story integration doesn't spoil future
- [ ] Tone consistent with existing missions
- [ ] Tested by walking through mission
- [ ] Updated MISSION-ORDER.md
- [ ] Accounted for Mission 02 reordering if plugin-dependent

---

**Use this template system to create missions that are:**
- Educationally effective
- Story-driven and engaging
- Consistently structured
- Comprehensively documented

**Start with MISSION-CREATION-GUIDE.md for the full process.**
