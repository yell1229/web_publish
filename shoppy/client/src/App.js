import React,{useState, useEffect} from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom'; 
import Layout from './pages/Layout.jsx';
import Home from './pages/Home.jsx';
import Products from './pages/Products.jsx';
import Carts from './pages/Carts.jsx';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';
import NewProduct from './pages/NewProduct.jsx';
import DetailProduct from './pages/DetailProduct.jsx';
import {AuthPrrovider} from './auth/AuthContext.js';
import './styles/shoppy.css';

export default function App() {

	const [cartList, setCartList] = useState([]); // 장바구니 아이템 저장: 배열
	const [cartCount, setCartCount] = useState(0); // 장바구니 상품 갯수

	//cart count가 업데이트가 되면 localStorage에 cartList를 저장
	useEffect(() => {
		localStorage.setItem("cartItems", JSON.stringify(cartList)) ; //mdn 자료 찾아보기
	},[cartCount]);

	// 장바구니 추가
	const addCart = (cartItem) => {
		// 입력받은 cartItem이 cartList에 존재하면 qty+1, 존재하지 않으면 새로 추가
		const updateCartList = cartList.some(checkItem => checkItem.pid === cartItem.pid && checkItem.size === cartItem.size) // 3항 연산 조건
									? 	cartList.map(item =>  // true
											(item.pid === cartItem.pid && item.size === cartItem.size) ?	
												{...item, qty: item.qty +1} // item의 qty + 1
											:	item
										) 
									
									: [...cartList, cartItem];

		setCartList(updateCartList);
		setCartCount(cartCount+1);
	}// ->> 종료가 되야 setCartList, setCartCount 업데이트가 됨.
	
	return (
		<div>
			<AuthPrrovider>
				<BrowserRouter>
					<Routes>
						<Route path='/' element={<Layout cartCount={cartCount} />} >
							<Route index element={<Home />} />
							<Route path="/all" element={<Products />} />
							<Route path="/cart" element={<Carts />} /> {/* localStorage에서 값을 가져오기 때문에 함수전달 X */}
							<Route path="/login" element={<Login />} />
							<Route path="/signup" element={<Signup />} />  
							<Route path="/products/:pid" element={<DetailProduct addCart={addCart} />} />
							<Route path="/products/new" element={<NewProduct />} />  
						</Route>
					</Routes>
				</BrowserRouter>
			</AuthPrrovider>
		</div>
	);
}
