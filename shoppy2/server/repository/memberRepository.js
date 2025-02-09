import {db} from './db.js';

export const checkLogin = async ({id, pwd}) => {
    console.log(id,pwd);
    
    const sql = `
            select count(*) 
                from login
                where id=? and pwd=?
    `;

    const [result] = await db.execute(sql,[id,pwd]);
    console.log('result',result);
    return '';
}

// 로그인 -  select
export const checkLogin2 =async ({id, pwd}) => { // {id: 'test', pwd: '1212'} 오브젝트 리터럴로 감싸서 넘어온다. 구조분해할당 가능
    const sql = `
                select count(*) as result_rows
                        from shoppy_member
                        where id=? and pwd=?
    `;

    const [result] = await db.execute(sql,[id,pwd]); // [[],[]] 이차원배열로 리턴. 첫번째 배열만 받아온다.
    // [{result_rows:1}]
    return result[0];
}