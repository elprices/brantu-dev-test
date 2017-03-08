const mongoose = require('mongoose');

//read conn str from preferable secure location.
var connectionString = 'mongodb://localhost/testdb'
//connection settings.
mongoose.connect(connectionString);

var connection = mongoose.connection.once('open', function(){
	console.log('connection established');
}).on('error', function(){
	console.log('connection error');
});

module.exports = connection;