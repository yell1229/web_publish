import React,{useEffect, useState} from 'react';
import axios from 'axios';
import ProductAvata from './ProductAvata.jsx';

export default function ProductList() {
    const [list, setList] = useState([]); // list 변경시 실시간 업데이트

    useEffect(() => {
        axios.get('data/product.json')
            .then((res) => 
                console.log('axios =>',res)
                //setList(res.data)
            )
            .catch(error => console.log(error));
    },[]);

    // 출력 리스트 생성 [ [{},{},{}], [{},{},{}], [{}] ]
    const rows = []; // outer array
    for(let i=0; i < list.length; i+=3){ // [{0},{1},{2}]
        rows.push(list.slice(i,i+3)); // [{0},{1},{2}]
    }
    console.log(rows);
    
    return (
        <div>
            {
                rows.map((rowArray) => 
                    <div className="product-list">
                    { rowArray.map((product) => 
                        <ProductAvata img={product.image} />)
                    }
                    </div>
                )
            }

            {/* { 
                list && list.map( item => 
                    <ProductAvata img={item.image} />
                )
            } */}
            
        </div>
    );
}

