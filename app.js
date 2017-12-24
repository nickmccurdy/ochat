/**
 * Module dependencies.
 */

var express = require('express');
var errorhandler = require('errorhandler')
var http = require('http');
var morgan = require('morgan');
var path = require('path');
var serveStatic = require('serve-static');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(morgan('dev'));
app.use(serveStatic(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(errorhandler);
}

app.get('/', function(req, res){
  res.render('index');
});

var server = http.createServer(app);

var chatServer = require('./chat_server');
chatServer(server);

server.listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});
