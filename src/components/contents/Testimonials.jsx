import React,{useState, useEffect} from 'react';
import List from './List.jsx';

export default function Testimonials() {
    const [list, setList] = useState([]);

    useEffect(() => {
        fetch('https://yell1229.github.io/react-sample-1/data/portfolio.json')
            .then(data => data.json())
            .then(jsonData => {
                setList(jsonData.info);
 
            })
            .catch(error =>console.log(error))
    },[]);
    
    return (
        <section id="testimonial" className="section max-container">
            <h2 className="title">Testimonial</h2>
            <p className="description">See what they say about me</p>
            <ul className="testimonials">
                {
                    list && list.map( item =>
                        <List img={item.img} info={item.infoText} name={item.name} com={item.company} />
                    )
                }
                
            </ul>
        </section>
    );
}

