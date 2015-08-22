var calculator = require('./calculator');
var fs = require('fs');
var CsvParser = require('./CsvParser.js');

var stream = fs.createReadStream('data.csv', {encoding: 'utf8'});
var parser = new CsvParser(stream);
parser.on('line', function(line){
    var fields = line.split(',');
    var operation = fields[0],
        n1 = parseInt(fields[1],10),
        n2 = parseInt(fields[2],10);
    console.log(line);
    var result = calculator[operation](n1, n2);
    console.log(result);

});

parser.on('end', function(){
    console.log('done');
});
