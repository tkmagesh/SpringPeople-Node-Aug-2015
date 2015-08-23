var url = require('url');
var qs = require('querystring');

module.exports = function(req, res, next){
    req.url = req.url === '/' ? '/index.html' : req.url;
    req.url = url.parse(req.url, true);
    req.body = {};
    req.field = function(key){
        if (typeof req.url.query[key] !== 'undefined'){
            return req.url.query[key];
        } else {
            return req.body[key];
        }
    }
    if (req.method === 'POST'){
        var rawData = '';
        req.on('data', function(chunk){
            rawData += chunk;
        });
        req.on('end', function(){
            req.body = qs.parse(rawData);
            next();
        })
    } else {
        next();
    }
}
