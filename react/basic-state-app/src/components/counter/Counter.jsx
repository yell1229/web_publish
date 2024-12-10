import {useState} from 'react';

export default function Counter({total, click}){

    const [number, setNumber] = useState(0);

    function increment(){
        // setNumber(number + 1); // number++ useState 에서 실행이 안됨.
        (number >= 10) ? setNumber(number) : setNumber(number + 1);   
        console.log('number',number);
        
        click(number, '+');     
    }
    function decrement(){
        (number <= 0) ? setNumber(number) : setNumber(number - 1);
        click(number, '-');  
    }

    return (
        <div className="container">
            <div>
                <span className="number">{number} / </span>
                <span className="total-number">{total}</span>
            </div>
            <button type="button" className="button" onClick={increment}>증가(+)</button>
            <button type="button" className="button" onClick={decrement}>감소(-)</button>
        </div>
    );
}