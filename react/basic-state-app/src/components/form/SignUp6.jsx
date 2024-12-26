import React,{useState, useRef} from 'react';
import {validateSignup} from '../../apis/validate.js';
import './Cgv.css';

export default function SignUp7() {
    const arr=[
        "id",
        "pwd",
        "cpwd",
        "name",
        "phone",
        "emailname",
        "gender",
        "emaildomain",
    ];
    const newArr = arr.reduce((acc, key)=>{
        acc[key] = '';
        return acc
    },{});
    const [errorMsg, setErrorMsg] = useState(newArr); //{id:""}
    const refs = {
        idRef:useRef(null),
        pwdRef:useRef(null),
        cpwdRef:useRef(null),
        nameRef:useRef(null),
        phoneRef:useRef(null),
        emailnameRef:useRef(null),
        genderRef:useRef(null),
        emaildomainRef:useRef(null)
    }
    const [formData, setFormData] = useState(newArr);// form 입력값

    const msgList=[
        {'name':'id',"msg":"아이디를 입력해주세요"},
        {'name':'pwd',"msg":"비밀번호를 입력해주세요"},
        {'name':'cpwd',"msg":"비밀번호를 다시 입력해주세요"},
        {'name':'name',"msg":"이름을 입력해주세요"},
        {'name':'phone',"msg":"전화번호를 입력해주세요"},
        {'name':'emailname',"msg":"이메일을 입력해주세요"},
        {'name':'gender',"msg":"성별을 입력해주세요"},
        {'name':'emaildomain',"msg":"도메인을 입력해주세요"}
    ];

    // input 입력된 값 받고, 화면에 뿌려줌
    const handleChangeValue = (e) => {
        const {name,value} = e.target;
        setFormData({...formData, [name]:value});

        msgList.map(ele =>
            (ele.name === name) ?
                (value==='') ?
                    setErrorMsg({...errorMsg,[ele.name]:ele.msg}) : setErrorMsg({...errorMsg,[ele.name]:''})
                : ''
        )
        
    }

    // validation
    const handleValidator = () => {
        const newref = Object.entries(refs);
        let count =0;
        for(const ele of newref){ 
            if(ele[0] !=='emaildomainRef' && ele[0] !=='genderRef'){
                if(ele[1].current.value ===''){
                    setErrorMsg({...errorMsg,[msgList[count].name]:msgList[count].msg})
                    ele[1].current.focus();
                    return false;
                }
            }else if(ele[0] ==='genderRef'){
                setErrorMsg({...errorMsg,[msgList[count].name]:msgList[count].msg})
                ele[1].current.focus();
                return false;
            }else if(ele[0] ==='emaildomainRef'){
                setErrorMsg({...errorMsg,[msgList[count].name]:msgList[count].msg})
                ele[1].current.focus();
                return false;
            }
            
            count++;
        }
    }

    // 전송
    const handleSubmit = (e) =>{
        e.preventDefault();
        if(handleValidator()) console.log(formData);
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
                                <input type="text" name="id" placeholder="아이디 입력(6~20자)" ref={refs.idRef} value={formData.id} onChange={handleChangeValue}/>
                                <button>중복확인</button>       
                            </div>
                        </li>
                        <li>
                            <label for=""><b>비밀번호</b></label>
                            <span>{errorMsg.pwd}</span>
                            <div>
                                <input type="password" name="pwd" placeholder="비밀번호 입력(문자,숫자,특수문자 포함 6~12자)" ref={refs.pwdRef} value={formData.pwd} onChange={handleChangeValue} />
                            </div>
                        </li>
                        <li>
                            <label for=""><b>비밀번호 확인</b></label>
                            <span>{errorMsg.cpwd}</span>
                            <div>
                                <input type="password" name="cpwd" placeholder="비밀번호 재입력" ref={refs.cpwdRef} value={formData.cpwd} onChange={handleChangeValue} />
                            </div>
                        </li>
                        <li>
                            <label for=""><b>이름</b></label>
                            <span>{errorMsg.name}</span>
                            <div>
                                <input type="text" name="name" placeholder="이름을 입력해주세요" ref={refs.nameRef} value={formData.name} onChange={handleChangeValue} />
                            </div>
                        </li>
                        <li>
                            <label for=""><b>전화번호</b></label>
                            <span>{errorMsg.phone}</span>
                            <div>
                                <input type="text" name="phone" placeholder="휴대폰 번호 입력('-' 포함)" ref={refs.phoneRef} value={formData.phone} onChange={handleChangeValue} />
                            </div>
                        </li>
                        <li>
                            <label for=""><b>성별</b></label>
                            <span>{errorMsg.gender}</span>
                            <div>
                                <label style={{width:'50%'}}><input style={{width:'30px'}}type="radio" name="gender"  ref={refs.genderRef} value="m" checked={formData.gender ='m'} onChange={handleChangeValue} />남자</label>
                                <label style={{width:'50%'}}><input style={{width:'30px'}}type="radio" name="gender"  ref={refs.genderRef} value="f" checked={formData.gender ='f'} onChange={handleChangeValue} />여자</label>
                            </div>
                        </li>
                        <li>
                            <label for=""><b>이메일 주소</b></label>
                            <span>{errorMsg.emailname} {errorMsg.emaildomain}</span>
                            <div>
                                <input type="text" name="emailname" placeholder="이메일 주소" ref={refs.emailnameRef} value={formData.emailname} onChange={handleChangeValue} />
                                <span>@</span>       
                                <select name="emaildomain" ref={refs.emaildomainRef} onChange={handleChangeValue}>
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

