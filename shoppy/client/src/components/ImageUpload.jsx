import React from 'react';
import Form from 'react-bootstrap/Form'; // 파일을 통째로 넘기기 위해사용 form 태그 사용하면 안됨.
import axios from 'axios';

export default function ImageUpload({getFileName}) {
    const formData = new FormData();

    const handleFileUpload = (e) => {
        formData.append("file",e.target.files[0]);

        axios.post('http://localhost:9000/uploads', formData )
        .then(res => {
            console.log('res.data--> ',res.data);
            getFileName(res.data);
        })
        .catch(err => console.log(err));
    }

    return (
        <div>
            {/* <Form.Control type="file" onChange={(e) => handleFileUpload(e)} /> */}
            <Form.Control type="file" accept='image/*' onChange={ (e) => {handleFileUpload(e)} } ></Form.Control>
        </div>
    );
}

