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


export const add = async(formData) => {
    console.log('formData-->',formData);
    // mysql view 생성 후 사용
    const result = await Promise.all( // return [1,1,1,1,1]
        formData.orderList.map(async (item) => { // 콜백함수 내부에서 실행하기 때문에 try~catch가 필요할 수 있다.
                const values = [
                    item.size,
                    item.qty,
                    formData.totalPrice,
                    formData.type,
                    formData.tid,
                    formData.id,
                    item.pid
                ];
                console.log('values-->',values);
                
                const sql = `
                        insert into shoppy_cart(size, qty, tprice, type, tid, id, pid, odate)
                            values(?, ?, ?, ?, ?, ?, ?, current_date())
                    `;
                const [result] = await db.execute(sql,values); // Promise형태로 실행 리엑트가 관리. 하나가 아닌경우 Promise를 묶어서 관리한다.
                console.log('result.affectedRows --->>',result.affectedRows);
                return result.affectedRows;
            
        })
    );
    const result_rows = result.reduce((acc,cur) => acc + cur ,0);
   return {'result_rows':result_rows};
}

