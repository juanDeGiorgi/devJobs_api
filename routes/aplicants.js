const express = require('express');

const router = express.Router();
const aplicantsController = require('../controllers/users');

router.get('/', aplicantsController.getAll);
router.get('/id', aplicantsController.getById);

module.exports = router;
