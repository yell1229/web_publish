import MovieChartTitle from "./MovieChartTitle";
import EventItem from "./EventItem.jsx";

export default function Event(){
    const list = [
        {"src":"/img/88738_320.jpg","title":"2025 CGV 짱구는 못말려 캘린더 출시!","date":"2024.11.29 ~ 2024.12.31"},
        {"src":"/img/88738_320.jpg","title":"[2025] CGV 짱구는 못말려 캘린더 출시!","date":"2024.11.29 ~ 2024.12.31"}
    ];

    return (
        <div className="event">
            <MovieChartTitle text1="Event" text3="전체보기" />
            <ul>
                {
                    list.map( item => 
                        <li><EventItem src={item.src} title={item.title} date={item.date} /></li>
                    )
                }
            </ul>
        </div>
    );
}