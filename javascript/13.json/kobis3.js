initForm();

function initForm(){
    let output = `
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
        <div class="pop_area"></div>
    `;
    document.querySelector('body').innerHTML = output;
    // btn event
    document.querySelector('#searchBtn').addEventListener('click',() => {
        let type = document.querySelector('#type');
        let searchDt = document.querySelector('#searchDt');
        if(type === 'default'){
            alert('타입을 선택해주세요.');
            type.focus();
        }else if(searchDt === ''){
            alert('일별, 주간/주말을 선택해주세요.');
            searchDt.focus();
        }else{
            // validation이 끝나고 실행 할 함수.
            searchKobisData(searchDt.value);
        }
    });
}

async function kobisJson(date){
    let key = `e6cc18e742adf7189da38b34bb5ad8b9`;
    let url = `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${key}&targetDt=${date}`;
    let data = await fetch(url);
    let jsonData = await data.json();
    return jsonData;   
}

async function searchKobisData(searchDt){
    kobisJson(searchDt)
        .then((result) => {
            console.log(result);
            
            let info = result.boxOfficeResult.dailyBoxOfficeList;
            let output = `
                <div>${ result.boxOfficeResult.showRange}</div>
                <table>
                    <tr>
                        <th>순위</th>
                        <th>제목</th>
                        <th>개봉일</th>
                        <th>일별 관객수</th>
                        <th>누적 관객수</th>
                    </tr>
                `;
                info.forEach((ele) => {
                    output +=` 
                    <tr>
                        <td>${ele.rank}</td>
                        <td>${ele.movieNm}</td>
                        <td>${ele.movieCd}</td>
                        <td>${ele.audiCnt}</td>
                        <td>${ele.audiAcc}</td>
                    </tr>
                    `;
                });
                    
                output +=`
                </table>
            `;
            document.querySelector('#result').innerHTML = output;
        })
        .catch((error) => console.log('error'));
}














