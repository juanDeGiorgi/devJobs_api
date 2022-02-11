const express = require('express');

const router = express.Router();

const jobsController = require('../controllers/jobs');

router.get('/', jobsController.getAll);

router.get('/:id', jobsController.getById);

router.post('/', jobsController.create);

router.put('/:id', jobsController.update);

router.delete('/:id', jobsController.remove);

module.exports = router;
