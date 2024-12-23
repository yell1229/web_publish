import React,{useState, useRef} from 'react';
import './Cgv.css';

export default function SignUp6() {
    const list = ["id","pwd","cpwd","name","phone","emailname","emaildomain"];
    const newArr = list.reduce((acc, key) => {
        acc[key]='';
        return acc
    },{});
    const msgList = [
        {'name':'id',"msg":"아이디를 입력해주세요"},
        {'name':'pwd',"msg":"비밀번호를 입력해주세요"},
        {'name':'cpwd',"msg":"비밀번호를 다시 입력해주세요"},
        {'name':'name',"msg":"이름을 입력해주세요"},
        {'name':'phone',"msg":"전화번호를 입력해주세요"},
        {'name':'emailname',"msg":"이메일을 입력해주세요"},
        {'name':'emaildomain',"msg":"도메인을 입력해주세요"}
    ]
    const [formData, setFormData] = useState({});
    const [errorMsg, setErrorMsg] = useState(newArr);
    const refs = {
        idRef : useRef(null),
        pwdRef : useRef(null),
        cpwdRef : useRef(null),
        nameRef : useRef(null),
        phoneRef : useRef(null),
        emailnameRef : useRef(null),
        emaildomainRef : useRef(null)
    };
    
    //input 화면에 value 출력
    const handleChange = (e) => {
        const {name,value} = e.target;
        setFormData({...formData,[name] : value});
        msgList.map((item,i) => 
            (item.name === name) ?
                (value ==='') ?
                    setErrorMsg({...errorMsg,[item.name]:item.msg})
                    : setErrorMsg({...errorMsg,[item.name]:''})
            : ''
        )
    }
    // validation
    const validation = () => {
        let count = 0;
        const newRef = Object.entries(refs);
        for(const item of newRef){
            const name = item[0];
            const ref = item[1];
            if(ref.current.value === ''){
                setErrorMsg({...errorMsg,[msgList[count].name]:msgList[count].msg});
                ref.current.focus();
                return false;
            }
            count++;
        }
        return true;
    }

    // submit
    const handleSubmit = (e) => {
        e.preventDefault();
        if(validation()) console.log(formData);
        
    }
    return (
        <div className="content">
            <div className="join-form center-layout">
                <h1 className="center-title">회원가입</h1>
                <form onSubmit={handleSubmit}>
                    <ul>
                        <li>
                            <label for="" ><b>아이디</b></label>
                            <span>{errorMsg.id}</span>
                            <div>
                                <input type="text" name="id" placeholder="아이디 입력(6~20자)" value={formData.id} ref={refs.idRef} onChange={handleChange} />
                                <button>중복확인</button>       
                            </div>
                        </li>
                        <li>
                            <label for=""><b>비밀번호</b></label>
                            <span>{errorMsg.pwd}</span>
                            <div>
                                <input type="password" name="pwd" placeholder="비밀번호 입력(문자,숫자,특수문자 포함 6~12자)" value={formData.pwd} ref={refs.pwdRef} onChange={handleChange} />
                            </div>
                        </li>
                        <li>
                            <label for=""><b>비밀번호 확인</b></label>
                            <span>{errorMsg.cpwd}</span>
                            <div>
                                <input type="password" name="cpwd" placeholder="비밀번호 재입력" value={formData.cpwd} ref={refs.cpwdRef} onChange={handleChange} />
                            </div>
                        </li>
                        <li>
                            <label for=""><b>이름</b></label>
                            <span>{errorMsg.name}</span>
                            <div>
                                <input type="text" name="name" placeholder="이름을 입력해주세요" value={formData.name} ref={refs.nameRef} onChange={handleChange} />
                            </div>
                        </li>
                        <li>
                            <label for=""><b>전화번호</b></label>
                            <span>{errorMsg.phone}</span>
                            <div>
                                <input type="text" name="phone" placeholder="휴대폰 번호 입력('-' 포함)" value={formData.phone} ref={refs.phoneRef} onChange={handleChange} />
                            </div>
                        </li>
                        <li>
                            <label for=""><b>이메일 주소</b></label>
                            <span>{errorMsg.emailname} {errorMsg.emaildomain}</span>
                            <div>
                                <input type="text" name="emailname" placeholder="이메일 주소" value={formData.emailname} ref={refs.emailnameRef} onChange={handleChange} />
                                <span>@</span>       
                                <select name="emaildomain" ref={refs.emaildomainRef} onChange={handleChange}>
                                    <option value="default">선택</option>
                                    <option value="naver.com">naver.com</option>
                                    <option value="gmail.com">gmail.com</option>
                                    <option value="daum.net">daum.net</option>
                                </select>
                            </div>
                        </li>
                        <li>
                            <button type="submit">가입하기</button>
                            <button type="reset">가입취소</button>
                        </li>
                    </ul>
                </form>
            </div>
        </div>
    );
}

