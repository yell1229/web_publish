import React from 'react';

export default function ProductAvatar({img}) {
    return (
        <>
            <img src={img} alt="" style={{width:"150px",margin:"10px"}}/>
        </>
    );
}

