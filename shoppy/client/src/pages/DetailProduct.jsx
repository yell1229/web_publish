import React, { useState, useEffect , useRef, useContext} from "react";
import { useParams, useNavigate } from "react-router-dom";
import { PiGiftThin } from "react-icons/pi";

import axios from "axios";
import Detail from "../components/product/review/Review.jsx";
import ReturnDelivery from '../components/product/delivery/ReturnDelivery.jsx';
import DetailProductList from '../components/product/productDetail/DetailProductList.jsx';
import ImageList from "../components/ImageList.jsx";
import { CartContext } from "../context/CartContext.js";
import {AuthContext} from "../auth/AuthContext.js";
import {useCart} from '../hooks/useCart.js';

export default function DetailProduct() {
	const { saveToCartList , updateCartList } = useCart();
	const navigate = useNavigate();
	const {isLoggedIn, setIsLoggedIn} = useContext(AuthContext);
	const {cartList, setCartList, cartCount, setCartCount} = useContext(CartContext);
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
	const { pid } = useParams(); // url get 방식을 통해서 넘어오는 데이터.
	const [product, setProduct] = useState({});
	const [imgList, setImgList] = useState([]);
	const [detailImgList, setDetailImgList] = useState([]);
	const [size, setSize] = useState("XS");
	const resetNavCss = () => {
		Object.entries(navRefs).map((nav) => 
			nav[1].current.classList.remove('on')
		)
	};
	useEffect(() => {
		axios
		.post("http://localhost:9000/product/detail",{'pid':pid}) // 데이터는 오브젝트 리터럴 타입으로 넘긴다. 
		.then((res) => {
			// pid만 넘기면 하나의 데이터를 가져오기  때문에 filter 사용 x.
			//console.log(res.data);	
			setProduct(res.data);
			//uploadFile 배열의 3개 이미지를 출력형태로 생성하여 배열에 저장	
			//const imgList = res.data.uploadFile.filter((img, i) => (i < 3) && img );
			//setImgList(imgList);
			setImgList(res.data.imgList);
			setDetailImgList(res.data.detailImgList);
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

	}, []);
console.log('product',product);
console.log('imgList->>',imgList);

	//장바구니 추가 버튼 이벤트
	const addCartItem = () => {

		if(isLoggedIn){
			const cartItem = {
				pid: product.pid,
				size: size,
				qty: 1
			};

			// addCart(cartItem); // App.js의 addCart 함수 호출
			// cartItem => 서버전송 => shoppy_cart 추가
			//const id = localStorage.getItem("userId");
			
			//console.log('formData??? ====>> ', formData);

			// cartItem에 있는 pid, size를 cartList(로그인 성공시 준비)의 item과 비교해서 있으면, qty + 1, 없으면 새로추가
			console.log('DetailProduct::cartList ->', cartList);
			const findItem = cartList && cartList.find(item => item.pid === product.pid && item.size === product.size);
			// some -->> boolean
			// find -->> item 요소

			
			if(findItem !== undefined){
				//qty +1 ::update --> cid를가지고 update한다.
				console.log('update');
				const result = updateCartList(findItem.cid, 'increase');
				result && alert('장바구니에 추가되었습니다.');
				// axios	
				// 	.put('http://localhost:9000/cart/updateQty',{'cid':findItem.cid}) // update 시 put 사용.
				// 	.then(res => {

				// 		if(res.data.result_rows){
				// 			alert('장바구니에 추가되었습니다.');
				// 			// setCartCount(cartCount + 1); => qry 만 추가되어 row가 추가된것이 아니다.
				// 			// DB에 가서 cartList 재호출 해야됨
				// 			// const updateList = cartList.map((item) =>
				// 			// 	(item.cid === findItem.cid) ?
				// 			// 		{
				// 			// 			...item, qty: item.qty+1
				// 			// 		} : item
				// 			// );
				// 			// setCartList(updateList);
				// 		} 

				// 	})
				// 	.catch(err => console.log(err));
				
			}else{
				console.log('create');
				const id = localStorage.getItem('userId');
				const formData = {id:id, cartList:[cartItem]};  // scope 고려하여 사용하는 위치에 만들어줌.
				const result = saveToCartList(formData);
				result && alert('장바구니에 추가되었습니다.');
				// axios	
				// 	.post('http://localhost:9000/cart/add',formData)
				// 	.then(res => {
				// 		// console.log('res.data------>> ',res.data)
				// 		if(res.data.result_rows){
				// 			alert('장바구니에 추가되었습니다.');
				// 			setCartCount(cartCount + 1);
				// 			setCartList([...cartList, cartItem]);
				// 		} 

				// 	})
				// 	.catch(err => console.log(err));
			}

		}else{
			const select = window.confirm("로그인 서비스가 필요합니다. \n로그인 하시겠습니까?");
			if(select){
				navigate('/login');
			}
		}
		
		
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
				<ImageList imgList={imgList} className="product-detail-image-top-list" />
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
				{/* <div className="tab_nav" ref={refs.tabNavRef}>
					<ul>
						<li ref={navRefs.nav1Ref} onClick={() => hancleClickScroll(navRefs.nav1Ref , refs.tabCont1Ref)} className="on">DETAIL</li>
						<li ref={navRefs.nav2Ref} onClick={() => hancleClickScroll(navRefs.nav2Ref , refs.tabCont2Ref)}>REVIEW</li>
						<li ref={navRefs.nav3Ref} onClick={() => hancleClickScroll(navRefs.nav3Ref , refs.tabCont3Ref)}>Q&A</li>
						<li ref={navRefs.nav4Ref} onClick={() => hancleClickScroll(navRefs.nav4Ref , refs.tabCont4Ref)}>RETURN & DELIVERY</li>
					</ul>
				</div> */}
				</div>
				<div className="cont_tab_wrap" ref={refs.tabCont1Ref}><DetailProductList imgList={detailImgList} /></div>
				<div className="cont_tab_wrap" ref={refs.tabCont2Ref}><Detail /></div>
				{/* <div className="cont_tab_wrap" ref={refs.tabCont3Ref}><Qna /></div> */}
				<div className="cont_tab_wrap" ref={refs.tabCont4Ref}><ReturnDelivery /></div>
			</div>
			{/* end cont */}
		</div>
		</div>
	);
	}
	