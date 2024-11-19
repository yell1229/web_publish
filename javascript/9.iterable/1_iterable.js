// iterable(이터러블 ::개념적 오브젝트) object  - Iteration Protocol : 순회를 위한 규칙, 조약
// for...of , ...(Spread 연산자:전개구문) , 구조 분해 할당(destructing object) 
// String(글자를 배열로 저장할 수 있다), Array , Map , Set ...

// 'Hello JavaScript~!!!'
// const text = 'Hello JavaScript~!!!'; // wrapper class로 전환된다.
const text = new String('Hello JavaScript~!!!');

for(let element of text){
    console.log(`element = ${element}`);
}

// [1,2,3,4,5]
const number = [1,2,3,4,5];
for(let ele of number) console.log(`ele = ${ele}`);

// Number class 생성 및 실행
/*
const numberClass = new Number(12345);
for(let n of numberClass) console.log(`n = ${n}`); // TypeError: numberClass is not iterable
*/

























