import React,{useState, useRef} from 'react';
// import {validateSignup} from '../../apis/validate.js';
import './Cgv.css';

export default function SignUp2() {
    // 폼의 위치를 담은 객체
    const refs = {
        idRef : useRef(null), // 객체의 주소가 들어가기 때문에 ''없이 진행한다.
        pwdRef : useRef(null),
        cpwdRef : useRef(null),
        nameRef : useRef(null),
        phoneRef : useRef(null),
        emailnameRef : useRef(null),
        emaildomainRef : useRef(null)
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
    // form을 담을 변수
    const [formData, setFormData] = useState({});
    const [errors, setErrors] = useState(initErrors);

    // form 변경 시 호출
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData,[name]:value}); // ...이 없으면 formData 의 주소를 힙에서 가져옴. ...formData는 주소의 값을 가져와서 펼쳐놓는다.

        // 문자 입력 시 경고텍스트 삭제
        const Lists = [
            {'name':'id','msg':'이름을 입력해주세요'},
            {'name':'pwd','msg':'비밀번호를 입력해주세요'},
            {'name':'cpwd','msg':'비밀번호를 입력해주세요'},
            {'name':'name','msg':'이름 입력해주세요'},
            {'name':'phone','msg':'전화번호 입력해주세요'},
            {'name':'emailname','msg':'emailname 입력해주세요'},
            {'name':'emaildomain','msg':'emaildomain 입력해주세요'},
        ];

        Lists.map((item) => 
            (item.name === name) ? ( (value === '') ? setErrors({...errors,[item.name]:item.msg}) : setErrors({...errors,[item.name]:''}) ) : ''
        );

    }
    // validation
    const validate = () => {
        let checkResult = true;
        if(refs.idRef.current.value === ''){
            // alert('id');
            setErrors({...errors,['id']:'이름을 입력해주세요'});
            //refs.idRef.current.style.setProperty('color','red);
            refs.idRef.current.focus();
            checkResult = false;
        }else if(refs.pwdRef.current.value === ''){
            setErrors({...errors,['pwd']:'비밀번호를 입력해주세요'});
            refs.pwdRef.current.focus();
            checkResult = false;
            
        }else if(refs.cpwdRef.current.value === ''){
            setErrors({...errors,['cpwd']:'비밀번호를 입력해주세요'});
            refs.cpwdRef.current.focus();
            checkResult = false;
            
        }else if(refs.nameRef.current.value === ''){
            setErrors({...errors,['name']:'이름 입력해주세요'});
            refs.nameRef.current.focus();
            checkResult = false;
            
        }else if(refs.phoneRef.current.value === ''){
            setErrors({...errors,['phone']:'전화번호 입력해주세요'});
            refs.phoneRef.current.focus();
            checkResult = false;
            
        }else if(refs.emailnameRef.current.value === ''){
            setErrors({...errors,['emailname']:'emailname 입력해주세요'});
            refs.emailnameRef.current.focus();
            checkResult = false;
        }else if(refs.emaildomainRef.current.value === 'default'){
            setErrors({...errors,['emaildomain']:'도메인을 입력해주세요'});
            refs.emaildomainRef.current.focus();
            checkResult = false;
        }

        return checkResult;
    }
    //form 전송
    const formSubmit = (e) => {
        e.preventDefault();
        if(validate()) console.log(formData);
        
    }
    return (
        <div className="content">
            <div className="join-form center-layout">
                <h1 className="center-title">회원가입</h1>
                <form onSubmit={formSubmit}>
                    <ul>
                        <li>
                            <label for="" ><b>아이디</b></label>
                            <span>{errors.id}</span>
                            <div>
                                <input type="text" name="id" placeholder="아이디 입력(6~20자)" value={formData.id} ref={refs.idRef} onChange={handleChange} />
                                <button>중복확인</button>       
                            </div>
                        </li>
                        <li>
                            <label for=""><b>비밀번호</b></label>
                            <span>{errors.pwd}</span>
                            <div>
                                <input type="password" name="pwd" placeholder="비밀번호 입력(문자,숫자,특수문자 포함 6~12자)" value={formData.pwd} ref={refs.pwdRef} onChange={handleChange} />
                            </div>
                        </li>
                        <li>
                            <label for=""><b>비밀번호 확인</b></label>
                            <span>{errors.cpwd}</span>
                            <div>
                                <input type="password" name="cpwd" placeholder="비밀번호 재입력" value={formData.cpwd} ref={refs.cpwdRef} onChange={handleChange} />
                            </div>
                        </li>
                        <li>
                            <label for=""><b>이름</b></label>
                            <div>
                                <input type="text" name="name" placeholder="이름을 입력해주세요" value={formData.name} ref={refs.nameRef} onChange={handleChange} />
                            </div>
                        </li>
                        <li>
                            <label for=""><b>전화번호</b></label>
                            <div>
                                <input type="text" name="phone" placeholder="휴대폰 번호 입력('-' 포함)" value={formData.phone} ref={refs.phoneRef} onChange={handleChange} />
                            </div>
                        </li>
                        <li>
                            <label for=""><b>이메일 주소</b></label>
                            <div>
                                <input type="text" name="emailname" placeholder="이메일 주소" value={formData.emailname} ref={refs.emailnameRef} onChange={handleChange} />
                                <span>@</span>       
                                <select name="emaildomain" value={formData.emaildomain} ref={refs.emaildomainRef} onChange={handleChange}>
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

