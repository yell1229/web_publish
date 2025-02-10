import multer from 'multer';
import fs from 'fs';
import path from 'path';

const storage = multer.diskStorage({
    destination: function (req, file, cb) { 
        cb(null, 'upload_files/')
    },
    filename: function (req, file, cb) {// upload_files/에 저장되는 파일 이름.
        //cb(null, file.fieldname + '-' + Date.now()) // 파일 이름을 변경해줌.

        const uniqueSuffix = Date.now() + '_' + Math.round(Math.random() * 1e9);
        cb(null, uniqueSuffix + '_' + file.originalname ); // 한글 파일은 깨짐 인코딩 해야됨.
    }
})
  
const upload = multer({ storage: storage }).single('file'); // file은 넘겨받은 값. ImageUpload.jsx 에서 전달이름이 바뀌면 여기도 바꿔야됨.

export const fileUpload = (req, res) => {

}