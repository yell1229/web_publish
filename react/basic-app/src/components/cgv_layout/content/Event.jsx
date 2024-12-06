import MovieChartTitle from "./MovieChartTitle";
import EventItem from "./EventItem.jsx";
import {useState, useEffect} from 'react';

export default function Event(){
    const [list, setList ] = useState([]);

    useEffect(() => {
        fetch('/data/cgv_content.json')
            .then(data=>data.json())
            .then(jsonData => setList(jsonData.eventList))
            .catch(error => console.log('error'))
    },[]);

    return (
        <div className="event">
            <MovieChartTitle text1="Event" text3="전체보기" />
            <div class="event_area">
                {
                    list && list.map( item => 
                        <div class="box"><EventItem href={item.href} src={item.src} title={item.title} date={item.date} /></div>
                    )
                }
            </div>
        </div>
    );
}