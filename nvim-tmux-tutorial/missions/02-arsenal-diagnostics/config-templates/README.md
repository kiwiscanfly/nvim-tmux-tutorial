# Neovim Config Templates

These are working configuration files based on a tested Neovim setup. Use them as reference or copy them directly during Mission 02.

## Structure

```
~/.config/nvim/
├── init.lua                    # Main entry point
├── lua/
│   ├── core/
│   │   ├── lazy.lua           # Plugin manager bootstrap
│   │   ├── options.lua        # Vim options
│   │   ├── keymaps.lua        # Keybindings
│   │   └── colorscheme.lua    # (optional) Theme setup
│   └── plugins/
│       ├── telescope.lua      # Fuzzy finder
│       ├── neo-tree.lua       # File explorer
│       ├── lsp.lua            # LSP configuration
│       ├── cmp.lua            # Completion engine
│       ├── treesitter.lua     # Syntax highlighting
│       ├── mini-ai.lua        # Enhanced text objects
│       └── [other plugins]
```

## Quick Setup (Copy-Paste Method)

If you want to adopt this entire config:

```bash
# Back up existing config (if any)
mv ~/.config/nvim ~/.config/nvim.backup

# Create new config directory
mkdir -p ~/.config/nvim/lua/core
mkdir -p ~/.config/nvim/lua/plugins

# Copy files from this directory to your config
cp init.lua ~/.config/nvim/
cp lazy.lua ~/.config/nvim/lua/core/
cp options.lua ~/.config/nvim/lua/core/
cp keymaps.lua ~/.config/nvim/lua/core/
cp telescope.lua ~/.config/nvim/lua/plugins/
cp neo-tree.lua ~/.config/nvim/lua/plugins/
cp lsp.lua ~/.config/nvim/lua/plugins/
cp cmp.lua ~/.config/nvim/lua/plugins/
cp treesitter.lua ~/.config/nvim/lua/plugins/
cp mini-ai.lua ~/.config/nvim/lua/plugins/

# Open Neovim (plugins will auto-install)
nvim
```

## File Purposes

### init.lua
Entry point that loads all other modules. Keeps things organized.

### lazy.lua
Bootstraps the lazy.nvim plugin manager. Handles auto-installation if not present.

### options.lua
Vim settings like line numbers, indentation, search behavior, etc.

### keymaps.lua
Custom keybindings, especially for plugins (Telescope, Neo-tree).

### telescope.lua
Fuzzy finder configuration. Enables `<Space>ff`, `<Space>fg`, etc.

### neo-tree.lua
File explorer sidebar configuration. Enables `<Space>e`.

### lsp.lua
Language Server Protocol setup. Includes Mason for easy server installation.

### cmp.lua
Completion engine configuration. Provides autocomplete as you type.

### treesitter.lua
Advanced syntax highlighting configuration.

### mini-ai.lua
Enhanced text objects (af, if, aa, ia, etc.) for semantic editing.

## Customization

These files are templates. Feel free to modify:
- Change leader key in `lazy.lua`
- Adjust keybindings in `keymaps.lua`
- Add more plugins in `plugins/` directory
- Modify theme/colors in `options.lua`

## Dependencies

These configs assume you have installed:
- Neovim 0.9+ (`nvim --version`)
- Git (`git --version`)
- A terminal with true color support
- (Optional) Node.js for some LSP servers
- (Optional) ripgrep for Telescope live_grep

## Keybinding Quick Reference

From these configs:

### Telescope
- `<Space>ff` - Find files
- `<Space>fg` - Live grep (search in files)
- `<Space>fb` - Browse buffers
- `<Space>fh` - Help tags

### Neo-tree
- `<Space>e` - Toggle file explorer
- `<Space>E` - Reveal current file in explorer

### LSP (when in code file)
- `gd` - Go to definition
- `gr` - Find references
- `K` - Hover documentation
- `<Space>ca` - Code actions
- `<Space>rn` - Rename symbol

### General
- `<Space>` is the leader key
- All keybindings can be customized in `keymaps.lua`

## Troubleshooting

**Plugins won't install**:
```vim
:Lazy sync
:Lazy clean
```

**LSP not working**:
```vim
:Mason
# Install language servers for your languages
```

**Telescope not working**:
```vim
:checkhealth telescope
# Follow suggestions
```

**General health check**:
```vim
:checkhealth
```

## Further Customization

These are starter configs. For more advanced setups, explore:
- Status line plugins (lualine.nvim)
- Git integration (gitsigns.nvim, fugitive.vim)
- Formatters (null-ls/none-ls)
- Colorscheme plugins (catppuccin, tokyonight, gruvbox)
- Additional LSP features
- Debugging (nvim-dap)
- Testing integration
- And much more...

The Neovim plugin ecosystem is vast. Start here, then expand as needed.
