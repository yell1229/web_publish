import React,{useState,useRef, useEffect} from 'react';
import Home from './Home.jsx';
import AboutMe from './AboutMe.jsx';
import MySkill from './MySkill.jsx';
import MyWork from './MyWork.jsx';
import Testimonials from './Testimonials.jsx';

export default function Contanier({setScrollListToParent, nav}) {
      
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
    const newList = useRef([]);
    useEffect(() => {
        // `scrollRef`의 값들을 상태로 업데이트
        const updatedScrollList = Object.entries(scrollRef).reduce((acc, [name, ref]) => {
            acc[name] = ref.current;
            return acc;
        }, {});

        setScrollList(updatedScrollList);

        newList.current = [
            scrollRef.homeRef.current?.offsetTop,
            scrollRef.aboutmeRef.current?.offsetTop,
            scrollRef.myskillRef.current?.offsetTop,
            scrollRef.myworkRef.current?.offsetTop,
            scrollRef.testimonialsRef.current?.offsetTop,
        ];

        // 부모 컴포넌트로 scrollList를 전달
        setScrollListToParent(updatedScrollList,newList);

        const navRef =nav.current?.children?.[0]?.children?.[0] // 옵셔널 체이닝
        const childNavRef = Object.values(navRef.children);
        
        
        const handleScroll = () => {
            const eleList = ["home-area","about-area","skill-area","work-area","testimonials-area"];

            Object.entries(updatedScrollList).forEach(([name,targetEle]) =>{         
                if(targetEle){
                    if(window.scrollY >= targetEle.offsetTop -74) {
                        targetEle.classList.add('on');

                        childNavRef.map((item,i) => {
                            item.classList.remove('active');
                            if(targetEle.classList.contains(eleList[i])){
                                navRef.children[i].classList.add('active');
                            }
                        });          
                    }
                    
                } 
            });  
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

