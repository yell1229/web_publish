// 학생(Student) 클래스
// 속성: #이름, #나이, #주소, 별칭 (#:js에서만 사용가능)
//메소드: setter/getter 메소드 정의
class Student{ // 대문자로 선언
    // private
    #name;
    #age;
    #address;
    // 생성자 함수를 만들어 메모리에 올린다.
    constructor(name, age, address, nic){ 
        this.#name = name;
        this.#age = age;
        this.#address = address;
        this.nic = nic;
    }

    // method
    getInfo = () =>  console.log(`${this.#name}, \n${this.#age}, \n${this.#address}, \n${this.nic}`);  // return 생략, 1줄이라서 {} 생략
    // getName = () =>  console.log(`${this.#name}`);

    


    setInfo = (name, age, address, nic) => {
        this.#name = name;
        this.#age = age;
        this.#address = address;
        this.nic = nic;
    };

    // 호출 시 ()없이 실행가능함.
    // 반드시 private로 정의된 필드값은 반드시 set함수가 필요함.
    // set, get 함수 형식은 private 정의된 필드값에 한해서만 생성.
    // get name = () => {return this.#name}; // 사용불가
    get name() {return this.#name}; // 표현식으로 사용해야 된다.
    get age() {return this.#age};
    get address() {return this.#address};
    // get nic() {return this.nic}; :: private 아니라서 사용불가

    set name(name){this.#name = name;}
    set age(age){this.#age = age;}
    set address(address){this.#address = address;}
    // set nic(nic){this.nic = nic;}  :: private 아니라서 사용불가
}

let newStudent = new Student('홍길동','20','서울시','의적');
newStudent.getInfo();
newStudent.setInfo('홍길순','15','부산시','양아치');
newStudent.getInfo();
console.log(`'set으로 변경 테스트:' ${newStudent.name}`);
newStudent.name = '가가가'; // set으로 설정하여 파라미터가 아니라 값을 넣는 형식으로 변경.
console.log(`'get으로 변경 테스트:' ${newStudent.name}`);