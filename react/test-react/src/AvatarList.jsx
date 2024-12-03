import Avatar from "./Avatar.jsx";

export default function AvatarList({lists}){
    return (
        <>
        {
            lists.map((object) => 
                <Avatar  img={object.img} name={object.name} />
            )
        }
            
        </>
    );
}