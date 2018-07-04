var net = require('net');

var client = new net.Socket();
client.connect(1337, 'localhost', function() {
	console.log('Connected');
	client.write('Hello, TCP passive server at localhost:1337! Love, Client.');

});

client.on('data', function(data) {
   console.log(data.toString());
   client.end();
});
client.on('end', function() { 
   console.log('disconnected from server');
});

