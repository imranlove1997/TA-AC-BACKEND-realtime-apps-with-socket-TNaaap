var express = require('express');
var fs = require('fs');
var http = require('http');
var port = 4000;

var app = express();

var server = http.createServer(app);
var io = require('socket.io')(server);

io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
    });
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

server.listen(port, () => {
    try {
        console.log(`Server is listening on port ${port}`)
    } catch (error) {
        console.error('Server has error');
    }
})