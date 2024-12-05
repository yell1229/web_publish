
export default function EventItem({src, title, date}){
    return (
        <>
            <div><img src={src} alt="" /></div>
            <p>{title}</p>
            <p>{date}</p>
        </>
    );
}