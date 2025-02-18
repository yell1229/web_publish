import * as repository from '../repository/cartRepository.js';

// 장바구니 추가
export const addCart = async (req, res) => {
    console.log('req.body --->>', req.body);
    const result = await repository.addCart(req.body);
    console.log('result Controller--->',result);
    res.json(result);
    res.end();
}

// DB에 있는 cart 전체 가져오기
export const getITems = async (req, res) =>{
    const result = await repository.getITems(req.body);
    res.json(result);
    res.end();
}

// 장바구니 카운트
export const getCount = async (req, res) => {
    const result = await repository.getCount(req.body);
    res.json(result);
    res.end();
;}

// 장바구니 상품 수량 업데이트 (QTY)
export const updateQty = async (req, res) => {
    const result = await repository.updateQty(req.body);
    res.json(result);
    res.end();
;}
