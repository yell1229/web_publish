import Avatar from './Avatar.jsx';
import TextBox from './TextBox.jsx';
import '../css/Button.css';

export default function BoxList({list}){
    return (
        <>
        {
            list.map((item) => (
                <div className="box-list">
                    <Avatar img={item.img} />
                    <TextBox text={item.text} />
                </div>
            ))
        }
        </>
    );
}