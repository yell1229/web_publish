/*
API의 promise 리턴값 확인 후 호출
fetch('네트워크로 접속할 서버의 주소 URL') //resolve(result), reject(error)
    .then((result) => {})
    .catch((error) => {});
*/
let url = 'http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=82ca741a2844c5c180a208137bb92bd7&targetDt=20120101';

fetch(url) //resolve(result), reject(error)
    .then((result) => {console.log(`result -> ${result}`)})
    .catch((error) => {console.log(`error -> ${error}`)});


