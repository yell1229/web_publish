import React,{useState, useRef} from 'react';
import '../styles/signup.css';

export default function Signup() {
    const names = ["id", "pwd", "cpwd", "name", "phone", "emailname"];

    let refs = names.reduce(( acc, name) => {
        acc[name.concat('Ref')] = React.createRef();
        return acc;
    },{});
    refs.emaildomainRef = React.createRef();
    
    const [idCheckResult,setIdCheckResult] = useState('default');

    const msgRefs = names.reduce((acc, name) =>{
        acc[name.concat('MsgRef')] = React.createRef();
        return acc;
    },{});
    
    let init = names.reduce((acc, name)=>{
        acc[name] = '';
        return acc;
    },{});
    
    const [formData, setFormData] = useState(init);

    //input 입력 change
    const handleChangeForm = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name] : value});
    }
    
    

    const validate = () => {
        const newRefs = Object.entries(refs);
        const newMsgRefs = Object.entries(msgRefs);
        for(let i=0; i< newRefs.length; i++){
            // console.log('newRefs ===> ',newRefs);
            const name = newRefs[i][0];
            const ref = newRefs[i][1];
            const msgRef = newMsgRefs[i][1];
            console.log('name',name);
            console.log('ref',ref);
            console.log('msgRef',msgRef);
            
            // if(name === 'emaildomainRef'){
            //     if(ref.current.value === 'default'){
            //         ref.current.focus();
            //         return false;
            //     }
            // }else{
            //     if(ref.current.value === ''){
            //         msgRef.current.style.setProperty('color','red');
            //         ref.current.focus();
            //         return false;
            //     }
            // }
        }
        return true;
    }

    // id check
    const handleDuplicateIdCheck = () => {
        const checkid = 'test';
        if(refs.idRef.current.value === ''){
            msgRefs.idMsgRef.current.style.setProperty('color','red');
            refs.idRef.current.focus();
        }else{
            if(refs.idRef.current.value === checkid){
                msgRefs.idMsgRef.current.style.setProperty('color','red');
                refs.idRef.current.focus();
            }else {
                setIdCheckResult('complete');
                msgRefs.idMsgRef.current.value ='사용가능한 id 입니다.';
                msgRefs.idMsgRef.current.style.setProperty('color','green');
                refs.pwdRef.current.focus();
            }
        } 
    }

    //password check
    const handlePasswordCheck = () => {
        if(refs.pwdRef.current.value === ''){
            msgRefs.pwdMsgRef.current.style.setProperty('color','red');
            refs.pwdRef.current.focus();
            return false;
        }else if(refs.cpwdRef.current.value === ''){
            msgRefs.cpwdMsgRef.current.style.setProperty('color','red');
            refs.cpwdRef.current.focus();
            return false;
        }else{
            if(refs.pwdRef.current.value !== refs.cpwdRef.current.value){
                msgRefs.pwdMsgRef.current.style.setProperty('color','red');
                msgRefs.cpwdMsgRef.current.style.setProperty('color','red');
                refs.cpwdRef.current.value='';
                refs.cpwdRef.current.focus();
                return false;
            }else{
                msgRefs.pwdMsgRef.current.style.setProperty('color','green');
                msgRefs.cpwdMsgRef.current.style.setProperty('color','green');
                refs.nameRef.current.focus();
                return false;
            }
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if( validate() ){
            if(idCheckResult === 'complete' ){
                console.log('idCheckResult ====> ',idCheckResult); 
                console.log('handleSubmit ===> ',formData);
            }
        }  
    }
    return (
        <div className="content">
            <h1 className="center-title">SIGINUP</h1>
            <form className="signup-form" onSubmit={handleSubmit}>
                <ul>
                    {
                        names && names.map((name) => (
                            <li>
                                <label for=""><b>{name}</b></label>
                                <span ref={msgRefs.nameMsgRef}>{name}을 입력해주세요</span>
                                <div>
                                    {
                                        (name === 'emailname') ? (
                                            <>
                                                <input type="text" 
                                                        name="emailname"
                                                        id = "emailname"
                                                        ref={refs.emailnameRef}
                                                        onChange={handleChangeForm}
                                                        placeholder="이메일 주소" />
                                                <span>@</span>       
                                                <select name="emaildomain" 
                                                        id="emaildomain" ref={refs.emaildomainRef} onChange={handleChangeForm}>
                                                    <option value="default">선택</option>
                                                    <option value="naver.com">naver.com</option>
                                                    <option value="gmail.com">gmail.com</option>
                                                    <option value="daum.net">daum.net</option>
                                                </select>
                                            </>
                                        ):(
                                            <>
                                                <input type="text" 
                                                        name="id"
                                                        id="id"
                                                        ref={refs.idRef}
                                                        onChange={handleChangeForm}
                                                        placeholder = "아이디 입력(6~20자)" />
                                                {
                                                    name === 'id' && 
                                                        <>
                                                            <button type="button" onClick={handleDuplicateIdCheck}>중복확인</button>
                                                            <input type="hidden" id="idCheckResult" value={idCheckResult} />
                                                        </>
                                                }
                                                
                                            </>
                                        )
                                    }
                                    
                                </div>
                            </li>
                            
                        ))
                    }
                    {/* <li>
                        <label for="" ><b>아이디</b></label>
                        <span ref={msgRefs.idMsgRef}>아이디를 입력해주세요</span>
                        <div>
                            <input type="text" 
                                    name="id"
                                    id="id"
                                    ref={refs.idRef}
                                    onChange={handleChangeForm}
                                    placeholder = "아이디 입력(6~20자)" />
                            <button type="button" onClick={handleDuplicateIdCheck}>중복확인</button>
                            <input type="text" id="idCheckResult" value={idCheckResult} />
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
                                    onBlur={handlePasswordCheck}
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
                                    id="emaildomain" ref={refs.emaildomainRef} onChange={handleChangeForm}>
                                <option value="default">선택</option>
                                <option value="naver.com">naver.com</option>
                                <option value="gmail.com">gmail.com</option>
                                <option value="daum.net">daum.net</option>
                            </select>
                        </div>
                    </li> */}
                    <li>
                        <button type="submit">가입하기</button>
                        <button type="reset">가입취소</button>
                    </li>
                </ul>
            </form>
        </div>
    );
}


