import express from 'express';
import imageUploadRouter from './router/imageUploadRouter.js';
import path from 'path';
import cors from 'cors';

const server = express();
const port = 9000;
// 업로드 파일 호출 경로 추가 - 이미지 호출 | 앞의 경로는 url ,  뒤 이미지 저장 폴더이름
server.use('/upload_files', express.static(path.join("upload_files"))); // express.static : 전역으로 사용함. // 저장폴더 연결



// 미들웨어
server.use('/products',imageUploadRouter);

//
server.listen(port,() =>{
    console.log(`start ===> ${port}`);   
});