// simple HTTP server using TCP sockets
var net = require('net');
var fs = require('fs');
var server = net.createServer(function(socket) {
    
    socket.on('data', function(data) {
        console.log('Received: ' + data);
        r = data.toString();
        console.log(r.length); // figure out the length for the first GET
        if(r.substring(0,3)=="GET" & r.length <=600) {  // if GET only
            // Server is not checking to make sure that the client 
            // actually sent a well-formed header.

            //socket.write("OK");
            console.log('OK');
            socket.write("HTTP/1.1 200 OK\n");

            fs.readFile('SmartHomeForm.html', 'utf8', function(err, contents) {
                console.log(contents);
                socket.write("Content-Length:"+contents.length);
                socket.write("\n\n"); // two carriage returns
                socket.write(contents);
            })
            
        }
        else if (r.substring(0,4)=="POST" & r.length <=600) {
            console.log(r);
        }
        else console.log(r); // show the actual message
    });  
    socket.on('close', function() {
        console.log('Connection closed');
    });
    socket.on('end', function() {
        console.log('client disconnected');
     });

    socket.on('error', function() {
        console.log('client disconnected');
     });
});
server.listen(1234, function() { 
    console.log('server is listening on port 8080');
});