import express from 'express';
import mainRouter from './router/mainRouter.js';
import helloRouter from './router/helloRouter.js';
import employeeRouter from './router/employeeRouter.js';
import empRouter from './router/empRouter.js';
import cors from 'cors';

const server = express();
const port = 9000;

// 서버의 공통적인 작업
server.use(express.json()); // json 포멧으로 바꿔서 요청한 곳에 넘겨준다. 없을경우 텍스트로 넘어간다.
server.use(express.urlencoded()); // 한글 인코딩 처리
server.use(cors()); // 다른 서버나, 도메인을 거쳐서 요청이 올 경우.

// 서버의 요청처리를 위한 미들웨어 정의

server.use('/',mainRouter);
// server.get('/',(req, res) => {
//     res.send(`<h1>Hello NodeJS~!!!!</h1>`); // send()함수는 한번만 사용가능. 처음에 보낸것만 적용됨.
//     // res.send(`<h1>Hello2 NodeJS~!!!!</h1>`);
//     res.end();
// });

// /hello => Welcom to Hello!
// 서비스의 프로토콜을 모르기 때문에 대표주소로 오면 use로 받는다.
server.use('/hello',helloRouter);
// server.use('/hello',(req, res)=> {
//     res.send(`Welcom to Hello!`);
//     res.end();
// });

server.use('/employee', employeeRouter);

server.use('/emp',empRouter);

server.listen(port,() =>{
    console.log(`start ===> ${port}`);   
});