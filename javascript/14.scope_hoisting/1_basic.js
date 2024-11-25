/*
    scope(스코프) : 메모리 관리(블럭마다 다르게 관리됨), 이름의 충돌을 방지, 블록단위의 개념 구분
    block(블록: {}) :
    {
        블록단위의 실행 개념: for, switch~case, if~else..
    }

*/


{
// 전역변수, Global Variable
// 파일전체(1_basic.js) 어느곳에서든지 호출이 가능
// 변수는 초기화는 자동(선언만 하면 콜스택에서 자동으로 초기화 처리함: 전역변수일때만.!!!)


    {
        // 지역변수, Local Variable
        // 선언된 블런 안에서만 호출 가능
        // 변수 선언 시 반드시 초기화를 진행 !!!!
        let ab; // 값을 반드시 입력해야한다.
        let aa = 100;
        let bb = 200;
        console.log(aa,bb);
        
    }
//console.log(aa); // 오류

// 1~5까지 출력
for(let i = 1; i<6; i++ ){ // let i는 지역변수, 그래서 초기화 진행.
    console.log(i);
}
for(let i = 1; i<6; i++ ){ // let i는 지역변수. 
    console.log(i);
}


}