// 모듈추출
var url = require('url');
var querystring = require('querystring');

// 모듈사용
var parsedObject = url.parse('http://www.hanbit.co.kr/store/books/look.php?p_code= B4250257160');
console.log(querystring.parse(parsedObject.query));