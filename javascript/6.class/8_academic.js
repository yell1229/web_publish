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

class Student extends Member{ // 학생
    #sno; // 학번
    constructor(name, age, address, sno){
        super(name, age, address);
        this.#sno = sno;
    }
    get sno() {return this.#sno;} //private으로 만들 때 같은 필드에 메소드를 만든다.
}

class Professor extends Member{ // 교수
    #subject; // 강의과목
    constructor(name, age, address, subject){
        super(name, age, address);
        this.#subject = subject;
    }
    get subject() {return this.#subject;}
}

class Parent extends Member{ // 학부모
    #cname;
    constructor(name, age, address,cname){
        super(name, age, address);
        this.#cname = cname;
    }
    get cname(){return this.#cname}
}

class Employee extends Member{
    #department; //소속부서
    constructor(name, age, address, department){
        super(name, age, address);
        this.#department = department;
    }
    get department(){return this.#department}
}

// 8_academy.html signupCheck 버튼 호출 함수
const signupCheck = () => {
    let type = document.querySelector('input[type=radio]:checked');
    let sno = document.querySelector('#sno');
    let name = document.querySelector('#name');
    let age = document.querySelector('#age');
    let address = document.querySelector('#address');
    let cname = '';
    let department = '';
    let subject = '';

    // type에 따라서 각각 클래스 생성
    let member = null;
    switch(type.value){
        case '1': member = new Student(name.value, age.value, address.value, sno.value); break;
        case '2': member = new Professor(name.value, age.value, address.value, subject.value); break;
        case '3': member = new Parent(name.value, age.value, address.value,cname.value); break;
        case '4': member = new Employee(name.value, age.value, address.value, department.value); break;
        default : 
    }
    console.log(member);
}

// display
const display = (type) =>{
    if(type === '1') document.querySelector('#student').style.display='block';
    else if(type === '2') document.querySelector('#professor').className +='on';
    else if(type === '3') document.querySelector('#parent').style.display='block';
    else if(type === '4') document.querySelector('#employee').style.display='block';
}












// 단위 테스트
// const hong = new Student('홍길동', 20, '서울시', '1234');
// console.log(`학생정보 : ${hong.sno} ${hong.name} ${hong.address}  ${hong.age}`);

// const smith = new Professor('smith', 50, '경기도', 'javascript');
// console.log(`교수정보 : ${smith.name} ${smith.age} ${smith.address} ${smith.subject}`);

// const hongP = new Parent('홍길순', 49, '서울시','홍길동');
// console.log(`교수정보 : ${hongP.name} ${hongP.age} ${hongP.address} ${hongP.cname}`);
