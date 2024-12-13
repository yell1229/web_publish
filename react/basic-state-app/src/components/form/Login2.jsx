import React,{useState, useRef} from 'react';

export default function Login() {

    // const [id, setId] = useState('');
    // const [password, setPassword] = useState('');
    const [form, setForm] = useState({"id" :"", "password" :""}); // form에서 입력된 데이터를 담을 수 있도록 한다.

    const handleChangeForm = (event) => {
        // 아이디, 패스워드가 변경되면 setForm()함수를 이용하여  {"id" :"test"} 형식으로 저장
        console.log(event.target); // 객체로 리턴된다 {type:text, name=id, value:test}, 콘솔에는 테그로 찍힌다.
                                // {name, value} = event.target; (구조분해할당으로 받을 수 있다.)
                                // {name, value} = {type:text, name=id, value:test}
        //const {name, value} = {type:text, name=id, value:test}
        const {name, value} = event.target;
        console.log(`name -> ${name}, value -> ${value}`);
        setForm({...form, [name]:value}); // 오브젝트 객체(리터럴)의 필드값(속성값)을 변수로 입력하는 경우에는 []로 감싼 후 적용.
   
    }
    console.log(`form id -> ${form.id}`);
    console.log(`form pw -> ${form.password}`);
    
    // const handleChangeId = (event) =>{
    //     setId(event.target.value);
    //     console.log(event.target);
    // }


    

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(event);
        // 로그인폼에 입력된 값 => 서버(express, WAS , ...)
        //{{"id" :"test"},{"password":"1234"}} 폼 전체가 오브젝트 리터럴로 넘어간다.
        const formData = {
            "id" : "홍길동", // name : value
            "password":'12234'
        }
    }

    return (
        <div>
            <h1>Login</h1>
            <form action="" name="login-form" onSubmit={handleSubmit}>
                <div>
                    <label>아이디</label>
                    <input type="text" name="id" value={form.id} onChange={handleChangeForm} />
                </div>
                <div>
                    <label>패스워드</label>
                    <input type="password" name="password" value={form.password}  onChange={handleChangeForm} />
                </div>
                <div>
                    <button type="submit">로그인</button> {/* 리엑트에서는 type에 상관없이 onSubmit 이벤트가 중요하다. */}
                </div>
            </form>
        </div>
    );
}

