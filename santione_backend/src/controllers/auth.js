/**
 * Controller for authentication (login/logout).
 */
const AuthService = require('../services/auth');

// PUBLIC_INTERFACE
exports.login = async (req, res) => {
  const { username, password } = req.body || {};
  const token = await AuthService.login(username, password);
  if (!token) return res.status(401).json({ error: 'Invalid credentials' });
  res.json({ token });
};
// PUBLIC_INTERFACE
exports.logout = async (req, res) => {
  await AuthService.logout(req.user); // user can be attached by auth middleware
  res.status(204).end();
};
