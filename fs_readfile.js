// 모듈추출
var fs = require('fs');

// 모듈사용
console.log('a');
fs.readFile('textfile.txt', 'utf8', (error, data) => {
  console.log(data);

});
console.log('b');
