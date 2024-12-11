import React from 'react';
import AppHeader from './AppHeader.jsx';
import AppContent from './AppContent.jsx';
import NavList from './header/NavList.jsx';
import ImgBoxList from './content/ImgBoxList.jsx';
import '../olive/Olive.css';

export default function AppShopping() {
    return (
        <div>
            <AppHeader>
                <h1><img src="https://static.oliveyoung.co.kr/pc-static-root/image/comm/h1_logo.png" alt="" /></h1>
                <NavList />
            </AppHeader>
            <AppContent>
                <ImgBoxList />
            </AppContent>
        </div>
    );
}

