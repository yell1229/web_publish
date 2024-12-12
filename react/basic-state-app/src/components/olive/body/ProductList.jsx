
import React,{useState, useEffect} from 'react';
import Product from './Product.jsx';

export default function ProductList({cart}) {

    let [productList,setProductList] = useState([]); // 전체상품 리스트
    let [list,setList] = useState([]); // 화면 출력용 리스트

    useEffect(() =>{
        fetch('/data/olive.json')
            .then(data => data.json())
            .then(jsonData => {
                setProductList(jsonData.list);
                setList(jsonData.list);
            })
            .catch(error => console.log('error'));
    },[]);
    
    const totalCart = (id) =>{
        // alert(`productList  ${id}`);
        cart(id); //AppOlive 의 handleCartApp 호출
    }

    const [type, setType] = useState('');
    let handleTypeChange = (event) => { // input은 event 객체를 사용가능
        // console.log(event.target.value); // {} 오브젝트 리터럴타입 (.)
        setType(event.target.value);
    }

    
    useEffect(() =>{
        //console.log(`useeffect => ${type}`);

        //productList.map(); ---> 결과 : 새로운 배열 객체 호출['<li>~~ </li>']
        if(type === 'total'){
            setList(productList);
        }else{

            //productList.filter(); ---> 결과 : 새로운 배열 객체 호출 [{item},{item}]
            const list = productList.filter((item) => { // list = [{item},{item}];
            if(type === 'sale' && item.iconSale){
                return item;
            }else if(type === 'coupon' && item.iconCoupon){
                return item;
            }else if(type === 'today' && item.iconToday){
                return item;
            }
            });
            setList(list);
        }
        
    },[type]); // 변경사항이 있을 때 useEffect가 [ 자동호출!! ] 되도록 처리.

    return (
        <>
            <div>
                <label><input type="radio" name="type" value="total" onClick={handleTypeChange} />전체</label>
                <label><input type="radio" name="type" value="sale" onClick={handleTypeChange} />세일</label>
                <label><input type="radio" name="type" value="coupon" onClick={handleTypeChange} />쿠폰</label>
                <label><input type="radio" name="type" value="today" onClick={handleTypeChange} />오늘드림</label>
            </div>
            <div className="box-wrap">
                {list && list.map( item =>
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
            </div>
        </>
    );
}

