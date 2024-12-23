import React,{useState, useEffect,useRef} from 'react';

export default function Menu({name, link, css,scrollList,totalList}) {
    const active = useRef(null);
    const [eleTop, setEleTop] = useState([])
    
    
    useEffect(() => {
        if(active.current.innerText === 'Home')  active.current.classList.add('active');
        const newEletop = Object.entries(totalList).map(([name, value]) =>{
            if(value && value.offsetTop){
                return value.offsetTop
            }
            return null;
        });
        setEleTop(newEletop);

        const scrollBtnStyle = () => {
            // if(eleTop[0] !== null){
            //     if(window.scrollY >= eleTop[0]) active.current.classList.add('active');
            // }else if(eleTop[1] !== null){
            //     console.log(eleTop[1]);
                
            //     if(window.scrollY >= eleTop[1]) active.current.classList.add('active');
            // }else if(eleTop[2] !== null){
            //     if(window.scrollY >= eleTop[2]) active.current.classList.add('active');
            // }
        }
        window.addEventListener('scroll',scrollBtnStyle);
    },[totalList]);


    
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

