import '../css/TodoList.css';
import { useEffect, useState } from 'react';

export default function TodoList(){
    const [avatar,setAvatar] = useState([]);

useEffect(() => {
    fetch('/data/list.json')
        .then(data => data.json())
        .then(jsonData => setAvatar(jsonData))
        .catch(error =>console.log('error'));
},[]);

console.log('avatar',avatar);

    return (
        <>
        {
            avatar.map((item) => 
                <div className="list">
                    <div className="img"><img src={item.img} alt="" /></div>
                    <div className="info">
                        <span>{item.name}</span>
                        <span>{item.id}</span>
                        <span>{item.date}</span>
                    </div>
                    <p>{item.text}</p>
                </div>
            )
        }
        </>
    );
}