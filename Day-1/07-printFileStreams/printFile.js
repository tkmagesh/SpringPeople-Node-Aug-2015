var fs = require('fs');

/*
Events
    - data
    - end
    - close
    - error
*/

/*
Events
    - eventEmitter -> interface for all the components that emit events
        - on
        - addListener
        - once
        - off
        - emit

*/

var stream = fs.createReadStream('sample.txt',{encoding : 'utf8'});
var readCount = 0;

stream.on('data', function(chunk){
    ++readCount;
    console.log(chunk);
});
stream.on('end', function(){
    console.log('done with readCount = ', readCount);
});

