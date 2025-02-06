import React from 'react';
import Form from 'react-bootstrap/Form'; // 파일을 통째로 넘기기 위해사용 form 태그 사용하면 안됨.
import axios from 'axios';

export default function ImageUpload() {
    const formData = new FormData(); // {[]}

    // 파일업로드 이벤트 함수
    const handleFileUpload = (e) => {
        // console.log('e.target-->',e.target);
        // console.log('e.target.files -->',e.target.files); // 배열

        formData.append("file",e.target.files[0]);
        // for(const [key, value] of formData.entries()){
        //     console.log('key-->',JSON.stringify(key));          
        //     console.log('value-->',value);          
        // }
        
        // 서버전송 -> 객체로 묶어서 전송됨
        axios.post('http://localhost:9000/uploads', formData )
                .then(res => console.log('res.data--> ',res.data))
                .catch(err => console.log(err));
    }
    //console.log('formData',formData);

    return (
        <div>
            {/* 업로드 파일이 브라우저에 임시 저장된다. 브라우저의 이벤트 객체를 받아서 handleFileUpload 파라미터로 넘긴다. */}
            {/* 업로드 파일에 제한을 둔다. accept */}
            <Form.Control type="file" accept='image/*' onChange={ (e) => {handleFileUpload(e)} } />
        </div>
    );
}

