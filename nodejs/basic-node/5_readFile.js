// readme.txt 파일을 읽어서 내용을 화면에 출력하는 실습

const fs = require('fs');
const fsp = require('fs').promises; // 대용량파일 비동기식

// console.log(fs);
    // readFile: [Function: readFile],
    // readFileSync: [Function: readFileSync],
// fs.readFile('파일의 경로', 파일을 읽은 후 실행 함수:: 콜백함수);
fs.readFile('./readme.txt',(err, data) => {
    console.log(data);
    // 메모리 임시공간: Buffer 공간에 16진수로 저장됨.
    // <Buffer ed 85 8c ec 8a a4 ed 8a b8 20 ed 8c 8c ec 9d bc ec 9e 85 eb 8b 88 eb 8b a4 2e>
    console.log(data.toString());
    // 테스트 파일입니다.
});
fs.readFile('./readme1.txt',(err, data) => {
    if(err) {
        console.log('파일 읽기 실패!!')
    }else{
        console.log(data);
        console.log(data.toString());       
    }
});

// 프로미스 타입으로 리턴
fsp.readFile('./readme.txt')
    .then((data) =>{
        console.log('fsp -->  ',data.toString());
        
    })
    .catch((err) => console.log(err) );