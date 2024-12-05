
export default function EventItem({href, src, title, date}){
    return (
        <a href={href}>
            <div className="img"><img src={src} alt="" /></div>
            <strong>{title}</strong>
            <span>{date}</span>
        </a>
    );
}