// map(): map() 메서드는 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환합니다. iterable 함수.
// 순회메소드가 적용되는 map함수는 파라미터 인자로 콜백함수를 입력받아 처리한 결과를 새로운 배열객체로 생성하여 반환함.
let numbers = [1,2,3,4,5];
let fnumbers = [1.001,2.002,3.003,4.004,5.005];

//numbers 배열요소에 각각 10을 곱한 결과 출력
let numbers2 = numbers.map((item) => item * 10);
console.log(numbers2);

//fnumbers배열 요소를 모두 정수로 변환
let fnumbers2 = fnumbers.map((item) => Math.floor(item));
// let fnumbers2 = fnumbers.map( Math.floor); 생략 가능
console.log(fnumbers2);

// 배열의 요소로 Object literal 값이 있는 경우
let objects = [
    {name:'홍길동',age:20},
    {name:'김철수',age:21},
    {name:'최영희',age:22}
];
objects.forEach((el , index) => {console.log(index,el);});
//{홍길동:홍길동, age:20} 새로운 배열로 리턴
// let a = {key : value};
// a[key] // object retural 찾아보기.
let objects2 = objects.map((obj) => {
    let resultObj = {};
    resultObj[obj.name] = obj.value; // key에 value를 넣음
    resultObj[obj.name] = obj.name;    // value에 'name'
    resultObj[obj.age]  = obj.value;
    resultObj[obj.age]  = obj.age;
    return resultObj;
});
console.log(objects2);

let objects3 = objects.map((obj) => {
    let resultObj = {};
});
console.log(objects3);
