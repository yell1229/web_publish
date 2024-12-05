import Button from './Button.jsx';
import ButtonList from './ButtonList.jsx';
import {useState, useEffect} from 'react';

export default function AppButton(){
    const [propsList,setPropsList] = useState([]);

    useEffect(() => {
        fetch('/data/button_names.json')
            .then((result) => result.json())
            .then( jsonData => setPropsList(jsonData) )
            .catch(error => console.log('error??'));
    },[]);

    console.log('propsList',propsList);
    
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