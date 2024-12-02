import Avatar from './components/Avatar.jsx';
import AvatarList from './components/AvatarList.jsx';

export default function App2(){
    const list = [
        {
            "img" : "/images/people1.webp",
            "name" : "Smith",
            "age" :"20"
        },
        {
            "img" : "/images/people2.webp",
            "name" : "James",
            "age" :"30"
        },
        {
            "img" : "/images/people3.webp",
            "name" : "Kelly",
            "age" :"19"
        }
    ];

    return(
        <>
            <Avatar img="/images/people1.webp" name="Smith" />
            <Avatar img="/images/people2.webp" name="JJJ" />
            <Avatar img="/images/people3.webp" name="ssss" />
            <AvatarList list={list} />
        </>
    );
}