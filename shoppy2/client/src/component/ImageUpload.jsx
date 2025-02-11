import React,{useState} from 'react';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

export default function ImageUpload({getFileName}) {
    const formData = new FormData();
    const [oldFile, setOldFile] = useState('');
    const handleFileUpload = (e) => {
        // console.log('e.target-->',e.target); 
        // console.log('e.target.files[0] -->',e.target.files[0]); // 배열

        formData.append("file",e.target.files[0]); // {"file":{"name":"1.png", ...}}
        formData.append("oldFile",oldFile);
        
        axios.post('http://localhost:9000/uploads/new', formData , { 
                        headers: { "Content-Type": "multipart/form-data" } // 파일과 문자 데이터 추가 시 옵션
                    })
                .then(res => {
                    console.log('res.data->>',res.data);
                    getFileName(res.data);
                    setOldFile(res.data.oldFile);
                })
                .catch(err => console.log(err));
    }
    console.log('oldfile',oldFile);
    
    return (
        <div>
            <Form.Control type="file" accept="image/*" onChange={(e)=>handleFileUpload(e)}></Form.Control>
        </div>
    );
}

