import {db} from './db.js';

export const getOrderList = async({id}) => {
    // mysql view 생성 후 사용
    const sql = `
                select * from view_order_list
	                where id= ?
    `;

    const [result] = await db.execute(sql,[id]);

   return result;
}