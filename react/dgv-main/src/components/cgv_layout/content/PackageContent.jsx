import PackageContentTitle from "./PackageContentTitle.jsx";
import PackageContentItem from "./PackageContentItem.jsx";


export default function PackageContent({title, link, linktext, list}){
    return (
        <div className="box">
            <PackageContentTitle title={title} link={link} linktext={linktext} />
            <ul className="list">
                <li>
                    {
                    list && list.map( item => <PackageContentItem href={item.href} src={item.src} alt={item.alt} text={item.text} price={item.price} /> )
                    }     
                </li>
            </ul>
        </div>
    );
}