var qs = require('querystring');
var calculator = require('./calculator');


module.exports = function(req, res){
    if (req.url.pathname === '/calculator' && req.method === 'GET'){
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
    }
}
