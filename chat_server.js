module.exports = function (server) {
  var io = require('socket.io').listen(server);
  io.set('log level', 2);
  io.sockets.on('connection', function (socket) {
    socket.on('message sent', function (message) {
      io.sockets.emit('message recieved', message);
    });
  });
}
