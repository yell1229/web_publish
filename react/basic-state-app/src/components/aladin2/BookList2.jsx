import React,{useState, useEffect} from 'react';
import Book from '../aladin/Book';

export default function BookList2() {
    const [book,setBook] = useState([]);
    const [category,setCategory] = useState([]);
    const [type,setType] = useState('total');
    const [selectCategory,setSelectCategory] = useState('');

    useEffect(() => {
        fetch('/data/aladin.json')
            .then(data => data.json())
            .then(jsonData => {
                
                if(type === 'total'){
                    setBook(jsonData.books);
                    setCategory(jsonData.category);

                }else if(type !== 'total' && !selectCategory ){
                    const filterList = jsonData.books.filter((item) => item.type === type);
                    setBook(filterList);

                }else if(type !== 'total' && selectCategory){
                    const filterList = jsonData.books.filter((item) => item.type === type && item.category === selectCategory);
                    setBook(filterList);
                }
            })
            .catch(error => console.log(error));
    },[type, selectCategory]);

    const handleCheck  = (event) => {
        setType(event.target.value);
        
    }

    const handleChangeCategory = (event) => {
        console.log(event.target.value);
        setSelectCategory(event.target.value);
        
    }

    return (
        <>
            <div>
                [{type}]
                <label><input type="radio" name="type" value="total" onClick={(event) =>{setType(event.target.value)}} />전체</label>
                <label><input type="radio" name="type" value="domestic" onClick={handleCheck} />국내</label>
                <label><input type="radio" name="type" value="overseas" onClick={handleCheck} />국외</label>

                <select name="" id="" style={{'margin-left':'10px'}} onChange={handleChangeCategory}>
                    <option value="선택">선택</option>
                    {category && category.map( item =>
                        <option value={item.name}>{item.name}</option>
                    )}
                </select>
            </div>
            <div>
                <ul style={{display:'grid', 'grid-template-columns': 'repeat(4,1fr)'}}>
                    {book && book.map( item =>
                        <li><Book img={item.img} title={item.title} /></li>
                    )

                    }
                </ul>
                
            </div>
        </>
    );
}

