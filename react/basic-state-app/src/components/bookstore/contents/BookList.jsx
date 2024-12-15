import React,{useState, useEffect} from 'react';
import Book from './Book.jsx';

export default function BookList({passParent}) {
    const [type, setType] = useState('total');
    const [books, setBooks] = useState([]);

    useEffect(() =>{
            fetch('/data/bookstore.json')
                .then(data => data.json())
                .then(jsonData=>{
                    if(type==='total'){
                    setBooks(jsonData.bookList);
                    }else{
                        const newFilter = jsonData.bookList.filter(item => item.type === type);
                        setBooks(newFilter);
                    }
                })
                .catch(error => console.log(error))
        },[type]);
        const checkFilter = (e) => {
            setType(e.target.value);
        }

    return (
        <>
            <div className="filter">
                <label><input type="radio" name="type" value="total" onClick={checkFilter} /> 전체</label>
                <label><input type="radio" name="type" value="domestic" onClick={checkFilter} /> 국내도서</label>
                <label><input type="radio" name="type" value="overseas" onClick={checkFilter} /> 해외도서</label>
            </div>
            {/* <select name="" id="">
                <option value="">소설</option>
            </select> */}
            <div className='book-list'>
                {
                    books && books.map( item =>
                        <Book  img={item.img} title={item.title} price={item.price} date={item.date} isBest={item.isBest} />
                    )
                }
                
            </div>
        </>
    );
}

