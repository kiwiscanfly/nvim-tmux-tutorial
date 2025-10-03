# During-Creation Development Checklist

Use this checklist WHILE creating the mission to ensure quality and consistency.

---

## Phase 1: Directory Setup

- [ ] **Directory created**: `missions/XX-mission-name/` exists
- [ ] **README.md created**: User-facing file present
- [ ] **CLAUDE.md created**: AI guidance file present
- [ ] **Practice files created**: All code/data files in place

**Naming verification:**
- [ ] Mission number is sequential and correct
- [ ] Directory name uses hyphens (not underscores or spaces)
- [ ] All files use appropriate extensions
- [ ] Hidden files (`.scorecard.md`) have leading dot

---

## Phase 2: README.md Development

### Mission Briefing Header

- [ ] **ASCII box present**: Mission briefing header included
- [ ] **Codename chosen**: ALL CAPS, investigation-themed name
- [ ] **Clearance level**: Appropriate difficulty (Level 1-5)
- [ ] **Emoji selected**: Relevant emoji chosen

**Example:**
```
╔═══════════════════════════════════════════════════════════╗
║  MISSION BRIEFING                                         ║
║  Codename: SURGICAL PRECISION                             ║
║  Clearance: Level 4                                       ║
║  Status: ACTIVE                                           ║
╚═══════════════════════════════════════════════════════════╝
```

### The Case (Story Hook)

- [ ] **3-5 paragraphs**: Substantial story section
- [ ] **Evidence-based opening**: Starts with forensic findings
- [ ] **Mystery element**: Raises questions about Dr. Vimsworth
- [ ] **Skill connection**: Links feature to investigation
- [ ] **Urgency created**: Establishes why this matters now

**Structure check:**
1. Evidence (what was found)
2. Mystery (unanswered questions)
3. Connection to skill (why she used this)
4. Mission statement (what user will learn)

### Objectives Section

- [ ] **3-6 clear objectives**: Specific, measurable goals
- [ ] **Checkboxes used**: `- [ ]` format for tracking
- [ ] **Action-oriented**: Start with verbs (Master, Complete, Understand)
- [ ] **Aligned with CLAUDE.md**: Match learning objectives

### Essential Commands

- [ ] **Organized by category**: Logical grouping
- [ ] **Code blocks used**: Formatted for readability
- [ ] **Brief descriptions**: Each command explained
- [ ] **Examples included**: Usage context provided

**Categories to include:**
- Core commands (primary skill)
- Navigation/movement
- Editing operations
- Special features
- Plugin-specific (if applicable)

### Practice/Challenges Section

- [ ] **Clear instructions**: Users know what to do
- [ ] **Story integration**: Challenges fit investigation theme
- [ ] **Difficulty progression**: Easy → Medium → Hard
- [ ] **Success criteria**: Clear completion indicators

**For each challenge:**
- [ ] Objective stated
- [ ] Practice file referenced
- [ ] Story context provided
- [ ] Expected outcome described

### Success Criteria

- [ ] **Specific checkboxes**: Concrete achievements
- [ ] **Measurable outcomes**: Can verify completion
- [ ] **Bonus objectives**: Optional advanced goals
- [ ] **Aligned with CLAUDE.md**: Matches completion criteria

### Next Steps

- [ ] **Next mission identified**: Correct mission number
- [ ] **Navigation commands**: Exact `cd` and `nvim` commands
- [ ] **Transition teaser**: Brief hint about next mission

---

## Phase 3: CLAUDE.md Development

### Mission Overview

- [ ] **1-3 sentences**: Concise description
- [ ] **Learning focus**: Core skill identified
- [ ] **Teaching method**: Approach summarized

### Learning Objectives

- [ ] **20-40 objectives**: Comprehensive skill list
- [ ] **4-6 categories**: Organized logically
- [ ] **Checkboxes**: `- [ ]` format used
- [ ] **Progressive**: Basic → Advanced flow
- [ ] **Advanced concepts section**: Edge cases and extras included

**Category check:**
- [ ] Core fundamentals
- [ ] Advanced techniques
- [ ] Integration & workflow
- [ ] Professional application
- [ ] Advanced concepts

### Detective Partner Role

- [ ] **Character framing**: How to present in-character
- [ ] **Metaphor chosen**: Investigation terminology for skill
- [ ] **Tone guidance**: Specific language examples

### Progressive Disclosure

