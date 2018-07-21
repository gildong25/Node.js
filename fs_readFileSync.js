// 모듈추출.
var fs = require('fs');

// 모듈사용
var text = fs.readFileSync('textfile.txt', 'utf8');
console.log(text);