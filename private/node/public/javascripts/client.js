$(document).ready(function () {
  var socket = io.connect();
  var messageTemplate = _.template($('#message-template').html());

  // Elements
  var $messageList = $('#message-list');
  var $nameField = $('#name-field');
  var $messageField = $('#message-field');
  var $messageSendButton = $('#message-send-button');

  function showMessage(message) {
    $messageList.append(messageTemplate(message));
    $messageList.scrollTop($messageList.height());
  }

  socket.on('message recieved', showMessage);

  socket.on('message history sent', function (data) {
    data.forEach(showMessage);
  });

  function sendMessage() {
    if($messageField.val()) {
      socket.emit('message sent', {
        name: $nameField.val(),
        message: $messageField.val()
      });

      $messageField.val('');
    }
  }

  $messageSendButton.click(sendMessage);

  $messageField.on('keypress', function (event) {
    var returnKey = 13;

    if (event.which === returnKey) {
      sendMessage();
    }
  });
});
