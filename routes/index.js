const express = require('express');

const router = express.Router();
const jobs = require('./jobs');

/* entitys routers */

router.use('./jobs',jobs);

module.exports = router;
