var socket = function(io){

  io.on('connection', function(socket){
    console.log ('Client Connected');

    socket.on('disconnect', function(){
      // io.sockets.emit('user disconnected');
      console.log ('Server says bye');
     });

  });

};

module.exports = socket;