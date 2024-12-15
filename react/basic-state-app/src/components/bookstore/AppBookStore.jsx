import React,{useState} from 'react';
import Header from './Header.jsx'
import Contents from './Contents.jsx';
import './bookstore.css';

export default function AppBookStore() {
    const [number, setNumber] = useState(0);
    const passNum = (num) => {
        setNumber(number + num);
    }
    
    return (
        <div>
            <Header />
            <Contents />
        </div>
    );
}

