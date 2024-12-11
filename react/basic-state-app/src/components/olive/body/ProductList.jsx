
import React,{useState, useEffect} from 'react';
import Product from './Product.jsx';

export default function ProductList({cart}) {

    let [productList,setProductList] = useState([]);

    useEffect(() =>{
        fetch('/data/olive.json')
            .then(data => data.json())
            .then(jsonData => setProductList(jsonData.list))
            .catch(error => console.log('error'));
    });
    
    const totalCart = (id) =>{
        // alert(`productList  ${id}`);
        cart(id); //AppOlive 의 handleCartApp 호출
    }

    return (
        <>
            {productList && productList.map( item =>
                <div className="box">
                    <Product 
                        id={item.id}
                        totalCart = {totalCart}
                        img={item.img} 
                        title={item.title} 
                        info={item.info} 
                        price={item.price} 
                        icon={item.icon} 
                        isbest={item.isbest}
                        iconSale={item.iconSale} 
                        iconCoupon={item.iconCoupon} 
                        iconToday={item.iconToday}
                        isSolidout={item.isSolidout} />
                </div>
            )}
        </>
    );
}

