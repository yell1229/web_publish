import React,{useContext, useEffect,useState} from 'react';
import { useSearchParams } from 'react-router-dom';
import { OrderContext } from "../context/OrderContext.js";
import { useOrder } from "../hooks/useOrder.js";
import axios from 'axios';


export default function PaymentSuccess() {
    const {getOrderList, saveToOrder} = useOrder();
    const {orderList} = useContext(OrderContext);
    const [searchParams] = useSearchParams();
    const pg_token = searchParams.get('pg_token');
    const tid = localStorage.getItem('tid');
    const [isRun, setIsRun] = useState(false);
    console.log('pg_token',pg_token);
    console.log('tid',tid);

    // pg_token & tid가 존재하면 shoppy_order 테이블에 주문내역을 insert, shoppy_cart는 delete
    // oid(PK), pid(상품 아이디)(fk), id(fk), 주문날짜, total_price, 주문넘버(tid), 결제방법, size, 수량
    
    useEffect(() =>{
        const tid = localStorage.getItem('tid')
        tid && setIsRun(true);

        const fetchOrderList = async() =>{
            const orderList = await getOrderList();
            console.log('orderList',orderList);
            
            if(orderList.length > 0){
                const totalPrice = getOrderList.reduce((sum, item) => sum + item.price * item.qty ,0);
            
                if(pg_token && tid ){
                    // 1. 직접 axios를 통한 DB insert => orderList, total_price
                    // 2. useOrder 커스텀 훅을 이용한 DB insert 작업
                    saveToOrder(orderList, totalPrice , tid, "kakaopay");
                }
            }
        }

        if(isRun ) { fetchOrderList(); }

    },[isRun]);
    // console.log('total_price -->',getOrderList.reduce((sum, item) => sum +item.price * item.qty ,0));
    // console.log('Payment success orderList -->',orderList);

    

    return (
        <div>
           { pg_token && <h2>결제가 완료되었습니다.</h2> } 
        </div>
    );
}

