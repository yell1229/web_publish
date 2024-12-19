import React from 'react';
import Home from './Home.jsx';
import AboutMe from './AboutMe.jsx';
import MySkill from './MySkill.jsx';
import MyWork from './MyWork.jsx';
import Testimonials from './Testimonials.jsx';

export default function Contanier() {
    return (
        <div>
            <Home />
            <AboutMe />
            <MySkill />
            <MyWork />
            <Testimonials />
        </div>
    );
}

