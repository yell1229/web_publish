import React,{useState, useEffect,useRef} from 'react';

export default function Menu({name, link, css,scrollList,totalList}) {
    const active = useRef(null);
    const [eleTop, setEleTop] = useState([])
    
    
    useEffect(() => {
        if(active.current.innerText === 'Home')  active.current.classList.add('active');
        // 컴포넌트를 가져와 offsetTop을 배열에 담는다.
        const newEletop = Object.entries(totalList).map(([name, value]) =>{
            if(value && value.offsetTop){
                return value.offsetTop
            }
            return null;
        });
        setEleTop(newEletop);

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

