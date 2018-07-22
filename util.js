// 모듈 추출
var util = require('util');

// 모듈 사용
var data = util.format('%d + %d = %d', 52, 273, 52 + 273); // 문자열조합
var data2 = util.format('%d %d   %d', 52, 273, 52 + 273, 22);

console.log(data); // 문자열출력

console.log(data2);