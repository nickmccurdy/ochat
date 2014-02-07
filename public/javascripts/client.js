$(document).ready(function () {
  var chatClient = io.connect('http://localhost:3000');

  chatClient.on('messagerecieved', function (message) {
    $('#message-list').append('<li class="list-group-item">' + message + '</li>');
  });

  $('#message-send-button').click(function () {
    chatClient.emit('messagesent', $('#message-field').val());
    $('#message-field').val('');
  });
});
