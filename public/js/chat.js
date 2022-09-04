const socket = io();

// socket.on('countUpdated', (count) => {
//     console.log('Updated', count)
// })

// document.getElementById('increment').addEventListener('click', () => {
//     socket.emit('increment');
// })




document.getElementById('form').addEventListener('submit', (e) => {
    e.preventDefault()
    const message = document.getElementById('message').value;
    socket.emit('sendMessage', message);
})

socket.on('message', (msg) => {
    console.log(msg)
})