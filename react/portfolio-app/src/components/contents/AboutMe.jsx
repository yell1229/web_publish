import React from 'react';
import { faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { faMobile } from '@fortawesome/free-solid-svg-icons';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import Major from './Major.jsx';


export default function AboutMe() {
    const majorList = [
        {
            "title":"Front-end",
            "para":"HTML, CSS, JavaScript, TypeScript, React, WebAPIs",
            "icon":faHtml5
        },
        {
            "title":"Mobile",
            "para":"Android Studio, React Native, iOS, Swift, Java, Kotlin",
            "icon":faMobile
        },
        {
            "title":"Back-end",
            "para":"Java, JavaScript, Go, Kotlin, Spring, Spring Boot",
            "icon":faGear
        },
    ]
    
    return (
        <div>
            <section id="about" className="section max-container">
                <h2 className="title">About me</h2>
                <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Iure natus, temporibus perspiciatis repudiandae nostrum modi
                    doloremque expedita non eius ipsum! Beatae porro adipisci 
                    omnis architecto dignissimos. Iusto ipsa inventore adipisci.
                </p>
                <ul className="majors">
                    {
                        majorList.map(item =>
                            <li className="major"><Major title={item.title} para={item.para} icon={item.icon} /></li>
                        )
                    }
                </ul>
                <ul className="jobs">
                    <li className="job">
                    <img src="https://yell1229.github.io/react-sample-1/images/jobs/google.png" alt="google" />
                    <div>
                        <p className="job__name">Google as Junior Software Engineer</p>
                        <p className="job__period">2019 Oct - Until now</p>
                    </div>
                    </li>
                    <li className="job">
                    <img src="https://yell1229.github.io/react-sample-1/images/jobs/samsung.png" alt="samsung" />
                    <div>
                        <p className="job__name">Samsung as Junior Software Engineer</p>
                        <p className="job__period">2010 Oct - 2019 Oct</p>
                    </div>
                    </li>
                </ul>
            </section>
        </div>
    );
}

