
let numbers = [1,3,2,3,4,5];
let aa = numbers;
let [a,b, ...nlist] = numbers;

console.log(aa);
console.log(a);
console.log(b);
console.log(nlist);

numbers.push('7');
console.log('aa',aa);
console.log(a);
console.log(b);
console.log(nlist);

let hong = {
    name:'홍길동',
    age: 20,
    address:'서울시 강남구'
}
let {name, age, address} = hong;

console.log(name);
console.log(age);
console.log(address);
hong.name = 'kkk';
console.log(name);