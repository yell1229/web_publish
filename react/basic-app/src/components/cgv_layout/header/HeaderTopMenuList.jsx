import HeaderTopMenu from "./HeaderTopMenu.jsx";

export default function HeaderTopMenuList(){
    const list = [
        {"href":"#" , "className" :"login" , "src" :"img/loginPassword.png", "text":"로그인"},
        {"href":"#" , "className" :"" , "src" :"img/loginJoin.png", "text":"회원가입"},
        {"href":"#" , "className" :"" , "src" :"img/loginMember.png", "text":"My CGV"},
        {"href":"#" , "className" :"" , "src" :"img/loginCustomer.png", "text":"고객센터"}
    ];

    return (
        <ul>
            {
                list.map((menu) => <HeaderTopMenu href={menu.href} className={menu.className} src={menu.src} text={menu.text} />)
            }
            
        </ul>
    );
}