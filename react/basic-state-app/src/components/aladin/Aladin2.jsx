import React,{useState, useEffect} from 'react';
import Book from './Book.jsx';

export default function Aladin2() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('/data/aladin.json')
            .then(data => data.json())
            .then(jsonData => setBooks(jsonData.books))
            .catch(error => console.log(error));
    },[]);
    return (
        <div style={{display:'grid', 'grid-template-columns': 'repeat(4,1fr)'}}>
            {
                books && books.map( item =>
                    <Book img={item.img} title={item.title} />
                )
            }
        </div>
    );
}

