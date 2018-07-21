// 모듈 추출
var fs = require('fs');

// 파일 읽기
fs.readFile('textfile.txt', 'utf8', function (error, data) {
  // 오류가 발생하면 곧바로 리턴
  if (error) { return console.log(error); }

  // 원하는 처리
  console.log(data);
});
// 파일을 씁니다
fs.writeFile('textfile.txt', 'Hello World .. !', 'utf8', function (error) {
  // 오류가 발생하면 곧바로 리턴
  if (error) { return console.log(error); }

  // 원하는처리
  console.log('FILE WRITE COMPLETE');
});
