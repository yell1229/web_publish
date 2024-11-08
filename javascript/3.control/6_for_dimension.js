// 중첩 for문 : 이차원 형태의 저장소 데이터 출력

/*
    1(1,1) 2(1,2) 3(1,3)
    4(2,1) 5(2,2) 6(2,3)
*/

let count = 1; // for문에서 호출되지 않기 때문에 초기화 되지 않는다.
for(let i=1; i<3; i++){
    let rows = '';
    for(let k=4; k<7; k++){
        rows += `${count++} \t`; 
    }
    
    console.log(rows);   
}

















































