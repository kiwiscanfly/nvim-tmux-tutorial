-- LSP Completion Exercise
-- Practice using intelligent completions powered by LSP + Copilot

-- EXERCISE 1: Basic Completions
-- Type 'vim.' and wait - LSP should show all vim functions
-- Try: vim.keymap, vim.lsp, vim.diagnostic, vim.api

local function exercise_1()
  -- Type here: vim.

end

-- EXERCISE 2: Function Signature Help
-- Type 'vim.keymap.set(' and wait
-- LSP should show you the function parameters
-- Try hovering with K to see full documentation

local function exercise_2()
  -- Type here: vim.keymap.set(

end

-- EXERCISE 3: Smart Table Completions
-- Type 'config.' after defining the table
-- LSP knows what fields are available!

local function exercise_3()
  local config = {
    enabled = true,
    timeout = 5000,
    servers = { "lua_ls", "pyright" }
  }

  -- Type here: config.

end

-- EXERCISE 4: Completion from Other Files
-- If working_config.lua is open, LSP can complete from it
-- Try typing: require("work

local function exercise_4()
  -- Type here: require("

end

-- EXERCISE 5: Go to Definition Practice
-- Put cursor on 'vim.keymap' below and press 'gd'
-- LSP will jump to the definition (in Neovim source)

local function exercise_5()
  vim.keymap.set("n", "<leader>t", function()
    print("Test keybinding")
  end)
end

-- EXERCISE 6: Rename Refactoring
-- Put cursor on 'old_name' below and press '<leader>rn'
-- Type 'new_name' - LSP renames ALL occurrences!

local function exercise_6()
  local old_name = "test"
  print(old_name)
  return old_name
end

-- EXERCISE 7: Find References
-- Put cursor on 'test_function' below and press 'gr'
-- LSP shows all places where it's called

local function test_function()
  return "test"
end

local result1 = test_function()
local result2 = test_function()
local result3 = test_function()

-- EXERCISE 8: Code Actions
-- Put cursor on the unused variable below
-- Press '<leader>ca' to see available fixes

local function exercise_8()
  local unused_variable = 42
  -- LSP will warn this is unused
  -- Try: <leader>ca to see code actions
end

-- COMPLETION SOURCES REMINDER:
-- Priority order (from cmp.lua):
-- 1. Copilot (AI predictions) - Try in insert mode
-- 2. nvim_lsp (language intelligence) - You're using now
-- 3. luasnip (code snippets)
-- 4. path (file paths)

-- Try typing in insert mode and see multiple sources appear!