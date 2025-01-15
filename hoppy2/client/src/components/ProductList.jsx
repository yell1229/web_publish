import React,{useState,useEffect} from 'react';
import ProductAvatar from './ProductAvatar.jsx';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function ProductList() {

    const [list,setList] = useState([]);

    useEffect(() => {
        axios.get('/data/product.json')
            .then(res => setList(res.data))
            .catch(err => console.log(err));
    },[]);

    const rows = []; // outer array
    for(let i=0; i < list.length; i+=3){ // [{0},{1},{2}]
        rows.push(list.slice(i,i+3)); // [{0},{1},{2}]
    }

    return (
        <div>
            {
                rows.map((rowArray) => 
                    <div className="product-list">
                    { rowArray.map((product) => 
                        <Link to={`/product/${product.pid}`}>
                            <ProductAvatar img={product.image} />
                        </Link>
                    )
                    }
                    </div>
                )
            }
            
        </div>
    );
}

