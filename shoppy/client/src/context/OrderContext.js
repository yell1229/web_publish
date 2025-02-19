// 범위설정 프로바이더, 리턴을해서 공유받는 범위 설정이 필요

import { createContext, useState, useEffect } from "react";

export const OrderContext = createContext();

// 
export const OrderProvider = ({children}) => { // 프로바이더 : 범위설정
    const [orderList, setOrderList] = useState([]);
    const [orderPrice, setOrderPrice] = useState(0);
    const [member, setMember] = useState({});


    return ( // 어떤 데이터를 리턴할것인가?
        <OrderContext.Provider value={{orderList, setOrderList, orderPrice, setOrderPrice,member, setMember}}>
            {children}
        </OrderContext.Provider>
    )

}
