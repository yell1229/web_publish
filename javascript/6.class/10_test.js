// 학사관리 프로그램을 생성하는 경우, 사용자를 정의하는 클래스를 설계
// 학생, 교수, 학부모, 직원 => Member 부모클래스(name, age, address)
// 각각 Member 클래스를 상속.
class Member{// 객체 생성을 위한 클래스 선언
    #name; //private field
    #age;
    #address;
    // constructor 생성자 함수
    constructor(name, age, address){ // public field , field는 생성자 함수의 값
        this.#name = name; // this 없을 시 생성된 객체에서 호출 시 콜스택에서 변수를 찾음.
        this.#age = age;
        this.#address = address;
    }
    // get 메소드 방식은 private만 적용가능. 호출방법: Member.name ()없이 호출한다.
    get name(){return this.#name;} // private으로 설정한 값은 해당 영역에서만 호출 가능함.
    get age(){return this.#age;}
    get address(){return this.#address;}
}
class Student extends Member{
    #cno;
    constructor(name, age, address, cno){
        super(name, age, address);
        this.#cno = cno;
    }
    get cno(){return this.#cno;}
    get allValue(){return [this.name, this.age, this.address, this.cno]}
}
class Professor extends Member{
    #subject;
    constructor(name, age, address, subject){
        super(name, age, address);
        this.#subject = subject;
    }
    get subject(){return this.#subject;}
    get allValue(){return [this.name, this.age, this.address, this.subject]}
}
class Parent extends Member{
    #cname;
    constructor(name, age, address, cname){
        super(name, age, address);
        this.#cname = cname;
    }
    get cname(){return this.#cname;}
    get allValue(){return [this.name, this.age, this.address, this.cname]}
}
class Employee extends Member{
    #department;
    constructor(name, age, address, department){
        super(name, age, address);
        this.#department = department;
    }
    get department(){return this.#department;}
    get allValue(){return [this.name, this.age, this.address, this.department]}
}
// 회원 type 체크. 선택에 따라 입력폼 바뀜. 
const display = () => {
    let type = document.querySelector('.check input[type=radio]:checked');
    let formBox = document.querySelectorAll('.form_area ul');
    formBox.forEach((el) => el.classList.remove('on'));
    formBox[type.value-1].classList.add('on'); 
}
// [전송] 버튼 클릭 시 signupCheck() 실행
const signupCheck = () => {
    let member = null;
    let name = document.querySelector('.form_area .on .name');
    let age = document.querySelector('.form_area .on .age');
    let address = document.querySelector('.form_area .on .address');
    let cno = document.querySelector('.form_area .on .cno');
    let cname = document.querySelector('.form_area .on .cname');
    let subject = document.querySelector('.form_area .on .subject');
    let department = document.querySelector('.form_area .on .department');
    let type = document.querySelector('.check input[type=radio]:checked');
    switch(type.value){
        case '1':
                member = new Student(name.value, age.value, address.value, cno.value);
                break;
        case '2':
                member = new Professor(name.value, age.value, address.value, subject.value);
                break;
        case '3':
                member = new Parent(name.value, age.value, address.value, cname.value);
                break;
        case '4':
                member = new Employee(name.value, age.value, address.value, department.value);
                break;
    }
    // input이 비어있는지 체크
    let inputList = document.querySelectorAll('.form_area .on input');
    for(let i=0; i<inputList.length; i++){
        if(inputList[i].value === ''){
            inputList[i].nextSibling.classList.add('on');
        }
    }
    // input이 focus 되었다가 blur가 되면 ''체크 후 경고문구 삭제
    for(let i=0; i<inputList.length; i++){ 
        inputList[i].addEventListener('blur',(event) =>{      
            if(event.target.value === ''){
                event.target.nextSibling.classList.add('on');      
            }else{
                event.target.nextSibling.classList.remove('on');
            }
        });
    }

    // #result에 입력한 내용 출력, 
    let output='';
    let memberList = member.allValue;
    memberList.forEach((el) => output += `<li>${el}</li>`)
    
    let resultList = document.querySelector('#result');
    resultList.innerHTML = `<ul>${output}</ul>`;

    // 회원가입한 년월일시분초 출력.
    let timeBox = document.querySelector('.time');
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDate();
    let time = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    timeBox.innerHTML = `${year}년 ${month + 1}월 ${day}일 ${time}시 ${min}분 ${sec}초에 가입하셨습니다.`
}

// [취소]버튼 클릭 시 폼에 입력된 내용 삭제
let reset = () => {
    let inputList = document.querySelectorAll('.form_area .on input');
    inputList.forEach((el) => {el.value ='';});
    document.querySelector('.time').innerHTML='';
    document.querySelector('#result').innerHTML='';
}