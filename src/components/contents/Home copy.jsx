import React,{useRef} from 'react';
import Typeit from "typeit-react";

export default function Home() {
    const homeRef = useRef(null);
    const handleAddClass = () => {
        homeRef.current.classList.add('on');
    }
    return (
        <section id="home" onLoad={handleAddClass} ref={homeRef} className="App">
            <img className="home__avatar" src="https://yell1229.github.io/react-sample-1/images/avata.png" alt="portfolio" />
            <Typeit options={{
                // strings: ["This will be typed!"],
                speed: 10,
                waitUntilVisible: true,
            }}>
            <h2 className="home__title">Hello <br /> I'm 
                <strong className="home__title--strong">Dream Coder</strong>, Judy</h2>
            <p className="home__description">A software engineer currently residing in Seoul, South Korea</p>
            </Typeit>
            {/* <p className="home__description">A software engineer currently residing in Seoul, South Korea</p> */}
            <a className = "home__contact" href="#contact">Contact Me</a>
        </section>
    );
}

