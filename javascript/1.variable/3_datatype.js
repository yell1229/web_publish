/* 
    Primitive data type
    - 정수형(Integer) : 100, 1, ...
    - 실수형(Float, Double): 0.12, ....
    - 문자형(Charactor): 'string', "string"
    - 불린형: Boolean (true / false)

    Reference data type
    - 객체형(Object) : 배열([]), JSON({}) ..
    - 
*/ 

// 정수형 변수
let number = 1000000000; 
number = 100.234;
console.log(number);

//실수형 변수
let fnumber = 10.234;
console.log(fnumber);

// 객체형 변수
let ageList = ['홍길동','홍길순','홍길남'];
console.log(ageList[0]);

//primitive, reference  데이터 타입 초기화
let address = undefined; // primitive / Primitive의 값이 정의되지 않음
let addressList = null;  //reference / Reference의 값이 안담기거나 아무런 값도 가지지 않는 값.

//boolean
let flag = true; // !(not)
flag = !true;
let flagTest = !flag;

// 데이터 타입 비교: typeof
let x = 10;
let xx = 10;
let y = '10';
let obj = {name:'홍길동'};
console.log(x, typeof x);
console.log(y, typeof y);
console.log(x == y); // 값만 비교
console.log(x === y); // data type 까지 비교
console.log(x === xx);
console.log(obj, typeof obj);

