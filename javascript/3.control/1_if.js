// 제어문: 조건문 if, while, do~while
// 삼항연산자 : (조건식) ? 참 : 거짓;

let fruit = 'orange';

if(fruit == 'apple'){
    console.log('🍎');
} console.log(`선택한 과일은 ${fruit}입니다.`);

let display = undefined;

// 삼항연산자
(fruit == 'orange') ? display = '🍊' : display = fruit ; // 값을 저장하여 다시 호출하도록 한다.
console.log(display);


let lunch = 'pizza';
if(lunch == 'pizza') console.log('🍕'); // 실행하는 로직이 1줄인 경우 {} 생략 가능
else console.log('🍔');


(lunch == 'pizza') ? console.log('🍕') : console.log('🍔');

let name = undefined;
let result = undefined;
name='홍길동';
if(name == '홍길동'){
    // console.log(`실행결과 : ${name}`);
    result = name;
}else if(name == '홍길순'){
    // console.log(`실행결과 : ${name}`);
    result = name;
}else if(name == '김영희'){
    // console.log(`실행결과 : ${name}`);
    result = name;
}else{
    // console.log('해당 학생 없음');
    result = '해당 학생 없음';
}
console.log(`실행결과 : ${result}`);
