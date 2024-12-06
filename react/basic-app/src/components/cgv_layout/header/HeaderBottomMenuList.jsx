import HeaderBottomMenu from './HeaderBottomMenu.jsx';
import {useState, useEffect} from 'react';
import {fetchJSON} from '../js/commons.js';

export default function HeaderBottomMenuList(){
    const [names, setNames] = useState();
    useEffect(() =>{
        // fetch('/data/cgv_header.json')
        //     .then(data => data.json())
        //     .then(jsonData => setNames(jsonData.names))
        //     .catch(error => console.log('error'))
        fetchJSON('/data/cgv_header.json')
            .then(result =>  setNames(result.names))
            .catch(error => console.log('error'));
    },[]);
    return (
        <ul class="nav">
            <li class="logo"><a href=""><img src="img/logoWhite.png" alt="CGV" /></a></li>
            {
                names && names.map(item =>
                <li>
                    <HeaderBottomMenu name={item.name} href={item.href} />
                </li>
                )
            }
        </ul>
    );
}