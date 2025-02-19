import React,{ useContext } from 'react';
import {OrderContext} from '../context/OrderContext.js';
import {useCart} from '../hooks/useCart.js';
import axios from 'axios';

// useCntext에 관리되는 객체들의 CRUD하는 함수를 만든다.
export function useOrder(){
    const {calculateTotalPrice} = useCart();
    const {orderList, setOrderList, orderPrice, setOrderPrice, member, setMember} = useContext(OrderContext);

    // 전체 주문정보 가져오기
    const getOrderList = async () => {
        const id = localStorage.getItem('userId');
        const result = await axios.post('http://localhost:9000/order/all',{'id':id});
        console.log('result.data--->',result.data);
        
        setOrderList(result.data);
        setMember(result.data[0]);
        calculateTotalPrice(result.data);
    }

    return{ getOrderList };
}