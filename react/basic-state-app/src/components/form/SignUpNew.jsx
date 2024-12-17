import React,{useState, useRef} from 'react';
import { validateFormSignUpNew } from '../../apis/validate.js';
import { initFormNames } from '../../apis/initial.js';

export default function SignUpNew() {
    const refs = { // 객체 형태로 선언한다. useRef(null) 힙에 생성되는 객체의 값을 가져오기 때문에, 브라우저에서 실행될 때 주소값을 넘겨준다.
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
    };

    // 배열 + reduce() 함수 사용
    // const refArray = [ 'idRef', 'passRef'];
    // nameRef, phone1Ref, phone2Ref, phone3Ref, addressRef, birth1Ref, birth2Ref, birth3Ref ,jobRef ,genderRef, emailRef, introduceRef];

    // react 전용 useRef 함수는 custom hook 등을 활용
    // const refs2 = refArray.reduce((acc, key) => {
    //     acc[key] = useRef(null); // 함수의 연산식이기 때문에  : 가 아닌 = 할당을 한다. // useRef는 콜백함수에 들어갈 수 없어서 사용불가.
    //     return acc;
    // }, {}); // acc={}

    

    // const init2 = {// input value는 문자로 인식하기 때문에 ''
    //     "id":"",
    //     "pass":"",
    //     "name":"",
    //     "phone1":"",
    //     "phone2":"",
    //     "phone3":"",
    //     "address":"",
    //     "birth1":"",
    //     "birth2":"",
    //     "birth3":"",
    //     "job":"",
    //     "gender":"",
    //     "email":"",
    //     "introduce":"",
    // }
    const initArray = [ "id","pass" ,"name" ,"phone1" ,"phone2", ,"phone3" ,"address" ,"birth1" ,"birth2" ,"birth3" ,"job" ,"gender" ,"email" ,"introduce"];
    // const init = initArray.reduce((acc, key) => {
    //     acc[key] = '';
    //     return acc;
    // },{});
    
    console.log(initFormNames(initArray));
    
    const [formData, setFormData] = useState(initFormNames(initArray));

    // data 받아서 input에 노출
    const handleChangeForm = (e) =>{
        const {name,value} = e.target;
        setFormData({...formData,[name]:value}); // formData 의 주소를 힙에서 가져옴. ...formData는 주소의 값을 가져와서 펼쳐놓는다.
    }
    // validation
    const validation = () => {
        let result = true;
        // 입력시 공백일 때 경고문
        if(refs.idRef.current.value === ''){
            alert('id를 다시 입력해주세요');
            refs.idRef.current.focus();
            result = false;
        }
        return result;
    } 
    // 전송
    const sendSubmit = (e) => {
        e.preventDefault();
        if(validateFormSignUpNew(refs)) console.log(formData);
        
    }


    return (
        <form onSubmit={sendSubmit}>
            <ul>
                <li>
                    <span>아이디 : </span>
                    <input type="text" name="id" value={formData.id} onChange={handleChangeForm} ref={refs.idRef} />
                </li>
                <li>
                    <span>비밀번호 : </span>
                    <input type="password" name="pass" value={formData.pass} onChange={handleChangeForm} ref={refs.passRef} />
                </li>
                <li>
                    <span>이름 : </span>
                    <input type="text" name="name" value={formData.name} onChange={handleChangeForm} ref={refs.nameRef} />
                </li>
                <li>
                    <span>전화 : </span>
                    <input type="text" name="phone1" value={formData.phone1} onChange={handleChangeForm} ref={refs.phone1Ref} />
                    <input type="text" name="phone2" value={formData.phone2} onChange={handleChangeForm} ref={refs.phone2Ref} />
                    <input type="text" name="phone3" value={formData.phone3} onChange={handleChangeForm} ref={refs.phone3Ref} />
                </li>
                <li>
                    <span>주소 : </span>
                    <input type="text" name="address" value={formData.address} onChange={handleChangeForm} ref={refs.addressRef} />
                </li>
                <li>
                    <span>생일 : </span>
                    <input type="text" name="birth1" value={formData.birth1} onChange={handleChangeForm} ref={refs.birth1Ref} />
                    <input type="text" name="birth2" value={formData.birth2} onChange={handleChangeForm} ref={refs.birth2Ref} />
                    <input type="text" name="birth3" value={formData.birth3} onChange={handleChangeForm} ref={refs.birth3Ref} />
                </li>
                <li>
                    <span>직업 : </span>
                    <select name="job" onChange={handleChangeForm} ref={refs.jobRef}>
                        <option value="derault">선택</option>
                        <option value="designer">디자이너</option>
                        <option value="frontend">프론트엔드개발자</option>
                        <option value="backend">백엔드개발자</option>
                    </select>
                </li>
                <li><span>성별 : </span>
                    <label><input type="radio" name="gender" value="m"  onChange={handleChangeForm} ref={refs.genderRef} /> 남</label>
                    <label><input type="radio" name="gender" value="f"  onChange={handleChangeForm} ref={refs.genderRef} /> 여</label>
                </li>
                <li>
                    <span>이메일 : </span>
                    <input type="text" name="email" value={formData.email} onChange={handleChangeForm} ref={refs.emailRef} />
                </li>
                <li>
                    <span>자기소개 : </span>
                    <textarea name="introduce" id="" onChange={handleChangeForm} ref={refs.introduceRef} value={formData.introduce}></textarea>
                </li>
            </ul> 
            <div className="btns">
                <button  type="submit">회원가입</button>
                <button  type="reset">취소</button>
            </div>
        </form>
    );
}

