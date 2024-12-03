import Avatar from "./Avatar.jsx";
import AvatarList from "./AvatarList.jsx";

export default function App2(){
    const list = [
        {"img":"/images/people1.webp", "name":"Smith"},
        {"img":"/images/people2.webp", "name":"sssss"},
        {"img":"/images/people3.webp", "name":"jaims"}
    ];

    return (
        <>

            <AvatarList lists={list} />
        </>
    );
}