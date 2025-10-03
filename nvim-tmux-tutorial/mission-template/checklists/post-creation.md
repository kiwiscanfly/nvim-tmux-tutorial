# Post-Creation Quality Assurance Checklist

Use this checklist AFTER creating the mission to verify quality, consistency, and readiness for users.

---

## 1. File Structure Verification

### Directory Organization

- [ ] **Correct location**: Mission in `missions/XX-mission-name/` directory
- [ ] **All files present**: README.md, CLAUDE.md, and practice files exist
- [ ] **Naming conventions**: All files follow standards (hyphens, extensions, hidden files)
- [ ] **No extra files**: No temp files, backups, or unneeded content

**Run this check:**
```bash
cd missions/XX-mission-name
ls -la
# Verify: README.md, CLAUDE.md, practice files, optional hidden files
# NO: .swp, .bak, ~ files, or other temp files
```

### File Sizes

- [ ] **README.md**: 200-800 lines (typical range)
- [ ] **CLAUDE.md**: 400-1200 lines (comprehensive guidance)
- [ ] **Practice files**: 50-500 lines each (not too short, not overwhelming)

**Warning signs:**
- README.md < 100 lines → Probably too brief
- CLAUDE.md < 200 lines → Not enough AI guidance
- Practice file > 1000 lines → Probably overwhelming

---

## 2. Content Completeness

### README.md Completeness

- [ ] **Mission briefing**: ASCII box with codename, clearance, status
- [ ] **The Case**: 3-5 paragraphs of story hook
- [ ] **Objectives**: 3-6 clear checkboxes
- [ ] **Essential commands**: Comprehensive reference organized by category
- [ ] **Practice/Challenges**: Clear exercises with instructions
- [ ] **Success criteria**: Specific completion requirements
- [ ] **Next steps**: Navigation to next mission

**Missing any? Go back and add.**

### CLAUDE.md Completeness

- [ ] **Mission overview**: 1-3 sentence summary
- [ ] **Learning objectives**: 20-40 items in 4-6 categories
- [ ] **Detective role**: Character framing
- [ ] **Progressive disclosure**: Teaching order and authority
- [ ] **AI-driven approach**: Initial engagement and strategy
- [ ] **Progressive hints**: 4 levels for each challenge
- [ ] **Interactive coaching**: 4 behavior patterns addressed
- [ ] **Proactive intervention**: 5+ patterns with responses
- [ ] **Common issues**: 5-10 problems with solutions
- [ ] **Completion criteria**: Verification checklist
- [ ] **Advanced engagement**: Bonus content for fast learners
- [ ] **Transition**: Next mission guidance
- [ ] **Story elements log**: Existing elements listed, space for new

**Missing sections? Complete them now.**

### Practice Files Completeness

- [ ] **Instructions embedded**: Comments guide users
- [ ] **Clear objectives**: Users know what to achieve
- [ ] **Appropriate difficulty**: Matches mission level
- [ ] **Story integration**: Connected to investigation theme
- [ ] **No errors**: Code is syntactically correct

---

## 3. Quality Standards

### Story Integration

- [ ] **Compelling hook**: "The Case" section grabs attention
- [ ] **Clear connection**: Skill linked to Dr. Vimsworth's methods
- [ ] **Evidence-based**: Uses forensic/investigation framing
- [ ] **Mystery maintained**: Doesn't spoil future revelations
- [ ] **Consistent with lore**: Fits established story framework

**Test:** Read "The Case" section aloud. Is it engaging? Does it make you want to learn the skill?

### Detective Tone Consistency

- [ ] **No generic language**: Zero "Let's learn about..." phrases
- [ ] **Investigation terminology**: Uses clues, evidence, forensics, leads
- [ ] **Addresses as "Detective"**: User referred to appropriately
- [ ] **Commands as techniques**: Skills framed as investigation methods
- [ ] **Mystery maintained**: Professional but intriguing tone

**Find and replace any:**
- ❌ "Let's learn" → ✅ "Time to master"
- ❌ "This tutorial" → ✅ "This investigation"
- ❌ "Exercise" → ✅ "Challenge" or "Evidence analysis"
- ❌ "You'll learn" → ✅ "You'll uncover" or "You'll discover"

### Educational Effectiveness

- [ ] **Concepts well-explained**: No assumed knowledge gaps
- [ ] **Examples abundant**: Every concept has examples
- [ ] **Progressive difficulty**: Gentle learning curve
- [ ] **Hands-on practice**: More doing than reading
- [ ] **Clear outcomes**: Success is measurable

