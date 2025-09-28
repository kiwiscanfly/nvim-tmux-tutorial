#!/usr/bin/env node

import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";
import { readFile, writeFile, mkdir } from "fs/promises";
import { existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Get project root (tutorial directory)
const PROJECT_ROOT = process.env.CLAUDE_PROJECT_DIR || join(__dirname, "../nvim-tmux-tutorial");
const ACHIEVEMENTS_DIR = join(PROJECT_ROOT, "achievements");
const STATE_FILE = join(ACHIEVEMENTS_DIR, ".progress-state.json");
const PROGRESS_FILE = join(ACHIEVEMENTS_DIR, "progress.md");
const BADGES_DIR = join(ACHIEVEMENTS_DIR, "badges");

// Token pattern to detect
const TOKEN_PATTERN = /\[(ALPHA|BETA|GAMMA|DELTA|EPSILON)-\d+\]/g;

// Achievement definitions
const ACHIEVEMENTS = {
  completed_tmux_workflows: {
    name: '🖥️ Tmux Tamer',
    trigger: 'mission_01_complete',
    badge: 'tmux_badge.txt'
  },
  completed_telescope_search: {
    name: '🔭 Telescope Explorer',
    trigger: 'mission_02_complete',
    badge: 'telescope_badge.txt'
  },
  completed_vim_motions: {
    name: '⚡ Motion Master',
    trigger: 'mission_03_complete',
    badge: 'motion_badge.txt'
  },
  completed_visual_mastery: {
    name: '👁️ Visual Virtuoso',
    trigger: 'mission_04_complete',
    badge: 'visual_badge.txt'
  },
  completed_buffer_management: {
    name: '📚 Buffer Boss',
    trigger: 'mission_05_complete',
    badge: 'buffer_badge.txt'
  },
  completed_motion_golf: {
    name: '⛳ Motion Golf Champion',
    trigger: 'practice_complete',
    badge: 'golf_badge.txt'
  },
  telescope_explorer: {
    name: '🔍 All Tokens Found',
    trigger: 'found_all_tokens',
    badge: 'tokens_badge.txt'
  }
};

class AchievementTracker {
  constructor() {
    this.server = new Server(
      {
        name: "nvim-tmux-tutorial-tracker",
        version: "1.0.0",
      },
      {
        capabilities: {
          tools: {},
        },
      }
    );

    this.setupToolHandlers();

    // Error handling
    this.server.onerror = (error) => console.error("[MCP Error]", error);
    process.on("SIGINT", async () => {
      await this.server.close();
      process.exit(0);
    });
  }

  setupToolHandlers() {
    this.server.setRequestHandler(ListToolsRequestSchema, async () => ({
      tools: [
        {
          name: "track_file_read",
          description: "Track when files are read to detect token discoveries and mission progress",
          inputSchema: {
            type: "object",
            properties: {
              file_path: {
                type: "string",
                description: "Path to the file that was read"
              },
              content: {
                type: "string",
                description: "Content of the file (optional, for token detection)"
              }
            },
            required: ["file_path"]
          }
        },
        {
          name: "get_progress",
          description: "Get current achievement and token progress",
          inputSchema: {
            type: "object",
            properties: {},
            additionalProperties: false
          }
        },
        {
          name: "unlock_achievement",
          description: "Manually unlock a specific achievement",
          inputSchema: {
            type: "object",
            properties: {
              achievement_id: {
                type: "string",
                description: "Achievement ID to unlock"
              }
            },
            required: ["achievement_id"]
          }
        }
      ]
    }));

    this.server.setRequestHandler(CallToolRequestSchema, async (request) => {
      switch (request.params.name) {
        case "track_file_read":
          return this.trackFileRead(request.params.arguments);
        case "get_progress":
          return this.getProgress();
        case "unlock_achievement":
          return this.unlockAchievement(request.params.arguments);
        default:
          throw new Error(`Unknown tool: ${request.params.name}`);
      }
    });
  }

  async loadState() {
    try {
      if (existsSync(STATE_FILE)) {
        const data = await readFile(STATE_FILE, 'utf-8');
        return JSON.parse(data);
      }
    } catch (error) {
      console.error("Error loading state:", error);
    }

    return {
      tokens_found: [],
      achievements_unlocked: [],
      missions_completed: [],
      last_updated: null
    };
  }

  async saveState(state) {
    try {
      state.last_updated = new Date().toISOString();
      await mkdir(ACHIEVEMENTS_DIR, { recursive: true });
      await writeFile(STATE_FILE, JSON.stringify(state, null, 2));
    } catch (error) {
      console.error("Error saving state:", error);
    }
  }

  async trackFileRead(args) {
    const { file_path, content } = args;
    const state = await this.loadState();
    let changes = [];

    // Check for token discoveries
    if (file_path.includes('missions/02-telescope-search') || file_path.includes('.secrets')) {
      const newTokens = await this.checkForTokens(file_path, content);
      for (const token of newTokens) {
        if (!state.tokens_found.includes(token)) {
          state.tokens_found.push(token);
          changes.push(`🔍 Token discovered: ${token}`);
        }
      }

      // Check if all tokens found (13 total)
      if (state.tokens_found.length >= 13 && !state.achievements_unlocked.includes('telescope_explorer')) {
        state.achievements_unlocked.push('telescope_explorer');
        await this.generateBadge('telescope_explorer');
        changes.push(`🎉 Achievement unlocked: ${ACHIEVEMENTS.telescope_explorer.name}`);
      }
    }

    // Check for mission completions
    const completion = this.checkMissionCompletion(file_path);
    if (completion && !state.achievements_unlocked.includes(completion)) {
      state.achievements_unlocked.push(completion);
      await this.generateBadge(completion);
      changes.push(`🎉 Achievement unlocked: ${ACHIEVEMENTS[completion].name}`);
    }

    // Update progress file if changes occurred
    if (changes.length > 0) {
      await this.updateProgressFile(state);
      await this.saveState(state);
    }

    return {
      content: [
        {
          type: "text",
          text: changes.length > 0
            ? `Progress updated:\n${changes.join('\n')}`
            : "No new progress detected"
        }
      ]
    };
  }

  async checkForTokens(filePath, content) {
    if (!content) {
      try {
        content = await readFile(filePath, 'utf-8');
      } catch {
        return [];
      }
    }

    const matches = content.match(TOKEN_PATTERN);
    return matches || [];
  }

  checkMissionCompletion(filePath) {
    // Reading the next mission's README suggests completion of previous mission
    if (filePath.includes('missions/02-telescope-search/README.md')) {
      return 'completed_tmux_workflows';
    } else if (filePath.includes('missions/03-vim-motions/README.md')) {
      return 'completed_telescope_search';
    } else if (filePath.includes('missions/04-visual-mastery/README.md')) {
      return 'completed_vim_motions';
    } else if (filePath.includes('missions/05-buffer-management/README.md')) {
      return 'completed_visual_mastery';
    } else if (filePath.includes('missions/06-lsp-investigation/README.md')) {
      return 'completed_buffer_management';
    }

    // Also check for practice file edits
    if (filePath.includes('motion-golf.md')) {
      return 'completed_motion_golf';
    }

    return null;
  }

  async generateBadge(achievementId) {
    const achievement = ACHIEVEMENTS[achievementId];
    if (!achievement) return;

    const name = achievement.name;
    const badgeFile = join(BADGES_DIR, achievement.badge);

    const badgeArt = `
╔═══════════════════════════════════════╗
║                                       ║
║      ACHIEVEMENT UNLOCKED!            ║
║                                       ║
║         ${name.padStart(15).padEnd(31)}         ║
║                                       ║
║    "Another piece of the puzzle       ║
║     falls into place, Detective."     ║
║                                       ║
╚═══════════════════════════════════════╝`;

    try {
      await mkdir(BADGES_DIR, { recursive: true });
      await writeFile(badgeFile, badgeArt);
    } catch (error) {
      console.error("Error generating badge:", error);
    }
  }

  async updateProgressFile(state) {
    try {
      if (!existsSync(PROGRESS_FILE)) return;

      let content = await readFile(PROGRESS_FILE, 'utf-8');

      // Update token count
      const tokenCount = state.tokens_found.length;
      content = content.replace(
        /\*\*Secret Codes Found:\*\* ___ \/ 13/,
        `**Secret Codes Found:** ${tokenCount} / 13`
      );

      // Update achievement checkboxes
      for (const achievementId of state.achievements_unlocked) {
        const achievement = ACHIEVEMENTS[achievementId];
        if (achievement?.name) {
          const escapedName = achievement.name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
          content = content.replace(
            new RegExp(`- \\[ \\] ${escapedName}`, 'g'),
            `- [x] ${achievement.name}`
          );
        }
      }

      await writeFile(PROGRESS_FILE, content);
    } catch (error) {
      console.error("Error updating progress file:", error);
    }
  }

  async getProgress() {
    const state = await this.loadState();
    return {
      content: [
        {
          type: "text",
          text: JSON.stringify({
            tokens_found: state.tokens_found.length,
            total_tokens: 13,
            achievements_unlocked: state.achievements_unlocked.length,
            total_achievements: Object.keys(ACHIEVEMENTS).length,
            details: state
          }, null, 2)
        }
      ]
    };
  }

  async unlockAchievement(args) {
    const { achievement_id } = args;

    if (!ACHIEVEMENTS[achievement_id]) {
      throw new Error(`Unknown achievement: ${achievement_id}`);
    }

    const state = await this.loadState();

    if (state.achievements_unlocked.includes(achievement_id)) {
      return {
        content: [
          {
            type: "text",
            text: `Achievement ${achievement_id} already unlocked`
          }
        ]
      };
    }

    state.achievements_unlocked.push(achievement_id);
    await this.generateBadge(achievement_id);
    await this.updateProgressFile(state);
    await this.saveState(state);

    return {
      content: [
        {
          type: "text",
          text: `🎉 Achievement unlocked: ${ACHIEVEMENTS[achievement_id].name}`
        }
      ]
    };
  }

  async run() {
    const transport = new StdioServerTransport();
    await this.server.connect(transport);
    console.error("Nvim-Tmux Tutorial Achievement Tracker MCP server running on stdio");
  }
}

const server = new AchievementTracker();
server.run().catch(console.error);