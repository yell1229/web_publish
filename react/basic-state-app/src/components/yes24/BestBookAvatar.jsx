import React from 'react';

export default function BestBookAvatar({rank,img}) { // 인자이지만, 리엑스테어슨 프롭스
    return (
        <div className="container-avatar">
            <p>{rank}</p>
            <img src={img} alt="book img" />
        </div>
    );
}

