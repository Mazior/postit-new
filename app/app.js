import express from 'express';
import path from 'path';

import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackConfig from './webpack.config.dev';

let app = express();

app.use(webpackMiddleware(webpack(webpackConfig)));


app.get('/*', (req,res) => {
  res.sendFile(path.join(__dirname, './template/frontend/app/index.html'));
});
app.listen(8000, () => console.log('Running on server 8000'));


/*const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

// Set up the express app
const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Setup a default catch-all route that sends back a welcome message in JSON format.
require('./routes')(app);

app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome to Post It.',
}));

module.exports = app;
*/
