import React,{useState} from 'react';
import ImageUpload from '../component/ImageUpload.jsx';
import axios from 'axios';

export default function NewProject() {
    const [fname, setFname] = useState({});
    const [formData, setFormData] = useState({});
    const getFileName = (data) => {
        setFname(data);
    }
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]:value});
        setFormData({...formData, [name] : value});
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setFormData({...formData, "upload_file":fname.orgImage, "cource_file":fname.uploadImage});
        
        axios.post('http://localhost:9000/product/new',formData)
                .then(res => console.log(res.data)
                    )
                .catch(err => console.log(err));
        
    }
    console.log('formData',formData);
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div><label>상품 : <input type="text" name="product" onChange={handleChange} /></label></div>
                <div><label>가격 : <input type="text" name="price" onChange={handleChange} /></label></div>
                <div><label>할인가격 : <input type="text" name="cdprice" onChange={handleChange} /></label></div>
                <div>
                    <ImageUpload getFileName={getFileName} />
                </div>
                <div>
                    <input type="text" name="orgImage" value={fname.orgImage} />
                    <input type="text" name="uploadImage" value={fname.uploadImage} />
                </div>
                <div>
                    <button type="submit">입력</button>
                </div>
            </form>
        </div>
    );
}

