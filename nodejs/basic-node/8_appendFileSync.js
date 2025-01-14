// writeme.txt 파일에 'hello node js' 문자를 추가 한 후
// 파일의 내용을 출력
const fs = require('fs');

fs.appendFileSync('./writeme.txt','hello node js', (err) => console.log('error') );

let data = fs.readFileSync('./writeme.txt');
console.log(data.toString());
