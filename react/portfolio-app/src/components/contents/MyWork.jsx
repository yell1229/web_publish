import React,{useState, useEffect, useRef} from 'react';
import ImgBox from './ImgBox.jsx';

export default function MyWork() {

    const [portfolio, setPortfolio] = useState([]);
    const [type, setType] = useState('total');
    const [typeTotal, setTypeTotal] = useState(0);
    const [typeFront, setTypeFront] = useState(0);
    const [typeBack, setTypeBack] = useState(0);
    const [typeMobile, setTypeMobile] = useState(0);
    
    useEffect(() =>{
        fetch('/data/portfolio.json')
            .then(data => data.json())
            .then(jsonData => {
                setTypeTotal(jsonData.boxList.length);
                setTypeFront(jsonData.boxList.filter( item =>item.type === 'front').length);
                setTypeBack(jsonData.boxList.filter( item =>item.type === 'back').length);
                setTypeMobile(jsonData.boxList.filter( item =>item.type === 'mobile').length);
            })
            .catch( error => console.log(error) )
    },[])
    
    
    // click 필터된 이미지 노출
    useEffect(() =>{
        fetch('/data/portfolio.json')
            .then(data => data.json())
            .then(jsonData =>  {
                if(type==='total'){
                setPortfolio(jsonData.boxList);
                }else{
                    const newList = jsonData.boxList.filter(item => item.type === type )
                    setPortfolio(newList);
                }

            })
            .catch( error => console.log(error) )
    },[type])
    
    
    const handleFilter = (e) => {
        setType(e.target.getAttribute('data-type'));
        const children = e.target.parentElement.parentElement.children;
        const childrenArr = Object.entries(children);
        childrenArr.map(item =>
            item[1].children[0].classList.remove('category--selected')
        )
        e.target.classList.add('category--selected'); 
    }
    
    return (
        <section id="work" class="section max-container">    
        <h2 class="title">My work</h2>
        <p class="description">Projects</p>
        <ul class="categories">
            <li><button type="button" data-type="total" className='category category--selected' onClick={handleFilter}>All<span class="category__count">{typeTotal}</span></button></li>
            <li><button type="button" data-type="front" className='category'  onClick={handleFilter}>Front-end<span class="category__count">{typeFront}</span></button></li>
            <li><button type="button" data-type="back" className='category' onClick={handleFilter}>Back-end<span class="category__count">{typeBack}</span></button></li>
            <li><button type="button" data-type="mobile" className='category' onClick={handleFilter}>Mobile<span class="category__count">{typeMobile}</span></button></li>
        </ul>
        <ul class="projects">
            {
                portfolio.map((item) => 
                    <ImgBox img={item.img} title={item.title} para={item.para} />
                )
            }
        </ul>    
    </section>
    );
}

