$(document).ready(function () {
  var socket = io.connect('http://localhost:3000');

  socket.on('messagerecieved', function (message) {
    $('#message-list').append('<li class="list-group-item">' + message + '</li>');
  });

  function sendMessage() {
    socket.emit('messagesent', $('#message-field').val());
    $('#message-field').val('');
  }

  $('#message-send-button').click(sendMessage);

  $('#message-field').on('keypress', function (event) {
    var returnKey = 13;

    if (event.which === returnKey) {
      sendMessage();
    }
  });
});
