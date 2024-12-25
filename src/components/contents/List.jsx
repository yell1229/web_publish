import React from 'react';

export default function List({img, info, name, com}) {
    
    return (
        <>
            <li class="testimonial">
                <img class="testimonial__img" src={img} alt="people1" />
                <div class="testimonial__bubble">
                <p>{info}</p>
                <p><a href="#" class="testimonial__bubble__name">{name}</a> / {com}</p>
                </div>
            </li>
        </>
    );
}

