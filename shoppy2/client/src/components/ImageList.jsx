import React from 'react';

export default function ImageList({img, className}) {
    return (
        <ul className={className}>
            { className === 'product-detail-image-top-list' ? (
                    img && img.map((item, idx) => (
                        (idx > 3) ?
                        <li>
                            <img src={item} alt="" />
                        </li>
                        : ''
                    ))
                ) :
                (
                    img && img.map((item) => 
                        <li>
                            <img src={item} alt="" />
                        </li>
                    )
                )
            }

        </ul>
    );
}

