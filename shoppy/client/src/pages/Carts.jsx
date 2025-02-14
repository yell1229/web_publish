import React,{useState, useEffect,useContext} from 'react';
import axios from 'axios';
import { AuthContext } from '../auth/AuthContext.js';
import { useNavigate } from 'react-router-dom';


export default function Carts({refreshStorage}) {
    const {isLoggedIn, setIsLoggedIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const [cartList, setCartList] = useState([]);

    useEffect(() => {
        // 페이지 접속 시 반드시 실행해야 한다. ->> useEffect
        if(isLoggedIn){
            // DB - shopppy_cart에서 가져옴
            console.log('DB');
            const id = localStorage.getItem('userId');
            axios.post('http://localhost:9000/cart/items',{'id':id})// 전체정보를 가져오기 때문에{}값 필요없음.
                    .then(res => setCartList(res.data) )
                    .catch(err => console.log(err));
        }else{
            //localStorage에서 가져옴 ->> 주문하기 ->> 로그인 ->> DB - shopppy_cart에서 가져옴
            console.log('localStorage');
            addCartList();
            // const items = localStorage.getItem("cartItems");
            // setCartList([...items]); // 비동기라서 빈 값이 계속 추가된다.
        }
    },[isLoggedIn]);  // 로그인 정보가 바뀔때마다 실행

    // 로컬스토리지 데이터  ->> cartList 추가

    const addCartList = () => {
        const items = localStorage.getItem("cartItems");
        setTimeout(() => {setCartList([...JSON.parse(items)])},0); // 비동기라서 빈 값이 계속 추가된다. 비동기 함수로 감싸준다.
    } 
    

    return (
        <div className='content'>
            <h1>Carts</h1>
            <table border="1" width="60%">
                <tr>
                    <th>pid</th>
                    <th></th>
                    <th>size</th>
                    <th>qty</th>
                    <th>description</th>
                    <th>image</th>
                    {
                        isLoggedIn &&
                        <>
                        <th>배송지 주소</th>
                        {/* <th></th>
                        <th></th>
                        <th></th> */}
                        </>
                    }
                </tr>
                {
                    cartList && cartList.map((item) => 
                        <tr>
                            <td>{item.pid}</td>
                            <td>{item.pname}</td>
                            <td>{item.size}</td>
                            <td>{item.qty}</td>
                            <td>{item.info}</td>
                            <td>
                                <img src={item.image} alt="" style={{width:"100px"}}/>
                            </td>       
                            { isLoggedIn && <td>{item.zipcode}/{item.address}</td> } 
                            {/* <td><button onClick={() => handleOrder("each", item.pid , item.size) }>계속담아두기</button></td>                  */}
                        </tr>
                    )
                }
            </table>

            {/* <button onClick={() => handleOrder("all")}>주문하기</button> */}
            <button >주문하기</button>
        </div>
    );
}

