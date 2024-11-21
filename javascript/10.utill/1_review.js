// Iterable Object (빌트인 4가지 : String, Array, Map, Set || ...(클래스처럼 Iterable Object 상속받아 사용할 수 있도록 한 것) : 내부적으로 순회가 가능한 객체들을 말함)
// for...of ,  ...Spread Operator(전개 구문), Destructring Object(구조 분해 할당)
// Map : {key, value} key로 찾기 때문에 index가 없다. - set, get, has, keys, values, clear, entries ...
// Set: (value) 산타의 바구니처럼 랜덤하게 넣고 꺼낸다. 중복X - add, get, has, delete, keys(의미가 없음) , values(값만 가지고 있다) , clear

// 1. Spread Operator
// 함수의 파라미터를 갯수 없이 넣을 때
function display(...params){
    let result = '';
    for(let number of params) console.log(`number : ${number}`);   
}
display(1,2);
display(1,2,3,4,5);

const hong = {
    name:'홍길동',
    age:20
};
const hongUpdata = {
    ...hong,
    address:'서울시'
};
console.log(hongUpdata);

// 2. Destructuring Object(구조 분해 할당)
const getObject = () =>{
    return {name:'공유',age:30};
};
const {name, age}= getObject(); // 이름 동일해야됨 (name, age), 순서 상관없음.
console.log('name, age',name, age);

const getObject2= () =>{
    return [1,2,3];
};
const [n1, n2, n3] = getObject2();
console.log(n1, n2, n3); // 변수 선언과 같음. const n1 = 1; const n2 = 2; const n3 = 3;

// 3. forEach() : 인스턴스객체의 함수
// 인스턴스객체.forEach(콜백함수 : 이름이 없음. 익명함수. 실행하고 사라짐);
const numbers = [1,2,3];
numbers.forEach((num) => console.log(num));

const myMap = new Map();
myMap.set('name','홍길동');
myMap.set('age',20);
myMap.forEach((value, key) => console.log(key,value)); // value가 첫번째 파라미터.

const mySet = new Set();
mySet.add('홍길동');
mySet.add('홍길동');
mySet.add('서현진');
console.log(mySet); // 중복데이터 X
mySet.forEach((value, key) => console.log('value : ',value , key)); // key값이 없기 때문에 value와 동일하게 출력한다.




















