/**
 * Controller for property management (CRUD).
 */
const PropertyService = require('../services/property');

// PUBLIC_INTERFACE
exports.list = async (req, res) => {
  /** List all properties */
  const data = await PropertyService.list();
  res.json(data);
};
// PUBLIC_INTERFACE
exports.get = async (req, res) => {
  const data = await PropertyService.get(req.params.id);
  if (!data) return res.status(404).json({ error: 'Not found' });
  res.json(data);
};
// PUBLIC_INTERFACE
exports.create = async (req, res) => {
  const data = await PropertyService.create(req.body);
  res.status(201).json(data);
};
// PUBLIC_INTERFACE
exports.update = async (req, res) => {
  const data = await PropertyService.update(req.params.id, req.body);
  if (!data) return res.status(404).json({ error: 'Not found' });
  res.json(data);
};
// PUBLIC_INTERFACE
exports.remove = async (req, res) => {
  const ok = await PropertyService.remove(req.params.id);
  if (!ok) return res.status(404).json({ error: 'Not found' });
  res.status(204).end();
};
