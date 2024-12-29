// 객체
let user:{
    id?:number; // ? :: 선택적(옵셔널) 프로퍼티 -> 있어도 되고 없어도 된다. 있을 경우 타입은 넘버.
    name:string;
} = {
    id:1,
    name:'이정환'
};


let config:{
    readonly apikey:string; // readonly 읽기전용 프로퍼티, 수정불가.
} = {
    apikey:'asdf'
}

//config.apikey = 'rrkrkrkrkrkrkrkrk';



