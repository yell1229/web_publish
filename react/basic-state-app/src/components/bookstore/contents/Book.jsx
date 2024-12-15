import React,{useState} from 'react';

export default function Book(props) {

    return (
        <div className="book">
            <div className="thumb">
                <img src={props.img} alt="" />
                <div className="heart">❤</div>
                {props.isBest && <div className="isbest">Best</div>}
            </div>
            <ul className="info-box">
                <li className='title'>{props.title}</li>
                <li class="price">{props.price}원</li>
                <li>
                    <span>#해외문학상_우리작가</span>
                    <span>#노벨문학상수상작가</span>
                    <span>#가을에어울리는책</span>
                    <span>#알쓸범잡</span>
                    <span>#KBS우리시대의소설</span>
                </li>
                <li>({props.date})</li>
            </ul>
            <div className="btns">
                <span>-</span>
                <span>1</span>
                <span>+</span>
            </div>
            <div className="cart">카트에담기</div>
        </div>
    );
}

