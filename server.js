var http, filed, server;

http = require('http');
file = require('filed');


server = http.createServer().listen(3013);

server.on('request', answer);

function answer (req, res){

  console.log(req.url);
  file('./' + req.url).pipe(res)

};
