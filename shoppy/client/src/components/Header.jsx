import React from 'react';
import { Link } from 'react-router-dom';
import { FiShoppingBag } from "react-icons/fi";

export default function Header({cartCount}) {
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
                    <Link to='/login'><button type="button">Login</button></Link>
                    <Link to='/signup'><button type="button">Signup</button></Link>
                    <Link to='/employees'><button type="button">Employees</button></Link>
                </nav>
            </div>
        </div>
    );
}

