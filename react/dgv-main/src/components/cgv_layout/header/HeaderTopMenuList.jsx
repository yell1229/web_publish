import HeaderTopMenu from "./HeaderTopMenu.jsx";
import {useState, useEffect} from 'react';

export default function HeaderTopMenuList(){
    const [list, setList ] = useState([]);

    useEffect(()=>{
        fetch('data/cgv_header.json')
            .then(data => data.json())
            .then(jsonData => setList(jsonData.topMenuList))
            .catch(error => console.log('error'))
    },[]);

    return (
        <ul>
            {
                list && list.map((menu) => <HeaderTopMenu href={menu.href} className={menu.className} src={menu.src} text={menu.text} />)
            }
            
        </ul>
    );
}