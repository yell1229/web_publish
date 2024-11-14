// 클래스간의 상속관계
// 흰 사자, 회색 사자, 흰 호랑이, 회색 호랑이, 푸들, 말티즈..
// 객체 모델링 => Lion, Tiger, Dog 클래스



// Lion, Tiger, Dog 클래스를 모델링하여 부모 클래스 생성 ==> Animal
// Animal 클래스 속성 :name, color, emoji, taste
// Animal 클래스 메소드 : display, sleep, eat
class Animal{
    // constructor
    constructor(name, color, emoji, taste){
        this.name = name;
        this.color = color;
        this.emoji = emoji;
        this.taste = taste;
    }

    // method
    display = () => console.log(`${this.name} : ${this.emoji}`);
    sleep = () => console.log(`${this.name}가 잔다.`);
    eat = () => console.log(`${this.name}가 먹는다.`);
}


// Lion 클래스
// 속성: name , color, emoji, taste
// 메소드 : display(emoji), sleep, eat
/*
class Lion{
    // field
    constructor(name, color, emoji, taste){
        this.name = name;
        this.color = color;
        this.emoji = emoji;
        this.taste = taste;
    }
    // method
    display = () => console.log(`${this.name} : ${this.emoji}`);
    sleep = () => console.log(`${this.name}가 잔다.`);
    eat = () => console.log(`${this.name}가 먹는다.`);  
}
*/
class Lion extends Animal{ // Lion 클래스는 Animal 클래스의 자식이다. 
    //메모리힙에 에니멀 먼저 만들고, 라이언 클래스가 만들어진다. 라이언이 에니멀의 주소를 참조한다.
    // field
    constructor(name, color, emoji, taste){
        // this.name = name;
        // this.color = color;
        // this.emoji = emoji;
        // this.taste = taste;

        // 부모에 넘겨줘야 하기 때문에 super가 첫줄에 입력된다.
        super(name, color, emoji, taste);
    }
    // method Lion에 없으면 Animal에 찾아가서 확인한다.
    // display = () => console.log(`${this.name} : ${this.emoji}`);
    // sleep = () => console.log(`${this.name}가 잔다.`);
    // eat = () => console.log(`${this.name}가 먹는다.`);
    
}

// Tiger 클래스
// 속성: name , color, emoji, taste, age
// 메소드 : display(emoji), sleep, eat
class Tiger extends Animal{
    constructor(name, color, emoji, taste, age){
        super(name, color, emoji, taste);
        this.age = age;
    }
    getAge = () => console.log(this.age);
    
}

// Dog 클래스
// 속성: name , color, emoji, taste
// 메소드 : display(emoji), sleep, eat
class Dog extends Animal{
    // field
    constructor(name, color, emoji, taste,type){
        super(name, color, emoji, taste);
        this.type = type;
    }
    getType = () => console.log(this.type);
    
}
// 자식에 참조되는 Animal의 부모는 각각 메모리에 생성된다. class로 생성된 Animal은 별도로 저장되지 않는다.
// 그래서 heap에 생성되는 animal은 3개 (Lion + Animal, Tiger + Animal, Dog + Animal)

/*
동물원에서 동물을 관리하는 클래스
속성: #type , #동물의 객체(Lion, Tiger, Dog)
메소드: setter, getter
*/
class EverZoo{
    // 상수로 사용 객체를 생성하지 않아도 호출 가능. EverZoo.LION
    static LION = 1;
    static TIGER = 2;
    static DOG = 3;

    #type;
    #animal;
    constructor(type, animal){
        this.#type = type;
        this.#animal = animal;
    }

    get type() {this.#type;}
    get animal() {this.#animal;}

    set type(type) {this.#type = type;}
    set animal(animal) {this.#animal = animal;}
}


let tom  = new Lion('tom','white','🦁','육식');
let smith  = new Tiger('smith','gray','🐯','육식', 3);
let judy  = new Dog('judy','brown','🐶','잡식','푸들');

tom.display(); tom.sleep(); tom.eat();
smith.display(); smith.sleep(); smith.eat(); smith.getAge();
judy.display(); judy.sleep(); judy.eat(); judy.getType();

const everZoo = new EverZoo(EverZoo.LION, tom);
console.log(everZoo.type, everZoo.animal);

