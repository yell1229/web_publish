import React from 'react';
import {Link} from 'react-router-dom';

export default function Header({cartCount}) {
    return (
        <div className="header-outer">
            <div className="header">
                <Link to='/' className="header-left">
                    <span>shoppy</span>
                </Link>
                <nav className="header-right">
                    <Link to='/all'>Products</Link>
                    <Link to='/cart'>MyCart <span>{cartCount}</span></Link>
                    <Link to='/login'><button type="button">Login</button></Link>
                    <Link to='/signup'><button type="button">Signup</button></Link>
                </nav>
            </div>
        </div>
    );
}

