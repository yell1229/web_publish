// 범위설정 프로바이더, 리턴을해서 공유받는 범위 설정이 필요

import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

// 
export const CartPrrovider = ({children}) => { // 프로바이더 : 범위설정
    

    return ( // 어떤 데이터를 리턴할것인가?
        <CartContext.Provider value={{}}>
            {children}
        </CartContext.Provider>
    )

    {/* 
        <AuthPrrovider>
            children
        </AuthPrrovider> 
    */}
}