var http = require('http');

var server = http.createServer(function(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');

  res.writeHead(200);
  res.end(JSON.stringify(req.headers["cf-ipcountry"]));
});

server.listen(process.env.PORT || 80);

