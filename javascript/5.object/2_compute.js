import {setValue, getValue, updateValue, deleteValue} from './module.js';

// person 객체
const person = {
    name :'홍길동', // key에 ''생략 가능
    age: 20,
    job :'개발자'
}
const fruits = {
    name :'사과',
    emoji :'🍎'
}
// console.log('person : ',person);
// console.log('person.name : ',person.name);
// console.log('person.age : ',person.age);
// console.log('person.job : ',person.job);

setValue(person,'address','서울시'); // 외부에서 사용시 'key' 사용
setValue(fruits,'address','경북');
setValue(fruits,'color','red');

console.log('setValue : ',person);
console.log('setValue : ',fruits);

console.log(getValue(person,'name'));
console.log(getValue(fruits,'color'));

updateValue(person, 'name', 'kim rich');
updateValue(fruits, 'color', 'green');
console.log('updateValue : ',person);
console.log('updateValue : ',fruits);

deleteValue(person,'age');
deleteValue(fruits,'name');
console.log('deleteValue : ',person);
console.log('deleteValue : ',fruits);










