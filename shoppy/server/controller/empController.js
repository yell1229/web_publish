import * as repository from '../repository/empRepo.js';

export const getEmp = async(req, res) => {
    const result = await repository.getEmp();
    res.json(result);
    res.end();
}