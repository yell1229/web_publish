import React from 'react';
import { BiSolidDownArrow } from "react-icons/bi";
import { BiSearch } from "react-icons/bi";
import { HiOutlineMapPin } from "react-icons/hi2";
import { GoHeart } from "react-icons/go";
import { BsCart2 } from "react-icons/bs";
import { HiOutlineMenu } from "react-icons/hi";

export default function Header() {
    return (
        <header id="header">
                <div className="top_btns">
                    <div className="inner">
                        <ul className="top_btns">
                            <li>회원가입</li>   
                            <li>로그인</li>   
                            <li>고객센터 <BiSolidDownArrow className="icon" />
                                <div className="sub_list">
                                    <ul>
                                        <li><a href="">공지사항</a></li>
                                        <li><a href="">자주하는 질문</a></li>
                                        <li><a href="">1:1 문의</a></li>
                                        <li><a href="">대량주문 문의</a></li>
                                    </ul>
                                </div>
                            </li>   
                        </ul>
                    </div>
                </div>
                <div className="header_top">
                    <h1><img src="./images/logo.svg" alt="Kurly" /> <strong>마켓컬리</strong></h1>
                    <div className="input_area">
                        <input type="text" placeholder="검색어를 입력해주세요" />
                        <button type="button"><BiSearch className="icon" /></button>
                    </div>
                    <div className="q_btns">
                        <div className="search_addr"><HiOutlineMapPin /></div>
                        <div className="heart"><GoHeart /></div>
                        <div className="cart"><BsCart2 /></div>
                    </div>
                </div>
                <div className="nav_area">
                    <div className="inner">
                        <div className="category"><a href=""><HiOutlineMenu  className='icon'/>카테고리</a></div>
                        <nav>
                            <ul>
                                <li><a href="">신상품</a></li>
                                <li><a href="">베스트</a></li>
                                <li><a href="">알뜰쇼핑</a></li>
                                <li><a href="">특가/혜택</a></li>
                            </ul>
                        </nav>
                        <div className="btn_delivery"><span>샛별·하루</span> 배송안내</div>
                    </div>
                </div>
            </header>
    );
}

