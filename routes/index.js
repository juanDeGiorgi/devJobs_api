const express = require('express');

const router = express.Router();

const userController = require('../controllers/users');

/* entitys routers */
router.use('/users', userController.getAll);

module.exports = router;
