// 객체 생성자 함수 - 객체 모델링(반려동물, 동물병원.. 바라보는 측면에 따라 달라진다)
// dog, cat, rabbit.. 의 객체 생성자 함수를 정의하고 , 호출.
// 속성(Attribute, property) : name, color
// method : display, eat('🐶🐰🐱 먹는다'), sleep('🐶🐰🐱 자요')

// 생성자함수
function Animal(name, color, emoji){

    // field
    this.name=name; // 실행을 콜스택에서 하기 때문에 객체 안에 넣으려면 Animal안에서 실행하기 위해 this
    this.color=color;
    this.emoji=emoji;
    // method
    this.display = () => console.log(`${this.emoji}`);
    this.eat = () => console.log(`${this.emoji} 먹는다`);
    this.sleep = () => console.log(`${this.emoji} 자요`);
}

let dog = new Animal('dog', 'brown','🐶'); // 생성자 함수를 호출하려면 힙에다가 만들어라 new로 시작.
let cat = new Animal('cat', 'yellow','🐱');
let rabbit = new Animal('rabbit', 'gray','🐰');

console.log(dog);
console.log(cat);
console.log(rabbit);


















