import React,{useState, useRef} from 'react';
import { validationLogin3 } from '../../apis/validate.js';

export default function Login3() {
    const idRef = useRef(null);
    const pwdRef = useRef(null);
    const [form,setForm] = useState({"id" :"" ,"password" :""});
    const [errorMsg, setErrorMsg] = useState({"id" :"" ,"password" :""});

    const inputData = (e) => {
        const {name, value} = e.target;
        setForm({...form, [name]:value}); //...form 안에 들어가는것은 {}안에 있는 값!! , object 리터럴 : [name]
        //console.log(name,value);     
        if(name === 'id'){
            (value === '') ?
            setErrorMsg({...errorMsg , ['id']:"아이디를 입력해주세요"}) :
            setErrorMsg({...errorMsg,['id']:''});
        }else if(name === 'password'){
            (value === '') ?
            setErrorMsg({...errorMsg , ['password']:"비밀번호를 입력해주세요"}) :
            setErrorMsg({...errorMsg,['password']:''});
        }
    }
    // const validation = () => {
    //     let result = true;
    //     if(idRef.current.value === ''){ // idRef === form.id
    //         setErrorMsg({...errorMsg , ['id']:"아이디를 입력해주세요"});
    //         idRef.current.focus();
    //         result = false;
    //     }else if(pwdRef.current.value===''){
    //         setErrorMsg({...errorMsg , ['password']:"비밀번호를 입력해주세요"});
    //         pwdRef.current.focus();
    //         result = false;
    //     }
    //     return result;
    // }
    const sendSubmit = (e) => {
        e.preventDefault();
        const param = {
            'idRef': idRef,
            'pwdRef':pwdRef,
            'errorMsg':errorMsg,
            'setErrorMsg':setErrorMsg
        }
        if(validationLogin3(param)) console.log(form);       
    }

    return (
        <div>
            <form onSubmit={sendSubmit}>
                <div>
                    <label>ID</label>
                    <input type="text" name="id" value={form.id} ref={idRef} onChange={inputData} />
                    <span style={{color:'red'}}>{errorMsg.id}</span>
                </div>
                <div>
                    <label>PW</label>
                    <input type="password" name="password" value={form.password} ref={pwdRef} onChange={inputData} />
                    <span style={{color:'red'}}>{errorMsg.password}</span>
                </div>
                <div><button type="submit">Login</button></div>
            </form>
        </div>
    );
}

