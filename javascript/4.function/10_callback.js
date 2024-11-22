// 콜백함수는 함수 호출시 파라미터 인자로 제공되는 함수 형식을 의미함.
// 콜백함수는 비동기식 처리의 프로미스에서 많이 쓰임.
/*
const add = (a , callback) => {
    // 내용들 ~~~ 실행 후 콜백을 만나면 add2로 넘어가서 처리 후 다시 돌아온다.
    callback(a); // add2(a);
}
const add2 = () => {

}

add(100, add2());
*/


// -----------------------------------------------------------------------

const job = (a, callback) => {
    callback(a);
}
const job2 = (a, b, callback) => {
    callback(a, b);
}

const print = (a) => console.log(a);
const printSum = (a,b) => {
    console.log(a +b);  
}

job(100, print); // print에 ()를 빼야 주소값만 가져온다.
job2(100, 200, printSum); 


// setTimeout 함수호출
// console.clear();
// 이름없이 1번만 실행하고 끝. let a = () => {} // 1번 실행이라서, let 사용 안함.
setTimeout((sec) => console.log(`${sec}초 후 실행!`), 1000 , 1); // 1000초 동안 web API에 있다가 호출됨.