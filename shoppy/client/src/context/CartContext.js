// 범위설정 프로바이더, 리턴을해서 공유받는 범위 설정이 필요

import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

// 
export const CartProvider = ({children}) => { // 프로바이더 : 범위설정
    const [cartList, setCartList] = useState([]); //비동기
    const [cartCount, setCartCount] = useState(0); //비동기
    const [totalPrice, setTotalPrice] = useState(0);

    return ( // 어떤 데이터를 리턴할것인가?
        <CartContext.Provider value={{cartList, setCartList, cartCount, setCartCount,totalPrice,setTotalPrice}}>
            {children}
        </CartContext.Provider>
    )

    {/* 
        <CartProvider>
            children
        </CartProvider> 
    */}
}
