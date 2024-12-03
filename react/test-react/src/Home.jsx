import NavBtnList from "./components/NavBtnList.jsx";
import Avatar from "./components/Avatar.jsx";
import Btn from "./components/Btn.jsx";
import Logo from "./components/Logo.jsx";
import './css/Home.css';

export default function Home(){
    const navs = [
        {"href" : "#home" , "name" : "Home"},
        {"href" : "#about" , "name" : "About"},
        {"href" : "#skills" , "name" : "Skills"},
        {"href" : "#mywork" , "name" : "My work"},
        {"href" : "#testimonial" , "name" : "Testimonial"},
        {"href" : "#contact" , "name" : "Contact"},
    ];
    return (
        <div id="home">
            <div className="header">
                <Logo />
                <NavBtnList list={navs} />
            </div>
            <Avatar size="250px"/>
            <h2 class="home__title">Hello <br /> I'm 
            <strong class="home__title--strong">Dream Coder</strong>, Judy</h2>
            <p class="home__description">A software engineer currently residing in Seoul, South Korea</p>
            <Btn href="#contact" name="Contact Me" />
        </div>
    );
}