import React,{useEffect} from 'react';


export default function Header({children}) {
    
    return (
        <header className="header">
            {children}
        </header>
    );
}

