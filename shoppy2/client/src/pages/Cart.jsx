import React from 'react';

export default function Cart({cartList}) {
    return (
        <div>
            <table>
                <tr>
                    <th>pid</th>
                    <th>image</th>
                    <th>price</th>
                    <th>size</th>
                    <th>count</th>
                </tr>
            
            {
                cartList.map((item) =>
                    <tr>
                        <td>{item.pid}</td>
                        <td><img src={item.image} style={{width:"150px"}} /></td>
                        <td>{item.price}</td>
                        <td>{item.size}</td>
                        <td>{item.count}</td>
                    </tr>
                )
            }
            </table>
        </div>
    );
}

