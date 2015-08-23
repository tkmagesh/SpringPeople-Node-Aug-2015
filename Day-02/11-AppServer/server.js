var http = require('http');

var dataParser = require('./dataParser');
var staticServer = require('./staticServer');
var calculatorProcessor = require('./calculatorProcessor');
var notFoundAction = require('./notFoundAction');

var app = require('./app');

app.use(dataParser);
app.use(staticServer);
app.use(calculatorProcessor);
app.use(notFoundAction);

http.createServer(app()).listen(8080);
console.log('server listening on port 8080');
