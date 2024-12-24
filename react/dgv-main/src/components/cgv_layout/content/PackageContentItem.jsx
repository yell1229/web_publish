
export default function PackageContentItem({href, src, alt, text, price}){
    price = price.toLocaleString().concat(' 원');
    return (
        <a href={href}>
            <div className="img"><img src={src} alt={alt} /></div>
            <div className="cont">
                <strong>{text}</strong>
                <span>{price}</span>
            </div>
        </a>
    );
}