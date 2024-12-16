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