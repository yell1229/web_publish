import React,{useState, useEffect,useContext} from 'react';
import axios from 'axios';
import { AuthContext } from '../auth/AuthContext.js';
import { useNavigate } from 'react-router-dom';


export default function Carts({refreshStorage}) {
    const {isLoggedIn, setIsLoggedIn} = useContext(AuthContext);
    const navigate = useNavigate();


    return (
        <div className='content'>
            <h1>Carts</h1>
            <table border="1" width="60%">
                <tr>
                    <th>pid</th>
                    <th></th>
                    <th>size</th>
                    <th>qty</th>
                    <th>description</th>
                    <th>image</th>
                    <th></th>
                </tr>
                {
                    cartList && cartList.map((item) => 
                        <tr>
                            <td>{item.pid}</td>
                            <td>{item.pname}</td>
                            <td>{item.size}</td>
                            <td>{item.qty}</td>
                            <td>{item.description}</td>
                            <td>
                                <img src={item.image} alt="" style={{width:"100px"}}/>
                            </td>           
                            {/* <td><button onClick={() => handleOrder("each", item.pid , item.size) }>계속담아두기</button></td>                  */}
                        </tr>
                    )
                }
            </table>
            <button onClick={() => handleOrder("all")}>주문하기</button>
        </div>
    );
}

