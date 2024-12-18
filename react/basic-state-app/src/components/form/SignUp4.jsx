import React,{useState, useRef} from 'react';
import {validateSignup} from '../../apis/validate.js';
import './Cgv.css';

export default function SignUp4() {
    const refs = {
        idRef: useRef(null),
        pwdRef: useRef(null),
        cpwdRef: useRef(null),
        nameRef: useRef(null),
        phoneRef: useRef(null),
        emailnameRef: useRef(null),
        emaildomainRef: useRef(null),
    }
    const inputTypeList = ['id','pwd','cpwd','name','phone','emailname','emaildomain'];
    const initObject = (initArray) =>{
        const init = initArray.reduce((acc, key) =>{
            acc[key] = '';
            return acc;
        },{});
        return init;
    }
    const [errorMsg, setErrorMsg] = useState(initObject(inputTypeList));
    const [formData, setFormData] = useState({});
    const msgList = [
        {'name':'id','msg':'이름을 입력해주세요'},
        {'name':'pwd','msg':'비밀번호를 입력해주세요'},
        {'name':'cpwd','msg':'비밀번호를 입력해주세요'},
        {'name':'name','msg':'이름 입력해주세요'},
        {'name':'phone','msg':'전화번호 입력해주세요'},
        {'name':'emailname','msg':'emailname 입력해주세요'},
        {'name':'emaildomain','msg':'emaildomain 입력해주세요'}
    ];
    // input 입력에 따른 change 입력값 출력
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]:value});
    }
    // validation
    const validator = () => {
        const newRefs = Object.entries(refs);
        let count = 0
        for(const item of newRefs){
            const name = item[0];
            const ref = item[1];
            if(ref.current.value.trim() ===''){
                setErrorMsg({...errorMsg,[msgList[count].name]:msgList[count].msg});
                ref.current.focus();
                return false;
            }
            count++;
        }
    }
    // id 중복 체크
    const doubleCheck = () => {
        const idRef = refs.idRef.current;
        if(idRef.value===''){
            setErrorMsg({...errorMsg,['id']:'아이디를 입력해주세요'});
            idRef.focus();
            return false;
        }else{
            const did = 'test';// db에서 가져왔다고 정의. 
            if(idRef.value === did){
                setErrorMsg({...errorMsg,['id']:'사용중인 아이디입니다. 다른 아이디를 입력해주세요'});
                idRef.focus();
                return false;
            }else{
                setErrorMsg({...errorMsg,['id']:'사용가능한 아이디입니다.'});
            }
        }   
    }
    // 비밀번호 체크
    const passwordCheck = () => {
        const pwd = refs.pwdRef.current;
        const cpwd = refs.cpwdRef.current;
        if(pwd.value===''){
            setErrorMsg({...errorMsg,[msgList[1].name]:msgList[1].msg});
            pwd.focus();
            return false;
        }else if(cpwd.value === ''){
            setErrorMsg({...errorMsg,[msgList[2].name]:msgList[2].msg});
            cpwd.focus();
            return false;
        }else if(pwd.value !== cpwd.value){
            setErrorMsg({...errorMsg,[msgList[1].name]:msgList[1].msg,['cpwd']:'다른 번호를 입력하셨습니다.'});
            pwd.focus();
            return false;
        }
    }
    // submit
    const handleSubmit = (e) => {
        e.preventDefault();
        if(validator()) console.log(formData);
        
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
                                <input type="text" name="id" placeholder="아이디 입력(6~20자)" ref={refs.idRef} value={formData.id} onChange={handleChange} />
                                <button onClick={doubleCheck}>중복확인</button>       
                            </div>
                        </li>
                        <li>
                            <label for=""><b>비밀번호</b></label>
                            <span>{errorMsg.pwd}</span>
                            <div>
                                <input type="password" name="pwd" placeholder="비밀번호 입력(문자,숫자,특수문자 포함 6~12자)" ref={refs.pwdRef} value={formData.pwd} onChange={handleChange} />
                            </div>
                        </li>
                        <li>
                            <label for=""><b>비밀번호 확인</b></label>
                            <span>{errorMsg.cpwd}</span>
                            <div>
                                <input type="password" name="cpwd" placeholder="비밀번호 재입력"  ref={refs.cpwdRef} value={formData.cpwd} onChange={handleChange} onBlur={passwordCheck} />
                            </div>
                        </li>
                        <li>
                            <label for=""><b>이름</b></label>
                            <span>{errorMsg.name}</span>
                            <div>
                                <input type="text" name="name" placeholder="이름을 입력해주세요" ref={refs.nameRef} value={formData.name} onChange={handleChange} />
                            </div>
                        </li>
                        <li>
                            <label for=""><b>전화번호</b></label>
                            <span>{errorMsg.phone}</span>
                            <div>
                                <input type="text" name="phone" placeholder="휴대폰 번호 입력('-' 포함)" ref={refs.phoneRef} value={formData.phone} onChange={handleChange} />
                            </div>
                        </li>
                        <li>
                            <label for=""><b>이메일 주소</b></label>
                            <span>{errorMsg.emailname}{errorMsg.emaildomain}</span>
                            <div>
                                <input type="text" name="emailname" placeholder="이메일 주소" ref={refs.emailnameRef} value={formData.emailname} onChange={handleChange} />
                                <span>@</span>       
                                <select name="emaildomain" ref={refs.emaildomainRef} value={formData.emaildomain} onChange={handleChange}>
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

