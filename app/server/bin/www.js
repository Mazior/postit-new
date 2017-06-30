const app = require('./app/app'); // The express app we just created

const port = process.env.PORT || 8000;

app.listen(port,'127.0.0.1' || 'localhost', () =>{
  console.log('Server started on port ${port}');
});

/* import express from 'express';

let app = express();

app.get('/*', (req,res) => {
  res.send('Welcome to PostIt');
});
app.listen(8000, () => console.log('Running on server 8000'));
*/
/*const http = require('http');
const app = require('../app'); // The express app we just created

const port = parseInt(process.env.PORT, 10) || 8000;
app.set('port', port);

const server = http.createServer(app);
server.listen(port);
*/
