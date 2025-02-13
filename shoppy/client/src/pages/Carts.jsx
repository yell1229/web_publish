import React,{useState, useEffect,useContext} from 'react';
import axios from 'axios';
import { AuthContext } from '../auth/AuthContext.js';
import { useNavigate } from 'react-router-dom';


export default function Carts() {
    const {isLoggedIn, setIsLoggedIn} = useContext(AuthContext);
    const navigate = useNavigate();
    

    /** 장바구니 아이템 저장 : 배열 */
    const [cartList, setCartList] = useState(()=> {
        try {
            const initCartList = localStorage.getItem("cartItems");
            return initCartList ? JSON.parse(initCartList) : [];
        } catch (error) {
            console.error("로컬스토리지 JSON 파싱 오류:", error);
            return []; // 오류 발생 시 빈 배열 반환
        }
    });

    //pids 배열 생성 cartItems의 pid 값을 pids 배열에 추가
    const pids = cartList && cartList.map(item => item.pid);  // [5, 11]  

    

    useEffect(()=>{
        if(pids.length > 0){
            axios
            .post("http://localhost:9000/product/cartItem", {"pids" : pids})
            .then(res =>{
                //cartItems에 res.data의 정보 추가
                const updateCartList = cartList.map((item, i) => {
                    const filterItem = res.data.find((ritem)=> ritem.pid === item.pid); 
                    return filterItem ? 
                        {
                            ...item, 
                            "pname": filterItem.pname,
                            "price": filterItem.price,
                            "description": filterItem.description,
                            "image": filterItem.image
                        } 
                        : item
                });
                setCartList(updateCartList);
            })
            .catch(error => console.log(error));
        }// if
    }, []);
    
    // console.log('cartItems -->>',cartItems);

    // 주문하기 이벤트
    const handleOrder = () => {
        // 1. 로그인 체크
        // console.log('isLoggedIn ==>>',isLoggedIn);
        if(isLoggedIn){
            //  로그인 상태 --> DB연동 후 저장
            //console.log('isLoggedIn',isLoggedIn);
            // 전달되는 모양 {'id':'hongs', 'cartList':[....]}
            const id = localStorage.getItem('userId');
            let formData = { "id":id, 'cartList':cartList };
            axios.post('http://localhost:9000/cart/add',formData)
                    .then(res => {
                       // console.log('check');
                        
                        if(res.data.result_rows){ // 0이 아니면 true
                            localStorage.removeItem('cartItems');
                            alert('장바구니에 추가되었습니다.')
                        } 
                    })
                    .catch(err => console.log(err));
            
        }else{
            //  로그아웃 상태 --> 로그인 ->> DB연동 후 저장
            // alert('로그인이 필요한 서비스입니다.');
            // const select = window.confirm('로그인이 필요한 서비스입니다.\n 로그인 하시겠습니까?');
            //if(select) navigate('/login');
            window.confirm('로그인이 필요한 서비스입니다.\n 로그인 하시겠습니까?') && navigate('/login');
        }
        
        
        
    }
    const keepAddCart = (pid) =>{
        console.log('keep pid', pid);
        
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
                    <th></th>
                </tr>
                {
                    cartList && cartList.map((item) => 
                        <tr>
                            <td>{item.pid}</td>
                            <td>{item.pname}</td>
                            <td>{item.size}</td>
                            <td>{item.qty}</td>
                            <td>{item.description}</td>
                            <td>
                                <img src={item.image} alt="" style={{width:"100px"}}/>
                            </td>           
                            <td><button onClick={() =>{keepAddCart(item.pid)}}>계속담아두기</button></td>                 
                        </tr>
                    )
                }
            </table>
            <button onClick={handleOrder}>주문하기</button>
        </div>
    );
}

