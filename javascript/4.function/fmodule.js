// 모듈, 라이브러리는 공통된 기능을 구현하는 함수들의 집합.
// export 키워드를 전역에서 사용할 수 있도록 함.

// 기본 함수 형식 : 1~9단 출력
export function gugudan(){
    for(let row=1; row<=9; row++){
        let output = '';
        for(let col=1; col<= 9; col++){
            output += `${col} * ${row} = ${col * row} \t`;   
        }
        console.log(output);
    }
}

// 입력되는 start는 0보다 커야한다.
// 10단 이상은 출력되지 않는다.
export function selectGugudan(start,end){
    for(let row=1; row<=9; row++){
        let output = '';
        for(let col=start; col<= end; col++){
            output += `${col} * ${row} = ${col * row} \t`;   
        }
        console.log(output);
    }
}
// 구구단 1단 함수 : 입력되는 매개변수는 0보다 커야한다.
export function singleGugudan(dan){
    for(let row=1; row<=9; row++){
        console.log(`${dan} * ${row} = ${dan * row}`);   
    }
}

// fruitsTower('🍎',5);
export function fruitsTower(emoji, floor){
    for(let row = 1; row <= floor; row++){
        let output = '';
        for(let col = 1; col <= row; col++){
            output += emoji;
        }
        console.log(output);
    }
}