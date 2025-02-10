import React,{useState} from 'react';
import Form from 'react-bootstrap/Form'; // 파일을 통째로 넘기기 위해사용 form 태그 사용하면 안됨.
import axios from 'axios';

export default function ImageUpload({getFileName}) {
    const [oldFile, setOldFile] = useState(''); // 이전 파일은 db에 전달이 필요 없기 때문에 이 위치에서 진행한다.

    const formData = new FormData();

    const handleFileUpload = (e) => {
        formData.append("file",e.target.files[0]); // 새로운파일
        formData.append("oldFile",oldFile); // 이전파일
        axios.post('http://localhost:9000/uploads', formData , { 
            headers: { "Content-Type": "multipart/form-data" } // 파일과 문자 데이터 추가 시 옵션
        })
        .then(res => {
            console.log('res.data--> ',res.data);
            getFileName(res.data);
            setOldFile(res.data.oldFile);
        })
        .catch(err => console.log(err));
    }
    console.log('oldFile',oldFile);
    
    return (
        <div>
            {/* <Form.Control type="file" onChange={(e) => handleFileUpload(e)} /> */}
            <Form.Control type="file" accept='image/*' onChange={ (e) => {handleFileUpload(e)} } ></Form.Control>
        </div>
    );
}

