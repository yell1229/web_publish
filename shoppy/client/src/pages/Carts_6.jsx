import React,{useContext, useEffect,useRef} from "react";
import "../styles/cart.css";
import { AuthContext } from "../auth/AuthContext";
import { CartContext } from "../context/CartContext";
import { useNavigate,Link } from "react-router-dom";
import { useCart } from "../hooks/useCart.js";
import axios from 'axios';


export default function Carts() {
    const {getCartList, updateCartList, deleteCartItem} = useCart();
    const navigate = useNavigate();
    const {isLoggedIn, setIsLoggedIn} = useContext(AuthContext);
    const{cartList, setCartList, cartCount, totalPrice} =useContext(CartContext);
    const hasCheckedLogin = useRef(false); //브라우저에 저장되는 기본 값

    useEffect(() => {
        if(hasCheckedLogin.current) return; // 로그인 상태면 하단내용 무시. -> 리턴하여 빠져나옴.
            hasCheckedLogin.current = true;

        if(isLoggedIn){
            getCartList();
        }else{
            const select = window.confirm("로그인 서비스가 필요합니다. \n로그인 하시겠습니까?");
			(select) ? navigate('/login') : navigate('/'); 
            setIsLoggedIn([]);
        }
    },[isLoggedIn]);
    
    // 수량 업데이트
    const handleQtyUpdate = (cid, type) => {
        const result = updateCartList(cid, type);
        console.log(type, 'result::>>>', result);
        
    }

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
                            <button onClick={() => handleQtyUpdate(item.cid, 'decrease')}>
                            -
                            </button>
                            <input type="text" value={item.qty} readOnly />
                            <button onClick={() => handleQtyUpdate(item.cid, 'increase')}>
                            +
                            </button>
                        </div>
                        <button className="cart-remove" onClick={() => deleteCartItem(item.cid)}>
                            🗑
                        </button>
                    </div> 
                )
            }
            {/* 주문버튼 출력 시작 */}
            {cartCount ? (
            <>
                <div className="cart-summary">
                <h3>주문 예상 금액</h3>
                <div className="cart-summary-sub">
                    <p className="cart-total">
                    <label>총 상품가격 :</label>
                    ; <span>{totalPrice.toLocaleString()}원</span>
                    </p>
                    <p className="cart-total">
                    <label>총 할인 :</label>
                    <span>-0원</span>
                    </p>
                    <p className="cart-total">
                    <label>총 배송비 :</label>
                    <span>+0원</span>{" "}
                    </p>
                </div>
                <p className="cart-total2">
                    <label>총 금액 :</label>
                    ; <span>{totalPrice.toLocaleString()}원</span>
                </p>
                <button className="checkout-btn">결제하기</button>
                </div>
                <div className="cart-actions">
                <Link to="/checkout">
                    <button>주문하기</button>
                </Link>
                </div>
            </>
            ) : (
            <div>
                <p>
                장바구니에 담은 상품이 없습니다. &nbsp;&nbsp;&nbsp;&nbsp;
                <Link to="/all">상품보러 가기</Link> <br />
                <br />
                </p>
                <img
                src="https://plus.unsplash.com/premium_photo-1683758342885-7acf321f5d53?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fCVFQyU5RSVBNSVFQiVCMCU5NCVFQSVCNSVBQyVFQiU4QiU4OHxlbnwwfHwwfHx8MA%3D%3D"
                alt=""
                />
            </div>
            )}
            {/* 주문버튼 출력 종료 */}
                     
            {/* <div className="cart-actions">                       
                <button>주문하기</button>
            </div>        */}
        </div>
    );
    }
