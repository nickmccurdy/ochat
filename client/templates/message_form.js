Template.messageForm.events({
  'submit #message-form': function (event) {
    // TODO: Save this elements so we aren't recreating it on each call.
    var $nameField = $('#name-field');

    if(event.target.message.value) {
      Messages.insert({
        name: $nameField.val() || 'Guest',
        message: event.target.message.value
      });

      event.target.message.value = '';
    }

    return false;
  }
});
