import React,{useState,useRef, useEffect} from 'react';
import Home from './Home.jsx';
import AboutMe from './AboutMe.jsx';
import MySkill from './MySkill.jsx';
import MyWork from './MyWork.jsx';
import Testimonials from './Testimonials.jsx';

export default function Contanier({setScrollListToParent }) {
    const scrollRef  = {
        homeRef: useRef(null),
        aboutmeRef: useRef(null),
        myskillRef: useRef(null),
        myworkRef: useRef(null),
        testimonialsRef: useRef(null)
    };
    const [scrollList,setScrollList] = useState({
        homeRef: null,
        aboutmeRef: null,
        myskillRef: null,
        myworkRef: null,
        testimonialsRef: null
    });

    useEffect(() => {
        // `scrollRef`의 값들을 상태로 업데이트
        const updatedScrollList = Object.entries(scrollRef).reduce((acc, [name, ref]) => {
            acc[name] = ref.current;
            return acc;
        }, {});

        setScrollList(updatedScrollList);
        // 부모 컴포넌트로 scrollList를 전달
        setScrollListToParent(updatedScrollList);

        const handleScroll = () => {
           Object.entries(updatedScrollList).forEach(([name,targetEle]) =>{         
            if(targetEle){
                if(window.scrollY >= targetEle.offsetTop - window.innerHeight /2) targetEle.classList.add('on');
                else targetEle.classList.remove('on');
            }
               
            })  
        }

        window.addEventListener('scroll',handleScroll);
         
        return () => {
            window.removeEventListener('scroll',handleScroll);
        }
        
    }, []);  // 컴포넌트 마운트 시 한 번만 실행
    
    
    
    return (
        <div>
            <div ref={scrollRef.homeRef} className="home-area">
                <Home />
            </div>
            <div ref={scrollRef.aboutmeRef} className="about-area">
                <AboutMe />
            </div>
            <div ref={scrollRef.myskillRef} className="skill-area">
                <MySkill />
            </div>
            <div ref={scrollRef.myworkRef} className="work-area">
                <MyWork />
            </div>
            <div ref={scrollRef.testimonialsRef} className="testimonials-area">
                <Testimonials />
            </div>
            
            
            
            
            
        </div>
    );
}

