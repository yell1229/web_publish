import BoxOffice from './BoxOffice.jsx';
import { useEffect, useState } from "react";


export default function AppBoxOffice(){
    const [dailyBoxOffice, setDailyBoxOffice] = useState([]);

    useEffect(() => {
        const key = `e6cc18e742adf7189da38b34bb5ad8b9`;
        const url = `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${key}&targetDt=20241203`;

        fetch(url)
            .then((result) => result.json())
            .then((jsonData) => setDailyBoxOffice(jsonData.boxOfficeResult.dailyBoxOfficeList))
            .catch(error => console.log('error') );
    },[]);


    return (
        <>
            <h1>KOBIS BoxOffice</h1>
            <div className="title">
                <BoxOffice 
                        rank = "순위"
                        title = "제목"
                        openDt = "개봉일"
                        cnt = "당일관객수"
                        total = "누적관객수"
                        sale = "누적매출액"
                        type = "title"
                    />
            </div>
            <div className="cont">
                {
                    dailyBoxOffice.map((boxoffice) =>
                        <BoxOffice 
                            rank = {boxoffice.rank}
                            title = {boxoffice.movieNm}
                            openDt = {boxoffice.openDt}
                            cnt = {boxoffice.audiCnt}
                            total = {boxoffice.audiAcc}
                            sale = {boxoffice.salesAcc}
                            type = "content"
                        />
                    )
                }
            </div>  
        </>
    );
}