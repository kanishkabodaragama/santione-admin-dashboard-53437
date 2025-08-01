/**
 * @swagger
 * tags:
 *   name: Staff
 *   description: Staff management endpoints
 */
const express = require('express');
const staffController = require('../controllers/staff');
const auth = require('../middleware/auth');

const router = express.Router();

router.get('/', auth, staffController.list);
router.get('/:id', auth, staffController.get);
router.post('/', auth, staffController.create);
router.put('/:id', auth, staffController.update);
router.delete('/:id', auth, staffController.remove);

module.exports = router;
