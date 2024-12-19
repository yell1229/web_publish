import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout.jsx';
import AppAirbnb from'../airbnb/AppAirbnb.jsx';
import AppAladin from '../aladin/AppAladin.jsx';
import Avatar from '../avatar/Avatar.jsx';
import AppBookStroe from '../bookstore/AppBookStore.jsx';


export default function AppRouter2() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}> {/** layout 관련 컴포넌트 */}
                        <Route path="/" element={<Home />} />
                        <Route path="airbnb" element={<AppAirbnb />} />
                        <Route path="aladin" element={<AppAladin />} />
                        <Route path="avatar" element={<Avatar />} />
                        <Route path="bookstore" element={<AppBookStroe />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

function Home(){
    return (
        <h1>Home</h1>
    );
}