/**
 * ERROR HANDLER MODULE
 *
 * Centralized error handling for Project Prometheus
 * Catches, logs, and formats errors consistently across the application
 *
 * [TOKEN-BETA-2] "The rogue process runs in Go, find the server"
 *
 * @module error-handler
 * @author Dr. Elena Vimsworth
 * @version 2.0.1
 */

const logger = require('./logger');
const { v4: uuidv4 } = require('uuid');

class ApplicationError extends Error {
    constructor(message, statusCode = 500, errorCode = 'INTERNAL_ERROR') {
        super(message);
        this.name = this.constructor.name;
        this.statusCode = statusCode;
        this.errorCode = errorCode;
        this.timestamp = new Date().toISOString();
        this.errorId = uuidv4();
        Error.captureStackTrace(this, this.constructor);
    }

    toJSON() {
        return {
            error: {
                id: this.errorId,
                code: this.errorCode,
                message: this.message,
                timestamp: this.timestamp,
                ...(process.env.NODE_ENV === 'development' && {
                    stack: this.stack
                })
            }
        };
    }
}

class ValidationError extends ApplicationError {
    constructor(message, field = null) {
        super(message, 400, 'VALIDATION_ERROR');
        this.field = field;
    }

    toJSON() {
        return {
            error: {
                id: this.errorId,
                code: this.errorCode,
                message: this.message,
                field: this.field,
                timestamp: this.timestamp
            }
        };
    }
}

class AuthenticationError extends ApplicationError {
    constructor(message = 'Authentication failed') {
        super(message, 401, 'AUTH_ERROR');
    }
}

class AuthorizationError extends ApplicationError {
    constructor(message = 'Insufficient permissions') {
        super(message, 403, 'FORBIDDEN');
    }
}

class NotFoundError extends ApplicationError {
    constructor(resource = 'Resource') {
        super(`${resource} not found`, 404, 'NOT_FOUND');
        this.resource = resource;
    }
}

class RateLimitError extends ApplicationError {
    constructor(retryAfter = 60) {
        super('Rate limit exceeded', 429, 'RATE_LIMIT');
        this.retryAfter = retryAfter;
    }

    toJSON() {
        return {
            error: {
                id: this.errorId,
                code: this.errorCode,
                message: this.message,
                retryAfter: this.retryAfter,
                timestamp: this.timestamp
            }
        };
    }
}

/**
 * Global error handler middleware for Express
 */
function errorHandler(err, req, res, next) {
    if (err instanceof ApplicationError) {
        logger.warn({
            errorId: err.errorId,
            errorCode: err.errorCode,
            message: err.message,
            path: req.path,
            method: req.method,
            ip: req.ip,
            userId: req.user?.id
        });

        return res.status(err.statusCode).json(err.toJSON());
    }

    if (err.name === 'ValidationError') {
        const validationError = new ValidationError(err.message);
        return res.status(400).json(validationError.toJSON());
    }

    if (err.name === 'UnauthorizedError') {
        const authError = new AuthenticationError();
        return res.status(401).json(authError.toJSON());
    }

    logger.error({
        error: err.message,
        stack: err.stack,
        path: req.path,
        method: req.method,
        ip: req.ip,
        userId: req.user?.id
    });

    const internalError = new ApplicationError(
        process.env.NODE_ENV === 'development'
            ? err.message
            : 'An unexpected error occurred'
    );

    res.status(500).json(internalError.toJSON());
}

/**
 * Async error wrapper for route handlers
 * Catches promise rejections and passes to error handler
 */
function asyncHandler(fn) {
    return (req, res, next) => {
        Promise.resolve(fn(req, res, next)).catch(next);
    };
}

/**
 * Handle unhandled promise rejections
 */
process.on('unhandledRejection', (reason, promise) => {
    logger.error({
        type: 'UnhandledRejection',
        reason: reason,
        promise: promise
    });

    // NOTE: In production, you might want to gracefully shutdown here
    // For now, we just log and continue
});

/**
 * Handle uncaught exceptions
 */
process.on('uncaughtException', (error) => {
    logger.fatal({
        type: 'UncaughtException',
        error: error.message,
        stack: error.stack
    });

    // TODO: Implement graceful shutdown
    // This is critical. An uncaught exception means the app is in
    // an unknown state. We should:
    // 1. Stop accepting new requests
    // 2. Finish processing current requests
    // 3. Close database connections
    // 4. Exit process

    // For now, we just exit immediately
    process.exit(1);
});

/**
 * Graceful shutdown handler
 * Call this when receiving SIGTERM or SIGINT
 */
async function gracefulShutdown(signal) {
    logger.info(`Received ${signal}, starting graceful shutdown...`);

    // Give existing requests 30 seconds to finish
    setTimeout(() => {
        logger.error('Could not close connections in time, forcefully shutting down');
        process.exit(1);
    }, 30000);

    // Close server, database connections, etc.
    // This should be implemented based on your app's architecture

    logger.info('Graceful shutdown completed');
    process.exit(0);
}

process.on('SIGTERM', () => gracefulShutdown('SIGTERM'));
process.on('SIGINT', () => gracefulShutdown('SIGINT'));

module.exports = {
    ApplicationError,
    ValidationError,
    AuthenticationError,
    AuthorizationError,
    NotFoundError,
    RateLimitError,
    errorHandler,
    asyncHandler,
    gracefulShutdown
};

/*
 * NOTES:
 *
 * The error handling is pretty comprehensive, but Dr. Vimsworth
 * left a note about a specific edge case in the authentication
 * error path that causes a memory leak. Something about event
 * listeners not being properly cleaned up?
 *
 * Check auth-service.js for the authentication implementation.
 * The bug is probably there, not here.
 */