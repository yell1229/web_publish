// validate
export const validate = (refs) => {// 객체로 넘어왔을 경우, {idRef, pwdRef} 구조분해할당으로 파라미터를 넘겨도 된다.
    let result = true;
    if(refs.idRef.current.value ===''){
        alert('아이디를 입력');
        refs.idRef.current.focus();
        result = false;
    }else if(refs.pwdRef.current.value ===''){
        alert('패스워드를 입력');
        refs.pwdRef.current.focus();
        result = false;
    }
    return result;
}