    // modules =================================================
var express = require('express'),
    app = express(),
    server = require('http').createServer(app),
    io = require("socket.io").listen(server),
    usuarios = {};
var mongoose       = require('mongoose');
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');

server.listen(8085);
	
// config file connection db
//var db = require('./config/db');

var port = process.env.PORT || 8085; 
app.use(bodyParser.json()); 
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); 
app.use(bodyParser.urlencoded({ extended: true })); 

app.use(methodOverride('X-HTTP-Method-Override')); 
app.use(express.static(__dirname + '/public')); 

// routes 
require('./app/routes')(app); 

io.sockets.on('connection', function(socket) {
    socket.on('send message', function(data) {
        io.sockets.emit('new message', {msg: data, nick: socket.name});

    });
    
    socket.on('new user', function(data, callback) {
        if (data in usuarios) {
            callback(false);
     
        } else {
            callback(true);
            socket.name = data;
            usuarios[socket.name] = 1;
            updateNicks();

        }
    });
   
    socket.on('disconnect', function(data) {
        if(!socket.name) return;
        delete usuarios[socket.name];
        updateNicks();
    });
    
    function updateNicks() {
        io.sockets.emit('usernames', usuarios);
    }
});

console.log('Server iniciado en el puerto : ' + port); 			
exports = module.exports = app; 				