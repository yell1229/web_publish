import React from 'react';

export default function Carts({cartList}) {
    return (
        <div>
            <table style={{width:"80%"}}>
                <tr>
                    <th>image</th>
                    <th>pid</th>
                    <th>price</th>
                    <th>size</th>
                    <th>qty</th>
                </tr>
                {
                    cartList && cartList.map((item) => 
                        <tr>
                            <td>{item.pid}</td>
                            <td><img src={item.image} style={{width:"150px"}} /></td>
                            <td>{item.price}</td>
                            <td>{item.size}</td>
                            <td>{item.qty}</td>
                        </tr>
                    )
                }
            </table>
        </div>
    );
}

