// import '../css/AvatarImageList.css';
import AvatarImage from './AvatarImage.jsx';
// {list = [ 데이터 ]}
export default function AvatarImageList({list}){
    return (
        <ul>
            {list.map((item) => 
                <li><AvatarImage img={item.img} /></li>
            )}
        </ul>
    );
}