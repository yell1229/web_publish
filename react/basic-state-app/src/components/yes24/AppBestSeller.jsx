import {useState,useEffect} from 'react';
import BestBook from './BestBook.jsx';
import './BestBook.css';
import './Menu.css';
import MenuList from './MenuList.jsx';

export default function AppBestSeller() {
    const [menuList, setMenuList] =useState([]);
    const [bookList, setBookList] = useState([]);
    const [category, setCategory] = useState('total'); // 카테고리 변경 시 리스트를 새로 받아온다.
    useEffect(() => {
        fetch('/data/yes24.json')
            .then(data=> data.json())
            .then(jsonData => {
                setMenuList(jsonData.menuList);

                if(category === 'total'){
                    setBookList(jsonData.bookList);
                }else { 
                    //카테고리 값에 따라 필터링 처리 후 setBookList에 추가
                    const newList = jsonData.bookList.filter((item) => (item.category === category));
                    setBookList(newList);
                }
            })
            .catch(error =>console.log(error));
    },[category]); // category 디팬던시(의존) 변경될 때마다 값을 새로 호출한다. useState로 관리되어야 함.

    
    // App <- MenuList <- Menu
    const handleMenuClickReq2 = (category) => {
        console.log('AppBestSeller -> ',category);
        setCategory(category);
    }

    return (
        <div className="container">

            <MenuList list={menuList} click={handleMenuClickReq2} />
            <BestBook bookList={bookList} />
        </div>
    );
}

