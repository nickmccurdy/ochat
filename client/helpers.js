function sendMessage() {
  // Elements
  // TODO: Save these elements so we aren't recreating them on each call.
  var $messageList = $('#message-list');
  var $nameField = $('#name-field');
  var $messageField = $('#message-field');
  var $messageSendButton = $('#message-send-button');

  if($messageField.val()) {
    Messages.insert({
      name: $nameField.val() || 'Guest',
      message: $messageField.val()
    });

    $messageField.val('');
  }
}

Template.body.events({
  'click #message-send-button': function () {
    sendMessage();
  },
  'keypress #message-field': function (event) {
    var returnKey = 13;

    if (event.which === returnKey) {
      sendMessage();
    }
  }
});

Template.body.helpers({
  messages: function () {
    return Messages.find({});
  }
});
