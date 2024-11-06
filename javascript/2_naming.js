// 
/* 
    변수명 선언 규칙 
    - 라틴어(0~9, a~z, A~Z)
    - 특수문자($, _)
    - camelCase
    - snake_Case

    주의사항
    - 숫자로 시작 불가
    - 예약어 사용 불가
    - 특수문자
    - 이모지 사용불가
*/
let myName = '홍길동';
let myAge = 30;
// let my={
//     name:'홍길동',
//     age: 30
// }
console.log(myName,myAge);
let txt = '저의 이름은 ' + myName +'이고, 나이는 '+ myAge +'입니다.';
console.log(txt);

//템플릿 리터럴
let txt2 = `2 저의 이름은 ${myName}이고, 나이는 ${myAge} 입니다.`;
console.log(txt2);

// 상수선언 :: 변수, 상수는 프로그램의 상단에 위치
// 상수 선언시 모두 대문자, SNAKE_CASE로 선언한다.
const START = 1;
const CONTINUES = 2;
const FINISH = 0;
