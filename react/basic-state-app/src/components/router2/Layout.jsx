import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import Header from './Header.jsx';

export default function Layout() {
    return (
        <div>
            <Header>
                <Link to="/" style={{padding:'20px'}}>Home</Link>
                <Link to="#airbnb" style={{padding:'20px'}}>AirBnb</Link>
                <Link to="aladin" style={{padding:'20px'}}>Aladin</Link>
                <Link to="avatar" style={{padding:'20px'}}>Avatar</Link>
                <Link to="bookstore">BookStore</Link>
            </Header>
            <Outlet />
            {/* <Footer>
                <div>Footer</div>
            </Footer> */}
        </div>
    );
}

