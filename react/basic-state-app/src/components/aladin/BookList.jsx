import React,{useState, useEffect} from 'react';
import Book from './Book.jsx';

export default function BookList() {

    const [books, setBooks] = useState([]);
    const [category, setCategory] = useState([]);
    const [type, setType] = useState('total');
    const [selectCategory, setSelectCategory] = useState('');


    useEffect(() =>{
        console.log(`selectCategory  --->  ${selectCategory}`); // 확인만 해봄.


        fetch('/data/aladin.json')
            .then(data => data.json())
            .then(jsonData => {
                // setBooks(jsonData);
                if(type === 'total'){
                    setBooks(jsonData.books);
                    setCategory(jsonData.category);

                }else{
                    // 필터
                    const filterBooks = jsonData.books.filter((book) => book.type === type ); // book으로 리턴한다.
                    setBooks(filterBooks);
                }

                // select
                // const filterSelect = jsonData.books.filter((book) => {book.category === selectCategory});
                // setBooks(filterSelect);
            })
            .catch(error => console.log(error));
    },[type, selectCategory]);

    const handleCheck = (event) => { // input은 event객체사용가능. event 객체의 value 값을 가져와야됨.
        setType(event.target.value);
    }
    
    const handleChangeCategory = (e) => {
        // console.log(e.target.value)
        setSelectCategory(e.target.value);
    }

    return (
        <>
            <div>
                <label><input type="radio" name="type" value="total" onClick={handleCheck} />전체</label>
                <label><input type="radio" name="type" value="domestic" onClick={handleCheck} />국내</label>
                <label><input type="radio" name="type" value="overseas" onClick={handleCheck} />국외</label>

                <select name="" id="" style={{'margin-left':'10px'}} onChange={handleChangeCategory}>
                    <option value="선택">선택</option>
                    {category && category.map( item =>
                        <option value={item.name}>{item.name}</option>
                    )}
                </select>

            </div>
            <ul style={{display:'grid', 'grid-template-columns': 'repeat(4,1fr)'}}>
                {books && books.map(book => 
                    <li>
                        <Book img={book.img} title={book.title} />
                    </li>
                )}
            </ul>
        </>
    );
}

