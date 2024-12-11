import React, {useState} from 'react';
import Header from './Header.jsx';
import Body from './Body.jsx';
import Footer from './Footer.jsx';
import MenuList from './header/MenuList.jsx';
import ProductList from './body/ProductList.jsx';
import './Olive.css';

export default function AppOlive() {

    // const [id, setId] = useState('');
    const [cartList, setCartList] = useState([]);

    const handleCartApp = (id) =>{
        // alert(`AppOlive => ${id}`);
        //setId(id); // 전달받은 id는 지역변수기 때문에 전역변수에 전달하여 MenuList로 전달한다.

        // cartList.push(id); // 객체를 엑세스를 한다.
        // setCartList(id); // 기본 배열값을 id문자로 변경하여 오류 발생.
        setCartList([...cartList, id]); // 스프레드 연산자 사용한다.
    } 

    return (
        <>
            <Header>
                <h1><img src="https://static.oliveyoung.co.kr/pc-static-root/image/comm/h1_logo.png" alt="" /></h1>
                <MenuList count={cartList.length} />
            </Header>
            <Body>
                <ProductList cart ={handleCartApp}/>
            </Body>
        </>
    );
}

