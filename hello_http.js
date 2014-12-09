var http = require('http');

var server = http.createServer(function(req, res){
	rss.writeHead(200);
	rss.end("Hello http");

});
server.listen(8000);