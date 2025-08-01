/**
 * @swagger
 * tags:
 *   name: Notifications
 *   description: Notification endpoints
 */
const express = require('express');
const notificationController = require('../controllers/notification');
const auth = require('../middleware/auth');
const router = express.Router();

router.get('/', auth, notificationController.list);
router.post('/', auth, notificationController.create);

module.exports = router;
