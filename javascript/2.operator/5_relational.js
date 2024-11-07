//  비교연산자 : < , > >=, <=, !=, ==, ===
// 실행결과: boolean
// 제어문 if , while.. 에서 사용

console.log(3>2);
console.log(3 == '2'); //문자 2 리터럴과 비교
console.log(3 == 'A'); //문자 A 리터럴(아스키코드 값)과 비교

let obj1 = {
    name:'홍길동',
    fn:function(){
        console.log('test');
    }
}
let obj2 = {
    name:'홍길동'
}
let obj3 = obj1;

console.log(`obj1: ${obj1}`); // 템플릿 리터럴 안에서는 문자로 출력하기 때문에 힙에 있는 주소만 가져온다.
console.log(`obj1: ${obj2}`);

console.log(obj1 == obj2); // false
console.log(obj1 === obj2); // false
console.log(typeof obj1 === typeof obj2); // true

console.log(obj1 == obj3); // true
console.log(obj1 === obj3); //true
console.log(typeof obj1 === typeof obj3); //true


console.log(obj1.name == obj2.name);





