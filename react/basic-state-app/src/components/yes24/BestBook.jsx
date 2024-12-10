import BestBookButton from './BestBookButton.jsx';
import {useState} from 'react';

export default function BestBook() {
    const [totalQty, setTotalQty] = useState(0);

    const list = [
        {"img" : "https://image.yes24.com/goods/13137546/L" },
        {"img" : "https://image.yes24.com/goods/108422348/L" },
        {"img" : "https://image.yes24.com/goods/11467936/L" }
    ]


    function handleChangeQty(qty){
        console.log(qty);
        setTotalQty(totalQty + qty);
    }

    return (
        <>
        <div>전체 카트수량 : {totalQty}</div>
        {
            list.map(item =>
                <div style={{display:"flex"}}>
                    <img src={item.img} width="150" />
                    <BestBookButton qtyChange={handleChangeQty}/>
                </div>
            )
        }  
        </>
    );
}

