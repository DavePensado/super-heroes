const express = require('express');
const heroRouter = require('./heroRouter')
const apiRouter = express.Router();

apiRouter.use('/heroes', heroRouter);

module.exports = apiRouter