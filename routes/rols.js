const express = require('express');
const router = express.Router();

const rolsController = require('../controllers/rols');

router.get('/',rolsController.getAll);

router.get('/'.rolsController.getById);

router.post('/',rolsController.create);

router.put('/:id',rolsController.update);

router.delete('/:id',rolsController.remove);