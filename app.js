const express = require('express');
const bodyParser = express.json();
const apiRouter = require('./routes/apiRouter');

const app = express();

app.use(bodyParser);
app.use('/api', apiRouter);
app.use(express.static('public/images'));

app.use(function(err, req, res, next) {
  const status = err.status || 500;
  res.status(status).send({error: err.message || 'Server Error!'})
})

module.exports = app;