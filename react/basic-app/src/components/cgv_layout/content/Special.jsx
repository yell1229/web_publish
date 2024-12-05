import MovieChartTitle from "./MovieChartTitle.jsx";
import SpecialItem from "./SpecialItem.jsx";

export default function Special(){
    const list =[
        {"text1":"SUITE CINEMA", "text2":"#호텔 컨셉의 프리미엄관"},
        {"text1":"CINE & LIVINGROOM", "text2":"#신개념 소셜 상영관"},
        {"text1":"4DX", "text2":"#모션시트 #오감체험"},
        {"text1":"CINE de CHEF", "text2":"#쉐프가 있는 영화관"},
    ];

    return (
            <div className="special">
                <MovieChartTitle text1="특별관" text3="전체보기" />
                <div className="info_area">
                    <ul>
                        <li className="active"><img src="img/16382612660240.png" alt="" /></li>
                        <li><img src="img/16382612660560.png" alt="" /></li>
                        <li><img src="img/16390080561620.png" alt="" /></li>
                        <li><img src="img/16553622935690.png" alt="" /></li>
                    </ul>
                    <div className="img_list">
                        {
                            list.map(item => <div><SpecialItem text1={item.text1} text2={item.text2} /></div> )
                        }
                    </div>
                </div>
            </div>
    );
}