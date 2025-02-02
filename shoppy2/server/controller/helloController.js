export const getHello  = (req,res) => {
    res.send(`<h1>Hello~~!!!!!</h1>`);
    res.end();
}
export const getHelloNum = (req,res) => {
    res.send(`<h1>Hello~~~!!! ${req.params.id}</h1>`)
}