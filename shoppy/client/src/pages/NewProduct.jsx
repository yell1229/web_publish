import React,{useState, useRef} from 'react';
import ImageUpload from '../components/ImageUpload.jsx';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import ImageUploadMultiple from '../components/ImageUploadMultiple.jsx';

export default function NewProduct() {
    const navigate = useNavigate();
    const [fname, setFname] = useState({}); // {[],[],[]}
    const [preview, setPreview] = useState('');
    let [formData, setFormData] = useState({});
    const productNameRef = useRef(null);
    const [previewList, setPreviewList] = useState([]);

    

    const getFileName = (fileNames) => {
        console.log('NewProduct fileNames -->',fileNames);
        setFname(fileNames);
        setPreviewList(fileNames.uploadFileName);
        //setPreview(`http://localhost:9000/${fileNames.uploadFileName}`);
        
        // console.log('newProduct fileNames --> ', fileNames);
    }

    // 폼 입력 시 값을 formData로 추가하는 이벤트 처리
    const handleChange = (e) => { // input은 자동으로 event를 전달한다.
        const {name, value} = e.target;
        console.log(name, value);
        
        setFormData({...formData, [name] : value});
    }


    //등록 이벤트 처리
    const handleSubmit = (e) => {
        e.preventDefault();
        if(productNameRef.current.value===''){
            alert('상품명을 입력해주세요');
            productNameRef.current.focus();
            return false;
        }else{
            // 서버 연동
            formData = {...formData,"upload_file":fname.uploadFileName ,"source_file" : fname.sourceFileName}; // 변수가 아니라 [] 대신 "" 사용
            console.log('formData--> ',formData);
            axios.post('http://localhost:9000/product/new',formData)
                    .then(res => {
                        if(res.data.result_rows === 1){
                            alert('상품이 등록되었습니다.');
                            navigate('/all');
                        }else{
                            alert('상품등록 실패');
                        }
                    })
                    .catch(err => {
                        alert('상품등록 실패');
                        console.log(err)
                    });
        }
        
    }

    return (
        <div className='content'>
            <h1>상품등록</h1>
            <form onSubmit={handleSubmit}>
                <ul>
                    <li>
                        <label>상품명</label>
                        <input type="text" name="productName"  onChange={handleChange} ref={productNameRef} />
                    </li>
                    <li>
                        <label>가격</label>
                        <input type="text" name="price"  onChange={handleChange}  />
                    </li>
                    <li>
                        <label>상품정보</label>
                        <input type="text" name="description" onChange={handleChange} />
                    </li>
                    <li>
                        <label>파일업로드(다중) - 파일 업로드는 최대 5개까지 가능합니다.</label>
                        <ImageUploadMultiple getFileName={getFileName} />
                        {/* 다중파일 preview */}
                        {
                            previewList && previewList.map((preview) => 
                                <img src={`http://localhost:9000/${preview}`} alt="preview image" style={{"max-width":"100pxh","max-height":"100px"}} />
                            )
                        }
                    </li>
                    {/* <li>
                        <label>파일업로드</label>
                        <ImageUpload getFileName={getFileName} />
                        { preview && <img src={preview} alt="preview image" style={{"max-width":"100pxh","max-height":"100px"}} /> }
                    </li> */}
                    <li>
                        <input type="text" name="upload" value={fname.uploadFileName} />
                        <input type="text" name="source" value={fname.sourceFileName} />
                    </li>
                    <li>
                        <button type="submit">등록</button>
                        <button type="resest">취소</button>
                    </li>
                </ul>
            </form>
        </div>
    );
}

