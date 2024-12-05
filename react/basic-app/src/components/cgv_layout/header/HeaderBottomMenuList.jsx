import HeaderBottomMenu from './HeaderBottomMenu.jsx';

export default function HeaderBottomMenuList(){
    const names = [
        {"name" : "영화" , "href" : "#"},
        {"name" : "극장" , "href" : "#"},
        {"name" : "예매" , "href" : "#"},
        {"name" : "스토어" , "href" : "#"},
        {"name" : "이벤트" , "href" : "#"},
        {"name" : "혜택" , "href" : "#"},
    ];
    return (
        <ul class="nav">
            <li class="logo"><a href=""><img src="img/logoWhite.png" alt="CGV" /></a></li>
            {
                names.map(item =>
                <li>
                    <HeaderBottomMenu name={item.name} href={item.href} />
                </li>
                )
            }
        </ul>
    );
}