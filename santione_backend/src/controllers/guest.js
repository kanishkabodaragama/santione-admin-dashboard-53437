/**
 * Controller for guest management (CRUD).
 */
const GuestService = require('../services/guest');

// PUBLIC_INTERFACE
exports.list = async (req, res) => {
  const data = await GuestService.list();
  res.json(data);
};
// PUBLIC_INTERFACE
exports.get = async (req, res) => {
  const data = await GuestService.get(req.params.id);
  if (!data) return res.status(404).json({ error: 'Not found' });
  res.json(data);
};
// PUBLIC_INTERFACE
exports.create = async (req, res) => {
  const data = await GuestService.create(req.body);
  res.status(201).json(data);
};
// PUBLIC_INTERFACE
exports.update = async (req, res) => {
  const data = await GuestService.update(req.params.id, req.body);
  if (!data) return res.status(404).json({ error: 'Not found' });
  res.json(data);
};
// PUBLIC_INTERFACE
exports.remove = async (req, res) => {
  const ok = await GuestService.remove(req.params.id);
  if (!ok) return res.status(404).json({ error: 'Not found' });
  res.status(204).end();
};
