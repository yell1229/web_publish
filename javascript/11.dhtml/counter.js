// counter 증가,감소 하나의 함수로 만듬.
function counter(flag){
    // console.log(flag);
    let number = document.querySelector('#number').textContent;
    if(flag === 'increment'){
        if(number < 10) document.querySelector('#number').textContent = ++number;
    }else{
        if(number > 0) document.querySelector('#number').textContent = --number;
    }
}


// counter 증가
function increment(){
    let number = document.querySelector('#number').textContent;
    // console.log(++number);
    if(number < 10) document.querySelector('#number').textContent = ++number;
}

// counter 감소
function decrement(){
    let number = document.querySelector('#number').textContent;
    if(number > 0) document.querySelector('#number').textContent = --number;
}