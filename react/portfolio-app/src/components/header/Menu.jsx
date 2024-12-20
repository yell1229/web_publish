import React,{useState, useEffect,useRef} from 'react';

export default function Menu({name, link, css}) {
    const active = useRef(null);

    useEffect(() => {
        if(active.current.innerText === 'Home')  active.current.className += ' active';
    },[]);

    const clickStyle = (e) => {
        e.preventDefault();
        
        const parent = e.target.parentElement.children;
        const parentArr = Object.values(parent)
        parentArr.map(item =>
            item.classList.remove('active')  
        );   
        e.target.classList.add('active');
        
        //scroll
        if(active.current.innerText === 'Home'){
            // console.log('Home');
            window.scrollTo({ top: 0, behavior: 'smooth' });

        }else if(active.current.innerText === 'About'){
            // console.log('About');
            window.scrollTo({ top: 690-70, behavior: 'smooth' });

        }else if(active.current.innerText === 'Skills'){
            // console.log('Skills');
            window.scrollTo({ top: 1300, behavior: 'smooth' });

        }else if(active.current.innerText === 'My work'){
            // console.log('My work');
            window.scrollTo({ top: 2170, behavior: 'smooth' });

        }else if(active.current.innerText === 'Testimonial'){
            // console.log('Testimonial');
            window.scrollTo({ top: 2900, behavior: 'smooth' });
        }else if(active.current.innerText === 'Contact'){
            // console.log('Contact');
            window.scrollTo({ top: 3500, behavior: 'smooth' });
        }
    }
    return (
        <>
            <a className={css} href={link} ref={active} onClick={clickStyle}>{name}</a>
        </>
    );
}

