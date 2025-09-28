# Neovim & Tmux Tutorial Achievement Tracker

This is an MCP (Model Context Protocol) server that tracks achievements and progress for the Neovim & Tmux interactive tutorial.

## Features

- **Token Discovery Tracking**: Automatically detects when users find the 13 hidden tokens in Mission 02
- **Achievement System**: Unlocks achievements for mission completions and milestones
- **Progress Updates**: Maintains progress.md file with current status
- **Badge Generation**: Creates ASCII art badges for achievements
- **State Persistence**: Saves progress in `.progress-state.json`

## Installation

```bash
cd mcp-server
npm install
```

## Configuration

The MCP server is automatically configured via `.claude/mcp_config.json` when you start Claude Code in the tutorial directory.

## Tools Available

### `track_file_read`
Tracks when files are read to detect:
- Token discoveries in Mission 02 files
- Mission completion (reading next mission's README)
- Achievement triggers

**Parameters:**
- `file_path` (required): Path to the file that was read
- `content` (optional): File content for token detection

### `get_progress`
Returns current achievement and token progress.

### `unlock_achievement`
Manually unlock a specific achievement.

**Parameters:**
- `achievement_id` (required): Achievement ID to unlock

## Achievement Types

- 🖥️ **Tmux Tamer**: Complete Mission 01 (tmux workflows)
- 🔭 **Telescope Explorer**: Complete Mission 02 (telescope search)
- ⚡ **Motion Master**: Complete Mission 03 (vim motions)
- 👁️ **Visual Virtuoso**: Complete Mission 04 (visual mastery)
- 📚 **Buffer Boss**: Complete Mission 05 (buffer management)
- ⛳ **Motion Golf Champion**: Complete motion golf practice
- 🔍 **All Tokens Found**: Discover all 13 hidden tokens

## How It Works

1. **Automatic Detection**: The MCP server tracks file reads via the `track_file_read` tool
2. **Token Discovery**: Scans files in Mission 02 for `[SERIES-NUMBER]` token patterns
3. **Mission Progress**: Detects mission completion when users read the next mission's README
4. **Badge Generation**: Creates ASCII art badges in `achievements/badges/`
5. **Progress Updates**: Updates `achievements/progress.md` with checkboxes and counts

## Integration

The MCP server integrates with Claude Code through:
- **Automatic Loading**: Configured in `.claude/mcp_config.json`
- **Detective Theme**: Maintains the noir mystery atmosphere
- **Non-Intrusive**: Tracks progress without interrupting the tutorial experience

## State Files

- **`.progress-state.json`**: Current progress data
- **`achievements/badges/*.txt`**: Generated achievement badges
- **`achievements/progress.md`**: User-visible progress tracking

## Development

To test the MCP server locally:

```bash
# Start the server
node index.js

# Send test message (in another terminal)
echo '{"jsonrpc":"2.0","method":"tools/list","id":1}' | node index.js
```

## Detective Integration

The achievement system maintains the tutorial's detective mystery theme:
- Achievements are framed as "case breakthroughs"
- Progress updates use investigation terminology
- Badge messages reference the mystery storyline
- Non-spoiler approach preserves discovery experience