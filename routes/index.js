const express = require('express');

const router = express.Router();

const jobs = require('./jobs');
const comments = require('./comments');
const usersRoutes = require('./users');
const aplicantsRoutes = require('./aplicants');

/* entitys routers */
router.use('/users', usersRoutes);
router.use('/aplicants', aplicantsRoutes);
router.use('/jobs',jobs);
router.use('/comments,',comments);

module.exports = router;
