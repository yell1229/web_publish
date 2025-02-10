import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header>
            <h1>Header</h1>
            <ul>
                <li><Link to="/member/login">로그인</Link></li>
                <li><Link to="/products/new">상품등록</Link></li>
            </ul>
        </header>
    );
}

