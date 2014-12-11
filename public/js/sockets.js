var socket = io.connect('/');

$(document).ready(function(){
  console.log('ready ready');

  $("#like").click(function(){
    console.log("you clicked button");
    socket.emit("Hi from client", {message: 'hello there Simon', niceThing: 'hair'});
  });

  socket.on('I like you too', function(message){
    console.log('server sent message back')
    $('#title').text('I like you too');
  });
});
