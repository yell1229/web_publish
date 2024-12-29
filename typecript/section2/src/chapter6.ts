// any : 특정 변수의 타입을 모를 때.

let nayVar: any = 10;
nayVar = 'heooo';


// unknown :

let unknownVar: unknown;


// void(공허) -> 아무것도 없음을 의미하는 타입.

function func1 (): string { // return : string
    return 'hello';
}

function func2 (): void { // 리턴값이 없다.
    console.log('hello');  
}

let a: void;
// a = 1;
// a = 'asdf';
// a = {};
a  = undefined // void는 undefined만 가능하다.


// never : 존재하지 않는. 불가능한 타입