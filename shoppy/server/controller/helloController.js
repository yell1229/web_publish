export const getHello = (req, res) => {
    res.send(` hello~~ world!!!!`);
    res.end();
}

export const getHelloName = (req, res) => {
    res.send(`Hello~!!! ${req.params.name} `);
    res.end();
}
