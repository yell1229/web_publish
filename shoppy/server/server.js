import express from 'express';
import mainRouter from './router/mainRouter.js';
import helloRouter from './router/helloRouter.js';
import employeeRouter from './router/employeeRouter.js';
import empRouter from './router/empRouter.js';
import testRouter from './router/testRouter.js';
import memberRouter from './router/memberRouter.js';
import uploadRouter from './router/uploadRouter.js';
import productRouter from './router/productRouter.js';
import cors from 'cors';
import path from 'path';

const server = express();
const port = 9000;

// 서버의 공통적인 작업
server.use(express.json()); // json 포멧으로 바꿔서 요청한 곳에 넘겨준다. 없을경우 텍스트로 넘어간다.
server.use(express.urlencoded()); // 한글 인코딩 처리
server.use(cors()); // 다른 서버나, 도메인을 거쳐서 요청이 올 경우.
// 업로드 파일 호출 경로 추가 - 이미지 호출 | 앞의 경로는 url ,  뒤 이미지 저장 폴더이름
server.use('/upload_files', express.static(path.join("upload_files"))); // express.static : 전역으로 사용함. // 저장폴더 연결

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

// server.use('/employee', employeeRouter);
// server.use('/emp',empRouter);
// server.use('/test',testRouter);

// 로그인, 회원가입은 하나의 테이블을 사용한다.
server.use('/member',memberRouter)

// 이미지 업로드
server.use('/uploads', uploadRouter);

//
server.use('/product',productRouter);

server.listen(port,() =>{
    console.log(`start ===> ${port}`);   
});