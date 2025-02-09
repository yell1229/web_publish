import * as repository from '../repository/memberRepository.js';

export const checkLogin = async (req, res) => {
    console.log(req.body);
    let result = await repository.checkLogin(req.body);
    res.json(result);
    res.end();
    
}


// 로그인체크
export const checkLogin2 = async (req, res) => {
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