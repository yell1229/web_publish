/*
    * 함수정의 ::
    function 함수명(파라미터(=매개변수)){
        실행로직;
    }

    *함수호출 :: 함수명(파라미터 형식 일치);

    힙에 저장되지만 주소를 만들지는 않는다. 호출되면 사용된다.
    리엑트는 함수형으로 만들어진다.
*/

// 내장(Built-in)함수: 자주 사용하는 기능을 함수로 구현하여 엔진에서 제공함.
//  ParseInt(문자열); //문자열을 숫자로 변환하는 함수
let a= '100';
console.log(a, typeof a);
console.log(parseInt(a), typeof parseInt(a));
console.log(a + 100); // 접합연산자
console.log(parseInt(a) + 100);
// console.log(Number(a) + 100);


//parseInt
// let cnumber = parseInt('1234');
// console.log('cnumber :' , typeof cnumber);

// 두개의 숫자를 입력받아, 합계를 출력하는 로직 작성
let num1 = 10;
let num2 = 20;
// 함수는 예전부터 사용되었기 때문에 let은 사용 불가능하다. 기본 var로 정의된다.
function add(a,b){ // var a = 호출시 입력되는 값;
    console.log(`\n 그냥 더하기 : ${a + b}`);
}
function add2(a,b){ // var a = 호출시 입력되는 값;
    // let n1 = parseInt(a);
    a = parseInt(a);
    // let n2 = parseInt(b);
    b = parseInt(b);
    console.log(`\n parseInt 사용: ${a + b}`);
}

// 두 숫자의 차를 구하되, 결과는 음수가 출력되지 않도록 한다.
// a가 b보다 큰 경우 결과값 출력
function min(a,b){
    if(a > b) console.log(`sum => ${a-b}`);
    else console.log(`${a}(이)가 ${b}보다 커야합니다.`);
}


// 함수호출 위치에 결과값 출력
add(10, 20);
min(30,20);

add2('10', '20'); // 숫자로 변경되도록 parseInt를 추가한다.
min('30','20');








