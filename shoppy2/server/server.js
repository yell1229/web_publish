import express from 'express';
import memberRouter from './router/memberRouter.js';

const server = express();
const port = 9000;
// 미들웨어
server.post('/member/login',(req,res) =>{
    console.log('req.body',req.body);
    res.send('<h1>test test</h1>');
});



//
server.listen(port,() =>{
    console.log(`start ===> ${port}`);   
});