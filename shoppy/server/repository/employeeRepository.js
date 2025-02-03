import { db } from './db.js';

export const getEmployeeAll = async() => {
    // 1. sql 쿼리 작성
    const sql = `select  row_number() over(order by emp_id) as no,
                        emp_id as id,
                        emp_name as name,
                        eng_name as ename,
                        gender,
                        left(hire_date, 10) as hiredate,
                        concat(format(ifnull(salary, 0) ,0) , '원') as salary
                        salary
                    from employee
                `;

    // 2. db.js의 connection을 이용하여 실행 한 후 결과 가져오기
    const [employees, fields] = await db.execute(sql) // db는 promise로 받기 때문에 then, catch 사용
                            .then(result => result) // [ rows:[] , fields: [] ] 2차원. 구조분해할당으로 가져올 수 있음.
                            .catch(error => console.log(error));

    // const employees = await db.execute(sql) // db는 promise로 받기 때문에 then, catch 사용
    //                         .then(result => result[0]) // [ [] , [] ] 2차원. 구조분해할당으로 가져올 수 있음.
    //                         .catch(error => console.log(error));

    // 3. 호출한 곳에 결과 리턴
    return employees;
}