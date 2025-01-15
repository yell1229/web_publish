import React,{useState} from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom'; 
import Layout from './pages/Layout.jsx';
import Home from './pages/Home.jsx';
import Products from './pages/Products.jsx';
import Cart from './pages/Cart.jsx';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';
import DetailProduct from './pages/DetailProduct.jsx';
import './styles/shoppy.css';

export default function App() {
    const [cartList, setCartList] = useState([]);
    const [count, setCount] = useState(0);

    const addCart = (cartItem) => {
        setCartList([...cartList, cartItem]);
        setCount(count+1);
    }

        

    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout count={count} />}>
                        <Route index element={<Home />} />
                        <Route path="/all" element={<Products />} />
                        <Route path="/cart" element={<Cart cartList={cartList} />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/signup" element={<Signup />} />
                        <Route path="/products/:pid" element={<DetailProduct addCart={addCart} />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