**Test:** Could a complete beginner follow this? Are there enough examples?

### Gamification Elements

- [ ] **Scoring system**: Par scores, medals, or achievements present (if applicable)
- [ ] **Progress tracking**: Scorecard or checklist for tracking
- [ ] **Hidden elements**: Easter eggs or bonus discoveries (optional)
- [ ] **Challenges**: Competitive or skill-testing elements
- [ ] **Rewards**: Unlockable content or recognition

**Not every mission needs gamification, but most benefit from it.**

---

## 4. Technical Verification

### Command Accuracy

- [ ] **All keybindings tested**: Verified they work
- [ ] **Plugin commands verified**: Checked against plugin docs
- [ ] **No deprecated commands**: All commands are current
- [ ] **Correct for user's config**: Accounts for common setups

**Test each command:**
```bash
# Open nvim and try every command listed in README.md
# Verify they work as described
```

### File Path Accuracy

- [ ] **All paths correct**: `cd` and `nvim` commands work
- [ ] **No broken references**: All file references valid
- [ ] **Relative paths work**: From expected starting location
- [ ] **Practice files accessible**: Users can find and open them

**Test navigation:**
```bash
# From tutorial root:
cd missions/XX-mission-name
nvim README.md

# From mission directory:
nvim practice-file.ext

# To next mission:
cd ../XX-next-mission
```

### Plugin Dependencies

- [ ] **Requirements documented**: Clear about what plugins needed
- [ ] **Fallbacks provided**: Alternatives if plugins missing
- [ ] **Mission 02 compatibility**: Considered in reordering logic
- [ ] **Installation help available**: Can guide setup if needed

**Document in CLAUDE.md:**
- Required plugins: _________________
- Optional plugins: _________________
- Fallback methods: _________________

### Code Validity

- [ ] **Syntax correct**: All practice files are valid code
- [ ] **Runs without errors**: Code executes (if applicable)
- [ ] **Intentional bugs marked**: If bugs exist, they're documented
- [ ] **Languages appropriate**: File extensions match content

**Test each practice file:**
```bash
# For JavaScript:
node practice-file.js

# For Python:
python practice-file.py

# Should run without syntax errors (logic errors OK if intentional)
```

---

## 5. Learning Objectives Verification

### Comprehensiveness

- [ ] **20-40 objectives**: Sufficient coverage
- [ ] **4-6 categories**: Well-organized
- [ ] **No duplicates**: Each objective unique
- [ ] **All relevant skills**: No important skills missing

**Coverage check:**
- [ ] Basic concepts covered
- [ ] Intermediate techniques included
- [ ] Advanced features mentioned
- [ ] Edge cases addressed
- [ ] Real-world applications shown

### Measurability

- [ ] **Specific outcomes**: "User can..." not "User understands..."
- [ ] **Verifiable**: Can test if objective achieved
- [ ] **Action-oriented**: Uses action verbs
- [ ] **Clear standards**: Know what "mastery" looks like

**Weak objective:** "Understand text objects"
**Strong objective:** "Use `af` to delete entire function calls in one keystroke"

### Alignment

- [ ] **README ↔ CLAUDE**: Objectives match between files
- [ ] **Practice ↔ Objectives**: Exercises teach listed skills
- [ ] **Completion ↔ Objectives**: Success criteria verify objectives

---

## 6. Progressive Hints Verification

### For Each Challenge

- [ ] **Level 1 exists**: Technique reminder (general)
- [ ] **Level 2 exists**: Directional hint (pointing)
- [ ] **Level 3 exists**: Specific guidance (exact commands)
- [ ] **Level 4 exists**: Complete solution (step-by-step)

### Hint Quality

- [ ] **Level 1 doesn't solve**: Only reminds of tools
- [ ] **Level 2 requires thinking**: Points but doesn't tell
- [ ] **Level 3 still needs execution**: Gives command but not full solution
- [ ] **Level 4 is complete**: Full walkthrough provided

**Test hint progression:**
Read Level 1 → Could you solve it? No? Good.
Read Level 2 → Getting closer? Yes? Good.
Read Level 3 → Could you solve it now? Probably? Good.
Read Level 4 → Is it a complete solution? Yes? Good.

### Coverage

