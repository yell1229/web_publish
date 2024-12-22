import React,{useRef} from 'react';

export default function Footer() {
    return (
        <footer id="contact" class="section">
            <h2 class="title">Let's talk</h2>
            <p class="description">jeon.developer.judy@gmail.com</p>
            <ul class="contact__links">
                <li>
                    <a class="contact__link" href="http://github.com"><i class="fa-brands fa-github"></i></a>
                </li>
                <li>
                    <a class="contact__link" href="http://linkedin.com"><i class="fa-brands fa-linkedin"></i></a>
                </li>
            </ul>
            <p>Dream Software Engineer Judy - All right reserved</p>
        </footer>
    );
}

