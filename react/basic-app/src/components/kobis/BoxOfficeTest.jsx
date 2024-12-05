import {useState, useEffect} from 'react';
import BoxTest from './BoxTest.jsx';
import './Boxoffice.css';

export default function BoxOfficeTest(){
    const [data, setData] = useState([]);
    // const [poster, setPoster] = useState([]);

    useEffect(() => {
        const key = `e6cc18e742adf7189da38b34bb5ad8b9`;
        const url = `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${key}&targetDt=20241203`;
        console.log(url);
        
        fetch(url)
            .then((result) => result.json())
            .then(jsonData => setData(jsonData.boxOfficeResult.dailyBoxOfficeList))
            .catch(error => console.log('error??'));
    });

    console.log(data);
    
    

    // useEffect(() => {
    //     let key = `MO075W76WVQ09UK49059`;
    //     let url = `http://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp?collection=kmdb_new2`;
    //         url +=`&detail=Y&title=${title}&releaseDts=${date}&ServiceKey=${key}`;

    //     fetch(url)
    //         .then(result => result.json())
    //         .then(jsonData => setPoster())
    //         .catch(error => console.log('error'));
    // });

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>순위</th>
                        <th>제목</th>
                        <th>개봉일</th>
                        <th>관객수</th>
                        <th>누적관객수</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item) => 
                            <BoxTest rank={item.rank} movieNm={item.movieNm} open={item.openDt} audiCnt={item.audiCnt} audiAcc={item.audiAcc} />
                        )
                    }
                </tbody>
            </table>
        </>
    );
}