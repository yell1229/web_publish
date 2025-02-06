import React,{useContext} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiShoppingBag } from "react-icons/fi";
import { AuthContext } from '../auth/AuthContext.js';

export default function Header({cartCount}) {
    const {isLoggedIn, setIsLoggedIn} = useContext(AuthContext);
    const navigate = useNavigate();

    // console.log('isLoggedIn --> ', isLoggedIn);
    
    const handleLoginToggle = () => {
        if(isLoggedIn){ // 로그인 성공 :;로그아웃 버튼을 클릭
            const select = window.confirm('정말로 로그아웃 하시겠습니까?');
            if(select){
                // 로컬스토리지 토큰 삭제
                localStorage.removeItem("token");
                setIsLoggedIn(false);
                
                navigate('/');
            }  
        }else{ // 로그인버튼 클릭
            navigate('/login');
        }
    }

    return (
        <div className="header-outer">
            <div className="header">
                <Link to='/' className="header-left">
                    <FiShoppingBag /><span>shoppy</span>
                </Link>
                <nav className="header-right">
                    <Link to='/all'>Products</Link>
                    <Link to='/cart'>MyCart 
                        <span style={{display:"inline-block",width:"20px",height:"20px",borderRadius:"100%",background:"tomato",color:"#fff",textAlign:"center"}}>
                        {cartCount}
                        </span>
                    </Link>
                    <button type="button" onClick={handleLoginToggle}>
                        { isLoggedIn ? "Logout" : "Login"}
                    </button>
                    
                    <Link to='/signup'><button type="button">Signup</button></Link>
                    { isLoggedIn && 
                        <Link to='/products/new'><button type="button">New Product</button></Link>
                    }
                </nav>
            </div>
        </div>
    );
}

