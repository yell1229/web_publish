// 객에체서 기능을 실행 하는 메소드(객체 리터럴 안에 포함됨)

const apple = {
    'name':'사과',
    'color':'red',
    'display': function () {console.log('🍎');} ,// method : 이름 없는 함수
    'getName' : function () {console.log('apple.getName실행 : ', this.name);}, // this가 없는 경우 콜스택의 변수저장소에서 name을 찾게된다.
    'getColor' :function () {console.log('apple.getColor실행 : ', this.color);}
}
console.log('apple : ',apple);
console.log('apple : ',apple.name);
apple.display(); // method
apple.getName();
apple.getColor();
