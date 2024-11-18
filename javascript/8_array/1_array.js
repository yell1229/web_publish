/*




let array1 = new Array(10) // 빈칸 10개의 array class 생성
let arrya2 = [1,2,3,4];
let arrya3 = ['1','2','3'];
let arrya4 = [{name:'홍길동'},{name:'김철수'}];
let obj1 = {key:value,key:value};
let obj2 = {key:value,key:value};
let arrya5 = [obj1, obj2];


!! 배열의 생성은 [], // 값이 정해진 경우 사용한다.
//값이 결정되지 않은 경우 : [], new 두개를 이용하여 생성, CRUD 작업은 Array(빌트인 클래스, wrapper class)의 메소드 사용 권장.

!! for문의 구문을 사용하여 데이터를 가져옴 (for, forEach)
!! 배열의 인덱스는 전체크기보다 1작음.

*/

// 배열 생성
let array1 = new Array(2); // 힙에 2개가 생성되어 주소가 array1에 들어가있음. 데이터는 없음
console.log(array1.length);
console.log(array1[0]); //undefined : default로 초기화 되는 값.
console.log(array1[1]); //undefined
console.log(typeof array1); // object
console.log(Array.isArray(array1)); // true

let array2 = new Array(1,2,3); // 크기를 먼저 생성하고 데이터를 초기화
// let array = new Array([1,2,3]);
console.log(array2[0]);

let array3 = ['🍔','🌭','🍿'];
console.log(array3[array3.length-1]); // 마지막 요소 출력

let obj1 = {name:'홍길동',age:20};
let obj2 = {name:'김철수',age:15};
let objList = [obj1, obj2];
console.log('objList :',objList);
console.log('objList[0].name :',objList[0].name);
console.log('objList[0].name update:',objList[0].name='김영희');
console.log('objList[0].name :',objList[0].name);
console.log('typeof : ',Array.isArray(array1) === Array.isArray(objList));

