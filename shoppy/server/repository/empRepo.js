import {db} from './db.js';

export const getEmp = async () => {
    //mysql
    const sql = `
                select row_number() over(order by emp_id) as no,
                    emp_id as id,
                    emp_name as name,
                    eng_name as engname,
                    gender,
                    salary,
                    concat(format(ifnull(salary ,0), 0), '원') as osalary
                from employee
                `;
    // db data 가져오기
    const result = await db.execute(sql)
                    .then(data => data[0])
                    .catch(err => console.log(err));
                    console.log(result);
                    
    // return
    return result;
}