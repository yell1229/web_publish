import React,{useState, useRef} from 'react';
import TypeIt from "typeit-react";

export default function Home() {
    const homeRef = useRef(null);
    const handleAddClass = () => {
        homeRef.current.classList.add('on');
    }
    const [buttonText, setButtonText] = useState("Stop Text Animation");
    const [instance, setInstance] = useState(null);

    const toggleFreeze = () => {
        console.log(instance);
        
        if (instance.is("frozen")) {
          instance.unfreeze();
          setButtonText("Start Text Animation");
          return;
        }
    
        instance.freeze();
        setButtonText("Start Text Animation");
      };

    return (
        <section id="home" onLoad={handleAddClass} ref={homeRef} className="App">
            <img className="home__avatar" src="https://yell1229.github.io/react-sample-1/images/avata.png" alt="portfolio" />
            <div><button type="button" className = "home__contact" onClick={toggleFreeze}>{buttonText}</button></div>
            <TypeIt 
                options={{
                    speed: 50,
                    cursor: false,
                    loop: false
                }}
                getAfterInit={(instance) => {
                    setInstance(instance);
                    return instance;
                }}
            >  
            <h2 className="home__title">Hello <br /> I'm 
                <strong className="home__title--strong">Dream Coder</strong>, Judy</h2>
            <p className="home__description">A software engineer currently residing in Seoul, South Korea</p>
            </TypeIt>
        </section>
    );
}

