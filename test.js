let fs = require('fs');


let lineReader = require('readline').createInterface({
    input: fs.createReadStream('text.txt')
});
let lineNumber = 1;
lineReader.on('line', function(line) {
    console.log(lineNumber, line);
    lineNumber++;
});
