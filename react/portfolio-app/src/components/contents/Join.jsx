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
    const [formData, setFormData] = useState({});
    // input 화면 노출 및 value 저장
    const handleChangeValue = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]:value});
    }
    // validation

    //submit
    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div className="join_area">
            <form onSubmit={handleSubmit}>
                <div>
                    <div>아이디 <span></span></div>
                    <input type="text" name="id" value={formData.id} onChange={handleChangeValue} ref={refs.id} />
                    <button type="button" className='btn_check'>중복확인</button>
                </div>
                <div>
                    <div>비밀번호<span></span></div>
                    <input type="password" name="pwd" value={formData.pwd} onChange={handleChangeValue} ref={refs.pwd} />
                </div>
                <div>
                    <div>비밀번호 확인<span></span></div>
                    <input type="password" name="cpwd" value={formData.cpwd} onChange={handleChangeValue} ref={refs.cpwd} />
                </div>
                <div>
                    <div>이름<span></span></div>
                    <input type="text" name="name" value={formData.name} onChange={handleChangeValue} ref={refs.name} />
                </div>
                <div>
                    <div>전화번호<span></span></div>
                    <input type="text" placeholder='010-0000-0000' name="phone" value={formData.phone} onChange={handleChangeValue} ref={refs.phone} />
                </div>
                <div>
                    <div>이메일 주소<span></span></div>
                    <input type="email" placeholder='example@naver.com' name="email" value={formData.email} onChange={handleChangeValue} ref={refs.email} />
                    <select name="domain" onChange={formData.domain} ref={refs.domain}>
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

