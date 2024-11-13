// 생성자 함수 테스트
function Fruits(name, color, emoji){
    // 프로퍼티로 넣어야하기 때문에 this 추가
    this.name = name;
    this.color = color;
    this.emoji = emoji;
    // 메소드
    this.listAll = () => console.log(`${this.name}, ${this.color}, ${this.emoji}`);
    
}
// 생성자 함수 호출 new를 붙여 힙에 추가함.
let apple = new Fruits('apple','red','🍎');
//apple.listAll();
// delete apple.name;
//console.log(apple.name);

// person 객체를 CRUD로 관리하는 함수를 정의
function Human(name, age){
    // field
    this.name = name;
    this.age = age;
    //method
    this.getData = () => console.log(`${this.name},${this.age}`);
    this.setDataName = (name) => {
        this.name = name;
    }
    
}

let hong = new Human('홍길동',20);
hong.getData();
hong.setDataName('홍길순');
hong.getData();
