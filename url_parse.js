//모듈추출
var url = require('url');

// QueryString모듈은 URL모듈의 parse 메서드와 동일
console.log(url.parse('http://www.hanbit.co.kr/store/books/look.php?p_code= B4250257160', true));