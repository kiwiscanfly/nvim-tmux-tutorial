-- MINIMAL NEOVIM CONFIG FOR THIS TUTORIAL
-- Copy this to ~/.config/nvim/init.lua if you need a starting point

-- Set leader key
vim.g.mapleader = " "

-- Basic settings
vim.opt.number = true           -- Show line numbers
vim.opt.relativenumber = true   -- Relative line numbers
vim.opt.mouse = "a"             -- Enable mouse
vim.opt.ignorecase = true       -- Case insensitive search
vim.opt.smartcase = true        -- Unless capital in search
vim.opt.hlsearch = false        -- Don't highlight searches
vim.opt.wrap = false            -- Don't wrap lines
vim.opt.tabstop = 2             -- Tabs are 2 spaces
vim.opt.shiftwidth = 2          -- Indent is 2 spaces
vim.opt.expandtab = true        -- Use spaces not tabs

-- Key mappings for Neo-tree (you'll need to install plugins separately)
-- vim.keymap.set("n", "<leader>e", ":Neotree toggle<CR>")

-- Telescope mappings (install telescope.nvim separately)
-- vim.keymap.set("n", "<leader>ff", ":Telescope find_files<CR>")
-- vim.keymap.set("n", "<leader>fg", ":Telescope live_grep<CR>")
-- vim.keymap.set("n", "<leader>fb", ":Telescope buffers<CR>")

print("Tutorial config loaded! Happy vimming!")