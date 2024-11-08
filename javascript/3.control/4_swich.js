// switch(조건) ~ case
/*
    switch(숫자,문자리터럴){
        case 숫자, 문자리터럴 :
            실행문;
            break;
        case 숫자, 문자리터럴 :
            실행문;
            break;
        default :
            실행문;
    }
*/
let number = 100;
switch(number % 2){
    case 0 :
        result = '🍎';
        break;
    case 1 :
        result = '🍏';
        break;
    default :
        result = '해당 과일 없음';
}
console.log(result);

// 0: 월요일, 1: 화요일, 2: 수요일
let useage = `[0]: 월요일, [1]: 화요일, [2]: 수요일`;
let day = 5;
let resultDay = undefined;
switch(day){
    case 0 :
        resultDay = '월요일'; break;
    case 1:
        resultDay = '화요일'; break;
    case 2:
        resultDay = '수요일'; break;
    default :
        console.log(`사용법 : ${useage}`);        
}
if(resultDay !== undefined) console.log(`선택한 요일은 ${resultDay}입니다.`);

