//  class의 field는 생성자함수에서 정의하는 값.
// field에 접근 제어(Access control)를 정의 : private(#), public
class Fruit {
    // constructor

    // private
    #name; // 인스턴스.name 형식으로 외부에서 호출하는 경우 데이터 숨김.
    constructor(name, color, emoji) {
        // field
        this.#name = name;
        this.color = color;
        this.emoji = emoji;
    }

    display = () => console.log(`${this.#name},${this.color},${this.emoji}`); // 내부에서 field 접근이 가능
}

const apple = new Fruit('apple','red','🍎');
apple.display();
console.log('외부에서 접근이 가능한가? :',apple.name); // 외부에서 field 접근이 가능? undefined
console.log('외부에서 emoji 접근이 가능한가? :',apple.emoji); // 외부에서 field 접근이 가능.



// 사번(#), 사원명, 부서명 , info() 호출시 모든 정보 출력
class Employee {
    #empno; //private
    // constructor
    constructor(empno, name, part){
        this.#empno = empno;
        this.name = name;
        this.part = part;
    }

    info  = () => console.log(`${this.name}, ${this.part}`);
    infoAll  = () => console.log(`${this.#empno}, ${this.name}, ${this.part}`);
    
}

let man = new Employee('123','홍길동','개발파트');
man.info();
console.log(man.empno); //private 접근 불가.
console.log('name 접근가능?',man.name);













