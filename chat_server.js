var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/ochat', { useMongoClient: true });

var Message = mongoose.model('Message', {
  name: String,
  message: String
});

module.exports = function (server) {
  var io = require('socket.io').listen(server);
  io.sockets.on('connection', function (socket) {
    Message.find(function (err, docs) {
      socket.emit('message history sent', docs);
    });

    socket.on('message sent', function (message) {
      Message.create(message);
      io.sockets.emit('message recieved', message);
    });
  });
};
