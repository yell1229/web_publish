
import React from 'react';
import Nav from './Nav.jsx';

export default function NavList() {
    let menuList = [
        {"menu" :"회원가입"},
        {"menu" :"로그인"},
        {"menu" :"장바구니"},
        {"menu" :"주문배송"},
        {"menu" :"고객센터"},
        {"menu" :"올영매장"},
        {"menu" :"Global"}
    ]
    return (
        <ul className="top-nav">
            {
                menuList.map( obj => 
                    <li><Nav menu={obj.menu} /></li>
                )
            }
        </ul>
    );
}

