const express = require( 'express');
const http = require('http');
const path = require('path');
const bodyParser = require( 'body-parser');
const router = require('./router');

const app = express();

// App Setup
app.use(express.static('public'));
app.use(bodyParser.json({ type: '*/*' }));

app.get('/*', (request, response)=>{
    response.sendFile(path.resolve('public', 'index.html'))
});

router(app);

// Server Setup
const port = process.env.PORT || 3000;
const server = http.createServer(app);
server.listen(port);
console.log('Server listening on:', port);