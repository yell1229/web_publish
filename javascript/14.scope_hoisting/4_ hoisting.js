// hoisting : 콜스택의 코드 실행 전 메모리에 (함수, 전역변수.. )객체를 선언하고 할당하는 작업 <- 실행컨텍스트가 진행함.
// 함수호출
hoist1();
// hoist2(); // 호이스팅이 진행되지 않기 때문에

function hoist1(){
    console.log('호이스팅 1');   
}

const hoist2 = () => {
    console.log('호이스팅 2');   
}

hoist2(); // arrow function은 반드시 선언 후 함수 호출. 호이스팅 안됨.


// 호이스팅은 인터프리터 형태로 콜스택이 실행하기 전에 function을 힙 메모리에 미리 객체로 만들어둔다.
// const, let 렉시컬형태의 스코프로 미리 메모리에 호이스팅 되어지지 않고, 호출되기 전에 선언이 되어져야 한다.