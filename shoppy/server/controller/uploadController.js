/*
import multer from "multer";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'upload_files/')
    },
    filename: function (req, file, cb) {
        // 파일명 중복방지를 위한 새로운 파일명 생성
        const uniqueSuffix = Date.now() + '_' + Math.round(Math.random() * 1e9);
      cb(null, uniqueSuffix + '_' + Date.now());
    }
  })
  
const fupload = multer({ storage: storage}).single("file"); // 파일 하나만 업로드하기 때문에 .single

// 파일 업로드, db 연동 안함.
// 파일 업로드, 파일을  /upload_files  폴더에 저장하는 작업
export const fileUpload = (req,res) => {
   fupload(req, res, (err) =>{ // fupload 이름으로 멀터가 실행한 결과값을 가져온다.
        if(err){
            console.log(err);
            
        }else{
            res.json({
                uploadImage: res.req.file.path, // 변경된 이름
                orgImage: req.file.originalname // 사용자가 올린 이름
            });
        }
   });
}
*/

import multer from 'multer';

// multer 라이브러리로 파일을 업로드 폴더에 저장
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'upload_files/')
    },
    filename: function (req, file, cb) { // upload_files/에 저장되는 파일 이름.
        // cb(null, file.fieldname + '-' + Date.now())
        const uniqueSuffix = Date.now() + '_' + Math.round(Math.random() * 1e9);
        cb(null, uniqueSuffix + '_' + file.originalname ); // 한글 파일은 깨짐 인코딩 해야됨.
    }
})
  
const upload = multer({ storage: storage }).single('file'); // file은 넘겨받은 값. ImageUpload.jsx 에서 전달이름이 바뀌면 여기도 바꿔야됨.

export const fileUpload = (req, res) => {
    upload(req, res, (err) =>{ // multer가 보낸 값 res, req
        if(err){
            console.log(err);   
        }else{
            res.json({
                // 저장된 폴더의 파일명
                "uploadFileName": res.req.file.path, // node에서 이름에 ''없어도 되지만, 오류방지차원에서 붙여준다.
                // 사용자가 선택한 원래 파일명
                "sourceFileName": req.file.originalname
            });
        }
    });
    // res.end();
}




























