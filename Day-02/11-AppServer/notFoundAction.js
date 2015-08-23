module.exports = function(req, res){
    console.log('serving not found action');
    res.statusCode = 404;
    res.end();
}
