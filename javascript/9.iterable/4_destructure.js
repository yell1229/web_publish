// 구조 분해 할당(destructure) mdn:  https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
let numbers = [1,2,3,4,5];
let aa = numbers; // numbers의 주소카피
let [a, b, ...nlist] = numbers; // 새로운 구조에 할당
/*
    let a = numbers[0];
*/
console.log('numbers : ',numbers);


console.log(aa); // shallow copy
console.log(a); // a는 변수
console.log(b);
console.log(nlist); // nlist에 배열

let hong = {
    name:'홍길동',
    age: 20,
    address:'서울시 강남구'
}
// hong객체의 key를 변수로 정의
let {name, age, address} = hong; // 객체형태의 데이터는 key 이름을 동일하게 해야됨. undefiend
/*
    구조분해 할당으로 정의되는 변수는
    객체의 key(프로퍼티,속성)과 동일한 이름으로 정의되어야 함.   
    let name = hong.name;
    let age = hong.age;
    let address = hong.address;
*/
console.log(name);
console.log(age);
console.log(address);



// 함수의 반환값을 받아 구조 분해 할당(destructure) 방식으로 정의
function createEmoji(){
    return{
        names:'apple',
        color:'red',
        emoji:'🍎'
    }
}

let {names,color,emoji, price=1000} = createEmoji(); //price 변수를 추가할 때 값까지 함께 할당해준다.
console.log('names : ',names);
console.log('color : ',color);
console.log('emoji : ',emoji);
console.log('price : ',price);

//-----
let flist = ['🍎','🍊','🍋'];
let [apple, ...redFrunts] = flist;
console.log(apple, redFrunts);


















