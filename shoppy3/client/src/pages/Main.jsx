import React from 'react';
import { Link } from 'react-router-dom';
// icons
import { TfiClose } from "react-icons/tfi";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";


// components
import Header from '../components/common/Header.jsx';
import Footer from '../components/common/Footer.jsx';
import Slide from '../components/Slide.jsx';

export default function Kurly() {
    return (
        <div id="wrap">
            <div className="top_banner">
                <div className="inner">
                    <a href="">지금 가입하고,  <b>50% 할인 쿠폰</b>  받아가세요!</a>
                    <button type="button"><TfiClose /></button>
                </div>
            </div>
            {/* start of header */}
            <Header />
            {/* end of header */}

            {/* start of container_area */}
            <div className="container_area">

                {/* start slide */}
                <Slide />
                {/* end slide */}

                {/* sample ====> start 1 content */}
                <div className="cont_area">
                    <div className="tit_area">
                        <strong><a href="">✨주목! 설 선물 베스트 <MdOutlineKeyboardArrowRight className='icon' /></a></strong>
                        <span>실패 없는 설 인기 선물만 모았어요!</span>
                    </div>
                </div>
                {/* sample ====> end 1 content */}

                {/* sample ====> banner */}
                <div className="banner_area">
                    <a href=""><img src="./images/5502d5ec-27d9-40cc-8eb9-515c1de0bf6c.jpg" alt="" /></a>
                </div>
                {/* sample ====> banner */}

            </div>
            {/* end of container_area */}

            {/* start of footer */}
            <Footer />
            {/* end of footer */}

            {/* start of aside nav */}
            <aside className='ban_q_aside'>
                <a href=""><img src="./images/deliveryInfo.jpg" alt="" /></a>
                <ul>
                    <li><a href="">컬리 고객 제도</a></li>
                    <li><a href="">컬리 큐레이터</a></li>
                    <li><a href="">레시피</a></li>
                </ul>
            </aside>
            {/* end of aside nav */}
        </div>
    );
}

