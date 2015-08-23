var http = require('http');

var dataParser = require('./dataParser');
var staticServer = require('./staticServer');
var calculatorProcessor = require('./calculatorProcessor');
var notFoundAction = require('./notFoundAction');


var server = http.createServer(function(req, res){
    dataParser(req, res);
    staticServer(req, res);
    calculatorProcessor(req,res);
    notFoundAction(req, res);
});
server.listen(8080);
console.log('server listening on port 8080');
