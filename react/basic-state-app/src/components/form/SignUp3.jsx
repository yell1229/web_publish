import React,{useState, useRef} from 'react';
// import {validateSignup} from '../../apis/validate.js';
import './Cgv.css';

export default function SignUp3() {
    const initForm = (initArray) => {
        const init =  initArray.reduce((acc, item) => {
            acc[item] = '';
            return acc;
        },{});
        return init;
    }
    const initList = ['id', 'pwd', 'cpwd', 'name', 'phone', 'emailname', 'emaildomain'];
    const [formData,setFormData] = useState(initForm(initList));
    const [errorMsg,setErrorMsg] = useState(initForm(initList));
    console.log(errorMsg);
    const idMsgRef = useRef(null);
    const cpwdMsgRef = useRef(null);
    const refs = {
        idRef : useRef(null),
        pwdRef : useRef(null),
        cpwdRef : useRef(null),
        nameRef : useRef(null),
        phoneRef : useRef(null),
        emailnameRef : useRef(null),
        emaildomainRef : useRef(null)
    }
    const nameMsgList = [
        {'name':'id', 'mag':'아이디를 입력해주세요'},
        {'name':'pwd', 'mag':'비밀번호를 입력해주세요'},
        {'name':'cpwd', 'mag':'비밀번호를 입력해주세요'},
        {'name':'name', 'mag':'이름을 입력해주세요'},
        {'name':'phone', 'mag':'전화번호를 입력해주세요'},
        {'name':'emailname', 'mag':'이메일을 입력해주세요'},
        {'name':'emaildomain', 'mag':'도메인을 확인 해주세요'}
    ];
    // input event change
    const handleFormChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]:value});
        errorCheck(name,value);
    }   
    
    const errorCheck = (name,value) => {
        nameMsgList.map((item)=>
            (item.name === name) ? 
        ( 
            (value === '') ? setErrorMsg({...errorMsg,[item.name]:item.mag}) : setErrorMsg({...errorMsg,[item.name]:''})
        ) : ''

        )
    }
    
    
    //input valitation
    const validation = () => {
        const newRefs = Object.entries(refs);

        let count = 0;
        for(const item of newRefs){
            const name = item[0];
            const ref = item[1];
            if(ref && ref.current.value === ''){
                // alert(names[count].mag);
                setErrorMsg({...errorMsg,[nameMsgList[count].name]:nameMsgList[count].mag})
                ref.current.focus();
                return false;
            }
            count++;
        }

    }
    // id check
    const handleIdCheck = () => {
        const id = refs.idRef.current;
        if(id.value === ''){
            errorCheck('id',id.value);
        }else{
            const did = 'test';
            if(id.value === did){
                setErrorMsg({...errorMsg,['id']:'사용중인 id 입니다.'});
                id.focus();
                return false;
            }else{
                setErrorMsg({...errorMsg,['id']:'사용가능한 id 입니다.'});
                idMsgRef.current.style.setProperty('color','green');
            }
        }
    }
    // password check
    const passwordCheck = () => {
        const pwd = refs.pwdRef.current;
        const cpwd = refs.cpwdRef.current;
        if(pwd.value === ''){
            setErrorMsg({...errorMsg,['pwd']:'비밀번호를 입력해주세요'});
            pwd.focus();
        }else if(cpwd.value === ''){
            setErrorMsg({...errorMsg,['cpwd']:'비밀번호를 확인해주세요'});
            cpwd.focus();
        }else if(pwd.value !== cpwd.value){
            setErrorMsg({...errorMsg,['cpwd']:'같은 비밀번호를 확인해주세요'});
            setFormData({...formData,['pwd']:'',['cpwd']:''});
            cpwd.focus();
        }else if(pwd.value === cpwd.value){
            cpwdMsgRef.current.style.setProperty('color','green');
            setErrorMsg({...errorMsg,['cpwd']:'비밀번호가 확인되었습니다.'});
        }
    }
    //suumit
    const formSubmit = (e) => {
        e.preventDefault();
        if(validation())  console.log(formData);
        
    }



    return (
        <div className="content">
            <div className="join-form center-layout">
                <h1 className="center-title">회원가입</h1>
                <form onSubmit={formSubmit}>
                    <ul>
                        <li>
                            <label><b>아이디</b></label>
                            <span ref={idMsgRef}>{errorMsg.id}</span>
                            <div>
                                <input type="text" name="id" placeholder="아이디 입력(6~20자)" value={formData.id} ref={refs.idRef} onChange={handleFormChange} />
                                <button onClick={handleIdCheck}>중복확인</button>       
                            </div>
                        </li>
                        <li>
                            <label><b>비밀번호</b></label>
                            <span>{errorMsg.pwd}</span>
                            <div>
                                <input type="password" name="pwd" placeholder="비밀번호 입력(문자,숫자,특수문자 포함 6~12자)" value={formData.pwd} ref={refs.pwdRef} onChange={handleFormChange} />
                            </div>
                        </li>
                        <li>
                            <label><b>비밀번호 확인</b></label>
                            <span ref={cpwdMsgRef}>{errorMsg.cpwd}</span>
                            <div>
                                <input type="password" name="cpwd" placeholder="비밀번호 재입력" value={formData.cpwd} ref={refs.cpwdRef} onChange={handleFormChange} onBlur={passwordCheck} />
                            </div>
                        </li>
                        <li>
                            <label><b>이름</b></label>
                            <span>{errorMsg.name}</span>
                            <div>
                                <input type="text" name="name" placeholder="이름을 입력해주세요" value={formData.name} ref={refs.nameRef} onChange={handleFormChange} />
                            </div>
                        </li>
                        <li>
                            <label><b>전화번호</b></label>
                            <span>{errorMsg.phone}</span>
                            <div>
                                <input type="text" name="phone" placeholder="휴대폰 번호 입력('-' 포함)" value={formData.phone} ref={refs.phoneRef} onChange={handleFormChange} />
                            </div>
                        </li>
                        <li>
                            <label><b>이메일 주소</b></label>
                            <span>{errorMsg.emailname}</span>
                            <div>
                                <input type="text" name="emailname" placeholder="이메일 주소"  value={formData.emailname} ref={refs.emailnameRef} onChange={handleFormChange} />
                                <span>@</span>       
                                <select name="emaildomain" value={formData.emaildomain} ref={refs.emaildomainRef} onChange={handleFormChange}>
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

