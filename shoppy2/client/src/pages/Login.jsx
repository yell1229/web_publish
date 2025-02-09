import React,{useRef, useState} from 'react';
import axios from 'axios';

export default function Login() {
    const refs = {
        idRef: useRef(null),
        pwdRef: useRef(null),
    };
    const [formData, setFormData] = useState({});

    // change evetn
    const getData = (e) => {
        let {name, value} = e.target;
        setFormData({...formData, [name]:value});
    }

    // validate
    const formValidate = () => {
        if(refs.idRef.current.value ===''){
            alert('아이디를 입력해주세요');
            return false;
        }else if(refs.pwdRef.current.value ===''){
            alert('비밀번호를 입력해주세요');
            return false;
        }
        return true;
    }

    //send
    const sendSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:9000/member/login',formData)
                .then(res => console.log('res.data',res.data))
                .catch(err => console.log('err ===> ',err));
        // if(formValidate()) console.log('formData ===> ',formData);
        
    }

    return (
        <div>
            <form onSubmit={sendSubmit}>
                <label><input type="text" name="id" placeholder='로그인' ref={refs.idRef} onChange={getData} /></label>
                <label><input type="text" name="pwd" placeholder='비밀번호' ref={refs.pwdRef} onChange={getData} /></label>
                <button type="submit">로그인</button>
                <button type="reset">취소</button>
            </form>
        </div>
    );
}

