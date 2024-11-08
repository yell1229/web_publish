// 임의의 숫자를 입력 받아 짝수이면 빨간사과, 홀수이면 초록사과를 출력한다.
let getNum = 51;
let checkNum = getNum % 2; // 0 : false , 1: true
let getFruit = undefined;

if(typeof getNum === 'number'){
    if(!checkNum)  getFruit = '🍎: 짝수';
    else getFruit = '🍏: 홀수';   
}else getFruit = `${getNum}는 숫자가 아닙니다.`;
console.log('if문 결과: ',getFruit);


// 삼항연산자
let choice = undefined;
(!checkNum) ? choice = '🍎: 짝수' : choice = '🍏: 홀수';   
console.log('삼항연산자 결과: ' ,choice);

// 삼항연산자 2줄로 줄이기
let emoji = (!checkNum) ? getFruit = '🍎: 짝수' : getFruit = '🍏: 홀수';   
console.log('삼항연산자 결과2: ' , emoji);