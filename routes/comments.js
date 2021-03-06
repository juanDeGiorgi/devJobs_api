const express = require('express');

const router = express.Router();

const commentsController = require('../controllers/comments');

router.get('/', commentsController.getAll);

router.get('/:id', commentsController.GetById);

router.post('/', commentsController.create);

router.update('/:id', commentsController.update);

router.remove('/:id', commentsController.remove);

module.exports = router;
