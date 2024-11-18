// 배열의 데이터 출력
// for, forEach
let numbers = [1,2,3,4,5];

// numbers.forEach(콜백함수); => 순회(iterable) 메소드 지원
numbers.forEach((el, index) => console.log(`numbers[${index}] = ${el}`)); // 하나씩 찍힌다(순회 = 이터러블)

// 함수 배열타입으로 객체를 반환
// let replaceArray3 = (array, origin, target) => {
//     let resultArray = Array.from(array); // static method
//     //resultArray.forEach((el,i) => (el === origin) ? resultArray[i] = target : el);
//     resultArray.forEach((el,i) => 
//         if(el === origin) { resultArray.splice(i, 1, target); } );
//     return resultArray;
// }
let fruits = ['🍎','🍍','🍎'];
let newFruits = replaceArray3(fruits,'🍎','🍋');
console.log(newFruits);
