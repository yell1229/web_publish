//String 클래스의 메소드 정리
let str = '홍길동';
let sname = new String('홍길동');
console.log(typeof str, typeof sname);
console.log(str === sname);
console.log(str === sname.valueOf());

let text = 'Hello Javascript~~!!';
console.log(text.charAt(0)); //charactor literal
console.log(text[0]); //텍스트는 배열형태로 저장이 된다.

// Welcome~, Hello Javascript~~!!
console.log('Welcome~ '.concat(text)); // 이제는 템플릿 리터럴로 사용함.
console.log(text.indexOf('a')); // 원하는 글자의 첫번째 index를 리턴.
console.log(text.lastIndexOf('a')); // 뒤에서부터 찾는다.
console.log(text.toUpperCase()); // 
console.log(text.toLowerCase()); // 

// 문자열 추출
console.log(text.substring(0,2)); // end 자릿수 전까지 추출 0,1(He)
console.log(text.substring(4,8)); // 빈 문자열 포함.
console.log(text.slice(0,2)); // 빈 문자열 포함.
console.log(text.slice(4)); // start만 지정하면 끝까지 추출
console.log(text.slice(-3)); // 뒤에서부터

//문자열 공백 삭제
text = '              java    script           ';
console.log(text);
console.log(text.trim()); // 문자사이의 공백은 제거되지 않는다.

//구분자를 이용하여 문자열 추출
const fruit = '🍓,🍉,🍎,🍌';
const fruitArray = fruit.split(',')
console.log(fruit); //
console.log(fruitArray); //

















