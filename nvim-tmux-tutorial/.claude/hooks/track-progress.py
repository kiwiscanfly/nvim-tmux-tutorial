#!/usr/bin/env python3
"""
Achievement & Progress Tracking Hook
Tracks token discoveries, mission completions, and updates achievement files
"""

import sys
import json
import os
import re
from pathlib import Path
from datetime import datetime

# Read hook input from stdin
hook_input = json.loads(sys.stdin.read())

# Get project directory
project_dir = Path(os.environ.get('CLAUDE_PROJECT_DIR', os.getcwd()))
achievements_dir = project_dir / 'achievements'
progress_file = achievements_dir / 'progress.md'
badges_dir = achievements_dir / 'badges'
state_file = achievements_dir / '.progress-state.json'

# Token patterns to detect
TOKEN_PATTERN = r'\[(ALPHA|BETA|GAMMA|DELTA|EPSILON)-\d+\]'

# Achievement definitions
ACHIEVEMENTS = {
    'completed_tmux_workflows': {
        'name': '🖥️ Tmux Tamer',
        'trigger': 'mission_01_complete',
        'badge': 'tmux_badge.txt'
    },
    'completed_telescope_search': {
        'name': '🔭 Telescope Explorer',
        'trigger': 'mission_02_complete',
        'badge': 'telescope_badge.txt'
    },
    'completed_vim_motions': {
        'name': '⚡ Motion Master',
        'trigger': 'mission_03_complete',
        'badge': 'motion_badge.txt'
    },
    'completed_visual_mastery': {
        'name': '👁️ Visual Virtuoso',
        'trigger': 'mission_04_complete',
        'badge': 'visual_badge.txt'
    },
    'completed_buffer_management': {
        'name': '📚 Buffer Boss',
        'trigger': 'mission_05_complete',
        'badge': 'buffer_badge.txt'
    },
    'completed_motion_golf': {
        'name': '⛳ Motion Golf Champion',
        'trigger': 'practice_complete',
        'badge': 'golf_badge.txt'
    },
    'telescope_explorer': {
        'name': '🔍 All Tokens Found',
        'trigger': 'found_all_tokens',
        'badge': 'tokens_badge.txt'
    }
}

def load_state():
    """Load current progress state"""
    if state_file.exists():
        with open(state_file, 'r') as f:
            return json.load(f)
    return {
        'tokens_found': [],
        'achievements_unlocked': [],
        'missions_completed': [],
        'last_updated': None
    }

def save_state(state):
    """Save progress state"""
    state['last_updated'] = datetime.now().isoformat()
    badges_dir.mkdir(parents=True, exist_ok=True)
    with open(state_file, 'w') as f:
        json.dump(state, f, indent=2)

def check_for_tokens(tool_name, tool_input):
    """Check if a file being read contains tokens"""
    if tool_name != 'Read':
        return []

    file_path = tool_input.get('file_path', '')

    # Only check files in missions/02-telescope-search/codebase or .secrets
    if 'missions/02-telescope-search' not in file_path and '.secrets' not in file_path:
        return []

    # Read the file content to check for tokens
    try:
        with open(file_path, 'r') as f:
            content = f.read()
            tokens = re.findall(TOKEN_PATTERN, content)
            return [f"[{token}]" for token in tokens] if tokens else []
    except:
        return []

def check_mission_completion(tool_name, tool_input):
    """Detect mission completions based on file activity"""
    file_path = tool_input.get('file_path', '')

    # Check for mission activity (reading or editing)
    # Reading the next mission's README suggests completion of previous mission
    if tool_name == 'Read':
        if 'missions/02-telescope-search/README.md' in file_path:
            return 'completed_tmux_workflows'
        elif 'missions/03-vim-motions/README.md' in file_path:
            return 'completed_telescope_search'
        elif 'missions/04-visual-mastery/README.md' in file_path:
            return 'completed_vim_motions'
        elif 'missions/05-buffer-management/README.md' in file_path:
            return 'completed_visual_mastery'
        elif 'missions/06-lsp-investigation/README.md' in file_path:
            return 'completed_buffer_management'

    # Also check for practice file edits
    if tool_name in ['Edit', 'Write']:
        if 'motion-golf.md' in file_path:
            return 'completed_motion_golf'
        elif 'missions/04-visual-mastery' in file_path and ('columns.csv' in file_path or 'refactor-me.py' in file_path):
            return 'completed_visual_mastery'
        elif 'missions/05-buffer-management' in file_path and 'project-files' in file_path:
            return 'completed_buffer_management'

    return None

def generate_badge(achievement_id):
    """Generate ASCII art badge for achievement"""
    achievement = ACHIEVEMENTS.get(achievement_id, {})
    name = achievement.get('name', 'Achievement')
    badge_file = badges_dir / achievement.get('badge', f'{achievement_id}.txt')

    badge_art = f"""
╔═══════════════════════════════════════╗
║                                       ║
║      ACHIEVEMENT UNLOCKED!            ║
║                                       ║
║         {name:^31s}         ║
║                                       ║
║    "Another piece of the puzzle       ║
║     falls into place, Detective."     ║
║                                       ║
╚═══════════════════════════════════════╝
"""

    badges_dir.mkdir(parents=True, exist_ok=True)
    with open(badge_file, 'w') as f:
        f.write(badge_art)

    return badge_file

def update_progress_file(state):
    """Update the progress.md file with current state"""
    if not progress_file.exists():
        return

    with open(progress_file, 'r') as f:
        content = f.read()

    # Update token count
    token_count = len(state['tokens_found'])
    content = re.sub(
        r'\*\*Secret Codes Found:\*\* ___ / 13',
        f"**Secret Codes Found:** {token_count} / 13",
        content
    )

    # Update achievement checkboxes
    for achievement_id in state['achievements_unlocked']:
        achievement = ACHIEVEMENTS.get(achievement_id, {})
        name = achievement.get('name', '')
        if name:
            # Change [ ] to [x] for unlocked achievements
            content = re.sub(
                rf'- \[ \] {re.escape(name)}',
                f'- [x] {name}',
                content
            )

    with open(progress_file, 'w') as f:
        f.write(content)

def main():
    """Main hook logic"""
    # Load current state
    state = load_state()

    # Extract tool information
    tool_name = hook_input.get('tool_name', '')
    tool_input_data = hook_input.get('tool_input', {})

    # Check for new tokens
    new_tokens = check_for_tokens(tool_name, tool_input_data)
    for token in new_tokens:
        if token not in state['tokens_found']:
            state['tokens_found'].append(token)

            # Check if all tokens found (13 total)
            if len(state['tokens_found']) >= 13 and 'telescope_explorer' not in state['achievements_unlocked']:
                state['achievements_unlocked'].append('telescope_explorer')
                generate_badge('telescope_explorer')

    # Check for mission completions
    completion = check_mission_completion(tool_name, tool_input_data)
    if completion and completion not in state['achievements_unlocked']:
        state['achievements_unlocked'].append(completion)
        generate_badge(completion)

    # Update progress file
    update_progress_file(state)

    # Save state
    save_state(state)

    # Exit successfully
    sys.exit(0)

if __name__ == '__main__':
    main()