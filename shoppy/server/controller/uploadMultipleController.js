import multer from 'multer';
// 윈도우 폴더에 접근(로컬에서 올린 이미지 경로를 찾는다)
import fs from 'fs';
import path from 'path'; 

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


//파일 업로드 실행 함수
export const fileUploadMultiple = (req, res) => { // req 업로드할때 넘어가는 , res: 업로드가 성공하면 

    const maxFiles = parseInt(req.query.maxFiles); // 네트워크 url로 들어오는 정보는 string -> 갯수는 number로 변경
    const upload = multer({ storage: storage }).array('files', maxFiles); // max : 5개 이미지 . 하나씩 꺼내는 걸 멀터가 한다.


    upload(req, res, (err) =>{ // multer가 보낸 값 res, req
        if(err){
            console.log(err);   
        }else{
            console.log('upload file list --->', req.files);
            
            // console.log(req.file); // 전달된 파일 (업로드가 완료된 파일의 정보) -> 멀터를 이용한 파일 업로드
            // console.log('req.body.oldFile',req.body.oldFile); // 전달된 문자(이전 이미지파일)
            
            
            //console.log('업로드 삭제파일(oldFile)-->', req.body.oldFile);
            const deleteFiles = req.body.oldFile;
            //console.log(deleteFiles.length); //네트워크 header로 넘어오면 배열이 아닌, string으로 넘어온다.
            const oldFileArray = deleteFiles.split(','); // 문자열을 배열로 변경
            
            // 이전파일 존재시 삭제로직
            // const oldFile = req.body.oldFile;
            for( const oldFile of oldFileArray){
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
                } // if
            }
            
            // res 객체를 이용한 전송객체 생성 <-> 같은 기능을 하는 uploadController.js의 res 객체명과 동일하게 정의
            let uploadFileName = [];
            let sourceFileName = [];
            let oldFile = [];

            //req.files 배열의 파일 정보를 가져와서 위의 배열에 추가한다.
            for(const file of req.files){
                uploadFileName.push(file.path);
                sourceFileName.push(file.originalname);
                oldFile.push(file.filename)
            }

            res.json({
                // 저장된 폴더의 파일명
                "uploadFileName": uploadFileName, // uploadFileName 배열로 만들어서 하나씩 추가한다.
                // 사용자가 선택한 원래 파일명
                "sourceFileName": sourceFileName,
                "oldFile": oldFile
            });
        }
    });
    // res.end();
}