// mdn : https://developer.mozilla.org/ko/docs/Web/API/Window/fetch
// mdn json() : https://developer.mozilla.org/ko/docs/Web/API/Response/json
// fetch(resourceURL) = 비동기식 처리 방식으로 네트워크를 통해 리소스(jxon, xml)를 가져옴.

// kobis - 일별 박스오피스
let key = `e6cc18e742adf7189da38b34bb5ad8b9`;
let date = new Date();
let year = date.getFullYear();
let month = date.getMonth()+1;
let day = date.getDate();

// let target = `${year}${month}${day}`;
let target = `20241121`;
let url = `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${key}&targetDt=${target}`;

// fetch를 실행했을 때 반환값이 promise인경우 then, catch 사용가능
//1. Response 객체
fetch(url)
    .then((response) => {console.log(response.json()) }) // Promise { <pending> } 가 가지고있어 출력이 안됨.
    .catch((error) => {console.log(error);});

// 2. JSON 데이터 가져오기
let result = await fetch(url); // JSON객체가 문자열 데이터타입으로 가져옴
let jsonData = await result.json(); // .json()함수를 통해 JSON 객체 타입으로 변환
console.log(`type => ${jsonData.boxOfficeResult.boxofficeType}`);
console.log(`range => ${jsonData.boxOfficeResult.showRange}`);
console.log(`ranking => ${jsonData.boxOfficeResult.dailyBoxOfficeList[0].rank}`);
console.log(`name => ${jsonData.boxOfficeResult.dailyBoxOfficeList[0].movieNm}`);

// let result =  fetch(url); 해당내용이 진행되는 동안
// let jsonData = await result.json(); 이 내용이 진행되면  TypeError: result.json is not a function된다.
// [ await ] 진행될 때까지 콜스택이 멈추게 만든다.

































