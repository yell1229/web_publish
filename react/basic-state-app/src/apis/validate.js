//CgvLoginForm validation
export const formValidation = (param) => {// js와 컴포넌트의 구분을 잘 해야된다. 함수는 파라미터임.(props X)
    let fromResult = true;
    if(param.refs.idRef.current.value === ''){
        param.setErrorMsg({...param.errorMsg, ['id']:'이름을 입력해주세요'});
        param.refs.idRef.current.focus();
        fromResult = false;
    }else if(param.refs.passwordRef.current.value === ''){
        param.setErrorMsg({...param.errorMsg, ['pwd']:'비밀번호를 입력해주세요'});
        param.refs.passwordRef.current.focus();
        fromResult = false;
    }
    return fromResult;
}

// handleChangeForm
export const handleChange = (name, value, errorMsg, setErrorMsg ) => {
    if(name === 'id'){
        (value === '') ?
            setErrorMsg({...errorMsg, [name]:'이름을 입력해주세요'}):
            setErrorMsg({...errorMsg, [name]:''});

    }else if(name ==='pwd'){
        (value === '') ?
            setErrorMsg({...errorMsg, [name]:'비밀번호를 입력해주세요'}) :
            setErrorMsg({...errorMsg, [name]:''});
        
    }
}

// Login3 유효성 체크 함수
export const validationLogin3 = (param) => {
    let result = true;
    if(param.idRef.current.value === ''){ // idRef === form.id
        param.setErrorMsg({...param.errorMsg , ['id']:"아이디를 입력해주세요"});
        param.idRef.current.focus();
        result = false;
    }else if(param.pwdRef.current.value===''){
        param.setErrorMsg({...param.errorMsg , ['password']:"비밀번호를 입력해주세요"});
        param.pwdRef.current.focus();
        result = false;
    }
    return result;
}


//UserInfo.jsx 유효성 체크 함수
export const validateForm = (refs) => {
    if(refs.nameRef.current.value === ''){
        alert('name를 입력해주세요.');
        refs.nameRef.current.focus();
        return false;
    }else if(refs.addressRef.current.value === ''){
        alert('address를 입력해주세요.');
        refs.addressRef.current.focus();
        return false;
    }else if(refs.ageRef.current.value === ''){
        alert('age를 입력해주세요.');
        refs.ageRef.current.focus();
        return false;
    }else{
        return true;
    }
    
}


// signUp.jsx 유효성 체크 함수
export const validateSignup = (refs, errors, setErrors) => {
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


//SignUpNew.jsx 파일의 valitation
export function validateFormSignUpNew(refs) {
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

    /* 

    배열객체 .map() or 배열 .forEach() 함수는 배열객체를 순회하는 것이
    목적이므로 if 체크 후 focus가 적용되지 않음!!!!

    */
    // const refsValues = Object.values(refs);
    // const refsKeys = Object.keys(refs);
    // console.log(refsValues);
    // console.log(refsEntries);
    const refsEntries = Object.entries(refs);
    let count = 0;
    // refsEntries.forEach((item,index) =>{ // 전체를 순회하기때문에 사용 불가능
    //     const name = item[0];
    //     const ref = item[1];
    //     if(ref.current.value === ''){
    //         alert(msgs[count].msg);
    //         ref.current.focus(); 
    //         return false;
    //     }
    // });
    // count++;
    for(const item of refsEntries){
        const name = item[0];
        const ref = item[1];
        if(ref && ref.current.value === ''){
            alert(msgs[count].msg);
            ref.current.focus();
            return false;
        }
        count++;
    }

    //let checkResult = true;

    // if(refs.idRef.current.value === ''){
    //     alert('id를 입력해주세요');
    //     refs.idRef.current.focus();
    //     checkResult = false;
    // }else if(refs.passRef.current.value === ''){
    //     alert('password를 입력해주세요');
    //     refs.passRef.current.focus();
    //     checkResult = false;
    // }else if(refs.nameRef.current.value === ''){
    //     alert('이름를 입력해주세요');
    //     refs.nameRef.current.focus();
    //     checkResult = false;
    // }else if(refs.phone1Ref.current.value === ''){
    //     alert('전화번호를 입력해주세요');
    //     refs.phone1Ref.current.focus();
    //     checkResult = false;
    // }else if(refs.phone2Ref.current.value === ''){
    //     alert('전화번호를 입력해주세요');
    //     refs.phone2Ref.current.focus();
    //     checkResult = false;
    // }else if(refs.phone3Ref.current.value === ''){
    //     alert('전화번호를 입력해주세요');
    //     refs.phone3Ref.current.focus();
    //     checkResult = false;
    // }else if(refs.addressRef.current.value === ''){
    //     alert('주소를 입력해주세요');
    //     refs.addressRef.current.focus();
    //     checkResult = false;
    // }else if(refs.birth1Ref.current.value === ''){
    //     alert('생일을 입력해주세요');
    //     refs.birth1Ref.current.focus();
    //     checkResult = false;
    // }else if(refs.birth2Ref.current.value === ''){
    //     alert('생일을 입력해주세요');
    //     refs.birth2Ref.current.focus();
    //     checkResult = false;
    // }else if(refs.birth3Ref.current.value === ''){
    //     alert('생일을 입력해주세요');
    //     refs.birth3Ref.current.focus();
    //     checkResult = false;
    // }else if(refs.jobRef.current.value === ''){
    //     alert('직업을 입력해주세요');
    //     refs.jobRef.current.focus();
    //     checkResult = false;
    // }else if(refs.genderRef.current.value === ''){
    //     alert('성별을 입력해주세요');
    //     refs.genderRef.current.focus();
    //     checkResult = false;
    // }else if(refs.emailRef.current.value === ''){
    //     alert('이메일을 입력해주세요');
    //     refs.emailRef.current.focus();
    //     checkResult = false;
    // }else if(refs.introduceRef.current.value === ''){
    //     alert('성별을 입력해주세요');
    //     refs.introduceRef.current.focus();
    //     checkResult = false;
    // }
    // return checkResult;
}