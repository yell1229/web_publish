function func(a: number, b: number) {
    return a+b;
}

const add = (a: number ,b: number) =>  a+b;

function introduce(name = '이정환', tall?:number){// 선택적 매개변수를 만든다.
    console.log(`name : ${name}`);
    if(typeof tall === 'number'){ // type 좁히기.
        console.log(`tall: ${tall} + 10`);
    }
    
}
introduce('이정환',175);
introduce('이정환');

function getSum(...rest : number[]){
    let sum = 0;
    rest.forEach((it) => sum += it);

    return sum;
}