Template.message.helpers({
  render: function (message) {
    return marked(_.escape(message));
  }
});
