import React,{useState, useRef} from 'react';
import '../styles/signup.css';

export default function Signup() {
    const names = ["id","pwd","cpwd","name","phone","emailname"];
    const initForm  = names.reduce((acc, name) => {
        acc[name] = '';
        return acc;
    },{});
    console.log('initForm==>',initForm);
    
    const refs = names.reduce((acc, name) => {
        acc[name] = React.createRef();
        return acc;
    },{});
    console.log('refs ==>',refs);
    const msgRefs = names.reduce((acc,name) => {
        acc[name.concat('MsgRef')] = React.createRef();
        return acc;
    },{});
    console.log('msgRefs==>',msgRefs);
    const initMsg = [
        {"name":"id","ref":msgRefs.msgidRef},
        {"name":"pwd","ref":msgRefs.msgpwdRef},
        {"name":"cpwd","ref":msgRefs.msgcpwdRef},
        {"name":"name","ref":msgRefs.msgnameRef},
        {"name":"phone","ref":msgRefs.msgphoneRef},
        {"name":"emailname","ref":msgRefs.msgemailnameRef},
        {"name":"emaildomain","ref":msgRefs.msgemaildomainRef}
    ]
    const [formData, setFormData] = useState(initForm);
    // input value
    const handleChangeForm = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});

        initMsg.map((item) => {
            
            if(item.name === name){
                if(value === '') item.ref.current.classList.add('on')
                    else  item.ref.current.classList.remove('on')  
            }
        })
    }


    // validate
    const validate = () => {
        const refArr = Object.entries(refs);
        
        const msgRefArr = Object.entries(msgRefs);
        
        for(let i=0; i< refArr.length; i++){
            const name = refArr[i][0];
            const ref = refArr[i][1];
            const msgref = msgRefArr[i][1];

            if(name !== 'emaildomainRef'){
                if(ref.current.value === ''){
                    msgref.current.classList.add('on');
                    ref.current.focus();
                    return false;
                }
            }else{
                if(ref.current.value === 'default'){
                    msgref.current.classList.add('on');
                    ref.current.focus();
                    return false;
                }
            }
        }
        return true;
    }

    // id check
    const handleDblCheck = () => {
        if(refs.idRef.current.value ===''){
            msgRefs.msgidRef.current.classList.add('on');
        }else if(refs.idRef.current.value ==='test'){
            msgRefs.msgidRef.current.classList.add('on');
        }else{
            msgRefs.msgidRef.current.value = '사용가능한 id 입니다.';
            msgRefs.msgidRef.current.classList.add('ok');
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        validate();
        console.log(formData);
        
    }

    return (
        <div className="content">
            <h1 className="center-title">SIGINUP</h1>
            <form className="signup-form" onSubmit={handleSubmit}>
                <ul>
                    
                    <li>
                        <label for="" ><b>아이디</b></label>
                        <span ref={msgRefs.idMsgRef}>아이디를 입력해주세요</span>
                        <div>
                            <input type="text" 
                                    name="id"
                                    id="id"
                                    ref={refs.idRef}
                                    onChange={handleChangeForm}
                                    placeholder = "아이디 입력(6~20자)" />
                            <button type="button" onClick={handleDblCheck}>중복확인</button>
                            <input type="hidden" id="idCheckResult" value="default" />
                        </div>
                    </li>
                    <li>
                        <label for=""><b>비밀번호</b></label>
                        <span ref={msgRefs.pwdMsgRef}>12자 이내의 비밀번호를 입력해주세요</span>
                        <div>
                            <input type="password" 
                                    name="pwd"
                                    id="pwd"
                                    ref={refs.pwdRef}
                                    onChange={handleChangeForm}
                                    placeholder="비밀번호 입력(문자,숫자,특수문자 포함 6~12자)" />
                        </div>
                    </li>
                    <li>
                        <label for=""><b>비밀번호 확인</b></label>
                        <span ref={msgRefs.cpwdMsgRef}>비밀번호 확인을 입력해주세요</span>
                        <div>
                            <input type="password" 
                                    name="cpwd"
                                    id="cpwd"
                                    ref={refs.cpwdRef}
                                    onChange={handleChangeForm}
                                    placeholder="비밀번호 재입력" />
                        </div>
                    </li>
                    <li>
                        <label for=""><b>이름</b></label>
                        <span ref={msgRefs.nameMsgRef}>이름을 입력해주세요</span>
                        <div>
                            <input type="text" 
                                    name="name"
                                    id="name"
                                    ref={refs.nameRef}
                                    onChange={handleChangeForm}
                                    placeholder="이름을 입력해주세요" />
                        </div>
                    </li>
                    <li>
                        <label for=""><b>휴대폰번호</b></label>
                        <span ref={msgRefs.phoneMsgRef}>휴대폰번호를 입력해주세요('-' 포함)</span>
                        <div>
                            <input type="text" 
                                    name="phone"
                                    id="phone"
                                    ref={refs.phoneRef}
                                    onChange={handleChangeForm}
                                    placeholder="휴대폰 번호 입력('-' 포함)" />
                        </div>
                    </li>
                    <li>
                        <label for=""><b>이메일 주소</b></label>
                        <span ref={msgRefs.emailnameMsgRef}>이메일 주소를 입력해주세요</span>
                        <div>
                            <input type="text" 
                                    name="emailname"
                                    id = "emailname"
                                    ref={refs.emailnameRef}
                                    onChange={handleChangeForm}
                                    placeholder="이메일 주소" />
                            <span>@</span>       
                            <select name="emaildomain" 
                                    id="emaildomain"
                                    ref={refs.emaildomainRef}
                                    onChange={handleChangeForm}  >
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
    );
}


