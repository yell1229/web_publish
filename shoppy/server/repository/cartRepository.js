import {db} from './db.js';

// 장바구니 추가
export const addCart = async ({id, cartList}) => {
    
    let result_rows = 0;

    const result = 
        await Promise.all( // return [1,1,1,1,1]
            cartList.map(async (item) => { // 콜백함수 내부에서 실행하기 때문에 try~catch가 필요할 수 있다.
                    const values = [item.size, item.qty, id, item.pid];
                    //console.log('values---->>',values);
                    
                    const sql = `
                            insert into shoppy_cart(size, qty, id, pid, cdate)
                                values(?, ?, ?, ?, now())
                        `;
                    const [result] = await db.execute(sql,values); // Promise형태로 실행 리엑트가 관리. 하나가 아닌경우 Promise를 묶어서 관리한다.
                    console.log('result.affectedRows --->>',result.affectedRows);
                    return result.affectedRows;
                
            })
        );
    
    
    result_rows = result.reduce((acc, cur) => acc + cur, 0);
    console.log('addCart test --->',{'result_rows------------------>': result_rows});
    
    return {'result_rows': result_rows};
}

// 장바구니 전체 가져오기
export const getITems = async ({id}) => {
    const sql= `
                select  sc.cid,
                        sc.size,
                        sc.qty,
                        sm.id,
                        sm.zipcode,
                        sm.address,
                        sp.pid,
                        sp.pname,
                        sp.price,
                        sp.description as info,
                        concat('http://localhost:9000/',sp.upload_file->>'$[0]') as image
                    from 	shoppy_cart sc , 
                            shoppy_member sm , 
                            shoppy_product sp
                        
                    where sc.id = sm.id 
                            and sc.pid = sp.pid
                            and sm.id= ?
    `;

    const [result] = await db.execute(sql,[id]);

    return result;
}

// 장바구니 전체 카운트
export const getCount = async ({id}) => {
    const sql = `
                select count(*) as count
                    from shoppy_cart
                    where id= ?
    `;
    const [result] = await db.execute(sql,[id]);
    console.log('장바구니 갯수 result',result); // [[{count:2}], [count 필드정보]]
    
    return result[0];
}

// 장바구니 상품 수량 업데이트 (QTY)
export const updateQty = async ({cid, type}) => {
    console.log('cid', cid);
    console.log('type', type);
    const str = (type === 'increase') ? "qty = qty+1" : "qty = qty-1";
    const sql = `
                update shoppy_cart
                    set ${str}
                    where cid=?
    `;
    const [result] = await db.execute(sql,[cid]);
    
    return {'result_rows' : result.affectedRows};
}

// 장바구니 아이템 삭제
export const deleteItem = async ({cid}) => {
    const sql = `
                delete from shoppy_cart
	                where cid = ?
    `;
    const [result] = await db.execute(sql,[cid]);
    
    return {'result_rows' : result.affectedRows};
}
