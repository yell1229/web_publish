import React, {useState} from 'react';

export default function Counter({total}) {
    let [number, setNumber] = useState(0);

    function handleChange(type){
        if(type === '+'){
            setNumber(number +1);
        }else if(number > 0 && type === '-'){
            setNumber(number -1);
        }
        
    }

    return (
        <div>
            <button onClick={() =>{handleChange('-')}}>-</button>
            <span>{number}</span>
            <button onClick={() =>{handleChange('+')}}>+</button>
            <button type="button" onClick={() => { total(number)}}>더하기</button>
        </div>
    );
}

