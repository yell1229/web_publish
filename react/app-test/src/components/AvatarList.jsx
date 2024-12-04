import Avatar from './Avatar.jsx';

export default function AvatarList({img}){
    return (
        <div className="avatar-container">
            {
                img.map((item) => <Avatar img={item.img} name={item.name}/> )
            }
        </div>
    );
}