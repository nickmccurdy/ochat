$(document).ready(function () {
  var socket = io.connect();
  var messageTemplate = _.template($('#message-template').html());

  socket.on('message recieved', function (data) {
    $('#message-list').append(messageTemplate(data));
    $('#message-list').scrollTop($('#message-list').height());
  });

  function sendMessage() {
    socket.emit('message sent', {
      name: $('#name-field').val(),
      message: $('#message-field').val()
    });
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
