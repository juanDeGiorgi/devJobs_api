const express = require('express');

const router = express.Router();

const commentsController = require('../controllers/comments');

router.get('/', commentsController.getAll);

router.get('/:id', commentsController.getById);

router.post('/', commentsController.create);

router.put('/:id', commentsController.update);

router.delete('/:id', commentsController.remove);

module.exports = router;
