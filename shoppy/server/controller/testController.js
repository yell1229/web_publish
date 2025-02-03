import * as repository from '../repository/testRepository.js';

export const getTest = async (req, res) => {
    const result = await repository.getTest();
    res.json(result);
    res.end();
}