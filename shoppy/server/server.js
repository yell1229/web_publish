import express from 'express';
import testRouter from './router/testRouter.js';
import helloRouter from './router/helloRouter.js';
import FruitsRouter from './router/FruitsRouter.js';

const server = express();
const port = 9000;

// 요청을 처리하는 [ 미들웨어 ]
// /test 요청시 helllo~test!!! 브라우저에 출력 후 종료

// server.use('/test',(req, res) => {
//     res.send(`<h1>helllo~test!!!</h1>`);
//     res.end();
// });
server.use('/test', testRouter); // /test로 시작하는 모든 경로를 testRouter객체에 넘긴다.

// /test/product  --> product list 출력

// /hello --> hello world 출력
server.use('/hello',helloRouter);
// /fruits --> 맛있는 과일들 출력
server.use('/fruits', FruitsRouter);


server.listen(port,() =>{
    console.log(`server start ====> ${port}`); 
});