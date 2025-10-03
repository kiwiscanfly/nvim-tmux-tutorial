-- CLASSIFIED: Dr. Vimsworth's Configuration Fragment
-- Found in: ~/.config/nvim/lua/experimental/
-- Recovery Date: 2022-03-20 (5 days after disappearance)
-- Status: INCOMPLETE - Contains intentional errors
--
-- FORENSIC ANALYSIS:
-- This file was created 3 hours before her final commit. Half-finished.
-- The errors aren't mistakes - they're educational. She was building
-- a training exercise for LSP diagnostics.
--
-- "Future students will need to understand language servers. I'm leaving
-- broken configs for them to fix. Error messages are the best teachers."
-- - E.V., comment in adjacent file

local M = {}

-- Plugin manager setup
function M.setup_plugins()
  -- Missing return statement will cause LSP warning
  local plugins = {
    "neovim/nvim-lspconfig",
    "hrsh7th/nvim-cmp",
    "williamboman/mason.nvim"
  }
end

-- Keybinding configuration
function M.setup_keymaps()
  -- Undefined variable 'vim' (if LSP not configured properly)
  vim.keymap.set("n", "gd", vim.lsp.buf.definition)
  vim.keymap.set("n", "K", vim.lsp.buf.hover)

  -- Typo in function name - LSP should catch this
  vim.keymap.sett("n", "<leader>ca", vim.lsp.buf.code_action)

  -- Missing closing parenthesis
  vim.keymap.set("n", "<leader>rn", vim.lsp.buf.rename
end

-- LSP server configuration
function M.setup_servers()
  local servers = {
    "lua_ls",
    "pyright",
    "ts_server"
  }

  -- Variable 'lspconfig' is undefined
  for _, server in ipairs(servers) do
    lspconfig[server].setup({})
  end
end

-- Completion sources
function M.get_completion_sources()
  return {
    { name = "nvim_lsp" },
    { name = "buffer" },
    { name = "path" },
    -- Missing comma - syntax error
    { name = "luasnip" }
    { name = "copilot" }
  }
end

-- Export module
return M