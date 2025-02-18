import React,{useEffect, useState} from 'react';
import axios from 'axios';
import ProductAvata from './ProductAvata.jsx';
import { Link } from 'react-router-dom';

export default function ProductList() {
    const [list, setList] = useState([]); // list 변경시 실시간 업데이트

    useEffect(() => {
        // axios.get('data/product.json')
        //     .then((res) => 
        //         // console.log('axios =>',res.data)
        //         setList(res.data)
        //     )
        //     .catch(error => console.log(error));

        // DB연동 형태로 변경
        axios.get('http://localhost:9000/product/all')
            .then(res => setList(res.data))
            .catch(error => console.log(error));
    },[]);
    //console.log('list',list);
    
    // 출력 리스트 생성 [ [{},{},{}], [{},{},{}], [{}] ]
    const rows = []; // outer array
    for(let i=0; i < list.length; i+=3){ // [{0},{1},{2}]
        rows.push(list.slice(i,i+3)); // [{0},{1},{2}]
    }
    // console.log(rows);
    
    return (
        <div>
            {
                rows.map((rowArray) => 
                    <div className="product-list">
                    { rowArray.map((product) => 
                    // 화면상에 띄울 때 key값은 반복하는 구문에 사용함.f12에서 계속 요청함.
                        <Link key={product.pid} to={`/products/${product.pid}`}>
                            <ProductAvata img={`${product.image}`} />
                        </Link>
                    )
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

