import Header from "./Header.jsx";
import HeaderTop from "./header/HeaderTop.jsx";
import HeaderBottom from "./header/HeaderBottom.jsx";
import Content from "./Content.jsx";
import Top from "./content/Top.jsx";
import MovieChart from "./content/MovieChart.jsx";
import EventSpecial from './content/EventSpecial.jsx';
import './css/main.css';


export default function AppCgv(){
    return (
        <div className="wrap">
            <Header>
                <HeaderTop />
                <HeaderBottom />
            </Header>
            <Content>
                <Top />
                <MovieChart />
                <EventSpecial />
            </Content>
        </div>
    );
}