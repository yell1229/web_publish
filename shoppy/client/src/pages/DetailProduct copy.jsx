import React,{useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function DetailProduct({addCart}) {

    const  {pid} = useParams(); // {"pid":pid} 구조분해할당
    const [product, setProduct] = useState({});
    const [size, setSize] = useState('XS');

    useEffect(() => {
        axios.get('/data/product.json') // 네트웍 통신을 한다. http://localhost:3000
            .then((res) => {
                res.data.filter((product) =>{
                    if(product.pid === pid) setProduct(product)
                })
            })
            .catch(err => console.log(err));
    },[]);
    // console.log('product ==> ',product);

    // 장바구니 추가
    const addCartItem = () => {
        // 장바구니 추가 항목 : {pid, size, count, price}
        // console.log(product.pid, size, product.price ,1);
        const cartItem = {
            "pid":product.pid,
            "size":size,
            "qty":1,
            "price":product.price
        };
        addCart(cartItem); // App.jsx의 addCart 함수 호출
    }


    return (
        <div className='content'>
        <div className='product-detail'>
            <img src={product.image} />
            <ul>
                    <li className="product-detail-title">{product.name}</li>
                    <li className="product-detail-title">{product.price}</li>
                    <li className="product-detail-subtitle">{product.info}</li>
                    <li>
                        <span className='product-detail-select1'>옵션 : </span>
                        <select className='product-detail-select2' onChange={(e) => setSize(e.target.value)}>
                                <option value="XS">XS</option>
                                <option value="S">S</option>
                                <option value="M">M</option>
                                <option value="L">L</option>
                                <option value="XL">XL</option>
                        </select>
                    </li>
                    <li>
                        <button type="button" className='product-detail-button' onClick={addCartItem}>장바구니 추가</button>
                    </li>
                </ul>
            </div>
        </div>
    );
}

