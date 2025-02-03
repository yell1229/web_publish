// 1. DB 연동 라이브러리 호출 - DB서버주소, user,password, port .....
// ==> 각각 repo에서 해야하는 일을 공통으로 처리하도록 변경

import mysql from 'mysql2';

const pool = mysql.createPool({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'mysql1234',
    database: 'hrdb2019',
});

export const db = pool.promise();