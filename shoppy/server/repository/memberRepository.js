import {db} from './db.js';

//    회원가입 : insert
export const registerMember = async (formData) => {
    // sql 연동
    const sql = `
                insert into shoppy_member(id, pwd, name, phone, emailname, emaildomain, zipcode, address, mdate)
                                values(?, ?, ?, ?, ?, ?, ?, ?, now())
    `;

    const values = [
        formData.id,
        formData.pwd,
        formData.name,
        formData.phone,
        formData.emailname,
        formData.emaildomain,
        null,
        null
    ];
    //  db객체(db.execute)를 이용하여 sql 실행하여 결과 전송받는다.
    const [result, fields] = await db.execute(sql, values);
    // console.log('result ===> ',result);
    // console.log('fields ===> ',fields);
    
    // 결과값 return 
    return {"result_rows": result.affectedRows}; // 리엑트에 오브젝트 리터럴로 전달 {"result_rows": 1}
}

// 아이디 중복 체크 - select (테이블 결과 가져오기)
export const getIdCheck = async ({id}) => { // idData = { id:'hong' } 객체로 넘어오기 때문에 구조분해할당으로 받을 수 있다.
    
    // 결과 값을 count로 받는다(0 or 1)
    const sql = `
                select count(id) as result from shoppy_member where id= ?
    `;
    const [result, fields] = await db.execute(sql, [id]);
    // console.log('result ==> ',result); // result ==>  [ { result: 1 } ]
    
    return result[0]; // result ==>  { result: 1 }
}

// 로그인 -  select
export const checkLogin =async ({id, pwd}) => { // {id: 'test', pwd: '1212'} 오브젝트 리터럴로 감싸서 넘어온다. 구조분해할당 가능
    const sql = `
                select count(*) as result_rows
                        from shoppy_member
                        where id=? and pwd=?
    `;

    const [result] = await db.execute(sql,[id,pwd]); // [[],[]] 이차원배열로 리턴. 첫번째 배열만 받아온다.
    // [{result_rows:1}]
    return result[0];
}