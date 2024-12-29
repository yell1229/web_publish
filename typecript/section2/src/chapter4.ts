// 타입 별칭 : 같은 스코프 내에서는 이름이 중복되면 안됨.
type User = {
    id:number;
    name:string;
    nickname:string;
    birth:string;
    bio:string;
    location:string;
    check?: boolean;
};

function func(){
    type User = {
        id:number;
        name:string;
        nickname:string;
        birth:string;
        bio:string;
        location:string;
        check?: boolean;
    }; // 사용가능.
}

let user1: User = {
    id:1,
    name:'이정환',
    nickname:'ㅁㄴㅇㄹ',
    birth:'2024.01.01',
    bio:'hello',
    location:'경기도'
}
let user2: User = {
    id:2,
    name:'이정환2',
    nickname:'ㅁㄴㅇㄹsdf',
    birth:'2023.01.01',
    bio:'hello',
    location:'경기도 광주시'
}

// 인덱스 시그니처
type CountryCodes = {
    [key: string] : string;

    // Korea:string;
    // UnitedState:string;
    // UnitedKingdom:string;
}


let contryCodes: CountryCodes = {
    Korea:'ko',
    UnitedState:"us",
    UnitedKingdom:"uk"
};

type CountryNumberCodes = {
    [key:string] : number;
    Korea:number; // 반드시 있어야 하는 것.
}

let contryNumberCodes: CountryNumberCodes = {
    Korea : 40
};













