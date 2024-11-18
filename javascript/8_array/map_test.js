// filter

const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];
// console.log(words.filter((item)=> item.length > 6 )); // []
console.log('words : ', words.filter((item) =>item.length >6));


let numbers = [1,2,3,4,5,6,7];
// 5 이상 숫자 forEach
let array = [];
numbers.forEach((el) => {
    if(el >=5) array.push(el)
});

console.log(array);

// 5 이상 숫자 filter
let array2 = numbers.filter((el) => el >=5);

console.log('filter array2 : ', array2);

let numbers2 = [1.4, 2.5, 3.3, 4.4, 5.5, 6.6, 7.7];
// 3보다 큰 값 출력
let array3 = numbers2.filter((el) => el >= 3);
console.log('array3 : ',array3);

// numbers2의 모든 값을 반올림 한 후 3보다 크거나 같은 값을 출력
let array4 = numbers2.map((el) => Math.round(el)).filter((el) => el >= 3);
console.log('array4 : ',array4);

// 아이템 배열의 전체 길이수를 반환하는 함수
let fList = ['🍕','🍔','🍟','🌭','🍕'];
let nList = [1,2,4,5,6,78,45,33,90, 4, 4];



function searchIten(array, item){
    return array.filter((el) => el === item);
    
}
console.log(searchIten(fList,'🍕')); // 2출력
console.log(searchIten(nList,4)); //


