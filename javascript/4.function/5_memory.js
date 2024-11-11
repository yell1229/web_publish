//  function은 data type은 ? Object
// 힙에 저장되어, 호출될 때 주소값을 가져온다

function add(a,b){ // 힙에 있는 주소의 이름이 add.
    console.log(a+b);    
}

console.log('add',add);
let sum = add;
console.log('sum',sum);

add(1,2);
sum(1,2);












