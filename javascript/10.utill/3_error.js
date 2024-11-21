// 에러 처리 : try~catch
let numbers = [1,2,3]; // 힙에 3개 만들어짐. 그 주소를 넘버스에 넘김 length:3, index:0,1,2
console.log(numbers[0]);
console.log(numbers[1]);
console.log(numbers[2]);
console.log(numbers[3]);

numbers[0] = 100;
console.log(numbers[0]);
// 자바스크립트에서는 동적으로 배열을 재생성한 후 값을 입력한다.
// 자바언어에서는 동적으로 배열을 재생성하지 않는다.
// ArrayIndexOutOfBoundsException 
numbers[9] = 900; // 기존 내용을 삭제하고, 새로운 객체를 생성해서 10칸짜리를 다시 만든다.
console.log(numbers[9]);
console.log(numbers);

let number = 1234; 
try {
    for(n of number) console.log(n); // number is not iterable
} catch (error) {
    console.log('에러는 엔진한테 넘김');
    
}



console.log('---프로그램 종료---');

