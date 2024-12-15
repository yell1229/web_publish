import React from 'react';
import MenuList from './header/MenuList.jsx';
import Login from './header/Login.jsx';

export default function Header() {
    return (
        <header>
            <Login />
            <MenuList />
        </header>
    );
}

