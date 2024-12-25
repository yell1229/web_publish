import React from 'react';

export default function MySkill() {

    return (
        <section id="skill" className="section max-container">
        <h2 className="title">My Skills</h2>
        <p className="description">Skills & Attributes</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Nobis beatae, aliquid ratione commodi nam ex voluptate rem 
            eveniet cupiditate optio natus? Cum, harum eum sint id quod 
            nulla adipisci. Sunt?</p>
        <div className="skills">
            <article className="sklls__coding">
            <h3 className="skill__title">Coding Skills</h3>
            <ul>
                <li className="bar">
                <div className="bar__metadata"><span>HTML</span><span>98%</span></div>
                <div className="bar__bg"><div className="bar__value"></div></div>
                </li>
                <li className="bar">
                <div className="bar__metadata"><span>CSS</span><span>90%</span></div>
                <div className="bar__bg"><div className="bar__value"></div></div>
                </li>
                <li className="bar">
                <div className="bar__metadata"><span>JavaScript</span><span>90%</span></div>
                <div className="bar__bg"><div className="bar__value"></div></div>
                </li>
                <li className="bar">
                <div className="bar__metadata"><span>TypeScript</span><span>80%</span></div>
                <div className="bar__bg"><div className="bar__value"></div></div>
                </li>
                <li className="bar">
                <div className="bar__metadata"><span>React</span><span>79%</span></div>
                <div className="bar__bg"><div className="bar__value"></div></div>
                </li>
                <li className="bar">
                <div className="bar__metadata"><span>NodeJS</span><span>68%</span></div>
                <div className="bar__bg"><div className="bar__value"></div></div>
                </li>          
            </ul>
            </article>
            <article className="skills__tools">
            <h3 className="skill__title">Tools</h3>
            <ul>
                <li>Visual Studio Code</li>
                <li>IntelliJ</li>
                <li>Android Studio Code</li>
                <li>iOS development tools</li>
                <li>Eclipse</li>
            </ul>
            </article>
            <article className="skills__etc">
            <h3 className="skill__title">Etc</h3>
            <ul>
                <li>Git</li>
                <li>Scrum Master</li>
                <li>SVN</li>
            </ul>
            </article>
        </div> 
    </section>
    );
}

