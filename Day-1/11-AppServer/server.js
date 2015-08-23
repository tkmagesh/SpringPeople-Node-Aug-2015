var http = require('http');
var fs = require('fs');
var path = require('path');
var url = require('url');
var qs = require('querystring');
var calculator = require('./calculator');

var staticExtns = ['.html','.css','.js','.jpg','.png','.ico','.xml','.json'];
function isStatic(resName){
    return staticExtns.indexOf(path.extname(resName)) !== -1;
}

var server = http.createServer(function(req, res){
    req.url = req.url === '/' ? '/index.html' : req.url;
    req.url = url.parse(req.url, true);
    console.log(req.url.pathname === '/calculator');
    if (isStatic(req.url.pathname)){
        var resourcePath = path.join(__dirname, req.url.pathname);
        if (!fs.existsSync(resourcePath)){
            res.statusCode = 404;
            res.end();
            return;
        }
        fs.createReadStream(resourcePath).pipe(res);
    } else if (req.url.pathname === '/calculator' && req.method === 'GET'){
        var operation = req.url.query.operation,
            n1 = parseInt(req.url.query.n1,10),
            n2 = parseInt(req.url.query.n2,10);
        var result = calculator[operation](n1,n2);
        res.write(result.toString());
        res.end();
    } else if (req.url.pathname === '/calculator' && req.method === 'POST'){
        var rawData = '';
        req.on('data', function(chunk){
            rawData += chunk;
        });
        req.on('end', function(){
            var data = qs.parse(rawData);
            var operation = data.operation,
                n1 = parseInt(data.n1,10),
                n2 = parseInt(data.n2,10);
            var result = calculator[operation](n1,n2);
            res.write(result.toString());
            res.end();
        });
    } else {
        res.statusCode = 404;
        res.end();
    }
});
server.listen(8080);
console.log('server listening on port 8080');
