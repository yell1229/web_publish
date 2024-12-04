import Button from './Button.jsx';
import ButtonList from './ButtonList.jsx';

export default function AppButton(){
    const propsList = [
        {"name" : "All" , "type" : "botton"},
        {"name" : "Front-end" , "type" : "reset"},
        {"name" : "Back-end" , "type" : "submit"},
        {"name" : "Mobile" , "type" : "botton"}
    ];
    return (
        <>
        <div style={{display:'flex'}}>
            <Button name="All" type="button" />
            <Button name="Front-end" type="reset" />
            <Button name="Back-end" type="submit" />
            <Button name="Mobile" type="button" />
        </div>
        <div style={{display:'flex'}}>
            <ButtonList list={propsList} />
        </div>
        </>
    );
}