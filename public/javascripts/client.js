$(document).ready(function () {
  var socket = io.connect();
  var messageTemplate = _.template($('#message-template').html());

  // Elements
  var $messageList = $('#message-list');
  var $nameField = $('#name-field');
  var $messageField = $('#message-field');
  var $messageSendButton = $('#message-send-button');

  socket.on('message recieved', function (data) {
    $messageList.append(messageTemplate(data));
    $messageList.scrollTop($messageList.height());
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
