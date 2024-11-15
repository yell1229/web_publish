// {} 범위에 따라 
// global 함수 : 함수명으로 호출이 가능
// ex) parseInt(), parseFloat()...
// parseInt(데이터) : 데이터를 정수로 변환
// parseFloat(데이터) :  데이터를 실수로 변환
let a = '100.10';
// a = parseInt(a); // 정수
a = parseFloat(a); // 실수
console.log(typeof a);
console.log(a);

// uri 인코딩 : ex) http://www.naver.com/
let uri = 'http://www.naver.com/';

let encode = encodeURI(uri); // 링크로 인식하게 만든다.
console.log(`encode :  ${encode}`);

// uri 디코딩
let decode = decodeURI(uri); //string으로 변환
console.log(`decode :  ${decode}`);








