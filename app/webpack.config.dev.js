import express from 'express';
import path from 'path'


 export default{
   devtool: 'eval-source-map',//app\client\index.js
   entry: path.join(__dirname, './client/index.js'),

   output:{
     path:'/'
   },
   module: {
     loaders: [
       {
         test: /\.js$/,
         include: path.join(__dirname, 'client'),
         loaders: [ 'babel-loader' ]
       }
     ]
   },
   resolve:{
     extensions:[ '*', '.js']
   }
 }
