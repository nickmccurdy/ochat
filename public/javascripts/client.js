$(document).ready(function () {
  var socket = io.connect('http://localhost:3000');
  var messageTemplate = _.template($('#message-template').html());

  socket.on('message recieved', function (message) {
    $('#message-list').append(messageTemplate({ message: message }));
  });

  function sendMessage() {
    socket.emit('message sent', $('#message-field').val());
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
