// 함수의 실행결과 반환 키워드 : return
function add(a,b){
    a = parseInt(a);
    b = parseInt(b);
    return (a+b);
}
let result = add(1,2); // return 값을 쓰기위해서는 변수에 저장해야 한다.
console.log(`result: ${result}`);




let resultObj = createObj('홍길동',30);
console.log(resultObj);
console.log(resultObj.name);
console.log(resultObj.age);

// 함수는 어떤 위치에 있든 v8엔진에서는 상관이 없다. 힙에 올린다. (호이스팅)
// 이름, 나이를 매개변수로 입력하여, 객체를 생성한 후 반환받는 함수를 정의
function createObj(name, age){
    let obj = {
        name : (typeof name === 'string') ? name : `문자로 입력해주세요` , // obj.name
        age : (typeof age === 'number')  ? age : `숫자로 입력해주세요`  // obj.age
    };
    // 객체 생성
    return obj;
}

// V8엔진에서는 함수의 선언을 위 아래 상관이 없다. 문서를 읽으면서 function을  찾으면 힙에 저장이된다.
// let resultObj = createObj('홍길동',30); 만나면 콜스택에서 resultObj 변수를 저장하고
// createObj 함수를 찾아서 해당 내용을 실행한다.
// 함수 내부에 있는 obj를 찾아 힙에 객체로 저장을 하고 ('홍길동',30)내용을 담는다.
// 콜스택에  obj를 만들어 매개변수를 담은 obj의 해당 주소를 보낸다.
// resultObj에 obj에 있는 주소를 다시 공유한다.
// consolg.log로 해당 내용이 출력이 된 뒤 obj 삭제, resultObj에 있는 주소 삭제된다.

// ----------------------------------------------------------------------------------

// 두 수를 입력받아 곱한 값을 출력하는 함수를 작성.
// 두 수는 0보다 커야함.
function multi(a,b){
    let result = 0;

    if(a > 0 && b > 0) result =  (a * b);
    else result = `0보다 큰 숫자를 입력해주세요`;

    return result;
}

let resultNum = multi(10,5); // 값의 확장, 지역변수가 resultNum에 결과가 담기면서 전역변수화 된다.
console.log(`resultNum : ${resultNum}`);
