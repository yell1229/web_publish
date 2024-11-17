// 별 5줄 찍기
for(let i=1; i<10; i +=2){
    
    // 1개일때 1줄 2개일때 2줄
    // *
    // **
    // ***
    let star = '';
    for(let j=0; j<i; j++){
        star += `*`;
    }
    console.log(`${star}`);
    
}

