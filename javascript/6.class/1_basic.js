// 객체를 생성하기 위한 틀 : class
/*
    class 클래스명 {
        // constructor(생성자) 함수
        constructor(){ // 메모리에 저장
            // field
            this.필드명 = 값;
        }
        //메소드
    }
*/

class Animal{
    // constructor(생성자) 함수
    constructor(name, color, emoji){
        this.name = name;
        this.color = color;
        this.emoji = emoji;
    }
    //메소드
    display = () => console.log(this.emoji);  // 함수의 주소이기 때문에, (콜스택에서 찾는게 아니기 때문에) this.display로 사용할 필요가 없다.
    
}

let dog = new Animal('dog', 'brown','🐶');
dog.display();