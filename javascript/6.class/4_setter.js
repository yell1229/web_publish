// 클래스에서 정의되는 메소드로, #(private)로 접근제어가 설정된 필드에 새로운 값을 입력하기 위한 메소드.
// setterOOO(입력되는 값), getterOOO(가져오는 값)
export class Employee {
    #empno; // 외부에서 접근이 불가능.
    constructor(empno, ename, dept){
        this.#empno = empno;
        this.ename = ename;
        this.dept = dept;
    }

    // set
    setEmpno = (empno) => this.#empno = empno;
    setEname = (ename) => this.ename = ename;
    setDept = (dept) => this.dept = dept;
    // get
    getEmpno = () => this.#empno ;
    getEname = () => this.ename;
    getDept = () => this.dept;

    // method
    info = () => console.log(`${this.ename}, ${this.dept}`);
    infoAll = () => console.log(`${this.#empno} , ${this.ename}, ${this.dept}`);
    
}

let hong = new Employee('123','홍길동','개발팀');
hong.info();
hong.infoAll();
hong.setEmpno('222');
hong.setEname('홍길순');
hong.setDept('디자인팀');
hong.infoAll();
console.log(hong.getEmpno());
console.log(hong.getEname());
console.log(hong.getDept());
