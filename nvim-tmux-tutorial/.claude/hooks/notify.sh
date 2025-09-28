#!/bin/bash
#
# Detective-Themed Notification Hook
# Displays notifications for achievements and progress
#

# Read hook input from stdin
INPUT=$(cat)

# Get project directory
PROJECT_DIR="${CLAUDE_PROJECT_DIR:-$(pwd)}"
STATE_FILE="$PROJECT_DIR/achievements/.progress-state.json"
NOTIFY_CACHE="$PROJECT_DIR/achievements/.last-notification.txt"

# Check if state file exists
if [[ ! -f "$STATE_FILE" ]]; then
    exit 0
fi

# Parse state file to check for new achievements
TOKENS_FOUND=$(jq -r '.tokens_found | length' "$STATE_FILE" 2>/dev/null || echo "0")
ACHIEVEMENTS=$(jq -r '.achievements_unlocked | length' "$STATE_FILE" 2>/dev/null || echo "0")
LAST_ACHIEVEMENT=$(jq -r '.achievements_unlocked[-1] // ""' "$STATE_FILE" 2>/dev/null)

# Read last notification to avoid duplicates
LAST_NOTIFIED=""
if [[ -f "$NOTIFY_CACHE" ]]; then
    LAST_NOTIFIED=$(cat "$NOTIFY_CACHE")
fi

# Function to send notification (macOS)
send_notification() {
    local title="$1"
    local message="$2"
    local sound="${3:-Glass}"

    # macOS notification
    if command -v osascript &> /dev/null; then
        osascript -e "display notification \"$message\" with title \"$title\" sound name \"$sound\""
    fi

    # Also use 'say' for audio feedback (macOS)
    if command -v say &> /dev/null; then
        say -r 180 "$message" &
    fi

    # Linux notification (if available)
    if command -v notify-send &> /dev/null; then
        notify-send "$title" "$message"
    fi
}

# Check for token discoveries
if [[ "$TOKENS_FOUND" -gt 0 ]] && [[ "$LAST_NOTIFIED" != "tokens_$TOKENS_FOUND" ]]; then
    if [[ "$TOKENS_FOUND" -eq 13 ]]; then
        send_notification "🔭 All Tokens Found!" "Outstanding detective work. The message reads: MOTIONS-ARE-KEY" "Hero"
        echo "tokens_$TOKENS_FOUND" > "$NOTIFY_CACHE"
    elif [[ "$TOKENS_FOUND" -eq 1 ]]; then
        send_notification "🔍 First Token Discovered" "The investigation begins, Detective." "Glass"
        echo "tokens_$TOKENS_FOUND" > "$NOTIFY_CACHE"
    elif [[ $(($TOKENS_FOUND % 3)) -eq 0 ]]; then
        # Notify every 3 tokens
        send_notification "🔭 Progress Update" "$TOKENS_FOUND tokens found. The trail grows warmer..." "Glass"
        echo "tokens_$TOKENS_FOUND" > "$NOTIFY_CACHE"
    fi
fi

# Check for new achievements
if [[ -n "$LAST_ACHIEVEMENT" ]] && [[ "$LAST_NOTIFIED" != "achievement_$LAST_ACHIEVEMENT" ]]; then
    case "$LAST_ACHIEVEMENT" in
        "completed_tmux_workflows")
            send_notification "🖥️ Mission 01 Complete!" "Command center established. The investigation begins." "Hero"
            ;;
        "completed_telescope_search")
            send_notification "🔭 Mission 02 Complete!" "Evidence gathered. The search techniques are mastered." "Hero"
            ;;
        "completed_vim_motions")
            send_notification "⚡ Mission 03 Complete!" "Motion mastery achieved. Dr. Vimsworth would be proud." "Hero"
            ;;
        "completed_visual_mastery")
            send_notification "👁️ Mission 04 Complete!" "Visual editing perfected. Evidence extraction complete." "Hero"
            ;;
        "completed_buffer_management")
            send_notification "📚 Mission 05 Complete!" "Multi-file navigation mastered. All leads tracked." "Hero"
            ;;
        "completed_motion_golf")
            send_notification "⛳ Motion Golf Complete!" "Your efficiency rivals Dr. Vimsworth herself" "Hero"
            ;;
        "telescope_explorer")
            send_notification "🔍 All 13 Tokens Found!" "The message is revealed, Detective" "Hero"
            ;;
    esac

    echo "achievement_$LAST_ACHIEVEMENT" > "$NOTIFY_CACHE"
fi

# Check for badge generation
BADGE_DIR="$PROJECT_DIR/achievements/badges"
if [[ -d "$BADGE_DIR" ]]; then
    LATEST_BADGE=$(find "$BADGE_DIR" -type f -name "*.txt" -mmin -1 2>/dev/null | head -1)
    if [[ -n "$LATEST_BADGE" ]] && [[ "$LAST_NOTIFIED" != "badge_$(basename "$LATEST_BADGE")" ]]; then
        # Display badge in terminal (if we can detect it's being run in a terminal)
        if [[ -t 1 ]]; then
            cat "$LATEST_BADGE"
        fi
        echo "badge_$(basename "$LATEST_BADGE")" > "$NOTIFY_CACHE"
    fi
fi

exit 0