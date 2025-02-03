import {db} from './db.js';

export const getTest = async() => {
    const sql =`
                select 
                        row_number() over(order by emp_id) as no,
                        emp_id as id,
                        emp_name as name,
                        gender,
                        salary,
                        concat(format(ifnull(salary ,0) ,0), '원') as osalary
                    from employee
                    where salary > 6000
                `;

    const result = await db.execute(sql)
                        .then(data => data[0])
                        .catch(error => console.log(error));
    
    console.log(result);
    

    return result;
}