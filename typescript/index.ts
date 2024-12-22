let a:number = 3;
let b: number | string = 'asdf';
b = 5;

let c:string[] = ['a','b'];
// c.push(3);

function addNumber (a:number,b:number):number{ //a type: number, b type:number , return type number
    return a+b ;
}