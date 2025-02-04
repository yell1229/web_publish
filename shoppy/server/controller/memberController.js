import * as repository from '../repository/memberRepository.js';

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