// 모듈추출
var os = require('os');

// 모듈사용
console.log(os.hostname());    // 운영체제의 호스트이름
console.log(os.type());       // 운영체제의 이름
console.log(os.platform());  // 운영체제의 플랫폼
console.log(os.arch());     // 운영체제의 아키텍쳐
console.log(os.release())  // 운영체제의 버전
console.log(os.uptime()); // 운영체제가 실행된 시간
console.log(os.loadavg()); // 로드에버리지정보를 담은 배열
console.log(os.totalmem()); // 시스템의 총 메모리
console.log(os.freemem()); // 시스템의 사용가능한 메모리
console.log(os.cpus()); // cpu의 정보를 담은 객체
console.log(os.networkInterfaces()); // 네트워크 인터페이스의 정보를 담은 배열