const express = require('express');

const router = express.Router();

const usersRoutes = require('./users');
const aplicantsRoutes = require('./aplicants');

/* entitys routers */
router.use('/users', usersRoutes);
router.use('/aplicants', aplicantsRoutes);

module.exports = router;
