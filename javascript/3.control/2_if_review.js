// 좋아하는 과일: apple, orange, lemon

let fruit = 'apple';
let choice = undefined;
// 실행결과 1줄일때 {} 생략 가능함.
if(fruit === 'apple') choice = 'apple';
else if(fruit === 'orange') choice = 'orange';
else if(fruit === 'lemon') choice = 'lemon';
else choice = '좋아하는 과일 없음';
console.log(choice);
