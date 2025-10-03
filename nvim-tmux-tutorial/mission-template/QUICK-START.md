# Quick Start: Creating a New Mission

**For AI**: Use this guide when you need to create a new mission quickly (Mission 02 dynamic creation or user ad-hoc request).

---

## 🚀 30-Second Checklist

1. ✅ **Scan MISSION-CREATION-GUIDE.md** (5 min overview)
2. ✅ **Copy template files:**
   - `templates/README-template.md` → `missions/XX-name/README.md`
   - `templates/CLAUDE-template.md` → `missions/XX-name/CLAUDE.md`
3. ✅ **Fill all placeholders** (replace [BRACKETS])
4. ✅ **Remove all template comments** (`<!-- ... -->`)
5. ✅ **Create practice files** with story integration
6. ✅ **Test walkthrough** (read as user, does it work?)
7. ✅ **Update MISSION-ORDER.md** with new mission

**Time estimate:** 20-40 minutes for complete mission

---

## 📋 Essential Elements Checklist

### README.md Must Have:
- [ ] ASCII mission briefing box (codename, clearance, status)
- [ ] "The Case" story hook (3-5 paragraphs, evidence-based)
- [ ] 3-6 clear objectives with checkboxes
- [ ] Essential commands organized by category
- [ ] Practice challenges with story integration
- [ ] Success criteria (specific, measurable)
- [ ] Next steps navigation

### CLAUDE.md Must Have:
- [ ] Mission overview (1-3 sentences)
- [ ] **20-40 learning objectives** in 4-6 categories
- [ ] Detective partner role framing
- [ ] Progressive disclosure notes
- [ ] Teaching strategy for each major concept
- [ ] **4-level progressive hints** for each challenge
- [ ] Interactive coaching patterns
- [ ] 5-10 common issues with solutions
- [ ] Completion criteria checklist
- [ ] Transition to next mission
- [ ] Story Elements Log section

### Practice Files Must Have:
- [ ] Realistic code (looks like real development)
- [ ] Story-appropriate names (not "practice.js")
- [ ] Clear instructions in comments
- [ ] Appropriate difficulty for mission level
- [ ] Connection to Dr. Vimsworth narrative

---

## 🎯 4-Level Hint System (DO NOT SKIP)

**For EVERY challenge, provide all 4 levels:**

**Level 1 - Technique Reminder:**
- Remind what tools exist
- Don't give specific answer
- Example: "Remember, you have motion commands like w, b, and e"

**Level 2 - Directional Hint:**
- Point toward solution area
- Still requires thinking
- Example: "The bug is in the calculateTotal function"

**Level 3 - Specific Guidance:**
- Give exact command or file
- Still requires execution
- Example: "Use `/calculateTotal` to find the function, then navigate to the return line"

**Level 4 - Direct Help:**
- Complete step-by-step solution
- Only if user frustrated
- Example: "1. Press `/calculateTotal` 2. Press j three times 3. Change `total` to `total * 1.1`"

---

## 🕵️ Detective Tone (MANDATORY)

### ✅ DO Use:
- Investigation terminology (clues, evidence, forensics, leads)
- Address user as "Detective" or "Partner"
- Frame commands as "investigative techniques"
- Detective phrases: "The trail leads to...", "Evidence suggests...", "A breakthrough, Detective!"

### ❌ DON'T Use:
- "Let's learn about..." → ✅ "Time to master..."
- "This tutorial..." → ✅ "This investigation..."
- "Exercise" → ✅ "Challenge" or "Evidence analysis"
- Generic tutorial language → ✅ Detective framing

---

## 📖 Story Integration

### The Case (Story Hook) Must:
1. **Open with evidence:** Forensic findings, logs, timestamps
2. **Raise mystery:** Unanswered questions about Dr. Vimsworth
3. **Connect to skill:** Why she used this technique
4. **Create urgency:** Why it matters to the investigation

**Template:**
```
**Forensic Analysis Report - [Department]**

Dr. Vimsworth's [evidence type] shows [unusual pattern]:
- [Specific metric/observation]
- [Another finding]
- [Conclusion or question]

**Why [unusual behavior]?** [Quote or evidence]

**The [artifact] isn't just [obvious use] - it's [real purpose].**

**Your mission**: [Learn skill to understand her methods]
```

---

## 🔢 Mission Numbering

