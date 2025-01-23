import React from 'react';
import { TbStarFilled } from "react-icons/tb";
import { TbStarHalfFilled } from "react-icons/tb";
import { TbStar } from "react-icons/tb";

export default function StarRating({totalRate}) {
    const fillStar =Math.floor(totalRate); 
    const halfStar = totalRate%1 !== 0;
    const emptyStars = 5 - fillStar - halfStar;
    
    return (
        <div>

            <TbStarFilled />
            <TbStarHalfFilled />
            <TbStar />
            <div className="box">
                {[...Array(fillStar)].map(() =>
                    <TbStarFilled />
                )}
                {
                    halfStar && <TbStarHalfFilled />
                }
                {[...Array(emptyStars)].map(() =>
                    <TbStar />
                )}
            </div>
        </div>
    );
}

