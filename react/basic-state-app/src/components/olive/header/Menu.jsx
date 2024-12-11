
import React from 'react';

export default function Menu({name,count}) {
    
    return (
        <>
            <a href="">{name} {(name ==="장바구니") ? <span>{count}</span> : ''} </a>
        </>
    );
}

