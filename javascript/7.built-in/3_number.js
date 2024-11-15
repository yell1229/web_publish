// Number 클래스들의 메소드
// Number객체.valueOf()
let a = 100;
let b = new Number(100);
console.log(typeof a, typeof b);
console.log(a === b);
console.log(a.valueOf() === b.valueOf()); //a의 valueOf()사용으로 데이터 타입을 바꿔버린다. 오류가 생기지는 않는다.

// Number객체.toLocaleString() 10000 => 10,000(string)
//3자리씩 끊어서 쉼표로 구분
let num = 123000;
console.log(num.toLocaleString()); // 넘버객체가 아니지만,  엔진이 알아서 기본형태로 받아도 사용가능하게 만든다.
let num2 = new Number(123000); //이렇게 사용하는게 맞음.
console.log(num2.toLocaleString());

// MAX_VALUE, MIN_VALUE ...  ex) Number.MAX_VALUE
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
let num3 = 123.45;
console.log(num3.toFixed()); // 정수로 반올림
