import React,{useState,useRef,useEffect} from 'react';
import Header from './components/header/Header.jsx';
import Footer from './components/footer/Footer.jsx';
import Contanier from './components/contents/Contanier.jsx';
import Logo from './components/header/Logo.jsx';
import './css/style.css';
import MenuList from './components/header/MenuList.jsx';
import NavBtn from './components/header/NavBtn.jsx';
import TopBtn from './components/footer/TopBtn.jsx';

export default function App() {

    const footerRef = useRef(null);
    const [scrollList, setScrollList] = useState({
        homeRef: null,
        aboutmeRef: null,
        myskillRef: null,
        myworkRef: null,
        testimonialsRef: null,
        footerRef:null
    });
    const setScrollListToParent = (list) => {
        setScrollList((prevState) => ({
            ...prevState,
            footerRef: footerRef.current,  // footerRef를 업데이트
            ...list // list에 있는 항목들을 기존 scrollList에 병합
        }));
    };

    return (
            <div>
                <Header >
                    <Logo />
                    <MenuList passScrollList={scrollList}/>
                    <NavBtn />
                </Header>        
                <Contanier setScrollListToParent ={setScrollListToParent } />
                <div ref={footerRef}>
                    <Footer />
                </div>
                <TopBtn />
            </div>
    );
}

