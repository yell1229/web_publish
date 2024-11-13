// static 메소드 : class의 객체를 생성하지 않고, 클래스명.메소드 형식으로 호출이 가능함.

class Fruit{
    static MAX_SIZE = 100; // static 키워드가 있는 것 끼리 호출이 가능하다. 같은 장소의 힙에 저장이 되기 때문이다.

    // field
    constructor(name, color, emoji){
        this.name = name;
        this.color = color;
        this.emoji = emoji;
    }

    // method

    display = () => console.log(`display method : ${this.name}, ${this.color}, ${this.emoji}`);
    static makeFruit = () => {
        // 복숭아를 생성해서 리턴
        return new Fruit('orange','coral','🍑');
    }
    static getMaxSize = () => this.MAX_SIZE;
}

let apple = new Fruit('apple','red','🍎'); // 객체를 생성.
apple.display(); // 객체를 생성하지 않으면 사용이 불가능한 메소드.

Fruit.makeFruit();
//apple.makeFruit(); // TypeError: apple.makeFruit is not a function

let orange = Fruit.makeFruit();
console.log(orange);
orange.display();
console.log('static 가져오기 : ',Fruit.getMaxSize());

// V8 엔진이 문서를 확인하면 class를 힙에 저장하지만, static 키워드가 있는 메소드는 스테틱만 따로 모아서 저장되어진다.
