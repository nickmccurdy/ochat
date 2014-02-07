$(document).ready(function () {
  var socket = io.connect('http://localhost:3000');

  socket.on('messagerecieved', function (message) {
    $('#message-list').append('<li class="list-group-item">' + message + '</li>');
  });

  $('#message-send-button').click(function () {
    socket.emit('messagesent', $('#message-field').val());
    $('#message-field').val('');
  });
});
