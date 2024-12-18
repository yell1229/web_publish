import React,{useState, useRef} from 'react';
import { validateFormSignUpNew } from '../../apis/validate.js';
import { initFormNames } from '../../apis/initial.js';

export default function SignUpNew2() {
    const [formData, setFormData] = useState({});
    const [errorMsg, setErrorMsg] = useState({});
    const refs = {
        idRef: useRef(null),
        passRef: useRef(null),
        nameRef: useRef(null),
        phone1Ref: useRef(null),
        phone2Ref: useRef(null),
        phone3Ref: useRef(null),
        addressRef: useRef(null),
        birth1Ref: useRef(null),
        birth2Ref: useRef(null),
        birth3Ref: useRef(null),
        jobRef: useRef(null),
        genderRef: useRef(null),
        emailRef: useRef(null),
        introduceRef: useRef(null)
    }
    //input 입력 값 화면 출력
    const handleChangeForm = (e) => {
        const {name, value} = e.target;
        setFormData({...formData,[name]:value});
    }
    
    
    // valitation
    const validator = () => {
        const msgs = [
            {"name":"id","msg":"id를 입력해주세요"},
            {"name":"pass","msg":"password를 입력해주세요"},
            {"name":"name","msg":"이름를 입력해주세요"},
            {"name":"phone1","msg":"전화번호를 입력해주세요"},
            {"name":"phone2","msg":"전화번호를 입력해주세요"},
            {"name":"phone3","msg":"전화번호를 입력해주세요"},
            {"name":"address","msg":"주소를 입력해주세요"},
            {"name":"birth1","msg":"생일을 입력해주세요"},
            {"name":"birth2","msg":"생일을 입력해주세요"},
            {"name":"birth3","msg":"생일을 입력해주세요"},
            {"name":"job","msg":"직업을 입력해주세요"},
            {"name":"gender","msg":"성별을 입력해주세요"},
            {"name":"email","msg":"이메일을 입력해주세요"},
            {"name":"introduce","msg":"자기소개를 입력해주세요"}
        ];
        const refArray = Object.entries(refs);
        let count = 0;
        for(const item of refArray){
            const name = item[0];
            const ref = item[1];
            
            
            if(ref && ref.current.value===''){
                console.log(name);
                setErrorMsg({...errorMsg,[msgs[count].name]:msgs[count].msg});
                ref.current.focus();
                return false;
            }
            count++;
        }
        
    }
    
    
    //submit
    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log('job',refs.jobRef.current.value);
        // console.log('radio',refs.genderRef.current.value);
        if(refs.jobRef.current.value==='default'){
            setErrorMsg({...errorMsg,['jog']:'job'});
            refs.jobRef.current.focus();
            return false;
        }else if(refs.genderRef.current.value==='f'){
            setErrorMsg({...errorMsg,['gender']:'gender'});
            // ref.genderRef.current.focus();
            return false;
        }
        if(validator()) console.log(formData);
        
    }
    return (
        <form onSubmit={handleSubmit}>
            <ul>
                <li>
                    <span>아이디 : </span><span style={{'font-size':'12px','color':'red'}}>{errorMsg.id}</span>
                    <input type="text" name="id" value={formData.id} ref={refs.idRef} onChange={handleChangeForm}  />
                </li>
                <li>
                    <span>비밀번호 : </span><span style={{'font-size':'12px','color':'red'}}>{errorMsg.pass}</span>
                    <input type="password" name="pass" value={formData.pass} ref={refs.passRef} onChange={handleChangeForm}/>
                </li>
                <li>
                    <span>이름 : </span><span style={{'font-size':'12px','color':'red'}}>{errorMsg.name}</span>
                    <input type="text" name="name" value={formData.name} ref={refs.nameRef} onChange={handleChangeForm}  />
                </li>
                <li>
                    <span>전화 : </span><span style={{'font-size':'12px','color':'red'}}>{errorMsg.phone1}{errorMsg.phone2}{errorMsg.phone3}</span>
                    <input type="text" name="phone1" value={formData.phone1} ref={refs.phone1Ref} onChange={handleChangeForm} />
                    <input type="text" name="phone2" value={formData.phone2} ref={refs.phone2Ref} onChange={handleChangeForm} />
                    <input type="text" name="phone3" value={formData.phone3} ref={refs.phone3Ref} onChange={handleChangeForm} />
                </li>
                <li>
                    <span>주소 : </span><span style={{'font-size':'12px','color':'red'}}>{errorMsg.address}</span>
                    <input type="text" name="address" value={formData.address} ref={refs.addressRef} onChange={handleChangeForm} />
                </li>
                <li>
                    <span>생일 : </span><span style={{'font-size':'12px','color':'red'}}>{errorMsg.birth1}{errorMsg.birth2}{errorMsg.birth3}</span>
                    <input type="text" name="birth1" value={formData.birth1} ref={refs.birth1Ref} onChange={handleChangeForm} />
                    <input type="text" name="birth2" value={formData.birth2} ref={refs.birth2Ref} onChange={handleChangeForm} />
                    <input type="text" name="birth3" value={formData.birth3} ref={refs.birth3Ref} onChange={handleChangeForm} />
                </li>
                <li>
                    <span>직업 : </span><span style={{'font-size':'12px','color':'red'}}>{errorMsg.job}</span>
                    <select name="job" ref={refs.jobRef} onChange={handleChangeForm}>
                        <option value="default">선택</option>
                        <option value="designer">디자이너</option>
                        <option value="frontend">프론트엔드개발자</option>
                        <option value="backend">백엔드개발자</option>
                    </select>
                </li>
                <li><span>성별 : </span><span style={{'font-size':'12px','color':'red'}}>{errorMsg.gender}</span>
                    <label><input type="radio" name="gender" value="m" ref={refs.genderRef} onChange={handleChangeForm}  /> 남</label>
                    <label><input type="radio" name="gender" value="f" ref={refs.genderRef} onChange={handleChangeForm} /> 여</label>
                </li>
                <li>
                    <span>이메일 : </span><span style={{'font-size':'12px','color':'red'}}>{errorMsg.email}</span>
                    <input type="text" name="email" value={formData.email} ref={refs.emailRef} onChange={handleChangeForm} />
                </li>
                <li>
                    <span>자기소개 : </span><span style={{'font-size':'12px','color':'red'}}>{errorMsg.introduce}</span>
                    <textarea name="introduce" value={formData.introduce} ref={refs.introduceRef} onChange={handleChangeForm} ></textarea>
                </li>
            </ul> 
            <div className="btns">
                <button  type="submit">회원가입</button>
                <button  type="reset">취소</button>
            </div>
        </form>
    );
}

