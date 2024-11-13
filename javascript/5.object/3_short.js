// 변수를 객체의 value로 사용하는 경우, property 생략 가능
let name = '홍길동';
let age = 20;
const person = {
    // 'name' : name, // 변수의 이름과 프로퍼티가 동일할 경우, 값을 사용하기 때문에 프로퍼티 생략 가능
    // 'age': age
    name, age
}
console.log(person.name);
console.log(person.age);

// ----------------------------------------------

let x = 0; let y = 0;
const obj = {x, y}
console.log(obj);

// ---------------------------------------------

let fname = 'apple';
let emoji = '🍎';
let color = 'red';

const fruits = {fname , emoji , color}
console.log(fruits);

// ---------------------------------------------

// 사원들의 정보를 입력받아, 객체로 반환하는 함수를 정의
// 사원정보 = 사번(empno), 이름(ename), 나이(age)
function createObj(empno, ename, age){
    return {empno, ename, age};
}

console.log(createObj('1234','홍길동','20')); // return {empno :'1234', ename:'홍길동', age:'20'};