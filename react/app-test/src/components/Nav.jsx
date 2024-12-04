import '../css/Button.css';

export default function Nav({link,name}){
    return (
        <a href={link}>{name}</a>
    );
}