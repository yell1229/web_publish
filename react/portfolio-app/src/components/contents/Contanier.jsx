import React,{useState,useRef} from 'react';
import Home from './Home.jsx';
import AboutMe from './AboutMe.jsx';
import MySkill from './MySkill.jsx';
import MyWork from './MyWork.jsx';
import Testimonials from './Testimonials.jsx';

export default function Contanier({scroll}) {
    // const homeTop = useRef(null);
    // const aboutTop = useRef(null);
    // const myskillTop = useRef(null);
    // const testimonialsTop = useRef(null);
    // const myworkTop = useRef(null);

    // const [topScroll, setTopScroll] = useState({"Home":"","About":"","Skills":"","My work":"","Testimonial":""});
    // const getTop = (name, scrollTop) => {
        // setTopScroll({...topScroll,[name]: scrollTop});
        
    // }
// console.log('Container ===> ',topScroll);

    // console.log(topScroll);
    return (
        <div>
            <Home />
            <AboutMe />
            <MySkill />
            <MyWork />
            <Testimonials  />
            {/* <Home top={getTop} ref={homeTop} />
            <AboutMe top={getTop} ref={aboutTop} />
            <MySkill top={getTop} ref={myskillTop} />
            <MyWork top={getTop} ref={testimonialsTop} />
         */}
        </div>
    );
}

