// Map class 생성
const fList = new Map( [[ 1, 'one'],[ 2, 'two' ]]); // 배열이 키, 값 형태로 묶여있어야 한다.
console.log(fList);
console.log(fList.get(1));

// 사이즈 확인
console.log(`size ==> ${fList.size}`); // 2개
fList.set(3,'three');
// fList.set([[4,'four'],[5,'five']]); // set은 이터러블이 되지 않는다. 
fList.set(4,'four');
console.log(fList);
// 데이터 확인
if(fList.has(3)) console.log(fList.has(3));
if(fList.has(5)) console.log(fList.has(5));

// 모든 키값 출력
console.log(fList.keys());
console.log(fList.values());

// key, value를 입력된 순서대로 배열 형태로 반환
let iteratorObj = fList.entries();
console.log(iteratorObj.next()); // { value: [ 1, 'one' ], done: false }
console.log(iteratorObj.next().value); // [ 2, 'two' ] : 해당 값만 가져올 때 value


// 순회작업 :  forEach
// { 1 => 'one', 2 => 'two', 3 => 'three', 4 => 'four' }
fList.forEach((ele) => {console.log('ele = ',ele);}); // value값만 출력됨.
fList.forEach((value, key) => {console.log('value , key = ',key, value);}); // value값 먼저 출력됨.
fList.forEach((value, key, map) => {console.log('value , key , map = ',key, value, map);}); // map 에서는 value, key, map 3가지만 받을 수 있다.

// 순회 : for...of
// [key, value]
for(let element of fList) console.log('element : ',element);
console.log('fList.keys() : ',fList.keys());
// key
for(let key of fList.keys()) console.log('key : ',key);
// value
for(let value of fList.values()) console.log('value : ',value);
// entris
for(let entry of fList.entries()) console.log(Array.isArray(entry) , 'entry : ',entry);


// 데이터 삭제
if(fList.has(1)) fList.delete(1);
console.log('delete 1 : ',fList);

// 전체 삭제
fList.clear();
console.log('fList clear : ',fList);




