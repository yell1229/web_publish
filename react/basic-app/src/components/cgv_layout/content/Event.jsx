import MovieChartTitle from "./MovieChartTitle";
import EventItem from "./EventItem.jsx";

export default function Event(){
    const list = [
        {"href":"#" , "src":"img/17332152020130.jpg","title":"2025 CGV 짱구는 못말려 캘린더 출시!","date":"2024.11.29 ~ 2024.12.31"},
        {"href":"#" , "src":"img/17332152020130.jpg","title":"[2025] CGV 짱구는 못말려 캘린더 출시!","date":"2024.11.29 ~ 2024.12.31"}
    ];

    return (
        <div className="event">
            <MovieChartTitle text1="Event" text3="전체보기" />
            <div class="event_area">
                {
                    list.map( item => 
                        <div class="box"><EventItem href={item.href} src={item.src} title={item.title} date={item.date} /></div>
                    )
                }
            </div>
        </div>
    );
}