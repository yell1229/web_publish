import MovieChartTitle from "./MovieChartTitle.jsx";
import SpecialItem from "./SpecialItem.jsx";
import {useState, useEffect} from 'react';

export default function Special(){
    const [list , setList] = useState([]);

    useEffect(()=>{
        fetch('/data/cgv_content.json')
            .then(data => data.json())
            .then(jsonData => setList(jsonData.specialList))
            .catch(error => console.log('error'))
    },[]);


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