import '../css/Button.css';

export default function Button({text,type}){
    return (
        <>
            <button type={type}>{text}</button>
        </>
    );
}