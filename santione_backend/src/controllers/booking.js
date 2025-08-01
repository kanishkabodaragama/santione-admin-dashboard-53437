/**
 * Controller for booking management (CRUD).
 */
const BookingService = require('../services/booking');

// PUBLIC_INTERFACE
exports.list = async (req, res) => {
  const data = await BookingService.list();
  res.json(data);
};
// PUBLIC_INTERFACE
exports.get = async (req, res) => {
  const data = await BookingService.get(req.params.id);
  if (!data) return res.status(404).json({ error: 'Not found' });
  res.json(data);
};
// PUBLIC_INTERFACE
exports.create = async (req, res) => {
  const data = await BookingService.create(req.body);
  res.status(201).json(data);
};
// PUBLIC_INTERFACE
exports.update = async (req, res) => {
  const data = await BookingService.update(req.params.id, req.body);
  if (!data) return res.status(404).json({ error: 'Not found' });
  res.json(data);
};
// PUBLIC_INTERFACE
exports.remove = async (req, res) => {
  const ok = await BookingService.remove(req.params.id);
  if (!ok) return res.status(404).json({ error: 'Not found' });
  res.status(204).end();
};
