Meteor.methods({
  insertMessage: function (doc) {
    doc.name = doc.name || 'Guest';
    Messages.insert(doc);
  }
});
