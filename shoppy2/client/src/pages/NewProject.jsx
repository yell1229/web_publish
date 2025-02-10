import React from 'react';
import ImageUpload from '../component/ImageUpload.jsx';

export default function NewProject() {
    return (
        <div>
            <form>
                <div><label>상품 : <input type="text" /></label></div>
                <div><label>가격 : <input type="text" /></label></div>
                <div><label>가격 : <input type="text" /></label></div>
                <div>
                    <ImageUpload />
                </div>
                <div>
                    <button type="submit">입력</button>
                </div>
            </form>
        </div>
    );
}

