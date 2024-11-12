// 일반함수, 함수표현식(익명함수),        화살표(Arrow)함수
// 일반함수 :: function 함수명(파라미터, ...Array){ 실행문; }
// 함수표현식(익명함수) : 실행한 결과 값을 변수에 담는다.::  let 함수명 = function (파라미터, ...Array){ 실행문; }
// 화살표함수 :: let 함수명 =(파라미터) => {실행문} ;


/* 일반함수 정의시 let, const 선언 불가 */
function add(){ // var가 선언된 상태라고 할 수 있다.
    return 1+2;
}

/* 일반 함수 표현식: 값을 바로 출력 */
let add2 = function(){
    return 1+2;
}

/* 화살표 함수 표현식 */
let add3 = () =>  1 + 2;

let add4 = (a,b) => a + b;

let add5 = (a,b,c) => console.log(a + b + c);

let add6 = (a,b,c) => { // 구문처리가 필요할 때, 1줄 넘어갈 때 {}사용
    if(a>0 && b>0 && c>0) console.log(a + b + c)
        else console.log('a,b,c는 0보다 커야함.');
        
}

console.log(add());
console.log(add2());
console.log(add3());
console.log(add4(1,2));
add5(1,2,3);
add6(1,2,-3);