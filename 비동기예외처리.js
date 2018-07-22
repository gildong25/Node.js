// 모듈 추출
var fs = require('fs');

// 파일읽기
fs.readFile('textfile.txt', 'utf8', function (error, data) {
  if (error) {
    console.log(error);
  } else {
    console.log(data);
  }
});

// 없으면 파일 쓰기.
fs.writeFile('textfile.txt', 'Hello World .. !', 'utf8', function (error) {
  if (error) {
    console.log(error);
  } else {
    console.log('FILE WRITE COMPLETE');
  }
});

/*fs.writeFile('textfile.txt', 'Hello World .. !', 'utf8', => (error) {
  if (error) {
    console.log(error);
  } else {
    console.log('FILE WRITE COMPLETE');
  }
});
*/



