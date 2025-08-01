/**
 * Controller for staff management (CRUD).
 */
const StaffService = require('../services/staff');

// PUBLIC_INTERFACE
exports.list = async (req, res) => {
  const data = await StaffService.list();
  res.json(data);
};
exports.get = async (req, res) => {
  const data = await StaffService.get(req.params.id);
  if (!data) return res.status(404).json({ error: 'Not found' });
  res.json(data);
};
exports.create = async (req, res) => {
  const data = await StaffService.create(req.body);
  res.status(201).json(data);
};
exports.update = async (req, res) => {
  const data = await StaffService.update(req.params.id, req.body);
  if (!data) return res.status(404).json({ error: 'Not found' });
  res.json(data);
};
exports.remove = async (req, res) => {
  const ok = await StaffService.remove(req.params.id);
  if (!ok) return res.status(404).json({ error: 'Not found' });
  res.status(204).end();
};
