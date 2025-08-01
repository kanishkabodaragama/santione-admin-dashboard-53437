/**
 * Controller for notifications.
 */
const NotificationService = require('../services/notification');

// PUBLIC_INTERFACE
exports.list = async (req, res) => {
  const data = await NotificationService.list();
  res.json(data);
};
// PUBLIC_INTERFACE
exports.create = async (req, res) => {
  const data = await NotificationService.create(req.body);
  res.status(201).json(data);
};
