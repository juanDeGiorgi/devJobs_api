const express = require('express');

const router = express.Router();
const usersController = require('../controllers/users');
const authController = require('../controllers/auth');

router.get('/', usersController.getAll);
router.post('/login', authController.login);
router.get('/id', usersController.getById);
router.get('/update', usersController.update);
router.get('/remove', usersController.remove);

module.exports = router;
