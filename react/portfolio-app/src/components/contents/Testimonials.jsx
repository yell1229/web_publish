import React,{useState, useEffect} from 'react';
import List from './List.jsx';

export default function Testimonials() {
    const [list, setList] = useState([]);

    useEffect(() => {
        fetch('/data/portfolio.json')
            .then(data => data.json())
            .then(jsonData => setList(jsonData.info) )
            .catch(error =>console.log(error))
    },[]);

    return (
        <section id="testimonial" class="section max-container">
            <h2 class="title">Testimonial</h2>
            <p class="description">See what they say about me</p>
            <ul class="testimonials">
                {
                    list && list.map( item =>
                        <List img={item.img} info={item.infoText} name={item.name} com={item.company} />
                    )
                }
                
            </ul>
        </section>
    );
}

