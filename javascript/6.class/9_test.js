// 학사관리 프로그램을 생성하는 경우, 사용자를 정의하는 클래스를 설계
// 학생, 교수, 학부모, 직원 => Member 부모클래스(name, age, address)
// 각각 Member 클래스를 상속.

class Member{ // 공통
    #name;
    #age;
    #address;
    constructor(name, age, address){ // 자식의 클래스 생성자 함수에서 super 호출 시 실행됨
        this.#name = name;
        this.#age = age;
        this.#address = address;
    }
    get name() {return this.#name;}
    get age() {return  this.#age;}
    get address() {return this.#address;}
}
// 학생, 교수, 학부모, 직원 각각의 class 추가
class Student extends Member{
    #cno;
    constructor(name, age, address, cno){
        super(name, age, address);
        this.#cno = cno;
    }
    get cno(){return this.#cno}
    get value(){return [this.name, this.age, this.address, this.cno]}
}
class Professor extends Member{
    #subject;
    constructor(name, age, address,subject){
        super(name, age, address);
        this.#subject = subject;
    }
    get subject() {return this.#subject; }
    get value(){return [this.name, this.age, this.address, this.subject]}
}
class Parent extends Member{
    #cname;
    constructor(name, age, address, cname){
        super(name, age, address);
        this.#cname = cname;
    }
    get cname() { return this.#cname; }
    get value(){return [this.name, this.age, this.address, this.cname]}
}
class Employee extends Member{
    #department;
    constructor(name, age, address,department){
        super(name, age, address);
        this.#department = department;
    }
    get department(){return this.#department;}
    get value(){return [this.name, this.age, this.address, this.department]}
}


// 전송버튼을 클릭하면 폼에 입력된 내용이 화면 #result에 출력됨.
const signupCheck = () => {
    // 폼에 입력된 정보를 가져온다. 해당 폼 이름이 필요함.
    let type = document.querySelector('.check input:checked');
    let name = document.querySelector('.on .name');//dom의 첫번째만 선택하는 것을 보여지는 화면의 폼으로 변경 .on
    let age = document.querySelector('.on .age');
    let address = document.querySelector('.on .address');
    let cno = document.querySelector('.on .cno');
    let subject = document.querySelector('.on .subject');
    let cname = document.querySelector('.on .cname');
    let department = document.querySelector('.on .department');
    // type에 따라 클래스 생성
    let member = null;
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
    console.log('test',member.name , member.age, member.address, member.cno);
    console.log('test',member.value);
    let list = '';
    member.value.forEach((item) =>list += `<li>${item}</li>`);
    let output = list;
    // 선택된 정보 전송 시 하단에 result 출력
    let result = document.querySelector('#result');
    result.innerHTML = `<ul>${output}</ul>`;
}



// display : 라디오버튼 선택시 화면을 전환시키는 함수
const display = (type) => {
    let childList = document.querySelector('.form_area').children;
    for(let i=0; i<childList.length; i++){
        childList[i].classList.remove('on');
    }
    childList[type - 1].classList.add('on');  
}



// 화면이 로딩되면 날짜를 출력한다.
const todate = () => {
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDate();
    let dateBox = document.querySelector('.date_box')
    dateBox.innerHTML = `${year}년 ${month}월 ${day}일`;
}
