// 기본 노출되는 element 호출
initForm();


// 기본 박스오피스 화면 출력: 20241121
function initForm(){
    let output = `
    <h1>일별 박스오피스</h1>
    <div id="search">
        <select id="type">
            <option value="default">선택</option>
            <option value="Daily">일별</option>
            <option value="Weekly">주간/주말</option>
        </select>
        <input type="text" id="searchDt" placeholder="예) 20241121">
        <button type="button"id="searchBtn">Search</button>
    </div>
    <div id="result"></div>
    `;
    document.querySelector('body').innerHTML = output;

    // 로딩 시 화면에 최신 리스트 노출
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth()+1;
    let day = date.getDate() -1;
    let defaultDate = `${year}${month}${day}`;
    kobisBoxOffice('Daily',defaultDate);

     //search 버튼 이벤트 추가
    let button = document.querySelector('#searchBtn');
    button.addEventListener('click',() => {
        let type = document.querySelector('#type');  
        let searchDt = document.querySelector('#searchDt');
        if(type.value === 'default'){
            alert('type을 선택해주세요');
            type.focus();
        }else if(searchDt.value === ''){
            alert('날짜를 입력해주세요');
            searchDt.focus();
        }else if(typeof parseInt(searchDt.value) == 'number' || typeof parseInt(searchDt.value) == 'NaN'){
            console.log(parseInt(searchDt.value));
            
            alert('숫자를 입력해주세요.')
            searchDt.focus();
        }else if(searchDt.value.length !== 8){
            alert('8자리를 맞춰 입력해주세요.')
            searchDt.focus();
        }else{
            kobisBoxOffice(type.value, searchDt.value);
        }
        
    });

} // end of initForm

//코비스 json 호출
async function kobisBoxOffice(operType, searchDt){
    const key = `e6cc18e742adf7189da38b34bb5ad8b9`;
    let url = `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/search${operType}BoxOfficeList.json?key=${key}&targetDt=${searchDt}`;

    let kobis = await fetch(url);
    let data = await kobis.json();
    let type = data.boxOfficeResult.boxofficeType;
    let range = data.boxOfficeResult.showRange;
    let dateRange = range;
    let rankList = null;
    if(operType === 'Daily'){
        rankList = data.boxOfficeResult.dailyBoxOfficeList;
        dateRange = range.substring(0,8);
    }else if(operType === 'Weekly'){ rankList = data.boxOfficeResult.weeklyBoxOfficeList;}
    let output = `
        <h3>박스오피스 타입 : ${type}</h3>
        <h3>박스오피스 일자 : ${dateRange}</h3>
        <table>
            <tr>
                <th>순위</th>
                <th>제목</th>
                <th>개봉일</th>
                <th>일별 관객수</th>
                <th>누적관객수</th>
            </tr>
            `;
        rankList.forEach((ele) => {
            output += `
            <tr>
                <td>${ele.rank}</td>
                <td>${ele.movieNm}</td>
                <td>${ele.openDt}</td>
                <td>${ele.audiCnt}</td>
                <td>${ele.audiAcc}</td>
            </tr>
            `;
        });
        
        output += `
        </table>
    `;
    document.querySelector('#result').innerHTML = output;
    document.querySelector('h1').innerHTML =  data.boxOfficeResult.boxofficeType;

} // end of kobisBoxOffice























