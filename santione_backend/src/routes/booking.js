/**
 * @swagger
 * tags:
 *   name: Bookings
 *   description: API routes for booking management
 */
const express = require('express');
const bookingController = require('../controllers/booking');
const auth = require('../middleware/auth');

const router = express.Router();

router.get('/', auth, bookingController.list);
router.get('/:id', auth, bookingController.get);
router.post('/', auth, bookingController.create);
router.put('/:id', auth, bookingController.update);
router.delete('/:id', auth, bookingController.remove);

module.exports = router;
