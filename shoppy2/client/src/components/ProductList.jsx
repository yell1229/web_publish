import React,{useState, useEffect} from 'react';
import ProductAvatar from './ProductAvatar.jsx';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

export default function ProductList() {

    const [list, setList] = useState([]);

    useEffect(() => {
        axios.get('/data/product.json')
            .then(res => 
                setList(res.data)
            )
            .catch(error => console.log(error));
    },[]);

    return (
        <div>
            {
                list && list.map((item) =>
                    <Link to={`/products/${item.pid}`}>
                        <ProductAvatar img={item.image} />
                    </Link>
                )
            }
            
        </div>
    );
}

