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

// 상품 상세 정보 조회
export const getProduct = async (pid) => { // 변수를 전달받기 때문에 {pid} 이렇게하면 안됨.
    console.log('pid -->', pid);
    
    const sql = `
                select  pid,
                        pname,
                        price,
                        description,
                        upload_file as uploadFile,
                        source_file as sourceFile,
                        pdate,
                        concat('http://localhost:9000/',upload_file->>'$[0]') as image,
                        -- json_array(0, 1, 2 번지의 이미지를 가져와서 배열객체로 생성하는 함수) as imgList
                        json_array(
                            concat('http://localhost:9000/',upload_file->>'$[0]'),
                            concat('http://localhost:9000/',upload_file->>'$[1]'),
                            concat('http://localhost:9000/',upload_file->>'$[2]')
                        ) as imgList,
                        json_arrayagg(
                            concat('http://localhost:9000/',jt.filename)
                        ) as detailImgList
                from shoppy_product , 
                    json_table(shoppy_product.upload_file, '$[*]'
                        columns(filename varchar(100) path '$')) as jt
                where pid = ?
    group by pid
    `;
    // 결과는 오브젝트 리터럴{pid:4, ...} 결과값이 하나이상이라서 []로 묶는다. 두번째 배열에 필드정보[컬럼명 filed] => 결과가 2차원 배열
    // result = [{"pid":4, ....}] , [컬럼명 filed]]
    const [result] = await db.execute(sql, [pid]); 
    console.log('result ==> ',result[0]);
    

    return result[0];
}