/**
 * @swagger
 * tags:
 *   name: Guests
 *   description: Guest management endpoints
 */
const express = require('express');
const guestController = require('../controllers/guest');
const auth = require('../middleware/auth');

const router = express.Router();

router.get('/', auth, guestController.list);
router.get('/:id', auth, guestController.get);
router.post('/', auth, guestController.create);
router.put('/:id', auth, guestController.update);
router.delete('/:id', auth, guestController.remove);

module.exports = router;
