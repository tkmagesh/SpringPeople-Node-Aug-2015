var Guid = require('guid');

var sessionStore = {};

setInterval(function(){
    for(var sessionid in sessionStore){
        var sessionObj = sessionStore[sessionid];
        if ((new Date() - sessionObj.lastAccessedTime) > 60000)
            delete sessionStore[sessionid];
    }
}, 5000)

module.exports = function(req, res, next){
    var sessionid = req.cookies.sessionid;
    if (typeof sessionid === 'undefined'){
        sessionid = Guid.raw();
        sessionStore[sessionid] = {
            lastAccessedTime : new Date(),
            data : {}
        };
        res.cookie("sessionid", sessionid);
    }
    sessionStore[sessionid].lastAccessedTime = new Date();
    req.session = sessionStore[sessionid].data;
    next();
}
