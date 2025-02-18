import React,{useContext, useEffect} from "react";
import "../styles/cart.css";
import { AuthContext } from "../auth/AuthContext";
import { CartContext } from "../context/CartContext";
import axios from 'axios';
import { useNavigate } from "react-router-dom";



export default function Carts() {
    const navigate = useNavigate();
    const {isLoggedIn, setIsLoggedIn} = useContext(AuthContext);
    const{cartList, setCartList} =useContext(CartContext);

    useEffect(() => {
        if(isLoggedIn){
            // DB에가서 해당 id에 맞는 데이터를 가져와서 뿌린다.
            const id = localStorage.getItem('userId');
            axios.post('http://localhost:9000/cart/items',{'id':id})
                .then(res => {
                    console.log('list ====>', res.data);
                    setCartList(res.data);
                })
                .catch(err => console.log(err));
        }else{
            const select = window.confirm("로그인 서비스가 필요합니다. \n로그인 하시겠습니까?");
			if(select){
				navigate('/login');
			}
            //setIsLoggedIn([]);
        }
    },[isLoggedIn]);

    console.log('cartList------>', cartList);
    

    return (
        <div className="cart-container">
        <h2 className="cart-header"> 장바구니</h2>
            {
                cartList && cartList.map((item)=>
                    <div className="cart-item" >
                        <img src={item.image} alt="" />
                        <div className="cart-item-details">
                            <p className="cart-item-title">{item.pname}</p>
                            <p className="cart-item-title">{item.size}</p> 
                            <p className="cart-item-price">
                            {item.price}원
                            </p>
                        </div>
                        <div className="cart-quantity">
                            <button >
                            -
                            </button>
                            <input type="text" value={item.qty} readOnly />
                            <button >
                            +
                            </button>
                        </div>
                        <button
                            className="cart-remove"
                        >
                            🗑
                        </button>
                    </div> 
                )
            }
                     
                    <div className="cart-actions">                       
                        <button>주문하기</button>
                    </div>       
        </div>
    );
    }
