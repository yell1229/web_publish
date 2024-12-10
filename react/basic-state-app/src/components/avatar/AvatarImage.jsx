
export default function AvatarImage(props){
    
    return (
        <>
            <div className="img">
                <img src={props.src} alt="" />
            </div>
            { props.newicon && <div className="newicon">new</div> }
            <div className="name">{props.name}</div>
        </>
    );
}