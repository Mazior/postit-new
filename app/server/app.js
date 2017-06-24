const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

// Set up the express app
let app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Setup a default catch-all route that sends back a welcome message in JSON format.
require('./server/routes')(app);
app.get('/*', (req, res) => res.status(200).send({
  message: 'Welcome to Post It.',
}));

module.exports = app;
