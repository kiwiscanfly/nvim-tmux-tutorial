// AUTHENTICATION SERVICE TESTS
// [TOKEN-DELTA-2] "Environment variables tell their own story"

import { describe, it, expect } from 'vitest';
import { AuthService } from './auth-service';

describe('AuthService', () => {
  it('should validate correct credentials', async () => {
    const auth = new AuthService();
    const result = await auth.login('test@example.com', 'password123');
    expect(result.success).toBe(true);
  });

  it('should reject invalid credentials', async () => {
    const auth = new AuthService();
    const result = await auth.login('wrong@example.com', 'wrong');
    expect(result.success).toBe(false);
  });

  it('should handle token expiration', async () => {
    const auth = new AuthService();
    const token = await auth.generateToken({ userId: 1 });
    expect(auth.isTokenValid(token)).toBe(true);
  });
});