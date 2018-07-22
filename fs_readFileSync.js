// 모듈추출.
var fs = require('fs');

// 모듈사용
console.log('a');
var text = fs.readFileSync('textfile.txt', 'utf8');
console.log(text);
console.log('b');