- [ ] **All challenges covered**: Every exercise has hints
- [ ] **Boss levels special**: Hardest challenges have extra guidance
- [ ] **Common sticking points**: Anticipated frustration points addressed

---

## 7. Common Issues Coverage

### Issue Identification

- [ ] **5-10 issues listed**: Comprehensive problem coverage
- [ ] **Realistic problems**: Based on actual user confusion
- [ ] **Diagnostic questions**: Can identify each issue
- [ ] **Solutions provided**: Clear fixes for each

### Issue Categories Covered

- [ ] **Command confusion**: Misunderstanding keybindings
- [ ] **Plugin errors**: Missing or broken plugins
- [ ] **Conceptual issues**: Not understanding the skill
- [ ] **Technical errors**: Setup or configuration problems
- [ ] **Workflow issues**: Not knowing how to apply skill

**Missing categories? Add more issues.**

### Solution Quality

- [ ] **Step-by-step fixes**: Clear resolution steps
- [ ] **Detective framing**: Explained in-character
- [ ] **Preventive advice**: How to avoid issue next time
- [ ] **Escalation path**: What if solution doesn't work

---

## 8. Completion Criteria Verification

### Clarity

- [ ] **Specific checkboxes**: Concrete tasks listed
- [ ] **Measurable outcomes**: Can verify completion
- [ ] **Demonstration tasks**: Ways to prove understanding
- [ ] **Minimum standards**: Clear what "passing" means

### Alignment

- [ ] **Matches objectives**: Criteria verify learning objectives
- [ ] **Matches practice**: Criteria relate to exercises
- [ ] **Matches README**: User-facing and AI criteria align

### Flexibility

- [ ] **Minimum defined**: What's required to pass
- [ ] **Excellence defined**: What's exceptional (Gold/Silver/Bronze)
- [ ] **Bonus optional**: Extra credit clearly marked
- [ ] **Graceful failure**: Can pass even if not perfect

**Test:** Could you complete this mission? How would you know you're done?

---

## 9. Transition Quality

### Next Mission Setup

- [ ] **Transition message**: In-character handoff to next mission
- [ ] **Skill connection**: Explains how missions relate
- [ ] **Motivation**: Creates interest in next topic
- [ ] **Clear navigation**: Exact commands to proceed

### Story Progression

- [ ] **Mystery advanced**: Investigation moved forward
- [ ] **Clues revealed**: New evidence discovered
- [ ] **Questions raised**: Intrigue for next phase
- [ ] **No spoilers**: Future missions not revealed

**Test the transition:**
```bash
# From current mission, follow the navigation commands
# Do they work? Do you arrive at the right place?
```

---

## 10. Accessibility & Adaptation

### Multiple Skill Levels

- [ ] **Beginner-friendly**: Basic explanations clear
- [ ] **Intermediate challenges**: Moderate difficulty present
- [ ] **Advanced content**: Bonus material for experts
- [ ] **Flexible pacing**: Can go slow or fast

### Plugin Flexibility

- [ ] **Works with plugins**: Full experience if plugins present
- [ ] **Works without plugins**: Fallback options provided
- [ ] **Adaptation documented**: How to modify for different setups
- [ ] **Mission 02 integration**: Reordering logic accounts for this

### Learning Styles

- [ ] **Visual learners**: Examples and diagrams
- [ ] **Hands-on learners**: Practice exercises abundant
- [ ] **Reading learners**: Explanations comprehensive
- [ ] **Experimental learners**: Room to explore

---

## 11. Documentation Updates

### Mission Order

- [ ] **MISSION-ORDER.md updated**: New mission added
- [ ] **Position correct**: Sequenced appropriately
- [ ] **Prerequisites listed**: Dependencies documented
- [ ] **Reordering notes**: How Mission 02 handles this

### Main Files

- [ ] **Main README.md**: Tutorial overview includes new mission
- [ ] **Main CLAUDE.md**: Framework references new mission
- [ ] **Story phase docs**: Phase I/II updated if needed

### Cross-References

- [ ] **Previous mission updated**: Links to new mission
- [ ] **Next mission prepared**: Ready to link back
- [ ] **Skill dependency map**: Shows what builds on what

---

## 12. Final Polish

### Grammar & Spelling

- [ ] **Spell-checked**: No typos
- [ ] **Grammar correct**: Proper sentence structure
- [ ] **Punctuation consistent**: Commas, periods, quotes correct
- [ ] **Capitalization**: Proper nouns and titles correct

