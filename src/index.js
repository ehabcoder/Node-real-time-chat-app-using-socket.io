const http = require('http');
const path = require('path');
const express = require('express');
const socketio = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

const port = process.env.PORT || 3000;
const publicDirectoryPath = path.join(__dirname, '..', 'public');

app.use(express.static(publicDirectoryPath));

// let count = 0;

io.on('connection', (socket) => {
    console.log('New WebSocket connection')

    socket.emit('message', 'Welcome!')
    socket.broadcast.emit('message', 'A new user has joined!')
    socket.on('sendMessage', (msg) => {
        io.emit('message', msg);
    })

    // socket.emit('countUpdated', count)
    // socket.on('increment', () => {
    //     count++;
    //     // socket.emit('countUpdated', count);
    //     io.emit('countUpdated', count)
    // })

})

server.listen(port, () => {
    console.log(`Server is listining on port ${port}!`)
});