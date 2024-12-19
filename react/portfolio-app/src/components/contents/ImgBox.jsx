import React from 'react';

export default function ImgBox({img,title,para}) {
    return (
        <li class="project">
            <img class="project__img" src={img} alt="project1" />
            <div class="project__metadata">
                <h3 class="project__metadata__title">{title}</h3>
                <p>{para}</p>
            </div>
        </li>
    );
}

