import './Header.css';

export default function Header({children}){ // 구조분해할당으로 받는다. Header 사이에 들어가는 컴포넌트들.
    return (
        <header>
            {children}
        </header>
    );
}