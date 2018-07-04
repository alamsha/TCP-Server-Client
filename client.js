var net = require('net');

var client = new net.Socket();
client.connect(1337, 'localhost', function() {
	console.log('Connected');
	client.write('Hello, TCP passive server at localhost:1337. I am your client.');
});

client.on('data', function(data) {
	console.log('Received: ' + data);
	client.destroy(); // kill client after server's response
});

client.on('close', function() {
	console.log('Connection closed');
});

