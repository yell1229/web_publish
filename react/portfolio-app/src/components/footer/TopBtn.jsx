import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
export default function TopBtn() {
    const handleTop = (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })

    }
    return (
        <aside>
            <a class="arrow--up" href="#" onClick={handleTop}>
                <FontAwesomeIcon icon={faArrowUp} />
                </a>
        </aside>
    );
}

