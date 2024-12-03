export default function Avatar({img, name}){
    return (
        <>
            <div className="avatar_wrap">
                <img src={img} title={name} />
                <div>{name}</div>
            </div>
        </>
    );
}