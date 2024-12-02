import Avatar from './Avatar.jsx';

export default function AvatarList({avatar_list}){
    // App2에서 넘어오는 값
    // props = {
    //     avatar_list: [
    //         {
    //             "img" : "/images/people1.webp",
    //             "name" : "Smith",
    //             "age" :"20"
    //         },
    //         {
    //             "img" : "/images/people2.webp",
    //             "name" : "James",
    //             "age" :"30"
    //         },
    //         {
    //             "img" : "/images/people3.webp",
    //             "name" : "Kelly",
    //             "age" :"19"
    //         }
    //     ]
    // }
    
    return (
        <ul>
            {avatar_list.map((object) => 
                <li><Avatar img={object.img} name={object.name} age={object.age} /></li>
            )}
        </ul>
    );
}