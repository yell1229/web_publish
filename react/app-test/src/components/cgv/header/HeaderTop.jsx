
export default function HeaderTop(){
    return (
        <div className="header_area">
            <div className="inner">
                <div className="logo">
                    <h1><a href="/"><img src="img/logoRed.png" alt="CGV" /></a></h1>
                    <span>DEEP DIVE SPACE</span>
                </div>
                <div className="info_menu">
                    <div className="ban"><a href=""><img src="img/16758461047540.png" alt="" /></a></div>
                    <ul>
                        <li className="menu">
                            <a href=""><i class="bi bi-list"></i>
                                <span>메뉴</span>
                            </a>
                        </li>
                        <li className="login">
                            <a href=""><img src="img/loginPassword.png" alt="" />
                            <span>로그인</span>
                        </a>
                        </li>
                        <li>
                            <a href=""><img src="img/loginJoin.png" alt="" />
                            <span>회원가입</span>
                        </a>
                        </li>
                        <li>
                            <a href=""><img src="img/loginMember.png" alt="" />
                            <span>MY CGV</span>
                        </a>
                        </li>
                        <li>
                            <a href=""><img src="img/loginCustomer.png" alt="" />
                            <span>고객센터</span>
                        </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}