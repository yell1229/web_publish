import Button from './Button.jsx';

export default function ButtonList({btnList}){
    return (
        <>  
            <div className="btn-container">
                {
                    btnList.map((item) => <Button text={item.text} type={item.type} />)
                }
            </div>
        </>
    );
}