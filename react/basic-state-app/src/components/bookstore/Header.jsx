import React from 'react';
import MenuList from './header/MenuList.jsx';
import Login from './header/Login.jsx';

export default function Header({pass}) {
    return (
        <header>
            <Login />
            <MenuList cartAdd={pass}/>
        </header>
    );
}

