import Logo from "./Logo.jsx";
import HeaderTopImage from './HeaderTopImage.jsx';
import HeaderTopMenuList from './HeaderTopMenuList.jsx';

export default function HeaderTop(){
    return (
        <div class="header_area">
            <div class="inner">
                <Logo href="/" src="/img/logoRed.png" target="_self" alt="CGV" text="DEEP DIVE SPACE" />
                <div class="info_menu">
                    <HeaderTopImage  src="img/16758461047540.png" alt="현대카드" />
                    <HeaderTopMenuList />
                </div>
            </div>
        </div>
    );
}