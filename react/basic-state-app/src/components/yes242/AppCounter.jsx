import React ,{useState} from 'react';
import Counter from './Counter.jsx';

export default function AppCounter() {
    let [total, setTotal] = useState(0);

    function totalNum(number){
        setTotal(total + number);
        
    }

    return (
        <>
        <div>총 합 : {total}</div>
            <Counter total={totalNum} />
            <Counter total={totalNum} />
            <Counter total={totalNum} />
        </>
    );
}

