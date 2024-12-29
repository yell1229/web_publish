// 대수타입 => 여러개의 타입을 합성해서 새롭게 만들어낸 타입
// 합집합 Union type

 let a: number | string | boolean;
 a = 1;
 a  = 'strings';
 a = true;

 let arr: (number | string | boolean)[] = [1,'string',true];

 type Dog = {
    name:string;
 }
 type Person = {
    color:string;
    lang:string;
 }
//
type Union1 = Dog | Person;
let union : Union1 = {
    color:'',
    lang:''
}

// 교집합 타입 intersection
type Intetsection = Dog & Person;
let intersection : Dog & Person = {
    name:'',
    color:'',
    lang:''
}


















