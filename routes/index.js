const express = require('express');

const router = express.Router();
const jobs = require('./jobs');
const comments = require('./comments');
/* entitys routers */

router.use('/jobs',jobs);
router.use('/comments,',comments);
module.exports = router;
