// 로그인 체크를 위한 클래스 정의
class User{
    #id;
    #pass;

    constructor(id, pass){
        this.#id = id;
        this.#pass = pass;
    }

    get  id() {return this.#id};
    get  pass() {return this.#pass};
    set id(id) { this.#id = id};
    set pass(pass) { this.#pass = pass};
}

// const hong = new User('gong1234','1234');
// console.log(`id : ${hong.id}, pw : ${hong.pass}`);
// hong.id = 'yells';
// hong.pass = '5555';
// console.log(`id : ${hong.id}, pw : ${hong.pass}`);

/* 로그인 화면에서 호출하는 함수 6_login.html */
let user = null;
const DID = 'test';
const DPASS = '234';
function loginCheck(){
    // alert('click');
    // validation check
    let id = document.querySelector('#id');
    let pass = document.querySelector('#pass');
    console.log(id,pass);
    
    if(id.value === ''){
        alert('아이디값을 입력해주세요.');
        id.focus();
    }else if(pass.value ===''){
        alert('비밀번호값을 입력해주세요.');
        pass.focus();
    }else{
        // id, pass ==> usesr 클래스 객체 생성과 처리작업
        user = new User(id.value, pass.value);
        console.log('id',user.id, user.pass);
        // 
        if(DID === user.id && DPASS === user.pass) alert('로그인 성공');
    }
}

