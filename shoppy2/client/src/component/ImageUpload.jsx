import React from 'react';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

export default function ImageUpload() {
    const formData = new FormData();
    const handleFileUpload = (e) => {
        axios.post('http://localhost:9000/uploads', formData , { 
                        headers: { "Content-Type": "multipart/form-data" } // 파일과 문자 데이터 추가 시 옵션
                    })
                .then(res => console.log('res.data',res.data))
                .catch(err => console.log(err));
    }

    return (
        <div>
            <Form.Control type="file" accept="image/*" onChange={(e)=>handleFileUpload(e)}></Form.Control>
        </div>
    );
}

