
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

export default function ImgBox(product,cartcheck) {
    let wonPrice = parseInt(product.price).toLocaleString();

    let addCart = () => {
        alert('imgBox click');
        cartcheck();
    }

    return (
        <div>
            <div className="img">
                <img src={product.img} alt="" />
                {product.isbest && <div className="isbest">베스트</div>}
                {product.isSolidout && <div className="soldout">일시품절</div>}
                <div className="isheart">❤</div>
                
                <button type="button" className="cart" onClick={addCart}>
                    <FontAwesomeIcon icon={faCartShopping} />
                </button>
            </div>
            <div className="info">
                <div className="tit">{product.title}</div>
                <div>{product.info}</div>
                <div>39,900원 <strong>{wonPrice}원</strong></div>
                <div className="icons">
                    {product.iconSale && <span className="icon-sale">세일</span>}
                    {product.iconCoupon && <span className="icon-coupon">쿠폰</span>}
                    {product.iconToday && <span className="icon-today">오늘드림</span>}
                </div>
            </div>
        </div>
    );
}

