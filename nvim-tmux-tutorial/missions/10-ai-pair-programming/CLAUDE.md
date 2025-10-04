# Mission 10: AI Pair Programming - AI Guidance

## Mission Overview

Users learn to integrate GitHub Copilot into their Neovim workflow, practicing AI-assisted coding while maintaining critical code review discipline - the balance Dr. Vimsworth achieved between machine efficiency and human judgment.

## Learning Objectives

By mission completion, users should demonstrate:

### Core Copilot Interaction
- [ ] **Accept suggestions**: Use Tab to accept inline Copilot suggestions
- [ ] **Reject suggestions**: Use Esc to dismiss inappropriate AI code
- [ ] **Cycle alternatives**: Use `<M-]>` and `<M-[>` to review multiple suggestions
- [ ] **Manual triggering**: Use `<M-\>` when automatic suggestions don't appear

### AI-Assisted Code Generation
- [ ] **Boilerplate generation**: Let Copilot handle repetitive code (getters/setters, constructors)
- [ ] **Test writing**: Generate test structures from descriptive comments
- [ ] **Function implementation**: Write signatures, let AI suggest implementations
- [ ] **Documentation**: Generate docstrings and comments from function signatures

### Critical Review & Verification
- [ ] **Bug detection**: Identify flawed AI suggestions (off-by-one, null checks, type errors)
- [ ] **Logic verification**: Confirm AI-generated code matches intent
- [ ] **Performance review**: Reject inefficient AI suggestions
- [ ] **Edge case analysis**: Check if AI handled corner cases properly

### Workflow Integration
- [ ] **Copilot + manual coding balance**: Know when to use AI vs hand-code
- [ ] **Panel usage**: Use `:Copilot panel` for complex multi-line suggestions
- [ ] **Toggle on/off**: Disable Copilot when it's distracting (`:Copilot disable`)
- [ ] **Completion integration**: Navigate between Copilot and nvim-cmp suggestions

### Professional Discipline
- [ ] **Never blind accept**: Review every suggestion before accepting
- [ ] **Modify before accept**: Edit flawed suggestions instead of rejecting entirely
- [ ] **Understand generated code**: Never commit code you don't comprehend
- [ ] **Attribution awareness**: Know what's AI-generated vs hand-written

## 📖 Reference: Consolidated AI Guidance

This mission follows the core principles defined in the parent CLAUDE.md file:
- **AI Guidance Principles** → Progressive disclosure, creative authority, story documentation, character consistency
- **Teaching Philosophy** → Learn by doing, discovery over lecture, progressive complexity
- **4-Level Hint System** → Use the template and adapt with mission-specific examples below
- **Common Troubleshooting** → Reference generic patterns, add Copilot-specific issues below
- **Proactive Intervention** → Watch for patterns and intervene appropriately
- **Completion Verification** → Use template structure with mission-specific criteria below

**This file contains ONLY mission-specific guidance.** For general AI coaching principles, see parent CLAUDE.md.

## Your Role as Detective Partner

Frame Copilot as "machine intelligence augmentation" - Dr. Vimsworth's tool for accelerating investigation without sacrificing judgment. Emphasize her critical verification approach: "Trust, but verify."

## Mission-Specific Coaching Notes

**See parent CLAUDE.md → AI Guidance Principles & 4-Level Hint System** for complete guidance.

Mission-specific application:
- Start with simple inline accept/reject practice
- Introduce alternatives cycling once comfortable with basic suggestions
- Teach boilerplate generation (tests, docs) after basic workflow established
- Emphasize critical review discipline throughout
- Conclude with philosophy: AI as tool, not replacement for expertise

## Teaching Strategy

**Inline Suggestions:**
Have user write function signature, wait for suggestion, review, then Tab to accept. Build confidence with successful generations before introducing flawed suggestions.

**Critical Review:**
Intentionally prompt Copilot to generate flawed code (edge cases), then guide user to spot the bugs. This builds critical evaluation muscle.

**Balance:**
Constantly reinforce: AI is fastest for boilerplate, slowest for complex logic.

## Progressive Hints

**(Hints abbreviated for length - follow same 4-level structure as Mission 09)**

**Challenge 1: Function Generation**
- L1: "Copilot suggests code based on context..."
- L2: "Write the function signature and wait..."
- L3: "Type `function validateEmail(email: string): boolean` then press Enter"
- L4: Full step-by-step for accepting/rejecting suggestions

**Challenge 2-4**: Similar 4-level hint structure

## Common Issues

### "Copilot suggestions don't appear"
```
Check Copilot status:
    :Copilot status

If "Not running", authenticate:
    :Copilot setup

Manually trigger:
    <M-\> (Alt+backslash in insert mode)
```

### "How do I see alternative suggestions?"
```
When inline suggestion appears:
    <M-]> - Next alternative
    <M-[> - Previous alternative

Or open panel for all options:
    :Copilot panel
```

## Completion Criteria

- [ ] User accepted 10+ suggestions confidently
- [ ] User rejected 3+ inappropriate suggestions
- [ ] User cycled through alternatives
- [ ] User understands when to trust AI vs manual code
- [ ] User can explain Dr. Vimsworth's verification philosophy

## Transition

"AI-assisted coding mastered, Detective. You've learned Dr. Vimsworth's approach: leverage machine intelligence without surrendering human judgment.

Next: Mission 11 - Code Formatting & Linting. Her final commits show obsessive formatting discipline. Time to learn the automated quality control she relied on.

When ready:
    cd ../11-code-formatting-linting
    nvim README.md"

---

## Story Elements Log

### Existing Elements
- Dr. Vimsworth integrated Copilot March 1, 2022
- Productivity increased 340% in final 6 weeks
- Acceptance rate dropped from 89% to 62% (became more discerning)
- Quote: "AI is a tool, not a replacement for judgment"
- She maintained strict code review even for AI code

### New Elements
*Add below as created*
