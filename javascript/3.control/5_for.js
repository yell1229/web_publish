// for, while
// for: 정확한 반족 횟수를 알고 있을 때. Array
// for(초기값(선언문); 조건식; 증감식){
//      조건식이 true인경우 실행;
// }
//1. 초기값을 선언한다. => 초기값 변수는 for블록에서만 실행
//2. 선언한 변수는 조건식을 통해 비교한다ㅣ => true false 결과
//3. (2)번의 결과가 true이면 실행문을 실행한다.
//4. 실행문 종료되면, 증감식을 실행한다.
//(2)~(4)번까지 반복해서 작업을 실행한다.
//5. 조건식이 false가 되면 for 루프 블록을 빠져나온다.

for(let i=1; i<=5; i++){
    console.log(i);
    
}

let numberList = [1,2,3,4,5];
for(let i=0; i<numberList.length; i++){
    console.log(numberList[i]);
}

// 과일 리스트 출력
let fruitList = ['apple','orange','lemon'];
let emojiList = ['🍎','🍊','🍋'];
for(let i = 0; i < fruitList.length; i++){
    // lemon만 출력
    let fruit = fruitList[i];
    let emoji = emojiList[i];
    if(fruit ==='lemon') console.log(emoji);   
}



















// while : 종료하는 시점을 정확하게 알 때. true/ false 값을 통해 체크.