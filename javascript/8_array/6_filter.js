// filter

const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];
// console.log(words.filter((item)=> item.length > 6 )); // []
// 콜백함수에 {}을 추가하면 반드시 return 키워드를 붙여서 값을 반환
console.log(words.filter((item)=> { return item.length > 6 })); // []

let numbers = [1,2,3,4,5,6,7];
// 5 이상 숫자 forEach
let array = [];
numbers.forEach((el) => {   
    if(el>=5) array.push(el);
    return array
});
console.log(array);

// 5 이상 숫자 filter
// let array2 = numbers.filter((el) =>{ return el >= 5});
let array2 = numbers.filter((el) => el >= 5 );
console.log(array2);

let numbers2 = [1.4, 2.5, 3.3, 4.4, 5.5, 6.6, 7.7];
// 3보다 큰 값 출력
let array3 = numbers2.filter( (el) => el >3 );
console.log(array3);

// numbers2의 모든 값을 반올림 한 후 3보다 크거나 같은 값을 출력
let array4 = numbers2.map((el) => Math.round(el)).filter((el) => el >= 3 );
// let array4 = numbers2.map(Math.round).filter((el) => el >= 3 );
console.log(array4);

// 아이템 배열의 전체 길이수를 반환하는 함수
let fList = ['🍕','🍔','🍟','🌭','🍕'];
let nList = [1,2,4,5,6,78,45,33,90, 4, 4];

function searchIten(array, sItem){
    return array.filter((el) => el === sItem ); 
}
console.log(searchIten(fList,'🍕')); // 2출력
console.log(searchIten(nList,4)); //




