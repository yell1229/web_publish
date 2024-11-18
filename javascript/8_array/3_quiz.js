// 1. 배열의 사과 요소를 딸기로 교체 🍓
let fruits = ['🍎','🍑','🍎'];
//for index 활용
// for(let i=0; i < fruits.length; i++){
//     if(fruits[i] === '🍎') fruits[i] = '🍓';
// }
// console.log('사과 요소를 딸기로 교체 : ',fruits);

// function
let replaceArray = (array, oldValue, newValue) => {
    let result = '';
    for(let i=0; i < array.length; i++){
        if(array[i] === oldValue) array[i] = newValue;
        result += `${array[i]}\t`;
    }
    console.log(result);
}
replaceArray(fruits,'🍎','🍓');
let numbers = [1,2,3,1,2,1,5];
replaceArray(numbers,1,9);

// 함수 배열타입으로 객체를 반환
let replaceArray2 = (array, oldValue, newValue) => {
    let resultArray = Array.from(array); // static method
    for(let i=0; i < resultArray.length; i++){
        if(resultArray[i] === oldValue) resultArray[i] = newValue;
    }
    return resultArray;
}

let names = ['hong','kim','park','hong'];
let resultObj = replaceArray2(names,'hong','gong');
console.log('resultObj : ',resultObj);
