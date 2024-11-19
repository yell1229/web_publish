/*
 Array 빌트인 객체의 메소드 익히기 URL = https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array

 */
let array1 = [1,2,3,4,5];
console.log(array1[0]); // array1.0 :: 오브젝트 리터럴 사용 X
console.log(array1['0']); // 문자는 숫자로 바꿔주기때문에 사용가능
console.log(`array1.length = ${array1.length}`);

let fruits = ['🍈','🍉','🍊'];
console.log(fruits);
fruits[fruits.length] = '🥝';
console.log(fruits);

// let fruits2 = new Array('🍈','🍉','🍊');
// console.log('fruits2 : ',fruits2);

fruits.push('🍜'); // 배열의 마지막에 하나 또는 여러개의 데이터 추가 
console.log(fruits);

let a = ['🍩','🍪','🎂'];
fruits.push(a);
console.log('array push : ',fruits); // 마지막 index에 1칸에 들어간다.

// fruits 배열의 전체 key값 반환 : Object.keys(인스턴스명)
// 배열의 key값은 인덱스 주소
console.log(Object.keys(fruits)); // 배열로 리턴 됨
let keyList = Object.keys(fruits); // keyList는 문자 형태의 배열객체
console.log(keyList[2]);

// 배열 요소 삭제
//  배열객체의 마지막 요소 삭제 pop()
console.log('fruits : ',fruits);
let deleteItem = fruits.pop(); // 삭제된 마지막 데이터 저장
console.log('fruits pop 삭제된 마지막 데이터 return: ',deleteItem);
console.log('fruits pop: ',fruits);

//  배열객체의 처음 요소 삭제 shift()
console.log('fruits : ',fruits);
fruits.shift();
console.log('fruits shift : ',fruits);

// fruits.push('🍦','🍧','🍨');
// console.log('fruits 원본 : ',fruits);
// let sfruits = fruits.slice(1,3);
// console.log('추출된 fruits slice: ',sfruits);

//  배열객체의 특정요소 삭제 splice
// 
fruits.push('🍦','🍧','🍨');
console.log('fruits 원본 : ',fruits); // ['🍉', '🍊','🥝', '🍜','🍦', '🍧','🍨']
// 🍉을 딸기로 교체
fruits.splice(0,1,'🍓');
console.log('fruits 원본 : ',fruits); // ['🍓', '🍊','🥝', '🍜','🍦', '🍧','🍨']
// 1~3 번지 요소를 삭제 ['🍊','🥝', '🍜']
fruits.splice(1,3);
console.log('fruits 1~3 번지 요소를 삭제 : ',fruits); // [ '🍓', '🍦', '🍧', '🍨' ]
//0번지 주소에 수박 추가
fruits.splice(0,0,'🍉');
console.log('0번지 주소에 수박 추가 : ',fruits); // [ '🍉', '🍓', '🍦', '🍧', '🍨' ]

// 깊은복사 : 원본에 영향을 줌(삭제, 추가 ..)
// 얕은복사 : 원본 배열의 주소를 복사하여 원본에 영향을 주지 않는다. shallow copy



//  배열객체의 특정요소 추출 slice(index1, index2) 
// slice() 메서드는 어떤 배열의 begin 부터 end 까지(end 미포함)에 대한 얕은 복사본을 새로운 배열 객체로 반환합니다. 원본 배열은 바뀌지 않습니다.
// 얕은복사 : 원본 배열의 주소를 복사하여 원본에 영향을 주지 않는다. shallow copy
let sfruits = fruits.slice(1,3);
console.log('추출된 fruits slice: ',sfruits);

// 배열합치기 concat(배열)
console.clear();
let numberList1 = [1,2,3];
let numberList2 = [4,5,6];
console.log('concat : ',numberList1.concat(numberList2));

// 배열의 순서 바꾸기 reverse()
let numbers = [1,2,3,4,5,6];
console.log('reverse : ',numbers.reverse());

// 배열의 중첩 해제 flat()
//[1,2,3,[5,6]] => [1,2,3,5,6] // 1 level
let fnumbers = [1,2,3,[5,6,[7,8]]]; //2 level
console.log('fnumbers: ',fnumbers);
console.log('fnumbers flat: ',fnumbers.flat(2)); // 2 level 중첩 해제

// 메모리
/*
[1,2,3,[5,6,[7,8]]]
메모리에서는 1,2,3, 배열을 만들고
5,6 배열을 만들고
7,8 배열을 만들어서
전체를 담는 배열을 만든다. 효율성이 떨어짐.
이 업무를 담당하는 함수를 만들어 사용할 것. 함수가 종료되면 만들어진 객체들이 삭제되기 때문이다.

*/

// 배열의 문자요소를 하나의 string 문자열로 반환 : join()
let textList = ['a','b','c'];
console.log(textList); // 배열
console.log(textList.join()); // a,b,c
console.log(textList.join().split(',')); // string type.split(',') : 배열로 만든다.














