// 구구단 2단
// 2*1=2
// for(let j=2; j<10; j++){
//     console.log(`-----${j}단-----`);
//     for(let i=1; i<10; i++){
//         console.log(`${j} * ${i} = ${i*j}`);
//     }
    
// }
for(let i=1; i<=1; i++){
    let rows ='';
    for(let j=2; j<=9; j++){
        rows += `--  ${j}단 --  \t`;
    }
    console.log(rows);
    
}

for(let i=1; i<=9; i++){
    let rows ='';
    for(let j=2; j<=9; j++){
        rows += `${j} * ${i} = ${j *i} \t`;
    }
    console.log(rows);
}
console.clear();

// 5행 5열 별찍기 ★
console.log('5행 5열 별찍기 ★');

for(let i=5; i>0; i--){
    let star = '';
    for(let j=i; j>=1; j--){
        star += `★`;
    }
    console.log(star);
}
