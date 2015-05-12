
var dns = require('native-dns'),
        server = dns.createServer();
serverList = ["127.0.0.1", "127.0.0.2", "127.0.0.3"];

server.on('request', function (request, response) {
    //console.log(request) 
    response.answer.push(dns.A({
        name: request.question[0].name,
        address: '127.0.0.1',
        ttl: 600,
    }));
    response.send();
});

server.on('error', function (err, buff, req, res) {
    console.log(err.stack);
});

server.serve(53);