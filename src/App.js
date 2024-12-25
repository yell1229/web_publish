import React,{useState,useRef, useEffect} from 'react';
import Header from './components/header/Header.jsx';
import Footer from './components/footer/Footer.jsx';
import Contanier from './components/contents/Contanier.jsx';
import Logo from './components/header/Logo.jsx';
import './css/style.css';
import MenuList from './components/header/MenuList.jsx';
import NavBtn from './components/header/NavBtn.jsx';
import TopBtn from './components/footer/TopBtn.jsx';

export default function App() {
    const navRef = useRef(null);
    const footerRef = useRef(null);
    let [topBtn, setTopBtn] = useState(false);

    const [scrollList, setScrollList] = useState({
        homeRef: null,
        aboutmeRef: null,
        myskillRef: null,
        myworkRef: null,
        testimonialsRef: null,
        footerRef:null
    });
    const scrollTopList = useRef([]);
    const setScrollListToParent = (list,topList) => {
        setScrollList((prevState) => ({
            ...prevState,
            footerRef: footerRef.current,  // footerRef를 업데이트
            ...list // list에 있는 항목들을 기존 scrollList에 병합
        }));
        scrollTopList.current = topList;
    };

    useEffect(() => {
        const scrollCheck = () => {
            console.log(topBtn.current);
            
            if(window.scrollY>100) setTopBtn(true);
            else setTopBtn(false);
        }
        window.addEventListener('scroll',scrollCheck);
    },[]);
    

    return (
            <div>
                <Header >
                    <Logo />
                    <div ref={navRef}>
                        <MenuList passScrollList={scrollList} scrollTop={scrollTopList.current} />
                    </div>
                    <NavBtn />
                </Header>        
                <Contanier setScrollListToParent ={setScrollListToParent } nav={navRef} />
                <div ref={footerRef}>
                    <Footer />
                </div>
                {topBtn && <TopBtn />}
            </div>
    );
}

