import React from 'react';

export default function Menu({name, link, css}) {
    const clickStyle = (e) => {
        const parent = e.target.parentElement.children;
        const parentArr = Object.values(parent)
        parentArr.map(item =>
            item.classList.remove('active')  
        );   
        // console.log(Array.isArray(parentArr));       
        e.target.classList.add('active');
        
    }
    return (
        <>
            <a className={css} href={link} onClick={clickStyle}>{name}</a>
        </>
    );
}

