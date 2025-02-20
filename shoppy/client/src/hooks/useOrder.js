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
        calculateTotalPrice('orderList -------------------------->>',result.data);

        return result.data;
    }

    const saveToOrder = async(orderList, totalPrice, tid, type) =>{
        //getOrderList : 비동기 안에 비동기는 넣을 수 없다.
        console.log('orderList',orderList);
        console.log('orderPrice',orderPrice);
        const id = localStorage.getItem('userId');
        const formData = {
            "id": id,
            "tid": tid,
            "type":type,
            "totalPrice":totalPrice,
            "orderList": orderList

        };

        const result = await axios.post('http://localhost:9000/order/add',{'id':id});
        console.log('result.data--->',result.data);
        
        // setOrderList(result.data);
        // setMember(result.data[0]);
    }

    return{ getOrderList, saveToOrder };
}