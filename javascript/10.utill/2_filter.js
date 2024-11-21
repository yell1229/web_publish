// text 배열을 입력받아, 길이가 3자 이상인 text들을 새로운 배열 객체로 생성하여 반환
const textFilter = (params) => {
    // return params.filter((text) => text.length >= 3);
    let result = params.filter((text) => text.length >= 3 ); // filter는 []을 리턴한다.
    return result;
}

function textFilter2(params){
    return params.filter((text) => text.length >= 3);
}
let textArray = ['ad','12','12345','javascript','react'];
let result = textFilter(textArray);
console.log(result);

// 2. 숫자배열을 입력받아, 짝수만 필터링하여 출력하는 함수를 생성
function evenNumber(params){
    return params.filter((num) => !(num % 2)); // 0 : false
}
function oddNumber(params){
    return params.filter((num) => num % 2 );
}
let numbers = [1,2,3,4,5,6,7,8];
console.log(evenNumber(numbers));
console.log(oddNumber(numbers));

// 3. 사원의 id를 받아서, 7자리 번호를 랜덤하게 생성하여 아이디와 번호를 조합하여 사번을 생성한다.
// 사원의 아이디는 배열객체로 입력받고, 출력도 배열형태로 출력
function createEmployeeNumber(array){
    //  return array.map((id) => { // 블럭이 있으면 반드시 return
    //     return id.concat('_',Math.floor(Math.random()*10000000));  // map에서 저장된[]의 return   
    // });
    // 중복된 데이터 처리
    let array2 = new Set(array);
    // console.log(Array.from(array2));// 유사배열을 담아서 배열로 만들어준다.
    
    return Array.from(array2).map((id) => 
        result = id.concat('_',Math.floor(Math.random()*10000000))  // map에서 저장된[]의 return   
    );
}
const employeeIds = ['hong','test','asdf','test1234','hong','test'];
console.log(createEmployeeNumber(employeeIds));

function newNumber(array){
    let newArray = {};
    let newResult = new Set(array);
    Array.from(newResult).map((id) => 
        newArray[id] =  id.concat('_',(Math.floor(Math.random()*1000000)))
    );
    return newArray;  
}
let newId = newNumber(employeeIds);
console.log('newId',newId);





















