import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

// 로그인 여부
export const AuthPrrovider = ({children}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("token");
        setIsLoggedIn(!!token);
    },[]);

    return (
        <AuthContext.Provider value={{isLoggedIn, setIsLoggedIn}}>
            {children}
        </AuthContext.Provider>
    )

    {/* 
        <AuthPrrovider>
            children
        </AuthPrrovider> 
    */}
}
