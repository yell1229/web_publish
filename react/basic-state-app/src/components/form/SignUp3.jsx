import React,{useState, useRef} from 'react';
// import {validateSignup} from '../../apis/validate.js';
import './Cgv.css';

export default function SignUp3() {
    // const init={
    //     'id':'',
    //     'pwd':'',
    //     'cpwd':'',
    //     'name':'',
    //     'phone':'',
    //     'emailname':'',
    //     'emaildomain':''
    // }
    const initForm = (initArray) => {
        const init =  initArray.reduce((acc, item) => {
            acc[item] = '';
            return acc;
        },{});
        return init;
    }
    const initList = ['id', 'pwd', 'cpwd', 'name', 'phone', 'emailname', 'emaildomain'];
    const [formData,setFormData] = useState(initForm(initList));
    const refs = {
        idRef : useRef(null),
        pwdRef : useRef(null),
        cpwdRef : useRef(null),
        nameRef : useRef(null),
        phoneRef : useRef(null),
        emailnameRef : useRef(null),
        emaildomainRef : useRef(null)
    }
    // input event change
    const handleFormChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]:value});
    }   
    // console.log(formData);
    
    const names = [
        {'name':'id', 'mag':'아이디를 입력해주세요'},
        {'name':'pwd', 'mag':'비밀번호를 입력해주세요'},
        {'name':'cpwd', 'mag':'비밀번호를 입력해주세요'},
        {'name':'name', 'mag':'이름을 입력해주세요'},
        {'name':'phone', 'mag':'전화번호를 입력해주세요'},
        {'name':'emailname', 'mag':'이메일을 입력해주세요'},
        {'name':'emaildomain', 'mag':'도메인을 확인 해주세요'}
    ];
    //input valitation
    const validation = () => {
        let result = true;

        const newRefs = Object.entries(refs);
        console.log('newRefs',newRefs);

        for(const item of newRefs){
            const name = item[0];
            const ref = item[1];
            if(item[0].current.value === ''){
                console.log('id');
                refs.idRef.current.focus();
                result = false;
            }
        }
        
        
        // if(refs.idRef.current.value === ''){
        //     console.log('id');
        //     refs.idRef.current.focus();
        //     result = false;
        // }else if(refs.pwdRef.current.value ===''){
        //     console.log('비밀번호');
        //     refs.pwdRef.current.focus();
        //     result = false;
        // }else if(refs.cpwdRef.current.value ===''){
        //     console.log('비밀번호 확인');
        //     refs.cpwdRef.current.focus();
        //     result = false;
        // }else if(refs.nameRef.current.value ===''){
        //     console.log('이름');
        //     refs.nameRef.current.focus();
        //     result = false;
        // }else if(refs.phoneRef.current.value ===''){
        //     console.log('전화번호');
        //     refs.phoneRef.current.focus();
        //     result = false;
        // }else if(refs.emailnameRef.current.value ===''){
        //     console.log('이메일');
        //     refs.emailnameRef.current.focus();
        //     result = false;
        // }else if(refs.emaildomainRef.current.value ===''){
        //     console.log('도메인');
        //     refs.emaildomainRef.current.focus();
        //     result = false;
        // }

        return result;
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
                            <span></span>
                            <div>
                                <input type="text" name="id" placeholder="아이디 입력(6~20자)" value={formData.id} ref={refs.idRef} onChange={handleFormChange} />
                                <button>중복확인</button>       
                            </div>
                        </li>
                        <li>
                            <label><b>비밀번호</b></label>
                            <span>12자 이내의 비밀번호를 입력해주세요</span>
                            <div>
                                <input type="password" name="pwd" placeholder="비밀번호 입력(문자,숫자,특수문자 포함 6~12자)" value={formData.pwd} ref={refs.pwdRef} onChange={handleFormChange} />
                            </div>
                        </li>
                        <li>
                            <label><b>비밀번호 확인</b></label>
                            <span>비밀번호가 일치하지 않습니다</span>
                            <div>
                                <input type="password" name="cpwd" placeholder="비밀번호 재입력" value={formData.cpwd} ref={refs.cpwdRef} onChange={handleFormChange} />
                            </div>
                        </li>
                        <li>
                            <label><b>이름</b></label>
                            <div>
                                <input type="text" name="name" placeholder="이름을 입력해주세요" value={formData.name} ref={refs.nameRef} onChange={handleFormChange} />
                            </div>
                        </li>
                        <li>
                            <label><b>전화번호</b></label>
                            <div>
                                <input type="text" name="phone" placeholder="휴대폰 번호 입력('-' 포함)" value={formData.phone} ref={refs.phoneRef} onChange={handleFormChange} />
                            </div>
                        </li>
                        <li>
                            <label><b>이메일 주소</b></label>
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

