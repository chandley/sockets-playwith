var socket = io.connect('/');

$('button').click(function(){
  socket.emit('Hi from client, {message: "hello there Simon", niceThing: "hair"}');
});