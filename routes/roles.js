const express = require('express');

const router = express.Router();

const rolsController = require('../controllers/rols');

router.get('/:id', rolsController.getById);

router.post('/', rolsController.create);

router.delete('/:id', rolsController.remove);

module.exports = router;
