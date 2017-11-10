(function(){
    var socket = io();
    $('#chat').submit(function(e){
        e.preventDefault();
        var message = $("#chat-text");

        socket.emit('message-send', message.val());

        //display each message as a number of message posted (1 for 1, 2 for 2 etc...)
      
        
        message.val('');

    })
    socket.on('message', function(msg){
        console.log(msg);
        $('#message').append($('<li>').text(msg.message))
    });
   
   
    // socket.on('connection', function(broadcast){
    //     $('#message').append($('<li>').text(broadcast))
    // });
})()