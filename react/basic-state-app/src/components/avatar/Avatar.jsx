import './Avatar.css';
import AvatarImage from './AvatarImage.jsx';

export default function Avatar(){
    const list = [
        {
            "src" :"/images/people1.webp",
            "name" :"Smith",
            "newicon" :true
        },
        {
            "src" :"/images/people2.webp",
            "name" :"James",
            "newicon" :false
        },
        {
            "src" :"/images/people3.webp",
            "name" :"Kelly",
            "newicon" :false
        }
    ];
    
    return(
        <>
        {
            list && list.map( item =>
                <div className="box"><AvatarImage src={item.src}  name={item.name} newicon={item.newicon} /></div>
            )
        }
        </>
    );
}