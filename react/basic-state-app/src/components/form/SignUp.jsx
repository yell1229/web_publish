import React,{useState, useRef} from 'react';
import {validateSignup} from '../../apis/validate.js';
import {errorCheckSignup} from '../../apis/errorCheck.js';
import './Cgv.css';

export default function SignUp() {
    // 폼 체크
    const refs = {
        idRef : useRef(null), // 객체의 주소가 들어가기 때문에 ''없이 진행한다.
        pwdRef : useRef(null),
        cpwdRef : useRef(null),
        nameRef : useRef(null),
        phoneRef : useRef(null),
        emailnameRef : useRef(null),
        emaildomainRef : useRef(null)
    }

    // form 데이터 저장
    const init={
        'id':'',
        'pwd':'',
        'cpwd':'',
        'name':'',
        'phone':'',
        'emailname':'',
        'emaildomain':''
    }
    const initErrors={
        'id':'',
        'pwd':'',
        'cpwd':'',
        'name':'',
        'phone':'',
        'emailname':'',
        'emaildomain':''
    }

    const [formData, setFormData] = useState(init);
    const [errors, setErrors] = useState(initErrors);

    // 폼 입력이 변경되는 경우 호출되는 함수
    const handleChangeSignup = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name] : value});

        // if(name === 'id'){
        //     (value ==='') ? setErrors({...errorCheckSignup,['id']:'아이디를 입력해주세요'}):
        //     setErrors({...errorCheckSignup,['id']:''});
        // }
        errorCheckSignup(name,value,errors, setErrors);
    }

    

    // 폼 입력이 종료된 후 submit 함수
    const handleSubmitSignup = (e) => {
        e.preventDefault();
        if(validateSignup(refs, errors, setErrors)) console.log(formData);
        
    }
    

    return (
        <div className="content">
            <div className="join-form center-layout">
                <h1 className="center-title">회원가입</h1>
                <form onSubmit={handleSubmitSignup}>
                    <ul>
                        <li>
                            <label for="" ><b>아이디</b></label>
                            <span>{errors.id}</span>
                            <div>
                                <input type="text" name="id" value={formData.id} placeholder="아이디 입력(6~20자)" ref={refs.idRef} onChange={handleChangeSignup} />
                                <button>중복확인</button>       
                            </div>
                        </li>
                        <li>
                            <label for=""><b>비밀번호</b></label>
                            <span>{errors.pwd}</span>
                            <div>
                                <input type="password" name="pwd" value={formData.pwd} placeholder="비밀번호 입력(문자,숫자,특수문자 포함 6~12자)" ref={refs.pwdRef} onChange={handleChangeSignup} />
                            </div>
                        </li>
                        <li>
                            <label for=""><b>비밀번호 확인</b></label>
                            <span>{errors.cpwd}</span>
                            <div>
                                <input type="password" name="cpwd" value={formData.cpwd} placeholder="비밀번호 재입력" ref={refs.cpwdRef} onChange={handleChangeSignup} />
                            </div>
                        </li>
                        <li>
                            <label for=""><b>이름</b></label>
                            <span>{errors.name}</span>
                            <div>
                                <input type="text" name="name" value={formData.name} placeholder="이름을 입력해주세요" ref={refs.nameRef} onChange={handleChangeSignup} />
                            </div>
                        </li>
                        <li>
                            <label for=""><b>전화번호</b></label>
                            <span>{errors.phone}</span>
                            <div>
                                <input type="text" name="phone" value={formData.phone} placeholder="휴대폰 번호 입력('-' 포함)" ref={refs.phoneRef} onChange={handleChangeSignup} />
                            </div>
                        </li>
                        <li>
                            <label for=""><b>이메일 주소</b></label>
                            <span>{errors.emailname}</span>
                            <div>
                                <input type="text" name="emailname" value={formData.emailname} placeholder="이메일 주소" ref={refs.emailnameRef} onChange={handleChangeSignup} />
                                <span>@</span>       
                                <select name="emaildomain" value={formData.emaildomain} ref={refs.emaildomainRef} onChange={handleChangeSignup}>
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

