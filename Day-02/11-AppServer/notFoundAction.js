module.exports = function(req, res, next){
    console.log('serving not found action');
    res.statusCode = 404;
    res.end();
    next();
}
