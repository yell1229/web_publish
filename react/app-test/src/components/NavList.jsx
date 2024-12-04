import Nav from './Nav.jsx';

export default function NavList({link}){
    return (
        <nav className="nav-container">
        {
            link.map((item) => <Nav link={item.link} name={item.name} />)
        }
        </nav>
    );
}