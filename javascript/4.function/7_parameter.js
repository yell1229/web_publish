// 함수의 값을 전달하는 인자 
// 파라미터(parameter), 매개변수(argument)

function add(){
    return 100 +200;
}
let sum = add();
console.log(`sum : ${sum}`);


function add2(a,b){
    return a +b;
}
let sum2 = add2(100,200);
console.log(`sum2 : ${sum2}`);

// spread operator(전개 구문) ... 배열로 만들어 넣는다.
function add3(...numbers){
    return numbers;
}
let sum3 = add3(100,200,4,1000,30,3);
console.log(`sum3 : ${sum3}, type : ${typeof sum3}`);

// 섞어서 매개변수를 받을 때
function add4(a,b, ...datas){
    // a,b는 Primitive (원시데이터)
    // datas는 object
    console.log(a);
    console.log(b);
    console.log(datas);  
}

add4(1,2,3,4,5,6,7,8);










