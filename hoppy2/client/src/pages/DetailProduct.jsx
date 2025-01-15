import React,{useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function DetailProduct({addCart}) {
    const {pid} = useParams();
    const [product, setProduct] = useState({});
    const [size,setSize] = useState('XS');

    useEffect(() => {
        axios.get('/data/product.json') // 네트웍 통신을 한다. http://localhost:3000
            .then((res) => {
                res.data.filter((product) =>{
                    if(product.pid === pid) setProduct(product)
                })
            })
            .catch(err => console.log(err));
    },[]);
    
    const addCartItem = () => {
        // pid, price, size, num:1
        const cartItem = {
            "image":product.image,
            "pid":product.pid,
            "price":product.price,
            "size": size,
            "qty":1
        };
        
        addCart(cartItem);
    }

    return (
        <div className='content'>
        <div className='product-detail'>
            <img src={product.image} />
            <ul>
                    <li className="product-detail-title">{product.name}</li>
                    <li className="product-detail-title">{`${parseInt(product.price).toLocaleString()}원`}</li>
                    <li className="product-detail-subtitle">{product.info}</li>
                    <li>
                        <span className='product-detail-select1'>옵션 : </span>
                        <select className='product-detail-select2' onChange={(e) =>{setSize(e.target.value)}}>
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

