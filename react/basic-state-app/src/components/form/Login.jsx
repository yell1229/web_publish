import React,{useState, useRef} from 'react';

export default function Login() {

    // const [id, setId] = useState('');
    // const [password, setPassword] = useState('');
    const idRef = useRef(null); // 객체의 주소값이 들어간다. 
    const passwordRef = useRef(null);

    const initForm = {"id" :"", "password" :""};
    const [form, setForm] = useState(initForm); // form에서 입력된 데이터를 담을 수 있도록 한다.

    const handleChangeForm = (event) => {
        const {name, value} = event.target;
        console.log(event.target);
        setForm({...form, [name]:value}); 
   
    }

    const validate = () => {
        console.log(idRef.current.value);
        console.log(passwordRef.current.value);

        let result = true;
        if(idRef.current.value ===''){
            alert('id를 입력해주세요.');
            idRef.current.focus();
            result = false; //return false;
        }else if(passwordRef.current.value === ''){
            alert('password를 입력해주세요.');
            passwordRef.current.focus();
            result = false; //return false;
        }

        return result;
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if(validate()){
            console.log(form);
        }
        // 로그인폼에 입력된 값 => 서버(express, WAS , ...)
        //SubmitEvent(form);// 값을 입력하기만 하면 된다.
    }
    
    return (
        <div>
            <h1>Login</h1>
            <form action="" name="login-form" onSubmit={handleSubmit}>
                <div>
                    <label>아이디</label>
                    <input type="text" name="id" value={form.id} ref={idRef} onChange={handleChangeForm} />
                </div>
                <div>
                    <label>패스워드</label>
                    <input type="password" name="password" value={form.password} ref={passwordRef} onChange={handleChangeForm} />
                </div>
                <div>
                    <button type="submit">로그인</button> {/* 리엑트에서는 type에 상관없이 onSubmit 이벤트가 중요하다. */}
                </div>
            </form>
        </div>
    );
}

