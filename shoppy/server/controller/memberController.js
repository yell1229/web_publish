import * as repository from '../repository/memberRepository.js';
// 토큰 생성
import jwt from 'jsonwebtoken';

/*
    회원가입  : registerMember
*/

export const registerMember = async (req,res) => {
    // console.log('req.body ===> ',req.body);
    const result = await repository.registerMember(req.body);  // req.body : 폼 데이터
    res.json(result); // 비동기라서 await 사용하여 기다린다. await 없으면 실행결과 null ==> signup으로 전달
    res.end();
}
 
// 아이디 중복체크
export const getIdCheck = async (req, res) => {
    // console.log('id ===> ',req.body);
    const result = await repository.getIdCheck(req.body);
    res.json(result);  // funcValidate.js로 전송
    res.end();
}

// 로그인체크
export const checkLogin = async (req, res) => {
    // console.log(req.body);
    let result = await repository.checkLogin(req.body); // result = {result_rows:1} // 토큰 값이 추가되기 때문에 let 사용

    if(result.result_rows === 1){
        // 키젠 생성: https://randomkeygen.com/
        // jwt 토큰 생성 및 result 객체에 추가 전송: {result_row:1, token:****}
        const token = jwt.sign({"userId":req.body.id}, 'tIFWC6cYzn');
        result = {...result, "token":token};
        // console.log('memberController ===> ',result);     
    }
    
    res.json(result);
    res.end();
}