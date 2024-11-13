// javascript의 Object는 다양한 타입의 데이터들을 저장(관리)하는 방식
// object literal : {property(key): value, property(key): value}  // (프리미티브(기본형태) 데이터타입)

/*
let a = 10 // 값(프리미티브)을 리터럴이라고 한다.
let b = [1,2,3] // 리터럴 X
*/

// 1. obj 데이터 출력
const obj = { // heap에 저장| obj의 주소값을 재할당 불가.
    name : '홍길동', //값을 바꿀 수 있다.
    age : 20,
}
console.log(obj); // 주소에 있는 데이터를 다 가져온다.
console.log(obj.name, typeof obj.name);
console.log(obj.age, typeof obj.age);

// 2. name '김철수'로 변경
obj.name = '김철수';
console.log('변경 : ', obj.name);

// 3. age를 삭제
delete obj.age;
console.log(obj);



































