// 중복된 배열을 입력받아, 중복을 제거한 후 출력
/*
let numbers = [1,2,3,4,1,2,1,2,3,3,5,6,7,8,9];
let nSet = new Set(numbers); // string, array, map, set
console.log(numbers.length, numbers);
console.log(nSet.size, nSet);
*/

// 중복된 배열을 입력받아, 중복을 제거한 후 출력하는 함수 
let numbers = [1,2,3,4,1,2,1,2,3,3,5,6,7,8,9];
let names = ['홍길동','김영희','최철수','홍길동','김영희','최철수'];
let resultObj = filter(numbers);
let resultObj2 = filter(names);
function filter(iterable){
    return new Set(iterable);
}
console.log('filter : ',resultObj); 
console.log('filter : ', typeof resultObj2 , resultObj); 


// 사원의 이름을 입력받아, 사번을 생성하고 각각의 변수로 반환(구조 분해 할당)하는 함수
function createEmployeeNumber(array){
    //배열 전체의 요소를 대상으로 하는 작업이며, 결과가 새로운 배열로 반환
    return array.map((ename) => { // {}으로 묶은 상태에서 실행한 경우 return 
        return ename.concat('_', Math.floor(Math.random()*1000000));
    });// []결과가 들어감
}
let employeeNames = ['smith','kelly'];
// 리턴된 배열을 구조 분해 할당을 한다. smith :'smith_234523' , kelly : 'kelly_123345'
let [smith, kelly]  = createEmployeeNumber(employeeNames); // return ['smith_234523','kelly_123345']
console.log(smith);
console.log(kelly);






























