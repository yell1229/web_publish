import React,{useState} from 'react';
import BookList from './contents/BookList';

export default function Contents({passTop}) {
    const [getnumber, setGetNumber] = useState(0);
    const passCartNum = (number) => {   
        console.log('contents에서 받은 숫자 : ',number);     
        setGetNumber(number);      
        passTop(number);
    }
    return (
        <div className="container">
            <BookList passParent={passCartNum} />
        </div>
    );
}

