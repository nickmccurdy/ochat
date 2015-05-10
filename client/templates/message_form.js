Template.messageForm.events({
  'submit #message-form': function (event) {
    // TODO: Save this elements so we aren't recreating it on each call.
    var $nameField = $('#name-field');

    if(event.target.message.value) {
      Meteor.call('insertMessage', {
        name: $nameField.val(),
        message: event.target.message.value
      });

      event.target.message.value = '';
    }

    return false;
  }
});
