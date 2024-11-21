function a(){
    c(); // c 실행할 때 return address(복귀 주소)를 함께 보낸다.
    console.log(`a function!!`);   
}
function b(){
    setTimeout(() => { // 비동기식
        console.log(`3초후 setTimeout함수 실행!!`);
        
    },3000); // 전역함수
    console.log(`b function!!`);   
}
function c(){
    b(); // return address
    setTimeout(() => { // 비동기식
        console.log(`1초후 setTimeout함수 실행!!`);
        
    },1000); // 전역함수

    console.log(`c function!!`);   
}

a(); // 동기식으로 실행


//node v8엔진(background)에서 사용됨.