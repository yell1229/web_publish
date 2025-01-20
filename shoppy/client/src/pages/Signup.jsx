import React,{useState, useRef} from 'react';
import '../styles/signup.css';
import {validateSugnup, handleDuplicateIdCheck , handlePasswordCheck} from '../utils/funcValidate.js';

export default function Signup() {
    const [idCheckResult, setIdCheckResult] = useState('default');
    // 반복을 피하기 위한 배열
    const names= ["id", "pwd", "cpwd", "name", "phone", "emailname"];
    const nameLabels = ['아이디','비밀번호','비밀번호확인','이름','전화번호','이메일 주소',];
    const placeholdersKor = ['아이디 입력(6~20자)','비밀번호','비밀번호확인','이름','전화번호','이메일 주소',];
    let labels = names.reduce((acc,label,idx) => {
        acc[label] = nameLabels[idx];
        return acc;
    },{});
    // console.log('labels ===> ',labels);
    const placeholders = names.reduce((acc, name, idx) => {
        acc[name] = placeholdersKor[idx];
        return acc;
    },{});
    console.log('placeholdersKor ===> ',placeholders);
    // 방법1. names를 통해서 initFormData를 만듬.
    // let initFormData = {}
    // names.forEach((name) => {
    //     initFormData = {...initFormData, [name]:""};
    // });
    // console.log('initFormData ===> ',initFormData);
    
    // 방법2. reduce(콜백함수, 리턴타입정의) // https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
    let initFormData = names.reduce(
        (acc, name) =>{
            //실행코드
            acc[name] = ""; // 리턴값은 들어가는 내용에 따라서 정해진다. {'id':'', ...} 형태로 리턴됨
            return acc;
        },{} // 기본값은 생략 가능하지만, 리턴형태가 무엇인지 써줘야 한다.{}
    );
    // console.log('init reduce ===> ',initFormData);

    // let refs = names.reduce(
    //     (acc, name) =>{
    //         acc[name.concat('Ref')] = React.createRef(); // useRef(null) 훅을 바로 호출X, 함수를 통해 객체를 생성해서 사용함. 커스텀 훅 사용가능.
    //         return acc;
    //     },{}
    // );

    let refs = useRef(
        names.reduce(
        (acc, name) =>{
            acc[name.concat('Ref')] = React.createRef(); // useRef(null) 훅을 바로 호출X, 함수를 통해 객체를 생성해서 사용함. 커스텀 훅 사용가능.
            return acc;
        },{})
    );
    refs.current.emaildomainRef = React.createRef();
    console.log('refs ====> ',refs);
    

    console.log('refs reduce ===> ',refs);

    let msgRefs = useRef(
            names.reduce((acc, name) =>{
            acc[name.concat('MsgRef')] = React.createRef();
            return acc;
        },{})
    );
    console.log('msgRefs reduce ===> ',msgRefs);

    const initMsg = [
        {"name":"id","ref":refs.idRef},
        {"name":"pwd","ref":refs.pwdRef},
        {"name":"cpwd","ref":refs.cpwdRef},
        {"name":"name","ref":refs.nameRef},
        {"name":"phone","ref":refs.phoneRef},
        {"name":"emailname","ref":refs.emailnameRef},
        {"name":"emaildomai","ref":refs.emaildomainRef}
    ];

    const [formData, setFormData] = useState(initFormData);

    // input change event
    const handleChangeForm = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]:value});
        // initMsg.map((item) =>{
        //     if(item.name === name) {
        //         if(value ==='') item.ref.current.parentElement.previousElementSibling.classList.add('on');
        //         else{item.ref.current.parentElement.previousElementSibling.classList.remove('on');}
        //     }
        // })
    }

    // 중복확인
    
    // const handleDuplicateIdCheck = () => {
    //     const idCheck='test'; // db 연동 로직 들어감.
    //     if(refs.current['idRef'].current.value === '' ){
    //         msgRefs.current['idMsgRef'].current.innerHTML = '아이디를 입력해주세요';
    //         msgRefs.current['idMsgRef'].current.classList.add('on');
    //         refs.current['idRef'].current.focus();
    //         return false;
    //     }else{
    //         if(refs.current['idRef'].current.value === idCheck){
    //             msgRefs.current['idMsgRef'].current.innerHTML = '사용중인 아이디입니다.';
    //             msgRefs.current['idMsgRef'].current.classList.add('on');
    //             refs.current['idRef'].current.focus();
    //             return false;
    //         }else{
    //             msgRefs.current['idMsgRef'].current.innerHTML = '사용가능한 아이디입니다.';
    //             msgRefs.current['idMsgRef'].current.style.setProperty('color','green');
    //             msgRefs.current['idMsgRef'].current.classList.add('on');
    //             return false;
    //         }
    //     }
    // }

    // password check
    // const handlePasswordCheck = () => {
    //     const pwdRef = refs.current['pwdRef'];
    //     const cpwdRef = refs.current['cpwdRef'];
    //     const pwdMsgRef = msgRefs.current['pwdMsgRef'];
    //     const cpwdMsgRef = msgRefs.current['cpwdMsgRef'];

    //     if(pwdRef.current.value === ''){
    //         pwdMsgRef.current.style.setProperty('color','red');
    //         pwdMsgRef.current.classList.add('on');
    //         pwdRef.current.focus();
    //         return false;
    //     }if(cpwdRef.current.value === ''){
    //         cpwdMsgRef.current.style.setProperty('color','red');
    //         cpwdMsgRef.current.classList.add('on');
    //         cpwdRef.current.focus();
    //         return false;
    //     }else{
    //         if(pwdRef.current.value === cpwdRef.current.value){
    //             cpwdMsgRef.current.style.setProperty('color','green');
    //             cpwdMsgRef.current.classList.add('on');
    //             refs.current['nameRef'].current.focus();
    //             return false;
    //         }else{
    //             cpwdMsgRef.current.style.setProperty('color','red');
    //             cpwdMsgRef.current.classList.add('on');
    //             cpwdRef.current.focus();
    //             return false;
    //         }
    //     }
    // }

    // validateSugnup : funcValidate.js

    const handleSubmit = (e) => {
        e.preventDefault();

        if(validateSugnup(refs, msgRefs)){
            if(idCheckResult === 'default'){
                alert('중복확인을 진행해주세요');
                return false;
            }else{
                console.log(formData);
            }
        } 
    }
    return (
        <div className="content">
            <h1 className="center-title">SIGINUP</h1>
            <form className="signup-form" onSubmit={handleSubmit}>
                <ul>
                    {
                        names && names.map((name) => // jsx에서는 바로바로 리턴을 해야해서 {} 대신 () 사용
                        (
                            <li>
                                <label for="" ><b>{labels[name]}</b></label>
                                <span ref={msgRefs.current[name.concat('MsgRef')]}>{labels[name]}를 입력해주세요</span>
                                <div>
                                    {
                                    (name === 'emailname') ? 
                                    (
                                        <>
                                        <input type="text" 
                                                name={name}
                                                // id = {name}
                                                ref={refs.current[name.concat('Ref')]} // refs.id
                                                onChange={handleChangeForm}
                                                placeholder={placeholders[name]} />
                                        <span>@</span>       
                                        <select name="emaildomain" 
                                                ref={refs.current['emaildomainRef']} onChange={handleChangeForm}>
                                            <option value="default">선택</option>
                                            <option value="naver.com">naver.com</option>
                                            <option value="gmail.com">gmail.com</option>
                                            <option value="daum.net">daum.net</option>
                                        </select>
                                        </>
                                    ):
                                    (
                                        <>
                                        <input type={(name === 'pwd' || name === 'cpwd') ? ('password') : ('text')}
                                                name={name}
                                                // id={name}
                                                ref={refs.current[name.concat('Ref')]}
                                                onChange={handleChangeForm}
                                                onBlur={ ( name === 'cpwd') ? () => {
                                                        handlePasswordCheck(
                                                                refs.current['pwdRef'],
                                                                refs.current['cpwdRef'],
                                                                msgRefs.current['pwdMsgRef'],
                                                                msgRefs.current['cpwdMsgRef'], 
                                                                refs.current['nameRef']) 
                                                            } : null }
                                                placeholder = {placeholders[name]} />
                                        {
                                        name === 'id' && 
                                            <>  {/* 콜백함수 형태로 넘기지 않으면 브라우저에서 실행됨. 리엑트로 넘어오지 않음. */}
                                                <button type="button" onClick={() => 
                                                    handleDuplicateIdCheck(refs.current['idRef'], msgRefs.current['idMsgRef'], refs.current['pwdRef'], setIdCheckResult)
                                                    }>중복확인</button> 
                                                <input type="hidden" value={idCheckResult} />
                                            </>
                                        }
                                        
                                        </>
                                    ) 
                                }
                                </div>
                            </li>
                            
                        ))
                    }
                    
                    {/* start of map  */}
                    {/* {// jsx 내부에서는 map, filter 사용 /  삼항연산자
                        names && names.map((name) => (
                        //  (name === 'emailname') ? (이메일주소 폼) : (일반 폼);
                            
                            <li>
                                <label for=""><b>이메일 주소</b></label>
                                <span ref={msgRefs.emailMsgRef}>이메일 주소를 입력해주세요</span>
                                <div>
                                    { name === 'emailname' ? 
                                    (<>
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
                                    ) :
                                    (<>
                                        <input type="text" 
                                                name="id"
                                                id="id"
                                                ref={refs.idRef}
                                                onChange={handleChangeForm}
                                                placeholder = "아이디 입력(6~20자)" />
                                        {(name === 'id') ?<button type="button" >중복확인</button> :'' }
                                        <input type="hidden" id="idCheckResult" value="default" />
                                    </>
                                    )}
                                </div>
                            </li>
                            
                        ))
                    }  */}
                    {/* end of map  */}
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
                            <button type="button" >중복확인</button>
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
                        <span ref={msgRefs.emailMsgRef}>이메일 주소를 입력해주세요</span>
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