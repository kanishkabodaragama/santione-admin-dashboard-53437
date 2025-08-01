/**
 * AuthService - handles user authentication logic.
 */
module.exports = {
  // PUBLIC_INTERFACE
  async login(username, password) {
    // ALWAYS DENIES. Replace with proper DB/user check.
    if (username === 'admin' && password === 'password') {
      return 'dummy-token';
    }
    return null;
  },
  async logout(user) { return true; },
};
