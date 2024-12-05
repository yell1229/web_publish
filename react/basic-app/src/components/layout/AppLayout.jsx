import Header from "./Header.jsx";
import AvatarImage from "../AvatarImage.jsx";
import Button from "../Button.jsx";
import Menu from "../Menu.jsx";
import AvatarList from "../AvatarList.jsx";
import Body from "./Body.jsx";
import Footer from "./Footer.jsx";
import ButtonList from "../ButtonList.jsx";

export default function AppLayout(){
    const avatarList = [
        {"img" : "/images/people1.webp", "name" : "Smith"},
        {"img" : "/images/people2.webp", "name" : "James"},
        {"img" : "/images/people3.webp", "name" : "Kelly"}
    ];
    const btnList = [
        {"name" : "회원가입" , "type" : "button"},
        {"name" : "로그인" , "type" : "button"},
        {"name" : "내강의실" , "type" : "button"},
        {"name" : "공지사항" , "type" : "button"},
    ];

    return (
        <>
            <Header>
                <AvatarImage img="/images/people1.webp" />     
                <Button type="button" name="login" />
                <Menu name="로그인" href="#home" bg="#ccc" color="#000" />
            </Header>
            <Body>
                <AvatarList list={avatarList} />
            </Body>
            <Footer style={{backgroundColor:'cyan'}}>
                <hr />
                <ButtonList list={btnList} />
            </Footer>
        </>
    );
}