- [ ] **Teaching order**: What to reveal when
- [ ] **Creative authority**: What AI can generate
- [ ] **Story documentation**: How to log new elements

### AI-Driven Training Approach

- [ ] **Initial engagement**: Greeting and setup instructions
- [ ] **Teaching strategy**: For each major concept:
  - [ ] Introduction approach
  - [ ] Practice method
  - [ ] Common mistakes
  - [ ] Mastery indicators

### Progressive Hints System

**For EACH challenge/exercise:**
- [ ] **Level 1 hint**: Technique reminder (general)
- [ ] **Level 2 hint**: Directional guidance (points toward solution)
- [ ] **Level 3 hint**: Specific approach (exact commands)
- [ ] **Level 4 hint**: Complete solution (step-by-step)

**Hint quality check:**
- [ ] Level 1 doesn't give answer
- [ ] Level 2 requires thinking
- [ ] Level 3 still requires execution
- [ ] Level 4 is complete walkthrough

### Interactive Coaching Patterns

- [ ] **If struggling**: Response defined
- [ ] **If excelling**: Response defined
- [ ] **If mistakes**: Response defined
- [ ] **If discovers**: Response defined

### Proactive Intervention

- [ ] **5+ patterns**: Common behaviors identified
- [ ] **Interventions**: What to suggest for each
- [ ] **Examples**: Specific scenarios provided

### Common Issues & Solutions

- [ ] **5-10 issues**: Anticipated problems
- [ ] **Diagnostic questions**: How to identify
- [ ] **Solutions**: How to fix
- [ ] **Detective framing**: In-character explanations

**Issue template:**
```
**"[User complaint/behavior]"**
Diagnostic: [How to identify this]
Solution: [How to fix]
Frame: [How to explain in-character]
```

### Completion Criteria

- [ ] **Verification checklist**: Specific skills to verify
- [ ] **Demonstration tasks**: How to confirm understanding
- [ ] **README alignment**: Matches user-facing objectives

### Advanced Engagement

- [ ] **Fast learners**: Bonus challenges defined
- [ ] **Extra practice**: How to generate more content
- [ ] **Difficulty scaling**: Advanced variations

### Transition

- [ ] **Completion message**: In-character transition
- [ ] **Next mission tease**: Brief preview
- [ ] **Navigation commands**: Exact commands to next mission

### Story Elements Log

- [ ] **Existing elements**: Listed from README/practice files
- [ ] **Log format**: Template for additions provided
- [ ] **Instructions**: How to document new elements

---

## Phase 4: Practice Files Creation

### File Content

- [ ] **Realistic code**: Looks like real development work
- [ ] **Story integration**: Connects to Dr. Vimsworth where possible
- [ ] **Appropriate difficulty**: Matches mission level
- [ ] **Clear instructions**: Comments guide users

### File Quality

- [ ] **Syntax valid**: Code is properly formatted
- [ ] **Meaningful names**: Variables/functions make sense
- [ ] **Commented guidance**: Hints embedded in comments
- [ ] **Intentional challenges**: Bugs/issues are deliberate

### Practice Scenarios

- [ ] **Progressive difficulty**: Easy exercises first
- [ ] **Clear objectives**: Users know what to achieve
- [ ] **Multiple languages**: Variety if appropriate
- [ ] **Hidden elements**: Easter eggs or tokens if applicable

---

## Phase 5: Quality Assurance

### Story Consistency

- [ ] **Detective tone throughout**: All text maintains character
- [ ] **No generic language**: Replaced tutorial-speak
- [ ] **Story progression**: Fits narrative arc
- [ ] **No spoilers**: Doesn't reveal future plot

**Tone verification:**
- [ ] Uses "Detective" to address user
- [ ] Investigation terminology (clues, evidence, forensics)
- [ ] Commands framed as techniques
- [ ] Maintains mystery and intrigue

### Content Completeness

- [ ] **All placeholders replaced**: No [PLACEHOLDER] text remaining
- [ ] **All comments removed**: Template comments deleted
- [ ] **Examples provided**: Every concept has examples
- [ ] **Cross-references work**: File paths and commands are correct

### Technical Accuracy

- [ ] **Commands tested**: All keybindings verified
- [ ] **Paths verified**: File paths exist and are correct
- [ ] **Plugin compatibility**: Checked required plugins
- [ ] **Error-free code**: Practice files are syntactically correct

