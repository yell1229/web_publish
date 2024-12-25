import React,{useState, useEffect} from 'react';
import ImgBox from './ImgBox.jsx';

export default function MyWork() {
    const [portfolio, setPortfolio] = useState([]);
    const [type, setType] = useState('All');
    const [typeTotal, setTypeTotal] = useState(0);
    const [typeFront, setTypeFront] = useState(0);
    const [typeBack, setTypeBack] = useState(0);
    const [typeMobile, setTypeMobile] = useState(0);

    useEffect(() =>{
        fetch('https://yell1229.github.io/react-sample-1/data/portfolio.json')
            .then(data => data.json())
            .then(jsonData => {
                setTypeTotal(jsonData.boxList.length);
                setTypeFront(jsonData.boxList.filter( item =>item.type === 'Front-end').length);
                setTypeBack(jsonData.boxList.filter( item =>item.type === 'Back-end').length);
                setTypeMobile(jsonData.boxList.filter( item =>item.type === 'Mobile').length);
            })
            .catch( error => console.log(error) )
    },[])

    
    
    // click 필터된 이미지 노출
    useEffect(() =>{
        fetch('https://yell1229.github.io/react-sample-1/data/portfolio.json')
            .then(data => data.json())
            .then(jsonData =>  {
                if(type==='All'){
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
        console.log('type ----->',type);
        
        const children = e.target.parentElement.parentElement.children;
        const childrenArr = Object.entries(children);
        childrenArr.map(item =>
            item[1].children[0].classList.remove('category--selected')
        )
        e.target.classList.add('category--selected'); 
    }
    
    return (
        <section id="work" className="section max-container">    
        <h2 className="title">My work</h2>
        <p className="description">Projects</p>
        <ul className="categories">
            <li><button type="button" data-type="All" className='category category--selected' onClick={handleFilter}>All<span class="category__count">{typeTotal}</span></button></li>
            <li><button type="button" data-type="Front-end" className='category'  onClick={handleFilter}>Front-end<span class="category__count">{typeFront}</span></button></li>
            <li><button type="button" data-type="Back-end" className='category' onClick={handleFilter}>Back-end<span class="category__count">{typeBack}</span></button></li>
            <li><button type="button" data-type="Mobile" className='category' onClick={handleFilter}>Mobile<span class="category__count">{typeMobile}</span></button></li>
        </ul>
        <ul className="projects">
            {
                portfolio.map((item) => 
                    <ImgBox img={item.img} title={item.title} para={item.para} />
                )
            }
        </ul>    
    </section>
    );
}

