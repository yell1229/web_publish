
import React,{useState, useEffect} from 'react';
import ImgBox from './ImgBox.jsx';

export default function ImgBoxList() {

    let [productList,setProductList] = useState([]);

    let checkCart = () => {
        alert('imgboxKist 받음')
    }

    useEffect(() => {
        fetch('/data/olive.json')
            .then(data=> data.json())
            .then(jsonData => setProductList(jsonData.list))
            .catch(error => console.log('error'));
    },[]);

    return (
        <div className="body">
            {productList && productList.map( item =>
                <div className="box">
                    <ImgBox 
                        cartcheck={checkCart}
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
        </div>
    );
}

