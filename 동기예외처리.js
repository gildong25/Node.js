// 모듈 추출
var fs = require('fs');

// 파일읽기
try {
  var data = fs.readFileSync('textfile.txt', 'utf8');
  console.log(data);
} catch (e) {
  console.log(e);
}

// 없으면 파일쓰기
try {
  fs.writeFileSync('textfile.txt', 'Hello World .. !', 'utf8');
  console.log('FILE WRITE COMPLETE');
} catch (e) {
  console.log(e);
}