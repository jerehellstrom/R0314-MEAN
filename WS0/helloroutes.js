var http = require("http");
http.createServer(function (request, response) {

    // Send the HTTP header. HTTP Status: 200 = OK
    // Content Type: text/plain
    response.writeHead(200, {'Content-Type': 'text/html'});

    if (request.url === "/helloworld") {

    
    // Send the response body as "Hello World"
    response.end('Hello World\n');
    }
    else if (request.url === "/homepage") {

    response.end('Homepage\n');
    }

    else if (request.url === "/index") {

        response.end('INDEX\n');
        }
}).listen(8081);

// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');
