import React,{useState} from 'react';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

export default function ImageUploadMultiple({getFileName}) {// 구조분해할당

    const [oldFile, setOldFile] = useState([]);

    const handleFileUploadMultiple = (e) => {
        const formData = new FormData();
        const files = e.target.files;
        // console.log('files -->',files);
        //if(files.length <6){
            // 1. formData에 append -> file 개별로 append  되어야함.
            for(const file of files){
                formData.append("files",file); // key값이 필요함.
            }
            formData.append("oldFile",oldFile);

            //for(let i=0; i<files.lengthl; i++) formData.append("files",files[i]); //사용가능

            // files.forEach((file) => formData.append("files",file)); // iterable  호출로 인해 사용이 불가능.
            // console.log(formData);
            
            for(const [key,value] of formData) console.log(key, value);
            

            // 2. 서버전송 axios
            // 파일업로드 제한 없이 사용자가 선택한 갯수만큼 전송 ==> ?maxFiles=${files.length}
            axios.post(`http://localhost:9000/uploads/multiple?maxFiles=${files.length}`,formData,{
                headers: { "Content-Type": "multipart/form-data" }
            })
                    .then(res => {
                        //console.log(res.data)
                        getFileName(res.data); // NewProduct.jsx로 전송
                        setOldFile(res.data.oldFile);
                    })
                    .catch(err => console.log(err));
        // }else{
        //     alert('파일 업로드는 최대 5개까지 가능합니다.');
        // }
    }

    return (
        <div>
            {/* multiple 옵션 추가 */}
            <Form.Control type="file" onChange={(e) =>{handleFileUploadMultiple(e)}} multiple />
        </div>
    );
}

