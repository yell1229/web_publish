import React,{useState, useRef} from 'react';

export default function Join() {
    const refs = {
        idRef: useRef(null),
        pwdRef: useRef(null),
        cpwdRef: useRef(null),
        nameRef: useRef(null),
        phoneRef: useRef(null),
        emailRef: useRef(null),
        domainRef: useRef(null)
    };
    const [formData, setFormData] = useState({}); //{id,test1}
    const [errorMsg, setErrorMsg] = useState({}); // {name:id, msg:아이디를 입력해주세요}
    const msgList = [
        {"name":"id", msg:"아이디를 입력해주세요"},
        {"name":"idcheck", msg:"다른 아이디를 사용해주세요"},
        {"name":"pwd", msg:"비밀번호를 입력해주세요"},
        {"name":"cpwd", msg:"비밀번호를 확인해주세요"},
        {"name":"name", msg:"이름을 입력해주세요"},
        {"name":"phone", msg:"전화번호를 입력해주세요"},
        {"name":"email", msg:"이메일주소를 입력해주세요"},
        {"name":"domain", msg:"도메인을 선택해주세요"}
    ];



    // input 화면 노출 및 value 저장
    const handleChangeValue = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]:value});
        msgList.forEach((item) => {
            if(item.name === name){
                (value === '') ?
                        setErrorMsg({...errorMsg,[item.name]:item.msg }) :
                        setErrorMsg({...errorMsg,[item.name]:'' })
            }
            
        })

    }
    // validation
    const handleValidation = () => {
        const newRef = Object.entries(refs);
        let count = 0
        for (const item of newRef){
            const name = item[0];
            const ref =  item[1];
            
            if(ref.current.value === ''){
                setErrorMsg({...errorMsg, [msgList[count].name] : msgList[count].msg});
                ref.current.focus();
                return false;
            }
            count++;
        }
        
    }
    // id check btn
    const dblCheck = () => {
        // bd check => test1
       if(refs.idRef.current.value === 'test1'){
            setErrorMsg({...errorMsg, [msgList[1].name]:msgList[1].msg});
            refs.idRef.current.focus();
       } else{
            setErrorMsg({...errorMsg, [msgList[1].name]:''});
       }
    }
    //submit
    const handleSubmit = (e) => {
        e.preventDefault();
        if(handleValidation()) 
        console.log(formData);      
    }

    return (
        <div className="join_area">
            <form onSubmit={handleSubmit}>
                <div>
                    <div>아이디 <span>{errorMsg.id}{errorMsg.idcheck}</span></div>
                    <input type="text" placeholder="아이디 입력(6~20자)" name="id" value={formData.id} onChange={handleChangeValue} ref={refs.idRef} />
                    <button type="button" className='btn_check' onClick={dblCheck}>중복확인</button>
                </div>
                <div>
                    <div>비밀번호<span>{errorMsg.pwd}</span></div>
                    <input type="password" placeholder="비밀번호 입력(문자,숫자,특수문자 포함 6~12자)"  name="pwd" value={formData.pwd} onChange={handleChangeValue} ref={refs.pwdRef} />
                </div>
                <div>
                    <div>비밀번호 확인<span>{errorMsg.cpwd}</span></div>
                    <input type="password" placeholder="비밀번호 재입력" name="cpwd" value={formData.cpwd} onChange={handleChangeValue} ref={refs.cpwdRef} />
                </div>
                <div>
                    <div>이름<span>{errorMsg.name}</span></div>
                    <input type="text" name="name" placeholder="이름을 입력해주세요" value={formData.name} onChange={handleChangeValue} ref={refs.nameRef} />
                </div>
                <div>
                    <div>전화번호<span>{errorMsg.phone}</span></div>
                    <input type="text" placeholder='010-0000-0000' name="phone" value={formData.phone} onChange={handleChangeValue} ref={refs.phoneRef} />
                </div>
                <div>
                    <div>이메일 주소<span>{errorMsg.email} {errorMsg.domain}</span></div>
                    <input type="text" className="email" placeholder='example@naver.com' name="email" value={formData.email} onChange={handleChangeValue} ref={refs.emailRef} />
                    <select name="domain" onChange={formData.domain} ref={refs.domainRef}>
                        <option value="default">선택</option>
                        <option value="naver.com">네이버</option>
                        <option value="google.com">구글</option>
                    </select>
                </div>
                <div className="btm_btns">
                    <button type="submit">확인</button>
                    <button type="reset">취소</button>
                </div>
            </form>
        </div>
    );
}

