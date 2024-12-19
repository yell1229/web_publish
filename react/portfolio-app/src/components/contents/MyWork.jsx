import React,{useState, useEffect, useRef} from 'react';
import ImgBox from './ImgBox.jsx';

export default function MyWork() {

        const ulRef = useRef(null)
    const [portfolio, setPortfolio] = useState([]);
    const [type, setType] = useState('total');
    const [initNum,setInitNum] = useState(0);
    useEffect(() =>{
                fetch('/data/portfolio.json')
                    .then(data => data.json())
                    .then(jsonData=>{
                        if(type==='total'){
                            setPortfolio(jsonData.boxList);
                            setInitNum(jsonData.boxList.length);
                        }else{
                            const newList = jsonData.boxList.filter( (item) => item.type === type )
                            console.log('filter 갯수 :', newList.length);
                            setInitNum(newList.length);
                            setPortfolio(newList);
                        }

                    })
                    .catch(error => console.log(error))
            },[type]);
    
    const handleFilter = (e) => {
        setType(e.target.getAttribute('data-type'));
        //console.log('ul',ulRef.current.childElementCount);
        // console.log('click span check?? ',e.target.firstElementChild);
        e.target.firstElementChild.textContent = initNum;   
        console.log('initNum',initNum);
        
    }

    
    return (
        <section id="work" class="section max-container">    
        <h2 class="title">My work</h2>
        <p class="description">Projects</p>
        <ul class="categories">
            <li><button type="button" data-type="total" class="category category--selected" onClick={handleFilter}>All<span class="category__count">8</span></button></li>
            <li><button type="button" data-type="front" class="category" onClick={handleFilter}>Front-end<span class="category__count">3</span></button></li>
            <li><button type="button" data-type="back" class="category" onClick={handleFilter}>Back-end<span class="category__count">3</span></button></li>
            <li><button type="button" data-type="mobile" class="category" onClick={handleFilter}>Mobile<span class="category__count">2</span></button></li>
        </ul>
        <ul class="projects" ref={ulRef}>
            {
                portfolio.map((item) => 
                    <ImgBox img={item.img} title={item.title} para={item.para} />
                )
            }
        </ul>    
    </section>
    );
}

