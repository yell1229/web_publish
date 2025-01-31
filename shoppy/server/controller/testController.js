//  /test경로로 요청한 처리를 실행하는 함수 정의
export const getTest = (req, res) => {
    res.send(`<h1>helllllo~test!!!</h1>`);
    res.end();
}

export const getTestProduct = (req, res) => {
    res.send(`Product list!!!`);
    res.end();
}
