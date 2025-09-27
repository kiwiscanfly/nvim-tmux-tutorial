function formatResponse(data) {
    return {
        ...data,
        formatted: true,
        timestamp: Date.now()
    };
}

module.exports = { formatResponse };

// 🎉 CONGRATULATIONS! You've traced through all the buffers!
//
// Dr. Vimsworth's note:
// "Buffer management isn't about memorizing commands.
//  It's about building a mental model of your codebase.
//  Each file is a node. Each function call is an edge.
//  Navigate the graph."