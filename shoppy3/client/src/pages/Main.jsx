import React from 'react';
import { GoSearch } from "react-icons/go";
import { BsCart } from "react-icons/bs";


export default function Main() {
    return (
        <div id="wrap">
            {/* ------------------------ header ------------------------ */}
            <header id="header">
                <div className="header_top">
                    <div className="inner">
                        <div className="exchange">
                            <strong>오늘의 환율 </strong>
                            <span>$1=1,463.3원</span>
                        </div>
                        <div className="q_menu_area">
                            <ul>
                                <li>Language</li>
                                <li>고객센터</li>
                                <li>로그인</li>
                                <li>회원가입</li>
                                <li>주문가능시간</li>
                            </ul>
                            <button>상담톡</button>
                        </div>
                    </div>
                </div>
                <div className="header_nav">
                    <div className="inner">
                        <h1>logo</h1>
                        <nav>
                            <ul>
                                <li>카테고리</li>
                                <li>브랜드</li>
                                <li>혜택</li>
                                <li>세일</li>
                                <li>랭킹</li>
                                <li>3시간전</li>
                                <li>신라부티크</li>
                            </ul>
                        </nav>
                        <div className="wrap_detail">
                            <div className="search_area">
                                <input type="text" />
                                <button><GoSearch /></button>
                            </div>
                            <div className="member">member</div>
                            <div className="cart_area"><BsCart /></div>
                        </div>
                    </div>
                </div>
            </header>
            {/* ------------------------ header ------------------------ */}
            <div className="container">
                container
            </div>
            {/* ------------------------ footer ------------------------ */}
            <footer>footer</footer>
            {/* ------------------------ footer ------------------------ */}
        </div>
    );
}

