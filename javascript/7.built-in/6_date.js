//날짜형식 Date 클래스
console.log(Date.now());
console.log(new Date());

let date = new Date(); // 현재 사용하는 시스템의 날짜를 객체 생성
console.log(date.getFullYear());
console.log(date.getMonth()+1); // Y2K 이후 이후로 +1 필요함.
console.log(date.getDate());

let year = date.getFullYear();
let month = date.getMonth();
let day = date.getDate();
let hour = date.getHours();
let minutes = date.getMinutes();
let second = date.getSeconds();
// '2024년 11월 15일' => String.concat()
let display = year.toString(); // typeof string
console.log('concat : ',display.concat('년 ',month,'월 ',day,'일')); // 접합연산자처럼 처음 문자로 시작했으니 month, day로 문자 연결로 인식한다.

// '2024년 11월 15일' => 템플릿 리터럴
console.log(`템플릿 리터럴 : ${year}년 ${month +1}월 ${day}일 ${hour}시 ${minutes}분 ${second}초`);

// 날짜 출력 타입 지정
console.log(date.toLocaleString('ko-KR')); // 2024. 11. 15. 오후 4:13:16
console.log(date.toLocaleString('en-US')); // 11/15/2024, 4:13:16 PM

console.log(date.toLocaleDateString('ko-KR')); // 2024. 11. 15.
console.log(date.toLocaleDateString('en-US')); // 11/15/2024

