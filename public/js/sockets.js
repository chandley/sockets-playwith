var socket = io.connect('/');

$(document).ready(function(){
  console.log('ready ready');

  $("#like").click(function(){
    console.log("you clicked button");
    socket.emit("Hi from client", {message: 'hello there Simon', niceThing: 'hair'});
  });





});
