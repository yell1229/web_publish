import React,{useContext} from 'react';
import {CartContext} from '../context/CartContext.js';
import axios from 'axios';

export function useCart(){ // 커스텀 훅
    const {cartList, setCartList, cartCount, setCartCount, totalPrice,setTotalPrice} = useContext(CartContext);
    
    // CRUD 함수생성 - 비동기 로직 & useContext가 관리하는 변수는 await ~ async룰 통해 순서를 보장한다.

    // 장바구니 전체 리스트를 조회
    const getCartList = async () => {
        const id = localStorage.getItem('userId');
        const result = await axios.post('http://localhost:9000/cart/items',{'id':id});
        setCartCount(result.data.length);
        setCartList(result.data);
        calculateTotalPrice(result.data);
    }

    // 장바구니에 새로운 아이템 DB 저장
    const saveToCartList = async (formData) => {
        const result = await axios.post('http://localhost:9000/cart/add',formData); // res.data로 결과를 받아야됨.
        // if(result.result_rows){
        //    //  alert('장바구니에 추가되었습니다.'); // 알림은 브라우저 화면과 연결된 jsx에서 사용하도록한다.
        //    // DB연동 후 cartList 가져와야함.
        //    getCartList();
        // }
        if(result.data.result_rows){
            setCartCount(cartCount +1);
            getCartList();
       }

        return result.data.result_rows; 
    }

    // 장바구니에 기존에 있으면 아이템 수량 업데이트
    const updateCartList = async (cid, type) => {
       const result = await axios.put('http://localhost:9000/cart/updateQty',{'cid':cid,'type':type}); //{'result_rows' : result.affectedRows}
       result.data.result_rows && getCartList();
       return result.data.result_rows;
    }

    // 장바구니 전체 카운트를 조회
    const getCount = async () => {
        const id = localStorage.getItem('userId');
        const result = await axios.post('http://localhost:9000/cart/count',{"id": id});
        setCartCount(result.data.count);
        return result.data.count;
    }

    // 로그아웃 시 장바구니 초기화 0
    const setCount = (value) => {
        setCartCount(value);
    }
 
    // 장바구니 아이템 삭제
    const deleteCartItem = async (cid) => {
        const result = await axios.delete('http://localhost:9000/cart/deleteITem',{data :{'cid':cid}});
        result.data.result_rows && getCartList();
    }

    // 장바구니 총 주문금액 계산하기
    const calculateTotalPrice = (cartList) => { // 내부에서만 사용하면 리턴할 필요 없음.
        
        const totalPrice = cartList.reduce((sum, item) => sum + item.price * item.qty, 0);
        console.log('check totalPrice', totalPrice);
        
        setTotalPrice(totalPrice);
    }

    return { saveToCartList , updateCartList, getCartList, getCount, setCount, deleteCartItem ,calculateTotalPrice};
}