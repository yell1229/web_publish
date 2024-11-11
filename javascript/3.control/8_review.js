// 구구단 3단~5단
let start = 3;
let finish = 5;
for(let k=1; k<10; k++){
    let add = '';
    for(let i=start; i<=finish; i++){
       add += `${i} * ${k} = ${i*k} \t`;    
    }
    console.log(add);   
}


// 별찍기 * ~***
console.log(`\n *** 별찍기 ***`);
for(let k=0; k<3; k++){
    let star = '';
    for(let i=0; i<k+1; i++){
        star += `*`;
    }
    console.log(star);
}



// 사과 이모지 이용하여 출력
/*
🍏
🍏🍏
🍎🍎🍎
🍏🍏🍏🍏
*/
console.log(`\n --- 🍏🍏 사과 이모지 🍏🍏---`);
for(let k=0; k<5; k++){  // 콜스텍에서는 for문이 종료될 때 까지 빠져나오지 않는다.
    let apples = '';

    for(let i=0; i<=k; i++){
        if(k == 2 ){
            apples += `🍎`;
        }else{
            apples += `🍏`;
        }
    }
    console.log(apples);
}
