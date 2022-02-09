const express = require('express');

const router = express.Router();
const jobs = require('./jobs');
const comments = require('./comments');
const rols = require('./rols');

/* entitys routers */

router.use('/jobs',jobs);
router.use('/comments,',comments);
router.use('/rols',rols);

module.exports = router;
