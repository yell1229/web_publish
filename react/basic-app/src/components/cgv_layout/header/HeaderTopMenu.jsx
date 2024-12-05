
export default function HeaderTopMenu({className,href, src, text}){
    return (
            <li className={className}>
                <a href={href}><img src={src} alt={text} />
                    <span>{text}</span>
                </a>
            </li>
    );
}