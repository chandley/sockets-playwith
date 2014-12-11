var socket = function(io){

  io.on('connection', function(socket){
    console.log ('Client Connected');

    socket.on('private message', function (msg) {
      console.log('I received a private message saying ', msg.msg);
    });

    socket.on('disconnect', function(){
      // io.sockets.emit('user disconnected');
      console.log ('Server says bye');
    });

    socket.on('Hi from client', function(message){
      console.log(message.message + ' your ' + message.niceThing + ' looks nice');
    })

  });

};

module.exports = socket;