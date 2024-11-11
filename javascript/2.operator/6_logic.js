//  논리연산자 : &&(And) , ||(OR)
/*
    (논리식1) && (논리식2) = 결과값  :: boolean 값이 결과로 나온다.
      true         true   = true
      true        false   = false
     false         true   = false
     false        false   = false

    (논리식1) || (논리식2) = 결과값  :: boolean 값이 결과로 나온다.
      true         true   = true
      true        false   = true
     false         true   = true
     false        false   = false
*/
let a = 1;
let b = 2;
console.log('And 연산'); // && 연산인 경우 false값이 앞에 오도록 함.
    console.log((a < b) && (b > a)); //true && true  : true
    console.log((a < b) && (b < a)); //true && false  : false
    console.log((a === b) && (b > a)); //false && true  : false
    console.log((a === b) && (b < a)); //false && false  : false

console.log(`OR 연산`);  // || 연산인 경우 true 앞에 오도록 함.
    console.log((a < b) || (b > a)); //true && true  : true
    console.log((a < b) || (b < a)); //true && false  : true
    console.log((a === b) || (b > a)); //false && true  : true
    console.log((a === b) || (b < a)); //false && false  : false

//  임의의 숫자를 입력받아, 1~9까지의 범위에 포함되면 숫자를 출력
let number = 11;
if(0 < number  && number < 10){ // && 연산인 경우 false값이 앞에 오도록 함.
    // true          false ------> false

    // if(number < 10 || 0 < number)
    //       false         true  ------> false : [숏컷연산] 앞부분이 false 인경우  뒤에 수식은 계산없이 바로 false로 출력한다.

    console.log(`${number} : number는 사용가능한 숫자입니다.`);
}else{
    if(number >= 10){
        console.log(`10보다 작은 수를  다시 입력해주세요`);
    }else{
        console.log(`1보다 큰 수를  다시 입력해주세요`);
    }
    
}







