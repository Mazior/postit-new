import express from 'express';
import path from 'path';
const logger = require('morgan');
const bodyParser = require('body-parser');
import userRoute from './server/routes/user';
import groupRoute from './server/routes/group';

require('dotenv').config();

import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from './webpack.config.dev';

let app = express();

if (process.env.NODE_ENV !== 'test') {
  // Log requests to the console.
  app.use(logger('dev'));
}

// Parse incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Use all routes
app.use('/', userRoute);
app.use('/', groupRoute);

//webpack
const compiler = webpack(webpackConfig);

app.use(webpackMiddleware(compiler, {
  hot: true,
  publicPath: webpackConfig.output.publicPath,
  noInfo:true
}));
app.use(webpackHotMiddleware(compiler));
//webpack


app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome to the beginning of PostIT!!!.',
}));

module.exports = app;

/*
app.get('/*', (req,res) => {
  res.sendFile(path.join(__dirname, './template/frontend/app/index.html'));
});*/
//app.listen(8000, () => console.log('Running on server 8000'));
