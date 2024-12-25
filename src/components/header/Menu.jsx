import React,{useState, useEffect,useRef} from 'react';

export default function Menu({name, link, css,scrollList}) {
    const active = useRef(null);

    useEffect(() => {
        if(active.current.innerText === 'Home')  active.current.classList.add('active');
        
    },[]);

    
    
    
    const clickStyle = (e, ref) => {
        e.preventDefault();
        
        const parent = e.target.parentElement.children;
        const parentArr = Object.values(parent)
        parentArr.forEach(item =>
            item.classList.remove('active')  
        );   
        e.target.classList.add('active');
        if(ref && ref[1]){
            ref[1].scrollIntoView({ behavior: "smooth" });
            ref[1].classList.add('on');  
        }      
    }
    
    return (
        <>
            <a className={css} href={link} ref={active} onClick={(e) => clickStyle(e, scrollList)}>{name}</a>
        </>
    );
}

