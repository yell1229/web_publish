import Button from './Button.jsx';

export default function ButtonList({list}){
    return (
        <>
            {list.map((item) => <Button name={item.name} type={item.type} />)}
        </>
    );
}