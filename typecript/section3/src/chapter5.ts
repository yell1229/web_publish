// 타입 추론

// 타입 단언
type Dog = {
    name:string;
    color:string;
}

let dog = {} as Dog;
dog.name="rkskekfk";
dog.color;"brown";

// 타입 단언의 규칙
// 값 as 단언


// 타입 좁히기
function func(value: number |string){

    value;
    // value.toFixed();
    // value.toUpperCase()
    if(typeof value === 'number') console.log(value.toFixed());
    else if(typeof value ==='string') console.log(value.toUpperCase());
    
    
}












