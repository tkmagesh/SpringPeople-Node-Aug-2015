var EventEmitter = require('events').EventEmitter;
var util = require('util');

function CsvParser(stream){
    var self = this;
    EventEmitter.call(this);

    var fileContents = '';
    stream.on('data', function(chunk){
        fileContents += chunk;
        do {
            var newLine = fileContents.indexOf('\n');
            var line = fileContents.substr(0, newLine);
            self.emit('line', line)
            fileContents = fileContents.substr(newLine + 1);
        } while(newLine !== -1)
    });

    stream.on('end', function(){
        self.emit('end');
    });
};
util.inherits(CsvParser, EventEmitter);
module.exports = CsvParser;
