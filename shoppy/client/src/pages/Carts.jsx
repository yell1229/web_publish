import React,{useState, useEffect} from 'react';
import axios from 'axios';


export default function Carts() {
    // localStorage에 담긴 cartItems의 배열 객체 출력
    // 문자를 파스를 통해 객체로 가져온다.
    const [cartItems,setCartItems] = useState(JSON.parse(localStorage.getItem("cartItems"))) ; // localStorage 문자열을 객체로 만든다.
    // console.log('cartItems-->>', cartItems[0].pid); // 객체로 나오는지 확인 문자는 .pid 적용 안됨.
    // pid값을 가지고 있는 pids 배열 생성 : cartItems의 pid 값을 pids 배열에 추가

    // 방법1. 
    // const pids = [];
    // cartItems && cartItems.map(item => pids.push(item.pid));

    // 방법2. map 리턴은 [] 생성
    const pids = cartItems && cartItems.map( item => item.pid );
    // console.log('pids --->', pids);

    useEffect(()=>{
        //if(pids.length > 0){
            // axios를 이용하여 DB연동
            // axios는 리엑트가 관리하지 않기 때문에, useEffect없이 사용하면 지속적인 통신으로 무한루프.
            axios.post('http://localhost:9000/product/cartItem', {"pids":pids})
            .then(res => {
                // cartItems에 res.data의 정보 추가
                const updateCartItems = cartItems.map((item, i) => 
                                            item.pid === res.data[i].pid &&
                                                {   ...item, 
                                                    "pname":res.data[i].pname, 
                                                    "price":res.data[i].price , 
                                                    "description":res.data[i].description ,
                                                    "image":res.data[i].image 
                                                } // 기존 item에 내용 추가됨
                                            //: item
                                        ) // return [{pid,size,qty,pname,price,description,image}]
                setCartItems(updateCartItems);
            })
            .catch(err => console.log(err));
      // }
        
    },[]);
    
    console.log('cartItems -->>',cartItems);
    
    return (
        <div className='content'>
            <h1>Carts</h1>
            <table border="1" width="60%">
                <tr>
                    <th>pid</th>
                    <th></th>
                    <th></th>
                    <th>size</th>
                    <th>qty</th>
                    <th>price</th>
                </tr>
            {
                cartItems && cartItems.map((item) => 
                    <tr>
                        <td>{item.pid}</td>
                        <td><img src={item.image} alt="" style={{width:'100px'}}/></td>
                        <td>{item.description}</td>
                        <td>{item.size}</td>
                        <td>{item.qty}</td>
                        <td>{item.price}</td>
                    </tr>
                )
            }
            </table>
        </div>
    );
}

