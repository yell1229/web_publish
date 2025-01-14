// express 웹 서버 : 웹 클라이언트(브라우저) 받아서 처리 한 후 결과를 전송 
const express = require('express');
const server = express();

/*
    get/post 방식으로 요청들어오는 처리를 나열
*/
// 브라우저가 접속하는 url = http://localhost:8080/
// path : /(root)
server.get('/', (req, res) => { // req: 클라이언트가 서버로 보내는 요청 정보, res: 서버에서 클라이언트로 응답하는 정보
    res.send('<h1>express 서버에서 전송합니다.</h1>');
});

// 브라우저가 접속하는 path = http://localhost:8080/test
// path : /test
server.get('/test',(req, res)=>{
    res.send('<h1>/test로 요청한 결과 전송</h1>');
    console.log('/test 전송 완료!!!');
    
});

// path: /param/홍길동
server.get('/param/:name',(req,res) => {
    // console.log(req);
    
    console.log('name ==> ', req.params.name);
    res.send(`${req.params. name} 전송 완료`);
    
});

// server.get();
// server.post();
// server.use(); // get, post 어떤건지 모를 때.

server.listen(8080,() => console.log('서버 실행')); // http://localhost:8080/