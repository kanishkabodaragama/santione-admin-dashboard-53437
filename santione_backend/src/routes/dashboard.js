/**
 * @swagger
 * tags:
 *   name: Dashboard
 *   description: Dashboard KPIs
 */
const express = require('express');
const dashboardController = require('../controllers/dashboard');
const auth = require('../middleware/auth');
const router = express.Router();

router.get('/kpi', auth, dashboardController.kpi);

module.exports = router;
