import multer from 'multer';
import fs from 'fs';
import path from 'path';
import { log } from 'console';

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
  
const fupload = multer({ storage: storage}).single("file");  // file은 넘겨받은 값. ImageUpload.jsx 에서 전달이름이 바뀌면 여기도 바꿔야됨.

export const fileUpload = (req, res) => {
    
    fupload(req, res, (err) =>{ // fupload 이름으로 멀터가 실행한 결과값을 가져온다.
        if(err){
            console.log(err);
            
        }else{
            // console.log('req.file ->>',req.file); // 전달된 파일 (업로드가 완료된 파일의 정보) -> 멀터를 이용한 파일 업로드
            // console.log('req.body ->>',req.body); // 전달된 문자(이전 이미지파일)
            // console.log('req.body.oldFile',req.body.oldFile); // 전달된 문자(이전 이미지파일)
            // console.log('req ---------------------------->', req.file);
            // console.log('res---------------------------->', res.file);
            
            const oldFile = req.body.oldFile;
            if(oldFile){ // path, fs : 빌트인 객체
                //oldFile 존재 시 업로드 폴더에서 삭제
                const oldFilePath = path.join("upload_files/",oldFile);
                if(fs.existsSync(oldFilePath)){
                    try{
                        fs.unlinkSync(oldFilePath);
                        console.log("이전파일 삭제 완료 :", oldFilePath);  
                    }catch (error){
                        console.log("이전 파일 삭제 실패 :", error);
                        
                    }
                }
            }


            res.json({
                uploadImage: res.req.file.path, // 변경된 이름
                orgImage: req.file.originalname, // 사용자가 올린 이름
                oldFile: res.req.file.filename
            });
        }
   });
    
}