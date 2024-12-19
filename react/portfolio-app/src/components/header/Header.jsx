import React from 'react';
import MenuList from './MenuList.jsx';

export default function Header() {
    return (
        <header class="header">
            <div class="header__logo">
                <img class="header__logo__img" src="/images/favicon.ico" alt="logo" />
                <h1 class="header__logo__title">Judy</h1>
            </div>
            <MenuList />
            <button id="menu_toggle" class="header__toggle" aria-label="navigation menu toggle">
                <i class="fa-solid fa-bars"></i>
            </button>
        </header>
    );
}

