#!/usr/bin/env python3
"""
Mission Context Injection Hook
Automatically injects relevant context based on current mission
Reminds AI to stay in detective character
"""

import sys
import json
import os
from pathlib import Path

# Read hook input from stdin
hook_input = json.loads(sys.stdin.read())

# Get project directory
project_dir = Path(os.environ.get('CLAUDE_PROJECT_DIR', os.getcwd()))

def detect_current_mission():
    """Detect which mission user is working on based on recent file activity"""
    # Get the most recent file from session context
    session = hook_input.get('session', {})
    messages = session.get('messages', [])

    # Look through recent messages for mission file paths
    mission_keywords = {
        '01-tmux-workflows': 'Mission 01: Tmux Workflows',
        '02-telescope-search': 'Mission 02: Telescope Search',
        '03-vim-motions': 'Mission 03: Vim Motions',
        '04-visual-mastery': 'Mission 04: Visual Mastery',
        '05-buffer-management': 'Mission 05: Buffer Management',
        '06-lsp-investigation': 'Mission 06: LSP Investigation'
    }

    # Check recent activity for mission indicators
    for message in reversed(messages[-10:]):  # Last 10 messages
        content = str(message.get('content', ''))
        for mission_dir, mission_name in mission_keywords.items():
            if mission_dir in content:
                return mission_dir, mission_name

    return None, None

def get_mission_context(mission_dir):
    """Get context for specific mission"""
    contexts = {
        '01-tmux-workflows': {
            'theme': 'workspace persistence, command center, monitoring',
            'character_note': 'Frame tmux as Dr. Vimsworth\'s persistent command center',
            'story_focus': 'Her workspace was still running after disappearance'
        },
        '02-telescope-search': {
            'theme': 'finding hidden evidence, token hunt, forensic search',
            'character_note': 'Search is detective work - finding clues in vast codebases',
            'story_focus': 'She left tokens scattered across files - what they spell is unknown until found'
        },
        '03-vim-motions': {
            'theme': 'speed, efficiency, surveillance evasion, muscle memory',
            'character_note': 'Motions as investigative techniques, arrow keys leave traces',
            'story_focus': 'She trained under surveillance, optimized for speed'
        },
        '04-visual-mastery': {
            'theme': 'surgical editing, evidence extraction, dual-use code',
            'character_note': 'Visual mode as evidence examination and extraction',
            'story_focus': 'She extracted code while appearing to refactor normally'
        },
        '05-buffer-management': {
            'theme': 'multi-file navigation, case files, interconnected evidence',
            'character_note': 'Buffers are case files kept in memory, ready to switch',
            'story_focus': 'She tracked dozens of files simultaneously'
        },
        '06-lsp-investigation': {
            'theme': 'configuration forensics, dotfile modifications, post-disappearance changes',
            'character_note': 'LSP config as evidence, someone modified after she vanished',
            'story_focus': 'Training materials created in her final hours'
        }
    }

    return contexts.get(mission_dir, {})

def main():
    """Main hook logic"""
    # Detect current mission
    mission_dir, mission_name = detect_current_mission()

    # Prepare output
    output = {
        "decision": "approve"
    }

    # If in a mission, add context
    if mission_dir:
        context = get_mission_context(mission_dir)

        # Build context message
        context_message = f"""
**CURRENT MISSION CONTEXT**: {mission_name}

**Theme**: {context.get('theme', 'N/A')}
**Story Focus**: {context.get('story_focus', 'N/A')}

**CHARACTER REMINDER**: You are a detective investigating Dr. Vimsworth's disappearance alongside the user. {context.get('character_note', '')} Stay in character - use detective terminology, maintain mystery, and be the user's investigating partner.

**PROGRESSIVE DISCLOSURE**: Only teach what's needed for current task. Don't overwhelm with all commands at once. Let users discover answers through their investigation.
"""

        output["context"] = context_message

    # Output JSON response
    print(json.dumps(output))
    sys.exit(0)

if __name__ == '__main__':
    main()