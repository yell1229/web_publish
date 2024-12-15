import React,{useState} from 'react';

export default function Book(props) {
    const [number, setNumber] = useState(1);
    let wonPrice = (parseInt(props.price)).toLocaleString();

    const calcCount = (type) => {
        if(type === '+' ){
            setNumber(number + 1);
        }else if(type === '-'){
            (number<=1) ? alert('최소수량 1권입니다.') : setNumber(number - 1);
        }
    }
    const toggleColor = (event) => {
        let target = event.target;
        if(target.style.color !== "rgb(229, 0, 0)"){
            target.style.color = "rgb(229, 0, 0)";
            console.log('red');
            
        }else{
             target.style.color = "rgb(187, 187, 187)";
             console.log('gray');
             
        }
    }
    return (
        <div className="book">
            <div className="thumb">
                <img src={props.img} alt="" />
                <div className="heart" onClick={toggleColor}>❤</div>
                {props.isBest && <div className="isbest">Best</div>}
            </div>
            <ul className="info-box">
                <li className='title'>{props.title}</li>
                <li class="price">{wonPrice}원</li>
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
                <span onClick={() =>{calcCount('-')}}>-</span>
                <span>{number}</span>
                <span onClick={() =>{calcCount('+')}}>+</span>
            </div>
            <div className="cart" onClick={() =>{props.click(number)}}>카트에담기</div>
        </div>
    );
}

