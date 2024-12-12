import React, {useState} from 'react';

export default function MiniCount({total,click}) {
    let [number, setNumber] = useState(0);

    let calc = (type) => {
        if(type ==='-'){
            setNumber(number - 1);
            click(type);

        }else if(type === '+'){
            setNumber(number + 1);
            click(type);
        }
        
    }
    return (
        <div style={{border:"1px solid #333", width:'300px', padding:"20px", textAlign:"center"}}>

            <span>{number}</span>
            <span> / </span>
            <span className="total">{total}</span>

            <div>
                <button type="button" onClick={() => {calc('-')}}>감소</button>
                <button type="button" onClick={() => {calc('+')}}>증가</button>
            </div>
        </div>
    );
}

