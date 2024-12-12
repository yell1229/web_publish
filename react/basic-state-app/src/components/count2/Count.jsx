import React, {useState} from 'react';
import MiniCount from './MiniCount.jsx';

export default function Count(number) {
    let [total, setTotal] = useState(0);

    let totalCount = (type) => {
        type === '+' ? setTotal(total + 1) : setTotal(total - 1) ;
        
    }

    return (
        <div>
            <MiniCount click={totalCount} total={total}/>
            <MiniCount click={totalCount} total={total}/>
            <MiniCount click={totalCount} total={total}/>
        </div>
    );
}

