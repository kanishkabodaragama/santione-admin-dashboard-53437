/**
 * @swagger
 * tags:
 *   name: Properties
 *   description: API routes for property management
 */
const express = require('express');
const propertyController = require('../controllers/property');
const auth = require('../middleware/auth');

const router = express.Router();

// All property CRUD
router.get('/', auth, propertyController.list);
router.get('/:id', auth, propertyController.get);
router.post('/', auth, propertyController.create);
router.put('/:id', auth, propertyController.update);
router.delete('/:id', auth, propertyController.remove);

module.exports = router;
