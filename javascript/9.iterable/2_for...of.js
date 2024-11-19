/*  
    mdn: https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/for...of
    iterable object의 요소를 순회하여 출력함
    // 형식 : for(variable of iterable_object){ 실행문; }
*/
// 배열의 요소를 교체하는 함수를 정의 : for ...of , forEach(index가 있어서 더 효율적이다.)
// function replace(array, origin, target){
//     let resultArray = Array.from(array);
//     let index = 0;
//     for(element  of resultArray){
//         if(element === origin) {
//             // splice(인덱스, 1, 교체할요소);
//             resultArray.splice(index,1,target);
//         }
//         index++;
//     }
//     return resultArray;
// }

// forEach
function replace(array, origin, target){
    let result = Array.from(array);
    result.forEach((el, index) => {
        if(el === origin) result.splice(index,1,target);
    })
    return result;
}

// for문
// function replace(array, origin, target){
//     let resultArray = Array.from(array);
//     for(let i=0; i < resultArray.length; i++){
//         let ele = resultArray[i];
//         if(ele === origin){
//             // resultArray[i] = target;
//             resultArray.splice(i, 1, target);
//         }
//     }
//     return resultArray;
// }

let fruits = ['🍎','🍑','🍎','🍐','🍎','🍏'];
let result = replace(fruits, '🍎','🍌');
console.log(`result :  ${result}`);

let numbers = [1,2,3,4,2,2,5,2];
let resutl2 = replace(numbers,2,7);
console.log(`resutl2 = ${resutl2}`);


// map, filter 사용해보기



















