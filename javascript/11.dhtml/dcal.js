import sum, {sub, mul, div} from './dcommons.js';

//DHTML 형식으로 계산기 프로그램

// window.addEventListener('load',() =>{
    initForm(); // <script src="./dcal.js" type="module"></script>
// });

// 문서에 출력되는 html
function initForm(){
    let output = `
    <h1></h1>
    <ul>
        <li>
            <input type="text" id="number1" placeholder="첫번째 숫자">
            <input type="text" id="number2" placeholder="두번째 숫자">
        </li>
        <li>
            <button type="button" class="button" data-operation="sum">➕</button>
            <button type="button" class="button" data-operation="sub">➖</button>
            <button type="button" class="button" data-operation="mul">✖</button>
            <button type="button" class="button" data-operation="div">➗</button>
        </li>
        <li>
            <h3 class="result">Result : </h3>
        </li>
    </ul>
    `;
    document.querySelector('#content').innerHTML = output;

    //버튼 클릿시 결과값
    let buttons = document.querySelectorAll('.button');
    buttons.forEach((btn) =>{
        btn.addEventListener('click',() =>{
            let num1 = parseInt(document.querySelector('#number1').value);
            let num2 = parseInt(document.querySelector('#number2').value);
            // let num1 = parseInt(input1.value);
            // let num2 = parseInt(input2.value);
            let dataset = btn.dataset.operation;
            let result = 0;
            // if(dataset === 'sum'){
            //     result = num1 + num2;      
            // }else  if(dataset === 'sub'){
            //     result = num1 -num2;
            // }else  if(dataset === 'mul'){
            //     result = num1 * num2;
            // }else  if(dataset === 'div'){
            //     result = num1 / num2;
            // }

            // switch(dataset){
            //     case 'sum': result = num1 + num2; break;
            //     case 'sub': result = num1 - num2; break;
            //     case 'mul': result = num1 * num2; break;
            //     case 'div': result = num1 / num2; break;
            // }

            switch(dataset){
                case 'sum': result = sum(num1, num2); break;
                case 'sub': result = sub(num1, num2); break;
                case 'mul': result = mul(num1, num2); break;
                case 'div': result = div(num1, num2); break;
            }
            document.querySelector('.result').textContent = `Result : ${result}`;
        });
    });
} // initForm
























