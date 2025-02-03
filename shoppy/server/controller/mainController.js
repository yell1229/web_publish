// 여러 함수를 사용하기 때문에 export default 사용 안함.
export const getMain = (req,res) => {
    res.send(`<h1>Hello Main Main~!!!!</h1>`);
    res.end();
}