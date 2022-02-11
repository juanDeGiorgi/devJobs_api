const express = require('express');

const router = express.Router();

const rolsController = require('../controllers/rols');

router.get('/'.rolsController.getById);

router.post('/', rolsController.create);

router.delete('/:id', rolsController.remove);

module.exports = router;
