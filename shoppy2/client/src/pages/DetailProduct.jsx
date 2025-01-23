import React,{useState, useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { PiGiftThin } from "react-icons/pi";
import { TbStarFilled } from "react-icons/tb";
import { TbStarHalfFilled } from "react-icons/tb";
import { TbStar } from "react-icons/tb";

import Review from '../components/review/Review.jsx';
import ImageList from '../components/ImageList.jsx';
import StarRating from '../components/StarRating.jsx';

export default function DetailProduct({addCart}) {
    const {pid} = useParams();
    const [product,setProduct] = useState([]);
    const [ImgList,setImgList] = useState([]);
    const [size, setSize] = useState('XS');
    useEffect(() => {
        axios.get('/data/product.json')
            .then(res => {
                res.data.filter((item) =>{
                    if(item.pid === pid) {
                        setProduct(item);
                        setImgList(item.imgList);
                    }
                })
            })
            .catch(error => console.log(error))
    },[]);

    // const addCartList = () => {
    //     const cartItem  = {
    //         "pid":product.pid,
    //         "image":product.image,
    //         "price":product.price,
    //         "size":size,
    //         "count":1
    //     }
    //     addCart(cartItem);
    // }
    
    //장바구니 추가 버튼 이벤트
	const addCartItem = () => {
		//장바구니 추가 항목 : { pid, size, count, price }
		// alert(`${pid} --> 장바구니 추가 완료!`);
		// console.log(product.pid, product.price, size, 1);
		const cartItem = {
		pid: product.pid,
		size: size,
		qty: 1,
		price: product.price,
		};
		addCart(cartItem); // App.js의 addCart 함수 호출
	};
    const stars = [...Array(5)];
    
    const [navName, setNavName] = useState('DETAIL');
    const navList = ['DETAIL','REVIEW','Q&A','RETURN & DELIVERY'];
    const [starScore,setStarScore] = useState(0);

    const StarCheck = () => {
        const initStar = [];
        for(let i=0; i < 5; i++){
            initStar.push(

                <span key={i+1} onClick={() => setStarScore(i+1)}>
                    {
                            i+1 <= starScore ?
                                <TbStarFilled />
                                :
                                <TbStar  />
                        }
                </span>
            )
        }
        return initStar;
    }

    return (
        <div className='content'>
            <div className="product-detail-top">
                <div className="product-detail-image-top">
                <img src={product.image} />
                <ImageList className='product-detail-image-top-list' img={ImgList} />
                </div>

                <ul className="product-detail-info-top">
                <li className="product-detail-title">{product.name}</li>
                <li className="product-detail-title">{`${parseInt(
                    product.price
                ).toLocaleString()}원`}</li>
                <li className="product-detail-subtitle">{product.info}</li>
                <li>
                    <p className="product-detail-box">신규회원, 무이자 할부 등</p>
                </li>
                <li className="flex">
                    <label className="product-detail-label">사이즈 </label>
                    <select
                    className="product-detail-select2"
                    onChange={(e) => setSize(e.target.value)}
                    >
                    <option value="XS">XS</option>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                    </select>
                </li>
                <li className="flex">
                    <button type="button" className="product-detail-button order">
                    바로 구매
                    </button>
                    <button
                    type="button"
                    className="product-detail-button cart"
                    onClick={addCartItem}
                    >
                    쇼핑백 담기
                    </button>
                    <div type="button" className="gift">
                    <PiGiftThin />
                    <div className="gift-span">선물하기</div>
                    </div>
                </li>
                <li>
                    <ul className="product-detail-summary-info">
                    <li>상품 요약 정보</li>
                    </ul>
                </li>
                </ul>
            </div>
            <div className="product-detail-tab">
                        {/* start cont */}
                        <div className="tab_content_area">
                            <div style={{height:'62px'}}>
                            <div className="tab_nav">
                                <ul>
                                    {
                                        navList.map((name) => 
                                            <li className={navName === name ? 'on' : ''} onClick={() => setNavName(name)}>{name}</li>
                                        )
                                    }
                                </ul>
                            </div>
                            </div>
                            { navName === 'DETAIL' && <div style={{height:'500px',fontSize:'50px',background:'pink'}}>
                                <StarRating totalRate='2.7' />
                                {/* <TbStarFilled />
                                <TbStarHalfFilled /> */}

                                {
                                    StarCheck()
                                }
                                
                            </div> }
                            { navName === 'REVIEW' && <div ><Review /></div> }
                            { navName === 'Q&A' && <div style={{height:'500px',fontSize:'50px',background:'green'}}>Q&A</div> }
                            { navName === 'RETURN & DELIVERY' && <div style={{height:'500px',fontSize:'50px',background:'lightyellow'}}>ReturnDelivery</div> }
                        </div>
                        {/* end cont */}
                    </div>
        </div>
    );
}

