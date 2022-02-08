const express = require('express');

const router = express.Router();

const usersRoutes = require('./users');

/* entitys routers */
router.use('/users', usersRoutes);

module.exports = router;
