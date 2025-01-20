import React,{useState, useRef} from 'react';
import '../styles/signup.css';

export default function Signup() {
    const names = ["id","pwd","cpwd","name","phone","emailname"];
    const namesKr = ["아이디","패스워드","패스워드확인","이름","전화번호","이메일이름"];
    const placeholderList = ["아이디를 입력해주세요","패스워드를 입력해주세요","패스워드확인 해주세요","이름을 입력해주세요","전화번호를 입력해주세요","이메일이름을 입력해주세요"];
    const initForm  = names.reduce((acc, name) => {
        acc[name] = '';
        return acc;
    },{});
    //console.log('initForm==>',initForm);
    
    const refs = useRef(
        names.reduce((acc, name) => {
            acc[name] = React.createRef();
            return acc;
        },{})
    );
    refs.current['emaildomainRef'] = React.createRef();
    console.log('refs ==>',refs);

    const msgRefs = useRef(
        names.reduce((acc,name) => {
            acc[name.concat('MsgRef')] = React.createRef();
            return acc;
        },{})
    );
    //console.log('msgRefs==>',msgRefs);

    const namesKor = names.reduce((acc, name, idx) =>{
        acc[name] = namesKr[idx];
        return acc;
    },{});
    //console.log('namesKor ==>',namesKor);

    const placeholderKor = names.reduce((acc, name, idx) =>{
        acc[name] = placeholderList[idx];
        return acc;
    },{});
    //console.log('namesKor ==>',namesKor);

    const [formData, setFormData] = useState(initForm);
    // input value
    const handleChangeForm = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});

        // initMsg.map((item) => {
            
        //     if(item.name === name){
        //         if(value === '') item.ref.current.classList.add('on')
        //             else  item.ref.current.classList.remove('on')  
        //     }
        // })
    }


    // validate
    const validate = () => {
        const refArr = Object.entries(refs.current);
        
        const msgRefArr = Object.entries(msgRefs.current);
        
        for(let i=0; i< refArr.length; i++){
            const refItem = refArr[i];
            const name = refItem[0];
            const ref = refItem[1];
            let msgItem, msgRef = null;
            if(i < refArr.length -1){
                msgItem = msgRefArr[i];
                // msgName = msgItem[0];
                msgRef = msgItem[1];
            }
            if(name !== 'emaildomainRef'){
                if(ref.current.value === ''){
                    msgRef.current.classList.add('on');
                    ref.current.focus();
                    return false;
                }
            }else{
                if(ref.current.value === 'default'){
                    msgRef.current.classList.add('on');
                    ref.current.focus();
                    return false;
                }
            }
        }
        return true;
    }

    // id check
    const handleDblCheck = () => {
        if(refs.idRef.current.value ===''){
            msgRefs.msgidRef.current.classList.add('on');
        }else if(refs.idRef.current.value ==='test'){
            msgRefs.msgidRef.current.classList.add('on');
        }else{
            msgRefs.msgidRef.current.value = '사용가능한 id 입니다.';
            msgRefs.msgidRef.current.classList.add('ok');
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(validate()) console.log(formData);
        
    }

    return (
        <div className="content">
            <h1 className="center-title">SIGINUP</h1>
            <form className="signup-form" onSubmit={handleSubmit}>
                <ul>
                    {
                        names && names.map((name) => (
                            <li>
                                <label for="" ><b>{namesKor[name]}</b></label>
                                <span ref={msgRefs.current[name.concat('MsgRef')]}>아이디를 입력해주세요</span>
                                {(name === 'emailname') ? (
                                    <>
                                    <div>
                                        <input type="text" 
                                                name={name}
                                                ref={refs.current[name.concat('Ref')]}
                                                onChange={handleChangeForm}
                                                placeholder={placeholderKor[name]} />
                                        <span>@</span>       
                                        <select name="emaildomain" 
                                                id="emaildomain"
                                                ref={refs.emaildomainRef}
                                                onChange={handleChangeForm}  >
                                            <option value="default">선택</option>
                                            <option value="naver.com">naver.com</option>
                                            <option value="gmail.com">gmail.com</option>
                                            <option value="daum.net">daum.net</option>
                                        </select>
                                    </div>
                                    </>) : 
                                    (<>
                                    <div>
                                        <input type="text" 
                                                name={name}
                                                ref={refs.current[name.concat('Ref')]}
                                                onChange={handleChangeForm}
                                                placeholder ={placeholderKor[name]} />
                                        { name ==='id' &&
                                            <>
                                            <button type="button" onClick={handleDblCheck}>중복확인</button>
                                            <input type="hidden" id="idCheckResult" value="default" />
                                            </>
                                        }
                                    </div>
                                    </>
                                )}
                            </li>
                        ))
                    }
                    <li>
                        <button type="submit">가입하기</button>
                        <button type="reset">가입취소</button>
                    </li>
                </ul>
            </form>
        </div>
    );
}


