// 학사관리 프로그램을 생성하는 경우, 사용자를 정의하는 클래스를 설계
// 학생, 교수, 학부모, 직원 => Member 부모클래스(name, age, address)
// 각각 Member 클래스를 상속.
class Member{
    //private field
    #name; 
    #age;
    #address;
    constructor(name, age, address){ // constructor 생성자 함수. field는 생성자 함수에서 정의하는 값.
        //public field
        this.#name = name; // #있어야 접근이 가능. this가 있어야 해당 영역에서 찾음. 없을 경우 콜스택에서 찾게 됨.
        this.#age = age;
        this.#address = address;
    }  
    //method 내부에서 field로 접근 가능
    // 호출 시 () 생략. #private만 사용가능. 함수표현식으로 제작(arrow function X)
    get name(){return this.#name;} //#값을 가져올 땐 같은 같은 공간에 있어야 됨. 외부호출 불가.
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
    get value(){return [this.name, this.age, this.address, this.cno];}
}
class Professor extends Member{
    #subject;
    constructor(name, age, address,subject){
        super(name, age, address);
        this.#subject = subject;
    }
    get subject(){return this.#subject;}
    get value(){return [this.name, this.age, this.address, this.subject];}
}
class Parent extends Member{
    #cname;
    constructor(name, age, address,cname){
        super(name, age, address);
        this.#cname = cname;
    }
    get cname(){return this.#cname;}
    get value(){return [this.name, this.age, this.address, this.cname];}
}
class Employee extends Member{
    #department;
    constructor(name, age, address,department){
        super(name, age, address);
        this.#department = department;
    }
    get department(){return this.#department;}
    get value(){return [this.name, this.age, this.address, this.department];}
}


// 라디오 버튼 클릭시 정보 저장
let type;
const display = () =>{
    type = document.querySelector('.check input[type=radio]:checked');  
    let formList = document.querySelectorAll('.form_area > ul');
    formList.forEach((el) =>el.classList.remove('on'));
    formList[type.value -1].classList.add('on');
}
// 전송버튼을 클릭하면 폼에 입력된 내용이 화면 #result에 출력됨.
// 선택된 정보 전송 시 하단에 result 출력
const signupCheck = () => {
    let name = document.querySelector('.on .name');
    let age = document.querySelector('.on .age');
    let address = document.querySelector('.on .address');
    let cno = document.querySelector('.on .cno');
    let subject = document.querySelector('.on .subject');
    let cname = document.querySelector('.on .cname');
    let department = document.querySelector('.on .department');
    let member = null;
    type = document.querySelector('.check input[type=radio]:checked');
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
    // validation check
    let elInput = document.querySelectorAll('.form_area .on input');
    let txt = '';
    for(let i=0; i<elInput.length; i++){
        if(elInput[i].value === ''){
            alert(elInput[i].getAttribute('data-text'));
        }
    }
    // result
    let output = '';
    member.value.forEach((value) => output += `<li>${value}</li>`);
    let result = document.querySelector('#result');
    result.innerHTML = `[가입정보]
    <ul>${output}</ul>`;
    // 전송버튼을 누르면 가입한 날짜와 시간을 출력한다.
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDate();
    let times = date.getDay();
    let min = date.getMinutes();
    let time_box = document.querySelector('.time');
    time_box.innerHTML = `${year}년 ${month + 1}월 ${day}일 ${times}시 ${min}분에 가입하셨습니다.`;
}

