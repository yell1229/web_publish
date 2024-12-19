import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom'; // 대문자로 시작. 컴포넌트 -> 화면에 적용
import Home from './Home.jsx';
import About from './About.jsx';
import Layout from './Layout.jsx';
import Support from './Support.jsx';
import Login from '../form/Login.jsx';
import SignUp from '../form/SignUp.jsx';
import AppBestSeller from '../yes24/AppBestSeller.jsx';

export default function AppRouter() {
    return (
        <>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />} >
                    <Route index element={<Home />} />
                    <Route path="login" element={<Login />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="about" element={<About />} />  {/* 컴포넌트와 패스의 이름이 동일하지 않아도 된다. */}
                    <Route path="/support" element={<Support />} />  
                    <Route path="/bestseller" element={<AppBestSeller />} />  
                </Route>
            </Routes>
        </BrowserRouter>
        </>
    );
}

