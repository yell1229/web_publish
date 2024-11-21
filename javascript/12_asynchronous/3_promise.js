// 빌트인 클래스인 Promise를 통해 비동기식 처리를 진행한다.
// 클래스니까 new
// Promise는 background의 담당자 역할.
let promise1 = new Promise((resolve, reject) =>{
    //실행한 비동기식 로직
    setTimeout(()=>{
        // resolve('javascript');
        reject('fail');
    }, 3000);
}); 
/*
promise1
        .then(성공한 경우) //성공
        .then()
        .then()
        .catch(실패한 경우); //에러
*/
promise1
        .then((result) => {console.log(result);}) // 시간 경과 후 callback queue에 들어가는 실행함수 정의
        .catch((error) => {console.log(error);
        });



























