const router = require('express').Router();
const controller = require('../controllers/companies');

// companies enpoints

router.get('/', controller.getAll);
router.get('/:id', controller.getOne);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.delete('/:id', controller.destroy);
