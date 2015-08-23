var fs = require('fs');
var path = require('path');
var staticExtns = ['.html','.css','.js','.jpg','.png','.ico','.xml','.json'];

function isStatic(resName){
    return staticExtns.indexOf(path.extname(resName)) !== -1;
}

module.exports = function(req, res){
    if (isStatic(req.url.pathname)){
        var resourcePath = path.join(__dirname, req.url.pathname);
        if (!fs.existsSync(resourcePath)){
            res.statusCode = 404;
            res.end();
            return;
        }
        fs.createReadStream(resourcePath).pipe(res);
    }
}
