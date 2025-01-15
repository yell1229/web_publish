import React from 'react';
import { Link } from 'react-router-dom';

export default function Header({count}) {
    return (
        <div>
            <nav>
                <Link to="/all">Products</Link>
                <Link to="/cart">MyCart <span>{count}</span></Link>
                <Link to="/login">Login</Link>
                <Link to="/signup">Signup</Link>
            </nav>
        </div>
    );
}

