import React,{useRef} from 'react';
import { Link } from 'react-router-dom';
// icons
import { TfiClose } from "react-icons/tfi";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { TfiArrowUp } from "react-icons/tfi";


// components
import Header from '../components/common/Header.jsx';
import Footer from '../components/common/Footer.jsx';
import Slide from '../components/Slide.jsx';


export default function Kurly() {
    const wrapRef = useRef(null);

    return (
        <div id="wrap" ref={wrapRef}>
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
                <div className="cont_area" style={{height:'1000px'}}>
                    <div className="tit_area">
                        <strong><a href="">✨주목! 설 선물 베스트 <MdOutlineKeyboardArrowRight className='icon' /></a></strong>
                        <span>실패 없는 설 인기 선물만 모았어요!</span>
                    </div>

                    {/* start components */}
                    <div className="product_wrap">
                        <div className="box">
                            <a href="">
                                <div className="thumb">
                                    <img src="" alt="" />
                                    <div className="ban">라이브특가</div>
                                    <div className="btm_price">최대혜택가 141,930원</div>
                                </div>
                                <div className="detail_area">
                                    <button type="button">담기</button>
                                    <div className="info_txt">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id, tempora.</div>
                                    <div className="price">
                                        <em>100,000원</em>
                                        <div><span>10%</span><strong>171,000원</strong></div>
                                    </div>
                                    <div className="add">999+</div>
                                </div>
                            </a>
                        </div>

                    </div>
                    {/* end components */}
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

            <div className="btn_top" onClick={() => wrapRef.current.scrollIntoView({ behavior: 'smooth', block: 'start'})}><TfiArrowUp /></div>
        </div>
    );
}

