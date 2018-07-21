# 모듈을 추출
fs = require "fs"

# 파일읽기
fs.readFile "textfile.txt", "utf8", (error, data) ->
    # 오류 발생시 바로 리턴
    return console.log error if error
    # 원하는 처리
    console.log data
# 파일쓰기
fs.writeFile "textfile.txt", "Hello World .. !", "utf8", (error) ->
    # 오류발생시 바로리턴
    return console.log error if error
    # 원하는 처리
    console.log "FILE WRITE COMPLETE"
