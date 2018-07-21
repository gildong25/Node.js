# CHATPER 4 기본 내장 모듈

-	문서의 사용 방법을 익히는 것이 가장 중요!

---

? 무엇을 배울까 <br> - 기본모듈 사용법 <br> - [Node.js문서](https://nodejs.org/dist/latest-v4.x/docs/api/)를 보고 사용하는 방법 <br> - Node.js가 제공하는 동기와 비동기 방식의 차이를 fs 모듈로 알아보기

## 꼭 알아둘 개념

> Node.js 문서 - Node.js의 주요기능 설명하는 문서 <br> url 모듈 - 인터넷 주소를 다루는데 사용<br> Query String 모듈 - URL객체의 쿼리를 다루는데 사용<br> Util 모듈 - Node.js의 보조기능 <br> crypto 모듈 - 해시생성과 암호화<br> File System 모듈 - 파일을 다루는데 사용<br>

## 4.1 [os 모듈]( https://nodejs.org/dist/latest-v4.x/docs/api/os.html)

> _os 모듈_ 로 기본적인 사용법을 익혀보자!

 |메서드이름|설명| 
 |--|--| 
 |hostname()|운영체제 호스트이름 | 
 |type()|운영체제 이름|
 |platform()|운영체제 플랫폼 | 
 |arch()|아키텍쳐| 
 |release()|버전| 
 |uptime()|실행된 시간| 
 |loadavg()|로드 에버리지 정보를 담은 배열| 
 |totalmem()|시스템의 총메모리| 
 |freemem()|시스템의 사용가능한 메모리| 
 |cpus()|CPU의 정보를 담은 객체 리턴| 
 |networkInterfaces()|네트워크 인터페이스의 정보를 담은 배열|


## 4.2 [url 모듈](https://nodejs.org/dist/latest-v4.x/docs/api/url.html)

> _url모듈_ 은 URL 분석 및 구문 분석을 담당한다.
parse() 메서드 자주 사용


메서드이름|설명
--|--
parse(urlStr[, parseQueryString][, slashesDenoteHost])|URL 문자열을 URL 객체로 변환해 리턴
format(urlObj)|URL 객체를 URL 문자열로 변환해 리턴
resolve(from, to)|매개변수를 조합해 완전한 URL문자열을 생성해 리턴



## 4.3 [Query String 모듈](https://nodejs.org/dist/latest-v4.x/docs/api/querystring.html)

> _Query String모듈_ 은 URL 객체의 쿼리와 관련된 모듈이다.
url 모듈에 기능이 통합되어있어 사용이 적다


메서드이름|설명
--|--
stringify (obj [, sep] [, eq] [, options])|쿼리객체를 쿼리 문자열로 변환해 리턴
parse (str [, sep] [, eq] [, options])|쿼리문자열을 쿼리객체로 변환해 리턴

## 4.4 [util 모듈](https://nodejs.org/dist/latest-v4.x/docs/api/util.html)

> _util모듈_ 은 Node.js의 보조 기능 모아놓은 모듈

메서드이름|설명
--|--
format(format[, ...])|매개변수로 입력한 문자열을 조합해 리턴합니다.


## 4.5 [crypto 모듈](https://nodejs.org/dist/latest-v4.x/docs/api/crypto.html)

> _crypto모듈_ 은 해시 생성과 암호화를 수행

```
?해시
1. 키와 값을 갖는 자료형 : 자바스크립트의 객체
2. 전자 지문 : 암호화된 문자
```

해시화 - 암호화
---

- 해시는 다른 문자열이라도 같게 나올 수 있다.
- 따라서 원래 값을 알 수 없다.
- 비밀번호를 해킹당해도 로그인이 불가하게 된다.
- 암호화는 해시화된 문자열을 원래상태로 되돌린다. 

## 4.6 [FileSystem 모듈](https://nodejs.org/dist/latest-v4.x/docs/api/fs.html)

> _FileSystem모듈은_ 파일처리와 관련되며 6장부터 다른모듈과 활용해 웹서버 구현하는데 사용한다.

메서드이름|설명
--|--
readFile(file[, options], callback)|파일을 비동기적으로 읽습니다.
readFileSync(file[, options])|파일을 동기적으로 읽습니다.
writeFile(file, data[, options], callback)|파일을 비동기적으로 씁니다.
writeFileSync(file, data[, options])|파일을 동기적으로 씁니다.

예외처리
---

동기처리 : _try ~ catch_

```
try {
  fs.writeFileSync('textfile.txt', 'Hello World .. !', 'utf8');
  console.log('FILE WRITE COMPLETE');
} catch (e) {
  console.log(e);
}
```

비동기처리 : 콜백함수의 첫번째 매개변수를 이용

```
fs.writeFile('textfile.txt', 'Hello World .. !', 'utf8', function (error) {
  if (error) {
    console.log(error);
  } else {
    console.log('FILE WRITE COMPLETE');
  }
```


