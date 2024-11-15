// primitive datatype 기본(원시) 데이터 타입 - number, string, boolean...
// 클래스처럼 사용하고 싶을 때..
/* 예) 
class Number{
    ... 
   이런 작업을 엔진에서 만들어놨다.
}
*/
// 기본 데이터타입을 클래스 형태로 정의한 것을 wrapper 클래스라 함.

let a = '123';
a = parseInt(a);
if(a === 123) console.log(a);

if(Number('123') === 123) console.log(`a=> ${a}`);

let maxValue = Number.MAX_VALUE;// MAX_VALUE 상수, static으로 선언된 메소드
let minValue = Number.MIN_VALUE;// MIN_VALUE 상수, static으로 선언된 메소드
console.log('maxValuem : ',maxValue);
console.log('minValue : ',minValue);

let x = 100; // 콜스택에 저장됨.
let y = new Number(100); // heap에 만들고 100을 넣는다. 콜스택에 있는 y변수에 주소값을 전달한다.
console.log(typeof x); // 숫자
console.log(typeof y); // 주소값
console.log(x === y); // false가 나오는 이유
console.log(x === y.valueOf()); // 클래스는 #하기 때문에 직접 가져올 수 없어 메소드valueOf를 이용한다.

/* String class + Templete literal(``) */
let str = 'hello~'; // 콜스택의 크기가 작기 때문에 1줄로. 여러줄로 할 땐 + 를 사용하는걸로(템플릿 리터럴 사용으로 안씀)
let str2 = new String('hello~');
console.log('str : ',typeof str);
console.log('str : ',typeof str2);
console.log(str === str2); // false
console.log(str === str2.valueOf()); // true : 값을 비교

/* Boolean Class */
let flag = true;
let flag2 = new Boolean(true);
console.log('flag : ',typeof flag);
console.log('flag : ',typeof flag2);
console.log(flag === flag2);
console.log(flag === flag2.valueOf());

