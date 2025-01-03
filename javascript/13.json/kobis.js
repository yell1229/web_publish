import {kobisBoxOffice, kmdb } from './cobisCommon.js';

initForm();

function initForm(){
    const output = `
        <h1>일별 박스오피스</h1>
        <div id="search">
            <select id="type">
                <option value="default">선택</option>
                <option value="Daily">일별</option>
                <option value="Weekly">주간/주말</option>
            </select>
            <input type="text" id="searchDt" placeholder="예시) 20241121">
            <button type="button" id="searchBtn">Search</button>
        </div>
        <div id="result">
        </div>
    `;
    document.querySelector('body').innerHTML = output;

    // 기본 박스오피스 화면 출력: 20241121
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth()+1;
    let day = date.getDate()-1;
    let defaultDate = `${year}${month}${day}`;
    console.log('defaultDate : ', typeof defaultDate, defaultDate);
    
    searchBoxOffice('Daily',parseInt(defaultDate));

    //search 버튼 이벤트 추가
    document.querySelector('#searchBtn').addEventListener('click',function(){
        // validation check 입력창, 박스오피스 타입의 유효성 체크
        let type = document.querySelector('#type');
        let searchDt = document.querySelector('#searchDt');

        if(type.value === 'default'){
            alert('박스오피스 타입을 선택해주세요.');
            type.focus();
        }else if(searchDt.value === '') {
            alert('날짜를 입력해주세요');
            searchDt.focus();
        }else{
            //일별 & 주간/주말 박스오피스 정보 화면 출력
            searchBoxOffice(type.value, searchDt.value);
        }
    });
}// end of initForm



async function searchBoxOffice(ktype, searchDt){
    kobisBoxOffice(ktype, searchDt)//Promise 객체로 넘어온다. 그래서 변수에 넘기지 않고 then으로 받는다.
                    .then((result) => {                    
                        const type = result.boxOfficeResult.boxofficeType;
                        const range = result.boxOfficeResult.showRange;
                        let rankList = null;
                        let posterList = [];
                        if(ktype === 'Daily'){ rankList = result.boxOfficeResult.dailyBoxOfficeList}
                        else if(ktype === 'Weekly'){ rankList = result.boxOfficeResult.weeklyBoxOfficeList;}
                        // rankList = JSON.parse(rankList);

                        // 영화이름 배열로 반환
                        rankList.forEach((element,index) => {
                            let movieNm = element.movieNm;
                            let openDt = element.openDt.replaceAll('-',''); 

                            searchMoviePoster(movieNm,openDt);
                            async function searchMoviePoster(movieNm, openDt){
                                kmdb(movieNm, openDt)
                                    .then((result) =>{ 
                                        let posterArr = result.Data[0].Result[0].posters.split('|');   
                                        let stringMovie = posterArr[0];  
                                        
                                        let imgAll = document.querySelectorAll('.img img');
                                        imgAll[index].setAttribute('src',stringMovie);   
                                    })
                                    .catch((error) => console.log(error));
                            }
                        });
                        
                        let output = `
                            <h3>박스오피스 타입 : ${type}</h3>
                            <h3>박스오피스 일자 : ${range}</h3>
                            <table>
                                <thead>
                                    <tr>
                                        <th>순위</th>
                                        <th>포스터</th>
                                        <th>제목</th>
                                        <th>개봉일</th>
                                        <th>일별 관객수</th>
                                        <th>누적 관객수</th>
                                    </tr>
                                </thead>
                                <tbody>
                                `;

                            rankList.forEach((element,index) => {
                                output +=`
                                <tr>
                                    <td>${element.rank}</td>
                                    <td class="img"><img src="" class="a"></td>
                                    <td>${element.movieNm}</td>
                                    <td>${element.openDt}</td>
                                    <td>${element.audiCnt}</td>
                                    <td>${element.audiAcc}</td>
                                </tr>
                                `;
                            });
                            output += `
                            </tbody>
                            </table>
                            `;
                        // 테이블 화면 출력
                        document.querySelector('#result').innerHTML = output;      
                        
                        // img click event
                        let linkImg = document.querySelectorAll('.a');
                        linkImg.forEach((img) => {
                            img.addEventListener('click',() => {
                                alert('click img');
                            });
                        });
                    })
                    .catch();

}

// async function searchMoviePoster(title, date){
//     let poster = kmdb(title, date)
//         .then((result) =>{ 
//             let posterArr = result.Data[0].Result[0].posters.split('|');   
//             let stringMovie = posterArr[0].toString();    
//             console.log(typeof stringMovie ,stringMovie);
//             return stringMovie;
            
//         })
//         .catch((error) => console.log(error));
//         console.log('poster',poster);
        
//         return await poster;
// }



















