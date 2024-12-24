import Header from "./Header.jsx";
import HeaderTop from "./header/HeaderTop.jsx";
import HeaderBottom from "./header/HeaderBottom.jsx";
import Content from "./Content.jsx";
import Top from "./content/Top.jsx";
import MovieChart from "./content/MovieChart.jsx";
import EventSpecial from './content/EventSpecial.jsx';
import Package from './content/Package.jsx';
import Notice from "./content/Notice.jsx";
import GotoButton from "./content/GotoButton.jsx";
import Footer from './Footer.jsx';
import FooterTop from "./footer/FooterTop.jsx";
import FooterContent from "./footer/FooterContent.jsx";
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
                <Package />
                <Notice />
                <GotoButton />
            </Content>
            <Footer>
                <FooterTop src="/img/980x240.png" alt="배너" />
                <FooterContent />
            </Footer>
        </div>
    );
}