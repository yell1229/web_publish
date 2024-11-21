// 비동기식처리 방식에서 callback 함수 호출
// runInDelay(callback, seconds)
function runInDelay(callback, seconds){
    setTimeout(callback, seconds); // 비동기식 callback함수가 queue에 들어간다.
}

runInDelay(() => {
    console.log(`타이머 3초 경과!!`);   
} , 3000);
runInDelay(() => {
    console.log(`타이머 1초 경과!!`); 
} , 1000);

console.log(`-- 프로그램 종료 --`); // 동기식
