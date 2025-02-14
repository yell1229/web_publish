import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

// 로그인 여부
export const AuthPrrovider = ({children}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(()=> { // 기본값을 boolean 값이 아니라,localStorage에서 가져온다.(비동기 : try~catch)
        try {
            const token = localStorage.getItem("token");
            return token ? true : false;
        } catch (error) {
            console.error("로컬스토리지 JSON 파싱 오류:", error);
            return false; // 오류 발생 시 빈 배열 반환
        }
    });

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
