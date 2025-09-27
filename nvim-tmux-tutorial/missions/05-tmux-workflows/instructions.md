# Mission 05: Tmux Workflows 🖥️

```
╔═══════════════════════════════════════════════════════════╗
║  MISSION BRIEFING                                         ║
║  Codename: TERMINAL MULTIPLEXER                           ║
║  Clearance: Level 5                                       ║
║  Status: ACTIVE                                           ║
╚═══════════════════════════════════════════════════════════╝
```

## 📋 Background

Dr. Vimsworth monitored 3 production systems simultaneously. Her secret? Tmux mastery.

## 🎯 Objectives

- [ ] Create 3 named sessions (one per project)
- [ ] Set up monitoring dashboard with panes
- [ ] Practice pane navigation and resizing
- [ ] Copy content between panes

## 🛠️ Key Commands

**Sessions:**
- `tmux new -s web` - Create session named "web"
- `Ctrl+b d` - Detach
- `tmux attach -t web` - Reattach
- `Ctrl+b s` - Session switcher

**Panes:**
- `Ctrl+b %` - Vertical split
- `Ctrl+b "` - Horizontal split
- `Ctrl+b arrow` - Navigate
- `Ctrl+b z` - Toggle zoom
- `Ctrl+b Ctrl+arrow` - Resize

## 📊 Challenge

1. Create 3 sessions: web-app, cli-tool, api-service
2. In each, set up a 3-pane layout:
   - Top: logs (tail -f)
   - Bottom-left: nvim
   - Bottom-right: shell

3. Switch between sessions monitoring all 3 projects

## ⏭️ Final Challenge

```bash
cd ../final-challenge
nvim locked.md
```