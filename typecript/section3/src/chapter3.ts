// 기본 타입간의 호환성
let num1: number = 10;
let num2:10 = 10;
num1 = num2;

// 객체 타입간의 호환성
// -> 어떤 객체타입을 다른 객체타입으로 취급해도 괜찮은가?

type Animal = {
    name: string;
    color:string;
};

type Dog = {
    name: string;
    color:string;
    breed:string;
}

type Book = { //슈퍼타입
    name: string;
    price:number;
};

type ProgrammingBook = { //서브타입
    name:string;
    price:number;
    skill:string;
}


let book: Book;
let programmingBook: ProgrammingBook = {
    name:"리엑트",
    price: 33000,
    skill : "reactjs"
};