const express = require('express');
const healthController = require('../controllers/health');

const router = express.Router();

// Health endpoint (root)
router.get('/', healthController.check.bind(healthController));

// Main API endpoints
router.use('/auth', require('./auth'));
router.use('/properties', require('./property'));
router.use('/bookings', require('./booking'));
router.use('/guests', require('./guest'));
router.use('/staff', require('./staff'));
router.use('/dashboard', require('./dashboard'));
router.use('/notifications', require('./notification'));

// TODO: Plug in more entities (tasks, smartlock, revenue, parking, contract, report, etc.)

module.exports = router;