### Formatting

- [ ] **Markdown valid**: Renders correctly
- [ ] **Code blocks**: Language specified for syntax highlighting
- [ ] **Lists consistent**: Bullets or numbers used properly
- [ ] **Headers hierarchical**: H1 → H2 → H3 logical

### Readability

- [ ] **Paragraphs reasonable**: Not too long (< 5 sentences ideal)
- [ ] **Sentences clear**: Not overly complex
- [ ] **Spacing appropriate**: Visual breaks for scanning
- [ ] **Emphasis used**: Bold, italics, code for clarity

### Professional Presentation

- [ ] **Consistent terminology**: Same terms used throughout
- [ ] **No placeholder text**: All [BRACKETS] replaced
- [ ] **No template comments**: All <!-- --> removed
- [ ] **Polished and complete**: Feels finished

---

## 13. User Testing (If Possible)

### Self-Test

- [ ] **Complete mission yourself**: Act as a beginner
- [ ] **Follow all instructions**: Do they work?
- [ ] **Try all commands**: Are they correct?
- [ ] **Use all hints**: Do they help?

### Fresh Eyes Test

- [ ] **Someone else reads README**: Is it clear?
- [ ] **Someone else tries challenges**: Are they doable?
- [ ] **Someone else reviews CLAUDE**: Is guidance sufficient?

### Error Testing

- [ ] **Intentionally mess up**: Try wrong commands
- [ ] **Get stuck**: Do hints help recover?
- [ ] **Skip steps**: Does it break?

---

## 14. Git & Version Control

### Pre-Commit

- [ ] **All files saved**: No unsaved changes
- [ ] **All files added**: `git add` completed
- [ ] **No unwanted files**: Check `git status`
- [ ] **Sensible commit message**: Clear what changed

**Recommended commit message format:**
```
Add Mission XX: [Mission Name]

- Teaching [primary skill]
- Includes [number] practice challenges
- [Key feature: gamification/story hook/etc.]
- Updates MISSION-ORDER.md with new mission
```

### Documentation Commits

- [ ] **MISSION-ORDER.md committed**: Updated order
- [ ] **Cross-references committed**: Updated links
- [ ] **README updates committed**: Main docs updated

---

## 15. Release Checklist

### Pre-Release Verification

- [ ] **All checklists complete**: Pre, during, post all checked
- [ ] **No known bugs**: All issues resolved or documented
- [ ] **Tested thoroughly**: Walkthrough completed successfully
- [ ] **Documentation current**: All docs reference new mission

### Quality Gates

- [ ] **Story hook is compelling**: Engaging intro
- [ ] **Practice is effective**: Hands-on learning works
- [ ] **Objectives are clear**: Know what to achieve
- [ ] **Hints are progressive**: 4 levels work well
- [ ] **Completion is verifiable**: Can confirm mastery

### Final Questions

**Answer honestly:**

1. **Would you be excited to do this mission?** Yes/No
   - If No: Improve story hook and gamification

2. **Could a beginner complete this successfully?** Yes/No
   - If No: Simplify or add more guidance

3. **Does this teach the skill effectively?** Yes/No
   - If No: Revise practice exercises

4. **Is the AI guidance comprehensive enough?** Yes/No
   - If No: Add more hints and coaching patterns

5. **Are you proud of this mission?** Yes/No
   - If No: What needs improvement?

---

## Sign-Off

### Ready for Release When:

- [ ] All sections of this checklist are complete
- [ ] All quality questions answered "Yes"
- [ ] No known critical issues
- [ ] Documentation updated
- [ ] Changes committed to git
- [ ] At least one successful walkthrough completed

### Known Issues (Document Any):

List any minor issues or future improvements:
- _________________________________________________________________
- _________________________________________________________________
- _________________________________________________________________

### Future Enhancements (Optional):

Ideas for future mission improvements:
- _________________________________________________________________
- _________________________________________________________________
- _________________________________________________________________

---

## Mission Released ✅

**Congratulations!** Mission XX: [Mission Name] is complete and ready for users.

**Next Steps:**
1. Monitor user feedback
2. Address any issues that arise
3. Consider enhancements for next version
4. Plan next mission using pre-creation checklist

---

**Remember:** A mission is never truly "done." It evolves based on user experience. Be ready to iterate and improve.

**Quality over quantity:** One excellent mission is worth more than three mediocre ones.
