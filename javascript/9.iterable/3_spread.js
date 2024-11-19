// Spread Operator(...) 전개구문
// 모든 Iterable object에서 사용 가능
// String, array , map , set
// function 함수명(...param) :: param = []
// [...iterable] : 배열에 제한없이 받겠다.
// {...iterable} : 오브젝트객체도 사용 가능

// 1. function 함수명(...param) 
function add(...numbers) { // numbers [파라미터..]
    let sum = 0;
    for(num of numbers) sum += parseInt(num);
    return sum;
}

let sum = add(1,2,3,'4');
console.log(`sum = ${sum}`);

// 2. [...iterable]
let fruit1 =['🍏','🍋'];
let fruit2 =['🍓','🍊','🍉'];

// fruit1과 fruit2 사이에 '🍍'추가
let fruit3 = fruit1.concat('🍍',fruit2);
console.log('fruit3 : ',fruit3); //  [ '🍏', '🍋', '🍍', '🍓', '🍊', '🍉' ]

let fruit4 = [...fruit1 , '🍍' , ...fruit2];
console.log('fruit4 : ',fruit4); //  [ '🍏', '🍋', '🍍', '🍓', '🍊', '🍉' ]


// 3. {...iterable}
const hong = {
    name:'홍길동',
    age: 20,
    address:'서울시 강남구'
};

const hongUpdate = {
    ...hong, // object 정보만 가져올 수 있음. 같은 type
    job :'개발자'
};

console.log(hongUpdate);
























