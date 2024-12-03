import NavBtn from "./NavBtn.jsx";

export default function NavBtnList({list}){
    return (
        <ul className="header_menu">
            {
                list.map((item) => <li><NavBtn href={item.href} name={item.name} /></li> )
            }
        </ul>
    );
}