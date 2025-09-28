-- ==============================================
-- PROJECT PROMETHEUS - DATABASE SCHEMA
-- ==============================================
-- Version: 3.2.1
-- Last modified: 2024-03-15
-- Author: Dr. Elena Vimsworth
-- ==============================================

-- Users and Authentication
-- ==============================================

CREATE TABLE users (
    user_id BIGSERIAL PRIMARY KEY,
    username VARCHAR(255) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(512) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    last_login TIMESTAMP,
    is_active BOOLEAN DEFAULT true,
    -- [ALPHA-2] "Old legacy API holds secrets"
    metadata JSONB
);

CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_username ON users(username);
CREATE INDEX idx_users_active ON users(is_active);

-- Sessions and Tokens
-- ==============================================

CREATE TABLE sessions (
    session_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id BIGINT REFERENCES users(user_id) ON DELETE CASCADE,
    token_hash VARCHAR(512) NOT NULL,
    expires_at TIMESTAMP NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    ip_address INET,
    user_agent TEXT
);

CREATE INDEX idx_sessions_user ON sessions(user_id);
CREATE INDEX idx_sessions_expires ON sessions(expires_at);

-- Application Data
-- ==============================================

CREATE TABLE projects (
    project_id BIGSERIAL PRIMARY KEY,
    project_name VARCHAR(255) NOT NULL,
    owner_id BIGINT REFERENCES users(user_id),
    status VARCHAR(50) DEFAULT 'active',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE tasks (
    task_id BIGSERIAL PRIMARY KEY,
    project_id BIGINT REFERENCES projects(project_id) ON DELETE CASCADE,
    title VARCHAR(500) NOT NULL,
    description TEXT,
    priority VARCHAR(20) DEFAULT 'medium',
    status VARCHAR(50) DEFAULT 'todo',
    assigned_to BIGINT REFERENCES users(user_id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    due_date TIMESTAMP
);

-- Audit and Logging
-- ==============================================

CREATE TABLE audit_log (
    log_id BIGSERIAL PRIMARY KEY,
    user_id BIGINT REFERENCES users(user_id),
    action VARCHAR(100) NOT NULL,
    entity_type VARCHAR(100),
    entity_id BIGINT,
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    details JSONB,
    ip_address INET
);

CREATE INDEX idx_audit_user ON audit_log(user_id);
CREATE INDEX idx_audit_timestamp ON audit_log(timestamp);
CREATE INDEX idx_audit_action ON audit_log(action);

-- Secret Achievement Table
-- (Why is this here? Dr. Vimsworth's notes say nothing about achievements...)
-- ==============================================

CREATE TABLE secret_achievement (
    achievement_id SERIAL PRIMARY KEY,
    code VARCHAR(50) UNIQUE NOT NULL,
    description TEXT,
    unlocked_by BIGINT REFERENCES users(user_id),
    unlocked_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    -- This table seems suspicious. What was she tracking?
    hidden_data TEXT
);

-- NOTE: There's a backup of the old API in legacy-api.js
-- That code hasn't been touched in years but still runs in production.
-- Someone should probably audit it... eventually.

-- Performance Optimization Indices
-- ==============================================

CREATE INDEX idx_tasks_project ON tasks(project_id);
CREATE INDEX idx_tasks_status ON tasks(status);
CREATE INDEX idx_tasks_assigned ON tasks(assigned_to);
CREATE INDEX idx_projects_owner ON projects(owner_id);
CREATE INDEX idx_projects_status ON projects(status);

-- Triggers for Automatic Timestamp Updates
-- ==============================================

CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_projects_updated_at
    BEFORE UPDATE ON projects
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- Views for Common Queries
-- ==============================================

CREATE VIEW active_tasks AS
SELECT
    t.task_id,
    t.title,
    t.priority,
    t.status,
    t.due_date,
    p.project_name,
    u.username as assigned_to_username
FROM tasks t
JOIN projects p ON t.project_id = p.project_id
LEFT JOIN users u ON t.assigned_to = u.user_id
WHERE t.status != 'completed' AND t.status != 'cancelled';

CREATE VIEW user_activity_summary AS
SELECT
    u.user_id,
    u.username,
    COUNT(DISTINCT p.project_id) as project_count,
    COUNT(DISTINCT t.task_id) as task_count,
    u.last_login
FROM users u
LEFT JOIN projects p ON u.user_id = p.owner_id
LEFT JOIN tasks t ON u.user_id = t.assigned_to
GROUP BY u.user_id, u.username, u.last_login;

-- ==============================================
-- END OF SCHEMA
-- ==============================================

-- Dr. Vimsworth's Final Note:
-- "The database is the source of truth, but truth can be hidden in plain sight.
--  Look beyond the obvious. The patterns are everywhere."
-- - E.V., 2024-03-15