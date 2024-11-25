// 1~5출력
for(let i = 1; i < 6; i++){
    console.log(i);   
} // 루프가 돌때마다 렉시컬영역에 레코드가 별도로 생성된다. 내용이 종료되면 임계치에 다다랐을 때 가비지컬렉터가 삭제한다.

for(var i = 1; i < 6; i++){
    console.log(i);   
}
for( i = 1; i < 6; i++){ // var i로 인식됨.
    console.log(i);   
}

let a = [1,2,3];
for(var i = 0; i < a.length; i++){
    console.log(`a[${i}] => ${a[i]}`);   
}

console.log(`a[${i}] --> ${a[0]}`);
console.log(`a[${i}] --> ${a[1]}`);
console.log(`a[${i}] --> ${a[2]}`);

// for...of
for(let element of a){
    console.log(element);
    
}








