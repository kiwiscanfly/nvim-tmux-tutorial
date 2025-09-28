# Mission 01: Command Center 🖥️

```
╔═══════════════════════════════════════════════════════════╗
║  MISSION BRIEFING                                         ║
║  Codename: COMMAND CENTER                                 ║
║  Clearance: Level 1 - FOUNDATION                          ║
║  Priority: CRITICAL                                       ║
╚═══════════════════════════════════════════════════════════╝
```

## 📋 The Case

**Detective, this is your first lesson—and the most important.**

When security found Dr. Vimsworth's abandoned workstation at 2:17 AM on March 16th, 2022, her tmux session was still running. Three windows. Perfect organization. No trace of panic.

The security footage shows her working normally until 11:47 PM, then... nothing. But her terminal stayed active for hours after she vanished. **Someone—or something—continued using her workspace.**

Dr. Vimsworth didn't work like ordinary developers. No multiple terminal windows. No scattered tabs. She orchestrated everything through tmux—a single command center that never shut down, never lost state, and organized her entire workspace with military precision.

**Why such obsessive organization?** Her colleague mentioned she'd grown paranoid about "leaving digital traces" and "working under observation." She needed to work fast, efficiently, without hesitation.

Before you can investigate her disappearance, you must learn to work as she did. **Every command you master brings you closer to understanding what happened that night.**

## 🎯 Objectives

- [ ] Create a persistent session
- [ ] Set up 3 monitoring windows
- [ ] Use panes for split views
- [ ] Detach and reattach without losing work

## 🛠️ Essential Commands

**Sessions** (persistent workspaces):
```
tmux new -s name       Create named session
tmux ls                List sessions
tmux attach -t name    Reattach
Ctrl+b d               Detach (keeps running!)
```

**Windows** (like tabs):
```
Ctrl+b c               Create window
Ctrl+b ,               Rename window
Ctrl+b 0-9             Jump to window number
Ctrl+b n/p             Next/previous window
```

**Panes** (split views):
```
Ctrl+b %               Split vertical
Ctrl+b "               Split horizontal
Ctrl+b →←↑↓            Navigate panes
Ctrl+b z               Zoom/unzoom pane
Ctrl+b x               Kill pane
```

## 🎮 The Challenge: Recreate Her Final Session

**Security Report Extract:**
*"Subject's final tmux session showed 3 windows in specific configuration. Reconstruction required for investigation."*

Set up Dr. Vimsworth's monitoring environment exactly as found:

**Window 0: "prometheus-frontend"**
- Development server (still running when found)
- Split pane: Code editor positioned left, logs right
- *Unusual activity: last edit timestamp 23:47, but process logs continue until 02:15*

**Window 1: "prometheus-backend"**
- Backend server monitoring
- *Security note: server received encrypted data packets after 11:47 PM*

**Window 2: "surveillance-logs"**
- System monitoring (renamed from "logs" in her final session)
- *Evidence: she was watching something... or someone was watching her*

**Critical Test**: Detach (`Ctrl+b d`), reattach (`tmux attach`). Everything must persist exactly like that night.

**Question**: If she vanished at 11:47 PM, who kept working until 2:17 AM?

## 🏆 Success Criteria

- [ ] 3+ windows created and named
- [ ] At least 2 panes in one window
- [ ] Successfully detached and reattached
- [ ] All processes still running after reattach

---

**IMPORTANT - Finding Your Way Back:**

To return to your AI partner (Claude Code) from anywhere:
```
Ctrl+b 0    Jump to window 0 (where Claude Code is running)
Ctrl+b ←    Navigate to left pane (if you split your workspace)
```

Your AI detective partner is always waiting in your first tmux window. You can switch between investigation work and guidance anytime.

When you've completed the objectives, let your AI partner know you're ready for the next mission.

---

## 📰 Case Evidence - Security Log Fragment

```
PROMETHEUS SECURITY SYSTEM - INCIDENT LOG PR-2025-047
TIMESTAMP: 2022-03-15 23:47:33
WORKSTATION: dr-vimsworth-dev-01

23:47:33 - Final keystroke detected: ESC
23:47:45 - Session idle timeout: DISABLED (tmux persistent)
23:52:11 - Network activity: HTTPS POST to prometheus-repo
00:15:22 - Keyboard activity resumed (NO PHYSICAL PRESENCE DETECTED)
00:15:23 - Activity pattern: AUTOMATED
02:17:04 - Security sweep: WORKSTATION ABANDONED
           tmux session: ACTIVE
           processes: 3 RUNNING
           windows: prometheus-frontend, prometheus-backend, surveillance-logs

CLASSIFICATION: ANOMALOUS
STATUS: INVESTIGATION ONGOING
```

*"She was monitoring more than just code. Someone finished her work."*