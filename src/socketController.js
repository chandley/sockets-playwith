var socket = function(io){

  io.on('connection', function(){
    console.log ('Client Connected');
  });

};

module.exports = socket;