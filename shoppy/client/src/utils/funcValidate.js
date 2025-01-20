
// login form 체크
export const validateLogin = ({idRef, pwdRef},{msgRef}) => {
    let result = true;
    if(idRef.current.value === ''){
        // alert('아이디를 입력해주세요');    
        msgRef.current.style.setProperty('color','red');
        idRef.current.focus();
        result = false;
    }else if(pwdRef.current.value ===''){
        //alert('비밀번호를 입력해주세요');  
        msgRef.current.style.setProperty('color','red');
        pwdRef.current.focus();
        result = false;
    }else{
        msgRef.current.style.setProperty('color','white');
    }
    return result;
} 

  // Signup.jsx validate
export const validateSugnup = (refs, msgRefs) => {
    console.log('fn refs ==> ',refs);
    console.log('fn msgRefs ==> ',msgRefs);
    
    const refEntries = Object.entries(refs.current);
    const msgRefEntries = Object.entries(msgRefs.current);

    console.log('refEntries==> ',refEntries); // [['idRef', {…}],['idRef', {…}], ...]
    console.log('msgRefEntries==> ',msgRefEntries);
    
    // map, forEach: 돌리는게 목적. 
    // check가 목적이라 for, for of 사용

    // refEntries 배열객체와 msgRefEntries 배역객체의 인덱스를 동일하게 체크한다.
    for(let i=0; i< refEntries.length; i++){
        const item = refEntries[i];
        const name = item[0];
        const ref = item[1];
        let msgItem, msgRef = null;
        if(i < refEntries.length - 1){
            msgItem = msgRefEntries[i];
            // msgName = msgItem[0];
            msgRef = msgItem[1];
        }
        if(name !== 'emaildomainRef'){ // '' 빈 값 으로 체크함
            if(ref.current.value === ''){
                //msgRef.current.style.setProperty('color','red');
                msgRef.current.classList.add('on');
                ref.current.focus();
                return false; // for문이 다 돌기 때문에 해당 위치에서 리턴해야됨.
            }
        }else{   // default로 체크함
            if(ref.current.value === 'default'){
                alert('이메일 주소를 선택해주세요.')
                ref.current.focus();
                return false;
            }
        }
        
    }
    return true;

    // if(refs.idRef.current.value===''){
    //     refs.idRef.current.parentElement.previousElementSibling.classList.add('on');
    //     refs.idRef.current.focus();
    //     result = false;
    // }else  if(refs.pwdRef.current.value===''){
    //     refs.pwdRef.current.parentElement.previousElementSibling.classList.add('on');
    //     refs.pwdRef.current.focus();
    //     result = false;
    // }else  if(refs.cpwdRef.current.value===''){
    //     refs.cpwdRef.current.parentElement.previousElementSibling.classList.add('on');
    //     refs.cpwdRef.current.focus();
    //     result = false;
    // }else  if(refs.nameRef.current.value===''){
    //     refs.nameRef.current.parentElement.previousElementSibling.classList.add('on');
    //     refs.nameRef.current.focus();
    //     result = false;
    // }else  if(refs.phoneRef.current.value===''){
    //     refs.phoneRef.current.parentElement.previousElementSibling.classList.add('on');
    //     refs.phoneRef.current.focus();
    //     result = false;
    // }
    // else  if(refs.emailnameRef.current.value===''){
    //     refs.emailnameRef.current.parentElement.previousElementSibling.classList.add('on');
    //     refs.emailnameRef.current.focus();
    //     result = false;
    // }
    // else  if(refs.emaildomainRef.current.value===''){
    //     refs.emaildomainRef.current.parentElement.previousElementSibling.classList.add('on');
    //     refs.emaildomainRef.current.focus();
    //     result = false;
    // }

}

// id 중복체크
export const handleDuplicateIdCheck = (idRef, idMsgRef, pwdRef, setIdCheckResult) => { // 구조분해할당으로 넘어올 수 없음. 변수로 넘긴다. 순서 중요.
    // console.log('refs',refs);
    const idCheck='test'; // db 연동 로직 들어감.
    if(idRef.current.value === '' ){
        idMsgRef.current.innerHTML = '아이디를 입력해주세요';
        idMsgRef.current.style.setProperty('color','red');
        idMsgRef.current.classList.add('on');
        idRef.current.focus();
        return false;
    }else{
        if(idRef.current.value === idCheck){
            idMsgRef.current.innerHTML = '사용중인 아이디입니다.';
            idMsgRef.current.style.setProperty('color','red');
            idMsgRef.current.classList.add('on');
            idRef.current.focus();
            return false;
        }else{
           // idCheckResultRef.current.value = 'complete'; // 사용이 가능한 id 일때 값 변경.
            setIdCheckResult('complete');
            idMsgRef.current.innerHTML = '사용가능한 아이디입니다.';
            idMsgRef.current.style.setProperty('color','green');
            idMsgRef.current.classList.add('on');
            pwdRef.current.focus(); // 브라우저의 포커스가 이동되기 전 value값 변경.
            return false;
        }
    }
}

// password check
export const handlePasswordCheck = (pwdRef, cpwdRef, pwdMsgRef, cpwdMsgRef, nameRef) => {

    if(pwdRef.current.value === ''){
        pwdMsgRef.current.style.setProperty('color','red');
        pwdMsgRef.current.classList.add('on');
        pwdRef.current.focus();
        return false;
    }if(cpwdRef.current.value === ''){
        cpwdMsgRef.current.style.setProperty('color','red');
        cpwdMsgRef.current.classList.add('on');
        cpwdRef.current.focus();
        return false;
    }else{
        if(pwdRef.current.value === cpwdRef.current.value){
            cpwdMsgRef.current.style.setProperty('color','green');
            cpwdMsgRef.current.classList.add('on');
            nameRef.current.focus();
            return false;
        }else{
            cpwdMsgRef.current.style.setProperty('color','red');
            cpwdMsgRef.current.classList.add('on');
            cpwdRef.current.focus();
            return false;
        }
    }
}