### Formatting

- [ ] **Markdown valid**: Proper formatting throughout
- [ ] **Code blocks**: Language specified for syntax highlighting
- [ ] **Lists formatted**: Consistent bullet/numbering style
- [ ] **Headers hierarchical**: Proper H1 → H2 → H3 structure

### Accessibility

- [ ] **Clear explanations**: Jargon explained or avoided
- [ ] **Multiple examples**: Concepts shown multiple ways
- [ ] **Fallbacks provided**: Alternatives for missing plugins
- [ ] **Progressive difficulty**: Gentle learning curve

---

## Phase 6: Integration

### Mission Order

- [ ] **MISSION-ORDER.md updated**: New mission added to list
- [ ] **Sequence verified**: Positioned correctly after prerequisites
- [ ] **Reordering considered**: How Mission 02 handles this
- [ ] **Transitions updated**: Previous/next missions link correctly

### Main Documentation

- [ ] **Main CLAUDE.md updated**: New mission referenced
- [ ] **README.md updated**: Tutorial overview includes new mission
- [ ] **Story framework**: Phase I/II documentation updated if needed

### Cross-References

- [ ] **Previous mission**: Links to new mission
- [ ] **New mission**: Links to next mission
- [ ] **Skill dependencies**: Prerequisites documented

---

## Phase 7: Testing (Manual Walkthrough)

### User Perspective

- [ ] **Read README.md**: Engaging and clear?
- [ ] **Understand objectives**: Know what to achieve?
- [ ] **Find practice files**: Easy to locate and open?
- [ ] **Follow instructions**: Clear what to do?
- [ ] **Complete challenges**: Achievable with hints?

### AI Perspective

- [ ] **CLAUDE.md comprehensive**: Enough guidance to teach?
- [ ] **Hints progressive**: 4 levels work correctly?
- [ ] **Issues anticipated**: Common problems covered?
- [ ] **Completion verifiable**: Can confirm mastery?

### Technical Testing

- [ ] **Commands work**: All keybindings functional?
- [ ] **Files open**: Practice files load correctly?
- [ ] **Navigation works**: cd/nvim commands correct?
- [ ] **No errors**: No broken links or missing files?

---

## Phase 8: Polish & Refinement

### Story Enhancement

- [ ] **Evidence compelling**: Story hook grabs attention?
- [ ] **Mystery intriguing**: Questions raised but not answered?
- [ ] **Connection clear**: Skill linked to investigation?
- [ ] **Tone consistent**: Detective noir throughout?

### Educational Value

- [ ] **Concepts clear**: Skills well-explained?
- [ ] **Practice effective**: Hands-on learning works?
- [ ] **Progression smooth**: Difficulty builds appropriately?
- [ ] **Outcomes measurable**: Success is verifiable?

### Engagement

- [ ] **Gamification present**: Scores, challenges, achievements?
- [ ] **Easter eggs**: Hidden elements for exploration?
- [ ] **Variety**: Mix of exercises and formats?
- [ ] **Motivation**: Reason to complete beyond just learning?

### Professional Polish

- [ ] **Grammar checked**: No typos or errors
- [ ] **Formatting consistent**: Styles match across files
- [ ] **Spacing appropriate**: Readable and scannable
- [ ] **Language professional**: Clear and precise

---

## Final Checks Before Completion

- [ ] **All template comments removed**: No <!-- --> notes remaining
- [ ] **All placeholders replaced**: No [BRACKETS] left
- [ ] **Files saved**: All changes persisted
- [ ] **Git status clean**: Ready to commit

### Self-Review Questions

1. **Would this mission engage a new user?** Yes/No
2. **Can users complete this without excessive help?** Yes/No
3. **Does this advance the story meaningfully?** Yes/No
4. **Are learning objectives clear and measurable?** Yes/No
5. **Is the AI guidance comprehensive enough?** Yes/No

If any answer is "No", revisit that aspect.

---

## Ready for Post-Creation QA?

When all sections checked:
- [ ] Move to `post-creation.md` checklist for final quality assurance
- [ ] Prepare for peer review or testing
- [ ] Document any known issues or future improvements

---

**TIP**: Take breaks during creation. Fresh eyes catch issues tired eyes miss.

**TIP**: Read everything aloud. If it sounds awkward, it needs revision.

**TIP**: Test the mission yourself as if you're a user. Does it work?
