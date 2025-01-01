// 함수 타입 표현식
type operation = (a:number, b:number) => number;

const add: operation = (a,b)  =>  a+b ;
const sub:operation = (a,b) => a-b;

// 호출 시그니쳐
type operation2 = {
    (a: number, b:number) : number;
}

const add2: operation2 = (a,b)  =>  a+b ;
const sub2:operation2 = (a,b) => a-b;


