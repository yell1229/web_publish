import {db} from './db.js';

// 상품등록
export const registerProduct = async (formData) => {
    const sql = `
                insert into shoppy_product(pname, price, description, upload_file, source_file, pdate)
                values(?, ?, ?, ?, ?, now())
    `;
    const value=[ //formData는 오브젝트 리터럴이라서, 배열로 만들어서 전달한다.
        formData.productName ,
        formData.price || 0, // 값이 전달되지 않으면 데이터입력 실패. 값 등록이 없는경우 0입력
        formData.description || "",
        formData.upload_file || null,
        formData.source_file || null 
    ];
    const [result] = await db.execute(sql , value);

    return {"result_rows": result.affectedRows};
}

export const getList = async () => {
    const sql = `
                select 
                        pid,
                        pname as name,
                        price,
                        description as info,
                        concat('http://localhost:9000/', upload_file->>'$[0]') as image,
                        source_file,
                        pdate
                from shoppy_product
    `;
    const [result] = await db.execute(sql);
    console.log('result--->',result);
    
    return result; //[{},{},{}]
}
