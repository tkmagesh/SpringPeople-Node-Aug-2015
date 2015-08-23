var Guid = require('guid');

var sessionStore = {};

module.exports = function(req, res, next){
    var sessionid = req.cookies.sessionid;
    if (typeof sessionid === 'undefined'){
        sessionid = Guid.raw();
        sessionStore[sessionid] = {};
        res.cookie("sessionid", sessionid);
    }
    req.session = sessionStore[sessionid];
    next();
}
