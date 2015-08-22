var calculator = require('./calculator');
var fs = require('fs');

var stream = fs.createReadStream('data.csv', {encoding: 'utf8'});

var fileContents = '';
var readCount = 0;
stream.on('data', function(chunk){
    ++readCount;
    fileContents += chunk;
    var newLine = fileContents.indexOf('\n');
    while(newLine !== -1){
        var line = fileContents.substr(0, newLine);
        var fields = line.split(',');
        var operation = fields[0],
            n1 = parseInt(fields[1],10),
            n2 = parseInt(fields[2],10);
        var result = calculator[operation](n1, n2);
        console.log(result);
        fileContents = fileContents.substr(newLine + 1);
        newLine = fileContents.indexOf('\n');
    }
});

stream.on('end', function(){
    console.log('done with readCounts = ', readCount);
});
