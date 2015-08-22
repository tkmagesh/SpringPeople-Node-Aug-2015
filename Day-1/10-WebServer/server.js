var http = require('http');
var server = http.createServer(function(req, res){
    /*
    resource - req.url
    __dirname - current directory
    path.join - combile the curent directory + resource
    check if the file exists
    if exists
        read the file and write to the response
    else
        res.statusCode = 404;
        res.end();
    */
    console.log('a new connection is established');
    res.write('<h1>Welcome to node.js</h1>');
    res.end();
});
server.listen(8080);
console.log('server listening on port 8080');
