# TCP-Server-Client
A TCP passive server listening to a port and a client talking

Run server:
------------

$ nodemon server.js

server output:
```
Server listening on 127.0.0.1:6969
CONNECTED: 127.0.0.1:52164
DATA 127.0.0.1: Hello, TCP passive server at localhost:1337! Love, Client.
CLOSED: 127.0.0.1 52164
```

Run client:
---------------

$ nodemon client.js

client output:

```
[nodemon] starting `node client1.js`
CONNECTED TO: 127.0.0.1:6969
DATA: You said "Hello, TCP passive server at localhost:1337! Love, Client."
Connection closed
[nodemon] clean exit - waiting for changes before restart
```
Ref: 

https://www.tutorialspoint.com/nodejs/nodejs_net_module.htm

https://www.hacksparrow.com/tcp-socket-programming-in-node-js.html
