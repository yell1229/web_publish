
//sighUp.jsx 에러 체크 함수
export const errorCheckSignup = (name,value,errors, setErrors) => {
    //오브젝트 리터럴로 만들어서 코드를 줄인다.
    const names = [
        {'name':'id', 'mag':'아이디를 입력해주세요'},
        {'name':'pwd', 'mag':'비밀번호를 입력해주세요'},
        {'name':'cpwd', 'mag':'비밀번호를 입력해주세요'},
        {'name':'name', 'mag':'이름을 입력해주세요'},
        {'name':'phone', 'mag':'전화번호를 입력해주세요'},
        {'name':'emailname', 'mag':'이메일을 입력해주세요'},
        {'name':'emaildomain', 'mag':'도메인을 확인 해주세요'}
    ];
    names.map((item) => 
        (item.name === name) ? (
            (value ==='') ? setErrors({...errors,[item.name]:item.mag}): setErrors({...errors,[item.name]:''})
        ) : '' 
    );
    // if(name === 'id'){
    //     (value ==='') ? setErrors({...errors,['id']:'아이디를 입력해주세요'}):
    //     setErrors({...errors,['id']:''});
    // }else if(name === 'pwd'){
    //     (value ==='') ? setErrors({...errors,['pwd']:'비밀번호를 입력해주세요'}):
    //     setErrors({...errors,['pwd']:''});
    // }else if(name === 'cpwd'){
    //     (value ==='') ? setErrors({...errors,['cpwd']:'비밀번호를 입력해주세요'}):
    //     setErrors({...errors,['cpwd']:''});
    // }else if(name === 'name'){
    //     (value ==='') ? setErrors({...errors,['name']:'이름을 입력해주세요'}):
    //     setErrors({...errors,['name']:''});
    // }else if(name === 'phone'){
    //     (value ==='') ? setErrors({...errors,['phone']:'비밀번호를 입력해주세요'}):
    //     setErrors({...errors,['phone']:''});
    // }else if(name === 'emailname'){
    //     (value ==='') ? setErrors({...errors,['emailname']:'비밀번호를 입력해주세요'}):
    //     setErrors({...errors,['emailname']:''});
    // }else if(name === 'emaildomain'){
    //     (value ==='default') ? setErrors({...errors,['emaildomain']:'비밀번호를 입력해주세요'}):
    //     setErrors({...errors,['emaildomain']:''});
    // }
} 