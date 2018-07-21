// 모듈추출
var fs = require('fs');

// 모듈사용
fs.readFile('textfile.txt', 'utf8', function (error, data) {
  console.log(data);
});
