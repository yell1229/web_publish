
export default function Logo({href , src, text, target, alt}){
    return (
        <div className="logo">
            <h1><a href={href} target={target}><img src={src} alt={alt} /></a></h1>
            <span>{text}</span>
        </div>
    );
}