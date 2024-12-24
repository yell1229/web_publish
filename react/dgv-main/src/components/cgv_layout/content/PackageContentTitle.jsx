
export default function PackageContentTitle({title, link, linktext}){
    return (
        <div className="box_tit">
            <strong>{title}</strong>
            <a href={link}>{linktext}</a>
        </div>
    );
}