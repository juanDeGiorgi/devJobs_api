const express = require('express');

const router = express.Router();
const passport = require('passport');

const jobs = require('./jobs');
const comments = require('./comments');
const usersRoutes = require('./users');
const aplicantsRoutes = require('./aplicants');
const roles = require('./roles');

/* entitys routers */
router.use('/users', usersRoutes);
router.use('/aplicants', passport.authenticate('jwt', { session: false }), aplicantsRoutes);
router.use('/jobs', jobs);
router.use('/comments,', comments);
router.use('/roles', roles);

module.exports = router;
