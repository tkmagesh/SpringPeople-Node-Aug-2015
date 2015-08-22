var EventEmitter = require('events').EventEmitter;
var util = require('util');

function CsvParser(stream){
    var self = this;
    EventEmitter.call(this);

    var fileContents = '';
    stream.on('data', function(chunk){
        fileContents += chunk;
        var newLine = fileContents.indexOf('\n');
        while(newLine !== -1){
            var line = fileContents.substr(0, newLine);
            self.emit('line', line);
            fileContents = fileContents.substr(newLine + 1);
            newLine = fileContents.indexOf('\n');

        }
    });

    stream.on('end', function(){
        self.emit('end');
    });
};
util.inherits(CsvParser, EventEmitter);
module.exports = CsvParser;
