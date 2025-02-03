import * as repository from '../repository/employeeRepository.js';

export const getEmployeeAll = async(req, res) => {
    const result = await repository.getEmployeeAll(); // result는 json 타입으로 받는다.
    //res.send(`<h1>getEmployee</h1>`); // 문자열은 send()로 가능함.
    res.json(result);
    res.end();
}