
// login form 체크
export const validateLogin = ({idRef, pwdRef}) => {
    let result = true;
    if(idRef.current.value === ''){
        alert('아이디를 입력해주세요');    
        idRef.current.focus();
        result = false;
    }else if(pwdRef.current.value ===''){
        alert('비밀번호를 입력해주세요');  
        pwdRef.current.focus();
        result = false;
    }
    return result;
} 

  // Signup.jsx validate
export const validateSugnup = (refs, msgRefs) => {

    const refEntries = Object.entries(refs);
    const msgRefEntries = Object.entries(msgRefs);

    console.log('refEntries==> ',refEntries); // [['idRef', {…}],['idRef', {…}], ...]
    console.log('msgRefEntries==> ',msgRefEntries);
    
    // map, forEach: 돌리는게 목적. 
    // check가 목적이라 for, for of 사용

    // refEntries 배열객체와 msgRefEntries 배역객체의 인덱스를 동일하게 체크한다.
    for(let i=0; i< refEntries.length; i++){
        const item = refEntries[i];
        const name = item[0];
        const ref = item[1];
        const msgItem = msgRefEntries[i];
        // const msgName = msgItem[0];
        const msgRef = msgItem[1];
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