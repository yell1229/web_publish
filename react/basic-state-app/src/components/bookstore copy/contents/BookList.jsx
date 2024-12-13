import React,{useState, useEffect} from 'react';
import Book from './Book.jsx';

export default function BookList() {
    const [books, setBooks] = useState([]);

    useEffect(() =>{
            fetch('/data/bookstore.json')
                .then(data => data.json())
                .then(jsonData=>setBooks(jsonData.bookList))
                .catch(error => console.log(error))
        },[]);


    return (
        <>
            <div className="filter">
                <label><input type="radio" name="type" value="total" />전체</label>
                <label><input type="radio" name="type" value="domestic" />국내도서</label>
                <label><input type="radio" name="type" value="overseas" />해외도서</label>
            </div>
            <div className='book-list'>
                {
                    books && books.map( item =>
                        <Book img={item.img} title={item.title} price={item.price} date={item.date} />
                    )
                }
                
            </div>
        </>
    );
}

