import React, { useState, useEffect , useRef} from "react";
import { useParams } from "react-router-dom";
import { PiGiftThin } from "react-icons/pi";

import axios from "axios";
import Detail from "../components/product/review/Review.jsx";
import Qna from './qna/Qna.jsx';
import ReturnDelivery from '../components/product/delivery/ReturnDelivery.jsx';
import DetailProductList from '../components/product/productDetail/DetailProductList.jsx';

export default function DetailProduct({ addCart }) {
	const refs = {
		"tabNavRef":useRef(null),
		"tabCont1Ref":useRef(null),
		"tabCont2Ref":useRef(null),
		// "tabCont3Ref":useRef(null),
		"tabCont4Ref":useRef(null)
	};
	const navRefs = {
		"nav1Ref":useRef(null),
		"nav2Ref":useRef(null),
		"nav3Ref":useRef(null),
		"nav4Ref":useRef(null)
	};
	const { pid } = useParams();
	const [product, setProduct] = useState({});
	const [size, setSize] = useState("XS");
	const resetNavCss = () => {
		Object.entries(navRefs).map((nav) => 
			nav[1].current.classList.remove('on')
		)
	};
	useEffect(() => {
		axios
		.get("/data/product.json") // http://localhost:3000/data/products.json
		.then((res) => {
			res.data.filter((product) => {
			if (product.pid === pid) setProduct(product);
			});
		})
		.catch((error) => console.log(error));

		// nav top 위치
		const topList=[];

		// setTimeout(() => {
		// 	if (refs.tabNavRef.current) {
		// 	  const rect = refs.tabNavRef.current.getBoundingClientRect();
		// 	  navTop = rect.top + window.scrollY; // 스크롤 위치 계산
		// 	  console.log('스크롤 위치:', navTop);  // 확인
		// 	}
		//   }, 500);
		setTimeout(() => {
			Object.values(refs).forEach((item,idx) => {
				if (item.current) {
					const rect = item.current.getBoundingClientRect();
					topList[idx] = (rect.top + window.scrollY) - 62; // 스크롤 위치 계산
				}
			})
		}, 500);

		const handleNavScroll = () => {
			if(window.scrollY >= topList[0]){
				refs.tabNavRef.current.classList.add('fixed');
			}else{
				refs.tabNavRef.current.classList.remove('fixed');
			}

			if(window.scrollY >= topList[1] && window.scrollY < topList[2]){
				resetNavCss();
				navRefs.nav1Ref.current.classList.add('on');
			}else if(window.scrollY >= topList[2] && window.scrollY < topList[3]){
				resetNavCss();
				navRefs.nav2Ref.current.classList.add('on');
			}else if(window.scrollY >= topList[3] && window.scrollY < topList[4]){
				resetNavCss();
				navRefs.nav3Ref.current.classList.add('on');
			}else if(window.scrollY >= topList[4]){
				resetNavCss();
				navRefs.nav4Ref.current.classList.add('on');
			}
		}
		window.addEventListener('scroll',handleNavScroll);
	}, []);
console.log('product',product);

	//장바구니 추가 버튼 이벤트
	const addCartItem = () => {
		//장바구니 추가 항목 : { pid, size, count, price }
		// alert(`${pid} --> 장바구니 추가 완료!`);
		// console.log(product.pid, product.price, size, 1);
		const cartItem = {
		pid: product.pid,
		size: size,
		qty: 1,
		price: product.price,
		};
		addCart(cartItem); // App.js의 addCart 함수 호출
	};

	// tab 버튼을 클릭하면, 해당 컨텐츠로 스크롤 이동한다.
	const hancleClickScroll = (btn, targetRef) => {
		resetNavCss();
		btn.current.classList.add('on');
		targetRef.current.scrollIntoView({ behavior: 'smooth', block: 'start'});
	}
	
	
	return (
		<div className="content">
		<div className="product-detail-top">
			<div className="product-detail-image-top">
			<img src={product.image} />
			<ul className="product-detail-image-top-list">
				<li>
				<img src={product.image} alt="" />
				</li>
				<li>
				<img src={product.image} alt="" />
				</li>
				<li>
				<img src={product.image} alt="" />
				</li>
			</ul>
			</div>

			<ul className="product-detail-info-top">
			<li className="product-detail-title">{product.name}</li>
			<li className="product-detail-title">{`${parseInt(
				product.price
			).toLocaleString()}원`}</li>
			<li className="product-detail-subtitle">{product.info}</li>
			<li>
				<p className="product-detail-box">신규회원, 무이자 할부 등</p>
			</li>
			<li className="flex">
				<label className="product-detail-label">사이즈 </label>
				<select
				className="product-detail-select2"
				onChange={(e) => setSize(e.target.value)}
				>
				<option value="XS">XS</option>
				<option value="S">S</option>
				<option value="M">M</option>
				<option value="L">L</option>
				<option value="XL">XL</option>
				</select>
			</li>
			<li className="flex">
				<button type="button" className="product-detail-button order">
				바로 구매
				</button>
				<button
				type="button"
				className="product-detail-button cart"
				onClick={addCartItem}
				>
				쇼핑백 담기
				</button>
				<div type="button" className="gift">
				<PiGiftThin />
				<div className="gift-span">선물하기</div>
				</div>
			</li>
			<li>
				<ul className="product-detail-summary-info">
				<li>상품 요약 정보</li>
				</ul>
			</li>
			</ul>
		</div>

		{/* DETAIL / REVIEW / Q&A / RETURN & DELIVERY  */}
		<div className="product-detail-tab">
			{/* start cont */}
			<div className="tab_content_area">
				<div style={{height:'62px'}}>
				<div className="tab_nav" ref={refs.tabNavRef}>
					<ul>
						<li ref={navRefs.nav1Ref} onClick={() => hancleClickScroll(navRefs.nav1Ref , refs.tabCont1Ref)} className="on">DETAIL</li>
						<li ref={navRefs.nav2Ref} onClick={() => hancleClickScroll(navRefs.nav2Ref , refs.tabCont2Ref)}>REVIEW</li>
						<li ref={navRefs.nav3Ref} onClick={() => hancleClickScroll(navRefs.nav3Ref , refs.tabCont3Ref)}>Q&A</li>
						<li ref={navRefs.nav4Ref} onClick={() => hancleClickScroll(navRefs.nav4Ref , refs.tabCont4Ref)}>RETURN & DELIVERY</li>
					</ul>
				</div>
				</div>
				<div className="cont_tab_wrap" ref={refs.tabCont1Ref}><DetailProductList /></div>
				<div className="cont_tab_wrap" ref={refs.tabCont2Ref}><Detail /></div>
				{/* <div className="cont_tab_wrap" ref={refs.tabCont3Ref}><Qna /></div> */}
				<div className="cont_tab_wrap" ref={refs.tabCont4Ref}><ReturnDelivery /></div>
			</div>
			{/* end cont */}
		</div>
		</div>
	);
	}
	