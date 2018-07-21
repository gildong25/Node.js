// 모듈추출
var crypto = require('crypto');

// 해시 생성
var shasum = crypto.createHash('sha256');
shasum.update('gildong');
var output = shasum.digest('hex');

// 길동이 해시화 출력
console.log('gildong:', output);