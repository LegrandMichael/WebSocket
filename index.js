const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const socket = require('socket.io');
const server = app.listen(1337);
const io = socket(server);
const ent = require('ent');

app.use(express.static('public'));

io.on('connection', function(socket){
    var loggeduser;

    console.log('User as connected !');

    socket.on('message-send', function(msg){
        console.log(msg);
        io.emit('message', {message: ent.encode(msg), user: loggeduser});
    });

    socket.on('login', function(user){
        loggeduser = ent.encode(user);
        socket.broadcast.emit('service-messagerie', loggeduser);
    });

    socket.on('disconnect', function(){
        console.log('User as disconnected !');
    });
});


//socket.broadcast.emit('Hello everyone');