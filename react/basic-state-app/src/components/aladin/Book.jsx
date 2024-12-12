import React from 'react';

export default function Book({img, title}) {
    return (
        <div style={{width:'150px'}}>
            <img src={img} alt="" style={{width:'150px'}} />
            <div>{title}</div>
        </div>
    );
}

