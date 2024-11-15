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
    // 값을 반환하는 함수 정의 
    
    //객체명.value
    get values() {
        return [this.name , this.age, this.address, this.#sno];
    }
    //객체명.values()
    // values = () => [this.name , this.age, this.address, this.#sno]; // #name을 쓰면 동일 공간 안에 있어야 함.
}

class Professor extends Member{ // 교수
    #subject; // 강의과목
    constructor(name, age, address, subject){
        super(name, age, address);
        this.#subject = subject;
    }
    get subject() {return this.#subject;}
    //객체명.value
    get values() {
        return [this.name , this.age, this.address, this.#subject];
    }
}

class Parent extends Member{ // 학부모
    #cname;
    constructor(name, age, address,cname){
        super(name, age, address);
        this.#cname = cname;
    }
    get cname(){return this.#cname}
    //객체명.value
    get values() {
        return [this.name , this.age, this.address, this.#cname];
    }
}

class Employee extends Member{
    #department; //소속부서
    constructor(name, age, address, department){
        super(name, age, address);
        this.#department = department;
    }
    get department(){return this.#department}
    //객체명.value
    get values() {
        return [this.name , this.age, this.address, this.#department];
    }
}

// 8_academy.html signupCheck 버튼 호출 함수
const signupCheck = () => {
    let type = document.querySelector('input[type=radio]:checked');
    let name, age, address, sno, subject, cname, department;
    // let sno = document.querySelector('#sno'); //첫번째 것만 가져오는 문제가 있음.
    // let name = document.querySelector('#name');
    // let age = document.querySelector('#age');
    // let address = document.querySelector('#address');
    // let cname = document.querySelector('#cname');
    // let department = document.querySelector('#department');
    // let subject = document.querySelector('#subject');
    let member = null;  // type에 따라서 각각 클래스 생성

    switch(type.value){
        
        case '1': 
        name = document.querySelector('#student #name');
        age = document.querySelector('#student #age');
        address = document.querySelector('#student #address');
        sno = document.querySelector('#student #sno');
        member = new Student(name.value, age.value, address.value, sno.value); 
        break;

        case '2': 
        name = document.querySelector('#professor #name');
        age = document.querySelector('#professor #age');
        address = document.querySelector('#professor #address');
        subject = document.querySelector('#professor #subject');
        member = new Professor(name.value, age.value, address.value, subject.value); 
        break;

        case '3': 
        name = document.querySelector('#parent #name');
        age = document.querySelector('#parent #age');
        address = document.querySelector('#parent #address');
        cname = document.querySelector('#parent #cname');
        member = new Parent(name.value, age.value, address.value,cname.value); 
        break;

        case '4': 
        name = document.querySelector('#employee #name');
        age = document.querySelector('#employee #age');
        address = document.querySelector('#employee #address');
        department = document.querySelector('#employee #department');
        member = new Employee(name.value, age.value, address.value, department.value); 
        break;
       // default : // 내용이 없으면 생략가능.
    }
    console.log(member);
    // 자바스크립트로 생성되는 HTML을 Dynamin HTML(DHTML)
    // let list = Object.keys(member); // ['name','age','address','sno']; :: 클래스의 필드값이 #private라서 데이터 가져올 수 없음.
    console.log(member.values);

    let list = '';

    member.values.forEach((item) => { list += `<li>${item}</li>`});
    let output = ``;
    output +=  `<ul> ${list} </ul>`;
    document.querySelector('#result').innerHTML = output; // 동적 html : 메모리에 동적으로 생성된다.

} // end of signupCheck

// display : 라디오버튼 선택시 화면을 전환시키는 함수
const display = (type) =>{
    document.querySelector('#result').innerHTML = '';
    let boxList = document.querySelector('.box').children;
    for(let i=0; i<boxList.length; i++){
        boxList[i].style.display='none';
    }  
    // document.querySelector('#student').style.display='none';
    // document.querySelector('#professor').style.display='none';
    // document.querySelector('#parent').style.display='none';
    // document.querySelector('#employee').style.display='none';
    if(type === '1') document.querySelector('#student').style.display='block';
    else if(type === '2') document.querySelector('#professor').style.display='block';
    else if(type === '3') document.querySelector('#parent').style.display='block';
    else if(type === '4') document.querySelector('#employee').style.display='block';
}
 // end of display











// 단위 테스트
// const hong = new Student('홍길동', 20, '서울시', '1234');
// console.log(`학생정보 : ${hong.sno} ${hong.name} ${hong.address}  ${hong.age}`);

// const smith = new Professor('smith', 50, '경기도', 'javascript');
// console.log(`교수정보 : ${smith.name} ${smith.age} ${smith.address} ${smith.subject}`);

// const hongP = new Parent('홍길순', 49, '서울시','홍길동');
// console.log(`교수정보 : ${hongP.name} ${hongP.age} ${hongP.address} ${hongP.cname}`);
