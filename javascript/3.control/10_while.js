//  종료되는 시점을 알고 있을 때까지 반복
/*
    while(조건식){
        실행문;
    }
*/
// 1~5까지 출력
for(let i=1; i<=5; i++){
    if(i === 3) break;
    console.log(`i = ${i}`);
}

// while문 : 1~5 출력
//3이면 종료
let count = 1;
while(count <= 5){ // boolean 값
    if(count === 3) break;
    else console.log(`count = ${count}`);

    count++; // ; 이 끝나야 숫자가 올라간다.
}
console.log(`last count값: ${count}`);


// 메뉴선택
let flag = true;
let menu = '1';
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
    console.log(`1 : 🍕 \t 2: 🍔 \t 0 : 종료`);
}