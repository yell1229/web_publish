import './Avatar.css';

export default function Avatar({img, name}){
    return (
        <div className="avatar">
            <img src={img} alt="" />
            <div>{name}</div>
        </div>

    );
}