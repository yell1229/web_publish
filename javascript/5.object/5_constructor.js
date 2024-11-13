// constructor(생성자) : 객체를 생성해주는 함수 (메모리에 올려주는것.)

// 생성자 함수 
// 1. 대문자로 시작
// 2. 구성 : field / method
function Fruit(name, color, emoji){
    // field 
    // 프로퍼티로 넣어야 하기 때문에 this를 붙인다.
    this.name = name;
    this.color = color;
    this.emoji = emoji;

    // method
    this.display = () => console.log(emoji);
}
// 생성자 함수 호출 new ( new를 붙이면 heap에 만들게 된다.)
const apple = new Fruit('apple','red','🍎');
const orange = new Fruit('orange','orange','🍊');
console.log(apple);
apple.display();


/*
// apple : property - name, color, method(display):emoji출력
const apple = {
    name: 'apple',
    color: 'red',
    display: function(){console.log('🍎');}
}
// orange : property - name, color, method(display):emoji출력
const orange = {
    name: 'orange',
    color: 'orange',
    display: function(){console.log('🍊');}
}
// lemon : property - name, color, method(display):emoji출력
const lemon = {
    name: 'lemon',
    color: 'yellow',
    display: function(){console.log('🍋');}
}
*/
