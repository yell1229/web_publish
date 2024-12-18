import Avatar from './Avatar.jsx';

export default function AvatarList({list}){
    return (
            <>
                {
                    list.map((object) => <Avatar img={object.img} name={object.name} />)
                }
            </>
    );
}