// do~ while : while 문의 조건식 체크 전 무조건 최초 1번 실행.
/*
do {
    최초 한번 먼저 실행되는 실행문;
} while(조건식){
    실행문;
}
*/




// 메뉴선택
let flag = false;
let menu = 0;
do{
    console.log(`1 : 🍕 \t 2: 🍔 \t 0 : 종료`);
}
while(flag){

    if(menu === 1){
        console.log(`선택하신 메뉴는 🍕입니다.`);
        // while loop 자연스럽게 종료하고 싶다. break는 강제적인 느낌.
        flag = false; // 조건을 false로 변경.
    } else if(menu === 2){
        console.log(`선택하신 메뉴는 🍔입니다.`);
        // while loop 자연스럽게 종료하고 싶다.
        flag = false;
    } else if(menu === 0){
        console.log(`선택을 종료합니다.`);
        // while loop 자연스럽게 종료하고 싶다.
        flag = false;
    }
    
}