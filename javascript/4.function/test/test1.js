// 기본 함수 형식 : 1~9단 출력
// 원하는 단만 출력하도록 파라미터를 받는다.
// 파라미터가 없을 때 2~9단까지 출력한다.
export const gugudan = (start, end) => { 
    start  = (start !== undefined) ? start : 2;
    end  = (end !== undefined) ? end : 9;
    for(let row = 1; row<= end; row++){
        let add = '';
        for(let col = start; col <= end; col++){
        add +=  `${col} * ${row} = ${col * row} \t`;
        }
        console.log(add);   
    }
}

// 파라미터가 1개일 경우 해당 단만 출력한다. arguments.length를 인식하지 못함... 왜?
export const singleGugudan = (start) => { 
    for(let row = 1; row<= 9; row++){
        console.log(`${start} * ${row} = ${start * row} \t`);   
    }
}

// 과일 피라미드
export const fruits = (emiji, floor) => {
    for(let k = 1; k <= floor; k++){
        let add = '';
        for(let i = 1; i <= k; i++){
            add += emiji;
        }
        console.log(add);
    }
}