import React,{useState, useEffect, useRef} from 'react';
import Menu from './Menu.jsx';

export default function MenuList() {
    const [topNav, setTopNav] = useState([]); 

    useEffect(() =>{
        fetch('/data/bookstore.json')
            .then(data => data.json())
            .then(jsonData=>setTopNav(jsonData.navList))
            .catch(error => console.log(error))
    },[]);

    return (
        <ul className='top-nav'>
            {topNav && topNav.map(item =>
                <li><Menu menu={item.menu} /></li>
            )}
            
        </ul>
    );
}

