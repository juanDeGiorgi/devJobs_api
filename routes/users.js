const express = require('express');

const router = express.Router();
const usersController = require('../controllers/users');

router.get('/', usersController.getAll);
router.post('/', usersController.create);
router.get('/id', usersController.getById);
router.get('/update', usersController.update);
router.get('/remove', usersController.remove);

module.exports = router;
