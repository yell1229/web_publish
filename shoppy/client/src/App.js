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
import CartsDB from './pages/CartsDB.jsx';
import {AuthProvider} from './auth/AuthContext.js';
import './styles/shoppy.css';
import { CartProvider } from './context/CartContext.js';

export default function App() {

	const [cartList, setCartList] = useState(() => { // 별도의 함수는 콜백함수로 만든다.
		try{
			// localStorage.getItem('cartItems'); // 문자를 json객체로 만들어서 갯수를 받는다.
			// JSON.parse(localStorage.getItem('cartItems')).length; // 3개의 기능을 한번에 줬기 때문에.... 리엑트 사용을 위해 풀어서 사용한다.
			const initCartList = localStorage.getItem('cartItems');
			return initCartList ?JSON.parse(initCartList) : []; // 리스트가 없으면 초기값 []
		}catch(error){
			console.log('로컬스토리지 데이터 작업도중 에러 발생');
			console.log(error);	
		}
	}); // 장바구니 아이템 저장: 배열
		
	// const [cartCount, setCartCount] = useState(0); // 장바구니 상품 갯수
	const [cartCount, setCartCount] = useState(() => { // 별도의 함수는 콜백함수로 만든다.
		try{
			// localStorage.getItem('cartItems'); // 문자를 json객체로 만들어서 갯수를 받는다.
			// JSON.parse(localStorage.getItem('cartItems')).length; // 3개의 기능을 한번에 줬기 때문에.... 리엑트 사용을 위해 풀어서 사용한다.
			const initCartList = localStorage.getItem('cartItems');
			// return JSON.parse(initCartList).length;
			return initCartList ?JSON.parse(initCartList).length : 0 ;
		}catch(error){
			console.log('로컬스토리지 데이터 작업도중 에러 발생');
			console.log(error);	
		}
	});

	// 로컬스토리지 재호출 => cartList, cartCount 재호출 (Cart.jsx에서 초기화된 값을 여기서도 적용)
	const refreshStorage = (updateCart, updateCount) => {
		setCartList(updateCart);
		setCartCount(updateCount);
	}


	//cart count가 업데이트가 되면 localStorage에 cartList를 저장
	useEffect(() => {
		localStorage.setItem("cartItems", JSON.stringify(cartList)) ; //mdn 자료 찾아보기
	},[cartCount]);

	// 장바구니 추가
	const addCart = (cartItem) => {
		// 입력받은 cartItem이 cartList에 존재하면 qty+1, 존재하지 않으면 새로 추가
		// const updateCartList = cartList.some(checkItem => checkItem.pid === cartItem.pid && checkItem.size === cartItem.size) // 3항 연산 조건
		// 							? 	cartList.map(item =>  // true
		// 									(item.pid === cartItem.pid && item.size === cartItem.size) ?	
		// 										{...item, qty: item.qty +1} // item의 qty + 1
		// 									:	item
		// 								) 
									
		// 							: [...cartList, cartItem]; --> 복잡해서 리엑트에서 처리가 안됨.
		// setCartList(updateCartList);
		// setCartCount(cartCount+1);

		let updateCartList = [];
		const isCheck =  cartList.some(checkItem => checkItem.pid === cartItem.pid && checkItem.size === cartItem.size);
		if(isCheck){
			updateCartList = cartList.map(item =>  // true
					(item.pid === cartItem.pid && item.size === cartItem.size) ?	
						{...item, qty: item.qty +1} // item의 qty + 1
					:	item
				) 
		}else{
			updateCartList = [...cartList, cartItem];
			setCartCount(cartCount+1);
		}
		
		const sortUpdateCartList = updateCartList.sort((a,b) => a.pid - b.pid);

		setCartList(sortUpdateCartList);

	}// ->> 종료가 되야 setCartList, setCartCount 업데이트가 됨.
	
	return (
		<div>
			<CartProvider>
			<AuthProvider>
				<BrowserRouter>
					<Routes>
						<Route path='/' element={<Layout />} >
							<Route index element={<Home />} />
							<Route path="/all" element={<Products />} />
							<Route path="/cart" element={<Carts refreshStorage={refreshStorage} />} /> {/* localStorage에서 값을 가져오기 때문에 함수전달 X */}
							<Route path="/login" element={<Login />} />
							<Route path="/signup" element={<Signup />} />  
							<Route path="/products/:pid" element={<DetailProduct />} />
							<Route path="/products/new" element={<NewProduct />} />  
							<Route path="/cartdb" element={<CartsDB />} />  
						</Route>
					</Routes>
				</BrowserRouter>
			</AuthProvider>
			</CartProvider>
		</div>
	);
}
