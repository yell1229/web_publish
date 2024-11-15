// Math 클래스 - 정의된 모든 변수, 상수, 함수 값은 static
// Math.변수 , Math.상수 , Math.함수명
let num1 = 123.856;
console.log(num1, typeof num1);
console.log('Math.abs : ',Math.abs(num1)); // 절대값으로 바꿔서 출력
console.log('Math.floor : ',Math.floor(num1)); // 소숫점 절삭
console.log('Math.trunc : ',Math.trunc(num1)); // 소숫점 절삭
// console.log('Math.trunc : ',Math.trunc(num1,1)); // 소숫점 절삭
console.log('Math.round : ',Math.round(num1)); // 반올림
console.log('Math.max(1,2,3,4,10) : ',Math.max(1,2,3,4,10)); // 최대값 비교
console.log('Math.min(1,2,3,4,10) : ',Math.min(1,2,3,4,10)); // 최소값 비교
console.log('Math.random() : ',Math.random()); // 0~1사이의 숫자를 랜덤하게 반환

//자릿수별 절삭
let num2 = 5.123486;
console.log('num2.toPrecision',Number(num2.toPrecision(5))); // 전체 자릿수 카운팅 + 반올림


// 1~100 사이의 숫자를 랜덤하게 출력
console.log('random : ', Math.floor(Math.random()*100 + 1) );