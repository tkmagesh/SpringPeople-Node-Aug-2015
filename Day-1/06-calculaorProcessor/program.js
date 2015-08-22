var calculator = require('./calculator');
var fs = require('fs');

fs.readFile('data.csv', {encoding : 'utf8'}, function(err, fileContents){
    if (err){
        console.log(err);
        return;
    }
    fileContents
        .split('\n')
        .forEach(function(line){
            var fields = line.split(',');
            var operation = fields[0],
                n1 = parseInt(fields[1],10),
                n2 = parseInt(fields[2],10);
            var result = calculator[operation](n1, n2);
            console.log(result);
        });
});
