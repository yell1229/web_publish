import React,{useState, useRef} from 'react';
import { formValidation, handleChange} from '../../apis/validate.js';
import './member_join.css';

export default function CgvLoginForm() {
    const initFormData = {"id":"","pwd" :""};
    const [form, setForm] = useState(initFormData);
    const [errorMsg, setErrorMsg] = useState({});
    // const idRef = useRef(null);
    // const passwordRef = useRef(null);
    const refs = {
        idRef : useRef(null), // idRef는 참조변수 refs.idRef
        passwordRef : useRef(null)
    }

    const handleChangeForm = (event) => {
        const {name, value} = event.target; //event.target으로 객체가 넘어옴. 구조 분해 할당을 함.
        setForm({...form,[name]:value}); // 변수를 키값으로 사용할 땐 []
        // console.log(name,value);   
        // if(name === 'id'){
        //     (value === '') ?
        //         setErrorMsg({...errorMsg, [name]:'이름을 입력해주세요'}):
        //         setErrorMsg({...errorMsg, [name]:''});

        // }else if(name ==='pwd'){
        //     (value === '') ?
        //         setErrorMsg({...errorMsg, [name]:'비밀번호를 입력해주세요'}) :
        //         setErrorMsg({...errorMsg, [name]:''});
            
        // }
        handleChange(name, value, errorMsg, setErrorMsg);
    }

    const handleSubmit = (event) => {
        event.preventDefault(); // 브라우저에서의 진행을 막음.
        const param = {
            // 'idRef':idRef, 
            // 'passwordRef': passwordRef, 
            'refs':refs,
            'errorMsg':errorMsg, 
            'setErrorMsg':setErrorMsg
        };
        // if(formValidation(idRef, passwordRef, errorMsg, setErrorMsg)){
        //     console.log(form);
        // }
        if(formValidation(param)){
            console.log(form);
        }
    }

    return (
        <div className="member_join">
            <div className="inner">
                <div className="form_area">
                    <div className="tit">아이디 비밀번호를 입력하신 후,<br />로그인 버튼을 클릭해 주세요.</div>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <input type="text" name="id" value={form.value} placeholder="아이디를 입력해주세요" onChange={handleChangeForm} ref={refs.idRef} />
                            <p style={{color:'red'}}>{errorMsg.id}</p>
                        </div>
                        <div>
                            <input type="password" name="pwd" value={form.value} placeholder="비밀번호를 입력해주세요" onChange={handleChangeForm} ref={refs.passwordRef} />
                            <p style={{color:'red'}}>{errorMsg.pwd}</p>
                        </div>
                        <div className="btn_login"><button type="submit">로그인</button></div>
                        <div className="btns">
                            <label><input type="checkbox" />아이디 저장</label>
                            <div>
                                <a href="">아이디 찾기</a>
                                <a href="">비밀번호 찾기</a>
                            </div>
                        </div>
                        <div className="btn_naver"><a href=""><img src="img/btn_loginNaver.jpg" alt="네이버 로그인" /></a></div>
                    </form>
                </div>
                <aside>
                    <a href=""><img src="img/350x300.png" alt="외부광고" /></a>
                </aside>
            </div>
        </div>
    );
}

