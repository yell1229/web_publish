import express from 'express';
import helloRouter from './rourter/helloRouter.js';

const server = express();
const port = 9000;

server.use('/hello',helloRouter);
// server.get('/hello/:id',(req, res) =>{
//     res.send(`<h1>hello~!! ====> ${req.params.id}</h1>`);
//     res.end();
// });




















server.listen(port,() =>{
    console.log(`서버 실행됨===> ${port} `);
    
});