- **01-08:** Existing missions (fixed order, but reordered by Mission 02)
- **09+:** Available for new missions
- Use format: `XX-skill-name` (e.g., `09-harpoon-navigation`)
- Add to `MISSION-ORDER.md` when created

---

## ⚡ Common Mistakes to Avoid

| ❌ Mistake | ✅ Fix |
|-----------|--------|
| Generic tutorial language | Use detective framing throughout |
| Missing hint levels | Provide all 4 levels for each challenge |
| No story connection | Link to Dr. Vimsworth's methods |
| Vague objectives | Specific, measurable outcomes |
| No completion criteria | Clear success checklist |
| Skipping examples | Every command gets an example |
| Practice files generic | Story-appropriate names and content |
| No plugin fallback | Provide built-in vim alternatives |

---

## 📁 File Locations

**Templates:**
- README template: `templates/README-template.md`
- CLAUDE template: `templates/CLAUDE-template.md`
- Directory guide: `templates/directory-structure.md`

**Examples:**
- Filled README: `examples/example-filled-readme.md`
- Filled CLAUDE: `examples/example-filled-claude.md`
- Design comparison: `examples/comparison-notes.md`

**Checklists:**
- Pre-creation planning: `checklists/pre-creation.md`
- During development: `checklists/during-creation.md`
- Post-creation QA: `checklists/post-creation.md`

**Full Guide:**
- Complete process: `MISSION-CREATION-GUIDE.md`

---

## 🎮 When to Create Missions

### Mission 02 Dynamic Creation:
**Scenario:** User has plugin not covered in missions 01-08
```
User has: Harpoon for file navigation
Decision: Create Mission 09: Harpoon Navigation
Process:
1. Inform user: "I can create a custom mission for Harpoon"
2. Get consent: "Would you like Mission 09: Harpoon Navigation?"
3. Use this quick start guide
4. Create: missions/09-harpoon-navigation/
5. Add to their custom mission path
```

### Ad-Hoc User Request:
**Scenario:** User says "Create a mission for [skill]"
```
User says: "Can you make a mission teaching macros?"
Decision: Create Mission 09: Macro Mastery
Process:
1. Acknowledge: "Excellent idea, Detective. Macros were one of Dr.
   Vimsworth's signature techniques."
2. Research skill (if needed)
3. Use this quick start guide
4. Create: missions/09-macro-mastery/
5. Guide them: "cd missions/09-macro-mastery && nvim README.md"
```

---

## ⏱️ Time Estimates

| Task | Time |
|------|------|
| Scan creation guide | 5 min |
| Fill README template | 10-15 min |
| Fill CLAUDE template | 15-20 min |
| Create practice files | 10-20 min |
| Test & refine | 5-10 min |
| **Total** | **20-40 min** |

**Faster for simple missions, longer for complex ones**

---

## ✅ Final Verification

Before presenting mission to user:

- [ ] All template comments removed
- [ ] All [PLACEHOLDERS] replaced
- [ ] Detective tone throughout
- [ ] 4-level hints for all challenges
- [ ] 20-40 learning objectives in CLAUDE.md
- [ ] Story hook connects to Dr. Vimsworth
- [ ] Practice files have realistic names
- [ ] Success criteria are clear
- [ ] Next mission navigation works
- [ ] Added to MISSION-ORDER.md

---

## 🚨 Emergency Fast Track

**Need mission in 10 minutes? Absolute minimum:**

1. Copy templates → new directory
2. Replace these placeholders:
   - `[NUMBER]` → Mission number
   - `[MISSION_NAME]` → Skill name
   - `[CODENAME]` → Investigation codename
   - `[CLEARANCE_LEVEL]` → Difficulty (1-5)
3. Write "The Case" story hook (3 paragraphs minimum)
4. List 10 learning objectives (can expand later)
5. Create 1 practice file with clear instructions
6. Remove template comments
7. Test: Read as user, does it make sense?

**Good enough to start. Refine as user progresses.**

---

## 📚 Further Reading

- **Complete guide:** `MISSION-CREATION-GUIDE.md` (comprehensive)
- **Examples:** `examples/` directory (real missions)
- **Quality checks:** `checklists/` directory (thoroughness)
- **Main framework:** `../CLAUDE.md` (overall story & tone)

---

**Remember:** A well-crafted mission teaches skills AND advances the investigation. Make it engaging, mysterious, and professional.

🎯 **Now go create an excellent mission, Detective!**
