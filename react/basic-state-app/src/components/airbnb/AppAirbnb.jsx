import AribnbComponent from "./AirbnbComponent.jsx";
import './Airbnb.css';
import {useState, useEffect} from 'react';

export default function AppAirbnb(){
    const [list, setList] = useState([]);

    useEffect(() => {
        fetch('/data/airbnb.json')
            .then(data => data.json())
            .then(jsonData => setList(jsonData.list))
            .catch(error => console.log('error'));
    },[]);

    console.log(list);
    
    return (
        <div>
        {
            list && list.map( item =>
                <AribnbComponent src={item.src} nation={item.nation} info={item.info} date={item.date} price={item.price} isGood={item.isGood} color={item.color} />
            )
        }
        </div>
    );
}